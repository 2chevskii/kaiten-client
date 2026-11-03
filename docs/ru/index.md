---
layout: home
hero:
  name: Kaiten Client
  text: Создавайте с Kaiten.
  tagline: Типизированный TypeScript-клиент для API и интеграций Kaiten.
  image:
    src: /kaiten-client-artwork.svg
    alt: Логотип Kaiten между фигурными скобками
  actions:
    - theme: brand
      text: Начать работу
      link: /ru/guide/getting-started
    - theme: alt
      text: Изучить API
      link: /ru/reference/rest
features:
  - title: REST и SCIM
    details: Типизированные REST-ресурсы и SCIM-операции для пользователей и групп.
    link: /ru/guide/rest
  - title: Интеграции
    details: Типы вебхуков, метаданных, импорта и браузерного SDK аддонов.
    link: /ru/reference/integrations
  - title: Без лишнего транспорта
    details: Встроенный fetch, AbortSignal, загрузка файлов и настраиваемый токен.
    link: /ru/guide/configuration
---

## Начало работы

Установите пакет в Node.js 24 или новее:

```sh
npm install @2chevskii/kaiten-client
```

Создайте клиент и получите карточки компании:

```ts
import {KaitenClient} from '@2chevskii/kaiten-client';

const client = new KaitenClient({
  origin: 'https://your-company.kaiten.ru',
  token: process.env.KAITEN_TOKEN!,
});

const cards = await client.cards.retrieveCardList({limit: 10});
```

Способы установки и полный пример приведены в [руководстве](/ru/guide/getting-started).

[Исходный код](https://github.com/2chevskii/kaiten-client) · [Документация Kaiten](https://developers.kaiten.ru/) · [English](/)
