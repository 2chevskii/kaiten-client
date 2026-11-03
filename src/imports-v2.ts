/** Universal Format 2.0 contracts. Constraints such as lengths, reference resolution and conditional fields are validated by Convertinator.
 * @see https://developers.kaiten.ru/imports/bundle-format */

export type ImportV2ActivitiesRecord = {
  external_id: string;
  action:
    | 'card_add'
    | 'card_move'
    | 'card_leave_board'
    | 'card_join_board'
    | 'card_assign_responsible'
    | 'card_relieve_responsible'
    | 'card_assign_member'
    | 'card_remove_member';
  card_ref: string;
  author_ref?: string | null;
  created_at: string;
  payload:
    | {board_ref: string; column_ref: string; lane_ref?: string}
    | {board_ref: string}
    | {
        from: {board_ref: string; column_ref: string; lane_ref?: string};
        to: {board_ref: string; column_ref: string; lane_ref?: string};
      }
    | {user_ref: string};
};

export type ImportV2AttachmentsRecord = {
  external_id: string;
  attached_to: {
    resource: 'cards' | 'comments' | 'documents';
    external_id: string;
  };
  property_ref?: string | null;
  file_path?: string;
  url?: string;
  name: string;
  mime_type?: string | null;
  size?: number;
  sha256?: string;
  card_cover?: boolean;
  created_at?: string;
  author_ref?: string | null;
};

export type ImportV2BoardsRecord = {
  external_id: string;
  title: string;
  description?: {
    format: 'plain_text' | 'markdown' | 'html';
    text: string;
  } | null;
  default_card_type_ref?: string | null;
  card_properties?: Array<{
    field: 'size' | 'due_date' | 'tags' | 'timeline' | 'description';
    required?: boolean;
  }>;
  created_at?: string;
};

export type ImportV2CardsRecord = {
  external_id: string;
  title: string;
  description?: {
    format: 'plain_text' | 'markdown' | 'html';
    text: string;
  } | null;
  board_ref: string;
  column_ref: string;
  lane_ref?: string | null;
  type_ref: string;
  owner_ref: string;
  created_at: string;
  asap?: boolean;
  due_date?:
    | (
        | {precision: 'date'; value: string}
        | {precision: 'date_time'; value: string}
      )
    | null;
  expires_later?: boolean;
  size?:
    | ({value?: number; unit?: string; display?: string} & (unknown | unknown))
    | null;
  estimate_workload?: number | null;
  planned_start?:
    | (
        | {precision: 'date'; value: string}
        | {precision: 'date_time'; value: string}
      )
    | null;
  planned_end?:
    | (
        | {precision: 'date'; value: string}
        | {precision: 'date_time'; value: string}
      )
    | null;
  completed_at?: string | null;
  key?: string;
  subscriber_refs?: Array<string>;
  tag_refs?: Array<string>;
  properties?: Record<string, unknown>;
  updated_at?: string;
  updated_by_ref?: string | null;
  archived?: boolean;
};

export type ImportV2CardBlockersRecord = {
  external_id: string;
  card_ref: string;
  blocker_card_ref?: string;
  reason?: string | null;
  created_at: string;
  due_date?:
    | (
        | {precision: 'date'; value: string}
        | {precision: 'date_time'; value: string}
      )
    | null;
};

export type ImportV2CardChildrenRecord = {
  external_id: string;
  parent_card_ref: string;
  child_card_ref: string;
  created_at?: string;
};

export type ImportV2CardHistoryRecord = {
  external_id: string;
  card_ref: string;
  changed_at: string;
  snapshot: {
    title: string;
    description?: {
      format: 'plain_text' | 'markdown' | 'html';
      text: string;
    } | null;
    board_ref: string;
    column_ref: string;
    lane_ref?: string | null;
    type_ref: string;
    owner_ref?: string | null;
    asap?: boolean;
    due_date?:
      | (
          | {precision: 'date'; value: string}
          | {precision: 'date_time'; value: string}
        )
      | null;
    size?:
      | ({value?: number; unit?: string; display?: string} & (
          unknown | unknown
        ))
      | null;
    estimate_workload?: number | null;
    planned_start?:
      | (
          | {precision: 'date'; value: string}
          | {precision: 'date_time'; value: string}
        )
      | null;
    planned_end?:
      | (
          | {precision: 'date'; value: string}
          | {precision: 'date_time'; value: string}
        )
      | null;
  };
};

export type ImportV2CardLinksRecord = {
  external_id: string;
  card_ref: string;
  url?: string;
  linked_card_ref?: string;
  linked_document_ref?: string;
  description?: string | null;
};

export type ImportV2CardMembersRecord = {
  external_id: string;
  card_ref: string;
  user_ref: string;
  type: 'member' | 'responsible';
};

export type ImportV2CardPlannedRelationsRecord = {
  external_id: string;
  predecessor_card_ref: string;
  successor_card_ref: string;
  gap?: number | null;
  gap_type?: 'hours' | 'days' | null;
};

export type ImportV2CardTimeLogsRecord = {
  external_id: string;
  card_ref: string;
  user_ref: string;
  author_ref?: string | null;
  time_spent: number;
  for_date: string;
  comment?: string | null;
  created_at?: string;
};

export type ImportV2CardTypesRecord = {
  external_id: string;
  name: string;
  color?: string | null;
  card_properties?: Array<
    {
      property_ref?: string;
      field?: 'size' | 'due_date' | 'tags' | 'timeline' | 'description';
      required?: boolean;
    } & (unknown | unknown)
  >;
  author_ref?: string | null;
};

export type ImportV2ChecklistsRecord = {
  external_id: string;
  card_ref: string;
  name: string;
};

export type ImportV2ChecklistItemsRecord = {
  external_id: string;
  checklist_ref: string;
  text: string;
  checked?: boolean;
  checked_at?: string | null;
  checker_ref?: string | null;
  author_ref?: string | null;
  responsible_ref?: string | null;
  due_date?: string | null;
};

export type ImportV2ColumnsRecord = {
  external_id: string;
  board_ref: string;
  parent_column_ref?: string | null;
  title: string;
  type: 'queued' | 'in_progress' | 'done';
  wip_limit?: number | null;
};

export type ImportV2CommentsRecord = {
  external_id: string;
  card_ref: string;
  parent_comment_ref?: string | null;
  author_ref?: string | null;
  author_name?: string | null;
  text: {format: 'plain_text' | 'markdown' | 'html'; text: string};
  created_at: string;
  updated_at?: string | null;
  emojis?: Array<{emoji: string; user_ref: string}>;
};

export type ImportV2CustomDirectoriesRecord = {
  external_id: string;
  name: string;
  description?: string | null;
  fields?: Array<{
    external_id: string;
    name: string;
    type:
      | 'checkbox'
      | 'date'
      | 'directory_link'
      | 'email'
      | 'file'
      | 'number'
      | 'phone'
      | 'select'
      | 'string'
      | 'url'
      | 'user';
    custom_property_ref?: string;
    linked_directory_ref?: string;
    required?: boolean;
    is_display?: boolean;
    condition?: 'active' | 'inactive';
  }>;
  condition?: 'active' | 'inactive';
  author_ref?: string | null;
  created_at?: string;
};

export type ImportV2CustomDirectoryRecordsRecord = {
  external_id: string;
  directory_ref: string;
  display_value: string;
  values?: Record<string, unknown>;
  author_ref?: string | null;
  condition?: 'active' | 'inactive';
  created_at?: string;
};

export type ImportV2CustomPropertiesRecord = {
  external_id: string;
  name: string;
  type:
    | 'attachment'
    | 'checkbox'
    | 'date'
    | 'directory'
    | 'email'
    | 'multi_select'
    | 'multi_user'
    | 'multiline_string'
    | 'number'
    | 'phone'
    | 'select'
    | 'string'
    | 'url'
    | 'user'
    | 'vote';
  options?: Array<{
    external_id: string;
    value: string;
    color?: string | null;
    condition?: 'active' | 'inactive';
  }>;
  show_on_facade?: boolean;
  values_creatable_by_users?: boolean;
  vote_variant?: 'rating' | 'emoji_set';
  data?: {count: number; emoji: string} | {emojis: Array<string>};
  directory_ref?: string;
  space_refs?: Array<string>;
  condition?: 'active' | 'inactive';
  author_ref?: string | null;
};

export type ImportV2DocumentsRecord = {
  external_id: string;
  parent_ref: {
    resource: 'spaces' | 'folders' | 'documents';
    external_id: string;
  };
  title: string;
  data: {format: 'plain_text' | 'markdown' | 'html'; text: string};
  sort_order?: number;
  author_ref?: string | null;
  updated_by_ref?: string | null;
  created_at?: string;
  updated_at?: string;
};

export type ImportV2DocumentCommentsRecord = {
  external_id: string;
  document_ref: string;
  text: {format: 'plain_text' | 'markdown' | 'html'; text: string};
  parent_ref?: string | null;
  resolved_at?: string | null;
  updated_at?: string | null;
  author_ref?: string | null;
  created_at?: string;
};

export type ImportV2FoldersRecord = {
  external_id: string;
  parent_ref: {
    resource: 'spaces' | 'folders' | 'documents';
    external_id: string;
  };
  title: string;
  description?: {
    format: 'plain_text' | 'markdown' | 'html';
    text: string;
  } | null;
  key?: string;
  sort_order?: number;
  author_ref?: string | null;
  created_at?: string;
  updated_at?: string;
};

export type ImportV2IterationsRecord = {
  external_id: string;
  space_ref: string;
  title: string;
  goal?: string | null;
  status?: 'planned' | 'active' | 'closed';
  start_date?: string | null;
  finish_date?: string | null;
  actual_finish_date?: string | null;
  author_ref?: string | null;
  updated_by_ref?: string | null;
  created_at?: string;
};

export type ImportV2IterationCardsRecord = {
  external_id: string;
  iteration_ref: string;
  card_ref: string;
  added_by_ref?: string | null;
  created_at?: string;
};

export type ImportV2LanesRecord = {
  external_id: string;
  board_ref: string;
  title: string;
  wip_limit?: number | null;
  condition?: 'active' | 'archived';
  created_at?: string;
};

export type ImportV2Manifest = {
  profile: {name: 'external'};
  package_id: string;
  source: {system: string; namespace: string; exported_at: string};
  timeline_mode: 'current_state_only' | 'explicit';
  resource_files: Array<{
    resource:
      | 'activities'
      | 'attachments'
      | 'boards'
      | 'card_blockers'
      | 'card_children'
      | 'card_history'
      | 'card_links'
      | 'card_members'
      | 'card_planned_relations'
      | 'card_time_logs'
      | 'card_types'
      | 'cards'
      | 'checklist_items'
      | 'checklists'
      | 'columns'
      | 'comments'
      | 'custom_directories'
      | 'custom_directory_records'
      | 'custom_properties'
      | 'document_comments'
      | 'documents'
      | 'folders'
      | 'iteration_cards'
      | 'iterations'
      | 'lanes'
      | 'roles'
      | 'space_boards'
      | 'spaces'
      | 'tags'
      | 'tree_entity_roles'
      | 'user_groups'
      | 'users';
    path: string;
  }>;
  binary_files: {base_path: 'files/'};
};

export type ImportV2RolesRecord = {
  external_id: string;
  name: string;
  template: 'reader' | 'writer' | 'admin';
};

export type ImportV2SpacesRecord = {
  external_id: string;
  title: string;
  parent_ref?: {
    resource: 'spaces' | 'folders' | 'documents';
    external_id: string;
  } | null;
  key?: string;
  sort_order?: number;
  author_ref?: string | null;
  created_at?: string;
};

export type ImportV2SpaceBoardsRecord = {
  external_id: string;
  space_ref: string;
  board_ref: string;
  primary?: boolean;
};

export type ImportV2TagsRecord = {
  external_id: string;
  name: string;
  color?: string | null;
};

export type ImportV2TreeEntityRolesRecord = {
  external_id: string;
  tree_entity_ref: {
    resource: 'spaces' | 'folders' | 'documents';
    external_id: string;
  };
  member_ref: {resource: 'users' | 'user_groups'; external_id: string};
  role_refs: Array<string>;
  access_mod?: 'all' | 'related_only';
};

export type ImportV2UsersRecord = {
  external_id: string;
  email: string;
  full_name?: string | null;
};

export type ImportV2UserGroupsRecord = {
  external_id: string;
  name: string;
  add_to_cards_and_spaces_enabled?: boolean | null;
  user_refs: Array<string>;
  admin_refs?: Array<string>;
};

export type ImportV2Resource =
  ImportV2Manifest['resource_files'][number]['resource'];
export type ImportV2ExternalId = string;
export type ImportV2Ref = ImportV2ExternalId;
export type ImportV2PolymorphicRef<
  R extends ImportV2Resource = ImportV2Resource,
> = {resource: R; external_id: ImportV2ExternalId};
export type ImportV2RichText = {
  format: 'plain_text' | 'markdown' | 'html';
  text: string;
};
export type ImportV2DateValue = {
  precision: 'date' | 'date_time';
  value: string;
};
export type ImportV2FilePayload = {
  file_path: string;
  name: string;
  size: number;
  mime_type?: string;
  sha256?: string;
};
