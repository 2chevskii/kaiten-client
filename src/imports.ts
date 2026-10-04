/** Import file contracts documented by Kaiten. */

/** @see https://developers.kaiten.ru/imports/entities/boards */
export interface ImportBoardsRecord {
  id: string | number;
  title: string;
  author_id?: string | number | null;
  created?: string | null;
  space_id?: string | number | null;
}

/** @see https://developers.kaiten.ru/imports/entities/card-timers */
export interface ImportCardTimersRecord {
  id: string | number;
  author_id: string | number;
  card_id: string | number;
  started_at: string;
  finished_at: string;
  comment?: string | null;
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsRecord {
  id: string | number;
  column_id: string | number;
  type_name?: string | null;
  title: string;
  archived?: boolean;
  blocked_by_card_ids?: (string | number)[] | null;
  blocks_card_ids?: (string | number)[] | null;
  related_card_ids?: (string | number)[] | null;
  checklists?: ImportCardsCardChecklist[];
  child_card_ids?: (string | number)[] | null;
  created?: string | null;
  description?: string | null;
  description_type?: 'markdown' | 'html' | null;
  due_date?: ImportCardsCardDateObject;
  asap?: boolean;
  size_text?: string | null;
  estimate_workload?: number | null;
  history?: ImportCardsCardHistory[];
  links?: ImportCardsCardLinks[];
  member_ids?: (string | number)[] | null;
  owner_id?: string | number | null;
  parent_card_ids?: (string | number)[] | null;
  planned_end?: ImportCardsCardDateObject;
  planned_start?: ImportCardsCardDateObject;
  planned_predecessors?: ImportCardsCardPlannedPredecessor[];
  properties?: ImportCardsCardProperties[];
  responsible_id?: string | number | null;
  tags?: ImportCardsCardTags[];
  key?: string | null;
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsCardChecklist {
  name: string;
  items: ImportCardsCardChecklistItem[];
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsCardChecklistItem {
  text: string;
  checked?: boolean | null;
  checked_at?: string | null;
  checked_by?: string | number | null;
  created?: string | null;
  created_by?: string | number | null;
  due_date?: ImportCardsCardDateObject | null;
  responsible_id?: string | number | null;
  sort_order?: number | null;
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsCardDateObject {
  value: string;
  time_present?: boolean | null;
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsCardHistory {
  type: string;
  created: string;
  new_value: Record<string, unknown>;
  old_value: Record<string, unknown>;
  author_id?: string | number | null;
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsCardLinks {
  url: string | number;
  created?: string | null;
  description?: string | null;
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsCardProperties {
  id: string | number;
  value: boolean | string | number | unknown[];
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsCardTags {
  name: string;
}

/** @see https://developers.kaiten.ru/imports/entities/cards */
export interface ImportCardsCardPlannedPredecessor {
  id: string | number;
  gap?: number;
  gap_type?: string;
}

/** @see https://developers.kaiten.ru/imports/entities/columns */
export interface ImportColumnsRecord {
  id: string | number;
  title: string;
  board_id: string | number;
  created?: string | null;
  type?: number | null;
  sort_order?: number | null;
}

/** @see https://developers.kaiten.ru/imports/entities/columns-mapping */
export type ImportColumnsMappingRecord = Record<string, number>;

/** @see https://developers.kaiten.ru/imports/entities/comments */
export interface ImportCommentsRecord {
  id: string | number;
  card_id: string | number;
  text: string;
  author_id?: string | number | null;
  author_name?: string | null;
  created?: string | null;
  parent_id?: string | number | null;
  type?: string | null;
}

/** @see https://developers.kaiten.ru/imports/entities/custom-fields */
export interface ImportCustomFieldsRecord {
  id: string | number;
  type: string;
  name: string;
  catalog_fields?: ImportCustomFieldsCatalogField[];
  data?: ImportCustomFieldsDataField;
  options?: ImportCustomFieldsOptions[];
  score_variant?: string;
  vote_variant?: string;
}

/** @see https://developers.kaiten.ru/imports/entities/custom-fields */
export interface ImportCustomFieldsCatalogField {
  id: string | number;
  name: string;
  required?: boolean;
  sort_order?: number;
}

/** @see https://developers.kaiten.ru/imports/entities/custom-fields */
export type ImportCustomFieldsDataField =
  {count: number; emoji: string} | {emojis: string[]};

/** @see https://developers.kaiten.ru/imports/entities/custom-fields */
export interface ImportCustomFieldsOptions {
  id: string | number;
  value: string | number | unknown[];
  color?: number | null;
  name?: string;
  sort_order?: number | null;
}

/** @see https://developers.kaiten.ru/imports/entities/custom-fields */
export interface ImportCustomFieldsCatalogItem {
  catalog_field_id: string | number;
  item: string;
}

/** @see https://developers.kaiten.ru/imports/entities/document-files */
export interface ImportDocumentFilesRecord {
  id: string | number;
  document_id: string | number;
  path: string;
  name?: string | null;
}

/** @see https://developers.kaiten.ru/imports/entities/documents */
export interface ImportDocumentsRecord {
  id: string | number;
  title: string;
  created?: string | null;
  parent_entity_id?: string | number | null;
  path?: string | null;
  sort_order?: number | null;
  type?: string | null;
}

/** @see https://developers.kaiten.ru/imports/entities/files */
export interface ImportFilesRecord {
  id: string;
  card_id: string;
  name: string;
  author_id?: string | number | null;
  created?: string | null;
  custom_field_id?: string | number | null;
  external?: boolean | null;
  external_type?: string | null;
  external_url?: string | null;
  path?: string | null;
  size?: number | null;
}

/** @see https://developers.kaiten.ru/imports/entities/folders */
export interface ImportFoldersRecord {
  id: string | number;
  title: string;
  created?: string | null;
  parent_entity_id?: string | number | null;
  sort_order?: number | null;
  key?: string | null;
  last_sequence_number?: number | null;
}

/** @see https://developers.kaiten.ru/imports/entities/meta-data */
export interface ImportMetaDataRecord {
  entities: ImportEntityName[];
  entities_paths_map: Partial<Record<ImportEntityName, string>>;
}

/** @see https://developers.kaiten.ru/imports/entities/properties-mapping */
export type ImportPropertiesMappingRecord = Record<string, number>;

/** @see https://developers.kaiten.ru/imports/entities/spaces */
export interface ImportSpacesRecord {
  id: string | number;
  title: string;
  created?: string | null;
  parent_entity_id?: string | number | null;
  sort_order?: number | null;
  key?: string | null;
  last_sequence_number?: number | null;
}

/** @see https://developers.kaiten.ru/imports/entities/users */
export interface ImportUsersRecord {
  id: string | number;
  email: string;
  full_name?: string | null;
}

export type ImportEntityName =
  | 'boards'
  | 'card_timers'
  | 'cards'
  | 'columns'
  | 'columns_mapping'
  | 'comments'
  | 'custom_fields'
  | 'document_files'
  | 'documents'
  | 'files'
  | 'folders'
  | 'properties_mapping'
  | 'spaces'
  | 'users';

export type ImportColor =
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;
