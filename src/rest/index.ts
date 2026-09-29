/** REST operations grouped by Kaiten domain. */
import type { HttpTransport } from "../http.js";
import { createAuditResources } from "./audit.js";
import { createAutomationsResources } from "./automations.js";
import { createWorkspaceResources } from "./workspace.js";
import { createCardsResources } from "./cards.js";
import { createChecklistsResources } from "./checklists.js";
import { createFilesResources } from "./files.js";
import { createTaxonomyResources } from "./taxonomy.js";
import { createCustomFieldsResources } from "./custom-fields.js";
import { createDocumentsResources } from "./documents.js";
import { createIdentityResources } from "./identity.js";
import { createTimeResources } from "./time.js";
import { createServiceDeskResources } from "./service-desk.js";
import { createTagsResources } from "./tags.js";

export type * from "./audit.js";
export type * from "./automations.js";
export type * from "./workspace.js";
export type * from "./cards.js";
export type * from "./checklists.js";
export type * from "./files.js";
export type * from "./taxonomy.js";
export type * from "./custom-fields.js";
export type * from "./documents.js";
export type * from "./identity.js";
export type * from "./time.js";
export type * from "./service-desk.js";
export type * from "./tags.js";
export type { SearchResponseV2 } from "./search.js";

export const createRestResources = (transport: HttpTransport) => ({
  ...createAuditResources(transport),
  ...createAutomationsResources(transport),
  ...createWorkspaceResources(transport),
  ...createCardsResources(transport),
  ...createChecklistsResources(transport),
  ...createFilesResources(transport),
  ...createTaxonomyResources(transport),
  ...createCustomFieldsResources(transport),
  ...createDocumentsResources(transport),
  ...createIdentityResources(transport),
  ...createTimeResources(transport),
  ...createServiceDeskResources(transport),
  ...createTagsResources(transport),
});

export type RestResources = ReturnType<typeof createRestResources>;

export { REST_OPERATION_METADATA } from "./metadata.js";
