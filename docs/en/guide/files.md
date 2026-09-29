# Files

Kaiten is migrating file routes to restricted access. Use `restrictedAccessCardFiles`, `restrictedAccessCommentFiles`, and `restrictedAccessCustomPropertyFiles`. These take UUIDs for cards and related entities. See [Kaiten's migration guide](https://developers.kaiten.ru/restricted-access-files-migration).

In these examples, `client` is a `KaitenClient` instance from the [first request](/en/guide/getting-started).

## Upload

```ts
const uploaded = await client.restrictedAccessCardFiles.attachFileToCard({
  card_uid: "card-uuid",
  file: new Blob(["report"], { type: "text/plain" }),
  filename: "report.txt",
});

console.log(uploaded.id);
```

The client creates `multipart/form-data` with its boundary. Pass a `Blob` and, optionally, `filename`; do not encode the file as JSON.

## Get a temporary link

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

`redirect: true` returns `{ location: string }` from the `Location` header; the client does not follow the redirect. Download the temporary URL with a separate request and without the Kaiten token. The legacy `client.cardFiles.attachFileToCard` remains available with `@deprecated`.

See the [REST reference](/en/reference/rest) for all card, comment, and property file operations.
