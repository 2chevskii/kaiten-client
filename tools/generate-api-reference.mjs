import {createHash} from 'node:crypto';
import {readFile, readdir, mkdir, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cachePath = 'docs/.vitepress/cache/api-reference.json';
const generatedRoots = [
  'docs/reference/rest',
  'docs/reference/scim',
  'docs/ru/reference/rest',
  'docs/ru/reference/scim',
];
const clients = [
  {file: 'src/client.ts', name: 'rest', className: 'KaitenClient'},
  {file: 'src/scim.ts', name: 'scim', className: 'KaitenScimClient'},
];

const hash = content => createHash('sha256').update(content).digest('hex');
const absolute = file => path.join(root, file);

async function filesIn(directory) {
  try {
    const entries = await readdir(absolute(directory), {withFileTypes: true});
    return (
      await Promise.all(
        entries.map(entry => {
          const file = `${directory}/${entry.name}`;
          return entry.isDirectory() ? filesIn(file) : [file];
        }),
      )
    )
      .flat()
      .sort();
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function readOptional(file) {
  try {
    return await readFile(absolute(file), 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error;
  }
}

async function inputHash() {
  const files = [
    ...(await filesIn('src')).filter(file => file.endsWith('.ts')),
    'tools/generate-api-reference.mjs',
    'tsconfig.json',
    'package-lock.json',
  ].sort();
  const digest = createHash('sha256').update(`typescript:${ts.version}\n`);
  for (const file of files) {
    digest
      .update(`${file}\0`)
      .update(await readFile(absolute(file)))
      .update('\0');
  }
  return digest.digest('hex');
}

function markdownText(text) {
  return text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function docsFor(symbol, checker) {
  const description = ts
    .displayPartsToString(symbol.getDocumentationComment(checker))
    .trim();
  const tags = symbol.getJsDocTags(checker);
  // Some declarations have consecutive JSDoc blocks; TypeScript exposes only
  // the last block through getJsDocTags, so preserve modifiers from all blocks.
  for (const declaration of symbol.declarations ?? []) {
    for (const doc of declaration.jsDoc ?? []) {
      for (const tag of doc.tags ?? []) {
        const name = tag.tagName.text;
        if (
          ['beta', 'deprecated'].includes(name) &&
          !tags.some(existing => existing.name === name)
        ) {
          tags.push({
            name,
            text:
              typeof tag.comment === 'string'
                ? [{text: tag.comment, kind: 'text'}]
                : [],
          });
        }
      }
    }
  }
  return {
    description,
    tags: tags.filter(tag => ['deprecated', 'beta', 'see'].includes(tag.name)),
  };
}

function renderMethod(method, checker, client, resource, ru) {
  const type = checker.getTypeOfSymbolAtLocation(method, client);
  const signatures = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
  const {description, tags} = docsFor(method, checker);
  const lines = [`## ${method.name} {#${method.name.toLowerCase()}}`, ''];
  for (const signature of signatures) {
    let rendered = checker.signatureToString(
      signature,
      client,
      ts.TypeFormatFlags.NoTruncation |
        ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope,
    );
    // Iterator helpers use an array response type whose element TypeScript otherwise expands.
    if (rendered.length > 500 && method.name === 'iterate') {
      const declaration = method.valueDeclaration;
      let response;
      const visit = node => {
        if (
          ts.isCallExpression(node) &&
          node.typeArguments?.length === 2 &&
          ts.isIdentifier(node.expression) &&
          ['iterateSearchResults', 'iterateOffsetResults'].includes(
            node.expression.text,
          )
        ) {
          response = node.typeArguments[1].getText();
        }
        ts.forEachChild(node, visit);
      };
      if (declaration) visit(declaration);
      if (response && rendered.includes(': AsyncGenerator<')) {
        rendered =
          rendered.slice(0, rendered.indexOf(': AsyncGenerator<')) +
          `: AsyncGenerator<${response}[number], void, any>`;
      }
    }
    lines.push(
      '```ts',
      `client.${resource}.${method.name}${rendered}`,
      '```',
      '',
    );
  }
  if (description) lines.push(markdownText(description), '');
  for (const tag of tags) {
    const value = ts.displayPartsToString(tag.text ?? []).trim();
    if (tag.name === 'see' && /^https?:\/\/\S+$/.test(value)) {
      lines.push(
        `[${ru ? 'Документация Kaiten' : 'Kaiten documentation'}](${value})`,
        '',
      );
    } else if (tag.name === 'deprecated' || tag.name === 'beta') {
      const label =
        tag.name === 'beta' ? 'Beta' : ru ? 'Устарело' : 'Deprecated';
      lines.push(`**${label}**${value ? `: ${markdownText(value)}` : ''}`, '');
    }
  }
  return lines.join('\n');
}

function generate() {
  const config = ts.readConfigFile(absolute('tsconfig.json'), ts.sys.readFile);
  if (config.error)
    throw new Error(
      ts.flattenDiagnosticMessageText(config.error.messageText, '\n'),
    );
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
  const program = ts.createProgram(
    clients.map(client => absolute(client.file)),
    {...parsed.options, noEmit: true},
  );
  const checker = program.getTypeChecker();
  const output = new Map();
  const sidebar = {en: {}, ru: {}};

  for (const {file, name, className} of clients) {
    const source = program.getSourceFile(absolute(file));
    const client = source?.statements.find(
      statement =>
        ts.isClassDeclaration(statement) && statement.name?.text === className,
    );
    if (!client) throw new Error(`Could not find ${className} in ${file}`);
    const resources = checker
      .getPropertiesOfType(checker.getTypeAtLocation(client))
      .map(resource => ({
        name: resource.name,
        methods: checker
          .getPropertiesOfType(
            checker.getTypeOfSymbolAtLocation(resource, client),
          )
          .filter(
            method =>
              checker.getSignaturesOfType(
                checker.getTypeOfSymbolAtLocation(method, client),
                ts.SignatureKind.Call,
              ).length,
          ),
      }))
      .filter(resource => resource.methods.length)
      .sort((a, b) => a.name.localeCompare(b.name, 'en'));

    for (const ru of [false, true]) {
      const locale = ru ? 'ru' : 'en';
      const prefix = ru ? 'docs/ru/reference' : 'docs/reference';
      const route = ru ? '/ru/reference' : '/reference';
      const title = name === 'rest' ? 'REST API' : 'SCIM API';
      const introduction = ru
        ? 'Методы сгруппированы по ресурсам клиента. Выберите ресурс, чтобы посмотреть сигнатуры методов.'
        : 'Methods are grouped by client resource. Select a resource to see its method signatures.';
      const guide = ru ? 'Руководство' : 'Guide';
      const lines = [
        '<!-- Generated by tools/generate-api-reference.mjs. -->',
        '',
        `# ${title}`,
        '',
        introduction,
        '',
        `[${guide}](${ru ? '/ru' : ''}/guide/${name})`,
        '',
        '## ' + (ru ? 'Ресурсы' : 'Resources'),
        '',
      ];
      sidebar[locale][name] = [];
      for (const resource of resources) {
        const link = `${route}/${name}/${resource.name}`;
        lines.push(`- [\`client.${resource.name}\`](${link})`);
        sidebar[locale][name].push({text: `client.${resource.name}`, link});
        const page = [
          '---',
          'editLink: false',
          'lastUpdated: false',
          '---',
          '<!-- Generated by tools/generate-api-reference.mjs. -->',
          '',
          `# client.${resource.name}`,
          '',
          `[${title}](${route}/${name})`,
          '',
          ...resource.methods.map(method =>
            renderMethod(method, checker, client, resource.name, ru),
          ),
        ].join('\n');
        output.set(`${prefix}/${name}/${resource.name}.md`, page);
      }
      output.set(`${prefix}/${name}.md`, lines.join('\n') + '\n');
    }
  }
  return {output, sidebar};
}

export async function generateApiReference({check = false} = {}) {
  const input = await inputHash();
  let cache;
  try {
    cache = JSON.parse(await readOptional(cachePath));
  } catch {
    // A missing or invalid cache is equivalent to a cold build.
  }
  const existingGenerated = (await Promise.all(generatedRoots.map(filesIn)))
    .flat()
    .sort();
  if (!check && cache?.input === input && cache.outputs && cache.sidebar) {
    const expectedGenerated = Object.keys(cache.outputs)
      .filter(file => generatedRoots.some(dir => file.startsWith(`${dir}/`)))
      .sort();
    const intact =
      JSON.stringify(existingGenerated) === JSON.stringify(expectedGenerated) &&
      (
        await Promise.all(
          Object.entries(cache.outputs).map(async ([file, digest]) => {
            const content = await readOptional(file);
            return content !== undefined && hash(content) === digest;
          }),
        )
      ).every(Boolean);
    if (intact) {
      console.log('API reference: up to date');
      return cache.sidebar;
    }
  }

  const {output, sidebar} = generate();
  const stale = existingGenerated.filter(file => !output.has(file));
  if (check) {
    const changed = (
      await Promise.all(
        [...output].map(async ([file, content]) =>
          (await readOptional(file)) === content ? undefined : file,
        ),
      )
    ).filter(Boolean);
    if (changed.length || stale.length)
      throw new Error(
        `API reference is out of date: ${[...changed, ...stale].join(', ')}`,
      );
    console.log('API reference: verified');
    return sidebar;
  }
  for (const file of stale) await rm(absolute(file));
  for (const [file, content] of output) {
    if ((await readOptional(file)) !== content) {
      await mkdir(path.dirname(absolute(file)), {recursive: true});
      await writeFile(absolute(file), content);
    }
  }
  await mkdir(path.dirname(absolute(cachePath)), {recursive: true});
  await writeFile(
    absolute(cachePath),
    JSON.stringify({
      input,
      outputs: Object.fromEntries(
        [...output].map(([file, content]) => [file, hash(content)]),
      ),
      sidebar,
    }),
  );
  console.log(`API reference: generated ${output.size} pages`);
  return sidebar;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  await generateApiReference({check: process.argv.includes('--check')});
}
