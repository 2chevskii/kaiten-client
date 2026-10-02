import type {
  DocumentJsonSchema,
  DocumentProseMirrorSchema,
} from "../document-data.ts";
import type { DocumentData } from "../document-data.ts";
import type { JsonValue, RequireAtLeastOne } from "../types.ts";
import type { HttpTransport, OperationOptions } from "../http.ts";

import { pathSegment } from "../http.ts";

import type { SearchResponseV2 } from "./search.ts";
import { iterateSearchResults } from "./search.ts";

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
  parent_group_id: number | null;
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

export type DocumentGroupsCreateNewDocumentGroupParams = Parameters<
  ReturnType<
    typeof createDocumentsResources
  >["documentGroups"]["createNewDocumentGroup"]
>;

export interface DocumentGroupsRemoveDocumentGroupResponse {
  uid: string;
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  company_id: number;
  author_id: number;
  parent_entity_uid: string | null;
  parent_group_id: number | null;
  entity_type: string;
  sort_order: number;
  access: string;
  for_everyone_access_role_id: string;
  hostname: string;
  redirect_url: string | null;
  key: JsonValue;
  icon_type: JsonValue;
  icon_value: JsonValue;
  icon_color: JsonValue;
  public: boolean;
  news_feed: boolean;
  hidden_on_public_site: boolean;
  path: string;
  index_document_uid: string | null;
}

export type DocumentGroupsRemoveDocumentGroupParams = Parameters<
  ReturnType<
    typeof createDocumentsResources
  >["documentGroups"]["removeDocumentGroup"]
>;

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
  parent_group_id: number | null;
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

export type DocumentGroupsRetrieveDocumentGroupParams = Parameters<
  ReturnType<
    typeof createDocumentsResources
  >["documentGroups"]["retrieveDocumentGroup"]
>;

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
      parent_group_id: string | null;
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

export type DocumentGroupsRetrieveListOfDocumentGroupsParams = Parameters<
  ReturnType<
    typeof createDocumentsResources
  >["documentGroups"]["retrieveListOfDocumentGroups"]
>;

export type DocumentGroupsUpdateDocumentGroupBody = RequireAtLeastOne<
  {
    title?: string;
    parent_entity_uid?: string | null;
    sort_order?: number;
    access?: "for_everyone" | "by_invite";
    for_everyone_access_role_id?: string | null;
    hostname?: string | null;
    redirect_url?: string | null;
    key?: string | null;
    icon_type?: "material_icon" | null;
    icon_value?: string | null;
    icon_color?: number | null;
    hidden_on_public_site?: boolean;
    news_feed?: boolean;
    index_document_uid?: string | null;
  },
  | "title"
  | "parent_entity_uid"
  | "sort_order"
  | "access"
  | "hostname"
  | "key"
  | "icon_type"
  | "hidden_on_public_site"
  | "news_feed"
  | "index_document_uid"
>;

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
  parent_group_id: number | null;
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

export type DocumentGroupsUpdateDocumentGroupParams = Parameters<
  ReturnType<
    typeof createDocumentsResources
  >["documentGroups"]["updateDocumentGroup"]
>;

export interface DocumentSchemasGetDocumentDataSchemaQuery {
  format?: "draft-06" | "prosemirror";
}

export type DocumentSchemasGetDocumentDataSchemaResponse =
  DocumentJsonSchema | DocumentProseMirrorSchema;

export type DocumentSchemasGetDocumentDataSchemaParams = Parameters<
  ReturnType<
    typeof createDocumentsResources
  >["documentSchemas"]["getDocumentDataSchema"]
>;

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
  data: DocumentData;
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
  group_id: number | null;
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

export type DocumentsCreateNewDocumentParams = Parameters<
  ReturnType<typeof createDocumentsResources>["documents"]["createNewDocument"]
>;

export interface DocumentsRemoveDocumentResponse {
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
  for_everyone_access_role_id: string;
  version: number;
  published_version: number;
  publish_date: string | null;
  public: boolean;
  hidden_on_public_site: boolean;
  settings: Record<string, unknown>;
  key: JsonValue;
  redirect_url: string | null;
  icon_type: JsonValue;
  icon_value: JsonValue;
  icon_color: JsonValue;
  path: string;
  schema_version: number;
  notification_period_start: string | null;
  notification_period_end: string | null;
  group_id: number | null;
}

export type DocumentsRemoveDocumentParams = Parameters<
  ReturnType<typeof createDocumentsResources>["documents"]["removeDocument"]
>;

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
  data: DocumentData;
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
  group_id: number | null;
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

export type DocumentsRetrieveDocumentParams = Parameters<
  ReturnType<typeof createDocumentsResources>["documents"]["retrieveDocument"]
>;

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
      group_id: string | null;
    }
)[];

export type DocumentsRetrieveListOfDocumentsParams = Parameters<
  ReturnType<
    typeof createDocumentsResources
  >["documents"]["retrieveListOfDocuments"]
>;

export type DocumentsUpdateDocumentBody = RequireAtLeastOne<
  {
    title?: string;
    sort_order?: number;
    publish_date?: string | null;
    data?: DocumentData;
    access?: "for_everyone" | "by_invite";
    parent_entity_uid?: string | null;
    for_everyone_access_role_id?: string;
    public?: boolean;
    redirect_url?: string | null;
    hidden_on_public_site?: boolean;
    settings?: {
      content_width?: "default" | "wide";
    };
    backup_version?: number;
    published_version?: number | null | "current";
    key?: string | null;
    icon_type?: "emoji" | "material_icon" | null;
    icon_value?: string | null;
    icon_color?: number | null;
    notification_period_start?: string | null;
    notification_period_end?: string | null;
    slug?: string | null;
  },
  | "title"
  | "sort_order"
  | "data"
  | "access"
  | "parent_entity_uid"
  | "for_everyone_access_role_id"
  | "public"
  | "publish_date"
  | "redirect_url"
  | "hidden_on_public_site"
  | "settings"
  | "backup_version"
  | "published_version"
  | "key"
  | "icon_type"
  | "icon_value"
  | "icon_color"
  | "notification_period_start"
  | "notification_period_end"
  | "slug"
>;

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
  data: DocumentData;
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
  group_id: number | null;
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

export type DocumentsUpdateDocumentParams = Parameters<
  ReturnType<typeof createDocumentsResources>["documents"]["updateDocument"]
>;

export type DocumentsIterateQuery = Omit<
  DocumentsRetrieveListOfDocumentsQuery,
  "version" | "offset"
>;

export type DocumentGroupsIterateQuery = Omit<
  DocumentGroupsRetrieveListOfDocumentGroupsQuery,
  "version" | "offset"
>;

export type DocumentsIterateParams = Parameters<
  ReturnType<typeof createDocumentsResources>["documents"]["iterate"]
>;

export type DocumentGroupsIterateParams = Parameters<
  ReturnType<typeof createDocumentsResources>["documentGroups"]["iterate"]
>;

export const createDocumentsResources = (transport: HttpTransport) => {
  function retrieveListOfDocumentGroups(
    query: DocumentGroupsRetrieveListOfDocumentGroupsQuery & { version: 2 },
    options?: OperationOptions,
  ): Promise<
    SearchResponseV2<DocumentGroupsRetrieveListOfDocumentGroupsResponse>
  >;
  function retrieveListOfDocumentGroups(
    query?: Omit<DocumentGroupsRetrieveListOfDocumentGroupsQuery, "version"> & {
      version?: 1;
    },
    options?: OperationOptions,
  ): Promise<DocumentGroupsRetrieveListOfDocumentGroupsResponse>;
  function retrieveListOfDocumentGroups(
    query: DocumentGroupsRetrieveListOfDocumentGroupsQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    | DocumentGroupsRetrieveListOfDocumentGroupsResponse
    | SearchResponseV2<DocumentGroupsRetrieveListOfDocumentGroupsResponse>
  >;
  function retrieveListOfDocumentGroups(
    query?: DocumentGroupsRetrieveListOfDocumentGroupsQuery,
    options?: OperationOptions,
  ): Promise<
    | DocumentGroupsRetrieveListOfDocumentGroupsResponse
    | SearchResponseV2<DocumentGroupsRetrieveListOfDocumentGroupsResponse>
  > {
    return transport.request<
      | DocumentGroupsRetrieveListOfDocumentGroupsResponse
      | SearchResponseV2<DocumentGroupsRetrieveListOfDocumentGroupsResponse>
    >({
      method: "GET",
      path: "/document-groups",
      query,
      signal: options?.signal,
    });
  }

  function getDocumentDataSchema(
    schemaVersion: string,
    format: "prosemirror",
    options?: OperationOptions,
  ): Promise<DocumentProseMirrorSchema>;
  function getDocumentDataSchema(
    schemaVersion: string,
    format?: "draft-06",
    options?: OperationOptions,
  ): Promise<DocumentJsonSchema>;
  function getDocumentDataSchema(
    schemaVersion: string,
    format: "draft-06" | "prosemirror" | undefined,
    options?: OperationOptions,
  ): Promise<DocumentSchemasGetDocumentDataSchemaResponse>;
  function getDocumentDataSchema(
    schemaVersion: string,
    format?: "draft-06" | "prosemirror",
    options?: OperationOptions,
  ): Promise<DocumentSchemasGetDocumentDataSchemaResponse> {
    return transport.request<DocumentSchemasGetDocumentDataSchemaResponse>({
      method: "GET",
      path: "/document-schemas/" + pathSegment(schemaVersion),
      query: { format },
      signal: options?.signal,
    });
  }

  function retrieveListOfDocuments(
    query: DocumentsRetrieveListOfDocumentsQuery & { version: 2 },
    options?: OperationOptions,
  ): Promise<SearchResponseV2<DocumentsRetrieveListOfDocumentsResponse>>;
  function retrieveListOfDocuments(
    query?: Omit<DocumentsRetrieveListOfDocumentsQuery, "version"> & {
      version?: 1;
    },
    options?: OperationOptions,
  ): Promise<DocumentsRetrieveListOfDocumentsResponse>;
  function retrieveListOfDocuments(
    query: DocumentsRetrieveListOfDocumentsQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    | DocumentsRetrieveListOfDocumentsResponse
    | SearchResponseV2<DocumentsRetrieveListOfDocumentsResponse>
  >;
  function retrieveListOfDocuments(
    query?: DocumentsRetrieveListOfDocumentsQuery,
    options?: OperationOptions,
  ): Promise<
    | DocumentsRetrieveListOfDocumentsResponse
    | SearchResponseV2<DocumentsRetrieveListOfDocumentsResponse>
  > {
    return transport.request<
      | DocumentsRetrieveListOfDocumentsResponse
      | SearchResponseV2<DocumentsRetrieveListOfDocumentsResponse>
    >({
      method: "GET",
      path: "/documents",
      query,
      signal: options?.signal,
    });
  }
  return {
    documentGroups: {
      /** Lazily iterate version 2 search results using Kaiten's cursor. */
      iterate: (
        query?: DocumentGroupsIterateQuery,
        options?: OperationOptions,
      ) => {
        const searchQuery = { ...query, version: 2 as const };
        return iterateSearchResults(
          (position) =>
            retrieveListOfDocumentGroups(
              {
                ...searchQuery,
                ...(position === undefined ? {} : { start_position: position }),
              },
              options,
            ),
          query?.start_position,
          options?.signal,
        );
      },
      /** @see https://developers.kaiten.ru/document-groups/create-new-document-group */
      createNewDocumentGroup: (
        body: DocumentGroupsCreateNewDocumentGroupBody,
        options?: OperationOptions,
      ) => {
        return transport.request<DocumentGroupsCreateNewDocumentGroupResponse>({
          method: "POST",
          path: "/document-groups",
          body,
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/document-groups/remove-document-group */
      removeDocumentGroup: (
        documentGroupUid: string,
        options?: OperationOptions,
      ) => {
        return transport.request<DocumentGroupsRemoveDocumentGroupResponse>({
          method: "DELETE",
          path: "/document-groups/" + pathSegment(documentGroupUid),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/document-groups/retrieve-document-group */
      retrieveDocumentGroup: (
        documentGroupUid: string,
        options?: OperationOptions,
      ) => {
        return transport.request<DocumentGroupsRetrieveDocumentGroupResponse>({
          method: "GET",
          path: "/document-groups/" + pathSegment(documentGroupUid),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/document-groups/retrieve-list-of-document-groups */
      retrieveListOfDocumentGroups,
      /** @see https://developers.kaiten.ru/document-groups/update-document-group */
      updateDocumentGroup: (
        documentGroupUid: string,
        body: DocumentGroupsUpdateDocumentGroupBody,
        options?: OperationOptions,
      ) => {
        return transport.request<DocumentGroupsUpdateDocumentGroupResponse>({
          method: "PATCH",
          path: "/document-groups/" + pathSegment(documentGroupUid),
          body,
          signal: options?.signal,
        });
      },
    },
    documentSchemas: {
      /** @see https://developers.kaiten.ru/document-schemas/get-document-data-schema */
      getDocumentDataSchema,
    },
    documents: {
      /** Lazily iterate version 2 search results using Kaiten's cursor. */
      iterate: (query?: DocumentsIterateQuery, options?: OperationOptions) => {
        const searchQuery = { ...query, version: 2 as const };
        return iterateSearchResults(
          (position) =>
            retrieveListOfDocuments(
              {
                ...searchQuery,
                ...(position === undefined ? {} : { start_position: position }),
              },
              options,
            ),
          query?.start_position,
          options?.signal,
        );
      },
      /** @see https://developers.kaiten.ru/documents/create-new-document */
      createNewDocument: (
        body: DocumentsCreateNewDocumentBody,
        options?: OperationOptions,
      ) => {
        return transport.request<DocumentsCreateNewDocumentResponse>({
          method: "POST",
          path: "/documents",
          body,
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/documents/remove-document */
      removeDocument: (documentUid: string, options?: OperationOptions) => {
        return transport.request<DocumentsRemoveDocumentResponse>({
          method: "DELETE",
          path: "/documents/" + pathSegment(documentUid),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/documents/retrieve-document */
      retrieveDocument: (documentUid: string, options?: OperationOptions) => {
        return transport.request<DocumentsRetrieveDocumentResponse>({
          method: "GET",
          path: "/documents/" + pathSegment(documentUid),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/documents/retrieve-list-of-documents */
      retrieveListOfDocuments,
      /** @see https://developers.kaiten.ru/documents/update-document */
      updateDocument: (
        documentUid: string,
        body: DocumentsUpdateDocumentBody,
        options?: OperationOptions,
      ) => {
        return transport.request<DocumentsUpdateDocumentResponse>({
          method: "PATCH",
          path: "/documents/" + pathSegment(documentUid),
          body,
          signal: options?.signal,
        });
      },
    },
  };
};
