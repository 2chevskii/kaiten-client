import { KaitenClient } from "../src/index.js";
import type {
  CardsRetrieveCardListResponse,
  SearchResponseV2,
} from "../src/index.js";
import type { AddonContext } from "../src/addons.js";

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

declare const addon: AddonContext;
addon.getCardProperties("members").then((members) => members[0]?.full_name);

void versionOne;
void versionTwo;
