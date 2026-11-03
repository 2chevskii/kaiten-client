import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {readFile, readdir, mkdir, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cachePath = 'docs/.vitepress/cache/api-reference.json';
const generatedRoots = [
  'docs/reference/rest',
  'docs/reference/scim',
  'docs/reference/types',
  'docs/ru/reference/rest',
  'docs/ru/reference/scim',
  'docs/ru/reference/types',
];
const clients = [
  {file: 'src/client.ts', name: 'rest', className: 'KaitenClient'},
  {file: 'src/scim.ts', name: 'scim', className: 'KaitenScimClient'},
];
const packageInfo = JSON.parse(
  readFileSync(path.join(root, 'package.json'), 'utf8'),
);
const entryPoints = Object.entries(packageInfo.exports).map(([key, value]) => {
  if (!value.types?.startsWith('./lib/') || !value.types.endsWith('.d.ts')) {
    throw new Error(`Unsupported type entry point: ${key}`);
  }
  const suffix = key === '.' ? '' : key.slice(1);
  return {
    name: key === '.' ? 'main' : key.slice(2),
    file: value.types.replace(/^\.\/lib\//, 'src/').replace(/\.d\.ts$/, '.ts'),
    suffix,
  };
});

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
    'package.json',
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
          ['beta', 'deprecated', 'warning'].includes(name) &&
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
    tags: tags.filter(tag =>
      ['deprecated', 'beta', 'warning', 'see'].includes(tag.name),
    ),
  };
}

function signatureParts(code, catalog, entry, route) {
  const scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    false,
    ts.LanguageVariant.Standard,
    code,
  );
  const parts = [];
  for (
    let token = scanner.scan();
    token !== ts.SyntaxKind.EndOfFileToken;
    token = scanner.scan()
  ) {
    const text = scanner.getTokenText();
    const type =
      token === ts.SyntaxKind.Identifier
        ? (catalog[entry].get(text) ?? catalog.main.get(text))
        : undefined;
    if (type) {
      parts.push({
        text,
        href: `${route}/types/${type.entry}/${type.name}`,
        preview: type.preview,
      });
    } else if (parts.length && !parts[parts.length - 1].href) {
      parts[parts.length - 1].text += text;
    } else {
      parts.push({text});
    }
  }
  return parts;
}

function highlightedTokens(code, highlighter) {
  const {tokens} = highlighter.codeToTokens(code, {
    lang: 'typescript',
    themes: {light: 'github-light', dark: 'github-dark'},
    defaultColor: false,
  });
  const result = [];
  let offset = 0;
  for (const token of tokens.flat()) {
    if (token.offset > offset)
      result.push({text: code.slice(offset, token.offset), offset});
    result.push({
      text: token.content,
      style: token.htmlStyle,
      offset: token.offset,
    });
    offset = token.offset + token.content.length;
  }
  if (offset < code.length) result.push({text: code.slice(offset), offset});
  return result;
}

function signatureComponent(code, catalog, entry, route, highlighter) {
  const tokens = highlightedTokens(code, highlighter);
  let offset = 0;
  const parts = signatureParts(code, catalog, entry, route).map(part => {
    const start = offset;
    offset += part.text.length;
    return {
      ...part,
      tokens: tokens
        .filter(
          token =>
            token.offset < offset && token.offset + token.text.length > start,
        )
        .map(token => ({
          text: token.text.slice(
            Math.max(0, start - token.offset),
            offset - token.offset,
          ),
          style: token.style,
        })),
      ...(part.href
        ? {
            previewTokens:
              catalog[entry].get(part.text)?.previewTokens ??
              catalog.main.get(part.text)?.previewTokens,
          }
        : {}),
    };
  });
  const json = JSON.stringify(parts)
    .replaceAll('&', '&amp;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
  return `<ApiSignature :parts='${json}' />`;
}

function renderMethod(
  method,
  checker,
  client,
  resource,
  ru,
  catalog,
  entry,
  highlighter,
) {
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
    const route = ru ? '/ru/reference' : '/reference';
    lines.push(
      signatureComponent(
        `client.${resource}.${method.name}${rendered}`,
        catalog,
        entry,
        route,
        highlighter,
      ),
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
    } else if (tag.name === 'warning' && value) {
      lines.push(
        `::: warning ${ru ? 'Предупреждение' : 'Warning'}`,
        markdownText(value)
          .replaceAll('{{', '&#123;&#123;')
          .replaceAll('}}', '&#125;&#125;'),
        ':::',
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

async function generate() {
  const {createHighlighter} = await import('shiki');
  const highlighter = await createHighlighter({
    langs: ['typescript'],
    themes: ['github-light', 'github-dark'],
  });
  const config = ts.readConfigFile(absolute('tsconfig.json'), ts.sys.readFile);
  if (config.error)
    throw new Error(
      ts.flattenDiagnosticMessageText(config.error.messageText, '\n'),
    );
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
  const program = ts.createProgram(
    [
      ...clients.map(client => absolute(client.file)),
      ...entryPoints.map(entry => absolute(entry.file)),
    ],
    {...parsed.options, noEmit: true},
  );
  const checker = program.getTypeChecker();
  const output = new Map();
  const sidebar = {en: {}, ru: {}};
  const catalog = {};

  for (const entry of entryPoints) {
    const source = program.getSourceFile(absolute(entry.file));
    const module = source && checker.getSymbolAtLocation(source);
    if (!module)
      throw new Error(`Could not resolve public exports from ${entry.file}`);
    const types = new Map();
    for (const exported of checker.getExportsOfModule(module)) {
      const symbol =
        exported.flags & ts.SymbolFlags.Alias
          ? checker.getAliasedSymbol(exported)
          : exported;
      const declaration = symbol.declarations?.find(
        node =>
          ts.isTypeAliasDeclaration(node) ||
          ts.isInterfaceDeclaration(node) ||
          ts.isEnumDeclaration(node),
      );
      if (!declaration) continue;
      const definition = declaration.getText();
      const type = checker.getDeclaredTypeOfSymbol(symbol);
      const resolved =
        ts.isTypeAliasDeclaration(declaration) &&
        exported.name.endsWith('Params')
          ? checker.typeToString(
              type,
              declaration,
              ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.InTypeAlias,
            )
          : undefined;
      const display = resolved
        ? `export type ${exported.name} = ${resolved};`
        : definition;
      const previewLines = display.split('\n');
      let preview = previewLines.slice(0, 9).join('\n');
      if (preview.length > 360) preview = preview.slice(0, 360);
      if (preview.length < display.length) preview += '\n…';
      types.set(exported.name, {
        name: exported.name,
        entry: entry.name,
        definition,
        resolved,
        preview,
        previewTokens: highlightedTokens(preview, highlighter),
        symbol,
      });
    }
    catalog[entry.name] = types;
  }

  for (const ru of [false, true]) {
    const prefix = ru ? 'docs/ru/reference/types' : 'docs/reference/types';
    const route = ru ? '/ru/reference/types' : '/reference/types';
    const title = ru ? 'Типы данных' : 'Data types';
    const index = [
      '---',
      'editLink: false',
      'lastUpdated: false',
      '---',
      '',
      `# ${title}`,
      '',
      ru
        ? 'Типы сгруппированы по точкам входа пакета.'
        : 'Types are grouped by package entry point.',
      '',
    ];
    for (const entry of entryPoints) {
      const packageName = `@2chevskii/kaiten-client${entry.suffix}`;
      index.push(`- [\`${packageName}\`](${route}/${entry.name}/)`);
      const section = [
        '---',
        'editLink: false',
        'lastUpdated: false',
        '---',
        '',
        `# ${packageName}`,
        '',
        `[${title}](${route}/)`,
        '',
      ];
      const types = [...catalog[entry.name].values()].sort((a, b) =>
        a.name.localeCompare(b.name, 'en'),
      );
      let letter = '';
      for (const type of types) {
        const next = type.name[0].toUpperCase();
        if (next !== letter) {
          letter = next;
          section.push('', `## ${letter}`, '');
        }
        section.push(
          `- [\`${type.name}\`](${route}/${entry.name}/${type.name})`,
        );
        const description = docsFor(type.symbol, checker).description;
        const related = [
          ...new Map(
            signatureParts(
              type.definition,
              catalog,
              entry.name,
              ru ? '/ru/reference' : '/reference',
            )
              .filter(
                part =>
                  part.href &&
                  !(
                    part.text === type.name &&
                    part.href.endsWith(`/${entry.name}/${type.name}`)
                  ),
              )
              .map(part => [part.href, part]),
          ).values(),
        ];
        const page = [
          '---',
          'editLink: false',
          'lastUpdated: false',
          '---',
          '',
          `# ${type.name}`,
          '',
          `[\`${packageName}\`](${route}/${entry.name}/)`,
          '',
          ...(description ? [markdownText(description), ''] : []),
          '```ts',
          `import type {${type.name}} from '${packageName}';`,
          '```',
          '',
          `## ${ru ? 'Определение' : 'Definition'}`,
          '',
          '```ts',
          type.definition,
          '```',
          '',
          ...(type.resolved
            ? [
                `## ${ru ? 'Раскрытый тип' : 'Resolved type'}`,
                '',
                '```ts',
                `type ${type.name} = ${type.resolved};`,
                '```',
                '',
              ]
            : []),
          ...(related.length
            ? [
                `## ${ru ? 'Связанные типы' : 'Related types'}`,
                '',
                ...related.map(part => `- [\`${part.text}\`](${part.href})`),
                '',
              ]
            : []),
        ];
        output.set(`${prefix}/${entry.name}/${type.name}.md`, page.join('\n'));
      }
      output.set(`${prefix}/${entry.name}/index.md`, section.join('\n') + '\n');
    }
    output.set(`${prefix}/index.md`, index.join('\n') + '\n');
  }

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
        lines.push(`- [\`${resource.name}\`](${link})`);
        sidebar[locale][name].push({text: resource.name, link});
        const page = [
          '---',
          'editLink: false',
          'lastUpdated: false',
          '---',
          '<!-- Generated by tools/generate-api-reference.mjs. -->',
          '',
          `# ${resource.name}`,
          '',
          `[${title}](${route}/${name})`,
          '',
          ...resource.methods.map(method =>
            renderMethod(
              method,
              checker,
              client,
              resource.name,
              ru,
              catalog,
              name === 'rest' ? 'main' : 'scim',
              highlighter,
            ),
          ),
        ].join('\n');
        output.set(`${prefix}/${name}/${resource.name}.md`, page);
      }
      output.set(`${prefix}/${name}.md`, lines.join('\n') + '\n');
    }
  }
  highlighter.dispose();
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

  const {output, sidebar} = await generate();
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
