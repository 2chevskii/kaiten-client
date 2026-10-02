# Импорт данных

`@2chevskii/kaiten-client/imports` предоставляет типы файлов импорта Kaiten: метаданные, сущности, сопоставления ID и цвета. Пакет не запускает импорт: подготовленные файлы передаются через процесс импорта Kaiten.

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
  { id: "external-card-1", column_id: "external-column-1", title: "Задача" },
];
```

`ImportEntityName` перечисляет допустимые имена сущностей, `ImportColor` — допустимые цвета. Вложенные структуры карточки (`checklists`, `history`, `properties` и другие) имеют отдельные экспортируемые типы. Для полного формата используйте [документацию импорта Kaiten](https://developers.kaiten.ru/imports).
