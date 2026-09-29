import type { HttpTransport, OperationOptions } from "../http.js";

import { pathSegment } from "../http.js";

import type { SearchResponseV2 } from "./search.js";

export interface CardAllowedUsersRetrieveUsersListQuery {
  type?: string;
  search?: string;
  orderBy?: string;
  role?: number;
  limit?: number;
  offset?: number;
}

export type CardAllowedUsersRetrieveUsersListResponse = {
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
}[];

export interface CardAllowedUsersRetrieveUsersListParams extends OperationOptions {
  card_id: number;
  query?: CardAllowedUsersRetrieveUsersListQuery;
  signal?: AbortSignal;
}

export interface CardBlockerCategoriesAddBlockerCategoryBody {
  name: string;
}

export interface CardBlockerCategoriesAddBlockerCategoryResponse {
  uid: string;
  name: string;
  color: number;
}

export interface CardBlockerCategoriesAddBlockerCategoryParams extends OperationOptions {
  blocker_id: number;
  body: CardBlockerCategoriesAddBlockerCategoryBody;
  signal?: AbortSignal;
}

export interface CardBlockerCategoriesRemoveCategoryResponse {
  uid: string;
}

export interface CardBlockerCategoriesRemoveCategoryParams extends OperationOptions {
  blocker_id: number;
  category_uuid: string;
  signal?: AbortSignal;
}

export type CardBlockerCategoriesRetrieveListOfCategoriesResponse = {
  uid: string;
  name: string;
  color: number;
}[];

export interface CardBlockerCategoriesRetrieveListOfCategoriesParams extends OperationOptions {
  signal?: AbortSignal;
}

export interface CardBlockerUsersAddUserToTheCardBlockerBody {
  user_id: number;
}

export interface CardBlockerUsersAddUserToTheCardBlockerResponse {
  id: number;
  uid: string;
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
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
}

export interface CardBlockerUsersAddUserToTheCardBlockerParams extends OperationOptions {
  blocker_id: number;
  body: CardBlockerUsersAddUserToTheCardBlockerBody;
  signal?: AbortSignal;
}

export interface CardBlockerUsersRemoveUserResponse {
  id: number;
}

export interface CardBlockerUsersRemoveUserParams extends OperationOptions {
  blocker_id: number;
  user_id: number;
  signal?: AbortSignal;
}

export interface CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserResponse {
  blocked_cards: string | number;
  summary: {
    total_blocked: number;
    blocked_by_user: string;
    cards_without_reason: number;
  };
}

export interface CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserParams extends OperationOptions {
  signal?: AbortSignal;
}

export type CardBlockerUsersRetrieveListOfUsersResponse = {
  created: string;
  updated: string;
  id: number;
  full_name: string;
  email: string;
  username: string;
  activated: boolean;
  show_tour: boolean;
  avatar_initials_url: string;
  initials: string;
  avatar_type: number;
  avatar_uploaded_url: string | null;
  lng: string;
  timezone: string;
  chat_enabled: boolean;
  theme: string;
  sd_telegram_id: string | null;
  news_subscription: boolean;
  ui_version: number;
  uid: string;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  delete_confirmation_sent_at: string | null;
  eula_accepted_at: string | null;
  terms_of_service_accepted_at: string | null;
  privacy_policy_accepted_at: string | null;
  block_uid: string;
  user_uid: string;
}[];

export interface CardBlockerUsersRetrieveListOfUsersParams extends OperationOptions {
  blocker_id: number;
  signal?: AbortSignal;
}

export type CardBlockersBlockCardBody = unknown;

export interface CardBlockersBlockCardResponse {
  created: string;
  updated: string;
  id: number;
  reason: string | null;
  card_id: number;
  blocker_id: number;
  blocker_card_id: number | null;
  blocker_card_title: string | null;
  released: boolean;
  released_by_id: number | null;
  due_date: string | null;
  due_date_time_present: boolean;
  blocked_card: string | number;
  blocker: string | number;
  card: string | number;
  uid?: string;
}

export interface CardBlockersBlockCardParams extends OperationOptions {
  card_id: number;
  body: CardBlockersBlockCardBody;
  signal?: AbortSignal;
}

export interface CardBlockersDeleteCardBlockersResponse {
  created: string;
  updated: string;
  id: number;
  reason: string | null;
  card_id: number;
  blocker_id: number;
  blocker_card_id: number | null;
  blocker_card_title: string | null;
  released: boolean;
  released_by_id: number | null;
  due_date: string | null;
  due_date_time_present: boolean;
  blocked_card: string | number;
  card: string | number;
  uid?: string;
  blocker?: string | number;
}

export interface CardBlockersDeleteCardBlockersParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardBlockersRetrieveCardBlockersListResponse = {
  created: string;
  updated: string;
  id: number;
  reason: string | null;
  card_id: number;
  blocker_id: number;
  blocker_card_id: number | null;
  blocker_card_title: string | null;
  released: boolean;
  released_by_id: number | null;
  due_date: string | null;
  due_date_time_present: boolean;
  blocked_card: string | number;
  blocker: string | number;
  card: string | number;
  uid?: string;
}[];

export interface CardBlockersRetrieveCardBlockersListParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardBlockersUpdateCardBlockersBody = unknown;

export interface CardBlockersUpdateCardBlockersResponse {
  created: string;
  updated: string;
  id: number;
  reason: string | null;
  card_id: number;
  blocker_id: number;
  blocker_card_id: number | null;
  blocker_card_title: string | null;
  released: boolean;
  released_by_id: number | null;
  due_date: string | null;
  due_date_time_present: boolean;
  uid?: string;
}

export interface CardBlockersUpdateCardBlockersParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardBlockersUpdateCardBlockersBody;
  signal?: AbortSignal;
}

export interface CardChildrenAddChildrenBody {
  card_id: number;
}

export interface CardChildrenAddChildrenResponse {
  id: number;
  created: string;
  updated: string;
  archived: boolean;
  title: string;
  asap: boolean;
  due_date: string | null;
  sort_order: number;
  fifo_order: number;
  state: number;
  condition: number;
  expires_later: boolean;
  parents_count: number;
  children_count: number;
  children_done: number;
  has_blocked_children: boolean;
  goals_total: number;
  goals_done: number;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | null;
  calculated_planned_start: null;
  calculated_planned_end: null;
  parent_checklist_ids: unknown[] | null;
  children_ids: null;
  parents_ids: number[];
  blocking_card: boolean;
  blocked: boolean;
  size: number | null;
  size_unit: string | null;
  size_text: string | null;
  due_date_time_present: boolean;
  board_id: number;
  column_id: number;
  lane_id: number;
  owner_id: number;
  type_id: number;
  version: number;
  updater_id: number;
  completed_on_time: boolean | null;
  completed_at: string | null;
  last_moved_at: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  sprint_id: number;
  external_id: string | null;
  comments_total: number;
  comment_last_added_at: string | null;
  properties: string | number | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  service_id: number;
  sd_new_comment: boolean;
  public: boolean;
  share_settings: Record<string, unknown> | null;
  share_id: string | null;
  external_user_emails: string | null;
  description_filled: boolean;
  estimate_workload: number;
  has_access_to_space: boolean;
  path_data: {
    lane: {
      id: number;
      title: string;
      sort_order: number;
    };
    board: {
      id: number;
      title: string;
    };
    space: {
      id: number;
      title: string;
    };
    column: {
      id: number;
      title: string;
      sort_order: number;
    };
    subcolumn: {
      id: number;
      title: string;
      sort_order: number;
    };
  };
  space_id: number;
  type: string | number;
  owner: string | number;
  description?: string | null;
  counters_recalculated_at?: string;
}

export interface CardChildrenAddChildrenParams extends OperationOptions {
  card_id: number;
  body: CardChildrenAddChildrenBody;
  signal?: AbortSignal;
}

export interface CardChildrenRemoveChildrenResponse {
  id: number;
}

export interface CardChildrenRemoveChildrenParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardChildrenRetrieveCardChildrenListResponse = {
  id: number;
  created: string;
  updated: string;
  archived: boolean;
  title: string;
  asap: boolean;
  due_date: string | null;
  sort_order: number;
  fifo_order: number;
  state: number;
  condition: number;
  expires_later: boolean;
  parents_count: number;
  children_count: number;
  children_done: number;
  has_blocked_children: boolean;
  goals_total: number;
  goals_done: number;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | null;
  calculated_planned_start: null;
  calculated_planned_end: null;
  parent_checklist_ids: unknown[] | null;
  children_ids: null;
  parents_ids: number[];
  blocking_card: boolean;
  blocked: boolean;
  size: number | null;
  size_unit: string | null;
  size_text: string | null;
  due_date_time_present: boolean;
  board_id: number;
  column_id: number;
  lane_id: number;
  owner_id: number;
  type_id: number;
  version: number;
  updater_id: number;
  completed_on_time: boolean | null;
  completed_at: string | null;
  last_moved_at: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  sprint_id: number;
  external_id: string | null;
  comments_total: number;
  comment_last_added_at: string | null;
  properties: string | number | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  service_id: number;
  sd_new_comment: boolean;
  public: boolean;
  share_settings: Record<string, unknown> | null;
  share_id: string | null;
  external_user_emails: string | null;
  description_filled: boolean;
  estimate_workload: number;
  type: string | number;
  owner: string | number;
  board: string | number;
  lane: string | number;
  column: string | number;
  card_id: number;
  depends_on_card_id: number;
  description?: string | null;
  counters_recalculated_at?: string;
}[];

export interface CardChildrenRetrieveCardChildrenListParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export interface CardCommentsAddCommentBody {
  text: string;
}

export interface CardCommentsAddCommentResponse {
  created: string;
  updated: string;
  id: number;
  uid: string;
  text: string;
  type: number;
  edited: boolean;
  card_id: number;
  author_id: number;
  email_addresses_to: string;
  deleted: boolean;
  internal: boolean;
  sd_external_recipients_cc: string | null;
  sd_description: boolean;
  notification_sent: string | null;
  attacments: string | number;
}

export interface CardCommentsAddCommentParams extends OperationOptions {
  card_id: number;
  body: CardCommentsAddCommentBody | FormData;
  signal?: AbortSignal;
}

export interface CardCommentsRemoveCommentResponse {
  id: number;
}

export interface CardCommentsRemoveCommentParams extends OperationOptions {
  card_id: number;
  comment_id: number;
  signal?: AbortSignal;
}

export type CardCommentsRetrieveCardCommentsResponse = {
  created: string;
  update: string;
  id: number;
  uid: string;
  text: string;
  edited: boolean;
  card_id: number;
  author_id: number;
  email_addresses_to: string;
  type: number;
  deleted: boolean;
  internal: boolean;
  sd_external_recipients_cc: string | null;
  notification_sent: string | null;
  sent_slack_messages_data: null;
  sd_description: boolean;
  author: string | number;
  updated?: string;
}[];

export interface CardCommentsRetrieveCardCommentsParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export interface CardCommentsUpdateCommentBody {
  text?: string;
}

export interface CardCommentsUpdateCommentResponse {
  created: string;
  updated: string;
  id: number;
  uid: string;
  text: string;
  type: number;
  edited: boolean;
  card_id: number;
  author_id: number;
  email_addresses_to: string;
  deleted: boolean;
  internal: boolean;
  sd_external_recipients_cc: string | null;
  sd_description: boolean;
  notification_sent: string | null;
  attacments: string | number;
}

export interface CardCommentsUpdateCommentParams extends OperationOptions {
  card_id: number;
  comment_id: number;
  body: CardCommentsUpdateCommentBody | FormData;
  signal?: AbortSignal;
}

export interface CardExternalLinksAddExternalLinkBody {
  url: string;
  description?: string | null;
}

export interface CardExternalLinksAddExternalLinkResponse {
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string;
}

export interface CardExternalLinksAddExternalLinkParams extends OperationOptions {
  card_id: number;
  body: CardExternalLinksAddExternalLinkBody;
  signal?: AbortSignal;
}

export interface CardExternalLinksRemoveExternalLinkResponse {
  id: number;
}

export interface CardExternalLinksRemoveExternalLinkParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardExternalLinksRetrieveCardExternalLinksResponse = {
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string;
  card_id: number;
  external_link_id: number;
}[];

export interface CardExternalLinksRetrieveCardExternalLinksParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardExternalLinksUpdateExternalLinkBody = unknown;

export interface CardExternalLinksUpdateExternalLinkResponse {
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string;
}

export interface CardExternalLinksUpdateExternalLinkParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardExternalLinksUpdateExternalLinkBody;
  signal?: AbortSignal;
}

export interface CardMembersAddMemberToCardBody {
  user_id: number;
}

export interface CardMembersAddMemberToCardResponse {
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
  updated: string;
  type: number;
}

export interface CardMembersAddMemberToCardParams extends OperationOptions {
  card_id: number;
  body: CardMembersAddMemberToCardBody;
  signal?: AbortSignal;
}

export interface CardMembersRemoveMemberFromCardResponse {
  id: number;
}

export interface CardMembersRemoveMemberFromCardParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardMembersRetrieveListOfCardMembersResponse = {
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
  virtual: boolean;
  card_id: number;
  user_id: number;
  type: number;
}[];

export interface CardMembersRetrieveListOfCardMembersParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export interface CardMembersUpdateMemberRoleBody {
  type: number;
}

export interface CardMembersUpdateMemberRoleResponse {
  created: string;
  updated: string;
  card_id: number;
  user_id: number;
  type: number;
}

export interface CardMembersUpdateMemberRoleParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardMembersUpdateMemberRoleBody;
  signal?: AbortSignal;
}

export type CardsBatchUpdateForCardsBody = unknown;

export interface CardsBatchUpdateForCardsResponse {
  id: string;
}

export interface CardsBatchUpdateForCardsParams extends OperationOptions {
  body: CardsBatchUpdateForCardsBody;
  signal?: AbortSignal;
}

export interface CardsCreateNewCardBody {
  title: number | string;
  board_id: number;
  asap?: boolean;
  due_date?: string | null;
  due_date_time_present?: boolean;
  sort_order?: number;
  description?: (number | string) | null;
  expires_later?: boolean;
  size_text?: (number | string) | null;
  column_id?: number;
  lane_id?: number;
  owner_id?: number;
  responsible_id?: number;
  owner_email?: string;
  position?: 1 | 2;
  type_id?: number;
  service_id?: number | null;
  external_id?: (number | string) | null;
  text_format_type_id?: 1 | 2 | 3;
  properties?: Record<string, unknown>;
}

export interface CardsCreateNewCardResponse {
  created: string;
  updated: string;
  archived: boolean;
  id: number;
  title: string;
  description: string | null;
  asap: boolean;
  due_date: string | null;
  sort_order: number;
  fifo_order: number | null;
  state: number;
  condition: number;
  expires_later: boolean;
  parents_count: number;
  children_count: number;
  children_done: number;
  goals_total: number;
  goals_done: number;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | null;
  parent_checklist_ids: unknown[] | null;
  blocking_card: boolean;
  blocked: boolean;
  size: number | null;
  size_unit: string | null;
  size_text: string | null;
  due_date_time_present: boolean;
  board_id: number;
  column_id: number;
  lane_id: number | null;
  owner_id: number;
  type_id: number | null;
  version: number;
  updater_id: number;
  completed_on_time: boolean | null;
  completed_at: string | null;
  last_moved_at: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  sprint_id: number | null;
  external_id: string | null;
  service_id: number | null;
  comments_total: number;
  comment_last_added_at: string | null;
  properties: string | number | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  counters_recalculated_at: string;
  sd_new_comment: boolean;
  public: boolean;
  share_settings: Record<string, unknown> | null;
  share_id: string | null;
  external_user_emails: string | null;
  description_filled: boolean;
  estimate_workload: number;
  owner: string | number;
  type: string | number;
  external_links: unknown[];
  files: string | number;
  checklists: string | number;
  calculated_planned_start?: string | null;
  calculated_planned_end?: string | null;
  source?: string | null;
}

export interface CardsCreateNewCardParams extends OperationOptions {
  body: CardsCreateNewCardBody;
  signal?: AbortSignal;
}

export interface CardsDeleteCardResponse {
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
  description: string | null;
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
  last_moved_at: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  sprint_id: number | null;
  external_id: string | null;
  service_id: number | null;
  properties: string | number | null;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, unknown> | null;
  external_user_emails: string | null;
  tag_ids: null;
  estimate_workload: number;
  comments_total: number;
  comment_last_added_at: string | null;
  parents_count: number;
  children_count: number;
  children_done: number;
  goals_total: number;
  goals_done: number;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | null;
  calculated_planned_start: string | null;
  calculated_planned_end: string | null;
  description_filled: boolean;
  has_blocked_children: boolean;
  parent_checklist_ids: unknown[] | null;
  children_ids: unknown[] | null;
  parents_ids: unknown[] | null;
  fifo_order: number | null;
  counters_recalculated_at: string;
  sd_new_comment: boolean;
  import_id: number | null;
  owner: string | number;
  members: string | number;
  source?: string | null;
}

export interface CardsDeleteCardParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export interface CardsRetrieveCardQuery {
  broken_api?: boolean;
}

export interface CardsRetrieveCardResponse {
  created: string;
  updated: string;
  archived: boolean;
  id: number;
  uid: string;
  title: string;
  asap: boolean;
  due_date: string | null;
  due_date_time_present: boolean;
  expires_later: boolean;
  sort_order: number;
  description: string | null;
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
  last_moved_at: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  sprint_id: number | null;
  external_id: string | null;
  service_id: number | null;
  properties: string | number | null;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, unknown> | null;
  external_user_emails: string | null;
  tag_ids: null;
  estimate_workload: number;
  comments_total: number;
  comment_last_added_at: string | null;
  parents_count: number;
  children_count: number;
  children_done: number;
  goals_total: number;
  goals_done: number;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | null;
  calculated_planned_start: string | null;
  calculated_planned_end: string | null;
  description_filled: boolean;
  has_blocked_children: boolean;
  parent_checklist_ids: unknown[] | null;
  children_ids: unknown[] | null;
  parents_ids: unknown[] | null;
  fifo_order: number | null;
  counters_recalculated_at: string;
  sd_new_comment: boolean;
  import_id: number | null;
  board: string | number;
  lane: string | number;
  column: string | number;
  type: string | number;
  checklists: string | number;
  members: string | number;
  blockers: string | number;
  owner: string | number;
  slas: string | number;
  blocked_at: string;
  blocker_id: number;
  blocker: string | number;
  block_reason: string;
  children: string | number;
  parents: string | number;
  files: string | number;
  tags: unknown[];
  external_links: unknown[];
  cardRole: number;
  email: string;
  source?: string | null;
}

export interface CardsRetrieveCardParams extends OperationOptions {
  card_id: number;
  query?: CardsRetrieveCardQuery;
  signal?: AbortSignal;
}

export type CardsRetrieveCardBaselinesResponse = (
  | {
      id: number;
      uid: string;
      baseline_id: string;
      planned_start: string;
      planned_end: string | null;
      project_id?: string;
    }
  | {
      id: number;
      project_id: string;
      baseline_id: string;
      planned_start: string;
      planned_end: string | null;
    }
)[];

export interface CardsRetrieveCardBaselinesParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export interface CardsRetrieveCardListQuery {
  created_before?: string;
  created_after?: string;
  updated_before?: string;
  updated_after?: string;
  first_moved_in_progress_after?: string;
  first_moved_in_progress_before?: string;
  last_moved_to_done_at_after?: string;
  last_moved_to_done_at_before?: string;
  due_date_after?: string;
  due_date_before?: string;
  query?: string;
  version?: 1 | 2;
  tag?: string;
  tag_ids?: string;
  type_ids?: string;
  exclude_board_ids?: string;
  exclude_lane_ids?: string;
  exclude_column_ids?: string;
  column_ids?: string;
  member_ids?: string;
  owner_ids?: string;
  responsible_ids?: string;
  states?: string;
  external_id?: string;
  additional_card_fields?: string;
  search_fields?: string;
  space_id?: number;
  limit?: number;
  offset?: number;
  start_position?: string;
  include_search_preview?: boolean;
  order_space_id?: number;
  board_id?: number;
  column_id?: number;
  lane_id?: number;
  condition?: number;
  type_id?: number;
  responsible_id?: number;
  owner_id?: number;
  archived?: boolean;
  asap?: boolean;
  overdue?: boolean;
  done_on_time?: boolean;
  with_due_date?: boolean;
  filter?: string;
  order_by?: string;
  order_direction?: string;
  is_request?: boolean;
  exclude_owner_ids?: string;
  exclude_card_ids?: string;
  organizations_ids?: string;
  broken_api?: boolean;
}

export type CardsRetrieveCardListResponse = {
  id: number;
  uid: string;
  created: string;
  updated: string;
  archived: boolean;
  title: string;
  asap: boolean;
  due_date: string | null;
  sort_order: number;
  fifo_order: number | null;
  state: number;
  condition: number;
  expires_later: boolean;
  parents_count: number;
  children_count: number;
  children_done: number;
  has_blocked_children: boolean;
  goals_total: number;
  goals_done: number;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | null;
  calculated_planned_start: string | null;
  calculated_planned_end: string | null;
  parent_checklist_ids: unknown[] | null;
  children_ids: unknown[] | null;
  parents_ids: unknown[] | null;
  blocking_card: boolean;
  blocked: boolean;
  size: number | null;
  size_unit: string | null;
  size_text: string | null;
  due_date_time_present: boolean;
  board_id: number;
  column_id: number;
  lane_id: number | null;
  owner_id: number;
  type_id: number | null;
  version: number;
  updater_id: number;
  completed_on_time: boolean | null;
  completed_at: string | null;
  last_moved_at: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  sprint_id: number | null;
  external_id: string | null;
  comments_total: number;
  comment_last_added_at: string | null;
  properties: string | number | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  service_id: number | null;
  sd_new_comment: boolean;
  public: boolean;
  share_settings: Record<string, unknown> | null;
  share_id: string | null;
  external_user_emails: string | null;
  description_filled: boolean;
  estimate_workload: number;
  owner: string | number;
  board: string | number;
  members: string | number;
  column: string | number;
  lane: string | number;
  type: string | number;
  path_data: {
    space: {
      id: number;
      uid: string;
      title: string;
      external_id: null;
      company_id: number;
      sort_order: number;
      path: string;
      parent_entity_uid: null;
      board_id: number;
      space_id: number;
      top: number;
      left: number;
      type: number;
      primary_path: boolean;
    };
    board: {
      id: number;
      title: string;
      external_id: null;
      card_properties: null;
      spaces: {
        id: number;
        uid: string;
        title: string;
        external_id: null;
        company_id: number;
        sort_order: number;
        path: string;
        parent_entity_uid: null;
        board_id: number;
        space_id: number;
        top: number;
        left: number;
        type: number;
        primary_path: boolean;
      }[];
    };
    lane: {
      id: number;
      title: string;
      sort_order: number;
      board_id: number;
      condition: number;
      external_id: null;
    };
    column: {
      id: number;
      title: string;
      sort_order: number;
      col_count: number;
      type: number;
      board_id: number;
      column_id: null;
      external_id: null;
      rules: number;
    };
    subcolumn: null;
  };
  description?: string | null;
  counters_recalculated_at?: string;
  children?: string | number;
  parents?: string | number;
  source?: string | null;
}[];

export interface CardsRetrieveCardListParams extends OperationOptions {
  query?: CardsRetrieveCardListQuery;
  signal?: AbortSignal;
}

export type CardsRetrieveCardLocationHistoryResponse = {
  id: string;
  card_id: number;
  board_id: number;
  column_id: number;
  subcolumn_id: number | null;
  lane_id: number;
  sprint_id: number | null;
  author_id: number;
  author: string | number;
  condition: number;
  changed: string;
}[];

export interface CardsRetrieveCardLocationHistoryParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export interface CardsUpdateCardBody {
  title?: number | string;
  asap?: boolean;
  due_date?: string | null;
  due_date_time_present?: boolean;
  sort_order?: number;
  description?: (number | string) | null;
  expires_later?: boolean;
  size_text?: (number | string) | null;
  board_id?: number;
  column_id?: number;
  lane_id?: number;
  owner_id?: number;
  type_id?: number;
  service_id?: number | null;
  blocked?: boolean;
  condition?: 1 | 2;
  external_id?: (number | string) | null;
  text_format_type_id?: 1 | 2 | 3;
  sd_new_comment?: boolean;
  owner_email?: string;
  prev_card_id?: number;
  estimate_workload?: number;
  ignore_planned_dates_recalculation?: boolean;
  properties?: Record<string, unknown>;
}

export interface CardsUpdateCardResponse {
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
  description: string | null;
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
  last_moved_at: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  sprint_id: number | null;
  external_id: string | null;
  service_id: number | null;
  properties: string | number | null;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, unknown> | null;
  external_user_emails: string | null;
  tag_ids: null;
  estimate_workload: number;
  comments_total: number;
  comment_last_added_at: string | null;
  parents_count: number;
  children_count: number;
  children_done: number;
  goals_total: number;
  goals_done: number;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | null;
  calculated_planned_start: string | null;
  calculated_planned_end: string | null;
  description_filled: boolean;
  has_blocked_children: boolean;
  parent_checklist_ids: unknown[] | null;
  children_ids: unknown[] | null;
  parents_ids: unknown[] | null;
  fifo_order: number | null;
  counters_recalculated_at: string;
  sd_new_comment: boolean;
  import_id: number | null;
  owner: string | number;
  members: string | number;
  tags?: string | number;
  source?: string | null;
}

export interface CardsUpdateCardParams extends OperationOptions {
  card_id: number;
  body: CardsUpdateCardBody;
  signal?: AbortSignal;
}

export const createCardsResources = (transport: HttpTransport) => ({
  cardAllowedUsers: {
    /** @see https://developers.kaiten.ru/card-allowed-users/retrieve-users-list */
    retrieveUsersList: (params: CardAllowedUsersRetrieveUsersListParams) => {
      return transport.request<CardAllowedUsersRetrieveUsersListResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/allowed-users",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  cardBlockerCategories: {
    /** @see https://developers.kaiten.ru/card-blocker-categories/add-blocker-category */
    addBlockerCategory: (
      params: CardBlockerCategoriesAddBlockerCategoryParams,
    ) => {
      return transport.request<CardBlockerCategoriesAddBlockerCategoryResponse>(
        {
          method: "POST",
          path: "/blockers/" + pathSegment(params.blocker_id) + "/categories",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-blocker-categories/remove-category */
    removeCategory: (params: CardBlockerCategoriesRemoveCategoryParams) => {
      return transport.request<CardBlockerCategoriesRemoveCategoryResponse>({
        method: "DELETE",
        path:
          "/blockers/" +
          pathSegment(params.blocker_id) +
          "/categories/" +
          pathSegment(params.category_uuid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blocker-categories/retrieve-list-of-categories */
    retrieveListOfCategories: (
      params: CardBlockerCategoriesRetrieveListOfCategoriesParams = {},
    ) => {
      return transport.request<CardBlockerCategoriesRetrieveListOfCategoriesResponse>(
        {
          method: "GET",
          path: "/categories",
          signal: params.signal,
        },
      );
    },
  },
  cardBlockerUsers: {
    /** @see https://developers.kaiten.ru/card-blocker-users/add-user-to-the-card-blocker */
    addUserToTheCardBlocker: (
      params: CardBlockerUsersAddUserToTheCardBlockerParams,
    ) => {
      return transport.request<CardBlockerUsersAddUserToTheCardBlockerResponse>(
        {
          method: "POST",
          path: "/blockers/" + pathSegment(params.blocker_id) + "/users",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-blocker-users/remove-user */
    removeUser: (params: CardBlockerUsersRemoveUserParams) => {
      return transport.request<CardBlockerUsersRemoveUserResponse>({
        method: "DELETE",
        path:
          "/blockers/" +
          pathSegment(params.blocker_id) +
          "/users/" +
          pathSegment(params.user_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blocker-users/retrieve-blockers-cards-list-on-current-user */
    retrieveBlockersCardsListOnCurrentUser: (
      params: CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserParams = {},
    ) => {
      return transport.request<CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserResponse>(
        {
          method: "GET",
          path: "/users/current/blockers",
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-blocker-users/retrieve-list-of-users */
    retrieveListOfUsers: (
      params: CardBlockerUsersRetrieveListOfUsersParams,
    ) => {
      return transport.request<CardBlockerUsersRetrieveListOfUsersResponse>({
        method: "GET",
        path: "/blockers/" + pathSegment(params.blocker_id) + "/users",
        signal: params.signal,
      });
    },
  },
  cardBlockers: {
    /** @see https://developers.kaiten.ru/card-blockers/block-card */
    blockCard: (params: CardBlockersBlockCardParams) => {
      return transport.request<CardBlockersBlockCardResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(params.card_id) + "/blockers",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blockers/delete-card-blockers */
    deleteCardBlockers: (params: CardBlockersDeleteCardBlockersParams) => {
      return transport.request<CardBlockersDeleteCardBlockersResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/blockers/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blockers/retrieve-card-blockers-list */
    retrieveCardBlockersList: (
      params: CardBlockersRetrieveCardBlockersListParams,
    ) => {
      return transport.request<CardBlockersRetrieveCardBlockersListResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/blockers",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blockers/update-card-blockers */
    updateCardBlockers: (params: CardBlockersUpdateCardBlockersParams) => {
      return transport.request<CardBlockersUpdateCardBlockersResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/blockers/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardChildren: {
    /** @see https://developers.kaiten.ru/card-children/add-children */
    addChildren: (params: CardChildrenAddChildrenParams) => {
      return transport.request<CardChildrenAddChildrenResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(params.card_id) + "/children",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-children/remove-children */
    removeChildren: (params: CardChildrenRemoveChildrenParams) => {
      return transport.request<CardChildrenRemoveChildrenResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/children/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-children/retrieve-card-children-list */
    retrieveCardChildrenList: (
      params: CardChildrenRetrieveCardChildrenListParams,
    ) => {
      return transport.request<CardChildrenRetrieveCardChildrenListResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/children",
        signal: params.signal,
      });
    },
  },
  cardComments: {
    /** @see https://developers.kaiten.ru/card-comments/add-comment */
    addComment: (params: CardCommentsAddCommentParams) => {
      return transport.request<CardCommentsAddCommentResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(params.card_id) + "/comments",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-comments/remove-comment */
    removeComment: (params: CardCommentsRemoveCommentParams) => {
      return transport.request<CardCommentsRemoveCommentResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/comments/" +
          pathSegment(params.comment_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-comments/retrieve-card-comments */
    retrieveCardComments: (params: CardCommentsRetrieveCardCommentsParams) => {
      return transport.request<CardCommentsRetrieveCardCommentsResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/comments",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-comments/update-comment */
    updateComment: (params: CardCommentsUpdateCommentParams) => {
      return transport.request<CardCommentsUpdateCommentResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/comments/" +
          pathSegment(params.comment_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardExternalLinks: {
    /** @see https://developers.kaiten.ru/card-external-links/add-external-link */
    addExternalLink: (params: CardExternalLinksAddExternalLinkParams) => {
      return transport.request<CardExternalLinksAddExternalLinkResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(params.card_id) + "/external-links",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-external-links/remove-external-link */
    removeExternalLink: (params: CardExternalLinksRemoveExternalLinkParams) => {
      return transport.request<CardExternalLinksRemoveExternalLinkResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/external-links/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-external-links/retrieve-card-external-links */
    retrieveCardExternalLinks: (
      params: CardExternalLinksRetrieveCardExternalLinksParams,
    ) => {
      return transport.request<CardExternalLinksRetrieveCardExternalLinksResponse>(
        {
          method: "GET",
          path: "/cards/" + pathSegment(params.card_id) + "/external-links",
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-external-links/update-external-link */
    updateExternalLink: (params: CardExternalLinksUpdateExternalLinkParams) => {
      return transport.request<CardExternalLinksUpdateExternalLinkResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/external-links/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardMembers: {
    /** @see https://developers.kaiten.ru/card-members/add-member-to-card */
    addMemberToCard: (params: CardMembersAddMemberToCardParams) => {
      return transport.request<CardMembersAddMemberToCardResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(params.card_id) + "/members",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-members/remove-member-from-card */
    removeMemberFromCard: (params: CardMembersRemoveMemberFromCardParams) => {
      return transport.request<CardMembersRemoveMemberFromCardResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/members/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-members/retrieve-list-of-card-members */
    retrieveListOfCardMembers: (
      params: CardMembersRetrieveListOfCardMembersParams,
    ) => {
      return transport.request<CardMembersRetrieveListOfCardMembersResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/members",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-members/update-member-role */
    updateMemberRole: (params: CardMembersUpdateMemberRoleParams) => {
      return transport.request<CardMembersUpdateMemberRoleResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/members/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cards: {
    /** @see https://developers.kaiten.ru/cards/batch-update-for-cards */
    batchUpdateForCards: (params: CardsBatchUpdateForCardsParams) => {
      return transport.request<CardsBatchUpdateForCardsResponse>({
        method: "PATCH",
        path: "/cards",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/create-new-card */
    createNewCard: (params: CardsCreateNewCardParams) => {
      return transport.request<CardsCreateNewCardResponse>({
        method: "POST",
        path: "/cards",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/delete-card */
    deleteCard: (params: CardsDeleteCardParams) => {
      return transport.request<CardsDeleteCardResponse>({
        method: "DELETE",
        path: "/cards/" + pathSegment(params.card_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/retrieve-card */
    retrieveCard: (params: CardsRetrieveCardParams) => {
      return transport.request<CardsRetrieveCardResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id),
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/retrieve-card-baselines */
    retrieveCardBaselines: (params: CardsRetrieveCardBaselinesParams) => {
      return transport.request<CardsRetrieveCardBaselinesResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/baselines",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/retrieve-card-list */
    retrieveCardList: <Version extends 1 | 2 = 1>(
      params: Omit<CardsRetrieveCardListParams, "query"> & {
        query?: Omit<CardsRetrieveCardListQuery, "version"> & {
          version?: Version;
        };
      } = {},
    ) => {
      return transport.request<
        Version extends 2
          ? SearchResponseV2<CardsRetrieveCardListResponse>
          : CardsRetrieveCardListResponse
      >({
        method: "GET",
        path: "/cards",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/retrieve-card-location-history */
    retrieveCardLocationHistory: (
      params: CardsRetrieveCardLocationHistoryParams,
    ) => {
      return transport.request<CardsRetrieveCardLocationHistoryResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/location-history",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/update-card */
    updateCard: (params: CardsUpdateCardParams) => {
      return transport.request<CardsUpdateCardResponse>({
        method: "PATCH",
        path: "/cards/" + pathSegment(params.card_id),
        body: params.body,
        signal: params.signal,
      });
    },
    create: (params: CardsCreateNewCardParams) =>
      transport.request<CardsCreateNewCardResponse>({
        method: "POST",
        path: "/cards",
        body: params.body,
        signal: params.signal,
      }),
  },
});
