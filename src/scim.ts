import { HttpTransport } from "./http.js";
import type { ClientOptions } from "./http.js";
import type { ScimResources } from "./generated/scim.js";
import { createScimResources } from "./generated/scim.js";

export { SCIM_OPERATION_METADATA } from "./generated/scim.js";
export type * from "./generated/scim.js";

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
