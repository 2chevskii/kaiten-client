/** Generated from the Kaiten developer documentation audit. */
import type { HttpTransport, OperationOptions } from '../http.js';
import { pathSegment } from '../http.js';

export type AuditLogsRetrieveAuditLogEventsQuery = {
  from?: string;
  to?: string;
  author_id?: number;
  author_uid?: string;
  categories?: string;
  actions?: string;
  id?: string;
  limit?: number;
  offset?: number;
};

export type AuditLogsRetrieveAuditLogEventsResponse = Array<({
  id: string;
  app_name: string | null;
  company_uid: string | null;
  author_id: number | null;
  author_uid: string | null;
  author_username: string | null;
  author_remote_address: string | null;
  author: Record<string, unknown> | null;
  category: string;
  action: string;
  message: string;
  details: Record<string, unknown> | null;
  created: string;
})>;

export interface AuditLogsRetrieveAuditLogEventsParams extends OperationOptions {
  query?: AuditLogsRetrieveAuditLogEventsQuery;
  signal?: AbortSignal;
}

export type AutomationsCreateAutomationBody = unknown;

export type AutomationsCreateAutomationResponse = {
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: {
  type: string;
  hasToFireOnCardCreation: boolean;
};
  actions: Array<({
  data: {
  slaIds: Array<(string)>;
};
  type: string;
  created: string;
})>;
  conditions: Record<string, unknown>;
  type: string;
  sort_order: number;
};

export interface AutomationsCreateAutomationParams extends OperationOptions {
  space_id: number;
  body?: AutomationsCreateAutomationBody;
  signal?: AbortSignal;
}

export type AutomationsDeleteAutomationResponse = {
  message: string;
};

export interface AutomationsDeleteAutomationParams extends OperationOptions {
  space_id: number;
  automation_uid: string;
  signal?: AbortSignal;
}

export type AutomationsGetListOfAutomationsResponse = Array<({
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: {
  type: string;
  hasToFireOnCardCreation: boolean;
};
  actions: Array<({
  data: {
  slaIds: Array<(string)>;
};
  type: string;
  created: string;
})>;
  conditions: Record<string, unknown>;
  type: string;
  sort_order: number;
})>;

export interface AutomationsGetListOfAutomationsParams extends OperationOptions {
  space_id: number;
  signal?: AbortSignal;
}

export type AutomationsUpdateAutomationBody = unknown;

export type AutomationsUpdateAutomationResponse = {
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: {
  type: string;
  hasToFireOnCardCreation: boolean;
};
  actions: Array<({
  data: {
  slaIds: Array<(string)>;
};
  type: string;
  created: string;
})>;
  conditions: Record<string, unknown>;
  type: string;
  sort_order: number;
};

export interface AutomationsUpdateAutomationParams extends OperationOptions {
  space_id: number;
  automation_uid: string;
  body?: AutomationsUpdateAutomationBody;
  signal?: AbortSignal;
}

export type BoardsGetBoardResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: unknown[] | null;
  external_id: string | null;
  default_card_type_id: number;
  description: string | null;
  email_key: string;
  move_parents_to_done: boolean;
  default_tags: string | null;
  first_image_is_cover: boolean;
  reset_lane_spent_time: boolean;
  backward_moves_enabled: boolean;
  hide_done_policies: boolean;
  hide_done_policies_in_done_column: boolean;
  automove_cards: boolean;
  auto_assign_enabled: boolean;
  card_properties: boolean | null;
  columns: string | number;
  lanes: string | number;
  cards: unknown[];
};

export interface BoardsGetBoardParams extends OperationOptions {
  id: number;
  signal?: AbortSignal;
}

export type CardAllowedUsersRetrieveUsersListQuery = {
  type?: string;
  search?: string;
  orderBy?: string;
  role?: number;
  limit?: number;
  offset?: number;
};

export type CardAllowedUsersRetrieveUsersListResponse = Array<({
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
})>;

export interface CardAllowedUsersRetrieveUsersListParams extends OperationOptions {
  card_id: number;
  query?: CardAllowedUsersRetrieveUsersListQuery;
  signal?: AbortSignal;
}

export type CardBlockerCategoriesAddBlockerCategoryBody = {
  name: string;
};

export type CardBlockerCategoriesAddBlockerCategoryResponse = {
  uid: string;
  name: string;
  color: number;
};

export interface CardBlockerCategoriesAddBlockerCategoryParams extends OperationOptions {
  blocker_id: number;
  body: CardBlockerCategoriesAddBlockerCategoryBody;
  signal?: AbortSignal;
}

export type CardBlockerCategoriesRemoveCategoryResponse = {
  uid: string;
};

export interface CardBlockerCategoriesRemoveCategoryParams extends OperationOptions {
  blocker_id: number;
  category_uuid: string;
  signal?: AbortSignal;
}

export type CardBlockerCategoriesRetrieveListOfCategoriesResponse = Array<({
  uid: string;
  name: string;
  color: number;
})>;

export interface CardBlockerCategoriesRetrieveListOfCategoriesParams extends OperationOptions {
  signal?: AbortSignal;
}

export type CardBlockerUsersAddUserToTheCardBlockerBody = {
  user_id: number;
};

export type CardBlockerUsersAddUserToTheCardBlockerResponse = {
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
};

export interface CardBlockerUsersAddUserToTheCardBlockerParams extends OperationOptions {
  blocker_id: number;
  body: CardBlockerUsersAddUserToTheCardBlockerBody;
  signal?: AbortSignal;
}

export type CardBlockerUsersRemoveUserResponse = {
  id: number;
};

export interface CardBlockerUsersRemoveUserParams extends OperationOptions {
  blocker_id: number;
  user_id: number;
  signal?: AbortSignal;
}

export type CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserResponse = {
  blocked_cards: string | number;
  summary: {
  total_blocked: number;
  blocked_by_user: string;
  cards_without_reason: number;
};
};

export interface CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserParams extends OperationOptions {
  signal?: AbortSignal;
}

export type CardBlockerUsersRetrieveListOfUsersResponse = Array<({
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
})>;

export interface CardBlockerUsersRetrieveListOfUsersParams extends OperationOptions {
  blocker_id: number;
  signal?: AbortSignal;
}

export type CardBlockersBlockCardBody = (unknown) | (unknown);

export type CardBlockersBlockCardResponse = {
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
};

export interface CardBlockersBlockCardParams extends OperationOptions {
  card_id: number;
  body: CardBlockersBlockCardBody;
  signal?: AbortSignal;
}

export type CardBlockersDeleteCardBlockersResponse = {
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
};

export interface CardBlockersDeleteCardBlockersParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardBlockersRetrieveCardBlockersListResponse = Array<({
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
})>;

export interface CardBlockersRetrieveCardBlockersListParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardBlockersUpdateCardBlockersBody = (unknown) | (unknown);

export type CardBlockersUpdateCardBlockersResponse = {
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
};

export interface CardBlockersUpdateCardBlockersParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardBlockersUpdateCardBlockersBody;
  signal?: AbortSignal;
}

export type CardChecklistItemsAddItemToChecklistBody = {
  text: string;
  sort_order?: number;
  checked?: boolean;
  due_date?: (string) | (null);
  responsible_id?: number;
};

export type CardChecklistItemsAddItemToChecklistResponse = {
  created: string;
  updated: string;
  id: number;
  text: string;
  sort_order: number;
  checked: boolean;
  checklist_id: number;
  checker_id: number | null;
  user_id: number;
  checked_at: string | null;
  responsible_id: number | null;
  deleted: boolean;
  due_date: string | null;
};

export interface CardChecklistItemsAddItemToChecklistParams extends OperationOptions {
  card_id: number;
  checklist_id: number;
  body: CardChecklistItemsAddItemToChecklistBody;
  signal?: AbortSignal;
}

export type CardChecklistItemsRemoveChecklistItemResponse = {
  id: number;
};

export interface CardChecklistItemsRemoveChecklistItemParams extends OperationOptions {
  card_id: number;
  checklist_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardChecklistItemsUpdateChecklistItemBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type CardChecklistItemsUpdateChecklistItemResponse = {
  created: string;
  updated: string;
  id: number;
  text: string;
  sort_order: number;
  checked: boolean;
  checklist_id: number;
  checker_id: number | null;
  user_id: number;
  checked_at: string | null;
  responsible_id: number | null;
  deleted: boolean;
  due_date: string | null;
};

export interface CardChecklistItemsUpdateChecklistItemParams extends OperationOptions {
  card_id: number;
  checklist_id: number;
  id: number;
  body: CardChecklistItemsUpdateChecklistItemBody;
  signal?: AbortSignal;
}

export type CardChecklistsAddChecklistToCardBody = (unknown) | (unknown);

export type CardChecklistsAddChecklistToCardResponse = {
  created: string;
  updated: string;
  id: number;
  name: string;
  policy_id: number | null;
  card_id: number;
  checklist_id: number;
  sort_order: number;
  deleted: boolean;
  items: string | number;
};

export interface CardChecklistsAddChecklistToCardParams extends OperationOptions {
  card_id: number;
  body: CardChecklistsAddChecklistToCardBody;
  signal?: AbortSignal;
}

export type CardChecklistsRemoveChecklistFromCardResponse = {
  id: number;
};

export interface CardChecklistsRemoveChecklistFromCardParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardChecklistsRetrieveCardChecklistResponse = {
  created: string;
  updated: string;
  id: number;
  uid: string;
  fts_version: string;
  name: string;
  policy_id: number | null;
  items: string | number;
};

export interface CardChecklistsRetrieveCardChecklistParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardChecklistsUpdateChecklistBody = (unknown) | (unknown) | (unknown);

export type CardChecklistsUpdateChecklistResponse = {
  created: string;
  updated: string;
  id: number;
  name: string;
  policy_id: number | null;
};

export interface CardChecklistsUpdateChecklistParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardChecklistsUpdateChecklistBody;
  signal?: AbortSignal;
}

export type CardChildrenAddChildrenBody = {
  card_id: number;
};

export type CardChildrenAddChildrenResponse = {
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
  parents_ids: Array<(number)>;
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
};

export interface CardChildrenAddChildrenParams extends OperationOptions {
  card_id: number;
  body: CardChildrenAddChildrenBody;
  signal?: AbortSignal;
}

export type CardChildrenRemoveChildrenResponse = {
  id: number;
};

export interface CardChildrenRemoveChildrenParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardChildrenRetrieveCardChildrenListResponse = Array<({
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
  parents_ids: Array<(number)>;
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
})>;

export interface CardChildrenRetrieveCardChildrenListParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardCommentsAddCommentBody = {
  text: string;
};

export type CardCommentsAddCommentResponse = {
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
};

export interface CardCommentsAddCommentParams extends OperationOptions {
  card_id: number;
  body: CardCommentsAddCommentBody | FormData;
  signal?: AbortSignal;
}

export type CardCommentsRemoveCommentResponse = {
  id: number;
};

export interface CardCommentsRemoveCommentParams extends OperationOptions {
  card_id: number;
  comment_id: number;
  signal?: AbortSignal;
}

export type CardCommentsRetrieveCardCommentsResponse = Array<({
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
})>;

export interface CardCommentsRetrieveCardCommentsParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardCommentsUpdateCommentBody = {
  text?: string;
};

export type CardCommentsUpdateCommentResponse = {
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
};

export interface CardCommentsUpdateCommentParams extends OperationOptions {
  card_id: number;
  comment_id: number;
  body: CardCommentsUpdateCommentBody | FormData;
  signal?: AbortSignal;
}

export type CardExternalLinksAddExternalLinkBody = {
  url: string;
  description?: (string) | (null);
};

export type CardExternalLinksAddExternalLinkResponse = {
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string;
};

export interface CardExternalLinksAddExternalLinkParams extends OperationOptions {
  card_id: number;
  body: CardExternalLinksAddExternalLinkBody;
  signal?: AbortSignal;
}

export type CardExternalLinksRemoveExternalLinkResponse = {
  id: number;
};

export interface CardExternalLinksRemoveExternalLinkParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardExternalLinksRetrieveCardExternalLinksResponse = Array<({
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string;
  card_id: number;
  external_link_id: number;
})>;

export interface CardExternalLinksRetrieveCardExternalLinksParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardExternalLinksUpdateExternalLinkBody = (unknown) | (unknown);

export type CardExternalLinksUpdateExternalLinkResponse = {
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string;
};

export interface CardExternalLinksUpdateExternalLinkParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardExternalLinksUpdateExternalLinkBody;
  signal?: AbortSignal;
}

export type CardFilesAttachFileToCardResponse = {
  author_id: number;
  card_cover: boolean;
  card_id: number;
  comment_id: number | null;
  created: string;
  deleted: boolean;
  external: boolean;
  id: number;
  mh_markup_id: null;
  mh_secret: null;
  name: string;
  size: number | null;
  sort_order: number;
  type: number;
  updated: string;
  url: string;
};

export interface CardFilesAttachFileToCardParams extends OperationOptions {
  card_id: number;
  file: Blob;
  filename?: string;
  signal?: AbortSignal;
}

export type CardFilesDetachFileFromCardResponse = {
  id: number;
};

export interface CardFilesDetachFileFromCardParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardFilesUpdateFileBody = {
  card_cover?: boolean;
};

export type CardFilesUpdateFileResponse = Record<string, unknown>;

export interface CardFilesUpdateFileParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardFilesUpdateFileBody;
  signal?: AbortSignal;
}

export type CardMembersAddMemberToCardBody = {
  user_id: number;
};

export type CardMembersAddMemberToCardResponse = {
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
};

export interface CardMembersAddMemberToCardParams extends OperationOptions {
  card_id: number;
  body: CardMembersAddMemberToCardBody;
  signal?: AbortSignal;
}

export type CardMembersRemoveMemberFromCardResponse = {
  id: number;
};

export interface CardMembersRemoveMemberFromCardParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardMembersRetrieveListOfCardMembersResponse = Array<({
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
})>;

export interface CardMembersRetrieveListOfCardMembersParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardMembersUpdateMemberRoleBody = {
  type: number;
};

export type CardMembersUpdateMemberRoleResponse = {
  created: string;
  updated: string;
  card_id: number;
  user_id: number;
  type: number;
};

export interface CardMembersUpdateMemberRoleParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardMembersUpdateMemberRoleBody;
  signal?: AbortSignal;
}

export type CardServiceDeskExternalRecipientsAddNewRecipientBody = {
  email: string;
};

export type CardServiceDeskExternalRecipientsAddNewRecipientResponse = {
  created: string;
  updated: string;
  card_id: number;
  user_id: number | null;
  email: string;
  unsubscribed: boolean;
  updater_id: number;
};

export interface CardServiceDeskExternalRecipientsAddNewRecipientParams extends OperationOptions {
  card_id: number;
  body: CardServiceDeskExternalRecipientsAddNewRecipientBody;
  signal?: AbortSignal;
}

export type CardServiceDeskExternalRecipientsRemoveRecipientResponse = {
  created: string;
  updated: string;
  card_id: number;
  user_id: number | null;
  email: string;
  unsubscribed: boolean;
  updater_id: number;
  company_id: number;
};

export interface CardServiceDeskExternalRecipientsRemoveRecipientParams extends OperationOptions {
  card_id: number;
  email: string;
  signal?: AbortSignal;
}

export type CardSlaRetrieveCardSlaMeasurementsResponse = {
  calendars: Array<({
  id: string;
  timezone: string;
  work_days: Array<({
  created: string;
  updated: string;
  id: string;
  calendar_id: string;
  day: number;
  date: null;
  full_day: null;
  period_start: number;
  period_finish: number;
}) | ({
  created: string;
  updated: string;
  id: string;
  calendar_id: string;
  day: null;
  date: string;
  full_day: boolean;
  period_start: number;
  period_finish: number;
})>;
  holidays: Array<({
  created: string;
  updated: string;
  id: string;
  calendar_id: string;
  day: number;
  month: number;
  year: number;
  description: string;
})>;
})>;
  rulesTimeData: Array<({
  rule_id: string;
  card_id: number;
  actual_time: number;
  started: boolean;
  completed: boolean;
  last_calculated_at: string;
  is_last_calculated_at_work_time: boolean;
})>;
};

export interface CardSlaRetrieveCardSlaMeasurementsParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardTagsAddTagBody = {
  name: string;
};

export type CardTagsAddTagResponse = {
  created: string;
  updated: string;
  archived: boolean;
  id: number;
  name: string;
  company_id: number;
  color: number;
};

export interface CardTagsAddTagParams extends OperationOptions {
  card_id: number;
  body: CardTagsAddTagBody;
  signal?: AbortSignal;
}

export type CardTagsRemoveTagFromCardResponse = {
  id: number;
};

export interface CardTagsRemoveTagFromCardParams extends OperationOptions {
  card_id: number;
  tag_id: number;
  signal?: AbortSignal;
}

export type CardTagsRertrieveListOfTagsResponse = Array<({
  id: number;
  name: string;
  color: number;
  card_id: number;
  tag_id: number;
})>;

export interface CardTagsRertrieveListOfTagsParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardTimeLogsAddTimeLogBody = {
  role_id: number;
  time_spent: number;
  for_date: string;
  comment?: string;
};

export type CardTimeLogsAddTimeLogResponse = {
  created: string;
  updated: string;
  id: number;
  card_id: number;
  user_id: number;
  role_id: number;
  author_id: number;
  updater_id: number;
  time_spent: number;
  for_date: string;
  comment: string | null;
};

export interface CardTimeLogsAddTimeLogParams extends OperationOptions {
  card_id: number;
  body: CardTimeLogsAddTimeLogBody;
  signal?: AbortSignal;
}

export type CardTimeLogsGetTimeLogsQuery = {
  for_date?: string;
  personal?: boolean;
};

export type CardTimeLogsGetTimeLogsResponse = Array<({
  created: string;
  updated: string;
  id: number;
  card_id: number;
  user_id: number;
  role_id: number;
  author_id: number;
  updater_id: number;
  time_spent: number;
  for_date: string;
  comment: string | null;
  role: string | number;
  user: string | number;
  author: string | number;
})>;

export interface CardTimeLogsGetTimeLogsParams extends OperationOptions {
  card_id: number;
  query?: CardTimeLogsGetTimeLogsQuery;
  signal?: AbortSignal;
}

export type CardTimeLogsRemoveTimeLogResponse = {
  id: number;
};

export interface CardTimeLogsRemoveTimeLogParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardTimeLogsUpdateLogRecordBody = (unknown) | (unknown) | (unknown) | (unknown);

export type CardTimeLogsUpdateLogRecordResponse = {
  created: string;
  updated: string;
  id: number;
  card_id: number;
  user_id: number;
  role_id: number;
  author_id: number;
  updater_id: number;
  time_spent: number;
  for_date: string;
  comment: string | null;
};

export interface CardTimeLogsUpdateLogRecordParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardTimeLogsUpdateLogRecordBody;
  signal?: AbortSignal;
}

export type CardTypeTreeEntitiesAddTreeEntityToCardTypeBody = {
  tree_entity_uid: string;
};

export type CardTypeTreeEntitiesAddTreeEntityToCardTypeResponse = {
  id: number;
};

export interface CardTypeTreeEntitiesAddTreeEntityToCardTypeParams extends OperationOptions {
  type_id: number;
  body: CardTypeTreeEntitiesAddTreeEntityToCardTypeBody;
  signal?: AbortSignal;
}

export type CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeResponse = void;

export interface CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeParams extends OperationOptions {
  type_id: number;
  uid: string;
  signal?: AbortSignal;
}

export type CardTypeTreeEntitiesGetListOfTypeTreeEntitiesResponse = Array<({
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
}) | ({
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
}) | ({
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
})>;

export interface CardTypeTreeEntitiesGetListOfTypeTreeEntitiesParams extends OperationOptions {
  type_id: number;
  signal?: AbortSignal;
}

export type CardTypesCreateNewCardTypeBody = {
  letter: string;
  name: string;
  color: number;
  properties?: Record<string, unknown>;
  card_properties?: Array<(unknown) | (unknown)>;
  suggest_fields?: boolean;
};

export type CardTypesCreateNewCardTypeResponse = {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: {
  id_1: boolean;
  tags: boolean;
};
  card_properties: string | number;
  suggest_fields: boolean;
};

export interface CardTypesCreateNewCardTypeParams extends OperationOptions {
  body: CardTypesCreateNewCardTypeBody;
  signal?: AbortSignal;
}

export type CardTypesGetCardTypeResponse = {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: {
  id_1: boolean;
  tags: boolean;
};
  card_properties: string | number;
  suggest_fields: boolean;
};

export interface CardTypesGetCardTypeParams extends OperationOptions {
  id: number;
  signal?: AbortSignal;
}

export type CardTypesGetListOfCardTypesQuery = {
  limit?: number;
  offset?: number;
};

export type CardTypesGetListOfCardTypesResponse = Array<({
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: null;
  archived: boolean;
  properties: null;
  card_properties: string | number;
  suggest_fields: boolean;
})>;

export interface CardTypesGetListOfCardTypesParams extends OperationOptions {
  query?: CardTypesGetListOfCardTypesQuery;
  signal?: AbortSignal;
}

export type CardTypesRemoveCardTypeBody = {
  replace_type_id: number;
};

export type CardTypesRemoveCardTypeResponse = {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: {
  id_1: boolean;
  tags: boolean;
};
  card_properties: string | number;
  suggest_fields: boolean;
};

export interface CardTypesRemoveCardTypeParams extends OperationOptions {
  id: number;
  body: CardTypesRemoveCardTypeBody;
  signal?: AbortSignal;
}

export type CardTypesUpdateCardTypeBody = (unknown) | (unknown) | (unknown) | (unknown);

export type CardTypesUpdateCardTypeResponse = {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: {
  id_1: boolean;
  tags: boolean;
};
  card_properties: string | number;
  suggest_fields: boolean;
};

export interface CardTypesUpdateCardTypeParams extends OperationOptions {
  id: number;
  body: CardTypesUpdateCardTypeBody;
  signal?: AbortSignal;
}

export type CardsBatchUpdateForCardsBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type CardsBatchUpdateForCardsResponse = {
  id: string;
};

export interface CardsBatchUpdateForCardsParams extends OperationOptions {
  body: CardsBatchUpdateForCardsBody;
  signal?: AbortSignal;
}

export type CardsCreateNewCardBody = {
  title: number | string;
  board_id: number;
  asap?: boolean;
  due_date?: (string) | (null);
  due_date_time_present?: boolean;
  sort_order?: number;
  description?: (number | string) | (null);
  expires_later?: boolean;
  size_text?: (number | string) | (null);
  column_id?: number;
  lane_id?: number;
  owner_id?: number;
  responsible_id?: number;
  owner_email?: string;
  position?: 1 | 2;
  type_id?: number;
  service_id?: (number) | (null);
  external_id?: (number | string) | (null);
  text_format_type_id?: 1 | 2 | 3;
  properties?: Record<string, unknown>;
};

export type CardsCreateNewCardResponse = {
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
};

export interface CardsCreateNewCardParams extends OperationOptions {
  body: CardsCreateNewCardBody;
  signal?: AbortSignal;
}

export type CardsDeleteCardResponse = {
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
};

export interface CardsDeleteCardParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardsRetrieveCardQuery = {
  broken_api?: boolean;
};

export type CardsRetrieveCardResponse = {
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
};

export interface CardsRetrieveCardParams extends OperationOptions {
  card_id: number;
  query?: CardsRetrieveCardQuery;
  signal?: AbortSignal;
}

export type CardsRetrieveCardBaselinesResponse = Array<({
  id: number;
  uid: string;
  baseline_id: string;
  planned_start: string;
  planned_end: string | null;
}) | ({
  id: number;
  project_id: string;
  baseline_id: string;
  planned_start: string;
  planned_end: string | null;
})>;

export interface CardsRetrieveCardBaselinesParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardsRetrieveCardListQuery = {
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
};

export type CardsRetrieveCardListResponse = Array<({
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
  spaces: Array<({
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
})>;
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
})>;

export interface CardsRetrieveCardListParams extends OperationOptions {
  query?: CardsRetrieveCardListQuery;
  signal?: AbortSignal;
}

export type CardsRetrieveCardLocationHistoryResponse = Array<({
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
})>;

export interface CardsRetrieveCardLocationHistoryParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type CardsUpdateCardBody = {
  title?: number | string;
  asap?: boolean;
  due_date?: (string) | (null);
  due_date_time_present?: boolean;
  sort_order?: number;
  description?: (number | string) | (null);
  expires_later?: boolean;
  size_text?: (number | string) | (null);
  board_id?: number;
  column_id?: number;
  lane_id?: number;
  owner_id?: number;
  type_id?: number;
  service_id?: (number) | (null);
  blocked?: boolean;
  condition?: 1 | 2;
  external_id?: (number | string) | (null);
  text_format_type_id?: 1 | 2 | 3;
  sd_new_comment?: boolean;
  owner_email?: string;
  prev_card_id?: number;
  estimate_workload?: number;
  ignore_planned_dates_recalculation?: boolean;
  properties?: Record<string, unknown>;
};

export type CardsUpdateCardResponse = {
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
};

export interface CardsUpdateCardParams extends OperationOptions {
  card_id: number;
  body: CardsUpdateCardBody;
  signal?: AbortSignal;
}

export type ChecklistItemsAddItemToChecklistBody = {
  text: string;
  sort_order?: number;
  checked?: boolean;
  due_date?: (string) | (null);
  responsible_id?: number;
};

export type ChecklistItemsAddItemToChecklistResponse = {
  created: string;
  updated: string;
  id: number;
  text: string;
  sort_order: number;
  checked: boolean;
  checklist_id: number;
  checker_id: number | null;
  user_id: number;
  checked_at: string | null;
  responsible_id: number | null;
  deleted: boolean;
  due_date: string | null;
};

export interface ChecklistItemsAddItemToChecklistParams extends OperationOptions {
  checklist_id: number;
  body: ChecklistItemsAddItemToChecklistBody;
  signal?: AbortSignal;
}

export type ChecklistItemsRemoveChecklistItemResponse = {
  id: number;
};

export interface ChecklistItemsRemoveChecklistItemParams extends OperationOptions {
  checklist_id: number;
  id: number;
  signal?: AbortSignal;
}

export type ChecklistItemsUpdateChecklistItemBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type ChecklistItemsUpdateChecklistItemResponse = {
  created: string;
  updated: string;
  id: number;
  text: string;
  sort_order: number;
  checked: boolean;
  checklist_id: number;
  checker_id: number | null;
  user_id: number;
  checked_at: string | null;
  responsible_id: number | null;
  deleted: boolean;
  due_date: string | null;
};

export interface ChecklistItemsUpdateChecklistItemParams extends OperationOptions {
  checklist_id: number;
  id: number;
  body: ChecklistItemsUpdateChecklistItemBody;
  signal?: AbortSignal;
}

export type ChecklistsRetrieveCardsWithChecklistQuery = {
  only_shared_cards: boolean;
};

export type ChecklistsRetrieveCardsWithChecklistResponse = Array<({
  created: string;
  updated: string;
  archived: boolean;
  id: number;
  title: string;
  asap: boolean;
  due_date: string | null;
  sort_order: number;
  description: string | null;
  state: number;
  expires_later: boolean;
  parents_count: number;
  children_count: number;
  children_done: number;
  goals_total: number;
  goals_done: number;
  parent_checklist_ids: unknown[] | null;
  parent_link_ids: null;
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
  project_id: null;
  milestone_id: null;
  fifo_order: number;
  blocking_card: boolean;
  sprint_id: number;
  condition: number;
  last_moved_at: string | null;
  external_id: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  service_id: number;
  has_blocked_children: boolean;
  comments_total: number;
  comment_last_added_at: string | null;
  children_ids: unknown[] | null;
  parents_ids: unknown[] | null;
  properties: Record<string, unknown> | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  counters_recalculated_at: string;
  sd_new_comment: boolean;
  public: boolean;
  share_id: string | null;
  share_settings: boolean | null;
  sd_external_recipients: null;
  external_user_emails: string | null;
  time_spent_sum: number;
  calculated_planned_start: null;
  calculated_planned_end: null;
  time_blocked_sum: number;
  children_number_properties_sum: Record<string, unknown> | null;
  description_filled: boolean;
  import_id: number | null;
  tag_ids: Array<(number)>;
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
};
  space_id: number;
})>;

export interface ChecklistsRetrieveCardsWithChecklistParams extends OperationOptions {
  id: number;
  query?: ChecklistsRetrieveCardsWithChecklistQuery;
  signal?: AbortSignal;
}

export type ColumnsCreateNewColumnBody = {
  external_id?: (number | string) | (null);
  title: string;
  sort_order?: number;
  type?: 1 | 2 | 3;
  last_moved_warning_after_days?: number;
  last_moved_warning_after_hours?: number;
  last_moved_warning_after_minutes?: number;
  wip_limit?: number;
  wip_limit_type?: 1 | 2;
  col_count?: number;
  archive_after_days?: number;
  months_to_hide_cards?: number | null;
  card_hide_after_days?: number | null;
  rules?: number;
};

export type ColumnsCreateNewColumnResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  col_count: number;
  wip_limit: number | null;
  type: number;
  rules: number;
  board_id: number;
  column_id: number | null;
  archive_after_days: number;
  wip_limit_type: number;
  external_id: string | null;
  default_tags: string | null;
  last_moved_warning_after_minutes: number;
  last_moved_warning_after_days: number;
  last_moved_warning_after_hours: number;
  months_to_hide_cards: number | null;
  card_hide_after_days: number | null;
};

export interface ColumnsCreateNewColumnParams extends OperationOptions {
  board_id: number;
  body: ColumnsCreateNewColumnBody;
  signal?: AbortSignal;
}

export type ColumnsGetListOfColumnsResponse = Array<({
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  col_count: number;
  wip_limit: number | null;
  wip_limit_type: number;
  type: number;
  rules: number;
  board_id: number;
  column_id: number | null;
  archive_after_days: number;
  last_moved_warning_after_minutes: number;
  last_moved_warning_after_days: number;
  last_moved_warning_after_hours: number;
  external_id: string | null;
  default_tags: string | null;
  months_to_hide_cards: number | null;
  card_hide_after_days: number | null;
  pause_sla: boolean;
  subcolumns: string | number;
})>;

export interface ColumnsGetListOfColumnsParams extends OperationOptions {
  board_id: number;
  signal?: AbortSignal;
}

export type ColumnsRemoveColumnBody = {
  force?: boolean;
};

export type ColumnsRemoveColumnResponse = {
  id: number;
};

export interface ColumnsRemoveColumnParams extends OperationOptions {
  board_id: number;
  id: number;
  body?: ColumnsRemoveColumnBody;
  signal?: AbortSignal;
}

export type ColumnsUpdateColumnBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type ColumnsUpdateColumnResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  col_count: number;
  wip_limit: number | null;
  type: number;
  rules: number;
  board_id: number;
  column_id: number | null;
  archive_after_days: number;
  wip_limit_type: number;
  external_id: string | null;
  default_tags: string | null;
  last_moved_warning_after_minutes: number;
  last_moved_warning_after_days: number;
  last_moved_warning_after_hours: number;
  months_to_hide_cards: number | null;
  card_hide_after_days: number | null;
};

export interface ColumnsUpdateColumnParams extends OperationOptions {
  board_id: number;
  id: number;
  body: ColumnsUpdateColumnBody;
  signal?: AbortSignal;
}

export type CompanyUsersGetListOfUsersQuery = {
  invitesOnly?: boolean;
  withTransferAccessStatus?: boolean;
  for_members_section?: boolean;
  owner_only?: boolean;
  only_paid?: boolean;
  only_records_count?: boolean;
  only_virtual?: boolean;
  offset?: number;
  limit?: number;
  query?: string;
  access_type_permissions?: string;
  sd_access_type?: string;
  take_licence?: string;
  temporarily_inactive_status?: string;
  group_ids?: unknown[];
  permissions?: unknown[];
};

export type CompanyUsersGetListOfUsersResponse = Array<({
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
  permissions: number;
  own_permissions: number;
  spaces: string | number;
  groups: Array<({
  created: string;
  updated: string;
  id: number;
  uid: string;
  name: string;
  company_id: number;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  spaces: Array<({
  archived: boolean;
  uid: string;
  access: string;
  for_everyone_access_role_id: string;
  entity_type: string;
  path: string;
  sort_order: number;
  parent_entity_uid: null;
  created: string;
  updated: string;
  company_id: number;
  id: number;
  title: string;
  hidden_card_type_uids: null;
  external_id: null;
  settings: null;
  group_id: number;
  entity_uid: string;
})>;
  user_id: number;
  group_id: number;
})>;
  company_id: number;
  user_id: number;
  default_space_id: number | null;
  role: number;
  email_frequency: number;
  email_settings: boolean | null;
  slack_id: number | null;
  slack_settings: Record<string, unknown> | null;
  notification_settings: {
  card_unblock: Array<(string)>;
  card_block_add: Array<(string)>;
  card_member_add: Array<(string)>;
  due_date_reminder: Array<(string)>;
  card_member_remove: Array<(string)>;
  card_comment_mention: Array<(string)>;
  card_member_become_responsible: Array<(string)>;
};
  notification_enabled_channels: Array<(string)>;
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string | null;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
  work_time_settings: {
  work_days: Array<(number)>;
  hours_count: number;
};
  personal_settings: Record<string, unknown> | null;
  locked: boolean;
  take_licence: boolean;
})>;

export interface CompanyUsersGetListOfUsersParams extends OperationOptions {
  query?: CompanyUsersGetListOfUsersQuery;
  signal?: AbortSignal;
}

export type CompanyUsersRemoveVirtualUserResponse = {
  id: number;
};

export interface CompanyUsersRemoveVirtualUserParams extends OperationOptions {
  id: number;
  signal?: AbortSignal;
}

export type CompanyUsersUpdateUserBody = {
  apps_permissions?: number;
  temporarily_inactive?: boolean;
};

export type CompanyUsersUpdateUserResponse = {
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
  email_blocked: string;
  email_blocked_reason: string;
  delete_requested_at: string;
  user_id: number;
  company_id: number;
  default_space_id: number | null;
  role: number;
  permissions: number;
  apps_permissions: number;
  email_frequency: number;
  email_settings: boolean;
  slack_id: number | null;
  slack_private_channel_id: number | null;
  slack_settings: Record<string, unknown> | null;
  telegram_sd_bot_enabled: boolean;
  external: boolean;
  notification_settings: {
  card_unblock: Array<(string)>;
  card_block_add: Array<(string)>;
  card_member_add: Array<(string)>;
  due_date_reminder: Array<(string)>;
  card_member_remove: Array<(string)>;
  card_comment_mention: Array<(string)>;
  card_member_become_responsible: Array<(string)>;
};
  work_time_settings: {
  work_days: Array<(number)>;
  hours_count: number;
};
  invite_last_sent_at: string;
  last_request_date: string | null;
  last_request_method: string | null;
  notification_enabled_channels: Array<(string)>;
  personal_settings: Record<string, unknown>;
  locked: boolean;
  temporarily_inactive: boolean;
};

export interface CompanyUsersUpdateUserParams extends OperationOptions {
  id: number;
  body: CompanyUsersUpdateUserBody;
  signal?: AbortSignal;
}

export type CustomDirectoriesCreateCustomDirectoryBody = {
  name: string;
  description?: (null) | (string);
  multi_select?: boolean;
  allow_editing?: boolean;
  display_field_index?: number;
  fields?: Array<{
  name: string;
  type: "string" | "number" | "date" | "email" | "url" | "phone" | "checkbox" | "select" | "user" | "catalog" | "directory_link" | "file";
  required?: boolean;
  sort_order?: number;
  custom_property_uid?: (null) | (string);
  linked_directory_id?: (null) | (string);
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
  fields: Array<({
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
})>;
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

export type CustomDirectoriesGetListOfCustomDirectoriesResponse = Array<({
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
})>;

export interface CustomDirectoriesGetListOfCustomDirectoriesParams extends OperationOptions {
  query?: CustomDirectoriesGetListOfCustomDirectoriesQuery;
  signal?: AbortSignal;
}

export type CustomDirectoriesUpdateCustomDirectoryBody = {
  name?: string;
  description?: (null) | (string);
  condition?: "active" | "inactive" | "removed";
  multi_select?: boolean;
  allow_editing?: boolean;
  fields?: Array<{
  id?: string;
  name?: string;
  type?: "string" | "number" | "date" | "email" | "url" | "phone" | "checkbox" | "select" | "user" | "catalog" | "directory_link" | "file";
  required?: boolean;
  is_display?: boolean;
  sort_order?: number;
  custom_property_uid?: (null) | (string);
  linked_directory_id?: (null) | (string);
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
  fields: Array<({
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
})>;
};

export interface CustomDirectoriesUpdateCustomDirectoryParams extends OperationOptions {
  directory_id: string;
  body: CustomDirectoriesUpdateCustomDirectoryBody;
  signal?: AbortSignal;
}

export type CustomDirectoryFieldsCreateFieldBody = {
  name: string;
  type: "string" | "number" | "date" | "email" | "url" | "phone" | "checkbox" | "select" | "user" | "catalog" | "directory_link" | "file";
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

export type CustomDirectoryFieldsGetListOfFieldsResponse = Array<({
  id: string;
  custom_directory_id: string;
  name: string;
  type: string;
  required: boolean;
  is_display: boolean;
  sort_order: number;
  condition: string;
})>;

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

export type CustomDirectoryRecordsGetCardsLinkedToRecordResponse = Array<({
  id: number;
  uid: string;
  title: string;
})>;

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

export type CustomDirectoryRecordsGetListOfRecordsResponse = Array<({
  id: string;
  custom_directory_id: string;
  display_value: string | null;
  condition: string;
  created: string;
  updated: string;
  values: Array<({
  field_id: string;
  value_text: string;
})>;
})>;

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
  values: Array<({
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
})>;
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
  values: Array<({
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
})>;
};

export interface CustomDirectoryRecordsUpdateRecordParams extends OperationOptions {
  directory_id: string;
  record_id: string;
  query?: CustomDirectoryRecordsUpdateRecordQuery;
  body: CustomDirectoryRecordsUpdateRecordBody;
  signal?: AbortSignal;
}

export type CustomPropertiesCreateNewPropertyBody = (unknown) | (unknown);

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

export type CustomPropertiesGetListOfPropertiesResponse = Array<({
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
})>;

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
  colorful?: (boolean) | (null);
  multi_select?: (boolean) | (null);
  values_creatable_by_users?: (boolean) | (null);
  data?: (unknown) | (unknown) | (unknown) | (unknown) | (unknown);
  color?: (number) | (null);
  fields_settings?: (Record<string, unknown>) | (null);
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

export type CustomPropertyCatalogValuesGetListOfCatalogValuesResponse = Array<({
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
})>;

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

export type CustomPropertyCatalogValuesUpdateCatalogValueBody = (unknown) | (unknown);

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

export type CustomPropertyCollectiveScoreValuesGetListOfScoreValuesResponse = Array<({
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
})>;

export interface CustomPropertyCollectiveScoreValuesGetListOfScoreValuesParams extends OperationOptions {
  card_id: number;
  property_id: number;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveScoreValuesUpdateScoreValueBody = (unknown);

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

export type CustomPropertyCollectiveVoteValuesCreateNewVoteValueBody = (unknown) | (unknown);

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

export type CustomPropertyCollectiveVoteValuesGetListOfVoteValuesResponse = Array<({
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
})>;

export interface CustomPropertyCollectiveVoteValuesGetListOfVoteValuesParams extends OperationOptions {
  card_id: number;
  property_id: number;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveVoteValuesRemoveVoteValueBody = (unknown);

export type CustomPropertyCollectiveVoteValuesRemoveVoteValueResponse = {
  id: number;
  custom_property_id: number;
  number_vote: number;
  emoji_vote: string;
  card_id: number;
  author_id: number;
};

export interface CustomPropertyCollectiveVoteValuesRemoveVoteValueParams extends OperationOptions {
  card_id: number;
  property_id: number;
  id: number;
  body?: CustomPropertyCollectiveVoteValuesRemoveVoteValueBody;
  signal?: AbortSignal;
}

export type CustomPropertyCollectiveVoteValuesUpdateVoteValueBody = {
  number_vote?: (number) | (null);
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
  color?: (number) | (null);
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

export type CustomPropertySelectValuesGetListOfSelectValuesResponse = Array<({
  id: number;
  custom_property_id: number;
  value: string;
  color: number;
  sort_order: number;
  external_id: string | null;
  updated: string;
  condition: string;
})>;

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

export type CustomPropertySelectValuesUpdateSelectValueBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

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

export type CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyResponse = void;

export interface CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyParams extends OperationOptions {
  property_id: number;
  uid: string;
  signal?: AbortSignal;
}

export type CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesResponse = Array<({
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
}) | ({
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
}) | ({
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
})>;

export interface CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesParams extends OperationOptions {
  property_id: number;
  signal?: AbortSignal;
}

export type DocumentGroupsCreateNewDocumentGroupBody = {
  title: string;
  parent_entity_uid?: string | null;
  for_everyone_access_role_id?: string | null;
  sort_order?: number;
  key?: string | null;
};

export type DocumentGroupsCreateNewDocumentGroupResponse = {
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
};

export interface DocumentGroupsCreateNewDocumentGroupParams extends OperationOptions {
  body: DocumentGroupsCreateNewDocumentGroupBody;
  signal?: AbortSignal;
}

export type DocumentGroupsRemoveDocumentGroupResponse = {
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
};

export interface DocumentGroupsRemoveDocumentGroupParams extends OperationOptions {
  document_group_uid: string;
  signal?: AbortSignal;
}

export type DocumentGroupsRetrieveDocumentGroupResponse = {
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
};

export interface DocumentGroupsRetrieveDocumentGroupParams extends OperationOptions {
  document_group_uid: string;
  signal?: AbortSignal;
}

export type DocumentGroupsRetrieveListOfDocumentGroupsQuery = {
  query?: string;
  offset?: number;
  limit?: number;
  version?: 1 | 2;
  condition?: number;
  start_position?: string;
  role?: number;
};

export type DocumentGroupsRetrieveListOfDocumentGroupsResponse = Array<({
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
}) | ({
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
})>;

export interface DocumentGroupsRetrieveListOfDocumentGroupsParams extends OperationOptions {
  query?: DocumentGroupsRetrieveListOfDocumentGroupsQuery;
  signal?: AbortSignal;
}

export type DocumentGroupsUpdateDocumentGroupBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type DocumentGroupsUpdateDocumentGroupResponse = {
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
};

export interface DocumentGroupsUpdateDocumentGroupParams extends OperationOptions {
  document_group_uid: string;
  body: DocumentGroupsUpdateDocumentGroupBody;
  signal?: AbortSignal;
}

export type DocumentSchemasGetDocumentDataSchemaQuery = {
  format?: string;
};

export type DocumentSchemasGetDocumentDataSchemaBody = (unknown);

export type DocumentSchemasGetDocumentDataSchemaResponse = {
  $schema: string;
  $id: string;
  title: string;
  description: string;
  allOf: Array<({
  $ref: string;
})>;
  version: string;
  definitions: {
  nodes: {
  doc: {
  type: string;
  additionalProperties: boolean;
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  required: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  id: {
  type: Array<(string)>;
};
  textAlign: {
  type: string;
  default: string;
};
  "data-block-id": {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  "data-block-id": {
  type: Array<(string)>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  id: {
  type: Array<(string)>;
};
  textAlign: {
  type: string;
  default: string;
};
  "data-block-id": {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  id: {
  type: Array<(string)>;
};
  textAlign: {
  type: string;
  default: string;
};
  "data-block-id": {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  id: {
  type: Array<(string)>;
};
  textAlign: {
  type: string;
  default: string;
};
  "data-block-id": {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  "data-block-id": {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  id: {
  type: Array<(string)>;
};
  src: {
  type: string;
  default: string;
};
  alt: {
  type: Array<(string)>;
  default: null;
};
  title: {
  type: Array<(string)>;
  default: null;
};
  size: {
  type: string;
  default: string;
};
  loading: {
  type: Array<(string)>;
};
  width: {
  type: Array<(string)>;
  default: null;
};
  height: {
  type: Array<(string)>;
  default: null;
};
  plantuml: {
  type: Array<(string)>;
};
  plantumlEncodedMD: {
  type: Array<(string)>;
};
  fileId: {
  type: Array<(string)>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  "data-block-id": {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
  background: {
  type: Array<(string)>;
  default: null;
};
  color: {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
  background: {
  type: Array<(string)>;
  default: null;
};
  color: {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  id: {
  type: Array<(string)>;
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
  type: Array<(string)>;
};
  type: {
  type: Array<(string)>;
};
  fileId: {
  type: Array<(string)>;
};
  loadingByClientID: {
  type: Array<(string)>;
};
  "data-block-id": {
  type: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  type: {
  type: Array<(string)>;
  default: null;
};
  resourceId: {
  type: Array<(string)>;
  default: null;
};
  url: {
  type: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  type: {
  type: Array<(string)>;
  default: null;
};
  resourceId: {
  type: Array<(string)>;
  default: null;
};
  url: {
  type: Array<(string)>;
  default: null;
};
  linkId: {
  type: string;
  default: string;
};
  "data-block-id": {
  type: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  filter: {
  type: Array<(string)>;
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
  type: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  diagramId: {
  type: Array<(string)>;
  default: null;
};
  src: {
  type: Array<(string)>;
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
  type: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  "data-block-id": {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
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
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  "data-block-id": {
  type: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  "data-block-id": {
  type: Array<(string)>;
  default: null;
};
};
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  content: {
  type: string;
  items: {
  anyOf: Array<({
  $ref: string;
})>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  id: {
  type: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  color: {
  type: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  color: {
  type: Array<(string)>;
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
  required: Array<(string)>;
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
  required: Array<(string)>;
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
  required: Array<(string)>;
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
  required: Array<(string)>;
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
  required: Array<(string)>;
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
  required: Array<(string)>;
  properties: {
  type: {
  const: string;
};
  attrs: {
  type: string;
  additionalProperties: boolean;
  properties: {
  href: {
  type: Array<(string)>;
};
  title: {
  type: Array<(string)>;
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
};

export interface DocumentSchemasGetDocumentDataSchemaParams extends OperationOptions {
  id: string;
  query?: DocumentSchemasGetDocumentDataSchemaQuery;
  body?: DocumentSchemasGetDocumentDataSchemaBody;
  signal?: AbortSignal;
}

export type DocumentsCreateNewDocumentBody = {
  title?: string;
  sort_order: number;
  parent_entity_uid?: (string) | (null);
  for_everyone_access_role_id?: string;
  clone_uid?: string;
  clone_version?: number;
  key?: (string) | (null);
};

export type DocumentsCreateNewDocumentResponse = {
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
  content: Array<({
  type: string;
})>;
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
};

export interface DocumentsCreateNewDocumentParams extends OperationOptions {
  body: DocumentsCreateNewDocumentBody;
  signal?: AbortSignal;
}

export type DocumentsRemoveDocumentResponse = {
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
};

export interface DocumentsRemoveDocumentParams extends OperationOptions {
  document_uid: string;
  signal?: AbortSignal;
}

export type DocumentsRetrieveDocumentResponse = {
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
  content: Array<({
  type: string;
  content: Array<({
  type: string;
  text: string;
})>;
})>;
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
};

export interface DocumentsRetrieveDocumentParams extends OperationOptions {
  document_uid: string;
  signal?: AbortSignal;
}

export type DocumentsRetrieveListOfDocumentsQuery = {
  query?: string;
  offset?: number;
  limit?: number;
  version?: 1 | 2;
  condition?: number;
  fields?: string;
  start_position?: string;
  include_search_preview?: boolean;
};

export type DocumentsRetrieveListOfDocumentsResponse = Array<({
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
}) | ({
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
})>;

export interface DocumentsRetrieveListOfDocumentsParams extends OperationOptions {
  query?: DocumentsRetrieveListOfDocumentsQuery;
  signal?: AbortSignal;
}

export type DocumentsUpdateDocumentBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type DocumentsUpdateDocumentResponse = {
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
  content: Array<({
  type: string;
  content: Array<({
  type: string;
  text: string;
})>;
})>;
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
};

export interface DocumentsUpdateDocumentParams extends OperationOptions {
  document_uid: string;
  body: DocumentsUpdateDocumentBody;
  signal?: AbortSignal;
}

export type GroupAdminsAddAdminToGroupBody = {
  user_id: number;
};

export type GroupAdminsAddAdminToGroupResponse = {
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
};

export interface GroupAdminsAddAdminToGroupParams extends OperationOptions {
  group_uid: string;
  body: GroupAdminsAddAdminToGroupBody;
  signal?: AbortSignal;
}

export type GroupAdminsGetListOfGroupAdminsResponse = Array<({
  created: string;
  updated: string;
  id: number;
  uid: string;
  full_name: string;
  username: string;
  email: string;
  activated: boolean;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  sd_telegram_id: number;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  delete_confirmation_sent_at: string | null;
})>;

export interface GroupAdminsGetListOfGroupAdminsParams extends OperationOptions {
  group_uid: string;
  signal?: AbortSignal;
}

export type GroupAdminsRemoveAdminFromGroupResponse = {
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
};

export interface GroupAdminsRemoveAdminFromGroupParams extends OperationOptions {
  group_uid: string;
  user_id: number;
  signal?: AbortSignal;
}

export type GroupEntitiesAddEntityBody = {
  entity_uid: string;
  role_ids: Array<string>;
};

export type GroupEntitiesAddEntityResponse = {
  group_id: number;
  entity_uid: string;
  role_permissions: {
  root: {
  move: boolean;
  create: boolean;
};
  space: {
  card: {
  move: boolean;
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  comment: boolean;
  read_own: boolean;
  properties: boolean;
};
  read: boolean;
  board: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
};
  addons: {
  read: boolean;
  update: boolean;
};
  create: boolean;
  delete: boolean;
  update: boolean;
  webhook: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  automation: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  i_calendar: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  move_within: boolean;
  restriction: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  move_outside: boolean;
  access_control: boolean;
  external_webhook: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
};
  document: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
  story_map: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
  document_group: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
};
  access_mod: string | null;
  own_role_ids: Array<(string)>;
  own_access_mod: string | null;
  role_ids: Array<(string)>;
};

export interface GroupEntitiesAddEntityParams extends OperationOptions {
  group_uid: string;
  body: GroupEntitiesAddEntityBody;
  signal?: AbortSignal;
}

export type GroupEntitiesGetListOfGroupEntitiesResponse = Array<({
  uid: string;
  path: string;
  title: string;
  entity_type: string;
  own_role_ids: Array<(string)>;
})>;

export interface GroupEntitiesGetListOfGroupEntitiesParams extends OperationOptions {
  group_uid: string;
  signal?: AbortSignal;
}

export type GroupEntitiesRemoveEntityResponse = {
  group_id: number;
  entity_uid: string;
  role_permissions: unknown | null;
  access_mod: string | null;
  role: null;
  own_role_ids: unknown[] | null;
  own_access_mod: string | null;
  role_ids: unknown[];
  own_role: null;
};

export interface GroupEntitiesRemoveEntityParams extends OperationOptions {
  group_uid: string;
  uid: string;
  signal?: AbortSignal;
}

export type GroupEntitiesUpdateGroupEntityBody = (unknown);

export type GroupEntitiesUpdateGroupEntityResponse = {
  group_id: number;
  entity_uid: string;
  role_permissions: {
  root: {
  move: boolean;
  create: boolean;
};
  space: {
  card: {
  move: boolean;
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  comment: boolean;
  read_own: boolean;
  properties: boolean;
};
  read: boolean;
  board: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
};
  addons: {
  read: boolean;
  update: boolean;
};
  create: boolean;
  delete: boolean;
  update: boolean;
  webhook: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  automation: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  i_calendar: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  move_within: boolean;
  restriction: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  move_outside: boolean;
  access_control: boolean;
  external_webhook: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
};
  document: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
  story_map: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
  document_group: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
};
  access_mod: string | null;
  own_role_ids: Array<(string)>;
  own_access_mod: string | null;
  role_ids: Array<(string)>;
};

export interface GroupEntitiesUpdateGroupEntityParams extends OperationOptions {
  group_uid: string;
  uid: string;
  body: GroupEntitiesUpdateGroupEntityBody;
  signal?: AbortSignal;
}

export type GroupUsersAddUserToGroupBody = {
  user_id: number;
  request_id?: string;
  operator_comment?: (string) | (null);
};

export type GroupUsersAddUserToGroupResponse = {
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
};

export interface GroupUsersAddUserToGroupParams extends OperationOptions {
  group_uid: string;
  body: GroupUsersAddUserToGroupBody;
  signal?: AbortSignal;
}

export type GroupUsersGetListOfGroupUsersResponse = Array<({
  created: string;
  updated: string;
  id: number;
  uid: string;
  full_name: string;
  username: string;
  email: string;
  activated: boolean;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  sd_telegram_id: number;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  delete_confirmation_sent_at: string | null;
})>;

export interface GroupUsersGetListOfGroupUsersParams extends OperationOptions {
  group_uid: string;
  signal?: AbortSignal;
}

export type GroupUsersRemoveUserFromGroupResponse = {
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
};

export interface GroupUsersRemoveUserFromGroupParams extends OperationOptions {
  group_uid: string;
  user_id: number;
  signal?: AbortSignal;
}

export type GroupsCreateGroupBody = {
  name: string;
  permissions?: number;
  add_to_cards_and_spaces_enabled?: boolean;
};

export type GroupsCreateGroupResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface GroupsCreateGroupParams extends OperationOptions {
  body: GroupsCreateGroupBody;
  signal?: AbortSignal;
}

export type GroupsGetGroupResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface GroupsGetGroupParams extends OperationOptions {
  uid: string;
  signal?: AbortSignal;
}

export type GroupsGetListOfGroupsQuery = {
  with_tree_entities?: boolean;
  with_users_count?: boolean;
  with_sync_group_attribute?: boolean;
  condition?: string;
  query?: string;
  limit?: number;
  offset?: number;
};

export type GroupsGetListOfGroupsResponse = Array<({
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
})>;

export interface GroupsGetListOfGroupsParams extends OperationOptions {
  query?: GroupsGetListOfGroupsQuery;
  signal?: AbortSignal;
}

export type GroupsRemoveGroupResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface GroupsRemoveGroupParams extends OperationOptions {
  uid: string;
  signal?: AbortSignal;
}

export type GroupsUpdateGroupBody = {
  name?: string;
  permissions?: number;
  add_to_cards_and_spaces_enabled?: boolean;
};

export type GroupsUpdateGroupResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface GroupsUpdateGroupParams extends OperationOptions {
  uid: string;
  body: GroupsUpdateGroupBody;
  signal?: AbortSignal;
}

export type IterationsAddCardToIterationBody = {
  card_uid: string;
};

export type IterationsAddCardToIterationResponse = {
  iteration_id: string;
  card_uid: string;
  added_by_uid: string;
  removed_at: string | null;
  removed_by_uid: string | null;
  sort_order: number;
  created: string;
  updated: string;
};

export interface IterationsAddCardToIterationParams extends OperationOptions {
  space_uid: string;
  iteration_id: string;
  body: IterationsAddCardToIterationBody;
  signal?: AbortSignal;
}

export type IterationsCreateIterationBody = {
  title: string;
  goal?: string | null;
  start_date?: string | null;
  finish_date?: string | null;
};

export type IterationsCreateIterationResponse = {
  id: string;
  space_uid: string;
  title: string;
  goal: string | null;
  status: string;
  creator_uid: string;
  updater_uid: string;
  start_date: string | null;
  finish_date: string | null;
  actual_finish_date: string | null;
  sort_order: number;
  data: Record<string, unknown> | null;
  created: string;
  updated: string;
};

export interface IterationsCreateIterationParams extends OperationOptions {
  space_uid: string;
  body: IterationsCreateIterationBody;
  signal?: AbortSignal;
}

export type IterationsDeleteIterationBody = {
  new_iteration_id?: string | null;
};

export type IterationsDeleteIterationResponse = {
  id: string;
  space_uid: string;
  title: string;
  goal: string | null;
  status: string;
  creator_uid: string;
  updater_uid: string;
  start_date: string | null;
  finish_date: string | null;
  actual_finish_date: string | null;
  sort_order: number;
  data: Record<string, unknown> | null;
  moved_cards: string | number;
  created: string;
  updated: string;
};

export interface IterationsDeleteIterationParams extends OperationOptions {
  space_uid: string;
  id: string;
  body?: IterationsDeleteIterationBody;
  signal?: AbortSignal;
}

export type IterationsGetCardIterationsHistoryQuery = {
  with_details?: boolean;
};

export type IterationsGetCardIterationsHistoryResponse = Array<({
  iteration_id: string;
  card_uid: string;
  added_by_uid: string;
  removed_at: string | null;
  removed_by_uid: string | null;
  sort_order: number;
  created: string;
  updated: string;
})>;

export interface IterationsGetCardIterationsHistoryParams extends OperationOptions {
  card_uid: string;
  query?: IterationsGetCardIterationsHistoryQuery;
  signal?: AbortSignal;
}

export type IterationsGetIterationResponse = {
  id: string;
  space_uid: string;
  title: string;
  goal: string | null;
  status: string;
  creator_uid: string;
  updater_uid: string;
  start_date: string | null;
  finish_date: string | null;
  actual_finish_date: string | null;
  sort_order: number;
  data: number;
  created: string;
  updated: string;
};

export interface IterationsGetIterationParams extends OperationOptions {
  space_uid: string;
  id: string;
  signal?: AbortSignal;
}

export type IterationsRemoveCardFromIterationResponse = {
  iteration_id: string;
  card_uid: string;
  added_by_uid: string;
  removed_at: string;
  removed_by_uid: string;
  sort_order: number;
  created: string;
  updated: string;
};

export interface IterationsRemoveCardFromIterationParams extends OperationOptions {
  space_uid: string;
  iteration_id: string;
  uid: string;
  signal?: AbortSignal;
}

export type IterationsRetrieveCardsInIterationQuery = {
  status?: string;
};

export type IterationsRetrieveCardsInIterationResponse = Array<({
  iteration_id: string;
  card_uid: string;
  card_id: number;
  added_by_uid: string;
  removed_at: string | null;
  removed_by_uid: string | null;
  sort_order: number;
  created: string;
  updated: string;
})>;

export interface IterationsRetrieveCardsInIterationParams extends OperationOptions {
  space_uid: string;
  iteration_id: string;
  query?: IterationsRetrieveCardsInIterationQuery;
  signal?: AbortSignal;
}

export type IterationsRetrieveListOfIterationsQuery = {
  status?: string;
  with_data?: string;
  limit?: number;
  offset?: number;
  order?: string;
};

export type IterationsRetrieveListOfIterationsResponse = Array<({
  id: string;
  space_uid: string;
  title: string;
  goal: string | null;
  status: string;
  creator_uid: string;
  updater_uid: string;
  start_date: string | null;
  finish_date: string | null;
  actual_finish_date: string | null;
  sort_order: number;
  data: number;
  created: string;
  updated: string;
})>;

export interface IterationsRetrieveListOfIterationsParams extends OperationOptions {
  space_uid: string;
  query?: IterationsRetrieveListOfIterationsQuery;
  signal?: AbortSignal;
}

export type IterationsUpdateIterationBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type IterationsUpdateIterationResponse = {
  id: string;
  space_uid: string;
  title: string;
  goal: string | null;
  status: string;
  creator_uid: string;
  updater_uid: string;
  start_date: string | null;
  finish_date: string | null;
  actual_finish_date: string | null;
  sort_order: number;
  data: number;
  created: string;
  updated: string;
};

export interface IterationsUpdateIterationParams extends OperationOptions {
  space_uid: string;
  id: string;
  body: IterationsUpdateIterationBody;
  signal?: AbortSignal;
}

export type LanesCreateNewLaneBody = {
  title: string;
  sort_order?: number;
  wip_limit?: number;
  wip_limit_type?: 1 | 2;
  last_moved_warning_after_days?: number;
  last_moved_warning_after_hours?: number;
  last_moved_warning_after_minutes?: number;
  row_count?: number;
};

export type LanesCreateNewLaneResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  row_count: number;
  wip_limit: number | null;
  wip_limit_type: number;
  last_moved_warning_after_minutes: number;
  last_moved_warning_after_days: number;
  last_moved_warning_after_hours: number;
  board_id: number;
  default_card_type_id: number | null;
  default_tags: string | null;
  external_id: string | null;
  condition: number;
};

export interface LanesCreateNewLaneParams extends OperationOptions {
  board_id: number;
  body: LanesCreateNewLaneBody;
  signal?: AbortSignal;
}

export type LanesGetListOfLanesQuery = {
  condition?: string;
};

export type LanesGetListOfLanesResponse = Array<({
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  row_count: number;
  board_id: number;
  wip_limit: number | null;
  wip_limit_type: number;
  default_tags: string | null;
  last_moved_warning_after_days: number;
  external_id: string | null;
  default_card_type_id: number | null;
  last_moved_warning_after_hours: number;
  condition: number;
  last_moved_warning_after_minutes: number;
})>;

export interface LanesGetListOfLanesParams extends OperationOptions {
  board_id: number;
  query?: LanesGetListOfLanesQuery;
  signal?: AbortSignal;
}

export type LanesRemoveLaneBody = {
  force?: boolean;
};

export type LanesRemoveLaneResponse = {
  id: number;
};

export interface LanesRemoveLaneParams extends OperationOptions {
  board_id: number;
  id: number;
  body?: LanesRemoveLaneBody;
  signal?: AbortSignal;
}

export type LanesUpdateLaneBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type LanesUpdateLaneResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  row_count: number;
  wip_limit: number | null;
  wip_limit_type: number;
  last_moved_warning_after_minutes: number;
  last_moved_warning_after_days: number;
  last_moved_warning_after_hours: number;
  board_id: number;
  default_card_type_id: number | null;
  default_tags: string | null;
  external_id: string | null;
  condition: number;
};

export interface LanesUpdateLaneParams extends OperationOptions {
  board_id: number;
  id: number;
  body: LanesUpdateLaneBody;
  signal?: AbortSignal;
}

export type RestrictedAccessCardFilesAttachFileToCardResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
};

export interface RestrictedAccessCardFilesAttachFileToCardParams extends OperationOptions {
  card_uid: string;
  file: Blob;
  filename?: string;
  signal?: AbortSignal;
}

export type RestrictedAccessCardFilesDeleteCardFileResponse = {
  id: string;
};

export interface RestrictedAccessCardFilesDeleteCardFileParams extends OperationOptions {
  card_uid: string;
  id: string;
  signal?: AbortSignal;
}

export type RestrictedAccessCardFilesGetCardFileQuery = {
  redirect?: boolean;
  download?: boolean;
};

export type RestrictedAccessCardFilesGetCardFileResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  entity_type: string;
  created: string;
  updated: string;
  card_uid: string;
  author_uid: string;
  card_cover: boolean;
  url: string;
};

export interface RestrictedAccessCardFilesGetCardFileParams extends OperationOptions {
  card_uid: string;
  id: string;
  query?: RestrictedAccessCardFilesGetCardFileQuery;
  signal?: AbortSignal;
}

export type RestrictedAccessCardFilesUpdateCardFileBody = {
  name?: string;
  card_cover?: boolean;
};

export type RestrictedAccessCardFilesUpdateCardFileResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
};

export interface RestrictedAccessCardFilesUpdateCardFileParams extends OperationOptions {
  card_uid: string;
  id: string;
  body: RestrictedAccessCardFilesUpdateCardFileBody;
  signal?: AbortSignal;
}

export type RestrictedAccessCommentFilesAttachFileToCommentResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  comment_uid: string | null;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
};

export interface RestrictedAccessCommentFilesAttachFileToCommentParams extends OperationOptions {
  card_uid: string;
  comment_uid: string;
  file: Blob;
  filename?: string;
  signal?: AbortSignal;
}

export type RestrictedAccessCommentFilesDeleteCommentFileResponse = {
  id: string;
};

export interface RestrictedAccessCommentFilesDeleteCommentFileParams extends OperationOptions {
  card_uid: string;
  comment_uid: string;
  id: string;
  signal?: AbortSignal;
}

export type RestrictedAccessCommentFilesGetCommentFileQuery = {
  redirect?: boolean;
  download?: boolean;
};

export type RestrictedAccessCommentFilesGetCommentFileResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  entity_type: string;
  created: string;
  updated: string;
  card_uid: string;
  comment_uid: string | null;
  author_uid: string;
  card_cover: boolean;
  url: string;
};

export interface RestrictedAccessCommentFilesGetCommentFileParams extends OperationOptions {
  card_uid: string;
  comment_uid: string;
  id: string;
  query?: RestrictedAccessCommentFilesGetCommentFileQuery;
  signal?: AbortSignal;
}

export type RestrictedAccessCommentFilesUpdateCommentFileBody = {
  name?: string;
  card_cover?: boolean;
};

export type RestrictedAccessCommentFilesUpdateCommentFileResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  comment_uid: string | null;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
};

export interface RestrictedAccessCommentFilesUpdateCommentFileParams extends OperationOptions {
  card_uid: string;
  comment_uid: string;
  id: string;
  body: RestrictedAccessCommentFilesUpdateCommentFileBody;
  signal?: AbortSignal;
}

export type RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  custom_property_uid: string;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
};

export interface RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyParams extends OperationOptions {
  card_uid: string;
  property_uid: string;
  file: Blob;
  filename?: string;
  signal?: AbortSignal;
}

export type RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileResponse = {
  id: string;
};

export interface RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileParams extends OperationOptions {
  card_uid: string;
  property_uid: string;
  id: string;
  signal?: AbortSignal;
}

export type RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery = {
  redirect?: boolean;
  download?: boolean;
};

export type RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  entity_type: string;
  created: string;
  updated: string;
  card_uid: string;
  custom_property_uid: string;
  author_uid: string;
  card_cover: boolean;
  url: string;
};

export interface RestrictedAccessCustomPropertyFilesGetCustomPropertyFileParams extends OperationOptions {
  card_uid: string;
  property_uid: string;
  id: string;
  query?: RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery;
  signal?: AbortSignal;
}

export type RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileBody = {
  name?: string;
  card_cover?: boolean;
};

export type RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileResponse = {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  custom_property_uid: string;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
};

export interface RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileParams extends OperationOptions {
  card_uid: string;
  property_uid: string;
  id: string;
  body: RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileBody;
  signal?: AbortSignal;
}

export type ServiceDeskServicesRetrieveServicesListResponse = Array<({
  id: number;
  name: string;
  fields_settings: Record<string, unknown> | null;
  archived: boolean;
  lng: string;
  email_settings: number;
  type_id: number | null;
  email_key: string;
  board_id: number;
  column_id: number;
  lane_id: number;
  display_status: string;
  template_description: string;
  settings: {
  allowed_email_masks: unknown[];
};
  allow_to_add_external_recipients: boolean;
  column: string | number;
  board: string | number;
  lane: string | number;
  voteCustomProperty: {
  created: string;
  updated: string;
  service_id: number;
  custom_property_id: number;
  author_id: number;
};
})>;

export interface ServiceDeskServicesRetrieveServicesListParams extends OperationOptions {
  signal?: AbortSignal;
}

export type SpaceBoardsCreateNewBoardBody = {
  title: (string) | (number);
  columns?: Array<{
  title: string;
  sort_order?: number;
  type: 1 | 2 | 3;
  wip_limit?: number;
  col_count?: number;
  archive_after_days?: number;
  months_to_hide_cards?: number | null;
  card_hide_after_days?: number | null;
  rules?: number;
  external_id?: (number | string) | (null);
  default_tags?: string | null;
}>;
  lanes?: Array<{
  title: string;
  sort_order?: number;
  wip_limit?: number;
  row_count?: number;
  default_tags?: string | null;
}>;
  description?: (string) | (null);
  top?: number;
  left?: number;
  default_card_type_id?: number;
  first_image_is_cover?: boolean;
  reset_lane_spent_time?: boolean;
  automove_cards?: boolean;
  backward_moves_enabled?: boolean;
  auto_assign_enabled?: boolean;
  sort_order?: number;
  external_id?: (number | string) | (null);
};

export type SpaceBoardsCreateNewBoardResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: unknown[] | null;
  external_id: string | null;
  default_card_type_id: number;
  description: string;
  email_key: string;
  move_parents_to_done: boolean;
  default_tags: string | null;
  first_image_is_cover: boolean;
  reset_lane_spent_time: boolean;
  backward_moves_enabled: boolean;
  hide_done_policies: boolean;
  hide_done_policies_in_done_column: boolean;
  automove_cards: boolean;
  auto_assign_enabled: boolean;
  card_properties: boolean | null;
  columns: string | number;
  lanes: string | number;
  top: number;
  left: number;
  sort_order: number;
};

export interface SpaceBoardsCreateNewBoardParams extends OperationOptions {
  space_id: number;
  body: SpaceBoardsCreateNewBoardBody;
  signal?: AbortSignal;
}

export type SpaceBoardsGetBoardResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: unknown[] | null;
  default_card_type_id: number;
  description: string | null;
  external_id: string | null;
  email_key: string;
  move_parents_to_done: boolean;
  backward_moves_enabled: boolean;
  default_tags: string | null;
  first_image_is_cover: boolean;
  reset_lane_spent_time: boolean;
  automove_cards: boolean;
  hide_done_policies: boolean;
  hide_done_policies_in_done_column: boolean;
  auto_assign_enabled: boolean;
  card_properties: boolean | null;
  columns: string | number;
  lanes: string | number;
  cards: {
  id: number;
  created: string;
  updated: string;
  archived: boolean;
  title: string;
  asap: boolean;
  due_date: null;
  sort_order: number;
  fifo_order: null;
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
  children_number_properties_sum: null;
  calculated_planned_start: null;
  calculated_planned_end: null;
  parent_checklist_ids: null;
  children_ids: null;
  parents_ids: null;
  blocking_card: boolean;
  blocked: boolean;
  size: null;
  size_unit: null;
  size_text: null;
  due_date_time_present: boolean;
  board_id: number;
  column_id: number;
  lane_id: number;
  owner_id: number;
  type_id: number;
  version: number;
  updater_id: number;
  completed_on_time: null;
  completed_at: null;
  last_moved_at: string;
  lane_changed_at: string;
  column_changed_at: string;
  first_moved_to_in_progress_at: null;
  last_moved_to_done_at: null;
  sprint_id: null;
  external_id: null;
  comments_total: number;
  comment_last_added_at: null;
  properties: null;
  planned_start: null;
  planned_end: null;
  ignore_planned_dates_recalculation: boolean;
  service_id: null;
  sd_new_comment: boolean;
  public: boolean;
  share_settings: null;
  share_id: null;
  external_user_emails: null;
  description_filled: boolean;
  estimate_workload: number;
  type: {
  id: number;
  name: string;
  color: number;
  letter: string;
  company_id: number;
  archived: boolean;
  properties: null;
};
  owner: {
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
};
  space_id: number;
  board_id: number;
  top: number;
  left: number;
  sort_order: number;
};

export interface SpaceBoardsGetBoardParams extends OperationOptions {
  space_id: number;
  id: number;
  signal?: AbortSignal;
}

export type SpaceBoardsGetListOfBoardsResponse = Array<({
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: unknown[] | null;
  external_id: string | null;
  default_card_type_id: number;
  description: string | null;
  email_key: string;
  move_parents_to_done: boolean;
  default_tags: string | null;
  first_image_is_cover: boolean;
  reset_lane_spent_time: boolean;
  backward_moves_enabled: boolean;
  hide_done_policies: boolean;
  hide_done_policies_in_done_column: boolean;
  automove_cards: boolean;
  auto_assign_enabled: boolean;
  card_properties: boolean | null;
  columns: string | number;
  lanes: string | number;
  space_id: number;
  board_id: number;
  top: number;
  left: number;
  sort_order: number;
  type: number;
})>;

export interface SpaceBoardsGetListOfBoardsParams extends OperationOptions {
  space_id: number;
  signal?: AbortSignal;
}

export type SpaceBoardsRemoveBoardBody = {
  force?: boolean;
};

export type SpaceBoardsRemoveBoardResponse = {
  id: number;
};

export interface SpaceBoardsRemoveBoardParams extends OperationOptions {
  space_id: number;
  id: number;
  body?: SpaceBoardsRemoveBoardBody;
  signal?: AbortSignal;
}

export type SpaceBoardsUpdateBoardBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type SpaceBoardsUpdateBoardResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: unknown[] | null;
  external_id: string | null;
  default_card_type_id: number;
  description: string;
  email_key: string;
  move_parents_to_done: boolean;
  default_tags: string | null;
  first_image_is_cover: boolean;
  reset_lane_spent_time: boolean;
  backward_moves_enabled: boolean;
  hide_done_policies: boolean;
  hide_done_policies_in_done_column: boolean;
  automove_cards: boolean;
  auto_assign_enabled: boolean;
  card_properties: boolean | null;
  columns: string | number;
  lanes: string | number;
  top: number;
  left: number;
  sort_order: number;
};

export interface SpaceBoardsUpdateBoardParams extends OperationOptions {
  space_id: number;
  id: number;
  body: SpaceBoardsUpdateBoardBody;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemBody = {
  text: string;
  sort_order?: number;
};

export type SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemResponse = {
  uid: string;
  text: string;
  sort_order: number;
  user_id: number;
  created: string;
  updated: string;
};

export interface SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  body: SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemBody;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemResponse = {
  uid: string;
};

export interface SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  item_uid: string;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemBody = (unknown) | (unknown);

export type SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemResponse = {
  uid: string;
  text: string;
  sort_order: number;
  user_id: number;
  created: string;
  updated: string;
};

export interface SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  item_uid: string;
  body: SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemBody;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistCreateNewSpaceTemplateChecklistBody = (unknown);

export type SpaceTemplateChecklistCreateNewSpaceTemplateChecklistResponse = {
  uid: string;
  name: string;
  sort_order: number;
  space_uid: string;
  created: string;
  updated: string;
};

export interface SpaceTemplateChecklistCreateNewSpaceTemplateChecklistParams extends OperationOptions {
  space_uid: string;
  body: SpaceTemplateChecklistCreateNewSpaceTemplateChecklistBody;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsResponse = Array<({
  uid: string;
  name: string;
  sort_order: number;
  space_uid: string;
  created: string;
  updated: string;
  items: Array<({
  uid: string;
  text: string;
  sort_order: number;
  user_id: number;
  created: string;
  updated: string;
})>;
})>;

export interface SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsParams extends OperationOptions {
  space_uid: string;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistRemoveSpaceTemplateChecklistResponse = {
  uid: string;
};

export interface SpaceTemplateChecklistRemoveSpaceTemplateChecklistParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistUpdateSpaceTemplateChecklistBody = (unknown) | (unknown);

export type SpaceTemplateChecklistUpdateSpaceTemplateChecklistResponse = {
  uid: string;
  name: string;
  sort_order: number;
  space_uid: string;
  created: string;
  updated: string;
};

export interface SpaceTemplateChecklistUpdateSpaceTemplateChecklistParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  body: SpaceTemplateChecklistUpdateSpaceTemplateChecklistBody;
  signal?: AbortSignal;
}

export type SpaceUsersChangeUserRoleAndNotificationSettingsBody = (unknown) | (unknown);

export type SpaceUsersChangeUserRoleAndNotificationSettingsResponse = {
  entity_uid: string;
  access_mod: string;
  own_role_ids: Array<(string)>;
  own_access_mod: string;
  own_role: number;
  user_id: number;
  id: number;
};

export interface SpaceUsersChangeUserRoleAndNotificationSettingsParams extends OperationOptions {
  space_id: number;
  id: number;
  body: SpaceUsersChangeUserRoleAndNotificationSettingsBody;
  signal?: AbortSignal;
}

export type SpaceUsersGetListOfUsersQuery = {
  include_inherited_access?: boolean;
  inactive?: boolean;
  limit?: number;
  last_user_id?: number;
};

export type SpaceUsersGetListOfUsersResponse = Array<({
  id: number;
  full_name: string | null;
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
  apps_permissions: number;
  temporarily_inactive: boolean;
  access_mod: string;
  own_role_ids: Array<(string)>;
  own_access_mod: string;
  own_role: number;
  current: boolean;
})>;

export interface SpaceUsersGetListOfUsersParams extends OperationOptions {
  space_id: number;
  query?: SpaceUsersGetListOfUsersQuery;
  signal?: AbortSignal;
}

export type SpaceUsersGetUserResponse = {
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
  entity_uid: string;
  user_id: number;
  access_mod: string;
};

export interface SpaceUsersGetUserParams extends OperationOptions {
  space_id: number;
  id: number;
  signal?: AbortSignal;
}

export type SpaceUsersInviteUserToSpaceBody = {
  email: string;
  role_id?: string;
  guest?: boolean;
  operator_comment?: string;
  send_email?: boolean;
};

export type SpaceUsersInviteUserToSpaceResponse = {
  user: string | number;
  access_record: {
  access_mod: string;
  entity_uid: string;
  user_id: number;
  own_role_ids: Array<(string)>;
  own_access_mod: string;
  own_role: number;
};
  message: string;
};

export interface SpaceUsersInviteUserToSpaceParams extends OperationOptions {
  space_id: number;
  body: SpaceUsersInviteUserToSpaceBody;
  signal?: AbortSignal;
}

export type SpaceUsersRemoveUserFromSpaceResponse = {
  entity_uid: string;
  access_mod: string;
  own_role_ids: unknown | null;
  own_access_mod: string;
  own_role: null;
  user_id: number;
};

export interface SpaceUsersRemoveUserFromSpaceParams extends OperationOptions {
  space_id: number;
  id: number;
  signal?: AbortSignal;
}

export type SpacesCreateNewSpaceBody = {
  title: (string) | (number);
  external_id?: (number | string) | (null);
  parent_entity_uid?: string;
  for_everyone_access_role_id?: string;
  sort_order?: number;
  work_calendar_id?: string;
};

export type SpacesCreateNewSpaceResponse = {
  created: string;
  updated: string;
  archived: boolean;
  uid: string;
  access: string;
  for_everyone_access_role_id: string;
  entity_type: string;
  path: string;
  sort_order: number;
  parent_entity_uid: string | null;
  company_id: number;
  id: number;
  title: string;
  allowed_card_type_ids: null;
  hidden_card_type_uids: unknown[] | null;
  external_id: string | null;
  settings: {
  timeline: {
  endHour: number;
  workDays: Array<(number)>;
  startHour: number;
  planningUnits: number;
  calculateResourcesBy: number;
};
};
  users: string | number;
};

export interface SpacesCreateNewSpaceParams extends OperationOptions {
  body: SpacesCreateNewSpaceBody;
  signal?: AbortSignal;
}

export type SpacesRemoveSpaceResponse = {
  id: number;
};

export interface SpacesRemoveSpaceParams extends OperationOptions {
  space_id: number;
  signal?: AbortSignal;
}

export type SpacesRetrieveListOfSpacesQuery = {
  limit?: number;
  offset?: number;
};

export type SpacesRetrieveListOfSpacesResponse = Array<({
  created: string;
  updated: string;
  archived: boolean;
  uid: string;
  access: string;
  for_everyone_access_role_id: string;
  entity_type: string;
  path: string;
  sort_order: number;
  parent_entity_uid: string | null;
  company_id: number;
  id: number;
  title: string;
  allowed_card_type_ids: null;
  hidden_card_type_uids: unknown[] | null;
  external_id: string | null;
  settings: {
  timeline: {
  endHour: number;
  workDays: Array<(number)>;
  startHour: number;
  planningUnits: number;
  calculateResourcesBy: number;
};
};
  boards: string | number;
  user_id: number;
  entity_uid: string;
  access_mod: string;
})>;

export interface SpacesRetrieveListOfSpacesParams extends OperationOptions {
  query?: SpacesRetrieveListOfSpacesQuery;
  signal?: AbortSignal;
}

export type SpacesRetrieveSpaceResponse = {
  created: string;
  updated: string;
  archived: boolean;
  uid: string;
  for_everyone_access_role_id: string;
  access: string;
  entity_type: string;
  path: string;
  sort_order: number;
  parent_entity_uid: string | null;
  company_id: number;
  id: number;
  title: string;
  allowed_card_type_ids: null;
  hidden_card_type_uids: unknown[] | null;
  external_id: string | null;
  settings: {
  timeline: {
  endHour: number;
  workDays: Array<(number)>;
  startHour: number;
  planningUnits: number;
  calculateResourcesBy: number;
};
};
};

export interface SpacesRetrieveSpaceParams extends OperationOptions {
  space_id: number;
  signal?: AbortSignal;
}

export type SpacesUpdateSpaceBody = (unknown) | (unknown) | (unknown);

export type SpacesUpdateSpaceResponse = {
  created: string;
  updated: string;
  archived: boolean;
  uid: string;
  for_everyone_access_role_id: string;
  access: string;
  entity_type: string;
  path: string;
  sort_order: number;
  parent_entity_uid: string | null;
  company_id: number;
  id: number;
  title: string;
  allowed_card_type_ids: null;
  hidden_card_type_uids: unknown[] | null;
  external_id: string | null;
  settings: Record<string, unknown> | null;
};

export interface SpacesUpdateSpaceParams extends OperationOptions {
  space_id: number;
  body: SpacesUpdateSpaceBody;
  signal?: AbortSignal;
}

export type SprintsGetSprintSummaryQuery = {
  exclude_deleted_cards?: boolean;
};

export type SprintsGetSprintSummaryResponse = {
  created: string;
  updated: string;
  archived: boolean;
  id: number;
  uid: string;
  board_id: number;
  title: string;
  goal: string | null;
  active: boolean;
  committed: number;
  children_committed: number;
  velocity: number;
  velocity_details: {
  by_members: Array<({
  user_id: number;
  velocity: number;
})>;
};
  children_velocity: number;
  children_velocity_details: {
  by_members: unknown[];
};
  creator_id: number;
  updater_id: number;
  start_date: string;
  finish_date: string;
  actual_finish_date: string | null;
  cards: string | number;
  cardUpdates: string | number;
  customProperties: unknown[];
};

export interface SprintsGetSprintSummaryParams extends OperationOptions {
  id: number;
  query?: SprintsGetSprintSummaryQuery;
  signal?: AbortSignal;
}

export type SprintsGetSprintsListQuery = {
  active?: boolean;
  limit?: number;
  offset?: number;
};

export type SprintsGetSprintsListResponse = Array<({
  id: number;
  uid: string;
  board_id: number;
  title: string;
  goal: string | null;
  active: boolean;
  committed: number;
  children_committed: number;
  velocity: number;
  velocity_details: {
  by_members: Array<({
  user_id: number;
  velocity: number;
})>;
};
  children_velocity: number;
  children_velocity_details: {
  by_members: unknown[];
};
  creator_id: number;
  updater_id: number;
  start_date: string;
  finish_date: string;
  actual_finish_date: string | null;
  created: string;
  updated: string;
  archived: boolean;
})>;

export interface SprintsGetSprintsListParams extends OperationOptions {
  query?: SprintsGetSprintsListQuery;
  signal?: AbortSignal;
}

export type SubcolumnCreateNewSubcolumnBody = {
  external_id?: (number | string) | (null);
  title: string;
  sort_order?: number;
  type?: 1 | 2 | 3;
  archive_after_days?: number;
  months_to_hide_cards?: number | null;
  card_hide_after_days?: number | null;
  col_count?: number;
  rules?: number;
  last_moved_warning_after_minutes?: number;
  last_moved_warning_after_hours?: number;
  last_moved_warning_after_days?: number;
};

export type SubcolumnCreateNewSubcolumnResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  col_count: number;
  wip_limit: number | null;
  wip_limit_type: number;
  type: number;
  rules: number;
  board_id: number;
  column_id: number | null;
  archive_after_days: number;
  last_moved_warning_after_minutes: number;
  last_moved_warning_after_days: number;
  last_moved_warning_after_hours: number;
  external_id: string | null;
  default_tags: string | null;
  months_to_hide_cards: number | null;
  card_hide_after_days: number | null;
};

export interface SubcolumnCreateNewSubcolumnParams extends OperationOptions {
  column_id: number;
  body: SubcolumnCreateNewSubcolumnBody;
  signal?: AbortSignal;
}

export type SubcolumnGetListOfSubcolumnsResponse = Array<({
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  col_count: number;
  wip_limit: number | null;
  type: number;
  rules: number;
  board_id: number;
  column_id: number | null;
  archive_after_days: number;
  wip_limit_type: number;
  external_id: string | null;
  default_tags: string | null;
  last_moved_warning_after_days: number;
  months_to_hide_cards: number | null;
  card_hide_after_days: number | null;
  last_moved_warning_after_hours: number;
  last_moved_warning_after_minutes: number;
})>;

export interface SubcolumnGetListOfSubcolumnsParams extends OperationOptions {
  column_id: number;
  signal?: AbortSignal;
}

export type SubcolumnRemoveSubcolumnBody = {
  force?: boolean;
};

export type SubcolumnRemoveSubcolumnResponse = {
  id: number;
};

export interface SubcolumnRemoveSubcolumnParams extends OperationOptions {
  column_id: number;
  id: number;
  body?: SubcolumnRemoveSubcolumnBody;
  signal?: AbortSignal;
}

export type SubcolumnUpdateSubcolumnBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type SubcolumnUpdateSubcolumnResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  sort_order: number;
  col_count: number;
  wip_limit: number | null;
  wip_limit_type: number;
  type: number;
  rules: number;
  board_id: number;
  column_id: number | null;
  archive_after_days: number;
  last_moved_warning_after_minutes: number;
  last_moved_warning_after_days: number;
  last_moved_warning_after_hours: number;
  external_id: string | null;
  default_tags: string | null;
  months_to_hide_cards: number | null;
  card_hide_after_days: number | null;
};

export interface SubcolumnUpdateSubcolumnParams extends OperationOptions {
  column_id: number;
  id: number;
  body: SubcolumnUpdateSubcolumnBody;
  signal?: AbortSignal;
}

export type TagsAddTagQuery = {
  ids?: string;
  query?: string;
  space_id?: number;
  limit?: number;
  offset?: number;
};

export type TagsAddTagBody = {
  name: string;
};

export type TagsAddTagResponse = {
  created: string;
  updated: string;
  id: number;
  name: string;
  company_id: number;
  color: number;
  archived: boolean;
};

export interface TagsAddTagParams extends OperationOptions {
  query?: TagsAddTagQuery;
  body: TagsAddTagBody;
  signal?: AbortSignal;
}

export type TagsRetrieveListOfTagsQuery = {
  limit?: number;
  offset?: number;
  space_id?: number;
  ids?: string;
  query?: string;
};

export type TagsRetrieveListOfTagsResponse = Array<({
  created: string;
  updated: string;
  id: number;
  name: string;
  company_id: number;
  color: number;
  archived: boolean;
})>;

export interface TagsRetrieveListOfTagsParams extends OperationOptions {
  query?: TagsRetrieveListOfTagsQuery;
  signal?: AbortSignal;
}

export type TimesheetGetListQuery = {
  from: string;
  to: string;
  tag_ids?: string;
  user_ids?: string;
  group_ids?: string;
  space_ids?: string;
  board_ids?: string;
  column_ids?: string;
  card_ids?: string;
  visible_column_ids?: string;
  limit?: number;
  offset?: number;
  condition?: number;
  group_by?: number;
  time_precision?: number;
  time_unit?: number;
  with_daily_distribution?: number;
  only_general_sum?: number;
};

export type TimesheetGetListResponse = Array<({
  created: string;
  updated: string;
  id: number;
  card_id: number;
  user_id: number;
  role_id: number;
  author_id: number;
  updater_id: number;
  time_spent: number;
  for_date: string;
  comment: string | null;
  card: {
  id: number;
  created: string;
  updated: string;
  archived: boolean;
  title: string;
  asap: boolean;
  due_date: null;
  sort_order: number;
  fifo_order: null;
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
  children_number_properties_sum: null;
  calculated_planned_start: null;
  calculated_planned_end: null;
  parent_checklist_ids: null;
  parent_dod_item_ids: null;
  children_ids: null;
  parents_ids: null;
  blocking_card: boolean;
  blocked: boolean;
  size: number;
  size_unit: null;
  size_text: string;
  due_date_time_present: boolean;
  board_id: number;
  column_id: number;
  lane_id: number;
  owner_id: number;
  type_id: number;
  version: number;
  updater_id: number;
  completed_on_time: null;
  completed_at: null;
  last_moved_at: string;
  lane_changed_at: string;
  column_changed_at: string;
  first_moved_to_in_progress_at: string;
  last_moved_to_done_at: string;
  sprint_id: null;
  external_id: null;
  comments_total: number;
  comment_last_added_at: null;
  properties: {
  id_44: number;
  id_50: number;
  id_74: Array<({
  count: number;
  emoji: string;
  userIds: Array<(number)>;
})>;
  id_79: {
  date: string;
  time: string;
  tzOffset: number;
};
  id_5376: number;
};
  planned_start: null;
  planned_end: null;
  ignore_planned_dates_recalculation: boolean;
  service_id: null;
  sd_new_comment: boolean;
  public: boolean;
  share_settings: null;
  share_id: null;
  external_user_emails: null;
  description_filled: boolean;
  type: {
  id: number;
  name: string;
  color: number;
  letter: string;
  company_id: null;
  archived: boolean;
  properties: null;
};
  board: {
  id: number;
  title: string;
  external_id: null;
  card_properties: Array<({
  key: string;
  laneIds: unknown[];
  required: boolean;
  cardTypeIds: unknown[];
})>;
  spaces: Array<({
  id: number;
  title: string;
  external_id: null;
  board_id: number;
  space_id: number;
  top: number;
  left: number;
  sort_order: number;
  type: number;
  primary_path: boolean;
})>;
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
  owner: {
  id: number;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
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
};
  user: string | number;
  role: string | number;
})>;

export interface TimesheetGetListParams extends OperationOptions {
  query?: TimesheetGetListQuery;
  signal?: AbortSignal;
}

export type TreeEntitiesGetListOfEntitiesQuery = {
  limit?: number;
  offset?: number;
  parent_entity_uid?: string;
  levels_count?: number;
};

export type TreeEntitiesGetListOfEntitiesResponse = Array<({
  id: number;
  uid: string;
  title: string;
  external_id: null;
  company_id: number;
  sort_order: number;
  path: string;
  parent_entity_uid: string;
  entity_type: string;
  access: string;
  archived: boolean;
  for_everyone_access_role_id: string;
}) | ({
  uid: string;
  path: string;
  title: string;
  access: string;
  public: boolean;
  public_id: string;
  parent_entity_uid: string;
  entity_type: string;
  sort_order: number;
  author_id: number;
  updater_id: number;
  created: string;
  updated: string;
  publish_date: null;
  archived: boolean;
  for_everyone_access_role_id: string;
  company_id: number;
}) | ({
  uid: string;
  path: string;
  access: string;
  title: string;
  public: boolean;
  parent_entity_uid: string;
  entity_type: string;
  sort_order: number;
  author_id: number;
  updater_id: number;
  news_feed: boolean;
  hostname: null;
  archived: boolean;
  for_everyone_access_role_id: string;
  company_id: number;
})>;

export interface TreeEntitiesGetListOfEntitiesParams extends OperationOptions {
  query?: TreeEntitiesGetListOfEntitiesQuery;
  signal?: AbortSignal;
}

export type TreeEntityRolesGetListOfTreeEntityRolesResponse = Array<({
  id: string;
  name: string;
  permissions: {
  root: {
  move: boolean;
  create: boolean;
};
  space: {
  card: {
  move: boolean;
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  comment: boolean;
  read_own: boolean;
  properties: boolean;
};
  read: boolean;
  board: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
};
  addons: {
  read: boolean;
  update: boolean;
};
  create: boolean;
  delete: boolean;
  update: boolean;
  webhook: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  automation: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  i_calendar: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  move_within: boolean;
  restriction: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
  move_outside: boolean;
  access_control: boolean;
  external_webhook: {
  read: boolean;
  delete: boolean;
  update: boolean;
};
};
  document: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
  story_map: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
  document_group: {
  read: boolean;
  create: boolean;
  delete: boolean;
  update: boolean;
  move_within: boolean;
  move_outside: boolean;
  access_control: boolean;
};
};
  sort_order: number;
  new_permissions_default_value: boolean;
  updated: string;
  created: string;
})>;

export interface TreeEntityRolesGetListOfTreeEntityRolesParams extends OperationOptions {
  signal?: AbortSignal;
}

export type UserRolesCreateUserRoleBody = {
  name: string;
};

export type UserRolesCreateUserRoleResponse = {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface UserRolesCreateUserRoleParams extends OperationOptions {
  body: UserRolesCreateUserRoleBody;
  signal?: AbortSignal;
}

export type UserRolesGetListOfUserRolesResponse = Array<({
  created: string;
  updated: string;
  id: number;
  uid: string;
  name: string;
  company_id: number;
})>;

export interface UserRolesGetListOfUserRolesParams extends OperationOptions {
  signal?: AbortSignal;
}

export type UserRolesGetUserRoleResponse = {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface UserRolesGetUserRoleParams extends OperationOptions {
  role_id: number;
  signal?: AbortSignal;
}

export type UserRolesRemoveUserRoleBody = {
  replace_role_id: number;
};

export type UserRolesRemoveUserRoleResponse = {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface UserRolesRemoveUserRoleParams extends OperationOptions {
  role_id: number;
  body: UserRolesRemoveUserRoleBody;
  signal?: AbortSignal;
}

export type UserRolesUpdateUserRoleBody = {
  name: string;
};

export type UserRolesUpdateUserRoleResponse = {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface UserRolesUpdateUserRoleParams extends OperationOptions {
  role_id: number;
  body: UserRolesUpdateUserRoleBody;
  signal?: AbortSignal;
}

export type UsersRetrieveCurrentUserResponse = {
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
  company_id: number;
  telegram_id: number;
  telegram_settings: Record<string, unknown>;
  user_id: number;
  default_space_id: number | null;
  permissions: number;
  role: number;
  email_frequency: number;
  email_settings: {
  deadlines: boolean;
  subject_by: number;
};
  slack_id: number | null;
  slack_settings: Record<string, unknown> | null;
  notification_settings: unknown[] | null;
  notification_enabled_channels: Array<(string)>;
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
  has_password: boolean;
};

export interface UsersRetrieveCurrentUserParams extends OperationOptions {
  signal?: AbortSignal;
}

export type UsersRetrieveListOfUsersQuery = {
  type?: string;
  query?: string;
  access_type_permissions?: string;
  ids?: string;
  limit?: number;
  offset?: number;
  include_inactive?: boolean;
  exclude_directly_added_members_by_entity_uid?: string;
};

export type UsersRetrieveListOfUsersResponse = Array<({
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
  company_id: number;
  user_id: number;
  default_space_id: number | null;
  permissions: number;
  role: number;
  email_frequency: number;
  email_settings: boolean;
  slack_id: number | null;
  slack_settings: Record<string, unknown> | null;
  notification_settings: unknown[] | null;
  notification_enabled_channels: Array<(string)>;
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
})>;

export interface UsersRetrieveListOfUsersParams extends OperationOptions {
  query?: UsersRetrieveListOfUsersQuery;
  signal?: AbortSignal;
}

export type UsersUpdateUserBody = (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown) | (unknown);

export type UsersUpdateUserResponse = {
  created: string;
  updated: string;
  id: number;
  full_name: string;
  username: string;
  email: string;
  activated: boolean;
  show_tour: boolean;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  sd_telegram_id: number;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  default_space_id: number | null;
  email_frequency: number;
  email_settings: boolean;
  work_time_settings: {
  work_days: Array<(number)>;
  hours_count: number;
};
  telegram_id: number;
  telegram_settings: Record<string, unknown>;
  has_password: boolean;
};

export interface UsersUpdateUserParams extends OperationOptions {
  id: number;
  body: UsersUpdateUserBody;
  signal?: AbortSignal;
}

export const createRestResources = (transport: HttpTransport) => ({
  auditLogs: {
    /** @see https://developers.kaiten.ru/audit-logs/retrieve-audit-log-events */
    retrieveAuditLogEvents: (params: AuditLogsRetrieveAuditLogEventsParams = {}) => {
      return transport.request<AuditLogsRetrieveAuditLogEventsResponse>({
        method: 'GET',
        path: "/audit-logs",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  automations: {
    /** @see https://developers.kaiten.ru/automations/create-automation */
    createAutomation: (params: AutomationsCreateAutomationParams) => {
      return transport.request<AutomationsCreateAutomationResponse>({
        method: 'POST',
        path: "/spaces/" + pathSegment(params.space_id) + "/automations",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/delete-automation */
    deleteAutomation: (params: AutomationsDeleteAutomationParams) => {
      return transport.request<AutomationsDeleteAutomationResponse>({
        method: 'DELETE',
        path: "/spaces/" + pathSegment(params.space_id) + "/automations/" + pathSegment(params.automation_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/get-list-of-automations */
    getListOfAutomations: (params: AutomationsGetListOfAutomationsParams) => {
      return transport.request<AutomationsGetListOfAutomationsResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_id) + "/automations",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/update-automation */
    updateAutomation: (params: AutomationsUpdateAutomationParams) => {
      return transport.request<AutomationsUpdateAutomationResponse>({
        method: 'PATCH',
        path: "/spaces/" + pathSegment(params.space_id) + "/automations/" + pathSegment(params.automation_uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  boards: {
    /** @see https://developers.kaiten.ru/boards/get-board */
    getBoard: (params: BoardsGetBoardParams) => {
      return transport.request<BoardsGetBoardResponse>({
        method: 'GET',
        path: "/boards/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
  },
  cardAllowedUsers: {
    /** @see https://developers.kaiten.ru/card-allowed-users/retrieve-users-list */
    retrieveUsersList: (params: CardAllowedUsersRetrieveUsersListParams) => {
      return transport.request<CardAllowedUsersRetrieveUsersListResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/allowed-users",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  cardBlockerCategories: {
    /** @see https://developers.kaiten.ru/card-blocker-categories/add-blocker-category */
    addBlockerCategory: (params: CardBlockerCategoriesAddBlockerCategoryParams) => {
      return transport.request<CardBlockerCategoriesAddBlockerCategoryResponse>({
        method: 'POST',
        path: "/blockers/" + pathSegment(params.blocker_id) + "/categories",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blocker-categories/remove-category */
    removeCategory: (params: CardBlockerCategoriesRemoveCategoryParams) => {
      return transport.request<CardBlockerCategoriesRemoveCategoryResponse>({
        method: 'DELETE',
        path: "/blockers/" + pathSegment(params.blocker_id) + "/categories/" + pathSegment(params.category_uuid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blocker-categories/retrieve-list-of-categories */
    retrieveListOfCategories: (params: CardBlockerCategoriesRetrieveListOfCategoriesParams = {}) => {
      return transport.request<CardBlockerCategoriesRetrieveListOfCategoriesResponse>({
        method: 'GET',
        path: "/categories",
        signal: params.signal,
      });
    },
  },
  cardBlockerUsers: {
    /** @see https://developers.kaiten.ru/card-blocker-users/add-user-to-the-card-blocker */
    addUserToTheCardBlocker: (params: CardBlockerUsersAddUserToTheCardBlockerParams) => {
      return transport.request<CardBlockerUsersAddUserToTheCardBlockerResponse>({
        method: 'POST',
        path: "/blockers/" + pathSegment(params.blocker_id) + "/users",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blocker-users/remove-user */
    removeUser: (params: CardBlockerUsersRemoveUserParams) => {
      return transport.request<CardBlockerUsersRemoveUserResponse>({
        method: 'DELETE',
        path: "/blockers/" + pathSegment(params.blocker_id) + "/users/" + pathSegment(params.user_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blocker-users/retrieve-blockers-cards-list-on-current-user */
    retrieveBlockersCardsListOnCurrentUser: (params: CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserParams = {}) => {
      return transport.request<CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserResponse>({
        method: 'GET',
        path: "/users/current/blockers",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blocker-users/retrieve-list-of-users */
    retrieveListOfUsers: (params: CardBlockerUsersRetrieveListOfUsersParams) => {
      return transport.request<CardBlockerUsersRetrieveListOfUsersResponse>({
        method: 'GET',
        path: "/blockers/" + pathSegment(params.blocker_id) + "/users",
        signal: params.signal,
      });
    },
  },
  cardBlockers: {
    /** @see https://developers.kaiten.ru/card-blockers/block-card */
    blockCard: (params: CardBlockersBlockCardParams) => {
      return transport.request<CardBlockersBlockCardResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/blockers",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blockers/delete-card-blockers */
    deleteCardBlockers: (params: CardBlockersDeleteCardBlockersParams) => {
      return transport.request<CardBlockersDeleteCardBlockersResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/blockers/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blockers/retrieve-card-blockers-list */
    retrieveCardBlockersList: (params: CardBlockersRetrieveCardBlockersListParams) => {
      return transport.request<CardBlockersRetrieveCardBlockersListResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/blockers",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-blockers/update-card-blockers */
    updateCardBlockers: (params: CardBlockersUpdateCardBlockersParams) => {
      return transport.request<CardBlockersUpdateCardBlockersResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/blockers/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardChecklistItems: {
    /** @see https://developers.kaiten.ru/card-checklist-items/add-item-to-checklist */
    addItemToChecklist: (params: CardChecklistItemsAddItemToChecklistParams) => {
      return transport.request<CardChecklistItemsAddItemToChecklistResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/checklists/" + pathSegment(params.checklist_id) + "/items",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklist-items/remove-checklist-item */
    removeChecklistItem: (params: CardChecklistItemsRemoveChecklistItemParams) => {
      return transport.request<CardChecklistItemsRemoveChecklistItemResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/checklists/" + pathSegment(params.checklist_id) + "/items/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklist-items/update-checklist-item */
    updateChecklistItem: (params: CardChecklistItemsUpdateChecklistItemParams) => {
      return transport.request<CardChecklistItemsUpdateChecklistItemResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/checklists/" + pathSegment(params.checklist_id) + "/items/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardChecklists: {
    /** @see https://developers.kaiten.ru/card-checklists/add-checklist-to-card */
    addChecklistToCard: (params: CardChecklistsAddChecklistToCardParams) => {
      return transport.request<CardChecklistsAddChecklistToCardResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/checklists",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/remove-checklist-from-card */
    removeChecklistFromCard: (params: CardChecklistsRemoveChecklistFromCardParams) => {
      return transport.request<CardChecklistsRemoveChecklistFromCardResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/checklists/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/retrieve-card-checklist */
    retrieveCardChecklist: (params: CardChecklistsRetrieveCardChecklistParams) => {
      return transport.request<CardChecklistsRetrieveCardChecklistResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/checklists/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/update-checklist */
    updateChecklist: (params: CardChecklistsUpdateChecklistParams) => {
      return transport.request<CardChecklistsUpdateChecklistResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/checklists/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardChildren: {
    /** @see https://developers.kaiten.ru/card-children/add-children */
    addChildren: (params: CardChildrenAddChildrenParams) => {
      return transport.request<CardChildrenAddChildrenResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/children",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-children/remove-children */
    removeChildren: (params: CardChildrenRemoveChildrenParams) => {
      return transport.request<CardChildrenRemoveChildrenResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/children/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-children/retrieve-card-children-list */
    retrieveCardChildrenList: (params: CardChildrenRetrieveCardChildrenListParams) => {
      return transport.request<CardChildrenRetrieveCardChildrenListResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/children",
        signal: params.signal,
      });
    },
  },
  cardComments: {
    /** @see https://developers.kaiten.ru/card-comments/add-comment */
    addComment: (params: CardCommentsAddCommentParams) => {
      return transport.request<CardCommentsAddCommentResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/comments",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-comments/remove-comment */
    removeComment: (params: CardCommentsRemoveCommentParams) => {
      return transport.request<CardCommentsRemoveCommentResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/comments/" + pathSegment(params.comment_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-comments/retrieve-card-comments */
    retrieveCardComments: (params: CardCommentsRetrieveCardCommentsParams) => {
      return transport.request<CardCommentsRetrieveCardCommentsResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/comments",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-comments/update-comment */
    updateComment: (params: CardCommentsUpdateCommentParams) => {
      return transport.request<CardCommentsUpdateCommentResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/comments/" + pathSegment(params.comment_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardExternalLinks: {
    /** @see https://developers.kaiten.ru/card-external-links/add-external-link */
    addExternalLink: (params: CardExternalLinksAddExternalLinkParams) => {
      return transport.request<CardExternalLinksAddExternalLinkResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/external-links",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-external-links/remove-external-link */
    removeExternalLink: (params: CardExternalLinksRemoveExternalLinkParams) => {
      return transport.request<CardExternalLinksRemoveExternalLinkResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/external-links/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-external-links/retrieve-card-external-links */
    retrieveCardExternalLinks: (params: CardExternalLinksRetrieveCardExternalLinksParams) => {
      return transport.request<CardExternalLinksRetrieveCardExternalLinksResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/external-links",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-external-links/update-external-link */
    updateExternalLink: (params: CardExternalLinksUpdateExternalLinkParams) => {
      return transport.request<CardExternalLinksUpdateExternalLinkResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/external-links/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardFiles: {
    /** @deprecated Use restrictedAccessCardFiles.attachFileToCard. */
    /** @see https://developers.kaiten.ru/card-files/attach-file-to-card */
    attachFileToCard: (params: CardFilesAttachFileToCardParams) => {
      const form = new FormData();
      form.append('file', params.file, params.filename ?? 'file');
      return transport.request<CardFilesAttachFileToCardResponse>({
        method: 'PUT',
        path: "/cards/" + pathSegment(params.card_id) + "/files",
        body: form,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-files/detach-file-from-card */
    detachFileFromCard: (params: CardFilesDetachFileFromCardParams) => {
      return transport.request<CardFilesDetachFileFromCardResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/files/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-files/update-file */
    updateFile: (params: CardFilesUpdateFileParams) => {
      return transport.request<CardFilesUpdateFileResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/files/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardMembers: {
    /** @see https://developers.kaiten.ru/card-members/add-member-to-card */
    addMemberToCard: (params: CardMembersAddMemberToCardParams) => {
      return transport.request<CardMembersAddMemberToCardResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/members",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-members/remove-member-from-card */
    removeMemberFromCard: (params: CardMembersRemoveMemberFromCardParams) => {
      return transport.request<CardMembersRemoveMemberFromCardResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/members/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-members/retrieve-list-of-card-members */
    retrieveListOfCardMembers: (params: CardMembersRetrieveListOfCardMembersParams) => {
      return transport.request<CardMembersRetrieveListOfCardMembersResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/members",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-members/update-member-role */
    updateMemberRole: (params: CardMembersUpdateMemberRoleParams) => {
      return transport.request<CardMembersUpdateMemberRoleResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/members/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardServiceDeskExternalRecipients: {
    /** @see https://developers.kaiten.ru/card-service-desk-external-recipients/add-new-recipient */
    addNewRecipient: (params: CardServiceDeskExternalRecipientsAddNewRecipientParams) => {
      return transport.request<CardServiceDeskExternalRecipientsAddNewRecipientResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/sd-external-recipients",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-service-desk-external-recipients/remove-recipient */
    removeRecipient: (params: CardServiceDeskExternalRecipientsRemoveRecipientParams) => {
      return transport.request<CardServiceDeskExternalRecipientsRemoveRecipientResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/sd-external-recipients/" + pathSegment(params.email),
        signal: params.signal,
      });
    },
  },
  cardSla: {
    /** @see https://developers.kaiten.ru/card-sla/retrieve-card-sla-measurements */
    retrieveCardSlaMeasurements: (params: CardSlaRetrieveCardSlaMeasurementsParams) => {
      return transport.request<CardSlaRetrieveCardSlaMeasurementsResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/sla-rules-measurements",
        signal: params.signal,
      });
    },
  },
  cardTags: {
    /** @see https://developers.kaiten.ru/card-tags/add-tag */
    addTag: (params: CardTagsAddTagParams) => {
      return transport.request<CardTagsAddTagResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/tags",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-tags/remove-tag-from-card */
    removeTagFromCard: (params: CardTagsRemoveTagFromCardParams) => {
      return transport.request<CardTagsRemoveTagFromCardResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/tags/" + pathSegment(params.tag_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-tags/rertrieve-list-of-tags */
    rertrieveListOfTags: (params: CardTagsRertrieveListOfTagsParams) => {
      return transport.request<CardTagsRertrieveListOfTagsResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/tags",
        signal: params.signal,
      });
    },
  },
  cardTimeLogs: {
    /** @see https://developers.kaiten.ru/card-time-logs/add-time-log */
    addTimeLog: (params: CardTimeLogsAddTimeLogParams) => {
      return transport.request<CardTimeLogsAddTimeLogResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/time-logs",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/get-time-logs */
    getTimeLogs: (params: CardTimeLogsGetTimeLogsParams) => {
      return transport.request<CardTimeLogsGetTimeLogsResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/time-logs",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/remove-time-log */
    removeTimeLog: (params: CardTimeLogsRemoveTimeLogParams) => {
      return transport.request<CardTimeLogsRemoveTimeLogResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/time-logs/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/update-log-record */
    updateLogRecord: (params: CardTimeLogsUpdateLogRecordParams) => {
      return transport.request<CardTimeLogsUpdateLogRecordResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/time-logs/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardTypeTreeEntities: {
    /** @see https://developers.kaiten.ru/card-type-tree-entities/add-tree-entity-to-card-type */
    addTreeEntityToCardType: (params: CardTypeTreeEntitiesAddTreeEntityToCardTypeParams) => {
      return transport.request<CardTypeTreeEntitiesAddTreeEntityToCardTypeResponse>({
        method: 'POST',
        path: "/card-types/" + pathSegment(params.type_id) + "/tree-entities",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-type-tree-entities/delete-tree-entity-from-card-type */
    deleteTreeEntityFromCardType: (params: CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeParams) => {
      return transport.request<CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeResponse>({
        method: 'DELETE',
        path: "/card-types/" + pathSegment(params.type_id) + "/tree-entities/" + pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-type-tree-entities/get-list-of-type-tree-entities */
    getListOfTypeTreeEntities: (params: CardTypeTreeEntitiesGetListOfTypeTreeEntitiesParams) => {
      return transport.request<CardTypeTreeEntitiesGetListOfTypeTreeEntitiesResponse>({
        method: 'GET',
        path: "/card-types/" + pathSegment(params.type_id) + "/tree-entities",
        signal: params.signal,
      });
    },
  },
  cardTypes: {
    /** @see https://developers.kaiten.ru/card-types/create-new-card-type */
    createNewCardType: (params: CardTypesCreateNewCardTypeParams) => {
      return transport.request<CardTypesCreateNewCardTypeResponse>({
        method: 'POST',
        path: "/card-types",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/get-card-type */
    getCardType: (params: CardTypesGetCardTypeParams) => {
      return transport.request<CardTypesGetCardTypeResponse>({
        method: 'GET',
        path: "/card-types/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/get-list-of-card-types */
    getListOfCardTypes: (params: CardTypesGetListOfCardTypesParams = {}) => {
      return transport.request<CardTypesGetListOfCardTypesResponse>({
        method: 'GET',
        path: "/card-types",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/remove-card-type */
    removeCardType: (params: CardTypesRemoveCardTypeParams) => {
      return transport.request<CardTypesRemoveCardTypeResponse>({
        method: 'DELETE',
        path: "/card-types/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/update-card-type */
    updateCardType: (params: CardTypesUpdateCardTypeParams) => {
      return transport.request<CardTypesUpdateCardTypeResponse>({
        method: 'PATCH',
        path: "/card-types/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cards: {
    /** @see https://developers.kaiten.ru/cards/batch-update-for-cards */
    batchUpdateForCards: (params: CardsBatchUpdateForCardsParams) => {
      return transport.request<CardsBatchUpdateForCardsResponse>({
        method: 'PATCH',
        path: "/cards",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/create-new-card */
    createNewCard: (params: CardsCreateNewCardParams) => {
      return transport.request<CardsCreateNewCardResponse>({
        method: 'POST',
        path: "/cards",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/delete-card */
    deleteCard: (params: CardsDeleteCardParams) => {
      return transport.request<CardsDeleteCardResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/retrieve-card */
    retrieveCard: (params: CardsRetrieveCardParams) => {
      return transport.request<CardsRetrieveCardResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id),
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/retrieve-card-baselines */
    retrieveCardBaselines: (params: CardsRetrieveCardBaselinesParams) => {
      return transport.request<CardsRetrieveCardBaselinesResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/baselines",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/retrieve-card-list */
    retrieveCardList: (params: CardsRetrieveCardListParams = {}) => {
      return transport.request<CardsRetrieveCardListResponse>({
        method: 'GET',
        path: "/cards",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/retrieve-card-location-history */
    retrieveCardLocationHistory: (params: CardsRetrieveCardLocationHistoryParams) => {
      return transport.request<CardsRetrieveCardLocationHistoryResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/location-history",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/cards/update-card */
    updateCard: (params: CardsUpdateCardParams) => {
      return transport.request<CardsUpdateCardResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id),
        body: params.body,
        signal: params.signal,
      });
    },
    create: (params: CardsCreateNewCardParams) =>
      transport.request<CardsCreateNewCardResponse>({
        method: 'POST',
        path: '/cards',
        body: params.body,
        signal: params.signal,
      }),
  },
  checklistItems: {
    /** @see https://developers.kaiten.ru/checklist-items/add-item-to-checklist */
    addItemToChecklist: (params: ChecklistItemsAddItemToChecklistParams) => {
      return transport.request<ChecklistItemsAddItemToChecklistResponse>({
        method: 'POST',
        path: "/checklists/" + pathSegment(params.checklist_id) + "/items",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/checklist-items/remove-checklist-item */
    removeChecklistItem: (params: ChecklistItemsRemoveChecklistItemParams) => {
      return transport.request<ChecklistItemsRemoveChecklistItemResponse>({
        method: 'DELETE',
        path: "/checklists/" + pathSegment(params.checklist_id) + "/items/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/checklist-items/update-checklist-item */
    updateChecklistItem: (params: ChecklistItemsUpdateChecklistItemParams) => {
      return transport.request<ChecklistItemsUpdateChecklistItemResponse>({
        method: 'PATCH',
        path: "/checklists/" + pathSegment(params.checklist_id) + "/items/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  checklists: {
    /** @see https://developers.kaiten.ru/checklists/retrieve-cards-with-checklist */
    retrieveCardsWithChecklist: (params: ChecklistsRetrieveCardsWithChecklistParams) => {
      return transport.request<ChecklistsRetrieveCardsWithChecklistResponse>({
        method: 'GET',
        path: "/checklists/" + pathSegment(params.id),
        query: params.query,
        signal: params.signal,
      });
    },
  },
  columns: {
    /** @see https://developers.kaiten.ru/columns/create-new-column */
    createNewColumn: (params: ColumnsCreateNewColumnParams) => {
      return transport.request<ColumnsCreateNewColumnResponse>({
        method: 'POST',
        path: "/boards/" + pathSegment(params.board_id) + "/columns",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/get-list-of-columns */
    getListOfColumns: (params: ColumnsGetListOfColumnsParams) => {
      return transport.request<ColumnsGetListOfColumnsResponse>({
        method: 'GET',
        path: "/boards/" + pathSegment(params.board_id) + "/columns",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/remove-column */
    removeColumn: (params: ColumnsRemoveColumnParams) => {
      return transport.request<ColumnsRemoveColumnResponse>({
        method: 'DELETE',
        path: "/boards/" + pathSegment(params.board_id) + "/columns/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/update-column */
    updateColumn: (params: ColumnsUpdateColumnParams) => {
      return transport.request<ColumnsUpdateColumnResponse>({
        method: 'PATCH',
        path: "/boards/" + pathSegment(params.board_id) + "/columns/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  companyUsers: {
    /** @see https://developers.kaiten.ru/company-users/get-list-of-users */
    getListOfUsers: (params: CompanyUsersGetListOfUsersParams = {}) => {
      return transport.request<CompanyUsersGetListOfUsersResponse>({
        method: 'GET',
        path: "/company/users",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/company-users/remove-virtual-user */
    removeVirtualUser: (params: CompanyUsersRemoveVirtualUserParams) => {
      return transport.request<CompanyUsersRemoveVirtualUserResponse>({
        method: 'DELETE',
        path: "/company/users/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/company-users/update-user */
    updateUser: (params: CompanyUsersUpdateUserParams) => {
      return transport.request<CompanyUsersUpdateUserResponse>({
        method: 'PATCH',
        path: "/company/users/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customDirectories: {
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/create-custom-directory */
    createCustomDirectory: (params: CustomDirectoriesCreateCustomDirectoryParams) => {
      return transport.request<CustomDirectoriesCreateCustomDirectoryResponse>({
        method: 'POST',
        path: "/company/custom-directories",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/delete-custom-directory */
    deleteCustomDirectory: (params: CustomDirectoriesDeleteCustomDirectoryParams) => {
      return transport.request<CustomDirectoriesDeleteCustomDirectoryResponse>({
        method: 'DELETE',
        path: "/company/custom-directories/" + pathSegment(params.directory_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/get-custom-directory */
    getCustomDirectory: (params: CustomDirectoriesGetCustomDirectoryParams) => {
      return transport.request<CustomDirectoriesGetCustomDirectoryResponse>({
        method: 'GET',
        path: "/company/custom-directories/" + pathSegment(params.directory_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/get-list-of-custom-directories */
    getListOfCustomDirectories: (params: CustomDirectoriesGetListOfCustomDirectoriesParams = {}) => {
      return transport.request<CustomDirectoriesGetListOfCustomDirectoriesResponse>({
        method: 'GET',
        path: "/company/custom-directories",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directories/update-custom-directory */
    updateCustomDirectory: (params: CustomDirectoriesUpdateCustomDirectoryParams) => {
      return transport.request<CustomDirectoriesUpdateCustomDirectoryResponse>({
        method: 'PATCH',
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
        method: 'POST',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/fields",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/delete-field */
    deleteField: (params: CustomDirectoryFieldsDeleteFieldParams) => {
      return transport.request<CustomDirectoryFieldsDeleteFieldResponse>({
        method: 'DELETE',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/fields/" + pathSegment(params.field_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/get-field */
    getField: (params: CustomDirectoryFieldsGetFieldParams) => {
      return transport.request<CustomDirectoryFieldsGetFieldResponse>({
        method: 'GET',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/fields/" + pathSegment(params.field_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/get-list-of-fields */
    getListOfFields: (params: CustomDirectoryFieldsGetListOfFieldsParams) => {
      return transport.request<CustomDirectoryFieldsGetListOfFieldsResponse>({
        method: 'GET',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/fields",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-fields/update-field */
    updateField: (params: CustomDirectoryFieldsUpdateFieldParams) => {
      return transport.request<CustomDirectoryFieldsUpdateFieldResponse>({
        method: 'PATCH',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/fields/" + pathSegment(params.field_id),
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
        method: 'POST',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/records",
        query: params.query,
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/delete-record */
    deleteRecord: (params: CustomDirectoryRecordsDeleteRecordParams) => {
      return transport.request<CustomDirectoryRecordsDeleteRecordResponse>({
        method: 'DELETE',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/records/" + pathSegment(params.record_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-cards-linked-to-record */
    getCardsLinkedToRecord: (params: CustomDirectoryRecordsGetCardsLinkedToRecordParams) => {
      return transport.request<CustomDirectoryRecordsGetCardsLinkedToRecordResponse>({
        method: 'GET',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/records/" + pathSegment(params.record_id) + "/cards",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-list-of-records */
    getListOfRecords: (params: CustomDirectoryRecordsGetListOfRecordsParams) => {
      return transport.request<CustomDirectoryRecordsGetListOfRecordsResponse>({
        method: 'GET',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/records",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/get-record */
    getRecord: (params: CustomDirectoryRecordsGetRecordParams) => {
      return transport.request<CustomDirectoryRecordsGetRecordResponse>({
        method: 'GET',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/records/" + pathSegment(params.record_id),
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/custom-directory-records/update-record */
    updateRecord: (params: CustomDirectoryRecordsUpdateRecordParams) => {
      return transport.request<CustomDirectoryRecordsUpdateRecordResponse>({
        method: 'PATCH',
        path: "/company/custom-directories/" + pathSegment(params.directory_id) + "/records/" + pathSegment(params.record_id),
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
        method: 'POST',
        path: "/company/custom-properties",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/get-list-of-properties */
    getListOfProperties: (params: CustomPropertiesGetListOfPropertiesParams = {}) => {
      return transport.request<CustomPropertiesGetListOfPropertiesResponse>({
        method: 'GET',
        path: "/company/custom-properties",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/get-property */
    getProperty: (params: CustomPropertiesGetPropertyParams) => {
      return transport.request<CustomPropertiesGetPropertyResponse>({
        method: 'GET',
        path: "/company/custom-properties/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/remove-property */
    removeProperty: (params: CustomPropertiesRemovePropertyParams) => {
      return transport.request<CustomPropertiesRemovePropertyResponse>({
        method: 'DELETE',
        path: "/company/custom-properties/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-properties/update-property */
    updateProperty: (params: CustomPropertiesUpdatePropertyParams) => {
      return transport.request<CustomPropertiesUpdatePropertyResponse>({
        method: 'PATCH',
        path: "/company/custom-properties/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customPropertyCatalogValues: {
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/create-new-catalog-value */
    createNewCatalogValue: (params: CustomPropertyCatalogValuesCreateNewCatalogValueParams) => {
      return transport.request<CustomPropertyCatalogValuesCreateNewCatalogValueResponse>({
        method: 'POST',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/catalog-values",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/get-catalog-value */
    getCatalogValue: (params: CustomPropertyCatalogValuesGetCatalogValueParams) => {
      return transport.request<CustomPropertyCatalogValuesGetCatalogValueResponse>({
        method: 'GET',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/catalog-values/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/get-list-of-catalog-values */
    getListOfCatalogValues: (params: CustomPropertyCatalogValuesGetListOfCatalogValuesParams) => {
      return transport.request<CustomPropertyCatalogValuesGetListOfCatalogValuesResponse>({
        method: 'GET',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/catalog-values",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/remove-property */
    removeProperty: (params: CustomPropertyCatalogValuesRemovePropertyParams) => {
      return transport.request<CustomPropertyCatalogValuesRemovePropertyResponse>({
        method: 'DELETE',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/catalog-values/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-catalog-values/update-catalog-value */
    updateCatalogValue: (params: CustomPropertyCatalogValuesUpdateCatalogValueParams) => {
      return transport.request<CustomPropertyCatalogValuesUpdateCatalogValueResponse>({
        method: 'PATCH',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/catalog-values/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customPropertyCollectiveScoreValues: {
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/create-new-score-value */
    createNewScoreValue: (params: CustomPropertyCollectiveScoreValuesCreateNewScoreValueParams) => {
      return transport.request<CustomPropertyCollectiveScoreValuesCreateNewScoreValueResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/custom-properties/" + pathSegment(params.property_id) + "/collective-score-values",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/get-list-of-score-values */
    getListOfScoreValues: (params: CustomPropertyCollectiveScoreValuesGetListOfScoreValuesParams) => {
      return transport.request<CustomPropertyCollectiveScoreValuesGetListOfScoreValuesResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/custom-properties/" + pathSegment(params.property_id) + "/collective-score-values",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-score-values/update-score-value */
    updateScoreValue: (params: CustomPropertyCollectiveScoreValuesUpdateScoreValueParams) => {
      return transport.request<CustomPropertyCollectiveScoreValuesUpdateScoreValueResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/custom-properties/" + pathSegment(params.property_id) + "/collective-score-values/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customPropertyCollectiveVoteValues: {
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/create-new-vote-value */
    createNewVoteValue: (params: CustomPropertyCollectiveVoteValuesCreateNewVoteValueParams) => {
      return transport.request<CustomPropertyCollectiveVoteValuesCreateNewVoteValueResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_id) + "/custom-properties/" + pathSegment(params.property_id) + "/collective-vote-values",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/get-list-of-vote-values */
    getListOfVoteValues: (params: CustomPropertyCollectiveVoteValuesGetListOfVoteValuesParams) => {
      return transport.request<CustomPropertyCollectiveVoteValuesGetListOfVoteValuesResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_id) + "/custom-properties/" + pathSegment(params.property_id) + "/collective-vote-values",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/remove-vote-value */
    removeVoteValue: (params: CustomPropertyCollectiveVoteValuesRemoveVoteValueParams) => {
      return transport.request<CustomPropertyCollectiveVoteValuesRemoveVoteValueResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_id) + "/custom-properties/" + pathSegment(params.property_id) + "/collective-vote-values/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-collective-vote-values/update-vote-value */
    updateVoteValue: (params: CustomPropertyCollectiveVoteValuesUpdateVoteValueParams) => {
      return transport.request<CustomPropertyCollectiveVoteValuesUpdateVoteValueResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_id) + "/custom-properties/" + pathSegment(params.property_id) + "/collective-vote-values/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customPropertySelectValues: {
    /** @see https://developers.kaiten.ru/custom-property-select-values/create-new-select-value */
    createNewSelectValue: (params: CustomPropertySelectValuesCreateNewSelectValueParams) => {
      return transport.request<CustomPropertySelectValuesCreateNewSelectValueResponse>({
        method: 'POST',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/select-values",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/get-list-of-select-values */
    getListOfSelectValues: (params: CustomPropertySelectValuesGetListOfSelectValuesParams) => {
      return transport.request<CustomPropertySelectValuesGetListOfSelectValuesResponse>({
        method: 'GET',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/select-values",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/get-select-value */
    getSelectValue: (params: CustomPropertySelectValuesGetSelectValueParams) => {
      return transport.request<CustomPropertySelectValuesGetSelectValueResponse>({
        method: 'GET',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/select-values/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/remove-property */
    removeProperty: (params: CustomPropertySelectValuesRemovePropertyParams) => {
      return transport.request<CustomPropertySelectValuesRemovePropertyResponse>({
        method: 'DELETE',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/select-values/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-select-values/update-select-value */
    updateSelectValue: (params: CustomPropertySelectValuesUpdateSelectValueParams) => {
      return transport.request<CustomPropertySelectValuesUpdateSelectValueResponse>({
        method: 'PATCH',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/select-values/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  customPropertyTreeEntities: {
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/add-tree-entity-to-custom-property */
    addTreeEntityToCustomProperty: (params: CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyParams) => {
      return transport.request<CustomPropertyTreeEntitiesAddTreeEntityToCustomPropertyResponse>({
        method: 'POST',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/tree-entities",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/delete-tree-entity-from-custom-property */
    deleteTreeEntityFromCustomProperty: (params: CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyParams) => {
      return transport.request<CustomPropertyTreeEntitiesDeleteTreeEntityFromCustomPropertyResponse>({
        method: 'DELETE',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/tree-entities/" + pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/custom-property-tree-entities/get-list-of-custom-property-tree-entities */
    getListOfCustomPropertyTreeEntities: (params: CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesParams) => {
      return transport.request<CustomPropertyTreeEntitiesGetListOfCustomPropertyTreeEntitiesResponse>({
        method: 'GET',
        path: "/company/custom-properties/" + pathSegment(params.property_id) + "/tree-entities",
        signal: params.signal,
      });
    },
  },
  documentGroups: {
    /** @see https://developers.kaiten.ru/document-groups/create-new-document-group */
    createNewDocumentGroup: (params: DocumentGroupsCreateNewDocumentGroupParams) => {
      return transport.request<DocumentGroupsCreateNewDocumentGroupResponse>({
        method: 'POST',
        path: "/document-groups",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/document-groups/remove-document-group */
    removeDocumentGroup: (params: DocumentGroupsRemoveDocumentGroupParams) => {
      return transport.request<DocumentGroupsRemoveDocumentGroupResponse>({
        method: 'DELETE',
        path: "/document-groups/" + pathSegment(params.document_group_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/document-groups/retrieve-document-group */
    retrieveDocumentGroup: (params: DocumentGroupsRetrieveDocumentGroupParams) => {
      return transport.request<DocumentGroupsRetrieveDocumentGroupResponse>({
        method: 'GET',
        path: "/document-groups/" + pathSegment(params.document_group_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/document-groups/retrieve-list-of-document-groups */
    retrieveListOfDocumentGroups: (params: DocumentGroupsRetrieveListOfDocumentGroupsParams = {}) => {
      return transport.request<DocumentGroupsRetrieveListOfDocumentGroupsResponse>({
        method: 'GET',
        path: "/document-groups",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/document-groups/update-document-group */
    updateDocumentGroup: (params: DocumentGroupsUpdateDocumentGroupParams) => {
      return transport.request<DocumentGroupsUpdateDocumentGroupResponse>({
        method: 'PATCH',
        path: "/document-groups/" + pathSegment(params.document_group_uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  documentSchemas: {
    /** @see https://developers.kaiten.ru/document-schemas/get-document-data-schema */
    getDocumentDataSchema: (params: DocumentSchemasGetDocumentDataSchemaParams) => {
      return transport.request<DocumentSchemasGetDocumentDataSchemaResponse>({
        method: 'GET',
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
        method: 'POST',
        path: "/documents",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/documents/remove-document */
    removeDocument: (params: DocumentsRemoveDocumentParams) => {
      return transport.request<DocumentsRemoveDocumentResponse>({
        method: 'DELETE',
        path: "/documents/" + pathSegment(params.document_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/documents/retrieve-document */
    retrieveDocument: (params: DocumentsRetrieveDocumentParams) => {
      return transport.request<DocumentsRetrieveDocumentResponse>({
        method: 'GET',
        path: "/documents/" + pathSegment(params.document_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/documents/retrieve-list-of-documents */
    retrieveListOfDocuments: (params: DocumentsRetrieveListOfDocumentsParams = {}) => {
      return transport.request<DocumentsRetrieveListOfDocumentsResponse>({
        method: 'GET',
        path: "/documents",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/documents/update-document */
    updateDocument: (params: DocumentsUpdateDocumentParams) => {
      return transport.request<DocumentsUpdateDocumentResponse>({
        method: 'PATCH',
        path: "/documents/" + pathSegment(params.document_uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  groupAdmins: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/add-admin-to-group */
    addAdminToGroup: (params: GroupAdminsAddAdminToGroupParams) => {
      return transport.request<GroupAdminsAddAdminToGroupResponse>({
        method: 'POST',
        path: "/groups/" + pathSegment(params.group_uid) + "/admins",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/get-list-of-group-admins */
    getListOfGroupAdmins: (params: GroupAdminsGetListOfGroupAdminsParams) => {
      return transport.request<GroupAdminsGetListOfGroupAdminsResponse>({
        method: 'GET',
        path: "/groups/" + pathSegment(params.group_uid) + "/admins",
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/remove-admin-from-group */
    removeAdminFromGroup: (params: GroupAdminsRemoveAdminFromGroupParams) => {
      return transport.request<GroupAdminsRemoveAdminFromGroupResponse>({
        method: 'DELETE',
        path: "/groups/" + pathSegment(params.group_uid) + "/admins/" + pathSegment(params.user_id),
        signal: params.signal,
      });
    },
  },
  groupEntities: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/add-entity */
    addEntity: (params: GroupEntitiesAddEntityParams) => {
      return transport.request<GroupEntitiesAddEntityResponse>({
        method: 'POST',
        path: "/company/groups/" + pathSegment(params.group_uid) + "/entities",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/get-list-of-group-entities */
    getListOfGroupEntities: (params: GroupEntitiesGetListOfGroupEntitiesParams) => {
      return transport.request<GroupEntitiesGetListOfGroupEntitiesResponse>({
        method: 'GET',
        path: "/company/groups/" + pathSegment(params.group_uid) + "/entities",
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/remove-entity */
    removeEntity: (params: GroupEntitiesRemoveEntityParams) => {
      return transport.request<GroupEntitiesRemoveEntityResponse>({
        method: 'DELETE',
        path: "/company/groups/" + pathSegment(params.group_uid) + "/entities/" + pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/update-group-entity */
    updateGroupEntity: (params: GroupEntitiesUpdateGroupEntityParams) => {
      return transport.request<GroupEntitiesUpdateGroupEntityResponse>({
        method: 'PATCH',
        path: "/company/groups/" + pathSegment(params.group_uid) + "/entities/" + pathSegment(params.uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  groupUsers: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/add-user-to-group */
    addUserToGroup: (params: GroupUsersAddUserToGroupParams) => {
      return transport.request<GroupUsersAddUserToGroupResponse>({
        method: 'POST',
        path: "/groups/" + pathSegment(params.group_uid) + "/users",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/get-list-of-group-users */
    getListOfGroupUsers: (params: GroupUsersGetListOfGroupUsersParams) => {
      return transport.request<GroupUsersGetListOfGroupUsersResponse>({
        method: 'GET',
        path: "/groups/" + pathSegment(params.group_uid) + "/users",
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/remove-user-from-group */
    removeUserFromGroup: (params: GroupUsersRemoveUserFromGroupParams) => {
      return transport.request<GroupUsersRemoveUserFromGroupResponse>({
        method: 'DELETE',
        path: "/groups/" + pathSegment(params.group_uid) + "/users/" + pathSegment(params.user_id),
        signal: params.signal,
      });
    },
  },
  groups: {
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/create-group */
    createGroup: (params: GroupsCreateGroupParams) => {
      return transport.request<GroupsCreateGroupResponse>({
        method: 'POST',
        path: "/company/groups",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/get-group */
    getGroup: (params: GroupsGetGroupParams) => {
      return transport.request<GroupsGetGroupResponse>({
        method: 'GET',
        path: "/company/groups/" + pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/get-list-of-groups */
    getListOfGroups: (params: GroupsGetListOfGroupsParams = {}) => {
      return transport.request<GroupsGetListOfGroupsResponse>({
        method: 'GET',
        path: "/company/groups",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/remove-group */
    removeGroup: (params: GroupsRemoveGroupParams) => {
      return transport.request<GroupsRemoveGroupResponse>({
        method: 'DELETE',
        path: "/company/groups/" + pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/update-group */
    updateGroup: (params: GroupsUpdateGroupParams) => {
      return transport.request<GroupsUpdateGroupResponse>({
        method: 'PATCH',
        path: "/company/groups/" + pathSegment(params.uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  iterations: {
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/add-card-to-iteration */
    addCardToIteration: (params: IterationsAddCardToIterationParams) => {
      return transport.request<IterationsAddCardToIterationResponse>({
        method: 'POST',
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations/" + pathSegment(params.iteration_id) + "/cards",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/create-iteration */
    createIteration: (params: IterationsCreateIterationParams) => {
      return transport.request<IterationsCreateIterationResponse>({
        method: 'POST',
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/delete-iteration */
    deleteIteration: (params: IterationsDeleteIterationParams) => {
      return transport.request<IterationsDeleteIterationResponse>({
        method: 'DELETE',
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/get-card-iterations-history */
    getCardIterationsHistory: (params: IterationsGetCardIterationsHistoryParams) => {
      return transport.request<IterationsGetCardIterationsHistoryResponse>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_uid) + "/iterations-history",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/get-iteration */
    getIteration: (params: IterationsGetIterationParams) => {
      return transport.request<IterationsGetIterationResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/remove-card-from-iteration */
    removeCardFromIteration: (params: IterationsRemoveCardFromIterationParams) => {
      return transport.request<IterationsRemoveCardFromIterationResponse>({
        method: 'DELETE',
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations/" + pathSegment(params.iteration_id) + "/cards/" + pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/retrieve-cards-in-iteration */
    retrieveCardsInIteration: (params: IterationsRetrieveCardsInIterationParams) => {
      return transport.request<IterationsRetrieveCardsInIterationResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations/" + pathSegment(params.iteration_id) + "/cards",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/retrieve-list-of-iterations */
    retrieveListOfIterations: (params: IterationsRetrieveListOfIterationsParams) => {
      return transport.request<IterationsRetrieveListOfIterationsResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/update-iteration */
    updateIteration: (params: IterationsUpdateIterationParams) => {
      return transport.request<IterationsUpdateIterationResponse>({
        method: 'PATCH',
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  lanes: {
    /** @see https://developers.kaiten.ru/lanes/create-new-lane */
    createNewLane: (params: LanesCreateNewLaneParams) => {
      return transport.request<LanesCreateNewLaneResponse>({
        method: 'POST',
        path: "/boards/" + pathSegment(params.board_id) + "/lanes",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/get-list-of-lanes */
    getListOfLanes: (params: LanesGetListOfLanesParams) => {
      return transport.request<LanesGetListOfLanesResponse>({
        method: 'GET',
        path: "/boards/" + pathSegment(params.board_id) + "/lanes",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/remove-lane */
    removeLane: (params: LanesRemoveLaneParams) => {
      return transport.request<LanesRemoveLaneResponse>({
        method: 'DELETE',
        path: "/boards/" + pathSegment(params.board_id) + "/lanes/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/update-lane */
    updateLane: (params: LanesUpdateLaneParams) => {
      return transport.request<LanesUpdateLaneResponse>({
        method: 'PATCH',
        path: "/boards/" + pathSegment(params.board_id) + "/lanes/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  restrictedAccessCardFiles: {
    /** @see https://developers.kaiten.ru/restricted-access-card-files/attach-file-to-card */
    attachFileToCard: (params: RestrictedAccessCardFilesAttachFileToCardParams) => {
      const form = new FormData();
      form.append('file', params.file, params.filename ?? 'file');
      return transport.request<RestrictedAccessCardFilesAttachFileToCardResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_uid) + "/files",
        body: form,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-card-files/delete-card-file */
    deleteCardFile: (params: RestrictedAccessCardFilesDeleteCardFileParams) => {
      return transport.request<RestrictedAccessCardFilesDeleteCardFileResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_uid) + "/files/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-card-files/get-card-file */
    getCardFile: (params: RestrictedAccessCardFilesGetCardFileParams) => {
      return transport.request<RestrictedAccessCardFilesGetCardFileResponse | { location: string }>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_uid) + "/files/" + pathSegment(params.id),
        query: params.query,
        responseMode: params.query?.redirect === true ? 'redirect' : 'json',
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-card-files/update-card-file */
    updateCardFile: (params: RestrictedAccessCardFilesUpdateCardFileParams) => {
      return transport.request<RestrictedAccessCardFilesUpdateCardFileResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_uid) + "/files/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  restrictedAccessCommentFiles: {
    /** @see https://developers.kaiten.ru/restricted-access-comment-files/attach-file-to-comment */
    attachFileToComment: (params: RestrictedAccessCommentFilesAttachFileToCommentParams) => {
      const form = new FormData();
      form.append('file', params.file, params.filename ?? 'file');
      return transport.request<RestrictedAccessCommentFilesAttachFileToCommentResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_uid) + "/comments/" + pathSegment(params.comment_uid) + "/files",
        body: form,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-comment-files/delete-comment-file */
    deleteCommentFile: (params: RestrictedAccessCommentFilesDeleteCommentFileParams) => {
      return transport.request<RestrictedAccessCommentFilesDeleteCommentFileResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_uid) + "/comments/" + pathSegment(params.comment_uid) + "/files/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-comment-files/get-comment-file */
    getCommentFile: (params: RestrictedAccessCommentFilesGetCommentFileParams) => {
      return transport.request<RestrictedAccessCommentFilesGetCommentFileResponse | { location: string }>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_uid) + "/comments/" + pathSegment(params.comment_uid) + "/files/" + pathSegment(params.id),
        query: params.query,
        responseMode: params.query?.redirect === true ? 'redirect' : 'json',
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-comment-files/update-comment-file */
    updateCommentFile: (params: RestrictedAccessCommentFilesUpdateCommentFileParams) => {
      return transport.request<RestrictedAccessCommentFilesUpdateCommentFileResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_uid) + "/comments/" + pathSegment(params.comment_uid) + "/files/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  restrictedAccessCustomPropertyFiles: {
    /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/attach-file-to-custom-property */
    attachFileToCustomProperty: (params: RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyParams) => {
      const form = new FormData();
      form.append('file', params.file, params.filename ?? 'file');
      return transport.request<RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyResponse>({
        method: 'POST',
        path: "/cards/" + pathSegment(params.card_uid) + "/custom-properties/" + pathSegment(params.property_uid) + "/files",
        body: form,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/delete-custom-property-file */
    deleteCustomPropertyFile: (params: RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileParams) => {
      return transport.request<RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileResponse>({
        method: 'DELETE',
        path: "/cards/" + pathSegment(params.card_uid) + "/custom-properties/" + pathSegment(params.property_uid) + "/files/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/get-custom-property-file */
    getCustomPropertyFile: (params: RestrictedAccessCustomPropertyFilesGetCustomPropertyFileParams) => {
      return transport.request<RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse | { location: string }>({
        method: 'GET',
        path: "/cards/" + pathSegment(params.card_uid) + "/custom-properties/" + pathSegment(params.property_uid) + "/files/" + pathSegment(params.id),
        query: params.query,
        responseMode: params.query?.redirect === true ? 'redirect' : 'json',
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/update-custom-property-file */
    updateCustomPropertyFile: (params: RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileParams) => {
      return transport.request<RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileResponse>({
        method: 'PATCH',
        path: "/cards/" + pathSegment(params.card_uid) + "/custom-properties/" + pathSegment(params.property_uid) + "/files/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  serviceDeskServices: {
    /** @see https://developers.kaiten.ru/service-desk-services/retrieve-services-list */
    retrieveServicesList: (params: ServiceDeskServicesRetrieveServicesListParams = {}) => {
      return transport.request<ServiceDeskServicesRetrieveServicesListResponse>({
        method: 'GET',
        path: "/service-desk/services",
        signal: params.signal,
      });
    },
  },
  spaceBoards: {
    /** @see https://developers.kaiten.ru/space-boards/create-new-board */
    createNewBoard: (params: SpaceBoardsCreateNewBoardParams) => {
      return transport.request<SpaceBoardsCreateNewBoardResponse>({
        method: 'POST',
        path: "/spaces/" + pathSegment(params.space_id) + "/boards",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/get-board */
    getBoard: (params: SpaceBoardsGetBoardParams) => {
      return transport.request<SpaceBoardsGetBoardResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_id) + "/boards/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/get-list-of-boards */
    getListOfBoards: (params: SpaceBoardsGetListOfBoardsParams) => {
      return transport.request<SpaceBoardsGetListOfBoardsResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_id) + "/boards",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/remove-board */
    removeBoard: (params: SpaceBoardsRemoveBoardParams) => {
      return transport.request<SpaceBoardsRemoveBoardResponse>({
        method: 'DELETE',
        path: "/spaces/" + pathSegment(params.space_id) + "/boards/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/update-board */
    updateBoard: (params: SpaceBoardsUpdateBoardParams) => {
      return transport.request<SpaceBoardsUpdateBoardResponse>({
        method: 'PATCH',
        path: "/spaces/" + pathSegment(params.space_id) + "/boards/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  spaceTemplateChecklistItems: {
    /** @see https://developers.kaiten.ru/space-template-checklist-items/create-new-space-template-checklist-item */
    createNewSpaceTemplateChecklistItem: (params: SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemParams) => {
      return transport.request<SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemResponse>({
        method: 'POST',
        path: "/spaces/" + pathSegment(params.space_uid) + "/template-checklists/" + pathSegment(params.template_checklist_uid) + "/items",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-template-checklist-items/remove-space-template-checklist-item */
    removeSpaceTemplateChecklistItem: (params: SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemParams) => {
      return transport.request<SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemResponse>({
        method: 'DELETE',
        path: "/spaces/" + pathSegment(params.space_uid) + "/template-checklists/" + pathSegment(params.template_checklist_uid) + "/items/" + pathSegment(params.item_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-template-checklist-items/update-space-template-checklist-item */
    updateSpaceTemplateChecklistItem: (params: SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemParams) => {
      return transport.request<SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemResponse>({
        method: 'PATCH',
        path: "/spaces/" + pathSegment(params.space_uid) + "/template-checklists/" + pathSegment(params.template_checklist_uid) + "/items/" + pathSegment(params.item_uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  spaceTemplateChecklist: {
    /** @see https://developers.kaiten.ru/space-template-checklist/create-new-space-template-checklist */
    createNewSpaceTemplateChecklist: (params: SpaceTemplateChecklistCreateNewSpaceTemplateChecklistParams) => {
      return transport.request<SpaceTemplateChecklistCreateNewSpaceTemplateChecklistResponse>({
        method: 'POST',
        path: "/spaces/" + pathSegment(params.space_uid) + "/template-checklists",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/get-list-of-space-template-checklists */
    getListOfSpaceTemplateChecklists: (params: SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsParams) => {
      return transport.request<SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_uid) + "/template-checklists",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/remove-space-template-checklist */
    removeSpaceTemplateChecklist: (params: SpaceTemplateChecklistRemoveSpaceTemplateChecklistParams) => {
      return transport.request<SpaceTemplateChecklistRemoveSpaceTemplateChecklistResponse>({
        method: 'DELETE',
        path: "/spaces/" + pathSegment(params.space_uid) + "/template-checklists/" + pathSegment(params.template_checklist_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/update-space-template-checklist */
    updateSpaceTemplateChecklist: (params: SpaceTemplateChecklistUpdateSpaceTemplateChecklistParams) => {
      return transport.request<SpaceTemplateChecklistUpdateSpaceTemplateChecklistResponse>({
        method: 'PATCH',
        path: "/spaces/" + pathSegment(params.space_uid) + "/template-checklists/" + pathSegment(params.template_checklist_uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  spaceUsers: {
    /** @see https://developers.kaiten.ru/space-users/change-user-role-and-notification-settings */
    changeUserRoleAndNotificationSettings: (params: SpaceUsersChangeUserRoleAndNotificationSettingsParams) => {
      return transport.request<SpaceUsersChangeUserRoleAndNotificationSettingsResponse>({
        method: 'PATCH',
        path: "/spaces/" + pathSegment(params.space_id) + "/users/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/get-list-of-users */
    getListOfUsers: (params: SpaceUsersGetListOfUsersParams) => {
      return transport.request<SpaceUsersGetListOfUsersResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_id) + "/users",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/get-user */
    getUser: (params: SpaceUsersGetUserParams) => {
      return transport.request<SpaceUsersGetUserResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_id) + "/users/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/invite-user-to-space */
    inviteUserToSpace: (params: SpaceUsersInviteUserToSpaceParams) => {
      return transport.request<SpaceUsersInviteUserToSpaceResponse>({
        method: 'POST',
        path: "/spaces/" + pathSegment(params.space_id) + "/users",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/remove-user-from-space */
    removeUserFromSpace: (params: SpaceUsersRemoveUserFromSpaceParams) => {
      return transport.request<SpaceUsersRemoveUserFromSpaceResponse>({
        method: 'DELETE',
        path: "/spaces/" + pathSegment(params.space_id) + "/users/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
  },
  spaces: {
    /** @see https://developers.kaiten.ru/spaces/create-new-space */
    createNewSpace: (params: SpacesCreateNewSpaceParams) => {
      return transport.request<SpacesCreateNewSpaceResponse>({
        method: 'POST',
        path: "/spaces",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/remove-space */
    removeSpace: (params: SpacesRemoveSpaceParams) => {
      return transport.request<SpacesRemoveSpaceResponse>({
        method: 'DELETE',
        path: "/spaces/" + pathSegment(params.space_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/retrieve-list-of-spaces */
    retrieveListOfSpaces: (params: SpacesRetrieveListOfSpacesParams = {}) => {
      return transport.request<SpacesRetrieveListOfSpacesResponse>({
        method: 'GET',
        path: "/spaces",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/retrieve-space */
    retrieveSpace: (params: SpacesRetrieveSpaceParams) => {
      return transport.request<SpacesRetrieveSpaceResponse>({
        method: 'GET',
        path: "/spaces/" + pathSegment(params.space_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/update-space */
    updateSpace: (params: SpacesUpdateSpaceParams) => {
      return transport.request<SpacesUpdateSpaceResponse>({
        method: 'PATCH',
        path: "/spaces/" + pathSegment(params.space_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  sprints: {
    /** @see https://developers.kaiten.ru/sprints/get-sprint-summary */
    getSprintSummary: (params: SprintsGetSprintSummaryParams) => {
      return transport.request<SprintsGetSprintSummaryResponse>({
        method: 'GET',
        path: "/sprints/" + pathSegment(params.id),
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/sprints/get-sprints-list */
    getSprintsList: (params: SprintsGetSprintsListParams = {}) => {
      return transport.request<SprintsGetSprintsListResponse>({
        method: 'GET',
        path: "/sprints",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  subcolumn: {
    /** @see https://developers.kaiten.ru/subcolumn/create-new-subcolumn */
    createNewSubcolumn: (params: SubcolumnCreateNewSubcolumnParams) => {
      return transport.request<SubcolumnCreateNewSubcolumnResponse>({
        method: 'POST',
        path: "/columns/" + pathSegment(params.column_id) + "/subcolumns",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/get-list-of-subcolumns */
    getListOfSubcolumns: (params: SubcolumnGetListOfSubcolumnsParams) => {
      return transport.request<SubcolumnGetListOfSubcolumnsResponse>({
        method: 'GET',
        path: "/columns/" + pathSegment(params.column_id) + "/subcolumns",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/remove-subcolumn */
    removeSubcolumn: (params: SubcolumnRemoveSubcolumnParams) => {
      return transport.request<SubcolumnRemoveSubcolumnResponse>({
        method: 'DELETE',
        path: "/columns/" + pathSegment(params.column_id) + "/subcolumns/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/update-subcolumn */
    updateSubcolumn: (params: SubcolumnUpdateSubcolumnParams) => {
      return transport.request<SubcolumnUpdateSubcolumnResponse>({
        method: 'PATCH',
        path: "/columns/" + pathSegment(params.column_id) + "/subcolumns/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  tags: {
    /** @see https://developers.kaiten.ru/tags/add-tag */
    addTag: (params: TagsAddTagParams) => {
      return transport.request<TagsAddTagResponse>({
        method: 'POST',
        path: "/tags",
        query: params.query,
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/tags/retrieve-list-of-tags */
    retrieveListOfTags: (params: TagsRetrieveListOfTagsParams = {}) => {
      return transport.request<TagsRetrieveListOfTagsResponse>({
        method: 'GET',
        path: "/tags",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  timesheet: {
    /** @see https://developers.kaiten.ru/timesheet/get-list */
    getList: (params: TimesheetGetListParams = {}) => {
      return transport.request<TimesheetGetListResponse>({
        method: 'GET',
        path: "/time-logs",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  treeEntities: {
    /** @beta */
    /** @see https://developers.kaiten.ru/tree-entities/get-list-of-entities */
    getListOfEntities: (params: TreeEntitiesGetListOfEntitiesParams = {}) => {
      return transport.request<TreeEntitiesGetListOfEntitiesResponse>({
        method: 'GET',
        path: "/tree-entities",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  treeEntityRoles: {
    /** @beta */
    /** @see https://developers.kaiten.ru/tree-entity-roles/get-list-of-tree-entity-roles */
    getListOfTreeEntityRoles: (params: TreeEntityRolesGetListOfTreeEntityRolesParams = {}) => {
      return transport.request<TreeEntityRolesGetListOfTreeEntityRolesResponse>({
        method: 'GET',
        path: "/tree-entity-roles",
        signal: params.signal,
      });
    },
  },
  userRoles: {
    /** @see https://developers.kaiten.ru/user-roles/create-user-role */
    createUserRole: (params: UserRolesCreateUserRoleParams) => {
      return transport.request<UserRolesCreateUserRoleResponse>({
        method: 'POST',
        path: "/user-roles",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/get-list-of-user-roles */
    getListOfUserRoles: (params: UserRolesGetListOfUserRolesParams = {}) => {
      return transport.request<UserRolesGetListOfUserRolesResponse>({
        method: 'GET',
        path: "/user-roles",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/get-user-role */
    getUserRole: (params: UserRolesGetUserRoleParams) => {
      return transport.request<UserRolesGetUserRoleResponse>({
        method: 'GET',
        path: "/user-roles/" + pathSegment(params.role_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/remove-user-role */
    removeUserRole: (params: UserRolesRemoveUserRoleParams) => {
      return transport.request<UserRolesRemoveUserRoleResponse>({
        method: 'DELETE',
        path: "/user-roles/" + pathSegment(params.role_id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/update-user-role */
    updateUserRole: (params: UserRolesUpdateUserRoleParams) => {
      return transport.request<UserRolesUpdateUserRoleResponse>({
        method: 'PATCH',
        path: "/user-roles/" + pathSegment(params.role_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  users: {
    /** @see https://developers.kaiten.ru/users/retrieve-current-user */
    retrieveCurrentUser: (params: UsersRetrieveCurrentUserParams = {}) => {
      return transport.request<UsersRetrieveCurrentUserResponse>({
        method: 'GET',
        path: "/users/current",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/users/retrieve-list-of-users */
    retrieveListOfUsers: (params: UsersRetrieveListOfUsersParams = {}) => {
      return transport.request<UsersRetrieveListOfUsersResponse>({
        method: 'GET',
        path: "/users",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/users/update-user */
    updateUser: (params: UsersUpdateUserParams) => {
      return transport.request<UsersUpdateUserResponse>({
        method: 'PATCH',
        path: "/users/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
});

export type RestResources = ReturnType<typeof createRestResources>;

export const REST_OPERATION_METADATA = [
  {"documentation": "/audit-logs/retrieve-audit-log-events", "resource": "auditLogs", "operation": "retrieveAuditLogEvents", "method": "GET", "path": "/audit-logs", "pathParameters": [], "hasBody": false},
  {"documentation": "/automations/create-automation", "resource": "automations", "operation": "createAutomation", "method": "POST", "path": "/spaces/{space_id}/automations", "pathParameters": ["space_id"], "hasBody": true},
  {"documentation": "/automations/delete-automation", "resource": "automations", "operation": "deleteAutomation", "method": "DELETE", "path": "/spaces/{space_id}/automations/{automation_uid}", "pathParameters": ["space_id", "automation_uid"], "hasBody": false},
  {"documentation": "/automations/get-list-of-automations", "resource": "automations", "operation": "getListOfAutomations", "method": "GET", "path": "/spaces/{space_id}/automations", "pathParameters": ["space_id"], "hasBody": false},
  {"documentation": "/automations/update-automation", "resource": "automations", "operation": "updateAutomation", "method": "PATCH", "path": "/spaces/{space_id}/automations/{automation_uid}", "pathParameters": ["space_id", "automation_uid"], "hasBody": true},
  {"documentation": "/boards/get-board", "resource": "boards", "operation": "getBoard", "method": "GET", "path": "/boards/{id}", "pathParameters": ["id"], "hasBody": false},
  {"documentation": "/card-allowed-users/retrieve-users-list", "resource": "cardAllowedUsers", "operation": "retrieveUsersList", "method": "GET", "path": "/cards/{card_id}/allowed-users", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-blocker-categories/add-blocker-category", "resource": "cardBlockerCategories", "operation": "addBlockerCategory", "method": "POST", "path": "/blockers/{blocker_id}/categories", "pathParameters": ["blocker_id"], "hasBody": true},
  {"documentation": "/card-blocker-categories/remove-category", "resource": "cardBlockerCategories", "operation": "removeCategory", "method": "DELETE", "path": "/blockers/{blocker_id}/categories/{category_uuid}", "pathParameters": ["blocker_id", "category_uuid"], "hasBody": false},
  {"documentation": "/card-blocker-categories/retrieve-list-of-categories", "resource": "cardBlockerCategories", "operation": "retrieveListOfCategories", "method": "GET", "path": "/categories", "pathParameters": [], "hasBody": false},
  {"documentation": "/card-blocker-users/add-user-to-the-card-blocker", "resource": "cardBlockerUsers", "operation": "addUserToTheCardBlocker", "method": "POST", "path": "/blockers/{blocker_id}/users", "pathParameters": ["blocker_id"], "hasBody": true},
  {"documentation": "/card-blocker-users/remove-user", "resource": "cardBlockerUsers", "operation": "removeUser", "method": "DELETE", "path": "/blockers/{blocker_id}/users/{user_id}", "pathParameters": ["blocker_id", "user_id"], "hasBody": false},
  {"documentation": "/card-blocker-users/retrieve-blockers-cards-list-on-current-user", "resource": "cardBlockerUsers", "operation": "retrieveBlockersCardsListOnCurrentUser", "method": "GET", "path": "/users/current/blockers", "pathParameters": [], "hasBody": false},
  {"documentation": "/card-blocker-users/retrieve-list-of-users", "resource": "cardBlockerUsers", "operation": "retrieveListOfUsers", "method": "GET", "path": "/blockers/{blocker_id}/users", "pathParameters": ["blocker_id"], "hasBody": false},
  {"documentation": "/card-blockers/block-card", "resource": "cardBlockers", "operation": "blockCard", "method": "POST", "path": "/cards/{card_id}/blockers", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-blockers/delete-card-blockers", "resource": "cardBlockers", "operation": "deleteCardBlockers", "method": "DELETE", "path": "/cards/{card_id}/blockers/{id}", "pathParameters": ["card_id", "id"], "hasBody": false},
  {"documentation": "/card-blockers/retrieve-card-blockers-list", "resource": "cardBlockers", "operation": "retrieveCardBlockersList", "method": "GET", "path": "/cards/{card_id}/blockers", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-blockers/update-card-blockers", "resource": "cardBlockers", "operation": "updateCardBlockers", "method": "PATCH", "path": "/cards/{card_id}/blockers/{id}", "pathParameters": ["card_id", "id"], "hasBody": true},
  {"documentation": "/card-checklist-items/add-item-to-checklist", "resource": "cardChecklistItems", "operation": "addItemToChecklist", "method": "POST", "path": "/cards/{card_id}/checklists/{checklist_id}/items", "pathParameters": ["card_id", "checklist_id"], "hasBody": true},
  {"documentation": "/card-checklist-items/remove-checklist-item", "resource": "cardChecklistItems", "operation": "removeChecklistItem", "method": "DELETE", "path": "/cards/{card_id}/checklists/{checklist_id}/items/{id}", "pathParameters": ["card_id", "checklist_id", "id"], "hasBody": false},
  {"documentation": "/card-checklist-items/update-checklist-item", "resource": "cardChecklistItems", "operation": "updateChecklistItem", "method": "PATCH", "path": "/cards/{card_id}/checklists/{checklist_id}/items/{id}", "pathParameters": ["card_id", "checklist_id", "id"], "hasBody": true},
  {"documentation": "/card-checklists/add-checklist-to-card", "resource": "cardChecklists", "operation": "addChecklistToCard", "method": "POST", "path": "/cards/{card_id}/checklists", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-checklists/remove-checklist-from-card", "resource": "cardChecklists", "operation": "removeChecklistFromCard", "method": "DELETE", "path": "/cards/{card_id}/checklists/{id}", "pathParameters": ["card_id", "id"], "hasBody": false},
  {"documentation": "/card-checklists/retrieve-card-checklist", "resource": "cardChecklists", "operation": "retrieveCardChecklist", "method": "GET", "path": "/cards/{card_id}/checklists/{id}", "pathParameters": ["card_id", "id"], "hasBody": false},
  {"documentation": "/card-checklists/update-checklist", "resource": "cardChecklists", "operation": "updateChecklist", "method": "PATCH", "path": "/cards/{card_id}/checklists/{id}", "pathParameters": ["card_id", "id"], "hasBody": true},
  {"documentation": "/card-children/add-children", "resource": "cardChildren", "operation": "addChildren", "method": "POST", "path": "/cards/{card_id}/children", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-children/remove-children", "resource": "cardChildren", "operation": "removeChildren", "method": "DELETE", "path": "/cards/{card_id}/children/{id}", "pathParameters": ["card_id", "id"], "hasBody": false},
  {"documentation": "/card-children/retrieve-card-children-list", "resource": "cardChildren", "operation": "retrieveCardChildrenList", "method": "GET", "path": "/cards/{card_id}/children", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-comments/add-comment", "resource": "cardComments", "operation": "addComment", "method": "POST", "path": "/cards/{card_id}/comments", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-comments/remove-comment", "resource": "cardComments", "operation": "removeComment", "method": "DELETE", "path": "/cards/{card_id}/comments/{comment_id}", "pathParameters": ["card_id", "comment_id"], "hasBody": false},
  {"documentation": "/card-comments/retrieve-card-comments", "resource": "cardComments", "operation": "retrieveCardComments", "method": "GET", "path": "/cards/{card_id}/comments", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-comments/update-comment", "resource": "cardComments", "operation": "updateComment", "method": "PATCH", "path": "/cards/{card_id}/comments/{comment_id}", "pathParameters": ["card_id", "comment_id"], "hasBody": true},
  {"documentation": "/card-external-links/add-external-link", "resource": "cardExternalLinks", "operation": "addExternalLink", "method": "POST", "path": "/cards/{card_id}/external-links", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-external-links/remove-external-link", "resource": "cardExternalLinks", "operation": "removeExternalLink", "method": "DELETE", "path": "/cards/{card_id}/external-links/{id}", "pathParameters": ["card_id", "id"], "hasBody": false},
  {"documentation": "/card-external-links/retrieve-card-external-links", "resource": "cardExternalLinks", "operation": "retrieveCardExternalLinks", "method": "GET", "path": "/cards/{card_id}/external-links", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-external-links/update-external-link", "resource": "cardExternalLinks", "operation": "updateExternalLink", "method": "PATCH", "path": "/cards/{card_id}/external-links/{id}", "pathParameters": ["card_id", "id"], "hasBody": true},
  {"documentation": "/card-files/attach-file-to-card", "resource": "cardFiles", "operation": "attachFileToCard", "method": "PUT", "path": "/cards/{card_id}/files", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-files/detach-file-from-card", "resource": "cardFiles", "operation": "detachFileFromCard", "method": "DELETE", "path": "/cards/{card_id}/files/{id}", "pathParameters": ["card_id", "id"], "hasBody": false},
  {"documentation": "/card-files/update-file", "resource": "cardFiles", "operation": "updateFile", "method": "PATCH", "path": "/cards/{card_id}/files/{id}", "pathParameters": ["card_id", "id"], "hasBody": true},
  {"documentation": "/card-members/add-member-to-card", "resource": "cardMembers", "operation": "addMemberToCard", "method": "POST", "path": "/cards/{card_id}/members", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-members/remove-member-from-card", "resource": "cardMembers", "operation": "removeMemberFromCard", "method": "DELETE", "path": "/cards/{card_id}/members/{id}", "pathParameters": ["card_id", "id"], "hasBody": false},
  {"documentation": "/card-members/retrieve-list-of-card-members", "resource": "cardMembers", "operation": "retrieveListOfCardMembers", "method": "GET", "path": "/cards/{card_id}/members", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-members/update-member-role", "resource": "cardMembers", "operation": "updateMemberRole", "method": "PATCH", "path": "/cards/{card_id}/members/{id}", "pathParameters": ["card_id", "id"], "hasBody": true},
  {"documentation": "/card-service-desk-external-recipients/add-new-recipient", "resource": "cardServiceDeskExternalRecipients", "operation": "addNewRecipient", "method": "POST", "path": "/cards/{card_id}/sd-external-recipients", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-service-desk-external-recipients/remove-recipient", "resource": "cardServiceDeskExternalRecipients", "operation": "removeRecipient", "method": "DELETE", "path": "/cards/{card_id}/sd-external-recipients/{email}", "pathParameters": ["card_id", "email"], "hasBody": false},
  {"documentation": "/card-sla/retrieve-card-sla-measurements", "resource": "cardSla", "operation": "retrieveCardSlaMeasurements", "method": "GET", "path": "/cards/{card_id}/sla-rules-measurements", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-tags/add-tag", "resource": "cardTags", "operation": "addTag", "method": "POST", "path": "/cards/{card_id}/tags", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-tags/remove-tag-from-card", "resource": "cardTags", "operation": "removeTagFromCard", "method": "DELETE", "path": "/cards/{card_id}/tags/{tag_id}", "pathParameters": ["card_id", "tag_id"], "hasBody": false},
  {"documentation": "/card-tags/rertrieve-list-of-tags", "resource": "cardTags", "operation": "rertrieveListOfTags", "method": "GET", "path": "/cards/{card_id}/tags", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-time-logs/add-time-log", "resource": "cardTimeLogs", "operation": "addTimeLog", "method": "POST", "path": "/cards/{card_id}/time-logs", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/card-time-logs/get-time-logs", "resource": "cardTimeLogs", "operation": "getTimeLogs", "method": "GET", "path": "/cards/{card_id}/time-logs", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/card-time-logs/remove-time-log", "resource": "cardTimeLogs", "operation": "removeTimeLog", "method": "DELETE", "path": "/cards/{card_id}/time-logs/{id}", "pathParameters": ["card_id", "id"], "hasBody": false},
  {"documentation": "/card-time-logs/update-log-record", "resource": "cardTimeLogs", "operation": "updateLogRecord", "method": "PATCH", "path": "/cards/{card_id}/time-logs/{id}", "pathParameters": ["card_id", "id"], "hasBody": true},
  {"documentation": "/card-type-tree-entities/add-tree-entity-to-card-type", "resource": "cardTypeTreeEntities", "operation": "addTreeEntityToCardType", "method": "POST", "path": "/card-types/{type_id}/tree-entities", "pathParameters": ["type_id"], "hasBody": true},
  {"documentation": "/card-type-tree-entities/delete-tree-entity-from-card-type", "resource": "cardTypeTreeEntities", "operation": "deleteTreeEntityFromCardType", "method": "DELETE", "path": "/card-types/{type_id}/tree-entities/{uid}", "pathParameters": ["type_id", "uid"], "hasBody": false},
  {"documentation": "/card-type-tree-entities/get-list-of-type-tree-entities", "resource": "cardTypeTreeEntities", "operation": "getListOfTypeTreeEntities", "method": "GET", "path": "/card-types/{type_id}/tree-entities", "pathParameters": ["type_id"], "hasBody": false},
  {"documentation": "/card-types/create-new-card-type", "resource": "cardTypes", "operation": "createNewCardType", "method": "POST", "path": "/card-types", "pathParameters": [], "hasBody": true},
  {"documentation": "/card-types/get-card-type", "resource": "cardTypes", "operation": "getCardType", "method": "GET", "path": "/card-types/{id}", "pathParameters": ["id"], "hasBody": false},
  {"documentation": "/card-types/get-list-of-card-types", "resource": "cardTypes", "operation": "getListOfCardTypes", "method": "GET", "path": "/card-types", "pathParameters": [], "hasBody": false},
  {"documentation": "/card-types/remove-card-type", "resource": "cardTypes", "operation": "removeCardType", "method": "DELETE", "path": "/card-types/{id}", "pathParameters": ["id"], "hasBody": true},
  {"documentation": "/card-types/update-card-type", "resource": "cardTypes", "operation": "updateCardType", "method": "PATCH", "path": "/card-types/{id}", "pathParameters": ["id"], "hasBody": true},
  {"documentation": "/cards/batch-update-for-cards", "resource": "cards", "operation": "batchUpdateForCards", "method": "PATCH", "path": "/cards", "pathParameters": [], "hasBody": true},
  {"documentation": "/cards/create-new-card", "resource": "cards", "operation": "createNewCard", "method": "POST", "path": "/cards", "pathParameters": [], "hasBody": true},
  {"documentation": "/cards/delete-card", "resource": "cards", "operation": "deleteCard", "method": "DELETE", "path": "/cards/{card_id}", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/cards/retrieve-card", "resource": "cards", "operation": "retrieveCard", "method": "GET", "path": "/cards/{card_id}", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/cards/retrieve-card-baselines", "resource": "cards", "operation": "retrieveCardBaselines", "method": "GET", "path": "/cards/{card_id}/baselines", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/cards/retrieve-card-list", "resource": "cards", "operation": "retrieveCardList", "method": "GET", "path": "/cards", "pathParameters": [], "hasBody": false},
  {"documentation": "/cards/retrieve-card-location-history", "resource": "cards", "operation": "retrieveCardLocationHistory", "method": "GET", "path": "/cards/{card_id}/location-history", "pathParameters": ["card_id"], "hasBody": false},
  {"documentation": "/cards/update-card", "resource": "cards", "operation": "updateCard", "method": "PATCH", "path": "/cards/{card_id}", "pathParameters": ["card_id"], "hasBody": true},
  {"documentation": "/checklist-items/add-item-to-checklist", "resource": "checklistItems", "operation": "addItemToChecklist", "method": "POST", "path": "/checklists/{checklist_id}/items", "pathParameters": ["checklist_id"], "hasBody": true},
  {"documentation": "/checklist-items/remove-checklist-item", "resource": "checklistItems", "operation": "removeChecklistItem", "method": "DELETE", "path": "/checklists/{checklist_id}/items/{id}", "pathParameters": ["checklist_id", "id"], "hasBody": false},
  {"documentation": "/checklist-items/update-checklist-item", "resource": "checklistItems", "operation": "updateChecklistItem", "method": "PATCH", "path": "/checklists/{checklist_id}/items/{id}", "pathParameters": ["checklist_id", "id"], "hasBody": true},
  {"documentation": "/checklists/retrieve-cards-with-checklist", "resource": "checklists", "operation": "retrieveCardsWithChecklist", "method": "GET", "path": "/checklists/{id}", "pathParameters": ["id"], "hasBody": false},
  {"documentation": "/columns/create-new-column", "resource": "columns", "operation": "createNewColumn", "method": "POST", "path": "/boards/{board_id}/columns", "pathParameters": ["board_id"], "hasBody": true},
  {"documentation": "/columns/get-list-of-columns", "resource": "columns", "operation": "getListOfColumns", "method": "GET", "path": "/boards/{board_id}/columns", "pathParameters": ["board_id"], "hasBody": false},
  {"documentation": "/columns/remove-column", "resource": "columns", "operation": "removeColumn", "method": "DELETE", "path": "/boards/{board_id}/columns/{id}", "pathParameters": ["board_id", "id"], "hasBody": true},
  {"documentation": "/columns/update-column", "resource": "columns", "operation": "updateColumn", "method": "PATCH", "path": "/boards/{board_id}/columns/{id}", "pathParameters": ["board_id", "id"], "hasBody": true},
  {"documentation": "/company-users/get-list-of-users", "resource": "companyUsers", "operation": "getListOfUsers", "method": "GET", "path": "/company/users", "pathParameters": [], "hasBody": false},
  {"documentation": "/company-users/remove-virtual-user", "resource": "companyUsers", "operation": "removeVirtualUser", "method": "DELETE", "path": "/company/users/{id}", "pathParameters": ["id"], "hasBody": false},
  {"documentation": "/company-users/update-user", "resource": "companyUsers", "operation": "updateUser", "method": "PATCH", "path": "/company/users/{id}", "pathParameters": ["id"], "hasBody": true},
  {"documentation": "/custom-directories/create-custom-directory", "resource": "customDirectories", "operation": "createCustomDirectory", "method": "POST", "path": "/company/custom-directories", "pathParameters": [], "hasBody": true},
  {"documentation": "/custom-directories/delete-custom-directory", "resource": "customDirectories", "operation": "deleteCustomDirectory", "method": "DELETE", "path": "/company/custom-directories/{directory_id}", "pathParameters": ["directory_id"], "hasBody": false},
  {"documentation": "/custom-directories/get-custom-directory", "resource": "customDirectories", "operation": "getCustomDirectory", "method": "GET", "path": "/company/custom-directories/{directory_id}", "pathParameters": ["directory_id"], "hasBody": false},
  {"documentation": "/custom-directories/get-list-of-custom-directories", "resource": "customDirectories", "operation": "getListOfCustomDirectories", "method": "GET", "path": "/company/custom-directories", "pathParameters": [], "hasBody": false},
  {"documentation": "/custom-directories/update-custom-directory", "resource": "customDirectories", "operation": "updateCustomDirectory", "method": "PATCH", "path": "/company/custom-directories/{directory_id}", "pathParameters": ["directory_id"], "hasBody": true},
  {"documentation": "/custom-directory-fields/create-field", "resource": "customDirectoryFields", "operation": "createField", "method": "POST", "path": "/company/custom-directories/{directory_id}/fields", "pathParameters": ["directory_id"], "hasBody": true},
  {"documentation": "/custom-directory-fields/delete-field", "resource": "customDirectoryFields", "operation": "deleteField", "method": "DELETE", "path": "/company/custom-directories/{directory_id}/fields/{field_id}", "pathParameters": ["directory_id", "field_id"], "hasBody": false},
  {"documentation": "/custom-directory-fields/get-field", "resource": "customDirectoryFields", "operation": "getField", "method": "GET", "path": "/company/custom-directories/{directory_id}/fields/{field_id}", "pathParameters": ["directory_id", "field_id"], "hasBody": false},
  {"documentation": "/custom-directory-fields/get-list-of-fields", "resource": "customDirectoryFields", "operation": "getListOfFields", "method": "GET", "path": "/company/custom-directories/{directory_id}/fields", "pathParameters": ["directory_id"], "hasBody": false},
  {"documentation": "/custom-directory-fields/update-field", "resource": "customDirectoryFields", "operation": "updateField", "method": "PATCH", "path": "/company/custom-directories/{directory_id}/fields/{field_id}", "pathParameters": ["directory_id", "field_id"], "hasBody": true},
  {"documentation": "/custom-directory-records/create-record", "resource": "customDirectoryRecords", "operation": "createRecord", "method": "POST", "path": "/company/custom-directories/{directory_id}/records", "pathParameters": ["directory_id"], "hasBody": true},
  {"documentation": "/custom-directory-records/delete-record", "resource": "customDirectoryRecords", "operation": "deleteRecord", "method": "DELETE", "path": "/company/custom-directories/{directory_id}/records/{record_id}", "pathParameters": ["directory_id", "record_id"], "hasBody": false},
  {"documentation": "/custom-directory-records/get-cards-linked-to-record", "resource": "customDirectoryRecords", "operation": "getCardsLinkedToRecord", "method": "GET", "path": "/company/custom-directories/{directory_id}/records/{record_id}/cards", "pathParameters": ["directory_id", "record_id"], "hasBody": false},
  {"documentation": "/custom-directory-records/get-list-of-records", "resource": "customDirectoryRecords", "operation": "getListOfRecords", "method": "GET", "path": "/company/custom-directories/{directory_id}/records", "pathParameters": ["directory_id"], "hasBody": false},
  {"documentation": "/custom-directory-records/get-record", "resource": "customDirectoryRecords", "operation": "getRecord", "method": "GET", "path": "/company/custom-directories/{directory_id}/records/{record_id}", "pathParameters": ["directory_id", "record_id"], "hasBody": false},
  {"documentation": "/custom-directory-records/update-record", "resource": "customDirectoryRecords", "operation": "updateRecord", "method": "PATCH", "path": "/company/custom-directories/{directory_id}/records/{record_id}", "pathParameters": ["directory_id", "record_id"], "hasBody": true},
  {"documentation": "/custom-properties/create-new-property", "resource": "customProperties", "operation": "createNewProperty", "method": "POST", "path": "/company/custom-properties", "pathParameters": [], "hasBody": true},
  {"documentation": "/custom-properties/get-list-of-properties", "resource": "customProperties", "operation": "getListOfProperties", "method": "GET", "path": "/company/custom-properties", "pathParameters": [], "hasBody": false},
  {"documentation": "/custom-properties/get-property", "resource": "customProperties", "operation": "getProperty", "method": "GET", "path": "/company/custom-properties/{id}", "pathParameters": ["id"], "hasBody": false},
  {"documentation": "/custom-properties/remove-property", "resource": "customProperties", "operation": "removeProperty", "method": "DELETE", "path": "/company/custom-properties/{id}", "pathParameters": ["id"], "hasBody": false},
  {"documentation": "/custom-properties/update-property", "resource": "customProperties", "operation": "updateProperty", "method": "PATCH", "path": "/company/custom-properties/{id}", "pathParameters": ["id"], "hasBody": true},
  {"documentation": "/custom-property-catalog-values/create-new-catalog-value", "resource": "customPropertyCatalogValues", "operation": "createNewCatalogValue", "method": "POST", "path": "/company/custom-properties/{property_id}/catalog-values", "pathParameters": ["property_id"], "hasBody": true},
  {"documentation": "/custom-property-catalog-values/get-catalog-value", "resource": "customPropertyCatalogValues", "operation": "getCatalogValue", "method": "GET", "path": "/company/custom-properties/{property_id}/catalog-values/{id}", "pathParameters": ["property_id", "id"], "hasBody": false},
  {"documentation": "/custom-property-catalog-values/get-list-of-catalog-values", "resource": "customPropertyCatalogValues", "operation": "getListOfCatalogValues", "method": "GET", "path": "/company/custom-properties/{property_id}/catalog-values", "pathParameters": ["property_id"], "hasBody": false},
  {"documentation": "/custom-property-catalog-values/remove-property", "resource": "customPropertyCatalogValues", "operation": "removeProperty", "method": "DELETE", "path": "/company/custom-properties/{property_id}/catalog-values/{id}", "pathParameters": ["property_id", "id"], "hasBody": false},
  {"documentation": "/custom-property-catalog-values/update-catalog-value", "resource": "customPropertyCatalogValues", "operation": "updateCatalogValue", "method": "PATCH", "path": "/company/custom-properties/{property_id}/catalog-values/{id}", "pathParameters": ["property_id", "id"], "hasBody": true},
  {"documentation": "/custom-property-collective-score-values/create-new-score-value", "resource": "customPropertyCollectiveScoreValues", "operation": "createNewScoreValue", "method": "POST", "path": "/cards/{card_id}/custom-properties/{property_id}/collective-score-values", "pathParameters": ["card_id", "property_id"], "hasBody": true},
  {"documentation": "/custom-property-collective-score-values/get-list-of-score-values", "resource": "customPropertyCollectiveScoreValues", "operation": "getListOfScoreValues", "method": "GET", "path": "/cards/{card_id}/custom-properties/{property_id}/collective-score-values", "pathParameters": ["card_id", "property_id"], "hasBody": false},
  {"documentation": "/custom-property-collective-score-values/update-score-value", "resource": "customPropertyCollectiveScoreValues", "operation": "updateScoreValue", "method": "PATCH", "path": "/cards/{card_id}/custom-properties/{property_id}/collective-score-values/{id}", "pathParameters": ["card_id", "property_id", "id"], "hasBody": true},
  {"documentation": "/custom-property-collective-vote-values/create-new-vote-value", "resource": "customPropertyCollectiveVoteValues", "operation": "createNewVoteValue", "method": "POST", "path": "/cards/{card_id}/custom-properties/{property_id}/collective-vote-values", "pathParameters": ["card_id", "property_id"], "hasBody": true},
  {"documentation": "/custom-property-collective-vote-values/get-list-of-vote-values", "resource": "customPropertyCollectiveVoteValues", "operation": "getListOfVoteValues", "method": "GET", "path": "/cards/{card_id}/custom-properties/{property_id}/collective-vote-values", "pathParameters": ["card_id", "property_id"], "hasBody": false},
  {"documentation": "/custom-property-collective-vote-values/remove-vote-value", "resource": "customPropertyCollectiveVoteValues", "operation": "removeVoteValue", "method": "DELETE", "path": "/cards/{card_id}/custom-properties/{property_id}/collective-vote-values/{id}", "pathParameters": ["card_id", "property_id", "id"], "hasBody": true},
  {"documentation": "/custom-property-collective-vote-values/update-vote-value", "resource": "customPropertyCollectiveVoteValues", "operation": "updateVoteValue", "method": "PATCH", "path": "/cards/{card_id}/custom-properties/{property_id}/collective-vote-values/{id}", "pathParameters": ["card_id", "property_id", "id"], "hasBody": true},
  {"documentation": "/custom-property-select-values/create-new-select-value", "resource": "customPropertySelectValues", "operation": "createNewSelectValue", "method": "POST", "path": "/company/custom-properties/{property_id}/select-values", "pathParameters": ["property_id"], "hasBody": true},
  {"documentation": "/custom-property-select-values/get-list-of-select-values", "resource": "customPropertySelectValues", "operation": "getListOfSelectValues", "method": "GET", "path": "/company/custom-properties/{property_id}/select-values", "pathParameters": ["property_id"], "hasBody": false},
  {"documentation": "/custom-property-select-values/get-select-value", "resource": "customPropertySelectValues", "operation": "getSelectValue", "method": "GET", "path": "/company/custom-properties/{property_id}/select-values/{id}", "pathParameters": ["property_id", "id"], "hasBody": false},
  {"documentation": "/custom-property-select-values/remove-property", "resource": "customPropertySelectValues", "operation": "removeProperty", "method": "DELETE", "path": "/company/custom-properties/{property_id}/select-values/{id}", "pathParameters": ["property_id", "id"], "hasBody": false},
  {"documentation": "/custom-property-select-values/update-select-value", "resource": "customPropertySelectValues", "operation": "updateSelectValue", "method": "PATCH", "path": "/company/custom-properties/{property_id}/select-values/{id}", "pathParameters": ["property_id", "id"], "hasBody": true},
  {"documentation": "/custom-property-tree-entities/add-tree-entity-to-custom-property", "resource": "customPropertyTreeEntities", "operation": "addTreeEntityToCustomProperty", "method": "POST", "path": "/company/custom-properties/{property_id}/tree-entities", "pathParameters": ["property_id"], "hasBody": true},
  {"documentation": "/custom-property-tree-entities/delete-tree-entity-from-custom-property", "resource": "customPropertyTreeEntities", "operation": "deleteTreeEntityFromCustomProperty", "method": "DELETE", "path": "/company/custom-properties/{property_id}/tree-entities/{uid}", "pathParameters": ["property_id", "uid"], "hasBody": false},
  {"documentation": "/custom-property-tree-entities/get-list-of-custom-property-tree-entities", "resource": "customPropertyTreeEntities", "operation": "getListOfCustomPropertyTreeEntities", "method": "GET", "path": "/company/custom-properties/{property_id}/tree-entities", "pathParameters": ["property_id"], "hasBody": false},
  {"documentation": "/document-groups/create-new-document-group", "resource": "documentGroups", "operation": "createNewDocumentGroup", "method": "POST", "path": "/document-groups", "pathParameters": [], "hasBody": true},
  {"documentation": "/document-groups/remove-document-group", "resource": "documentGroups", "operation": "removeDocumentGroup", "method": "DELETE", "path": "/document-groups/{document_group_uid}", "pathParameters": ["document_group_uid"], "hasBody": false},
  {"documentation": "/document-groups/retrieve-document-group", "resource": "documentGroups", "operation": "retrieveDocumentGroup", "method": "GET", "path": "/document-groups/{document_group_uid}", "pathParameters": ["document_group_uid"], "hasBody": false},
  {"documentation": "/document-groups/retrieve-list-of-document-groups", "resource": "documentGroups", "operation": "retrieveListOfDocumentGroups", "method": "GET", "path": "/document-groups", "pathParameters": [], "hasBody": false},
  {"documentation": "/document-groups/update-document-group", "resource": "documentGroups", "operation": "updateDocumentGroup", "method": "PATCH", "path": "/document-groups/{document_group_uid}", "pathParameters": ["document_group_uid"], "hasBody": true},
  {"documentation": "/document-schemas/get-document-data-schema", "resource": "documentSchemas", "operation": "getDocumentDataSchema", "method": "GET", "path": "/document-schemas/{id}", "pathParameters": ["id"], "hasBody": true},
  {"documentation": "/documents/create-new-document", "resource": "documents", "operation": "createNewDocument", "method": "POST", "path": "/documents", "pathParameters": [], "hasBody": true},
  {"documentation": "/documents/remove-document", "resource": "documents", "operation": "removeDocument", "method": "DELETE", "path": "/documents/{document_uid}", "pathParameters": ["document_uid"], "hasBody": false},
  {"documentation": "/documents/retrieve-document", "resource": "documents", "operation": "retrieveDocument", "method": "GET", "path": "/documents/{document_uid}", "pathParameters": ["document_uid"], "hasBody": false},
  {"documentation": "/documents/retrieve-list-of-documents", "resource": "documents", "operation": "retrieveListOfDocuments", "method": "GET", "path": "/documents", "pathParameters": [], "hasBody": false},
  {"documentation": "/documents/update-document", "resource": "documents", "operation": "updateDocument", "method": "PATCH", "path": "/documents/{document_uid}", "pathParameters": ["document_uid"], "hasBody": true},
  {"documentation": "/group-admins/add-admin-to-group", "resource": "groupAdmins", "operation": "addAdminToGroup", "method": "POST", "path": "/groups/{group_uid}/admins", "pathParameters": ["group_uid"], "hasBody": true},
  {"documentation": "/group-admins/get-list-of-group-admins", "resource": "groupAdmins", "operation": "getListOfGroupAdmins", "method": "GET", "path": "/groups/{group_uid}/admins", "pathParameters": ["group_uid"], "hasBody": false},
  {"documentation": "/group-admins/remove-admin-from-group", "resource": "groupAdmins", "operation": "removeAdminFromGroup", "method": "DELETE", "path": "/groups/{group_uid}/admins/{user_id}", "pathParameters": ["group_uid", "user_id"], "hasBody": false},
  {"documentation": "/group-entities/add-entity", "resource": "groupEntities", "operation": "addEntity", "method": "POST", "path": "/company/groups/{group_uid}/entities", "pathParameters": ["group_uid"], "hasBody": true},
  {"documentation": "/group-entities/get-list-of-group-entities", "resource": "groupEntities", "operation": "getListOfGroupEntities", "method": "GET", "path": "/company/groups/{group_uid}/entities", "pathParameters": ["group_uid"], "hasBody": false},
  {"documentation": "/group-entities/remove-entity", "resource": "groupEntities", "operation": "removeEntity", "method": "DELETE", "path": "/company/groups/{group_uid}/entities/{uid}", "pathParameters": ["group_uid", "uid"], "hasBody": false},
  {"documentation": "/group-entities/update-group-entity", "resource": "groupEntities", "operation": "updateGroupEntity", "method": "PATCH", "path": "/company/groups/{group_uid}/entities/{uid}", "pathParameters": ["group_uid", "uid"], "hasBody": true},
  {"documentation": "/group-users/add-user-to-group", "resource": "groupUsers", "operation": "addUserToGroup", "method": "POST", "path": "/groups/{group_uid}/users", "pathParameters": ["group_uid"], "hasBody": true},
  {"documentation": "/group-users/get-list-of-group-users", "resource": "groupUsers", "operation": "getListOfGroupUsers", "method": "GET", "path": "/groups/{group_uid}/users", "pathParameters": ["group_uid"], "hasBody": false},
  {"documentation": "/group-users/remove-user-from-group", "resource": "groupUsers", "operation": "removeUserFromGroup", "method": "DELETE", "path": "/groups/{group_uid}/users/{user_id}", "pathParameters": ["group_uid", "user_id"], "hasBody": false},
  {"documentation": "/groups/create-group", "resource": "groups", "operation": "createGroup", "method": "POST", "path": "/company/groups", "pathParameters": [], "hasBody": true},
  {"documentation": "/groups/get-group", "resource": "groups", "operation": "getGroup", "method": "GET", "path": "/company/groups/{uid}", "pathParameters": ["uid"], "hasBody": false},
  {"documentation": "/groups/get-list-of-groups", "resource": "groups", "operation": "getListOfGroups", "method": "GET", "path": "/company/groups", "pathParameters": [], "hasBody": false},
  {"documentation": "/groups/remove-group", "resource": "groups", "operation": "removeGroup", "method": "DELETE", "path": "/company/groups/{uid}", "pathParameters": ["uid"], "hasBody": false},
  {"documentation": "/groups/update-group", "resource": "groups", "operation": "updateGroup", "method": "PATCH", "path": "/company/groups/{uid}", "pathParameters": ["uid"], "hasBody": true},
  {"documentation": "/iterations/add-card-to-iteration", "resource": "iterations", "operation": "addCardToIteration", "method": "POST", "path": "/spaces/{space_uid}/iterations/{iteration_id}/cards", "pathParameters": ["space_uid", "iteration_id"], "hasBody": true},
  {"documentation": "/iterations/create-iteration", "resource": "iterations", "operation": "createIteration", "method": "POST", "path": "/spaces/{space_uid}/iterations", "pathParameters": ["space_uid"], "hasBody": true},
  {"documentation": "/iterations/delete-iteration", "resource": "iterations", "operation": "deleteIteration", "method": "DELETE", "path": "/spaces/{space_uid}/iterations/{id}", "pathParameters": ["space_uid", "id"], "hasBody": true},
  {"documentation": "/iterations/get-card-iterations-history", "resource": "iterations", "operation": "getCardIterationsHistory", "method": "GET", "path": "/cards/{card_uid}/iterations-history", "pathParameters": ["card_uid"], "hasBody": false},
  {"documentation": "/iterations/get-iteration", "resource": "iterations", "operation": "getIteration", "method": "GET", "path": "/spaces/{space_uid}/iterations/{id}", "pathParameters": ["space_uid", "id"], "hasBody": false},
  {"documentation": "/iterations/remove-card-from-iteration", "resource": "iterations", "operation": "removeCardFromIteration", "method": "DELETE", "path": "/spaces/{space_uid}/iterations/{iteration_id}/cards/{uid}", "pathParameters": ["space_uid", "iteration_id", "uid"], "hasBody": false},
  {"documentation": "/iterations/retrieve-cards-in-iteration", "resource": "iterations", "operation": "retrieveCardsInIteration", "method": "GET", "path": "/spaces/{space_uid}/iterations/{iteration_id}/cards", "pathParameters": ["space_uid", "iteration_id"], "hasBody": false},
  {"documentation": "/iterations/retrieve-list-of-iterations", "resource": "iterations", "operation": "retrieveListOfIterations", "method": "GET", "path": "/spaces/{space_uid}/iterations", "pathParameters": ["space_uid"], "hasBody": false},
  {"documentation": "/iterations/update-iteration", "resource": "iterations", "operation": "updateIteration", "method": "PATCH", "path": "/spaces/{space_uid}/iterations/{id}", "pathParameters": ["space_uid", "id"], "hasBody": true},
  {"documentation": "/lanes/create-new-lane", "resource": "lanes", "operation": "createNewLane", "method": "POST", "path": "/boards/{board_id}/lanes", "pathParameters": ["board_id"], "hasBody": true},
  {"documentation": "/lanes/get-list-of-lanes", "resource": "lanes", "operation": "getListOfLanes", "method": "GET", "path": "/boards/{board_id}/lanes", "pathParameters": ["board_id"], "hasBody": false},
  {"documentation": "/lanes/remove-lane", "resource": "lanes", "operation": "removeLane", "method": "DELETE", "path": "/boards/{board_id}/lanes/{id}", "pathParameters": ["board_id", "id"], "hasBody": true},
  {"documentation": "/lanes/update-lane", "resource": "lanes", "operation": "updateLane", "method": "PATCH", "path": "/boards/{board_id}/lanes/{id}", "pathParameters": ["board_id", "id"], "hasBody": true},
  {"documentation": "/restricted-access-card-files/attach-file-to-card", "resource": "restrictedAccessCardFiles", "operation": "attachFileToCard", "method": "POST", "path": "/cards/{card_uid}/files", "pathParameters": ["card_uid"], "hasBody": true},
  {"documentation": "/restricted-access-card-files/delete-card-file", "resource": "restrictedAccessCardFiles", "operation": "deleteCardFile", "method": "DELETE", "path": "/cards/{card_uid}/files/{id}", "pathParameters": ["card_uid", "id"], "hasBody": false},
  {"documentation": "/restricted-access-card-files/get-card-file", "resource": "restrictedAccessCardFiles", "operation": "getCardFile", "method": "GET", "path": "/cards/{card_uid}/files/{id}", "pathParameters": ["card_uid", "id"], "hasBody": false},
  {"documentation": "/restricted-access-card-files/update-card-file", "resource": "restrictedAccessCardFiles", "operation": "updateCardFile", "method": "PATCH", "path": "/cards/{card_uid}/files/{id}", "pathParameters": ["card_uid", "id"], "hasBody": true},
  {"documentation": "/restricted-access-comment-files/attach-file-to-comment", "resource": "restrictedAccessCommentFiles", "operation": "attachFileToComment", "method": "POST", "path": "/cards/{card_uid}/comments/{comment_uid}/files", "pathParameters": ["card_uid", "comment_uid"], "hasBody": true},
  {"documentation": "/restricted-access-comment-files/delete-comment-file", "resource": "restrictedAccessCommentFiles", "operation": "deleteCommentFile", "method": "DELETE", "path": "/cards/{card_uid}/comments/{comment_uid}/files/{id}", "pathParameters": ["card_uid", "comment_uid", "id"], "hasBody": false},
  {"documentation": "/restricted-access-comment-files/get-comment-file", "resource": "restrictedAccessCommentFiles", "operation": "getCommentFile", "method": "GET", "path": "/cards/{card_uid}/comments/{comment_uid}/files/{id}", "pathParameters": ["card_uid", "comment_uid", "id"], "hasBody": false},
  {"documentation": "/restricted-access-comment-files/update-comment-file", "resource": "restrictedAccessCommentFiles", "operation": "updateCommentFile", "method": "PATCH", "path": "/cards/{card_uid}/comments/{comment_uid}/files/{id}", "pathParameters": ["card_uid", "comment_uid", "id"], "hasBody": true},
  {"documentation": "/restricted-access-custom-property-files/attach-file-to-custom-property", "resource": "restrictedAccessCustomPropertyFiles", "operation": "attachFileToCustomProperty", "method": "POST", "path": "/cards/{card_uid}/custom-properties/{property_uid}/files", "pathParameters": ["card_uid", "property_uid"], "hasBody": true},
  {"documentation": "/restricted-access-custom-property-files/delete-custom-property-file", "resource": "restrictedAccessCustomPropertyFiles", "operation": "deleteCustomPropertyFile", "method": "DELETE", "path": "/cards/{card_uid}/custom-properties/{property_uid}/files/{id}", "pathParameters": ["card_uid", "property_uid", "id"], "hasBody": false},
  {"documentation": "/restricted-access-custom-property-files/get-custom-property-file", "resource": "restrictedAccessCustomPropertyFiles", "operation": "getCustomPropertyFile", "method": "GET", "path": "/cards/{card_uid}/custom-properties/{property_uid}/files/{id}", "pathParameters": ["card_uid", "property_uid", "id"], "hasBody": false},
  {"documentation": "/restricted-access-custom-property-files/update-custom-property-file", "resource": "restrictedAccessCustomPropertyFiles", "operation": "updateCustomPropertyFile", "method": "PATCH", "path": "/cards/{card_uid}/custom-properties/{property_uid}/files/{id}", "pathParameters": ["card_uid", "property_uid", "id"], "hasBody": true},
  {"documentation": "/service-desk-services/retrieve-services-list", "resource": "serviceDeskServices", "operation": "retrieveServicesList", "method": "GET", "path": "/service-desk/services", "pathParameters": [], "hasBody": false},
  {"documentation": "/space-boards/create-new-board", "resource": "spaceBoards", "operation": "createNewBoard", "method": "POST", "path": "/spaces/{space_id}/boards", "pathParameters": ["space_id"], "hasBody": true},
  {"documentation": "/space-boards/get-board", "resource": "spaceBoards", "operation": "getBoard", "method": "GET", "path": "/spaces/{space_id}/boards/{id}", "pathParameters": ["space_id", "id"], "hasBody": false},
  {"documentation": "/space-boards/get-list-of-boards", "resource": "spaceBoards", "operation": "getListOfBoards", "method": "GET", "path": "/spaces/{space_id}/boards", "pathParameters": ["space_id"], "hasBody": false},
  {"documentation": "/space-boards/remove-board", "resource": "spaceBoards", "operation": "removeBoard", "method": "DELETE", "path": "/spaces/{space_id}/boards/{id}", "pathParameters": ["space_id", "id"], "hasBody": true},
  {"documentation": "/space-boards/update-board", "resource": "spaceBoards", "operation": "updateBoard", "method": "PATCH", "path": "/spaces/{space_id}/boards/{id}", "pathParameters": ["space_id", "id"], "hasBody": true},
  {"documentation": "/space-template-checklist-items/create-new-space-template-checklist-item", "resource": "spaceTemplateChecklistItems", "operation": "createNewSpaceTemplateChecklistItem", "method": "POST", "path": "/spaces/{space_uid}/template-checklists/{template_checklist_uid}/items", "pathParameters": ["space_uid", "template_checklist_uid"], "hasBody": true},
  {"documentation": "/space-template-checklist-items/remove-space-template-checklist-item", "resource": "spaceTemplateChecklistItems", "operation": "removeSpaceTemplateChecklistItem", "method": "DELETE", "path": "/spaces/{space_uid}/template-checklists/{template_checklist_uid}/items/{item_uid}", "pathParameters": ["space_uid", "template_checklist_uid", "item_uid"], "hasBody": false},
  {"documentation": "/space-template-checklist-items/update-space-template-checklist-item", "resource": "spaceTemplateChecklistItems", "operation": "updateSpaceTemplateChecklistItem", "method": "PATCH", "path": "/spaces/{space_uid}/template-checklists/{template_checklist_uid}/items/{item_uid}", "pathParameters": ["space_uid", "template_checklist_uid", "item_uid"], "hasBody": true},
  {"documentation": "/space-template-checklist/create-new-space-template-checklist", "resource": "spaceTemplateChecklist", "operation": "createNewSpaceTemplateChecklist", "method": "POST", "path": "/spaces/{space_uid}/template-checklists", "pathParameters": ["space_uid"], "hasBody": true},
  {"documentation": "/space-template-checklist/get-list-of-space-template-checklists", "resource": "spaceTemplateChecklist", "operation": "getListOfSpaceTemplateChecklists", "method": "GET", "path": "/spaces/{space_uid}/template-checklists", "pathParameters": ["space_uid"], "hasBody": false},
  {"documentation": "/space-template-checklist/remove-space-template-checklist", "resource": "spaceTemplateChecklist", "operation": "removeSpaceTemplateChecklist", "method": "DELETE", "path": "/spaces/{space_uid}/template-checklists/{template_checklist_uid}", "pathParameters": ["space_uid", "template_checklist_uid"], "hasBody": false},
  {"documentation": "/space-template-checklist/update-space-template-checklist", "resource": "spaceTemplateChecklist", "operation": "updateSpaceTemplateChecklist", "method": "PATCH", "path": "/spaces/{space_uid}/template-checklists/{template_checklist_uid}", "pathParameters": ["space_uid", "template_checklist_uid"], "hasBody": true},
  {"documentation": "/space-users/change-user-role-and-notification-settings", "resource": "spaceUsers", "operation": "changeUserRoleAndNotificationSettings", "method": "PATCH", "path": "/spaces/{space_id}/users/{id}", "pathParameters": ["space_id", "id"], "hasBody": true},
  {"documentation": "/space-users/get-list-of-users", "resource": "spaceUsers", "operation": "getListOfUsers", "method": "GET", "path": "/spaces/{space_id}/users", "pathParameters": ["space_id"], "hasBody": false},
  {"documentation": "/space-users/get-user", "resource": "spaceUsers", "operation": "getUser", "method": "GET", "path": "/spaces/{space_id}/users/{id}", "pathParameters": ["space_id", "id"], "hasBody": false},
  {"documentation": "/space-users/invite-user-to-space", "resource": "spaceUsers", "operation": "inviteUserToSpace", "method": "POST", "path": "/spaces/{space_id}/users", "pathParameters": ["space_id"], "hasBody": true},
  {"documentation": "/space-users/remove-user-from-space", "resource": "spaceUsers", "operation": "removeUserFromSpace", "method": "DELETE", "path": "/spaces/{space_id}/users/{id}", "pathParameters": ["space_id", "id"], "hasBody": false},
  {"documentation": "/spaces/create-new-space", "resource": "spaces", "operation": "createNewSpace", "method": "POST", "path": "/spaces", "pathParameters": [], "hasBody": true},
  {"documentation": "/spaces/remove-space", "resource": "spaces", "operation": "removeSpace", "method": "DELETE", "path": "/spaces/{space_id}", "pathParameters": ["space_id"], "hasBody": false},
  {"documentation": "/spaces/retrieve-list-of-spaces", "resource": "spaces", "operation": "retrieveListOfSpaces", "method": "GET", "path": "/spaces", "pathParameters": [], "hasBody": false},
  {"documentation": "/spaces/retrieve-space", "resource": "spaces", "operation": "retrieveSpace", "method": "GET", "path": "/spaces/{space_id}", "pathParameters": ["space_id"], "hasBody": false},
  {"documentation": "/spaces/update-space", "resource": "spaces", "operation": "updateSpace", "method": "PATCH", "path": "/spaces/{space_id}", "pathParameters": ["space_id"], "hasBody": true},
  {"documentation": "/sprints/get-sprint-summary", "resource": "sprints", "operation": "getSprintSummary", "method": "GET", "path": "/sprints/{id}", "pathParameters": ["id"], "hasBody": false},
  {"documentation": "/sprints/get-sprints-list", "resource": "sprints", "operation": "getSprintsList", "method": "GET", "path": "/sprints", "pathParameters": [], "hasBody": false},
  {"documentation": "/subcolumn/create-new-subcolumn", "resource": "subcolumn", "operation": "createNewSubcolumn", "method": "POST", "path": "/columns/{column_id}/subcolumns", "pathParameters": ["column_id"], "hasBody": true},
  {"documentation": "/subcolumn/get-list-of-subcolumns", "resource": "subcolumn", "operation": "getListOfSubcolumns", "method": "GET", "path": "/columns/{column_id}/subcolumns", "pathParameters": ["column_id"], "hasBody": false},
  {"documentation": "/subcolumn/remove-subcolumn", "resource": "subcolumn", "operation": "removeSubcolumn", "method": "DELETE", "path": "/columns/{column_id}/subcolumns/{id}", "pathParameters": ["column_id", "id"], "hasBody": true},
  {"documentation": "/subcolumn/update-subcolumn", "resource": "subcolumn", "operation": "updateSubcolumn", "method": "PATCH", "path": "/columns/{column_id}/subcolumns/{id}", "pathParameters": ["column_id", "id"], "hasBody": true},
  {"documentation": "/tags/add-tag", "resource": "tags", "operation": "addTag", "method": "POST", "path": "/tags", "pathParameters": [], "hasBody": true},
  {"documentation": "/tags/retrieve-list-of-tags", "resource": "tags", "operation": "retrieveListOfTags", "method": "GET", "path": "/tags", "pathParameters": [], "hasBody": false},
  {"documentation": "/timesheet/get-list", "resource": "timesheet", "operation": "getList", "method": "GET", "path": "/time-logs", "pathParameters": [], "hasBody": false},
  {"documentation": "/tree-entities/get-list-of-entities", "resource": "treeEntities", "operation": "getListOfEntities", "method": "GET", "path": "/tree-entities", "pathParameters": [], "hasBody": false},
  {"documentation": "/tree-entity-roles/get-list-of-tree-entity-roles", "resource": "treeEntityRoles", "operation": "getListOfTreeEntityRoles", "method": "GET", "path": "/tree-entity-roles", "pathParameters": [], "hasBody": false},
  {"documentation": "/user-roles/create-user-role", "resource": "userRoles", "operation": "createUserRole", "method": "POST", "path": "/user-roles", "pathParameters": [], "hasBody": true},
  {"documentation": "/user-roles/get-list-of-user-roles", "resource": "userRoles", "operation": "getListOfUserRoles", "method": "GET", "path": "/user-roles", "pathParameters": [], "hasBody": false},
  {"documentation": "/user-roles/get-user-role", "resource": "userRoles", "operation": "getUserRole", "method": "GET", "path": "/user-roles/{role_id}", "pathParameters": ["role_id"], "hasBody": false},
  {"documentation": "/user-roles/remove-user-role", "resource": "userRoles", "operation": "removeUserRole", "method": "DELETE", "path": "/user-roles/{role_id}", "pathParameters": ["role_id"], "hasBody": true},
  {"documentation": "/user-roles/update-user-role", "resource": "userRoles", "operation": "updateUserRole", "method": "PATCH", "path": "/user-roles/{role_id}", "pathParameters": ["role_id"], "hasBody": true},
  {"documentation": "/users/retrieve-current-user", "resource": "users", "operation": "retrieveCurrentUser", "method": "GET", "path": "/users/current", "pathParameters": [], "hasBody": false},
  {"documentation": "/users/retrieve-list-of-users", "resource": "users", "operation": "retrieveListOfUsers", "method": "GET", "path": "/users", "pathParameters": [], "hasBody": false},
  {"documentation": "/users/update-user", "resource": "users", "operation": "updateUser", "method": "PATCH", "path": "/users/{id}", "pathParameters": ["id"], "hasBody": true},
] as const;
