import type { CustomPropertyValues, JsonValue } from "./types.js";

export interface BoardCardProperty {
  key: string;
  required?: boolean;
  laneIds?: number[];
  columnIds?: number[];
  cardTypeIds?: number[];
  [field: string]: JsonValue | undefined;
}

export interface CardTypeProperty {
  regular_property: string | null;
  property_uid: string | null;
  sort_order: number;
  required: boolean;
}

export interface BlockedCardSummary {
  card_id: number;
  card_title: string;
  blocked_by: {
    card_id: number | null;
    card_title: string | null;
    blocker_id: number;
    blocker_name: string;
    blocker_email: string;
  };
  block_reason: string | null;
  categories: { uid: string; name: string; color: number }[];
  block_created: number;
  updated: string;
  released: boolean;
}

export interface IterationSummary {
  id: string;
  title: string;
  space_uid?: string;
  is_accessible?: boolean;
  goal?: string | null;
  status?: string;
  start_date?: string | null;
  finish_date?: string | null;
  actual_finish_date?: string | null;
  created?: string;
  updated?: string;
  archived?: boolean;
}

export type IterationReference =
  | { id: string; is_accessible: false }
  | (IterationSummary & { is_accessible: true });

export interface TreeEntitySummary {
  uid: string;
  title: string;
  path: string | null;
  parent_entity_uid: string | null;
  entity_type: string;
  id?: number;
  external_id?: string | null;
  company_id?: number;
  sort_order?: number;
  access?: string;
  archived?: boolean;
  author_id?: number;
  updater_id?: number;
  for_everyone_access_role_id?: string | null;
  public?: boolean;
  public_id?: string | null;
  created?: string;
  updated?: string;
  publish_date?: string | null;
  news_feed?: boolean;
  hostname?: string | null;
}

export interface CardFileSummary {
  id: number | string;
  uid?: string;
  name: string;
  url?: string;
  size?: number | string | null;
  mime_type?: string;
  type?: number;
  author_id?: number;
  author_uid?: string;
  card_id?: number;
  card_uid?: string;
  comment_id?: number | null;
  created?: string;
  updated?: string;
  card_cover?: boolean;
  external?: boolean;
  deleted?: boolean;
}

export interface CardTagSummary {
  id: number;
  name: string;
  color?: number;
  created?: string;
  updated?: string;
}

export interface ExternalLinkSummary {
  id: number;
  url: string;
  description?: string | null;
  created?: string;
  updated?: string;
}

/** Shared fields of User projections returned by Kaiten. */
export interface UserSummary {
  id: number;
  uid?: string;
  username: string;
  full_name: string;
  email?: string;
  avatar_initials_url?: string;
  avatar_uploaded_url?: string | null;
  initials?: string;
  avatar_type?: number;
  lng?: string;
  timezone?: string;
  theme?: string;
  updated?: string;
  created?: string;
  activated?: boolean;
  ui_version?: number;
  show_tour?: boolean;
  sd_telegram_id?: number | null;
  news_subscription?: boolean;
  apps_permissions?: number;
  virtual?: boolean;
  email_blocked?: string | null;
  email_blocked_reason?: string | null;
  temporarily_inactive?: boolean;
  access_mod?: string;
  own_role_ids?: string[];
  own_access_mod?: string;
  own_role?: number;
  user_id?: number;
  delete_requested_at?: string | null;
}

/** Shared fields of Column projections returned by Kaiten. */
export interface ColumnSummary {
  id: number;
  title: string;
  sort_order: number;
  col_count?: number;
  type?: number;
  board_id?: number;
  column_id?: number | null;
  external_id?: string | null;
  rules?: number;
  parent?: {
    id: number;
    title: string;
    sort_order: number;
    col_count: number;
    type: number;
    board_id: number;
    column_id: number | null;
    external_id: string | null;
    rules: number;
  };
  created?: string;
  updated?: string;
  wip_limit?: JsonValue;
  wip_limit_type?: number;
  archive_after_days?: number;
  last_moved_warning_after_minutes?: number;
  default_tags?: JsonValue;
  months_to_hide_cards?: number;
  card_hide_after_days?: number;
}

/** Shared fields of Lane projections returned by Kaiten. */
export interface LaneSummary {
  id: number;
  title: string;
  sort_order: number;
  board_id?: number;
  condition?: number;
  external_id?: string | null;
}

/** Shared fields of Card projections returned by Kaiten. */
export interface CardSummary {
  created: string;
  updated: string;
  archived: boolean;
  id: number;
  title: string;
  asap: boolean;
  due_date: string | null;
  due_date_time_present: boolean;
  expires_later: boolean;
  sort_order: number;
  description?: string | null;
  state: number;
  condition: number;
  blocking_card: boolean;
  blocked: boolean;
  size: number | null;
  size_unit: string | null;
  size_text: string | null;
  board_id: number;
  column_id: number;
  lane_id: number | null;
  owner_id: number;
  type_id: number | null;
  version: number;
  updater_id: number;
  completed_on_time: boolean | null;
  completed_at: string | null;
  last_moved_at: string;
  lane_changed_at: string;
  column_changed_at: string;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  sprint_id: number | null;
  external_id: string | null;
  service_id: number | null;
  properties: CustomPropertyValues | null;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, JsonValue> | null;
  external_user_emails: string | null;
  estimate_workload?: number;
  comments_total: number;
  comment_last_added_at: string | null;
  parents_count: number;
  children_count: number;
  children_done: number;
  goals_total: number;
  goals_done: number;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | Record<string, number> | null;
  description_filled: boolean;
  parent_checklist_ids: number[] | null;
  fifo_order: number | null;
  counters_recalculated_at?: string;
  sd_new_comment: boolean;
  has_blocked_children?: boolean;
  parents_ids?: number[] | null;
  children_ids?: number[] | null;
  calculated_planned_start?: string | null;
  calculated_planned_end?: string | null;
  type?: CardTypeSummary;
  owner?: UserSummary;
  tag_ids?: number[] | null;
  uid?: string;
  import_id?: number | null;
  fts_version?: string;
  locked?: JsonValue;
  source?: string;
  members?: CardMemberSummary[];
  has_access_to_space?: boolean;
  path_data?: {
    lane: LaneSummary;
    board: BoardSummary;
    space: {
      id: number;
      title: string;
    };
    column: ColumnSummary;
  };
  space_id?: number;
  parent_dod_item_ids?: number[] | null;
  board?: BoardSummary;
  lane?: LaneSummary;
  column?: ColumnSummary;
}

/** Shared fields of CardType projections returned by Kaiten. */
export interface CardTypeSummary {
  id: number;
  name: string;
  color: number;
  letter: string;
  company_id: number | null;
  archived: boolean;
  properties?: Record<string, JsonValue> | null;
  created?: string;
  updated?: string;
  description_template?: string | null;
}

/** Shared fields of ChecklistItem projections returned by Kaiten. */
export interface ChecklistItemSummary {
  created: string;
  updated: string;
  id: number;
  text: string;
  sort_order: number;
  checked: boolean;
  checked_at: string | null;
  checklist_id: number;
  checker_id: number | null;
  user_id: number | null;
  responsible_id: number | null;
  deleted: boolean;
  due_date: string | null;
}

/** Shared fields of Board projections returned by Kaiten. */
export interface BoardSummary {
  id: number;
  title: string;
  external_id?: string | null;
  card_properties?: BoardCardProperty[] | Record<string, JsonValue> | null;
  uid?: string;
  settings?: JsonValue;
  spaces?: SpaceSummary[];
  created?: string;
  updated?: string;
  cell_wip_limits?: {
    limits: { lane_id?: number; column_id?: number; limit?: number }[];
  } | null;
  default_card_type_id?: number;
  description?: string | null;
  email_key?: string;
  move_parents_to_done?: boolean;
  backward_moves_enabled?: boolean;
  default_tags?: JsonValue;
  first_image_is_cover?: boolean;
  reset_lane_spent_time?: boolean;
  automove_cards?: boolean;
  hide_done_policies?: boolean;
  hide_done_policies_in_done_column?: boolean;
  auto_assign_enabled?: boolean;
  space_id?: number;
  board_id?: number;
  top?: number;
  left?: number;
  sort_order?: number;
  type?: number;
}

/** Shared fields of UserRole projections returned by Kaiten. */
export interface UserRoleSummary {
  created: string;
  updated: string;
  id: number;
  name: string;
  company_id: number | null;
}

/** Shared fields of CardMember projections returned by Kaiten. */
export interface CardMemberSummary {
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
  card_id: number;
  user_id: number;
  type: number;
  uid?: string;
  virtual?: boolean;
  email_blocked?: string | null;
  email_blocked_reason?: string | null;
  delete_requested_at?: string | null;
}

/** Shared fields of Checklist projections returned by Kaiten. */
export interface ChecklistSummary {
  created: string;
  updated: string;
  id: number;
  uid: string;
  fts_version: string;
  name: string;
  policy_id: number;
  items: ChecklistItemSummary[];
  card_id: number;
  checklist_id: number;
  sort_order: number;
}

/** Shared fields of CardSla projections returned by Kaiten. */
export interface CardSlaSummary {
  created: string;
  updated: string;
  id: string;
  company_id: number;
  updater_id: number;
  name: string;
  status: string;
  notification_settings: Record<string, JsonValue> | null;
  rules: {
    id: string;
    sla_id: string;
    type: string;
    estimated_time: number;
    calendar_id: number | null;
    start_column_uid: string | null;
    finish_column_uid: string | null;
    notification_settings: Record<string, JsonValue> | null;
    deleted: boolean;
    created: string;
  }[];
  card_id: number;
  sla_id: string;
}

/** Shared fields of Space projections returned by Kaiten. */
export interface SpaceSummary {
  id: number;
  uid?: string;
  title: string;
  external_id: string | null;
  company_id?: number;
  sort_order: number;
  path?: string;
  parent_entity_uid?: string | null;
  board_id?: number;
  space_id?: number;
  top?: number;
  left?: number;
  type?: number;
  primary_path?: boolean;
  entity_type?: string;
  access?: string;
  archived?: boolean;
  for_everyone_access_role_id?: string;
  user_id?: number;
  entity_uid?: string;
  access_mod?: string;
  role?: number;
  created?: string;
  updated?: string;
  hidden_card_type_uids?: string[] | null;
  settings?: JsonValue;
  group_id?: number;
}
