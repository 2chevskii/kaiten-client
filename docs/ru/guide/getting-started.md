# Установка и первый запрос

## Требования

- Node.js 24 или новее;
- для TypeScript-проектов рекомендуется `module: "Node20"` (TypeScript 5.9 или новее);
- домен компании Kaiten и API-токен.

Установите опубликованную версию из npm:

```sh
npm install @2chevskii/kaiten-client
```

Пакет поставляется со скомпилированным ESM JavaScript и объявлениями типов. В Node.js 24 поддерживаются оба способа подключения: `import` и `require()`.

```js
const {KaitenClient} = require('@2chevskii/kaiten-client');
```

Исходники и карты объявлений типов включены в пакет для перехода к исходному коду в редакторе. Для отладки со стектрейсами по исходникам запускайте Node.js с `--enable-source-maps`. Загрузчик TypeScript во время исполнения не требуется.

При переходе с GitHub-версии `1.0.0` используйте [руководство по миграции](/ru/guide/migration).

## Первый запрос

```ts
import {KaitenClient} from '@2chevskii/kaiten-client';

const token = process.env.KAITEN_TOKEN;
if (!token) throw new Error('Set KAITEN_TOKEN');

const client = new KaitenClient({
  origin: 'https://your-company.kaiten.ru',
  token,
});

const cards = await client.cards.retrieveCardList({limit: 10});

for (const card of cards) {
  console.log(card.id, card.title);
}
```

`origin` — адрес компании без пути и завершающих параметров. Используйте HTTPS. Токен храните вне исходного кода.

Далее: [настройка клиента](/ru/guide/configuration), [REST-операции](/ru/guide/rest).
