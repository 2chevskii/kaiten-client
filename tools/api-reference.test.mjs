import assert from 'node:assert/strict';
import {execFileSync, spawnSync} from 'node:child_process';
import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  symlink,
  writeFile,
} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'node:test';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('generates signatures and invalidates or repairs the reference cache', async () => {
  const fixture = await mkdtemp(
    path.join(os.tmpdir(), 'kaiten-api-reference-'),
  );
  try {
    await mkdir(path.join(fixture, 'tools'));
    await cp(path.join(root, 'src'), path.join(fixture, 'src'), {
      recursive: true,
    });
    for (const file of [
      'tsconfig.json',
      'package.json',
      'package-lock.json',
      'tools/generate-api-reference.mjs',
    ]) {
      await cp(path.join(root, file), path.join(fixture, file));
    }
    await symlink(
      path.join(root, 'node_modules'),
      path.join(fixture, 'node_modules'),
      'junction',
    );
    const script = path.join(fixture, 'tools/generate-api-reference.mjs');
    const run = (...args) =>
      execFileSync(process.execPath, [script, ...args], {
        cwd: os.tmpdir(),
        encoding: 'utf8',
      });
    const page = path.join(fixture, 'docs/reference/rest/cards.md');
    const scim = path.join(fixture, 'docs/reference/scim/groups.md');
    const cache = path.join(
      fixture,
      'docs/.vitepress/cache/api-reference.json',
    );

    assert.match(run(), /generated/);
    const content = await readFile(page, 'utf8');
    const signatures = [
      ...content.matchAll(/<ApiSignature :parts='(.*?)' \/>/g),
    ].map(match =>
      JSON.parse(
        match[1]
          .replaceAll('&#39;', "'")
          .replaceAll('&lt;', '<')
          .replaceAll('&gt;', '>')
          .replaceAll('&amp;', '&'),
      ),
    );
    assert.ok(signatures.length > 0);
    assert.ok(
      signatures.every(
        parts =>
          !parts
            .map(part => part.text)
            .join('')
            .startsWith('client.'),
      ),
    );
    for (const parts of signatures) {
      for (const part of parts) {
        assert.equal(part.tokens.map(token => token.text).join(''), part.text);
        if (part.href) {
          assert.equal(
            part.previewTokens.map(token => token.text).join(''),
            part.preview,
          );
          assert.ok(
            part.previewTokens.some(
              token =>
                token.style?.['--shiki-light'] && token.style?.['--shiki-dark'],
            ),
          );
        }
      }
      const colors = new Set(
        parts
          .flatMap(part =>
            part.tokens.map(token => token.style?.['--shiki-light']),
          )
          .filter(Boolean),
      );
      assert.ok(
        colors.size > 1,
        'Signatures should have multiple syntax colors',
      );
    }
    assert.match(
      content,
      /retrieveCard\(cardId: number, brokenApi\?: boolean, options\?: /,
    );
    assert.match(
      content,
      /"text":"CardsRetrieveCardResponse","href":"\/reference\/types\/main\/CardsRetrieveCardResponse"/,
    );
    assert.match(
      content,
      /"text":"CardsCreateNewCardBody","href":"\/reference\/types\/main\/CardsCreateNewCardBody","preview":/,
    );
    assert.equal((content.match(/retrieveCardList\(/g) ?? []).length, 3);
    assert.match(
      await readFile(scim, 'utf8'),
      /## addGroup[\s\S]*?\*\*Beta\*\*/,
    );
    assert.match(
      await readFile(scim, 'utf8'),
      /"text":"GroupsGetGroupResponse","href":"\/reference\/types\/scim\/GroupsGetGroupResponse"/,
    );
    const mainGroup = await readFile(
      path.join(fixture, 'docs/reference/types/main/GroupsGetGroupResponse.md'),
      'utf8',
    );
    const scimGroup = await readFile(
      path.join(fixture, 'docs/reference/types/scim/GroupsGetGroupResponse.md'),
      'utf8',
    );
    assert.match(mainGroup, /permissions: number/);
    assert.match(scimGroup, /displayName: string/);
    assert.match(
      scimGroup,
      /import type \{GroupsGetGroupResponse\} from '@2chevskii\/kaiten-client\/scim'/,
    );
    const params = await readFile(
      path.join(
        fixture,
        'docs/reference/types/main/CardsCreateNewCardParams.md',
      ),
      'utf8',
    );
    assert.match(
      params,
      /## Resolved type[\s\S]*?body: CardsCreateNewCardBody/,
    );
    const batch = await readFile(
      path.join(
        fixture,
        'docs/reference/types/main/CardsBatchUpdateForCardsBody.md',
      ),
      'utf8',
    );
    assert.match(
      batch,
      /## Related types[\s\S]*?CardsBatchUpdateForCardsFields/,
    );
    const importsIndex = await readFile(
      path.join(fixture, 'docs/reference/types/imports/index.md'),
      'utf8',
    );
    assert.match(importsIndex, /ImportV2Manifest/);
    const ruDto = await readFile(
      path.join(
        fixture,
        'docs/ru/reference/types/scim/GroupsGetGroupResponse.md',
      ),
      'utf8',
    );
    assert.match(ruDto, /## Определение/);
    assert.match(
      content,
      /## createNewCard[\s\S]*?Creates a new Card\.[\s\S]*?\[Kaiten documentation\]\(https:\/\/developers\.kaiten\.ru\/cards\/create-new-card\)/,
    );
    const russian = await readFile(
      path.join(fixture, 'docs/ru/reference/rest/cards.md'),
      'utf8',
    );
    assert.match(russian, /::: warning Предупреждение/);
    assert.match(content, /::: warning Warning[\s\S]*?months_to_hide_cards/);
    const iterations = await readFile(
      path.join(fixture, 'docs/reference/rest/iterations.md'),
      'utf8',
    );
    assert.match(
      iterations,
      /## createIteration[\s\S]*?\*\*Beta\*\*[\s\S]*?::: warning Warning[\s\S]*?iterations API as beta/,
    );
    const records = await readFile(
      path.join(fixture, 'docs/reference/rest/customDirectoryRecords.md'),
      'utf8',
    );
    const createRecord = records
      .split('## createRecord')[1]
      .split('## deleteRecord')[0];
    assert.equal((createRecord.match(/::: warning Warning/g) ?? []).length, 2);
    assert.match(createRecord, /settings\.allow_editing=true/);
    const comments = await readFile(
      path.join(fixture, 'docs/reference/rest/cardComments.md'),
      'utf8',
    );
    assert.match(
      comments,
      /This client method does not expose pagination parameters/,
    );
    assert.match(run(), /up to date/);
    const packageFile = path.join(fixture, 'package.json');
    const originalPackage = await readFile(packageFile, 'utf8');
    const manifest = JSON.parse(originalPackage);
    manifest.exports['./example'] = {
      types: './lib/example.d.ts',
      default: './lib/example.js',
    };
    await writeFile(packageFile, JSON.stringify(manifest));
    await writeFile(
      path.join(fixture, 'src/example.ts'),
      'export interface ExampleDto { value: string }\n',
    );
    assert.match(run(), /generated/);
    assert.match(
      await readFile(
        path.join(fixture, 'docs/reference/types/example/ExampleDto.md'),
        'utf8',
      ),
      /value: string/,
    );
    await writeFile(packageFile, originalPackage);
    await rm(path.join(fixture, 'src/example.ts'));
    assert.match(run(), /generated/);
    const before = JSON.parse(await readFile(cache, 'utf8')).input;
    await writeFile(path.join(fixture, 'src/cache-test.ts'), '// hash input\n');
    assert.match(run(), /generated/);
    assert.notEqual(JSON.parse(await readFile(cache, 'utf8')).input, before);

    const cardsSource = path.join(fixture, 'src/rest/cards.ts');
    const originalSource = await readFile(cardsSource, 'utf8');
    assert.match(originalSource, /Creates a new Card\. …/);
    await writeFile(
      cardsSource,
      originalSource.replace('Creates a new Card. …', 'Updated description.'),
    );
    assert.match(run(), /generated/);
    assert.match(await readFile(page, 'utf8'), /Updated description\./);
    await writeFile(cardsSource, originalSource);
    assert.match(run(), /generated/);

    await writeFile(page, 'corrupted');
    assert.notEqual(spawnSync(process.execPath, [script, '--check']).status, 0);
    assert.match(run(), /generated/);
    assert.equal(await readFile(page, 'utf8'), content);
    await rm(page);
    assert.match(run(), /generated/);
    assert.equal(await readFile(page, 'utf8'), content);
    assert.match(run('--check'), /verified/);
  } finally {
    await rm(fixture, {recursive: true, force: true});
  }
});
