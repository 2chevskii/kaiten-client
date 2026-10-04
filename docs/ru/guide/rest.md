# REST API

`KaitenClient` группирует методы по ресурсам: `client.cards`, `client.boards`, `client.users`, `client.cardComments` и другие. Изучайте доступные операции и формы запросов и ответов через автодополнение редактора и экспортируемые типы TypeScript.

## Запросы и типы

```ts
import {KaitenClient} from '@2chevskii/kaiten-client';
import type {
  CardsCreateNewCardBody,
  CardsCreateNewCardResponse,
} from '@2chevskii/kaiten-client';

const client = new KaitenClient({
  origin: 'https://your-company.kaiten.ru',
  token: process.env.KAITEN_TOKEN!,
});

const request: CardsCreateNewCardBody = {
  title: 'Подготовить релиз',
  board_id: 10,
};
const card: CardsCreateNewCardResponse =
  await client.cards.createNewCard(request);
```

Методы принимают ID отдельными аргументами. Тела запросов передаются объектами типа `Body`, в том числе комментарии: `client.cardComments.addComment(cardId, {text})`. Большие тела и фильтры сохраняют объекты типов `Body` и `Query`: `client.cards.create(body)`, `client.cards.retrieveCardList(query)`. Последний аргумент — необязательный `OperationOptions` с `signal`. Методы API возвращают `Promise`, а методы `iterate` — асинхронный итератор. Типы `Params` описывают кортеж аргументов конкретного метода; его можно передать через `...args`.

`client.cards.create(...)` — короткий псевдоним `client.cards.createNewCard(...)`. Beta- и deprecated-операции остаются доступными и отмечены в типах.

## Создать карточку и добавить комментарий

Ответ одной операции может содержать ID, необходимый для следующего запроса. Для комментария небольшие поля передаются позиционными аргументами:

```ts
const created = await client.cards.createNewCard({
  title: 'Проверить руководство по началу работы',
  board_id: 10,
});

await client.cardComments.addComment(created.id, {text: 'Проверьте примеры.'});
console.log(`Создана карточка ${created.id}`);
```

## Автоматизации

Основной экспорт также содержит `AutomationBody`, `AutomationTrigger`, `AutomationTriggerType`, `AutomationAction`, `AutomationCondition` и `AutomationConditionGroup` для `client.automations`. Триггеры имеют перечисление допустимых имён; данные отдельных действий, которые Kaiten не специфицирует, остаются `unknown`.

```ts
import type {AutomationBody} from '@2chevskii/kaiten-client';

const automation: AutomationBody = {
  type: 'on_demand',
  name: 'Обновить карточку',
  actions: [{type: 'change_asap', data: {asap: true}}],
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
for await (const card of client.cards.iterate({board_id: 10, limit: 50})) {
  console.log(card.id, card.title);
  if (card.asap) break;
}
```

Первый запрос выполняется при начале перебора. `break` прекращает загрузку следующих страниц. Последний аргумент `{ signal }` позволяет отменить перебор, в том числе между элементами уже загруженной страницы. `start_position` продолжает поиск с имеющегося курсора. Поля `version` и `offset` исключены из типов запросов итераторов: они используют курсорную пагинацию версии 2.

Перебор завершается при пустой странице или пустом курсоре. Страница должна содержать массив `result` и строковый `position`; некорректные метаданные пагинации вызывают `TypeError`. Повторение курсора на непустой странице вызывает ошибку до выдачи её элементов. Методы получения одной страницы остаются доступны для ручного управления пагинацией.

При создании итератора значения запроса, включая массивы и вложенные фильтры, копируются, а сигнал сохраняется. Все страницы используют этот снимок параметров. Для отмены вызовите `abort` у контроллера сохранённого сигнала.

### Пользователи и теги

`users.iterate` и `tags.iterate` используют пагинацию через смещение и принимают те же объекты запроса, что и методы получения одной страницы:

```ts
for await (const user of client.users.iterate({include_inactive: true})) {
  console.log(user.id, user.full_name);
}

for await (const tag of client.tags.iterate({space_id: 10, limit: 50})) {
  console.log(tag.id, tag.name);
}
```

`offset` по умолчанию равен 0 и должен быть неотрицательным безопасным целым числом; `limit` по умолчанию равен 100 и должен быть целым числом от 1 до 100. Смещение увеличивается на фактическое число полученных элементов, в том числе при коротких страницах. Пустая страница завершает перебор, поэтому полный обход делает заключительный запрос пустой страницы. Ответ, который не является массивом, вызывает `TypeError`.

Эти итераторы также сохраняют снимок запроса и сигнал, поддерживают ранний выход и отмену и загружают по одной странице. `users.retrieveListOfUsers` и `tags.retrieveListOfTags` по-прежнему возвращают отдельные страницы.

## Типизированные фильтры карточек

Поля запроса карточек со списками через запятую также принимают readonly-массивы. Для ID используются числовые массивы, для состояний — значения `1 | 2 | 3`, для направлений сортировки — `"asc" | "desc"`:

```ts
const page = await client.cards.retrieveCardList({
  owner_ids: [123, 456],
  tag_ids: [10, 20],
  states: [1, 2],
  additional_card_fields: ['description'],
  order_by: ['created', 'id'],
  order_direction: ['desc', 'asc'],
});
```

Экспортируемый тип `QueryList<T>` допускает строку или `readonly T[]`. Транспорт соединяет элементы массивов запятыми; строки вроде `owner_ids: "123,456"` остаются допустимыми. Эти же поля доступны в `cards.iterate`.

Поле `filter` принимает объект `CardFilter` или готовую строку base64. Объект автоматически кодируется с использованием UTF-8:

```ts
import type {CardFilter} from '@2chevskii/kaiten-client';

const filter = {
  key: 'and',
  value: [
    {
      key: 'or',
      value: [
        {key: 'owner_id', comparison: 'eq', value: 123},
        {key: 'asap', comparison: 'true'},
      ],
    },
  ],
} satisfies CardFilter;

for await (const card of client.cards.iterate({filter})) {
  console.log(card.title);
}
```

Типы следуют [схеме фильтра Kaiten](https://developers.kaiten.ru/cards/retrieve-card-list): верхний `and`/`or` содержит группы условий, а ключ и сравнение определяют тип значения каждого условия. Для числовых пользовательских полей значения сравнений передаются строками; условия checkbox и attachment требуют `value: null`. Функция `encodeCardFilter(filter)` экспортируется для получения закодированной строки отдельно. Контракты других операций, принимающих строковые фильтры, сохраняются.

## ID и ответы

`users.retrieveListOfUsers` и `tags.retrieveListOfTags` принимают `ids` как `QueryList<number>`. Фильтры табеля `tag_ids`, `user_ids`, `group_ids`, `space_ids`, `board_ids`, `column_ids`, `card_ids` и `visible_column_ids` используют тот же тип:

```ts
const users = await client.users.retrieveListOfUsers({ids: [123, 456]});
const tags = await client.tags.retrieveListOfTags({ids: [10, 20]});
const timeLogs = await client.timesheet.getList({
  from: '2026-10-01',
  to: '2026-10-31',
  user_ids: [123, 456],
  board_ids: [10],
});
```

Запрос пользователей также поддерживает `exclude_members_by_entity_uid` для исключения прямых, групповых и унаследованных участников сущности. `exclude_directly_added_members_by_entity_uid` сохраняет более узкий смысл: исключаются только пользователи, приглашённые напрямую.

Kaiten использует и числовые ID, и UUID. Передавайте тот тип идентификатора, который указан в типе конкретного метода: например, `card_id: number` или `card_uid: string`. Даты остаются строками, документированные nullable-поля допускают `null`, неполные схемы представлены через `unknown`.

Для операций без итератора используйте `limit`, `offset` или курсор там, где их поддерживает операция. Подробности файловых маршрутов — в [отдельном руководстве](/ru/guide/files).
