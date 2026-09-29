/** Generated from the Kaiten developer documentation audit. */

import type { HttpTransport, OperationOptions } from "../../http.js";

import { pathSegment } from "../../http.js";

export type CustomDirectoriesCreateCustomDirectoryBody = {
  name: string;
  description?: null | string;
  multi_select?: boolean;
  allow_editing?: boolean;
  display_field_index?: number;
  fields?: Array<{
    name: string;
    type:
      | "string"
      | "number"
      | "date"
      | "email"
      | "url"
      | "phone"
      | "checkbox"
      | "select"
      | "user"
      | "catalog"
      | "directory_link"
      | "file";
    required?: boolean;
    sort_order?: number;
    custom_property_uid?: null | string;
    linked_directory_id?: null | string;
  }>;
};

export type CustomDirectoriesCreateCustomDirectoryResponse = {
  id: string;
  name: string;
  description: string | null;
  condition: string;
  settings: {
    multi_select: boolean;
    allow_editing: boolean;
  };
  author_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  fields: string | number;
};

export interface CustomDirectoriesCreateCustomDirectoryParams extends OperationOptions {
  body: CustomDirectoriesCreateCustomDirectoryBody;
  signal?: AbortSignal;
}

export type CustomDirectoriesDeleteCustomDirectoryResponse = {
  id: string;
  name: string;
  condition: string;
  updated: string;
};

export interface CustomDirectoriesDeleteCustomDirectoryParams extends OperationOptions {
  directory_id: string;
  signal?: AbortSignal;
}

export type CustomDirectoriesGetCustomDirectoryResponse = {
  id: string;
  name: string;
  description: string | null;
  condition: string;
  settings: {
    multi_select: boolean;
    allow_editing: boolean;
  };
  author_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  fields: Array<{
    id: string;
    custom_directory_id: string;
    name: string;
    type: string;
    required: boolean;
    is_display: boolean;
    sort_order: number;
    custom_property_uid: null;
    linked_directory_id: null;
    condition: string;
    created: string;
    updated: string;
  }>;
};

export interface CustomDirectoriesGetCustomDirectoryParams extends OperationOptions {
  directory_id: string;
  signal?: AbortSignal;
}

export type CustomDirectoriesGetListOfCustomDirectoriesQuery = {
  include_fields?: boolean;
  include_author?: boolean;
  include_records_count?: boolean;
  limit?: number;
  offset?: number;
  query?: string;
  conditions?: unknown[];
};

export type CustomDirectoriesGetListOfCustomDirectoriesResponse = Array<{
  id: string;
  name: string;
  description: string | null;
  condition: string;
  settings: {
    multi_select: boolean;
    allow_editing: boolean;
  };
  records_count: number;
  created: string;
  updated: string;
  fields?: unknown[];
  author?: Record<string, unknown>;
}>;

export interface CustomDirectoriesGetListOfCustomDirectoriesParams extends OperationOptions {
  query?: CustomDirectoriesGetListOfCustomDirectoriesQuery;
  signal?: AbortSignal;
}

export type CustomDirectoriesUpdateCustomDirectoryBody = {
  name?: string;
  description?: null | string;
  condition?: "active" | "inactive" | "removed";
  multi_select?: boolean;
  allow_editing?: boolean;
  fields?: Array<{
    id?: string;
    name?: string;
    type?:
      | "string"
      | "number"
      | "date"
      | "email"
      | "url"
      | "phone"
      | "checkbox"
      | "select"
      | "user"
      | "catalog"
      | "directory_link"
      | "file";
    required?: boolean;
    is_display?: boolean;
    sort_order?: number;
    custom_property_uid?: null | string;
    linked_directory_id?: null | string;
  }>;
};

export type CustomDirectoriesUpdateCustomDirectoryResponse = {
  id: string;
  name: string;
  description: string | null;
  condition: string;
  settings: {
    multi_select: boolean;
    allow_editing: boolean;
  };
  author_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  fields: Array<{
    id: string;
    custom_directory_id: string;
    name: string;
    type: string;
    required: boolean;
    is_display: boolean;
    sort_order: number;
    custom_property_uid: null;
    linked_directory_id: null;
    condition: string;
    created: string;
    updated: string;
  }>;
};

export interface CustomDirectoriesUpdateCustomDirectoryParams extends OperationOptions {
  directory_id: string;
  body: CustomDirectoriesUpdateCustomDirectoryBody;
  signal?: AbortSignal;
}

export type CustomDirectoryFieldsCreateFieldBody = {
  name: string;
  type:
    | "string"
    | "number"
    | "date"
    | "email"
    | "url"
    | "phone"
    | "checkbox"
    | "select"
    | "user"
    | "catalog"
    | "directory_link"
    | "file";
  sort_order?: number;
  required?: boolean;
  is_display?: boolean;
};

export type CustomDirectoryFieldsCreateFieldResponse = {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  custom_property_uid: null;
  linked_directory_id: null;
  reverse_field_id: null;
  condition: string;
  required: boolean;
  is_display: boolean;
  sort_order: number;
  settings: Record<string, unknown>;
  author_uid: string;
  company_uid: string;
  created: string;
  updated: string;
};

export interface CustomDirectoryFieldsCreateFieldParams extends OperationOptions {
  directory_id: string;
  body: CustomDirectoryFieldsCreateFieldBody;
  signal?: AbortSignal;
}

export type CustomDirectoryFieldsDeleteFieldResponse = {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  condition: string;
  updated: string;
};

export interface CustomDirectoryFieldsDeleteFieldParams extends OperationOptions {
  directory_id: string;
  field_id: string;
  signal?: AbortSignal;
}

export type CustomDirectoryFieldsGetFieldResponse = {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  custom_property_uid: string | null;
  linked_directory_id: string | null;
  reverse_field_id: null;
  condition: string;
  required: boolean;
  is_display: boolean;
  sort_order: number;
  settings: Record<string, unknown>;
  author_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  linkedDirectory: Record<string, unknown>;
  customProperty: Record<string, unknown>;
};

export interface CustomDirectoryFieldsGetFieldParams extends OperationOptions {
  directory_id: string;
  field_id: string;
  signal?: AbortSignal;
}

export type CustomDirectoryFieldsGetListOfFieldsQuery = {
  include_author?: boolean;
  conditions?: unknown[];
};

export type CustomDirectoryFieldsGetListOfFieldsResponse = Array<{
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  required: boolean;
  is_display: boolean;
  sort_order: number;
  condition: string;
}>;

export interface CustomDirectoryFieldsGetListOfFieldsParams extends OperationOptions {
  directory_id: string;
  query?: CustomDirectoryFieldsGetListOfFieldsQuery;
  signal?: AbortSignal;
}

export type CustomDirectoryFieldsUpdateFieldBody = {
  name?: string;
  condition?: "active" | "inactive" | "removed";
  sort_order?: number;
  required?: boolean;
  is_display?: boolean;
};

export type CustomDirectoryFieldsUpdateFieldResponse = {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  custom_property_uid: null;
  linked_directory_id: null;
  reverse_field_id: null;
  condition: string;
  required: boolean;
  is_display: boolean;
  sort_order: number;
  settings: Record<string, unknown>;
  author_uid: string;
  company_uid: string;
  created: string;
  updated: string;
};

export interface CustomDirectoryFieldsUpdateFieldParams extends OperationOptions {
  directory_id: string;
  field_id: string;
  body: CustomDirectoryFieldsUpdateFieldBody;
  signal?: AbortSignal;
}

export type CustomDirectoryRecordsCreateRecordQuery = {
  response_profile?: string;
};

export type CustomDirectoryRecordsCreateRecordBody = {
  values: Record<string, unknown>;
};

export type CustomDirectoryRecordsCreateRecordResponse = {
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  author_uid: string;
  updater_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  updater: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  values: string | number;
};

export interface CustomDirectoryRecordsCreateRecordParams extends OperationOptions {
  directory_id: string;
  query?: CustomDirectoryRecordsCreateRecordQuery;
  body: CustomDirectoryRecordsCreateRecordBody;
  signal?: AbortSignal;
}

export type CustomDirectoryRecordsDeleteRecordResponse = {
  id: string;
  custom_directory_id: string;
  condition: string;
  updated: string;
};

export interface CustomDirectoryRecordsDeleteRecordParams extends OperationOptions {
  directory_id: string;
  record_id: string;
  signal?: AbortSignal;
}

export type CustomDirectoryRecordsGetCardsLinkedToRecordQuery = {
  limit?: number;
  offset?: number;
  filter?: string;
};

export type CustomDirectoryRecordsGetCardsLinkedToRecordResponse = Array<{
  id: number;
  uid: string;
  title: string;
}>;

export interface CustomDirectoryRecordsGetCardsLinkedToRecordParams extends OperationOptions {
  directory_id: string;
  record_id: string;
  query?: CustomDirectoryRecordsGetCardsLinkedToRecordQuery;
  signal?: AbortSignal;
}

export type CustomDirectoryRecordsGetListOfRecordsQuery = {
  limit?: number;
  offset?: number;
  query?: string;
  profile?: string;
  include_values?: boolean;
  include_author?: boolean;
  conditions?: unknown[];
  filters?: Record<string, unknown>;
  filter_operator?: string;
};

export type CustomDirectoryRecordsGetListOfRecordsResponse = Array<{
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  created: string;
  updated: string;
  values: Array<{
    field_id: string;
    value_text: string;
  }>;
}>;

export interface CustomDirectoryRecordsGetListOfRecordsParams extends OperationOptions {
  directory_id: string;
  query?: CustomDirectoryRecordsGetListOfRecordsQuery;
  signal?: AbortSignal;
}

export type CustomDirectoryRecordsGetRecordQuery = {
  profile?: string;
};

export type CustomDirectoryRecordsGetRecordResponse = {
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  author_uid: string;
  updater_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  updater: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  values: Array<{
    id: string;
    record_id: string;
    field_id: string;
    value_text: string;
    value_number: null;
    value_date: null;
    select_value_uid: null;
    catalog_value_uid: null;
    user_uid: null;
    directory_record_id: null;
    sort_order: number;
  }>;
};

export interface CustomDirectoryRecordsGetRecordParams extends OperationOptions {
  directory_id: string;
  record_id: string;
  query?: CustomDirectoryRecordsGetRecordQuery;
  signal?: AbortSignal;
}

export type CustomDirectoryRecordsUpdateRecordQuery = {
  response_profile?: string;
};

export type CustomDirectoryRecordsUpdateRecordBody = {
  condition?: "active" | "inactive" | "removed";
  values?: Record<string, unknown>;
};

export type CustomDirectoryRecordsUpdateRecordResponse = {
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  author_uid: string;
  updater_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  updater: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  values: Array<{
    id: string;
    record_id: string;
    field_id: string;
    value_text: string;
    value_number: null;
    value_date: null;
    select_value_uid: null;
    catalog_value_uid: null;
    user_uid: null;
    directory_record_id: null;
    sort_order: number;
  }>;
};

export interface CustomDirectoryRecordsUpdateRecordParams extends OperationOptions {
  directory_id: string;
  record_id: string;
  query?: CustomDirectoryRecordsUpdateRecordQuery;
  body: CustomDirectoryRecordsUpdateRecordBody;
  signal?: AbortSignal;
}

export type CustomPropertiesCreateNewPropertyBody = unknown | unknown;

export type CustomPropertiesCreateNewPropertyResponse = {
  name: string;
  type: string;
  show_on_facade: boolean;
  multiline: boolean;
  fields_settings: Record<string, unknown> | null;
  author_id: number;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  condition: string;
  colorful: boolean;
  multi_select: boolean;
  values_creatable_by_users: boolean;
  data: Record<string, unknown> | null;
  values_type: string | null;
  vote_variant: string | null;
  protected: boolean;
  color: number | null;
  external_id: string | null;
};

export interface CustomPropertiesCreateNewPropertyParams extends OperationOptions {
  body: CustomPropertiesCreateNewPropertyBody;
  signal?: AbortSignal;
}

export type CustomPropertiesGetListOfPropertiesQuery = {
  include_values?: boolean;
  include_author?: boolean;
  compact?: boolean;
  load_by_ids?: boolean;
  ids?: unknown[];
  offset?: number;
  limit?: number;
  order_by?: string;
  order_direction?: string;
  query?: string;
};

export type CustomPropertiesGetListOfPropertiesResponse = Array<{
  created: string;
  updated: string;
  id: number;
  uid: string;
  type: string;
  name: string;
  condition: string;
  show_on_facade: boolean;
  multiline: boolean;
  author_id: number;
  company_id: number;
  colorful: boolean;
  multi_select: boolean;
  values_creatable_by_users: boolean;
  values_type: string | null;
  vote_variant: string | null;
  data: Record<string, unknown> | null;
  protected: boolean;
  fields_settings: Record<string, unknown> | null;
  color: number | null;
  external_id: string | null;
}>;

export interface CustomPropertiesGetListOfPropertiesParams extends OperationOptions {
  query?: CustomPropertiesGetListOfPropertiesQuery;
  signal?: AbortSignal;
}

export type CustomPropertiesGetPropertyResponse = {
  created: string;
  updated: string;
  id: number;
  uid: string;
  type: string;
  name: string;
  condition: string;
  show_on_facade: boolean;
  multiline: boolean;
  author_id: number;
  company_id: number;
  colorful: boolean;
  multi_select: boolean;
  values_creatable_by_users: boolean;
  values_type: string | null;
  vote_variant: string | null;
  data: Record<string, unknown> | null;
  protected: boolean;
  fields_settings: Record<string, unknown> | null;
  color: number | null;
  external_id: string | null;
};

export interface CustomPropertiesGetPropertyParams extends OperationOptions {
  id: number;
  signal?: AbortSignal;
}

export type CustomPropertiesRemovePropertyResponse = {
  created: string;
  updated: string;
  id: number;
  type: string;
  name: string;
  show_on_facade: boolean;
  author_id: number;
  company_id: number;
  condition: string;
  colorful: boolean;
  multi_select: boolean;
  values_creatable_by_users: boolean;
  data: Record<string, unknown> | null;
  multiline: boolean;
  values_type: string | null;
  vote_variant: string | null;
  protected: boolean;
  fields_settings: Record<string, unknown> | null;
  color: number | null;
  external_id?: string | null;
};

export interface CustomPropertiesRemovePropertyParams extends OperationOptions {
  id: number;
  signal?: AbortSignal;
}

export type CustomPropertiesUpdatePropertyBody = {
  name?: string;
  show_on_facade?: boolean;
  multiline?: boolean;
  condition?: "active" | "inactive";
  colorful?: boolean | null;
  multi_select?: boolean | null;
  values_creatable_by_users?: boolean | null;
  data?: unknown | unknown | unknown | unknown | unknown;
  color?: number | null;
  fields_settings?: Record<string, unknown> | null;
  is_used_as_progress?: boolean;
};

export type CustomPropertiesUpdatePropertyResponse = {
  created: string;
  updated: string;
  id: number;
  uid: string;
  type: string;
  name: string;
  condition: string;
  show_on_facade: boolean;
  multiline: boolean;
  author_id: number;
  company_id: number;
  colorful: boolean;
  multi_select: boolean;
  values_creatable_by_users: boolean;
  values_type: string | null;
  vote_variant: string | null;
  data: Record<string, unknown> | null;
  protected: boolean;
  fields_settings: Record<string, unknown> | null;
  color: number | null;
  external_id: string | null;
};

export interface CustomPropertiesUpdatePropertyParams extends OperationOptions {
  id: number;
  body: CustomPropertiesUpdatePropertyBody;
  signal?: AbortSignal;
}

export type CustomPropertyCatalogValuesCreateNewCatalogValueBody = {
  value: Record<string, unknown>;
};

export type CustomPropertyCatalogValuesCreateNewCatalogValueResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    "78a2a419-059e-482c-9d30-fe8b94c7ef6a": string;
  };
  name: string;
  author_id: number;
  updater_id: number;
  condition: string;
};

export interface CustomPropertyCatalogValuesCreateNewCatalogValueParams extends OperationOptions {
  property_id: number;
  body: CustomPropertyCatalogValuesCreateNewCatalogValueBody;
  signal?: AbortSignal;
}

export type CustomPropertyCatalogValuesGetCatalogValueResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    "78a2a419-059e-482c-9d30-fe8b94c7ef6a": string;
  };
  name: string;
  author_id: number;
  updater_id: number;
  condition: string;
};

export interface CustomPropertyCatalogValuesGetCatalogValueParams extends OperationOptions {
  property_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CustomPropertyCatalogValuesGetListOfCatalogValuesQuery = {
  query?: string;
  conditions?: string;
  limit?: number;
  offset?: number;
};

export type CustomPropertyCatalogValuesGetListOfCatalogValuesResponse = Array<{
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    "78a2a419-059e-482c-9d30-fe8b94c7ef6a": string;
  };
  name: string;
  author_id: number;
  updater_id: number | null;
  condition: string;
}>;

export interface CustomPropertyCatalogValuesGetListOfCatalogValuesParams extends OperationOptions {
  property_id: number;
  query?: CustomPropertyCatalogValuesGetListOfCatalogValuesQuery;
  signal?: AbortSignal;
}

export type CustomPropertyCatalogValuesRemovePropertyResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    "78a2a419-059e-482c-9d30-fe8b94c7ef6a": string;
  };
  name: string;
  author_id: number;
  updater_id: number;
  condition: string;
};

export interface CustomPropertyCatalogValuesRemovePropertyParams extends OperationOptions {
  property_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CustomPropertyCatalogValuesUpdateCatalogValueBody =
  unknown | unknown;

export type CustomPropertyCatalogValuesUpdateCatalogValueResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    "78a2a419-059e-482c-9d30-fe8b94c7ef6a": string;
  };
  name: string;
  author_id: number;
  updater_id: number;
  condition: string;
};

export interface CustomPropertyCatalogValuesUpdateCatalogValueParams extends OperationOptions {
  property_id: number;
  id: number;
  body: CustomPropertyCatalogValuesUpdateCatalogValueBody;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveScoreValuesCreateNewScoreValueBody = {
  value: string;
};

export type CustomPropertyCollectiveScoreValuesCreateNewScoreValueResponse = {
  created: string;
  updated: string;
  id: number;
  value: string;
  custom_property_id: number;
  author_id: number;
  updater_id: number;
  company_id: number;
  card_id: number;
};

export interface CustomPropertyCollectiveScoreValuesCreateNewScoreValueParams extends OperationOptions {
  card_id: number;
  property_id: number;
  body: CustomPropertyCollectiveScoreValuesCreateNewScoreValueBody;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveScoreValuesGetListOfScoreValuesResponse =
  Array<{
    id: number;
    custom_property_id: number;
    value: string;
    card_id: number;
    author_id: number;
    author: {
      id: number;
      full_name: string;
      email: string;
      username: string;
      avatar_initials_url: string;
      avatar_uploaded_url: null;
      initials: string;
      avatar_type: number;
      lng: string;
      timezone: string;
      theme: string;
      created: string;
      updated: string;
      activated: boolean;
      ui_version: number;
    };
  }>;

export interface CustomPropertyCollectiveScoreValuesGetListOfScoreValuesParams extends OperationOptions {
  card_id: number;
  property_id: number;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveScoreValuesUpdateScoreValueBody = unknown;

export type CustomPropertyCollectiveScoreValuesUpdateScoreValueResponse = {
  created: string;
  updated: string;
  id: number;
  value: string;
  custom_property_id: number;
  author_id: number;
  updater_id: number;
  company_id: number;
  card_id: number;
};

export interface CustomPropertyCollectiveScoreValuesUpdateScoreValueParams extends OperationOptions {
  card_id: number;
  property_id: number;
  id: number;
  body: CustomPropertyCollectiveScoreValuesUpdateScoreValueBody;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveVoteValuesCreateNewVoteValueBody =
  unknown | unknown;

export type CustomPropertyCollectiveVoteValuesCreateNewVoteValueResponse = {
  created: string;
  updated: string;
  id: number;
  number_vote: number;
  emoji_vote: string;
  custom_property_id: number;
  author_id: number;
  company_id: number;
  card_id: number;
};

export interface CustomPropertyCollectiveVoteValuesCreateNewVoteValueParams extends OperationOptions {
  card_id: number;
  property_id: number;
  body: CustomPropertyCollectiveVoteValuesCreateNewVoteValueBody;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveVoteValuesGetListOfVoteValuesResponse =
  Array<{
    id: number;
    custom_property_id: number;
    number_vote: number;
    emoji_vote: string;
    card_id: number;
    author_id: number;
    author: {
      id: number;
      full_name: string;
      email: string;
      username: string;
      avatar_initials_url: string;
      avatar_uploaded_url: null;
      initials: string;
      avatar_type: number;
      lng: string;
      timezone: string;
      theme: string;
      created: string;
      updated: string;
      activated: boolean;
      ui_version: number;
    };
  }>;

export interface CustomPropertyCollectiveVoteValuesGetListOfVoteValuesParams extends OperationOptions {
  card_id: number;
  property_id: number;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveVoteValuesRemoveVoteValueBody = unknown;

export type CustomPropertyCollectiveVoteValuesRemoveVoteValueResponse = {
  id: number;
  custom_property_id: number;
  number_vote: number;
  emoji_vote: string;
  card_id: number;
  author_id: number;
  company_id?: number;
};

export interface CustomPropertyCollectiveVoteValuesRemoveVoteValueParams extends OperationOptions {
  card_id: number;
  property_id: number;
  id: number;
  body?: CustomPropertyCollectiveVoteValuesRemoveVoteValueBody;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveVoteValuesUpdateVoteValueBody = {
  number_vote?: number | null;
};

export type CustomPropertyCollectiveVoteValuesUpdateVoteValueResponse = {
  created: string;
  updated: string;
  id: number;
  number_vote: number;
  emoji_vote: string;
  custom_property_id: number;
  author_id: number;
  company_id: number;
  card_id: number;
};

export interface CustomPropertyCollectiveVoteValuesUpdateVoteValueParams extends OperationOptions {
  card_id: number;
  property_id: number;
  id: number;
  body: CustomPropertyCollectiveVoteValuesUpdateVoteValueBody;
  signal?: AbortSignal;
}

export type CustomPropertySelectValuesCreateNewSelectValueBody = {
  value: string;
  color?: number | null;
};

export type CustomPropertySelectValuesCreateNewSelectValueResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: string;
  color: number;
  author_id: number;
  company_id: number;
  sort_order: number;
  external_id: string | null;
  condition: string;
};

export interface CustomPropertySelectValuesCreateNewSelectValueParams extends OperationOptions {
  property_id: number;
  body: CustomPropertySelectValuesCreateNewSelectValueBody;
  signal?: AbortSignal;
}

export type CustomPropertySelectValuesGetListOfSelectValuesQuery = {
  v2_select_search?: boolean;
  query?: string;
  order_by?: string;
  ids?: unknown[];
  conditions?: unknown[];
  offset?: number;
  limit?: number;
};

export type CustomPropertySelectValuesGetListOfSelectValuesResponse = Array<{
  id: number;
  custom_property_id: number;
  value: string;
  color: number;
  sort_order: number;
  external_id: string | null;
  updated: string;
  condition: string;
}>;

export interface CustomPropertySelectValuesGetListOfSelectValuesParams extends OperationOptions {
  property_id: number;
  query?: CustomPropertySelectValuesGetListOfSelectValuesQuery;
  signal?: AbortSignal;
}

export type CustomPropertySelectValuesGetSelectValueResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: string;
  color: number;
  author_id: number;
  company_id: number;
  sort_order: number;
  external_id: string | null;
  condition: string;
};

export interface CustomPropertySelectValuesGetSelectValueParams extends OperationOptions {
  property_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CustomPropertySelectValuesRemovePropertyResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: string;
  color: number;
  author_id: number;
  company_id: number;
  sort_order: number;
  external_id: string | null;
  condition: string;
};

export interface CustomPropertySelectValuesRemovePropertyParams extends OperationOptions {
  property_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CustomPropertySelectValuesUpdateSelectValueBody =
  unknown | unknown | unknown | unknown | unknown;

export type CustomPropertySelectValuesUpdateSelectValueResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: string;
  color: number;
  author_id: number;
  company_id: number;
  sort_order: number;
  external_id: string | null;
  condition: string;
};

export interface CustomPropertySelectValuesUpdateSelectValueParams extends OperationOptions {
  property_id: number;
  id: number;
  body: CustomPropertySelectValuesUpdateSelectValueBody;
  signal?: AbortSignal;
}

export type CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyBody = {
  tree_entity_uid: string;
};

export type CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyResponse = {
  id: number;
};

export interface CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyParams extends OperationOptions {
  property_id: number;
  body: CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyBody;
  signal?: AbortSignal;
}

export type CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyResponse =
  void;

export interface CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyParams extends OperationOptions {
  property_id: number;
  uid: string;
  signal?: AbortSignal;
}

export type CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesResponse =
  Array<
    | {
        uid: string;
        title: string;
        company_id: number;
        sort_order: number;
        path: string;
        parent_entity_uid: string;
        entity_type: string;
        access: string;
        archived: boolean;
        for_everyone_access_role_id: string;
        protected: boolean;
      }
    | {
        uid: string;
        path: string;
        title: string;
        access: string;
        parent_entity_uid: string;
        entity_type: string;
        sort_order: number;
        archived: boolean;
        for_everyone_access_role_id: string;
        company_id: number;
        protected: boolean;
      }
    | {
        uid: string;
        path: string;
        access: string;
        title: string;
        parent_entity_uid: string;
        entity_type: string;
        sort_order: number;
        archived: boolean;
        for_everyone_access_role_id: string;
        company_id: number;
        protected: boolean;
      }
  >;

export interface CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesParams extends OperationOptions {
  property_id: number;
  signal?: AbortSignal;
}

export const createCustomFieldsResources = (transport: HttpTransport) => ({
  customDirectories: {
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/create-custom-directory */
    createCustomDirectory: (
      params: CustomDirectoriesCreateCustomDirectoryParams,
    ) => {
      return transport.request<CustomDirectoriesCreateCustomDirectoryResponse>({
        method: "POST",
        path: "/company/custom-directories",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/delete-custom-directory */
    deleteCustomDirectory: (
      params: CustomDirectoriesDeleteCustomDirectoryParams,
    ) => {
      return transport.request<CustomDirectoriesDeleteCustomDirectoryResponse>({
        method: "DELETE",
        path: "/company/custom-directories/" + pathSegment(params.directory_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/get-custom-directory */
    getCustomDirectory: (params: CustomDirectoriesGetCustomDirectoryParams) => {
      return transport.request<CustomDirectoriesGetCustomDirectoryResponse>({
        method: "GET",
        path: "/company/custom-directories/" + pathSegment(params.directory_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/get-list-of-custom-directories */
    getListOfCustomDirectories: (
      params: CustomDirectoriesGetListOfCustomDirectoriesParams = {},
    ) => {
      return transport.request<CustomDirectoriesGetListOfCustomDirectoriesResponse>(
        {
          method: "GET",
          path: "/company/custom-directories",
          query: params.query,
          signal: params.signal,
        },
      );
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/update-custom-directory */
    updateCustomDirectory: (
      params: CustomDirectoriesUpdateCustomDirectoryParams,
    ) => {
      return transport.request<CustomDirectoriesUpdateCustomDirectoryResponse>({
        method: "PATCH",
        path: "/company/custom-directories/" + pathSegment(params.directory_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customDirectoryFields: {
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/create-field */
    createField: (params: CustomDirectoryFieldsCreateFieldParams) => {
      return transport.request<CustomDirectoryFieldsCreateFieldResponse>({
        method: "POST",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/fields",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/delete-field */
    deleteField: (params: CustomDirectoryFieldsDeleteFieldParams) => {
      return transport.request<CustomDirectoryFieldsDeleteFieldResponse>({
        method: "DELETE",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/fields/" +
          pathSegment(params.field_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/get-field */
    getField: (params: CustomDirectoryFieldsGetFieldParams) => {
      return transport.request<CustomDirectoryFieldsGetFieldResponse>({
        method: "GET",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/fields/" +
          pathSegment(params.field_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/get-list-of-fields */
    getListOfFields: (params: CustomDirectoryFieldsGetListOfFieldsParams) => {
      return transport.request<CustomDirectoryFieldsGetListOfFieldsResponse>({
        method: "GET",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/fields",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/update-field */
    updateField: (params: CustomDirectoryFieldsUpdateFieldParams) => {
      return transport.request<CustomDirectoryFieldsUpdateFieldResponse>({
        method: "PATCH",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/fields/" +
          pathSegment(params.field_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customDirectoryRecords: {
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/create-record */
    createRecord: (params: CustomDirectoryRecordsCreateRecordParams) => {
      return transport.request<CustomDirectoryRecordsCreateRecordResponse>({
        method: "POST",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/records",
        query: params.query,
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/delete-record */
    deleteRecord: (params: CustomDirectoryRecordsDeleteRecordParams) => {
      return transport.request<CustomDirectoryRecordsDeleteRecordResponse>({
        method: "DELETE",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/records/" +
          pathSegment(params.record_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-cards-linked-to-record */
    getCardsLinkedToRecord: (
      params: CustomDirectoryRecordsGetCardsLinkedToRecordParams,
    ) => {
      return transport.request<CustomDirectoryRecordsGetCardsLinkedToRecordResponse>(
        {
          method: "GET",
          path:
            "/company/custom-directories/" +
            pathSegment(params.directory_id) +
            "/records/" +
            pathSegment(params.record_id) +
            "/cards",
          query: params.query,
          signal: params.signal,
        },
      );
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-list-of-records */
    getListOfRecords: (
      params: CustomDirectoryRecordsGetListOfRecordsParams,
    ) => {
      return transport.request<CustomDirectoryRecordsGetListOfRecordsResponse>({
        method: "GET",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/records",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-record */
    getRecord: (params: CustomDirectoryRecordsGetRecordParams) => {
      return transport.request<CustomDirectoryRecordsGetRecordResponse>({
        method: "GET",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/records/" +
          pathSegment(params.record_id),
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/update-record */
    updateRecord: (params: CustomDirectoryRecordsUpdateRecordParams) => {
      return transport.request<CustomDirectoryRecordsUpdateRecordResponse>({
        method: "PATCH",
        path:
          "/company/custom-directories/" +
          pathSegment(params.directory_id) +
          "/records/" +
          pathSegment(params.record_id),
        query: params.query,
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customProperties: {
    /** @see https://developers.kaiten.ru/custom-properties/create-new-property */
    createNewProperty: (params: CustomPropertiesCreateNewPropertyParams) => {
      return transport.request<CustomPropertiesCreateNewPropertyResponse>({
        method: "POST",
        path: "/company/custom-properties",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/get-list-of-properties */
    getListOfProperties: (
      params: CustomPropertiesGetListOfPropertiesParams = {},
    ) => {
      return transport.request<CustomPropertiesGetListOfPropertiesResponse>({
        method: "GET",
        path: "/company/custom-properties",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/get-property */
    getProperty: (params: CustomPropertiesGetPropertyParams) => {
      return transport.request<CustomPropertiesGetPropertyResponse>({
        method: "GET",
        path: "/company/custom-properties/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/remove-property */
    removeProperty: (params: CustomPropertiesRemovePropertyParams) => {
      return transport.request<CustomPropertiesRemovePropertyResponse>({
        method: "DELETE",
        path: "/company/custom-properties/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/update-property */
    updateProperty: (params: CustomPropertiesUpdatePropertyParams) => {
      return transport.request<CustomPropertiesUpdatePropertyResponse>({
        method: "PATCH",
        path: "/company/custom-properties/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customPropertyCatalogValues: {
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/create-new-catalog-value */
    createNewCatalogValue: (
      params: CustomPropertyCatalogValuesCreateNewCatalogValueParams,
    ) => {
      return transport.request<CustomPropertyCatalogValuesCreateNewCatalogValueResponse>(
        {
          method: "POST",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/catalog-values",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/get-catalog-value */
    getCatalogValue: (
      params: CustomPropertyCatalogValuesGetCatalogValueParams,
    ) => {
      return transport.request<CustomPropertyCatalogValuesGetCatalogValueResponse>(
        {
          method: "GET",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/catalog-values/" +
            pathSegment(params.id),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/get-list-of-catalog-values */
    getListOfCatalogValues: (
      params: CustomPropertyCatalogValuesGetListOfCatalogValuesParams,
    ) => {
      return transport.request<CustomPropertyCatalogValuesGetListOfCatalogValuesResponse>(
        {
          method: "GET",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/catalog-values",
          query: params.query,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/remove-property */
    removeProperty: (
      params: CustomPropertyCatalogValuesRemovePropertyParams,
    ) => {
      return transport.request<CustomPropertyCatalogValuesRemovePropertyResponse>(
        {
          method: "DELETE",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/catalog-values/" +
            pathSegment(params.id),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/update-catalog-value */
    updateCatalogValue: (
      params: CustomPropertyCatalogValuesUpdateCatalogValueParams,
    ) => {
      return transport.request<CustomPropertyCatalogValuesUpdateCatalogValueResponse>(
        {
          method: "PATCH",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/catalog-values/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
  customPropertyCollectiveScoreValues: {
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/create-new-score-value */
    createNewScoreValue: (
      params: CustomPropertyCollectiveScoreValuesCreateNewScoreValueParams,
    ) => {
      return transport.request<CustomPropertyCollectiveScoreValuesCreateNewScoreValueResponse>(
        {
          method: "POST",
          path:
            "/cards/" +
            pathSegment(params.card_id) +
            "/custom-properties/" +
            pathSegment(params.property_id) +
            "/collective-score-values",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/get-list-of-score-values */
    getListOfScoreValues: (
      params: CustomPropertyCollectiveScoreValuesGetListOfScoreValuesParams,
    ) => {
      return transport.request<CustomPropertyCollectiveScoreValuesGetListOfScoreValuesResponse>(
        {
          method: "GET",
          path:
            "/cards/" +
            pathSegment(params.card_id) +
            "/custom-properties/" +
            pathSegment(params.property_id) +
            "/collective-score-values",
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/update-score-value */
    updateScoreValue: (
      params: CustomPropertyCollectiveScoreValuesUpdateScoreValueParams,
    ) => {
      return transport.request<CustomPropertyCollectiveScoreValuesUpdateScoreValueResponse>(
        {
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(params.card_id) +
            "/custom-properties/" +
            pathSegment(params.property_id) +
            "/collective-score-values/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
  customPropertyCollectiveVoteValues: {
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/create-new-vote-value */
    createNewVoteValue: (
      params: CustomPropertyCollectiveVoteValuesCreateNewVoteValueParams,
    ) => {
      return transport.request<CustomPropertyCollectiveVoteValuesCreateNewVoteValueResponse>(
        {
          method: "POST",
          path:
            "/cards/" +
            pathSegment(params.card_id) +
            "/custom-properties/" +
            pathSegment(params.property_id) +
            "/collective-vote-values",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/get-list-of-vote-values */
    getListOfVoteValues: (
      params: CustomPropertyCollectiveVoteValuesGetListOfVoteValuesParams,
    ) => {
      return transport.request<CustomPropertyCollectiveVoteValuesGetListOfVoteValuesResponse>(
        {
          method: "GET",
          path:
            "/cards/" +
            pathSegment(params.card_id) +
            "/custom-properties/" +
            pathSegment(params.property_id) +
            "/collective-vote-values",
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/remove-vote-value */
    removeVoteValue: (
      params: CustomPropertyCollectiveVoteValuesRemoveVoteValueParams,
    ) => {
      return transport.request<CustomPropertyCollectiveVoteValuesRemoveVoteValueResponse>(
        {
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(params.card_id) +
            "/custom-properties/" +
            pathSegment(params.property_id) +
            "/collective-vote-values/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/update-vote-value */
    updateVoteValue: (
      params: CustomPropertyCollectiveVoteValuesUpdateVoteValueParams,
    ) => {
      return transport.request<CustomPropertyCollectiveVoteValuesUpdateVoteValueResponse>(
        {
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(params.card_id) +
            "/custom-properties/" +
            pathSegment(params.property_id) +
            "/collective-vote-values/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
  customPropertySelectValues: {
    /** @see https://developers.kaiten.ru/custom-property-select-values/create-new-select-value */
    createNewSelectValue: (
      params: CustomPropertySelectValuesCreateNewSelectValueParams,
    ) => {
      return transport.request<CustomPropertySelectValuesCreateNewSelectValueResponse>(
        {
          method: "POST",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/select-values",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/get-list-of-select-values */
    getListOfSelectValues: (
      params: CustomPropertySelectValuesGetListOfSelectValuesParams,
    ) => {
      return transport.request<CustomPropertySelectValuesGetListOfSelectValuesResponse>(
        {
          method: "GET",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/select-values",
          query: params.query,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/get-select-value */
    getSelectValue: (
      params: CustomPropertySelectValuesGetSelectValueParams,
    ) => {
      return transport.request<CustomPropertySelectValuesGetSelectValueResponse>(
        {
          method: "GET",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/select-values/" +
            pathSegment(params.id),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/remove-property */
    removeProperty: (
      params: CustomPropertySelectValuesRemovePropertyParams,
    ) => {
      return transport.request<CustomPropertySelectValuesRemovePropertyResponse>(
        {
          method: "DELETE",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/select-values/" +
            pathSegment(params.id),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/update-select-value */
    updateSelectValue: (
      params: CustomPropertySelectValuesUpdateSelectValueParams,
    ) => {
      return transport.request<CustomPropertySelectValuesUpdateSelectValueResponse>(
        {
          method: "PATCH",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/select-values/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
  customPropertyTreeEntities: {
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/add-tree-entity-to-custom-property */
    addTreeEntityToCustomProperty: (
      params: CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyParams,
    ) => {
      return transport.request<CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyResponse>(
        {
          method: "POST",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/tree-entities",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/delete-tree-entity-from-custom-property */
    deleteTreeEntityFromCustomProperty: (
      params: CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyParams,
    ) => {
      return transport.request<CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyResponse>(
        {
          method: "DELETE",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/tree-entities/" +
            pathSegment(params.uid),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/get-list-of-custom-property-tree-entities */
    getListOfCustomPropertyTreeEntities: (
      params: CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesParams,
    ) => {
      return transport.request<CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesResponse>(
        {
          method: "GET",
          path:
            "/company/custom-properties/" +
            pathSegment(params.property_id) +
            "/tree-entities",
          signal: params.signal,
        },
      );
    },
  },
});
