/** REST operations grouped by Kaiten domain. */
import type {HttpTransport} from '../http.ts';
import {createAuditResources} from './audit.ts';
import {createAutomationsResources} from './automations.ts';
import {createWorkspaceResources} from './workspace.ts';
import {createCardsResources} from './cards.ts';
import {createChecklistsResources} from './checklists.ts';
import {createFilesResources} from './files.ts';
import {createTaxonomyResources} from './taxonomy.ts';
import {createCustomFieldsResources} from './custom-fields.ts';
import {createDocumentsResources} from './documents.ts';
import {createIdentityResources} from './identity.ts';
import {createTimeResources} from './time.ts';
import {createServiceDeskResources} from './service-desk.ts';
import {createTagsResources} from './tags.ts';

export type * from './audit.ts';
export type * from './automations.ts';
export type * from './workspace.ts';
export type * from './cards.ts';
export type * from './checklists.ts';
export type * from './files.ts';
export type * from './taxonomy.ts';
export type * from './custom-fields.ts';
export type * from './documents.ts';
export type * from './identity.ts';
export type * from './time.ts';
export type * from './service-desk.ts';
export type * from './tags.ts';
export type {SearchResponseV2} from './search.ts';

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
