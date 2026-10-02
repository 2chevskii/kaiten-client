import { KaitenClient, KaitenHttpError } from "@2chevskii/kaiten-client";

const origin = process.env.KAITEN_ORIGIN;
const token = process.env.KAITEN_TOKEN;

if (!origin || !token) {
  throw new Error(
    "Set KAITEN_ORIGIN and KAITEN_TOKEN before running this sample",
  );
}

const client = new KaitenClient({ origin, token });

try {
  const cards = await client.cards.retrieveCardList({ limit: 10 });

  for (const card of cards) {
    console.log(`${card.id}: ${card.title}`);
  }
} catch (error) {
  if (error instanceof KaitenHttpError) {
    console.error(`Kaiten returned HTTP ${error.status} for ${error.url}`);
    console.error(error.body);
    process.exitCode = 1;
  } else {
    throw error;
  }
}
