# Импорт данных

Модуль imports предоставляет контракты TypeScript и не запускает импорт. Universal Format 2.0 находится в бета-версии и рекомендуется для новых интеграций. Типы `Import*` без версии описывают устаревший Universal Import v1 и сохранены для совместимости; поддержка v1 заканчивается 1 декабря 2026 года.

```ts
import type {
  ImportV2Manifest,
  ImportV2UsersRecord,
} from '@2chevskii/kaiten-client/imports';

const manifest: ImportV2Manifest = {
  profile: {name: 'external'},
  package_id: 'b6cde3fd-5d39-4fbf-85b8-c57c09e42ff6',
  source: {
    system: 'custom',
    namespace: 'example:tracker',
    exported_at: '2026-10-07T09:00:00Z',
  },
  timeline_mode: 'current_state_only',
  resource_files: [{resource: 'users', path: 'resources/users.json'}],
  binary_files: {base_path: 'files/'},
};
const users: ImportV2UsersRecord[] = [
  {external_id: 'user:1', email: 'ava@example.com'},
];
```

Сохраните манифест в `meta-data.json`, а массив пользователей — в `resources/users.json`. Ссылки должны разрешаться внутри пакета. Для проверки и импорта используйте Convertinator. TypeScript не проверяет длины, пути, условные ограничения и ссылки. Полные правила и схемы приведены в [описании формата](https://developers.kaiten.ru/imports/bundle-format).
