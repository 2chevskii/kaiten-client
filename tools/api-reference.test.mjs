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
      'package-lock.json',
      'tools/generate-api-reference.mjs',
      'tools/kaiten-api-descriptions.json',
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
    assert.match(
      content,
      /client\.cards\.retrieveCard\(cardId: number, brokenApi\?: boolean, options\?: OperationOptions\): Promise<CardsRetrieveCardResponse>/,
    );
    assert.equal(
      (content.match(/client\.cards\.retrieveCardList\(/g) ?? []).length,
      3,
    );
    assert.match(
      await readFile(scim, 'utf8'),
      /## addGroup[\s\S]*?\*\*Beta\*\*/,
    );
    assert.match(
      content,
      /## createNewCard[\s\S]*?> Creates a new Card\.[\s\S]*?\[Kaiten documentation\]\(https:\/\/developers\.kaiten\.ru\/cards\/create-new-card\)/,
    );
    const russian = await readFile(
      path.join(fixture, 'docs/ru/reference/rest/cards.md'),
      'utf8',
    );
    assert.match(russian, /Документация Kaiten \(на английском\)/);
    assert.match(run(), /up to date/);
    const before = JSON.parse(await readFile(cache, 'utf8')).input;
    await writeFile(path.join(fixture, 'src/cache-test.ts'), '// hash input\n');
    assert.match(run(), /generated/);
    assert.notEqual(JSON.parse(await readFile(cache, 'utf8')).input, before);

    const descriptionsFile = path.join(
      fixture,
      'tools/kaiten-api-descriptions.json',
    );
    const snapshot = JSON.parse(await readFile(descriptionsFile, 'utf8'));
    const originalDescription =
      snapshot.descriptions[
        'https://developers.kaiten.ru/cards/create-new-card'
      ];
    snapshot.descriptions[
      'https://developers.kaiten.ru/cards/create-new-card'
    ] = 'Updated description.';
    await writeFile(descriptionsFile, JSON.stringify(snapshot));
    assert.match(run(), /generated/);
    assert.match(await readFile(page, 'utf8'), /> Updated description\./);
    snapshot.descriptions[
      'https://developers.kaiten.ru/cards/create-new-card'
    ] = originalDescription;
    await writeFile(descriptionsFile, JSON.stringify(snapshot));
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
