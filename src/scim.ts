import { HttpTransport } from "./http.ts";
import type { ClientOptions } from "./http.ts";
import type { ScimResources } from "./scim/operations.ts";
import { createScimResources } from "./scim/operations.ts";

export { SCIM_OPERATION_METADATA } from "./scim/operations.ts";
export type * from "./scim/operations.ts";
export type * from "./scim/types.ts";

export class KaitenScimClient {
  readonly groups: ScimResources["groups"];
  readonly users: ScimResources["users"];

  constructor(options: ClientOptions) {
    const resources = createScimResources(
      new HttpTransport(options, "/scim/v2"),
    );
    this.groups = resources.groups;
    this.users = resources.users;
  }
}
