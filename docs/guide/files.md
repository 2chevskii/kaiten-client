# Файлы

Kaiten переводит файловые маршруты на ограниченный доступ. Используйте ресурсы `restrictedAccessCardFiles`, `restrictedAccessCommentFiles` и `restrictedAccessCustomPropertyFiles`. Они принимают UUID карточки и связанных сущностей. [Миграция в документации Kaiten](https://developers.kaiten.ru/restricted-access-files-migration).

В примерах `client` — экземпляр `KaitenClient` из [первого запроса](/guide/getting-started).

## Загрузка

```ts
const uploaded = await client.restrictedAccessCardFiles.attachFileToCard({
  card_uid: "card-uuid",
  file: new Blob(["report"], { type: "text/plain" }),
  filename: "report.txt",
});

console.log(uploaded.id);
```

Клиент создаёт `multipart/form-data` и сам задаёт границу формы. Передавайте `Blob` и, при необходимости, `filename`; не кодируйте файл как JSON.

## Получение временной ссылки

```ts
const file = await client.restrictedAccessCardFiles.getCardFile({
  card_uid: "card-uuid",
  id: uploaded.id,
});

const redirect = await client.restrictedAccessCardFiles.getCardFile({
  card_uid: "card-uuid",
  id: uploaded.id,
  query: { redirect: true },
});

console.log("url" in file ? file.url : file.location);
console.log("location" in redirect ? redirect.location : redirect.url);
```

`redirect: true` возвращает `{ location: string }` из заголовка `Location`; клиент не следует за перенаправлением. Временную ссылку скачивайте отдельным запросом без токена Kaiten. Старый `client.cardFiles.attachFileToCard` сохранён и помечен `@deprecated`.

Операции для карточек, комментариев и полей перечислены в [REST-справочнике](/reference/rest).
