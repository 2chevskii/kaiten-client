import type { HttpTransport, OperationOptions } from "../http.js";

import { pathSegment } from "../http.js";

import type { SearchResponseV2 } from "./search.js";

export interface DocumentGroupsCreateNewDocumentGroupBody {
  title: string;
  parent_entity_uid?: string | null;
  for_everyone_access_role_id?: string | null;
  sort_order?: number;
  key?: string | null;
}

export interface DocumentGroupsCreateNewDocumentGroupResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: string | null;
  parent_group_id: null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string | null;
  hostname: string | null;
  redirect_url: string | null;
  key: string | null;
  icon_type: string | null;
  icon_value: string | null;
  icon_color: number | null;
  public: boolean;
  news_feed: boolean;
  hidden_on_public_site: boolean;
  path: string;
  index_document_uid: string | null;
  access_record: {
    role: number;
    role_permissions: {
      document_group: {
        read: boolean;
        update: boolean;
        delete: boolean;
        create: boolean;
        access_control: boolean;
      };
    };
  };
}

export interface DocumentGroupsCreateNewDocumentGroupParams extends OperationOptions {
  body: DocumentGroupsCreateNewDocumentGroupBody;
  signal?: AbortSignal;
}

export interface DocumentGroupsRemoveDocumentGroupResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: null;
  parent_group_id: null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string;
  hostname: string;
  redirect_url: null;
  key: null;
  icon_type: null;
  icon_value: null;
  icon_color: null;
  public: boolean;
  news_feed: boolean;
  hidden_on_public_site: boolean;
  path: string;
  index_document_uid: null;
}

export interface DocumentGroupsRemoveDocumentGroupParams extends OperationOptions {
  document_group_uid: string;
  signal?: AbortSignal;
}

export interface DocumentGroupsRetrieveDocumentGroupResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: string | null;
  parent_group_id: null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string | null;
  hostname: string | null;
  redirect_url: string | null;
  key: string | null;
  icon_type: string | null;
  icon_value: string | null;
  icon_color: number | null;
  public: boolean;
  news_feed: boolean;
  hidden_on_public_site: boolean;
  path: string;
  index_document_uid: string | null;
  access_record: {
    role: number;
    role_permissions: {
      document_group: {
        read: boolean;
        update: boolean;
        delete: boolean;
        create: boolean;
        access_control: boolean;
      };
    };
  };
  documents?: unknown[] | null;
  groups?: unknown[] | null;
  parent?: Record<string, unknown> | null;
  author?: Record<string, unknown> | null;
}

export interface DocumentGroupsRetrieveDocumentGroupParams extends OperationOptions {
  document_group_uid: string;
  signal?: AbortSignal;
}

export interface DocumentGroupsRetrieveListOfDocumentGroupsQuery {
  query?: string;
  offset?: number;
  limit?: number;
  version?: 1 | 2;
  condition?: number;
  start_position?: string;
  role?: number;
}

export type DocumentGroupsRetrieveListOfDocumentGroupsResponse = (
  | {
      uid: string;
      id: number;
      title: string;
      created: string;
      updated: string;
      archived: boolean;
      company_id: number;
      author_id: number;
      parent_entity_uid: string | null;
      parent_group_id: null;
      entity_type: string;
      sort_order: number;
      access: string;
      for_everyone_access_role_id: string | null;
      hostname: string | null;
      redirect_url: string | null;
      key: string | null;
      icon_type: string | null;
      icon_value: string | null;
      icon_color: number | null;
      public: boolean;
      news_feed: boolean;
      hidden_on_public_site: boolean;
      path: string;
      index_document_uid: string | null;
    }
  | {
      uid: string;
      id: number;
      title: string;
      created: string;
      updated: string;
      archived: boolean;
      company_id: number;
      author_id: number;
      parent_entity_uid: string | null;
      parent_group_id: string;
      entity_type: string;
      sort_order: number;
      access: string;
      for_everyone_access_role_id: string | null;
      hostname: string | null;
      redirect_url: string | null;
      key: string | null;
      icon_type: string | null;
      icon_value: string | null;
      icon_color: number | null;
      public: boolean;
      news_feed: boolean;
      hidden_on_public_site: boolean;
      path: string;
      index_document_uid: string | null;
    }
)[];

export interface DocumentGroupsRetrieveListOfDocumentGroupsParams extends OperationOptions {
  query?: DocumentGroupsRetrieveListOfDocumentGroupsQuery;
  signal?: AbortSignal;
}

export type DocumentGroupsUpdateDocumentGroupBody = unknown;

export interface DocumentGroupsUpdateDocumentGroupResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: string | null;
  parent_group_id: null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string | null;
  hostname: string | null;
  redirect_url: string | null;
  key: string | null;
  icon_type: string | null;
  icon_value: string | null;
  icon_color: number | null;
  public: boolean;
  news_feed: boolean;
  hidden_on_public_site: boolean;
  path: string;
  index_document_uid: string | null;
  access_record: {
    role: number;
    role_permissions: {
      document_group: {
        read: boolean;
        update: boolean;
        delete: boolean;
        create: boolean;
        access_control: boolean;
      };
    };
  };
}

export interface DocumentGroupsUpdateDocumentGroupParams extends OperationOptions {
  document_group_uid: string;
  body: DocumentGroupsUpdateDocumentGroupBody;
  signal?: AbortSignal;
}

export interface DocumentSchemasGetDocumentDataSchemaQuery {
  format?: string;
}

export type DocumentSchemasGetDocumentDataSchemaBody = unknown;

export interface DocumentSchemasGetDocumentDataSchemaResponse {
  $schema: string;
  $id: string;
  title: string;
  description: string;
  allOf: {
    $ref: string;
  }[];
  version: string;
  definitions: {
    nodes: {
      doc: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
        };
      };
      text: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          text: {
            type: string;
          };
        };
        "x-prosemirror": {
          group: string;
        };
      };
      hard_break: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
        };
        "x-prosemirror": {
          inline: boolean;
          group: string;
          selectable: boolean;
        };
      };
      paragraph: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              id: {
                type: string[];
              };
              textAlign: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
          attrs: {
            id: Record<string, unknown>;
            textAlign: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
          group: string;
        };
      };
      horizontal_rule: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          attrs: {
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      heading: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              level: {
                type: string;
                default: number;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
          group: string;
          defining: boolean;
          attrs: {
            level: {
              default: number;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      heading1: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              id: {
                type: string[];
              };
              textAlign: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
          group: string;
          defining: boolean;
          attrs: {
            id: Record<string, unknown>;
            textAlign: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      heading2: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              id: {
                type: string[];
              };
              textAlign: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
          group: string;
          defining: boolean;
          attrs: {
            id: Record<string, unknown>;
            textAlign: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      heading3: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              id: {
                type: string[];
              };
              textAlign: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
          group: string;
          defining: boolean;
          attrs: {
            id: Record<string, unknown>;
            textAlign: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      blockquote: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
          group: string;
          attrs: {
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      code_block: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              language: {
                type: string;
                default: string;
              };
              lineNumbers: {
                type: string;
                default: boolean;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
          group: string;
          selectable: boolean;
          code: boolean;
          defining: boolean;
          marks: string;
          attrs: {
            language: {
              default: string;
            };
            lineNumbers: {
              default: boolean;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      image: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              id: {
                type: string[];
              };
              src: {
                type: string;
                default: string;
              };
              alt: {
                type: string[];
                default: null;
              };
              title: {
                type: string[];
                default: null;
              };
              size: {
                type: string;
                default: string;
              };
              loading: {
                type: string[];
              };
              width: {
                type: string[];
                default: null;
              };
              height: {
                type: string[];
                default: null;
              };
              plantuml: {
                type: string[];
              };
              plantumlEncodedMD: {
                type: string[];
              };
              fileId: {
                type: string[];
              };
            };
          };
        };
        "x-prosemirror": {
          selectable: boolean;
          draggable: boolean;
          isolating: boolean;
          attrs: {
            id: Record<string, unknown>;
            src: {
              default: string;
            };
            alt: {
              default: null;
            };
            title: {
              default: null;
            };
            size: {
              default: string;
            };
            loading: Record<string, unknown>;
            width: {
              default: null;
            };
            height: {
              default: null;
            };
            plantuml: Record<string, unknown>;
            plantumlEncodedMD: Record<string, unknown>;
            fileId: Record<string, unknown>;
          };
        };
      };
      embed: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              src: {
                type: string;
                default: string;
              };
              size: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          selectable: boolean;
          draggable: boolean;
          isolating: boolean;
          attrs: {
            src: {
              default: string;
            };
            size: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      ordered_list: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              order: {
                type: string;
                default: number;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          attrs: {
            order: {
              default: number;
              validate: string;
            };
            "data-block-id": {
              default: null;
            };
          };
          group: string;
          content: string;
        };
      };
      bullet_list: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          group: string;
          content: string;
          attrs: {
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      list_item: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          defining: boolean;
          content: string;
        };
      };
      table: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              size: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
          tableRole: string;
          isolating: boolean;
          group: string;
          attrs: {
            size: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      table_row: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
          tableRole: string;
        };
      };
      table_cell: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              colspan: {
                type: string;
                default: number;
              };
              rowspan: {
                type: string;
                default: number;
              };
              colwidth: {
                type: string[];
                default: null;
              };
              background: {
                type: string[];
                default: null;
              };
              color: {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
          attrs: {
            colspan: {
              default: number;
              validate: string;
            };
            rowspan: {
              default: number;
              validate: string;
            };
            colwidth: {
              default: null;
            };
            background: {
              default: null;
            };
            color: {
              default: null;
            };
          };
          tableRole: string;
          isolating: boolean;
        };
      };
      table_header: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              colspan: {
                type: string;
                default: number;
              };
              rowspan: {
                type: string;
                default: number;
              };
              colwidth: {
                type: string[];
                default: null;
              };
              background: {
                type: string[];
                default: null;
              };
              color: {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
          attrs: {
            colspan: {
              default: number;
              validate: string;
            };
            rowspan: {
              default: number;
              validate: string;
            };
            colwidth: {
              default: null;
            };
            background: {
              default: null;
            };
            color: {
              default: null;
            };
          };
          tableRole: string;
          isolating: boolean;
        };
      };
      alert: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              type: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
          group: string;
          selectable: boolean;
          defining: boolean;
          attrs: {
            type: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      file: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              id: {
                type: string[];
              };
              url: {
                type: string;
                default: string;
              };
              name: {
                type: string;
                default: string;
              };
              size: {
                type: string[];
              };
              type: {
                type: string[];
              };
              fileId: {
                type: string[];
              };
              loadingByClientID: {
                type: string[];
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          selectable: boolean;
          draggable: boolean;
          isolating: boolean;
          attrs: {
            id: Record<string, unknown>;
            url: {
              default: string;
            };
            name: {
              default: string;
            };
            size: Record<string, unknown>;
            type: Record<string, unknown>;
            fileId: Record<string, unknown>;
            loadingByClientID: Record<string, unknown>;
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      inline_card_link: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              type: {
                type: string[];
                default: null;
              };
              resourceId: {
                type: string[];
                default: null;
              };
              url: {
                type: string[];
                default: null;
              };
              linkId: {
                type: string;
                default: string;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          inline: boolean;
          selectable: boolean;
          draggable: boolean;
          atom: boolean;
          attrs: {
            type: {
              default: null;
            };
            resourceId: {
              default: null;
            };
            url: {
              default: null;
            };
            linkId: {
              default: string;
            };
          };
        };
      };
      block_card_link: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              type: {
                type: string[];
                default: null;
              };
              resourceId: {
                type: string[];
                default: null;
              };
              url: {
                type: string[];
                default: null;
              };
              linkId: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          inline: boolean;
          selectable: boolean;
          draggable: boolean;
          atom: boolean;
          attrs: {
            type: {
              default: null;
            };
            resourceId: {
              default: null;
            };
            url: {
              default: null;
            };
            linkId: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      cards_collection: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              filter: {
                type: string[];
                default: null;
              };
              linkId: {
                type: string;
                default: string;
              };
              size: {
                type: string;
                default: string;
              };
              columnsMeta: {
                type: string;
                default: unknown[];
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          inline: boolean;
          selectable: boolean;
          draggable: boolean;
          atom: boolean;
          attrs: {
            filter: {
              default: null;
            };
            linkId: {
              default: string;
            };
            size: {
              default: string;
            };
            columnsMeta: {
              default: unknown[];
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      diagram: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              diagramId: {
                type: string[];
                default: null;
              };
              src: {
                type: string[];
                default: null;
              };
              alt: {
                type: string;
                default: string;
              };
              size: {
                type: string;
                default: string;
              };
              format: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          draggable: boolean;
          sortable: boolean;
          isolating: boolean;
          attrs: {
            diagramId: {
              default: null;
            };
            src: {
              default: null;
            };
            alt: {
              default: string;
            };
            size: {
              default: string;
            };
            format: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      check_list: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          group: string;
          content: string;
          attrs: {
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      check_list_item: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              checked: {
                type: string;
                default: boolean;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
          attrs: {
            checked: {
              default: boolean;
            };
          };
          defining: boolean;
        };
      };
      columns: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              borderStyle: {
                type: string;
                default: string;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          group: string;
          content: string;
          isolating: boolean;
          attrs: {
            borderStyle: {
              default: string;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      column: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              width: {
                type: string;
                default: number;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
          isolating: boolean;
          attrs: {
            width: {
              default: number;
            };
          };
        };
      };
      toggle: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              collapsed: {
                type: string;
                default: boolean;
              };
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          group: string;
          content: string;
          isolating: boolean;
          attrs: {
            collapsed: {
              default: boolean;
            };
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      toggle_heading: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
        };
      };
      toggle_content: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          content: string;
        };
      };
      table_of_contents: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          atom: boolean;
          selectable: boolean;
          draggable: boolean;
          attrs: {
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      imageBlock: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              "data-block-id": {
                type: string[];
                default: null;
              };
            };
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
            minItems: number;
          };
        };
        "x-prosemirror": {
          group: string;
          content: string;
          selectable: boolean;
          draggable: boolean;
          isolating: boolean;
          attrs: {
            "data-block-id": {
              default: null;
            };
          };
        };
      };
      imageCaption: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          content: {
            type: string;
            items: {
              anyOf: {
                $ref: string;
              }[];
            };
          };
        };
        "x-prosemirror": {
          content: string;
          selectable: boolean;
          draggable: boolean;
        };
      };
    };
    marks: {
      annotation: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              id: {
                type: string[];
              };
              resolved: {
                type: string;
                default: boolean;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          attrs: {
            id: Record<string, unknown>;
            resolved: {
              default: boolean;
            };
          };
          inclusive: boolean;
          excludes: string;
        };
      };
      color: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              color: {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          attrs: {
            color: {
              default: null;
            };
          };
        };
      };
      highlight: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              color: {
                type: string[];
                default: null;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          attrs: {
            color: {
              default: null;
            };
          };
        };
      };
      underline: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
        };
        "x-prosemirror": {
          group: string;
        };
      };
      strong: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
        };
        "x-prosemirror": {
          group: string;
        };
      };
      strike: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
        };
        "x-prosemirror": {
          group: string;
        };
      };
      em: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
        };
        "x-prosemirror": {
          group: string;
        };
      };
      code: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
        };
        "x-prosemirror": {
          content: string;
          group: string;
        };
      };
      link: {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
          type: {
            const: string;
          };
          attrs: {
            type: string;
            additionalProperties: boolean;
            properties: {
              href: {
                type: string[];
              };
              title: {
                type: string[];
                default: null;
              };
              target: {
                type: string;
                default: string;
              };
              rel: {
                type: string;
                default: string;
              };
            };
          };
        };
        "x-prosemirror": {
          group: string;
          attrs: {
            href: Record<string, unknown>;
            title: {
              default: null;
            };
            target: {
              default: string;
            };
            rel: {
              default: string;
            };
          };
          inclusive: boolean;
        };
      };
    };
  };
}

export interface DocumentSchemasGetDocumentDataSchemaParams extends OperationOptions {
  id: string;
  query?: DocumentSchemasGetDocumentDataSchemaQuery;
  body?: DocumentSchemasGetDocumentDataSchemaBody;
  signal?: AbortSignal;
}

export interface DocumentsCreateNewDocumentBody {
  title?: string;
  sort_order: number;
  parent_entity_uid?: string | null;
  for_everyone_access_role_id?: string;
  clone_uid?: string;
  clone_version?: number;
  key?: string | null;
}

export interface DocumentsCreateNewDocumentResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: string | null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string | null;
  data: {
    type: string;
    content: {
      type: string;
    }[];
  };
  version: number;
  published_version: number | null;
  publish_date: string | null;
  public: boolean;
  hidden_on_public_site: boolean;
  settings: Record<string, unknown>;
  key: string | null;
  redirect_url: string | null;
  icon_type: string | null;
  icon_value: string | null;
  icon_color: number | null;
  path: string;
  schema_version: number;
  notification_period_start: string | null;
  notification_period_end: string | null;
  group_id: null;
  access_record: {
    role: number;
    role_permissions: {
      document: {
        read: boolean;
        update: boolean;
        delete: boolean;
        create: boolean;
      };
    };
  };
}

export interface DocumentsCreateNewDocumentParams extends OperationOptions {
  body: DocumentsCreateNewDocumentBody;
  signal?: AbortSignal;
}

export interface DocumentsRemoveDocumentResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string;
  version: number;
  published_version: number;
  publish_date: null;
  public: boolean;
  hidden_on_public_site: boolean;
  settings: Record<string, unknown>;
  key: null;
  redirect_url: null;
  icon_type: null;
  icon_value: null;
  icon_color: null;
  path: string;
  schema_version: number;
  notification_period_start: null;
  notification_period_end: null;
  group_id: null;
}

export interface DocumentsRemoveDocumentParams extends OperationOptions {
  document_uid: string;
  signal?: AbortSignal;
}

export interface DocumentsRetrieveDocumentResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: string | null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string | null;
  data: {
    type: string;
    content: {
      type: string;
      content: {
        type: string;
        text: string;
      }[];
    }[];
  };
  version: number;
  published_version: number | null;
  publish_date: string | null;
  public: boolean;
  hidden_on_public_site: boolean;
  settings: Record<string, unknown>;
  key: string | null;
  redirect_url: string | null;
  icon_type: string | null;
  icon_value: string | null;
  icon_color: number | null;
  path: string;
  schema_version: number;
  notification_period_start: string | null;
  notification_period_end: string | null;
  group_id: null;
  access_record: {
    role: number;
    role_permissions: {
      document: {
        read: boolean;
        update: boolean;
        delete: boolean;
        create: boolean;
      };
    };
  };
}

export interface DocumentsRetrieveDocumentParams extends OperationOptions {
  document_uid: string;
  signal?: AbortSignal;
}

export interface DocumentsRetrieveListOfDocumentsQuery {
  query?: string;
  offset?: number;
  limit?: number;
  version?: 1 | 2;
  condition?: number;
  fields?: string;
  start_position?: string;
  include_search_preview?: boolean;
}

export type DocumentsRetrieveListOfDocumentsResponse = (
  | {
      uid: string;
      id: number;
      title: string;
      created: string;
      updated: string;
      archived: boolean;
      company_id: number;
      author_id: number;
      parent_entity_uid: string | null;
      entity_type: string;
      sort_order: number;
      access: string;
      for_everyone_access_role_id: string | null;
      version: number;
      published_version: number | null;
      publish_date: string | null;
      public: boolean;
      hidden_on_public_site: boolean;
      settings: Record<string, unknown>;
      key: string | null;
      redirect_url: string | null;
      icon_type: string | null;
      icon_value: string | null;
      icon_color: number | null;
      path: string;
      schema_version: number;
      notification_period_start: string | null;
      notification_period_end: string | null;
      group_id: null;
    }
  | {
      uid: string;
      id: number;
      title: string;
      created: string;
      updated: string;
      archived: boolean;
      company_id: number;
      author_id: number;
      parent_entity_uid: string | null;
      entity_type: string;
      sort_order: number;
      access: string;
      for_everyone_access_role_id: string | null;
      version: number;
      published_version: number | null;
      publish_date: string | null;
      public: boolean;
      hidden_on_public_site: boolean;
      settings: Record<string, unknown>;
      key: string | null;
      redirect_url: string | null;
      icon_type: string | null;
      icon_value: string | null;
      icon_color: number | null;
      path: string;
      schema_version: number;
      notification_period_start: string | null;
      notification_period_end: string | null;
      group_id: string;
    }
)[];

export interface DocumentsRetrieveListOfDocumentsParams extends OperationOptions {
  query?: DocumentsRetrieveListOfDocumentsQuery;
  signal?: AbortSignal;
}

export type DocumentsUpdateDocumentBody = unknown;

export interface DocumentsUpdateDocumentResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: string | null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string | null;
  data: {
    type: string;
    content: {
      type: string;
      content: {
        type: string;
        text: string;
      }[];
    }[];
  };
  version: number;
  published_version: number | null;
  publish_date: string | null;
  public: boolean;
  hidden_on_public_site: boolean;
  settings: Record<string, unknown>;
  key: string | null;
  redirect_url: string | null;
  icon_type: string | null;
  icon_value: string | null;
  icon_color: number | null;
  path: string;
  schema_version: number;
  notification_period_start: string | null;
  notification_period_end: string | null;
  group_id: null;
  access_record: {
    role: number;
    role_permissions: {
      document: {
        read: boolean;
        update: boolean;
        delete: boolean;
        create: boolean;
      };
    };
  };
}

export interface DocumentsUpdateDocumentParams extends OperationOptions {
  document_uid: string;
  body: DocumentsUpdateDocumentBody;
  signal?: AbortSignal;
}

export const createDocumentsResources = (transport: HttpTransport) => ({
  documentGroups: {
    /** @see https://developers.kaiten.ru/document-groups/create-new-document-group */
    createNewDocumentGroup: (
      params: DocumentGroupsCreateNewDocumentGroupParams,
    ) => {
      return transport.request<DocumentGroupsCreateNewDocumentGroupResponse>({
        method: "POST",
        path: "/document-groups",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/document-groups/remove-document-group */
    removeDocumentGroup: (params: DocumentGroupsRemoveDocumentGroupParams) => {
      return transport.request<DocumentGroupsRemoveDocumentGroupResponse>({
        method: "DELETE",
        path: "/document-groups/" + pathSegment(params.document_group_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/document-groups/retrieve-document-group */
    retrieveDocumentGroup: (
      params: DocumentGroupsRetrieveDocumentGroupParams,
    ) => {
      return transport.request<DocumentGroupsRetrieveDocumentGroupResponse>({
        method: "GET",
        path: "/document-groups/" + pathSegment(params.document_group_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/document-groups/retrieve-list-of-document-groups */
    retrieveListOfDocumentGroups: <Version extends 1 | 2 = 1>(
      params: Omit<
        DocumentGroupsRetrieveListOfDocumentGroupsParams,
        "query"
      > & {
        query?: Omit<
          DocumentGroupsRetrieveListOfDocumentGroupsQuery,
          "version"
        > & { version?: Version };
      } = {},
    ) => {
      return transport.request<
        Version extends 2
          ? SearchResponseV2<DocumentGroupsRetrieveListOfDocumentGroupsResponse>
          : DocumentGroupsRetrieveListOfDocumentGroupsResponse
      >({
        method: "GET",
        path: "/document-groups",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/document-groups/update-document-group */
    updateDocumentGroup: (params: DocumentGroupsUpdateDocumentGroupParams) => {
      return transport.request<DocumentGroupsUpdateDocumentGroupResponse>({
        method: "PATCH",
        path: "/document-groups/" + pathSegment(params.document_group_uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  documentSchemas: {
    /** @see https://developers.kaiten.ru/document-schemas/get-document-data-schema */
    getDocumentDataSchema: (
      params: DocumentSchemasGetDocumentDataSchemaParams,
    ) => {
      return transport.request<DocumentSchemasGetDocumentDataSchemaResponse>({
        method: "GET",
        path: "/document-schemas/" + pathSegment(params.id),
        query: params.query,
        body: params.body,
        signal: params.signal,
      });
    },
  },
  documents: {
    /** @see https://developers.kaiten.ru/documents/create-new-document */
    createNewDocument: (params: DocumentsCreateNewDocumentParams) => {
      return transport.request<DocumentsCreateNewDocumentResponse>({
        method: "POST",
        path: "/documents",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/documents/remove-document */
    removeDocument: (params: DocumentsRemoveDocumentParams) => {
      return transport.request<DocumentsRemoveDocumentResponse>({
        method: "DELETE",
        path: "/documents/" + pathSegment(params.document_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/documents/retrieve-document */
    retrieveDocument: (params: DocumentsRetrieveDocumentParams) => {
      return transport.request<DocumentsRetrieveDocumentResponse>({
        method: "GET",
        path: "/documents/" + pathSegment(params.document_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/documents/retrieve-list-of-documents */
    retrieveListOfDocuments: <Version extends 1 | 2 = 1>(
      params: Omit<DocumentsRetrieveListOfDocumentsParams, "query"> & {
        query?: Omit<DocumentsRetrieveListOfDocumentsQuery, "version"> & {
          version?: Version;
        };
      } = {},
    ) => {
      return transport.request<
        Version extends 2
          ? SearchResponseV2<DocumentsRetrieveListOfDocumentsResponse>
          : DocumentsRetrieveListOfDocumentsResponse
      >({
        method: "GET",
        path: "/documents",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/documents/update-document */
    updateDocument: (params: DocumentsUpdateDocumentParams) => {
      return transport.request<DocumentsUpdateDocumentResponse>({
        method: "PATCH",
        path: "/documents/" + pathSegment(params.document_uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
});
