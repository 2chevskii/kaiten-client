import { HttpTransport } from "./http.js";
import type { ClientOptions } from "./http.js";
import type { ScimResources } from "./scim/operations.js";
import { createScimResources } from "./scim/operations.js";

export { SCIM_OPERATION_METADATA } from "./scim/operations.js";
export type * from "./scim/operations.js";
export type * from "./scim/types.js";

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
