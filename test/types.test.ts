import { KaitenClient } from "../src/index.js";
import type {
  CardsRetrieveCardListResponse,
  DocumentsRetrieveListOfDocumentsResponse,
  SearchResponseV2,
} from "../src/index.js";
import { KaitenScimClient } from "../src/scim.js";
import type { AddonContext, AddonPlatformApiClient } from "../src/addons.js";
import type { ImportCardsRecord } from "../src/imports.js";
import type { UserMetadataResponse } from "../src/metadata.js";

const client = new KaitenClient({
  origin: "https://acme.kaiten.ru",
  token: "token",
});

client.cards.create({ body: { title: "Card", board_id: 1 } });
// @ts-expect-error A new card requires a board ID.
client.cards.create({ body: { title: "Card" } });
// @ts-expect-error A new card requires a title.
client.cards.create({ body: { board_id: 1 } });

const versionOne: Promise<CardsRetrieveCardListResponse> =
  client.cards.retrieveCardList();
const versionTwo: Promise<SearchResponseV2<CardsRetrieveCardListResponse>> =
  client.cards.retrieveCardList({ query: { version: 2 } });
// @ts-expect-error Search version 3 does not exist.
client.cards.retrieveCardList({ query: { version: 3 } });
const documentsV2: Promise<
  SearchResponseV2<DocumentsRetrieveListOfDocumentsResponse>
> = client.documents.retrieveListOfDocuments({ query: { version: 2 } });

const scim = new KaitenScimClient({
  origin: "https://acme.kaiten.ru",
  token: "token",
});
scim.users.getUsers();
// @ts-expect-error A SCIM user lookup needs an ID.
scim.users.getUser({});

declare const addon: AddonContext;
addon.getCardProperties("members").then((members) => members[0]?.full_name);
addon.setData("user", "private", "key", "value");
// @ts-expect-error User-scoped addon data cannot be shared.
addon.setData("user", "shared", "key", "value");

declare const addonApi: AddonPlatformApiClient;
const addonToken: Promise<string> = addonApi.get<string>(
  "/api/v1/users/current",
);

const importCard: ImportCardsRecord = {
  id: "external-id",
  column_id: "column-id",
  title: "Imported",
};
const metadata: UserMetadataResponse = { id_42: "value" };

void versionOne;
void versionTwo;
void documentsV2;
void addonToken;
void importCard;
void metadata;
