# User metadata

Kaiten calls a metadata service that you configure. `@2chevskii/kaiten-client/metadata` exports request, response, and handler contracts; you provide the HTTP server.

```ts
import type {UserMetadataHandler} from '@2chevskii/kaiten-client/metadata';

const getMetadata: UserMetadataHandler = ({email, token}) => {
  // Validate token if your integration is configured to use one.
  return {
    description: `Employee: ${email}`,
    id_42: 'team-a',
  };
};
```

`UserMetadataRequest` contains `email` and an optional `token`. `UserMetadataResponse` accepts `description` and fields such as `id_42`; a field value can be a string, number, `null`, or object. `UserMetadataHandler` may be synchronous or asynchronous. Validate incoming requests and their token in your service. [Kaiten documentation](https://developers.kaiten.ru/user-metadata).
