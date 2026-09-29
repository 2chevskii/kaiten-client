/** REST operations grouped by Kaiten domain. */
import type { HttpTransport } from "../http.js";
import { createAuditResources } from "./rest/audit.js";
import { createAutomationsResources } from "./rest/automations.js";
import { createWorkspaceResources } from "./rest/workspace.js";
import { createCardsResources } from "./rest/cards.js";
import { createChecklistsResources } from "./rest/checklists.js";
import { createFilesResources } from "./rest/files.js";
import { createTaxonomyResources } from "./rest/taxonomy.js";
import { createCustomFieldsResources } from "./rest/custom-fields.js";
import { createDocumentsResources } from "./rest/documents.js";
import { createIdentityResources } from "./rest/identity.js";
import { createTimeResources } from "./rest/time.js";
import { createServiceDeskResources } from "./rest/service-desk.js";
import { createTagsResources } from "./rest/tags.js";

export type * from "./rest/audit.js";
export type * from "./rest/automations.js";
export type * from "./rest/workspace.js";
export type * from "./rest/cards.js";
export type * from "./rest/checklists.js";
export type * from "./rest/files.js";
export type * from "./rest/taxonomy.js";
export type * from "./rest/custom-fields.js";
export type * from "./rest/documents.js";
export type * from "./rest/identity.js";
export type * from "./rest/time.js";
export type * from "./rest/service-desk.js";
export type * from "./rest/tags.js";
export type { SearchResponseV2 } from "./rest/search.js";

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

export { REST_OPERATION_METADATA } from "./rest/metadata.js";
