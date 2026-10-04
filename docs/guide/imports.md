# Data imports

`@2chevskii/kaiten-client/imports` provides types for Kaiten import files: metadata, entities, ID mappings, and colors. The package does not start an import; submit prepared files through Kaiten's import process.

```ts
import type {
  ImportMetaDataRecord,
  ImportCardsRecord,
} from '@2chevskii/kaiten-client/imports';

const metadata: ImportMetaDataRecord = {
  entities: ['cards'],
  entities_paths_map: {
    cards: 'cards.json',
  },
};

const cards: ImportCardsRecord[] = [
  {id: 'external-card-1', column_id: 'external-column-1', title: 'Task'},
];
```

`ImportEntityName` lists accepted entity names and `ImportColor` lists color values. Nested card structures (`checklists`, `history`, `properties`, and others) have their own exported types. See [Kaiten's import documentation](https://developers.kaiten.ru/imports) for the full format.

Serialize each record set to the corresponding JSON file named in `entities_paths_map`:

```ts
import {writeFile} from 'node:fs/promises';

await Promise.all([
  writeFile('metadata.json', JSON.stringify(metadata, null, 2)),
  writeFile('cards.json', JSON.stringify(cards, null, 2)),
]);
```
