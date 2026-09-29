# Метаданные пользователя

Kaiten вызывает настроенный вами сервис для получения метаданных пользователя. Экспорт `@2chevskii/kaiten-client/metadata` содержит контракты запроса, ответа и обработчика; HTTP-сервер вы создаёте самостоятельно.

```ts
import type { UserMetadataHandler } from "@2chevskii/kaiten-client/metadata";

const getMetadata: UserMetadataHandler = ({ email, token }) => {
  // Проверьте token, если он настроен в вашей интеграции.
  return {
    description: `Сотрудник: ${email}`,
    id_42: "team-a",
  };
};
```

`UserMetadataRequest` содержит `email` и необязательный `token`. `UserMetadataResponse` допускает `description` и поля вида `id_42`; значение поля может быть строкой, числом, `null` или объектом. `UserMetadataHandler` может быть синхронным или асинхронным. Проверяйте входящие запросы и токен на своей стороне. [Документация Kaiten](https://developers.kaiten.ru/user-metadata).
