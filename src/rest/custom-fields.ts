import type {JsonValue, RequireAtLeastOne} from '../types.ts';
import type {HttpTransport, OperationOptions} from '../http.ts';

import {pathSegment} from '../http.ts';

export interface CustomDirectoriesCreateCustomDirectoryBody {
  name: string;
  description?: null | string;
  multi_select?: boolean;
  allow_editing?: boolean;
  display_field_index?: number;
  fields?: {
    name: string;
    type:
      | 'string'
      | 'number'
      | 'date'
      | 'email'
      | 'url'
      | 'phone'
      | 'checkbox'
      | 'select'
      | 'user'
      | 'catalog'
      | 'directory_link'
      | 'file';
    required?: boolean;
    sort_order?: number;
    custom_property_uid?: null | string;
    linked_directory_id?: null | string;
  }[];
}

export interface CustomDirectoriesCreateCustomDirectoryResponse {
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
  fields: {
    id: string;
    custom_directory_id: string;
    name: string;
    type: string;
    required: boolean;
    is_display: boolean;
    sort_order: number;
    custom_property_uid: string | null;
    linked_directory_id: string | null;
    condition: string;
    created: string;
    updated: string;
  }[];
}

export type CustomDirectoriesCreateCustomDirectoryParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectories']['createCustomDirectory']
>;

export interface CustomDirectoriesDeleteCustomDirectoryResponse {
  id: string;
  name: string;
  condition: string;
  updated: string;
}

export type CustomDirectoriesDeleteCustomDirectoryParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectories']['deleteCustomDirectory']
>;

export interface CustomDirectoriesGetCustomDirectoryResponse {
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
  fields: {
    id: string;
    custom_directory_id: string;
    name: string;
    type: string;
    required: boolean;
    is_display: boolean;
    sort_order: number;
    custom_property_uid: string | null;
    linked_directory_id: string | null;
    condition: string;
    created: string;
    updated: string;
  }[];
}

export type CustomDirectoriesGetCustomDirectoryParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectories']['getCustomDirectory']
>;

export interface CustomDirectoriesGetListOfCustomDirectoriesQuery {
  include_fields?: boolean;
  include_author?: boolean;
  include_records_count?: boolean;
  limit?: number;
  offset?: number;
  query?: string;
  conditions?: ('active' | 'inactive' | 'removed')[];
}

export type CustomDirectoriesGetListOfCustomDirectoriesResponse = {
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
}[];

export type CustomDirectoriesGetListOfCustomDirectoriesParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectories']['getListOfCustomDirectories']
>;

export interface CustomDirectoriesUpdateCustomDirectoryBody {
  name?: string;
  description?: null | string;
  condition?: 'active' | 'inactive' | 'removed';
  multi_select?: boolean;
  allow_editing?: boolean;
  fields?: {
    id?: string;
    name?: string;
    type?:
      | 'string'
      | 'number'
      | 'date'
      | 'email'
      | 'url'
      | 'phone'
      | 'checkbox'
      | 'select'
      | 'user'
      | 'catalog'
      | 'directory_link'
      | 'file';
    required?: boolean;
    is_display?: boolean;
    sort_order?: number;
    custom_property_uid?: null | string;
    linked_directory_id?: null | string;
  }[];
}

export interface CustomDirectoriesUpdateCustomDirectoryResponse {
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
  fields: {
    id: string;
    custom_directory_id: string;
    name: string;
    type: string;
    required: boolean;
    is_display: boolean;
    sort_order: number;
    custom_property_uid: string | null;
    linked_directory_id: string | null;
    condition: string;
    created: string;
    updated: string;
  }[];
}

export type CustomDirectoriesUpdateCustomDirectoryParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectories']['updateCustomDirectory']
>;

export interface CustomDirectoryFieldsCreateFieldBody {
  name: string;
  type:
    | 'string'
    | 'number'
    | 'date'
    | 'email'
    | 'url'
    | 'phone'
    | 'checkbox'
    | 'select'
    | 'user'
    | 'catalog'
    | 'directory_link'
    | 'file';
  sort_order?: number;
  required?: boolean;
  is_display?: boolean;
}

export interface CustomDirectoryFieldsCreateFieldResponse {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  custom_property_uid: string | null;
  linked_directory_id: string | null;
  reverse_field_id: number | null;
  condition: string;
  required: boolean;
  is_display: boolean;
  sort_order: number;
  settings: Record<string, unknown>;
  author_uid: string;
  company_uid: string;
  created: string;
  updated: string;
}

export type CustomDirectoryFieldsCreateFieldParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryFields']['createField']
>;

export interface CustomDirectoryFieldsDeleteFieldResponse {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  condition: string;
  updated: string;
}

export type CustomDirectoryFieldsDeleteFieldParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryFields']['deleteField']
>;

export interface CustomDirectoryFieldsGetFieldResponse {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  custom_property_uid: string | null;
  linked_directory_id: string | null;
  reverse_field_id: number | null;
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
  linkedDirectory: Record<string, unknown> | null;
  customProperty: Record<string, unknown> | null;
}

export type CustomDirectoryFieldsGetFieldParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryFields']['getField']
>;

export interface CustomDirectoryFieldsGetListOfFieldsQuery {
  include_author?: boolean;
  conditions?: ('active' | 'inactive' | 'removed')[];
}

export type CustomDirectoryFieldsGetListOfFieldsResponse = {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  required: boolean;
  is_display: boolean;
  sort_order: number;
  condition: string;
}[];

export type CustomDirectoryFieldsGetListOfFieldsParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryFields']['getListOfFields']
>;

export interface CustomDirectoryFieldsUpdateFieldBody {
  name?: string;
  condition?: 'active' | 'inactive' | 'removed';
  sort_order?: number;
  required?: boolean;
  is_display?: boolean;
}

export interface CustomDirectoryFieldsUpdateFieldResponse {
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  custom_property_uid: string | null;
  linked_directory_id: string | null;
  reverse_field_id: number | null;
  condition: string;
  required: boolean;
  is_display: boolean;
  sort_order: number;
  settings: Record<string, unknown>;
  author_uid: string;
  company_uid: string;
  created: string;
  updated: string;
}

export type CustomDirectoryFieldsUpdateFieldParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryFields']['updateField']
>;

export interface CustomDirectoryRecordsCreateRecordQuery {
  response_profile?: string;
}

export interface CustomDirectoryRecordsCreateRecordBody {
  values: Record<string, unknown>;
}

export interface CustomDirectoryRecordsCreateRecordResponse {
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  author_uid: string;
  updater_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author?: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  updater?: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  values?: {
    id: string;
    record_id: string;
    field_id: string;
    value_text: string;
    value_number: JsonValue;
    value_date: string | null;
    select_value_uid: string | null;
    catalog_value_uid: string | null;
    user_uid: string | null;
    directory_record_id: string | null;
    sort_order: number;
  }[];
}

export type CustomDirectoryRecordsCreateRecordParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryRecords']['createRecord']
>;

export interface CustomDirectoryRecordsDeleteRecordResponse {
  id: string;
  custom_directory_id: string;
  condition: string;
  updated: string;
}

export type CustomDirectoryRecordsDeleteRecordParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryRecords']['deleteRecord']
>;

export interface CustomDirectoryRecordsGetCardsLinkedToRecordQuery {
  limit?: number;
  offset?: number;
  filter?: string;
}

export type CustomDirectoryRecordsGetCardsLinkedToRecordResponse = {
  id: number;
  uid: string;
  title: string;
}[];

export type CustomDirectoryRecordsGetCardsLinkedToRecordParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryRecords']['getCardsLinkedToRecord']
>;

export interface CustomDirectoryRecordsGetListOfRecordsQuery {
  limit?: number;
  offset?: number;
  query?: string;
  profile?: string;
  include_values?: boolean;
  include_author?: boolean;
  conditions?: ('active' | 'inactive' | 'removed')[];
  filters?: Record<string, JsonValue>;
  filter_operator?: string;
}

export type CustomDirectoryRecordsGetListOfRecordsResponse = {
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  created: string;
  updated: string;
  values: {
    field_id: string;
    value_text: string;
  }[];
}[];

export type CustomDirectoryRecordsGetListOfRecordsParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryRecords']['getListOfRecords']
>;

export interface CustomDirectoryRecordsGetRecordQuery {
  profile?: string;
}

export interface CustomDirectoryRecordsGetRecordResponse {
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  author_uid: string;
  updater_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author?: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  updater?: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  values?: {
    id: string;
    record_id: string;
    field_id: string;
    value_text: string;
    value_number: JsonValue;
    value_date: string | null;
    select_value_uid: string | null;
    catalog_value_uid: string | null;
    user_uid: string | null;
    directory_record_id: string | null;
    sort_order: number;
  }[];
}

export type CustomDirectoryRecordsGetRecordParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryRecords']['getRecord']
>;

export interface CustomDirectoryRecordsUpdateRecordQuery {
  response_profile?: string;
}

export interface CustomDirectoryRecordsUpdateRecordBody {
  condition?: 'active' | 'inactive' | 'removed';
  values?: Record<string, unknown>;
}

export interface CustomDirectoryRecordsUpdateRecordResponse {
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  author_uid: string;
  updater_uid: string;
  company_uid: string;
  created: string;
  updated: string;
  author?: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  updater?: {
    id: number;
    uid: string;
    full_name: string;
    email: string;
    username: string;
  };
  values?: {
    id: string;
    record_id: string;
    field_id: string;
    value_text: string;
    value_number: JsonValue;
    value_date: string | null;
    select_value_uid: string | null;
    catalog_value_uid: string | null;
    user_uid: string | null;
    directory_record_id: string | null;
    sort_order: number;
  }[];
}

export type CustomDirectoryRecordsUpdateRecordParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customDirectoryRecords']['updateRecord']
>;

export interface CustomPropertiesCreateNewPropertyFields {
  name?: string;
  show_on_facade?: boolean;
  multiline?: boolean;
  vote_variant?: null | 'rating' | 'scale' | 'emoji_set';
  type?:
    | 'string'
    | 'number'
    | 'date'
    | 'email'
    | 'phone'
    | 'checkbox'
    | 'select'
    | 'formula'
    | 'url'
    | 'collective_score'
    | 'vote'
    | 'collective_vote'
    | 'catalog'
    | 'user'
    | 'attachment';
  values_type?: null | 'number' | 'text';
  colorful?: boolean | null;
  multi_select?: boolean | null;
  values_creatable_by_users?: boolean | null;
  data?: {
    restrictions?: {
      min?: number | null;
      max?: number | null;
      minLength?: number | null;
      maxLength?: number | null;
      maxFilesCount?: number | null;
      filesExtensions?: string | null;
    };
    formula?: string;
    emoji?: string;
    count?: number;
    emojis?: string[];
    min?: number;
    max?: number;
    calculation_method?: 'average' | 'sum';
  };
  formula?: string;
  formula_source_card?: Record<string, JsonValue>;
  color?: number | null;
  fields_settings?: Record<string, JsonValue>;
}

export type CustomPropertiesCreateNewPropertyBody =
  CustomPropertiesCreateNewPropertyFields &
    (
      | Required<Pick<CustomPropertiesCreateNewPropertyFields, 'name' | 'type'>>
      | Required<
          Pick<
            CustomPropertiesCreateNewPropertyFields,
            'formula' | 'formula_source_card'
          >
        >
    );

export interface CustomPropertiesCreateNewPropertyResponse {
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
}

export type CustomPropertiesCreateNewPropertyParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customProperties']['createNewProperty']
>;

export interface CustomPropertiesGetListOfPropertiesQuery {
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
}

export type CustomPropertiesGetListOfPropertiesResponse = {
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
}[];

export type CustomPropertiesGetListOfPropertiesParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customProperties']['getListOfProperties']
>;

export interface CustomPropertiesGetPropertyResponse {
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
}

export type CustomPropertiesGetPropertyParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customProperties']['getProperty']
>;

export interface CustomPropertiesRemovePropertyResponse {
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
}

export type CustomPropertiesRemovePropertyParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customProperties']['removeProperty']
>;

export interface CustomPropertiesUpdatePropertyBody {
  name?: string;
  show_on_facade?: boolean;
  multiline?: boolean;
  condition?: 'active' | 'inactive';
  colorful?: boolean | null;
  multi_select?: boolean | null;
  values_creatable_by_users?: boolean | null;
  data?: unknown;
  color?: number | null;
  fields_settings?: Record<string, unknown> | null;
  is_used_as_progress?: boolean;
}

export interface CustomPropertiesUpdatePropertyResponse {
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
}

export type CustomPropertiesUpdatePropertyParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customProperties']['updateProperty']
>;

export interface CustomPropertyCatalogValuesCreateNewCatalogValueBody {
  value: Record<string, unknown>;
}

export interface CustomPropertyCatalogValuesCreateNewCatalogValueResponse {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    '78a2a419-059e-482c-9d30-fe8b94c7ef6a': string;
  };
  name: string;
  author_id: number;
  updater_id: number | null;
  condition: string;
}

export type CustomPropertyCatalogValuesCreateNewCatalogValueParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertyCatalogValues']['createNewCatalogValue']
>;

export interface CustomPropertyCatalogValuesGetCatalogValueResponse {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    '78a2a419-059e-482c-9d30-fe8b94c7ef6a': string;
  };
  name: string;
  author_id: number;
  updater_id: number | null;
  condition: string;
}

export type CustomPropertyCatalogValuesGetCatalogValueParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertyCatalogValues']['getCatalogValue']
>;

export interface CustomPropertyCatalogValuesGetListOfCatalogValuesQuery {
  query?: string;
  conditions?: string;
  limit?: number;
  offset?: number;
}

export type CustomPropertyCatalogValuesGetListOfCatalogValuesResponse = {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    '78a2a419-059e-482c-9d30-fe8b94c7ef6a': string;
  };
  name: string;
  author_id: number;
  updater_id: number | null;
  condition: string;
}[];

export type CustomPropertyCatalogValuesGetListOfCatalogValuesParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyCatalogValues']['getListOfCatalogValues']
  >;

export interface CustomPropertyCatalogValuesRemovePropertyResponse {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    '78a2a419-059e-482c-9d30-fe8b94c7ef6a': string;
  };
  name: string;
  author_id: number;
  updater_id: number | null;
  condition: string;
}

export type CustomPropertyCatalogValuesRemovePropertyParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertyCatalogValues']['removeProperty']
>;

export type CustomPropertyCatalogValuesUpdateCatalogValueBody =
  RequireAtLeastOne<
    {
      condition?: 'active' | 'inactive';
      value?: Record<string, JsonValue>;
      deleted?: boolean;
    },
    'condition' | 'value'
  >;

export interface CustomPropertyCatalogValuesUpdateCatalogValueResponse {
  created: string;
  updated: string;
  id: number;
  custom_property_id: number;
  value: {
    '78a2a419-059e-482c-9d30-fe8b94c7ef6a': string;
  };
  name: string;
  author_id: number;
  updater_id: number | null;
  condition: string;
}

export type CustomPropertyCatalogValuesUpdateCatalogValueParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertyCatalogValues']['updateCatalogValue']
>;

export interface CustomPropertyCollectiveScoreValuesCreateNewScoreValueBody {
  value: string;
}

export interface CustomPropertyCollectiveScoreValuesCreateNewScoreValueResponse {
  created: string;
  updated: string;
  id: number;
  value: string;
  custom_property_id: number;
  author_id: number;
  updater_id: number;
  company_id: number;
  card_id: number;
}

export type CustomPropertyCollectiveScoreValuesCreateNewScoreValueParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyCollectiveScoreValues']['createNewScoreValue']
  >;

export type CustomPropertyCollectiveScoreValuesGetListOfScoreValuesResponse = {
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
    avatar_uploaded_url: string | null;
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
}[];

export type CustomPropertyCollectiveScoreValuesGetListOfScoreValuesParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyCollectiveScoreValues']['getListOfScoreValues']
  >;

export interface CustomPropertyCollectiveScoreValuesUpdateScoreValueBody {
  value: string | null;
}

export interface CustomPropertyCollectiveScoreValuesUpdateScoreValueResponse {
  created: string;
  updated: string;
  id: number;
  value: string;
  custom_property_id: number;
  author_id: number;
  updater_id: number;
  company_id: number;
  card_id: number;
}

export type CustomPropertyCollectiveScoreValuesUpdateScoreValueParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyCollectiveScoreValues']['updateScoreValue']
  >;

export type CustomPropertyCollectiveVoteValuesCreateNewVoteValueBody =
  RequireAtLeastOne<
    {
      emoji_vote?: string;
      number_vote?: number;
    },
    'emoji_vote' | 'number_vote'
  >;

export interface CustomPropertyCollectiveVoteValuesCreateNewVoteValueResponse {
  created: string;
  updated: string;
  id: number;
  number_vote: JsonValue;
  emoji_vote: string;
  custom_property_id: number;
  author_id: number;
  company_id: number;
  card_id: number;
}

export type CustomPropertyCollectiveVoteValuesCreateNewVoteValueParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyCollectiveVoteValues']['createNewVoteValue']
  >;

export type CustomPropertyCollectiveVoteValuesGetListOfVoteValuesResponse = {
  id: number;
  custom_property_id: number;
  number_vote: number;
  emoji_vote: JsonValue;
  card_id: number;
  author_id: number;
  author: {
    id: number;
    full_name: string;
    email: string;
    username: string;
    avatar_initials_url: string;
    avatar_uploaded_url: string | null;
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
}[];

export type CustomPropertyCollectiveVoteValuesGetListOfVoteValuesParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyCollectiveVoteValues']['getListOfVoteValues']
  >;

export interface CustomPropertyCollectiveVoteValuesRemoveVoteValueBody {
  emoji_vote: string;
}

export interface CustomPropertyCollectiveVoteValuesRemoveVoteValueResponse {
  id: number;
  custom_property_id: number;
  number_vote: JsonValue;
  emoji_vote: string;
  card_id: number;
  author_id: number;
  company_id?: number;
}

export type CustomPropertyCollectiveVoteValuesRemoveVoteValueParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyCollectiveVoteValues']['removeVoteValue']
  >;

export interface CustomPropertyCollectiveVoteValuesUpdateVoteValueBody {
  number_vote?: number | null;
}

export interface CustomPropertyCollectiveVoteValuesUpdateVoteValueResponse {
  created: string;
  updated: string;
  id: number;
  number_vote: JsonValue;
  emoji_vote: string;
  custom_property_id: number;
  author_id: number;
  company_id: number;
  card_id: number;
}

export type CustomPropertyCollectiveVoteValuesUpdateVoteValueParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyCollectiveVoteValues']['updateVoteValue']
  >;

export interface CustomPropertySelectValuesCreateNewSelectValueBody {
  value: string;
  color?: number | null;
}

export interface CustomPropertySelectValuesCreateNewSelectValueResponse {
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
}

export type CustomPropertySelectValuesCreateNewSelectValueParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertySelectValues']['createNewSelectValue']
>;

export interface CustomPropertySelectValuesGetListOfSelectValuesQuery {
  v2_select_search?: boolean;
  query?: string;
  order_by?: string;
  ids?: unknown[];
  conditions?: ('active' | 'inactive' | 'removed')[];
  offset?: number;
  limit?: number;
}

export type CustomPropertySelectValuesGetListOfSelectValuesResponse = {
  id: number;
  custom_property_id: number;
  value: string;
  color: number;
  sort_order: number;
  external_id: string | null;
  updated: string;
  condition: string;
}[];

export type CustomPropertySelectValuesGetListOfSelectValuesParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertySelectValues']['getListOfSelectValues']
>;

export interface CustomPropertySelectValuesGetSelectValueResponse {
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
}

export type CustomPropertySelectValuesGetSelectValueParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertySelectValues']['getSelectValue']
>;

export interface CustomPropertySelectValuesRemovePropertyResponse {
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
}

export type CustomPropertySelectValuesRemovePropertyParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertySelectValues']['removeProperty']
>;

export type CustomPropertySelectValuesUpdateSelectValueBody = RequireAtLeastOne<
  {
    value?: string;
    color?: number | null;
    condition?: 'active' | 'inactive';
    sort_order?: number;
    deleted?: boolean;
  },
  'value' | 'color' | 'deleted' | 'sort_order' | 'condition'
>;

export interface CustomPropertySelectValuesUpdateSelectValueResponse {
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
}

export type CustomPropertySelectValuesUpdateSelectValueParams = Parameters<
  ReturnType<
    typeof createCustomFieldsResources
  >['customPropertySelectValues']['updateSelectValue']
>;

export interface CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyBody {
  tree_entity_uid: string;
}

export interface CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyResponse {
  id: number;
}

export type CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyTreeEntities']['addTreeEntityToCustomProperty']
  >;

export type CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyResponse =
  void;

export type CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyTreeEntities']['deleteTreeEntityFromCustomProperty']
  >;

export type CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesResponse =
  (
    | {
        uid: string;
        title: string;
        company_id: number;
        sort_order: number;
        path: string;
        parent_entity_uid: string | null;
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
        parent_entity_uid: string | null;
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
        parent_entity_uid: string | null;
        entity_type: string;
        sort_order: number;
        archived: boolean;
        for_everyone_access_role_id: string;
        company_id: number;
        protected: boolean;
      }
  )[];

export type CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesParams =
  Parameters<
    ReturnType<
      typeof createCustomFieldsResources
    >['customPropertyTreeEntities']['getListOfCustomPropertyTreeEntities']
  >;

export const createCustomFieldsResources = (transport: HttpTransport) => ({
  customDirectories: {
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/create-custom-directory */
    createCustomDirectory: (
      body: CustomDirectoriesCreateCustomDirectoryBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoriesCreateCustomDirectoryResponse>({
        method: 'POST',
        path: '/company/custom-directories',
        body,
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/delete-custom-directory */
    deleteCustomDirectory: (
      directoryId: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoriesDeleteCustomDirectoryResponse>({
        method: 'DELETE',
        path: '/company/custom-directories/' + pathSegment(directoryId),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/get-custom-directory */
    getCustomDirectory: (directoryId: string, options?: OperationOptions) => {
      return transport.request<CustomDirectoriesGetCustomDirectoryResponse>({
        method: 'GET',
        path: '/company/custom-directories/' + pathSegment(directoryId),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/get-list-of-custom-directories */
    getListOfCustomDirectories: (
      query?: CustomDirectoriesGetListOfCustomDirectoriesQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoriesGetListOfCustomDirectoriesResponse>(
        {
          method: 'GET',
          path: '/company/custom-directories',
          query,
          signal: options?.signal,
        },
      );
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/update-custom-directory */
    updateCustomDirectory: (
      directoryId: string,
      body: CustomDirectoriesUpdateCustomDirectoryBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoriesUpdateCustomDirectoryResponse>({
        method: 'PATCH',
        path: '/company/custom-directories/' + pathSegment(directoryId),
        body,
        signal: options?.signal,
      });
    },
  },
  customDirectoryFields: {
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/create-field */
    createField: (
      directoryId: string,
      body: CustomDirectoryFieldsCreateFieldBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryFieldsCreateFieldResponse>({
        method: 'POST',
        path:
          '/company/custom-directories/' + pathSegment(directoryId) + '/fields',
        body,
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/delete-field */
    deleteField: (
      directoryId: string,
      fieldId: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryFieldsDeleteFieldResponse>({
        method: 'DELETE',
        path:
          '/company/custom-directories/' +
          pathSegment(directoryId) +
          '/fields/' +
          pathSegment(fieldId),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/get-field */
    getField: (
      directoryId: string,
      fieldId: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryFieldsGetFieldResponse>({
        method: 'GET',
        path:
          '/company/custom-directories/' +
          pathSegment(directoryId) +
          '/fields/' +
          pathSegment(fieldId),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/get-list-of-fields */
    getListOfFields: (
      directoryId: string,
      includeAuthor?: boolean,
      conditions?: ('active' | 'inactive' | 'removed')[],
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryFieldsGetListOfFieldsResponse>({
        method: 'GET',
        path:
          '/company/custom-directories/' + pathSegment(directoryId) + '/fields',
        query: {include_author: includeAuthor, conditions},
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/update-field */
    updateField: (
      directoryId: string,
      fieldId: string,
      body: CustomDirectoryFieldsUpdateFieldBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryFieldsUpdateFieldResponse>({
        method: 'PATCH',
        path:
          '/company/custom-directories/' +
          pathSegment(directoryId) +
          '/fields/' +
          pathSegment(fieldId),
        body,
        signal: options?.signal,
      });
    },
  },
  customDirectoryRecords: {
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/create-record */
    createRecord: (
      directoryId: string,
      body: CustomDirectoryRecordsCreateRecordBody,
      responseProfile?: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryRecordsCreateRecordResponse>({
        method: 'POST',
        path:
          '/company/custom-directories/' +
          pathSegment(directoryId) +
          '/records',
        query: {response_profile: responseProfile},
        body,
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/delete-record */
    deleteRecord: (
      directoryId: string,
      recordId: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryRecordsDeleteRecordResponse>({
        method: 'DELETE',
        path:
          '/company/custom-directories/' +
          pathSegment(directoryId) +
          '/records/' +
          pathSegment(recordId),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-cards-linked-to-record */
    getCardsLinkedToRecord: (
      directoryId: string,
      recordId: string,
      query?: CustomDirectoryRecordsGetCardsLinkedToRecordQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryRecordsGetCardsLinkedToRecordResponse>(
        {
          method: 'GET',
          path:
            '/company/custom-directories/' +
            pathSegment(directoryId) +
            '/records/' +
            pathSegment(recordId) +
            '/cards',
          query,
          signal: options?.signal,
        },
      );
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-list-of-records */
    getListOfRecords: (
      directoryId: string,
      query?: CustomDirectoryRecordsGetListOfRecordsQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryRecordsGetListOfRecordsResponse>({
        method: 'GET',
        path:
          '/company/custom-directories/' +
          pathSegment(directoryId) +
          '/records',
        query,
        jsonQuery: ['filters'],
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-record */
    getRecord: (
      directoryId: string,
      recordId: string,
      profile?: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryRecordsGetRecordResponse>({
        method: 'GET',
        path:
          '/company/custom-directories/' +
          pathSegment(directoryId) +
          '/records/' +
          pathSegment(recordId),
        query: {profile},
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/update-record */
    updateRecord: (
      directoryId: string,
      recordId: string,
      body: CustomDirectoryRecordsUpdateRecordBody,
      responseProfile?: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomDirectoryRecordsUpdateRecordResponse>({
        method: 'PATCH',
        path:
          '/company/custom-directories/' +
          pathSegment(directoryId) +
          '/records/' +
          pathSegment(recordId),
        query: {response_profile: responseProfile},
        body,
        signal: options?.signal,
      });
    },
  },
  customProperties: {
    /** @see https://developers.kaiten.ru/custom-properties/create-new-property */
    createNewProperty: (
      body: CustomPropertiesCreateNewPropertyBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertiesCreateNewPropertyResponse>({
        method: 'POST',
        path: '/company/custom-properties',
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/get-list-of-properties */
    getListOfProperties: (
      query?: CustomPropertiesGetListOfPropertiesQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertiesGetListOfPropertiesResponse>({
        method: 'GET',
        path: '/company/custom-properties',
        query,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/get-property */
    getProperty: (propertyId: number, options?: OperationOptions) => {
      return transport.request<CustomPropertiesGetPropertyResponse>({
        method: 'GET',
        path: '/company/custom-properties/' + pathSegment(propertyId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/remove-property */
    removeProperty: (propertyId: number, options?: OperationOptions) => {
      return transport.request<CustomPropertiesRemovePropertyResponse>({
        method: 'DELETE',
        path: '/company/custom-properties/' + pathSegment(propertyId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/update-property */
    updateProperty: (
      propertyId: number,
      body: CustomPropertiesUpdatePropertyBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertiesUpdatePropertyResponse>({
        method: 'PATCH',
        path: '/company/custom-properties/' + pathSegment(propertyId),
        body,
        signal: options?.signal,
      });
    },
  },
  customPropertyCatalogValues: {
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/create-new-catalog-value */
    createNewCatalogValue: (
      propertyId: number,
      body: CustomPropertyCatalogValuesCreateNewCatalogValueBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCatalogValuesCreateNewCatalogValueResponse>(
        {
          method: 'POST',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/catalog-values',
          body,
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/get-catalog-value */
    getCatalogValue: (
      propertyId: number,
      valueId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCatalogValuesGetCatalogValueResponse>(
        {
          method: 'GET',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/catalog-values/' +
            pathSegment(valueId),
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/get-list-of-catalog-values */
    getListOfCatalogValues: (
      propertyId: number,
      query?: CustomPropertyCatalogValuesGetListOfCatalogValuesQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCatalogValuesGetListOfCatalogValuesResponse>(
        {
          method: 'GET',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/catalog-values',
          query,
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/remove-property */
    removeProperty: (
      propertyId: number,
      valueId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCatalogValuesRemovePropertyResponse>(
        {
          method: 'DELETE',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/catalog-values/' +
            pathSegment(valueId),
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/update-catalog-value */
    updateCatalogValue: (
      propertyId: number,
      valueId: number,
      body: CustomPropertyCatalogValuesUpdateCatalogValueBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCatalogValuesUpdateCatalogValueResponse>(
        {
          method: 'PATCH',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/catalog-values/' +
            pathSegment(valueId),
          body,
          signal: options?.signal,
        },
      );
    },
  },
  customPropertyCollectiveScoreValues: {
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/create-new-score-value */
    createNewScoreValue: (
      cardId: number,
      propertyId: number,
      value: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCollectiveScoreValuesCreateNewScoreValueResponse>(
        {
          method: 'POST',
          path:
            '/cards/' +
            pathSegment(cardId) +
            '/custom-properties/' +
            pathSegment(propertyId) +
            '/collective-score-values',
          body: {value},
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/get-list-of-score-values */
    getListOfScoreValues: (
      cardId: number,
      propertyId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCollectiveScoreValuesGetListOfScoreValuesResponse>(
        {
          method: 'GET',
          path:
            '/cards/' +
            pathSegment(cardId) +
            '/custom-properties/' +
            pathSegment(propertyId) +
            '/collective-score-values',
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/update-score-value */
    updateScoreValue: (
      cardId: number,
      propertyId: number,
      valueId: number,
      value: string | null,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCollectiveScoreValuesUpdateScoreValueResponse>(
        {
          method: 'PATCH',
          path:
            '/cards/' +
            pathSegment(cardId) +
            '/custom-properties/' +
            pathSegment(propertyId) +
            '/collective-score-values/' +
            pathSegment(valueId),
          body: {value},
          signal: options?.signal,
        },
      );
    },
  },
  customPropertyCollectiveVoteValues: {
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/create-new-vote-value */
    createNewVoteValue: (
      cardId: number,
      propertyId: number,
      body: CustomPropertyCollectiveVoteValuesCreateNewVoteValueBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCollectiveVoteValuesCreateNewVoteValueResponse>(
        {
          method: 'POST',
          path:
            '/cards/' +
            pathSegment(cardId) +
            '/custom-properties/' +
            pathSegment(propertyId) +
            '/collective-vote-values',
          body,
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/get-list-of-vote-values */
    getListOfVoteValues: (
      cardId: number,
      propertyId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCollectiveVoteValuesGetListOfVoteValuesResponse>(
        {
          method: 'GET',
          path:
            '/cards/' +
            pathSegment(cardId) +
            '/custom-properties/' +
            pathSegment(propertyId) +
            '/collective-vote-values',
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/remove-vote-value */
    removeVoteValue: (
      cardId: number,
      propertyId: number,
      id: number,
      emojiVote: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCollectiveVoteValuesRemoveVoteValueResponse>(
        {
          method: 'DELETE',
          path:
            '/cards/' +
            pathSegment(cardId) +
            '/custom-properties/' +
            pathSegment(propertyId) +
            '/collective-vote-values/' +
            pathSegment(id),
          body: emojiVote === undefined ? undefined : {emoji_vote: emojiVote},
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/update-vote-value */
    updateVoteValue: (
      cardId: number,
      propertyId: number,
      id: number,
      numberVote?: number | null,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyCollectiveVoteValuesUpdateVoteValueResponse>(
        {
          method: 'PATCH',
          path:
            '/cards/' +
            pathSegment(cardId) +
            '/custom-properties/' +
            pathSegment(propertyId) +
            '/collective-vote-values/' +
            pathSegment(id),
          body: {number_vote: numberVote},
          signal: options?.signal,
        },
      );
    },
  },
  customPropertySelectValues: {
    /** @see https://developers.kaiten.ru/custom-property-select-values/create-new-select-value */
    createNewSelectValue: (
      propertyId: number,
      value: string,
      color?: number | null,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertySelectValuesCreateNewSelectValueResponse>(
        {
          method: 'POST',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/select-values',
          body: {value, color},
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/get-list-of-select-values */
    getListOfSelectValues: (
      propertyId: number,
      query?: CustomPropertySelectValuesGetListOfSelectValuesQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertySelectValuesGetListOfSelectValuesResponse>(
        {
          method: 'GET',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/select-values',
          query,
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/get-select-value */
    getSelectValue: (
      propertyId: number,
      valueId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertySelectValuesGetSelectValueResponse>(
        {
          method: 'GET',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/select-values/' +
            pathSegment(valueId),
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/remove-property */
    removeProperty: (
      propertyId: number,
      valueId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertySelectValuesRemovePropertyResponse>(
        {
          method: 'DELETE',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/select-values/' +
            pathSegment(valueId),
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/update-select-value */
    updateSelectValue: (
      propertyId: number,
      valueId: number,
      body: CustomPropertySelectValuesUpdateSelectValueBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertySelectValuesUpdateSelectValueResponse>(
        {
          method: 'PATCH',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/select-values/' +
            pathSegment(valueId),
          body,
          signal: options?.signal,
        },
      );
    },
  },
  customPropertyTreeEntities: {
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/add-tree-entity-to-custom-property */
    addTreeEntityToCustomProperty: (
      propertyId: number,
      treeEntityUid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyResponse>(
        {
          method: 'POST',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/tree-entities',
          body: {tree_entity_uid: treeEntityUid},
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/delete-tree-entity-from-custom-property */
    deleteTreeEntityFromCustomProperty: (
      propertyId: number,
      uid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyResponse>(
        {
          method: 'DELETE',
          responseMode: 'void',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/tree-entities/' +
            pathSegment(uid),
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/get-list-of-custom-property-tree-entities */
    getListOfCustomPropertyTreeEntities: (
      propertyId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesResponse>(
        {
          method: 'GET',
          path:
            '/company/custom-properties/' +
            pathSegment(propertyId) +
            '/tree-entities',
          signal: options?.signal,
        },
      );
    },
  },
});
