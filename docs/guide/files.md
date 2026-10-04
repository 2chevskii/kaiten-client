# Files

Kaiten is migrating file routes to restricted access. Use `restrictedAccessCardFiles`, `restrictedAccessCommentFiles`, and `restrictedAccessCustomPropertyFiles`. These take UUIDs for cards and related entities. See [Kaiten's migration guide](https://developers.kaiten.ru/restricted-access-files-migration).

In these examples, `client` is a `KaitenClient` instance from the [first request](/guide/getting-started).

## Upload

```ts
const uploaded = await client.restrictedAccessCardFiles.attachFileToCard(
  'card-uuid',
  new Blob(['report'], {type: 'text/plain'}),
  {filename: 'report.txt'},
);

console.log(uploaded.id);
```

The client creates `multipart/form-data` with its boundary. Pass a `Blob` and, optionally, `filename`; do not encode the file as JSON.

## Get a temporary link

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

The redirect URL grants temporary access to the file. Download it with the platform `fetch` API and avoid logging or storing the URL:

```ts
const download = await fetch(redirect.location);
if (!download.ok) {
  throw new Error(`File download failed: ${download.status}`);
}

const contents = await download.blob();
console.log(contents.size, contents.type);
```

`redirect: true` returns `{ location: string }` from the `Location` header; the client does not follow the redirect. Make this download request without the Kaiten token. The legacy `client.cardFiles.attachFileToCard` remains available with `@deprecated`.

Use editor completion on `restrictedAccessCardFiles`, `restrictedAccessCommentFiles`, and `restrictedAccessCustomPropertyFiles` to explore the available file operations and their types.
