# REST API

`KaitenClient` группирует методы по ресурсам: `client.cards`, `client.boards`, `client.users`, `client.cardComments` и другие. [Справочник](/reference/rest) перечисляет все 214 операций: имя метода, HTTP-маршрут, параметры, тело, форму ответа и ссылку на Kaiten.

## Запросы и типы

```ts
import { KaitenClient } from "@2chevskii/kaiten-client";
import type {
  CardsCreateNewCardBody,
  CardsCreateNewCardResponse,
} from "@2chevskii/kaiten-client";

const client = new KaitenClient({
  origin: "https://your-company.kaiten.ru",
  token: process.env.KAITEN_TOKEN!,
});

const request: CardsCreateNewCardBody = {
  title: "Подготовить релиз",
  board_id: 10,
};
const card: CardsCreateNewCardResponse =
  await client.cards.createNewCard(request);
```

Методы принимают ID отдельными аргументами. Небольшие наборы полей тела тоже передаются отдельно: `client.cardComments.addComment(cardId, text)`. Большие тела и фильтры сохраняют объекты типов `Body` и `Query`: `client.cards.create(body)`, `client.cards.retrieveCardList(query)`. Последний аргумент — необязательный `OperationOptions` с `signal`. Методы API возвращают `Promise`, а методы `iterate` — асинхронный итератор. Типы `Params` описывают кортеж аргументов конкретного метода; его можно передать через `...args`.

`client.cards.create(...)` — короткий псевдоним `client.cards.createNewCard(...)`. Beta- и deprecated-операции остаются доступными и отмечены в типах и [справочнике](/reference/rest).

## Автоматизации

Основной экспорт также содержит `AutomationBody`, `AutomationTrigger`, `AutomationTriggerType`, `AutomationAction`, `AutomationCondition` и `AutomationConditionGroup` для `client.automations`. Триггеры имеют перечисление допустимых имён; данные отдельных действий, которые Kaiten не специфицирует, остаются `unknown`.

```ts
import type { AutomationBody } from "@2chevskii/kaiten-client";

const automation: AutomationBody = {
  type: "on_demand",
  name: "Обновить карточку",
  actions: [{ type: "change_asap", data: { asap: true } }],
};
```

## Поиск с курсором

Поиск карточек и документов поддерживает две версии ответа. При `version: 1` результат — массив, при `version: 2` — объект `{ result, position }`.

```ts
const firstPage = await client.cards.retrieveCardList({
  version: 2,
  limit: 50,
});

const nextPage = await client.cards.retrieveCardList({
  version: 2,
  start_position: firstPage.position,
});

console.log(firstPage.result, nextPage.result);
```

Тип `SearchResponseV2<Result>` экспортируется из основного пакета. Передавайте литерал `1` или `2`, чтобы TypeScript вывел подходящий тип результата. Для обычного списка без `version: 2` возвращается массив.

## Автоматическая пагинация

`cards.iterate`, `documents.iterate` и `documentGroups.iterate` запрашивают страницы поиска версии 2 по мере перебора элементов:

```ts
for await (const card of client.cards.iterate({ board_id: 10, limit: 50 })) {
  console.log(card.id, card.title);
  if (card.asap) break;
}
```

Первый запрос выполняется при начале перебора. `break` прекращает загрузку следующих страниц. Последний аргумент `{ signal }` позволяет отменить перебор, в том числе между элементами уже загруженной страницы. `start_position` продолжает поиск с имеющегося курсора. Поля `version` и `offset` исключены из типов запросов итераторов: они используют курсорную пагинацию версии 2.

Перебор завершается при пустой странице или пустом курсоре. Повторение курсора вызывает ошибку, чтобы не запрашивать одни и те же страницы бесконечно. Методы получения одной страницы остаются доступны для ручного управления пагинацией.

## Типизированные фильтры карточек

Поле `filter` принимает объект `CardFilter` или готовую строку base64. Объект автоматически кодируется с использованием UTF-8:

```ts
import type { CardFilter } from "@2chevskii/kaiten-client";

const filter = {
  key: "and",
  value: [
    {
      key: "or",
      value: [
        { key: "owner_id", comparison: "eq", value: 123 },
        { key: "asap", comparison: "true" },
      ],
    },
  ],
} satisfies CardFilter;

for await (const card of client.cards.iterate({ filter })) {
  console.log(card.title);
}
```

Типы следуют [схеме фильтра Kaiten](https://developers.kaiten.ru/cards/retrieve-card-list): верхний `and`/`or` содержит группы условий, а ключ и сравнение определяют тип значения каждого условия. Для числовых пользовательских полей значения сравнений передаются строками; условия checkbox и attachment требуют `value: null`. Функция `encodeCardFilter(filter)` экспортируется для получения закодированной строки отдельно. Контракты других операций, принимающих строковые фильтры, сохраняются.

## ID и ответы

Kaiten использует и числовые ID, и UUID. Передавайте тот тип идентификатора, который указан в типе конкретного метода: например, `card_id: number` или `card_uid: string`. Даты остаются строками, документированные nullable-поля допускают `null`, неполные схемы представлены через `unknown`.

Для операций без итератора используйте `limit`, `offset` или курсор там, где их поддерживает операция. Подробности файловых маршрутов — в [отдельном руководстве](/guide/files).
