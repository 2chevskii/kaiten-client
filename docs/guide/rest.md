# REST API

`KaitenClient` группирует методы по ресурсам: `client.cards`, `client.boards`, `client.users`, `client.cardComments` и другие. [Справочник](/reference/rest) перечисляет все 214 операций: имя метода, HTTP-маршрут, параметры, тело, форму ответа и ссылку на Kaiten.

## Запросы и типы

```ts
import { KaitenClient } from "@2chevskii/kaiten-client";
import type {
  CardsCreateNewCardParams,
  CardsCreateNewCardResponse,
} from "@2chevskii/kaiten-client";

const client = new KaitenClient({
  origin: "https://your-company.kaiten.ru",
  token: process.env.KAITEN_TOKEN!,
});

const request: CardsCreateNewCardParams = {
  body: { title: "Подготовить релиз", board_id: 10 },
};
const card: CardsCreateNewCardResponse =
  await client.cards.createNewCard(request);
```

Каждый метод принимает объект параметров. Параметры пути лежат на верхнем уровне, параметры URL — в `query`, JSON — в `body`, отмена — в `signal`. Все методы возвращают `Promise`. Имена типов составлены из ресурса, операции и суффикса `Params`, `Body`, `Query` или `Response`; точные доступные экспорты смотрите в TypeScript.

`client.cards.create(...)` — короткий псевдоним `client.cards.createNewCard(...)`. Beta- и deprecated-операции остаются доступными и отмечены в типах и [справочнике](/reference/rest).

## Автоматизации

Основной экспорт также содержит `AutomationBody`, `AutomationTrigger`, `AutomationTriggerType`, `AutomationAction`, `AutomationCondition` и `AutomationConditionGroup` для `client.automations`. Триггеры имеют перечисление допустимых имён; данные отдельных действий, которые Kaiten не специфицирует, остаются `unknown`.

```ts
import type { AutomationBody } from "@2chevskii/kaiten-client";

const automation: AutomationBody = {
  type: "on_demand",
  name: "Обновить карточку",
  actions: [{ type: "some_action", data: {} }],
};
```

## Поиск с курсором

Поиск карточек и документов поддерживает две версии ответа. При `version: 1` результат — массив, при `version: 2` — объект `{ result, position }`.

```ts
const firstPage = await client.cards.retrieveCardList({
  query: { version: 2, limit: 50 },
});

const nextPage = await client.cards.retrieveCardList({
  query: { version: 2, start_position: firstPage.position },
});

console.log(firstPage.result, nextPage.result);
```

Тип `SearchResponseV2<Result>` экспортируется из основного пакета. Передавайте литерал `1` или `2`, чтобы TypeScript вывел подходящий тип результата. Для обычного списка без `version: 2` возвращается массив.

## ID и ответы

Kaiten использует и числовые ID, и UUID. Передавайте тот тип идентификатора, который указан в типе конкретного метода: например, `card_id: number` или `card_uid: string`. Даты остаются строками, документированные nullable-поля допускают `null`, неполные схемы представлены через `unknown`.

Клиент не выполняет автоматическую пагинацию: используйте `limit`, `offset` или курсор там, где их поддерживает операция. Подробности файловых маршрутов — в [отдельном руководстве](/guide/files).
