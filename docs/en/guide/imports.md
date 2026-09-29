# Data imports

`@2chevskii/kaiten-client/imports` provides types for Kaiten import files: metadata, entities, ID mappings, and colors. The package does not start an import; submit prepared files through Kaiten's import process.

```ts
import type {
  ImportMetaDataRecord,
  ImportCardsRecord,
} from "@2chevskii/kaiten-client/imports";

const metadata: ImportMetaDataRecord = {
  entities: ["boards", "columns", "cards"],
  entities_paths_map: {
    boards: "boards.json",
    columns: "columns.json",
    cards: "cards.json",
  },
};

const cards: ImportCardsRecord[] = [
  { id: "external-card-1", column_id: "external-column-1", title: "Task" },
];
```

`ImportEntityName` lists accepted entity names and `ImportColor` lists color values. `IMPORT_ENTITY_METADATA` links 15 record types to Kaiten's documentation; they are listed in the [reference](/en/reference/integrations). Nested card structures (`checklists`, `history`, `properties`, and others) have their own exported types. See [Kaiten's import documentation](https://developers.kaiten.ru/imports) for file order, ID references, and the full format.
