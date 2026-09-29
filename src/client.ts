import { HttpTransport } from "./http.js";
import type { RestResources } from "./generated/rest.js";
import { createRestResources } from "./generated/rest.js";
import type { RestClientOptions } from "./http.js";

export class KaitenClient {
  readonly auditLogs: RestResources["auditLogs"];
  readonly automations: RestResources["automations"];
  readonly boards: RestResources["boards"];
  readonly cardAllowedUsers: RestResources["cardAllowedUsers"];
  readonly cardBlockerCategories: RestResources["cardBlockerCategories"];
  readonly cardBlockerUsers: RestResources["cardBlockerUsers"];
  readonly cardBlockers: RestResources["cardBlockers"];
  readonly cardChecklistItems: RestResources["cardChecklistItems"];
  readonly cardChecklists: RestResources["cardChecklists"];
  readonly cardChildren: RestResources["cardChildren"];
  readonly cardComments: RestResources["cardComments"];
  readonly cardExternalLinks: RestResources["cardExternalLinks"];
  readonly cardFiles: RestResources["cardFiles"];
  readonly cardMembers: RestResources["cardMembers"];
  readonly cardServiceDeskExternalRecipients: RestResources["cardServiceDeskExternalRecipients"];
  readonly cardSla: RestResources["cardSla"];
  readonly cardTags: RestResources["cardTags"];
  readonly cardTimeLogs: RestResources["cardTimeLogs"];
  readonly cardTypeTreeEntities: RestResources["cardTypeTreeEntities"];
  readonly cardTypes: RestResources["cardTypes"];
  readonly cards: RestResources["cards"];
  readonly checklistItems: RestResources["checklistItems"];
  readonly checklists: RestResources["checklists"];
  readonly columns: RestResources["columns"];
  readonly companyUsers: RestResources["companyUsers"];
  readonly customDirectories: RestResources["customDirectories"];
  readonly customDirectoryFields: RestResources["customDirectoryFields"];
  readonly customDirectoryRecords: RestResources["customDirectoryRecords"];
  readonly customProperties: RestResources["customProperties"];
  readonly customPropertyCatalogValues: RestResources["customPropertyCatalogValues"];
  readonly customPropertyCollectiveScoreValues: RestResources["customPropertyCollectiveScoreValues"];
  readonly customPropertyCollectiveVoteValues: RestResources["customPropertyCollectiveVoteValues"];
  readonly customPropertySelectValues: RestResources["customPropertySelectValues"];
  readonly customPropertyTreeEntities: RestResources["customPropertyTreeEntities"];
  readonly documentGroups: RestResources["documentGroups"];
  readonly documentSchemas: RestResources["documentSchemas"];
  readonly documents: RestResources["documents"];
  readonly groupAdmins: RestResources["groupAdmins"];
  readonly groupEntities: RestResources["groupEntities"];
  readonly groupUsers: RestResources["groupUsers"];
  readonly groups: RestResources["groups"];
  readonly iterations: RestResources["iterations"];
  readonly lanes: RestResources["lanes"];
  readonly restrictedAccessCardFiles: RestResources["restrictedAccessCardFiles"];
  readonly restrictedAccessCommentFiles: RestResources["restrictedAccessCommentFiles"];
  readonly restrictedAccessCustomPropertyFiles: RestResources["restrictedAccessCustomPropertyFiles"];
  readonly serviceDeskServices: RestResources["serviceDeskServices"];
  readonly spaceBoards: RestResources["spaceBoards"];
  readonly spaceTemplateChecklist: RestResources["spaceTemplateChecklist"];
  readonly spaceTemplateChecklistItems: RestResources["spaceTemplateChecklistItems"];
  readonly spaceUsers: RestResources["spaceUsers"];
  readonly spaces: RestResources["spaces"];
  readonly sprints: RestResources["sprints"];
  readonly subcolumn: RestResources["subcolumn"];
  readonly tags: RestResources["tags"];
  readonly timesheet: RestResources["timesheet"];
  readonly treeEntities: RestResources["treeEntities"];
  readonly treeEntityRoles: RestResources["treeEntityRoles"];
  readonly userRoles: RestResources["userRoles"];
  readonly users: RestResources["users"];

  constructor(options: RestClientOptions) {
    const transport = new HttpTransport(
      options,
      "/api/" + (options.apiVersion ?? "v1"),
    );
    const resources = createRestResources(transport);
    this.auditLogs = resources.auditLogs;
    this.automations = resources.automations;
    this.boards = resources.boards;
    this.cardAllowedUsers = resources.cardAllowedUsers;
    this.cardBlockerCategories = resources.cardBlockerCategories;
    this.cardBlockerUsers = resources.cardBlockerUsers;
    this.cardBlockers = resources.cardBlockers;
    this.cardChecklistItems = resources.cardChecklistItems;
    this.cardChecklists = resources.cardChecklists;
    this.cardChildren = resources.cardChildren;
    this.cardComments = resources.cardComments;
    this.cardExternalLinks = resources.cardExternalLinks;
    this.cardFiles = resources.cardFiles;
    this.cardMembers = resources.cardMembers;
    this.cardServiceDeskExternalRecipients =
      resources.cardServiceDeskExternalRecipients;
    this.cardSla = resources.cardSla;
    this.cardTags = resources.cardTags;
    this.cardTimeLogs = resources.cardTimeLogs;
    this.cardTypeTreeEntities = resources.cardTypeTreeEntities;
    this.cardTypes = resources.cardTypes;
    this.cards = resources.cards;
    this.checklistItems = resources.checklistItems;
    this.checklists = resources.checklists;
    this.columns = resources.columns;
    this.companyUsers = resources.companyUsers;
    this.customDirectories = resources.customDirectories;
    this.customDirectoryFields = resources.customDirectoryFields;
    this.customDirectoryRecords = resources.customDirectoryRecords;
    this.customProperties = resources.customProperties;
    this.customPropertyCatalogValues = resources.customPropertyCatalogValues;
    this.customPropertyCollectiveScoreValues =
      resources.customPropertyCollectiveScoreValues;
    this.customPropertyCollectiveVoteValues =
      resources.customPropertyCollectiveVoteValues;
    this.customPropertySelectValues = resources.customPropertySelectValues;
    this.customPropertyTreeEntities = resources.customPropertyTreeEntities;
    this.documentGroups = resources.documentGroups;
    this.documentSchemas = resources.documentSchemas;
    this.documents = resources.documents;
    this.groupAdmins = resources.groupAdmins;
    this.groupEntities = resources.groupEntities;
    this.groupUsers = resources.groupUsers;
    this.groups = resources.groups;
    this.iterations = resources.iterations;
    this.lanes = resources.lanes;
    this.restrictedAccessCardFiles = resources.restrictedAccessCardFiles;
    this.restrictedAccessCommentFiles = resources.restrictedAccessCommentFiles;
    this.restrictedAccessCustomPropertyFiles =
      resources.restrictedAccessCustomPropertyFiles;
    this.serviceDeskServices = resources.serviceDeskServices;
    this.spaceBoards = resources.spaceBoards;
    this.spaceTemplateChecklist = resources.spaceTemplateChecklist;
    this.spaceTemplateChecklistItems = resources.spaceTemplateChecklistItems;
    this.spaceUsers = resources.spaceUsers;
    this.spaces = resources.spaces;
    this.sprints = resources.sprints;
    this.subcolumn = resources.subcolumn;
    this.tags = resources.tags;
    this.timesheet = resources.timesheet;
    this.treeEntities = resources.treeEntities;
    this.treeEntityRoles = resources.treeEntityRoles;
    this.userRoles = resources.userRoles;
    this.users = resources.users;
  }
}
