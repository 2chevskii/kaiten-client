# Установка и первый запрос

## Требования

- Node.js 20 или новее;
- TypeScript с `module` и `moduleResolution`, совместимыми с ESM;
- домен компании Kaiten и API-токен.

Версия `1.0.0` доступна из GitHub:

```sh
npm install github:2chevskii/kaiten-client#v1.0.0
```

Пакет ещё не опубликован в npm. При установке из GitHub выполняется сборка через `prepare`.

## Первый запрос

```ts
import { KaitenClient } from "@2chevskii/kaiten-client";

const token = process.env.KAITEN_TOKEN;
if (!token) throw new Error("Set KAITEN_TOKEN");

const client = new KaitenClient({
  origin: "https://your-company.kaiten.ru",
  token,
});

const cards = await client.cards.retrieveCardList({
  query: { limit: 10 },
});

for (const card of cards) {
  console.log(card.id, card.title);
}
```

`origin` — адрес компании без пути и завершающих параметров. Используйте HTTPS. Токен храните вне исходного кода.

В репозитории есть [запускаемый пример](https://github.com/2chevskii/kaiten-client/tree/develop/samples/kaiten-rest): задайте `KAITEN_ORIGIN` и `KAITEN_TOKEN`, затем выполните `npm run sample:kaiten-rest`.

Далее: [настройка клиента](/guide/configuration), [REST-операции](/guide/rest).
