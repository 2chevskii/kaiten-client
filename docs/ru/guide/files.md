# Файлы

Kaiten переводит файловые маршруты на ограниченный доступ. Используйте ресурсы `restrictedAccessCardFiles`, `restrictedAccessCommentFiles` и `restrictedAccessCustomPropertyFiles`. Они принимают UUID карточки и связанных сущностей. [Миграция в документации Kaiten](https://developers.kaiten.ru/restricted-access-files-migration).

В примерах `client` — экземпляр `KaitenClient` из [первого запроса](/ru/guide/getting-started).

## Загрузка

```ts
const uploaded = await client.restrictedAccessCardFiles.attachFileToCard(
  'card-uuid',
  new Blob(['report'], {type: 'text/plain'}),
  {filename: 'report.txt'},
);

console.log(uploaded.id);
```

Клиент создаёт `multipart/form-data` и сам задаёт границу формы. Передавайте `Blob` и, при необходимости, `filename`; не кодируйте файл как JSON.

## Получение временной ссылки

```ts
const file = await client.restrictedAccessCardFiles.getCardFile(
  'card-uuid',
  uploaded.id,
);

const redirect = await client.restrictedAccessCardFiles.getCardFile(
  'card-uuid',
  uploaded.id,
  true,
);

console.log(file.url);
console.log(redirect.location);
```

`redirect: true` возвращает `{ location: string }` из заголовка `Location`; клиент не следует за перенаправлением. Временную ссылку скачивайте отдельным запросом без токена Kaiten. Старый `client.cardFiles.attachFileToCard` сохранён и помечен `@deprecated`.

Операции для карточек, комментариев и полей перечислены в [REST-справочнике](/ru/reference/rest).
