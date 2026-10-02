import type { BlockedCardSummary } from "../entities.ts";
import type { CardFileSummary } from "../entities.ts";
import type {
  UserSummary,
  ColumnSummary,
  LaneSummary,
  CardSummary,
  CardTypeSummary,
  BoardSummary,
  CardMemberSummary,
  ChecklistSummary,
  CardSlaSummary,
  BoardCardProperty,
  CardTagSummary,
  ExternalLinkSummary,
} from "../entities.ts";
import type {
  CustomPropertyValues,
  JsonValue,
  QueryList,
  RequireAtLeastOne,
} from "../types.ts";
import type { HttpTransport, OperationOptions } from "../http.ts";

import { pathSegment } from "../http.ts";

import type { SearchResponseV2 } from "./search.ts";
import { iterateSearchResults } from "./search.ts";
import { encodeCardFilter } from "../card-filter.ts";
import type { CardFilter } from "../card-filter.ts";

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
  avatar_initials_url: string | null;
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

export type CardAllowedUsersRetrieveUsersListParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardAllowedUsers"]["retrieveUsersList"]
>;

export interface CardBlockerCategoriesAddBlockerCategoryBody {
  name: string;
}

export interface CardBlockerCategoriesAddBlockerCategoryResponse {
  uid: string;
  name: string;
  color: number;
}

export type CardBlockerCategoriesAddBlockerCategoryParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardBlockerCategories"]["addBlockerCategory"]
>;

export interface CardBlockerCategoriesRemoveCategoryResponse {
  uid: string;
}

export type CardBlockerCategoriesRemoveCategoryParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardBlockerCategories"]["removeCategory"]
>;

export type CardBlockerCategoriesRetrieveListOfCategoriesResponse = {
  uid: string;
  name: string;
  color: number;
}[];

export type CardBlockerCategoriesRetrieveListOfCategoriesParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardBlockerCategories"]["retrieveListOfCategories"]
>;

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

export type CardBlockerUsersAddUserToTheCardBlockerParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardBlockerUsers"]["addUserToTheCardBlocker"]
>;

export interface CardBlockerUsersRemoveUserResponse {
  id: number;
}

export type CardBlockerUsersRemoveUserParams = Parameters<
  ReturnType<typeof createCardsResources>["cardBlockerUsers"]["removeUser"]
>;

export interface CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserResponse {
  blocked_cards: BlockedCardSummary[];
  summary: {
    total_blocked: number;
    blocked_by_user: string;
    cards_without_reason: number;
  };
}

export type CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserParams =
  Parameters<
    ReturnType<
      typeof createCardsResources
    >["cardBlockerUsers"]["retrieveBlockersCardsListOnCurrentUser"]
  >;

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

export type CardBlockerUsersRetrieveListOfUsersParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardBlockerUsers"]["retrieveListOfUsers"]
>;

export type CardBlockersBlockCardBody = RequireAtLeastOne<
  {
    reason?: string;
    blocker_card_id?: number;
  },
  "reason" | "blocker_card_id"
>;

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
  blocked_card: CardSummary;
  blocker: UserSummary;
  card: CardSummary;
  uid?: string;
}

export type CardBlockersBlockCardParams = Parameters<
  ReturnType<typeof createCardsResources>["cardBlockers"]["blockCard"]
>;

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
  blocked_card: CardSummary;
  card: CardSummary;
  uid?: string;
  blocker?: string | number;
}

export type CardBlockersDeleteCardBlockersParams = Parameters<
  ReturnType<typeof createCardsResources>["cardBlockers"]["deleteCardBlockers"]
>;

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
  blocked_card: CardSummary;
  blocker: UserSummary;
  card: CardSummary;
  uid?: string;
}[];

export type CardBlockersRetrieveCardBlockersListParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardBlockers"]["retrieveCardBlockersList"]
>;

export type CardBlockersUpdateCardBlockersBody = RequireAtLeastOne<
  {
    reason?: string;
    blocker_card_id?: number;
    due_date?: string | null;
    due_date_time_present?: boolean | null;
  },
  "reason" | "blocker_card_id"
>;

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

export type CardBlockersUpdateCardBlockersParams = Parameters<
  ReturnType<typeof createCardsResources>["cardBlockers"]["updateCardBlockers"]
>;

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
  children_number_properties_sum: number | Record<string, number> | null;
  calculated_planned_start: string | null;
  calculated_planned_end: string | null;
  parent_checklist_ids: unknown[] | null;
  children_ids: number[] | null;
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
  sprint_id: number | null;
  external_id: string | null;
  comments_total: number;
  comment_last_added_at: string | null;
  properties: CustomPropertyValues | null;
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
  type: CardTypeSummary;
  owner: UserSummary;
  description?: string | null;
  counters_recalculated_at?: string;
}

export type CardChildrenAddChildrenParams = Parameters<
  ReturnType<typeof createCardsResources>["cardChildren"]["addChildren"]
>;

export interface CardChildrenRemoveChildrenResponse {
  id: number;
}

export type CardChildrenRemoveChildrenParams = Parameters<
  ReturnType<typeof createCardsResources>["cardChildren"]["removeChildren"]
>;

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
  children_number_properties_sum: number | Record<string, number> | null;
  calculated_planned_start: string | null;
  calculated_planned_end: string | null;
  parent_checklist_ids: unknown[] | null;
  children_ids: number[] | null;
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
  sprint_id: number | null;
  external_id: string | null;
  comments_total: number;
  comment_last_added_at: string | null;
  properties: CustomPropertyValues | null;
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
  type: CardTypeSummary;
  owner: UserSummary;
  board: BoardSummary;
  lane: LaneSummary;
  column: ColumnSummary;
  card_id: number;
  depends_on_card_id: number;
  description?: string | null;
  counters_recalculated_at?: string;
}[];

export type CardChildrenRetrieveCardChildrenListParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardChildren"]["retrieveCardChildrenList"]
>;

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
  email_addresses_to: string | null;
  deleted: boolean;
  internal: boolean;
  sd_external_recipients_cc: string | null;
  sd_description: boolean;
  notification_sent: string | null;
  attacments: {
    created: string;
    updated: string;
    id: number;
    url: string;
    name: string;
    sort_order: number;
    type: number;
    card_id: number;
    comment_id: number;
    author_id: number;
    external: boolean;
    size: number;
    card_cover: boolean;
    deleted: boolean;
  }[];
}

export type CardCommentsAddCommentParams = Parameters<
  ReturnType<typeof createCardsResources>["cardComments"]["addComment"]
>;

export interface CardCommentsRemoveCommentResponse {
  id: number;
}

export type CardCommentsRemoveCommentParams = Parameters<
  ReturnType<typeof createCardsResources>["cardComments"]["removeComment"]
>;

export type CardCommentsRetrieveCardCommentsResponse = {
  created: string;
  update: string;
  id: number;
  uid: string;
  text: string;
  edited: boolean;
  card_id: number;
  author_id: number;
  email_addresses_to: string | null;
  type: number;
  deleted: boolean;
  internal: boolean;
  sd_external_recipients_cc: string | null;
  notification_sent: string | null;
  sent_slack_messages_data: JsonValue;
  sd_description: boolean;
  author: UserSummary;
  updated?: string;
}[];

export type CardCommentsRetrieveCardCommentsParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardComments"]["retrieveCardComments"]
>;

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
  email_addresses_to: string | null;
  deleted: boolean;
  internal: boolean;
  sd_external_recipients_cc: string | null;
  sd_description: boolean;
  notification_sent: string | null;
  attacments: {
    created: string;
    updated: string;
    id: number;
    url: string;
    name: string;
    sort_order: number;
    type: number;
    card_id: number;
    comment_id: number;
    author_id: number;
    external: boolean;
    size: number;
    card_cover: boolean;
    deleted: boolean;
  }[];
}

export type CardCommentsUpdateCommentParams = Parameters<
  ReturnType<typeof createCardsResources>["cardComments"]["updateComment"]
>;

export interface CardExternalLinksAddExternalLinkBody {
  url: string;
  description?: string | null;
}

export interface CardExternalLinksAddExternalLinkResponse {
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string | null;
}

export type CardExternalLinksAddExternalLinkParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardExternalLinks"]["addExternalLink"]
>;

export interface CardExternalLinksRemoveExternalLinkResponse {
  id: number;
}

export type CardExternalLinksRemoveExternalLinkParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardExternalLinks"]["removeExternalLink"]
>;

export type CardExternalLinksRetrieveCardExternalLinksResponse = {
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string | null;
  card_id: number;
  external_link_id: number;
}[];

export type CardExternalLinksRetrieveCardExternalLinksParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardExternalLinks"]["retrieveCardExternalLinks"]
>;

export type CardExternalLinksUpdateExternalLinkBody = RequireAtLeastOne<
  {
    url?: string;
    description?: string | null;
  },
  "url" | "description"
>;

export interface CardExternalLinksUpdateExternalLinkResponse {
  url: string;
  updated: string;
  created: string;
  id: number;
  description: string | null;
}

export type CardExternalLinksUpdateExternalLinkParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardExternalLinks"]["updateExternalLink"]
>;

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

export type CardMembersAddMemberToCardParams = Parameters<
  ReturnType<typeof createCardsResources>["cardMembers"]["addMemberToCard"]
>;

export interface CardMembersRemoveMemberFromCardResponse {
  id: number;
}

export type CardMembersRemoveMemberFromCardParams = Parameters<
  ReturnType<typeof createCardsResources>["cardMembers"]["removeMemberFromCard"]
>;

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

export type CardMembersRetrieveListOfCardMembersParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cardMembers"]["retrieveListOfCardMembers"]
>;

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

export type CardMembersUpdateMemberRoleParams = Parameters<
  ReturnType<typeof createCardsResources>["cardMembers"]["updateMemberRole"]
>;

export interface CardsBatchUpdateForCardsFields {
  board_id?: number;
  column_id?: number;
  lane_id?: number;
  owner_id?: number;
  type_id?: number;
  condition?: 1 | 2;
  attributes?: {
    board_id?: number;
    column_id?: number;
    lane_id?: number;
    owner_id?: number;
    type_id?: number;
    condition?: 1 | 2;
    title?: number | string;
    asap?: boolean;
    due_date?: string | null;
    due_date_time_present?: boolean;
    sort_order?: number;
    description?: number | string | null;
    expires_later?: boolean;
    size_text?: number | string | null;
    service_id?: number | null;
    blocked?: boolean;
    external_id?: number | string | null;
  };
  order_by?: {
    field_type?: "cp" | "size" | "created" | "due_date" | "title";
    id?: number;
    direction?: "asc" | "desc";
  };
}

export type CardsBatchUpdateForCardsBody = CardsBatchUpdateForCardsFields &
  (
    | Required<Pick<CardsBatchUpdateForCardsFields, "board_id" | "attributes">>
    | Required<Pick<CardsBatchUpdateForCardsFields, "column_id" | "attributes">>
    | Required<Pick<CardsBatchUpdateForCardsFields, "lane_id" | "attributes">>
    | Required<Pick<CardsBatchUpdateForCardsFields, "owner_id" | "attributes">>
    | Required<Pick<CardsBatchUpdateForCardsFields, "type_id" | "attributes">>
    | Required<Pick<CardsBatchUpdateForCardsFields, "condition" | "attributes">>
    | Required<
        Pick<
          CardsBatchUpdateForCardsFields,
          "column_id" | "lane_id" | "order_by"
        >
      >
  );

export interface CardsBatchUpdateForCardsResponse {
  id: string;
}

export type CardsBatchUpdateForCardsParams = Parameters<
  ReturnType<typeof createCardsResources>["cards"]["batchUpdateForCards"]
>;

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
  children_number_properties_sum: number | Record<string, number> | null;
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
  properties: CustomPropertyValues | null;
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
  owner: UserSummary;
  type: CardTypeSummary;
  external_links: ExternalLinkSummary[];
  files: CardFileSummary[];
  checklists: ChecklistSummary[];
  calculated_planned_start?: string | null;
  calculated_planned_end?: string | null;
  source?: string | null;
}

export type CardsCreateNewCardParams = Parameters<
  ReturnType<typeof createCardsResources>["cards"]["createNewCard"]
>;

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
  properties: CustomPropertyValues | null;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, unknown> | null;
  external_user_emails: string | null;
  tag_ids: number[] | null;
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
  children_number_properties_sum: number | Record<string, number> | null;
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
  owner: UserSummary;
  members: CardMemberSummary[];
  source?: string | null;
}

export type CardsDeleteCardParams = Parameters<
  ReturnType<typeof createCardsResources>["cards"]["deleteCard"]
>;

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
  properties: CustomPropertyValues | null;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, unknown> | null;
  external_user_emails: string | null;
  tag_ids: number[] | null;
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
  children_number_properties_sum: number | Record<string, number> | null;
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
  board: BoardSummary;
  lane: LaneSummary;
  column: ColumnSummary;
  type: CardTypeSummary;
  checklists: ChecklistSummary[];
  members: CardMemberSummary[];
  blockers: {
    created: string;
    updated: string;
    id: number;
    reason: string;
    card_id: number;
    blocker_id: number;
    blocker_card_id: number | null;
    blocker_card_title: JsonValue;
    released: boolean;
    released_by_id: number | null;
    blocker: UserSummary;
  }[];
  owner: UserSummary;
  slas: CardSlaSummary[];
  blocked_at: string;
  blocker_id: number;
  blocker: UserSummary;
  block_reason: string;
  children: CardSummary[];
  parents: CardSummary[];
  files: CardFileSummary[];
  tags: CardTagSummary[];
  external_links: ExternalLinkSummary[];
  cardRole: number;
  email: string;
  source?: string | null;
}

export type CardsRetrieveCardParams = Parameters<
  ReturnType<typeof createCardsResources>["cards"]["retrieveCard"]
>;

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

export type CardsRetrieveCardBaselinesParams = Parameters<
  ReturnType<typeof createCardsResources>["cards"]["retrieveCardBaselines"]
>;

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
  tag_ids?: QueryList<number>;
  type_ids?: QueryList<number>;
  exclude_board_ids?: QueryList<number>;
  exclude_lane_ids?: QueryList<number>;
  exclude_column_ids?: QueryList<number>;
  column_ids?: QueryList<number>;
  member_ids?: QueryList<number>;
  owner_ids?: QueryList<number>;
  responsible_ids?: QueryList<number>;
  states?: QueryList<1 | 2 | 3>;
  external_id?: string;
  additional_card_fields?: QueryList<"description">;
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
  filter?: string | CardFilter;
  order_by?: QueryList<string>;
  order_direction?: QueryList<"asc" | "desc">;
  is_request?: boolean;
  exclude_owner_ids?: QueryList<number>;
  exclude_card_ids?: QueryList<number>;
  organizations_ids?: QueryList<number>;
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
  children_number_properties_sum: number | Record<string, number> | null;
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
  properties: CustomPropertyValues | null;
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
  owner: UserSummary;
  board: BoardSummary;
  members: CardMemberSummary[];
  column: ColumnSummary;
  lane: LaneSummary;
  type: CardTypeSummary;
  path_data: {
    space: {
      id: number;
      uid: string;
      title: string;
      external_id: string | null;
      company_id: number;
      sort_order: number;
      path: string;
      parent_entity_uid: string | null;
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
      external_id: string | null;
      card_properties: BoardCardProperty[] | null;
      spaces: {
        id: number;
        uid: string;
        title: string;
        external_id: string | null;
        company_id: number;
        sort_order: number;
        path: string;
        parent_entity_uid: string | null;
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
      external_id: string | null;
    };
    column: {
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
    subcolumn: ColumnSummary | null;
  };
  description?: string | null;
  counters_recalculated_at?: string;
  children?: string | number;
  parents?: string | number;
  source?: string | null;
}[];

export type CardsRetrieveCardListParams = Parameters<
  ReturnType<typeof createCardsResources>["cards"]["retrieveCardList"]
>;

export type CardsRetrieveCardLocationHistoryResponse = {
  id: string;
  card_id: number;
  board_id: number;
  column_id: number;
  subcolumn_id: number | null;
  lane_id: number;
  sprint_id: number | null;
  author_id: number;
  author: UserSummary;
  condition: number;
  changed: string;
}[];

export type CardsRetrieveCardLocationHistoryParams = Parameters<
  ReturnType<
    typeof createCardsResources
  >["cards"]["retrieveCardLocationHistory"]
>;

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
  properties: CustomPropertyValues | null;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, unknown> | null;
  external_user_emails: string | null;
  tag_ids: number[] | null;
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
  children_number_properties_sum: number | Record<string, number> | null;
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
  owner: UserSummary;
  members: CardMemberSummary[];
  tags?: string | number;
  source?: string | null;
}

export type CardsUpdateCardParams = Parameters<
  ReturnType<typeof createCardsResources>["cards"]["updateCard"]
>;

export type CardsIterateQuery = Omit<
  CardsRetrieveCardListQuery,
  "version" | "offset"
>;

export type CardsIterateParams = Parameters<
  ReturnType<typeof createCardsResources>["cards"]["iterate"]
>;

export const createCardsResources = (transport: HttpTransport) => {
  const createNewCard = (
    body: CardsCreateNewCardBody,
    options?: OperationOptions,
  ) => {
    return transport.request<CardsCreateNewCardResponse>({
      method: "POST",
      path: "/cards",
      body,
      signal: options?.signal,
    });
  };

  function retrieveCardList(
    query: CardsRetrieveCardListQuery & { version: 2 },
    options?: OperationOptions,
  ): Promise<SearchResponseV2<CardsRetrieveCardListResponse>>;
  function retrieveCardList(
    query?: Omit<CardsRetrieveCardListQuery, "version"> & { version?: 1 },
    options?: OperationOptions,
  ): Promise<CardsRetrieveCardListResponse>;
  function retrieveCardList(
    query: CardsRetrieveCardListQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    | CardsRetrieveCardListResponse
    | SearchResponseV2<CardsRetrieveCardListResponse>
  >;
  function retrieveCardList(
    query?: CardsRetrieveCardListQuery,
    options?: OperationOptions,
  ): Promise<
    | CardsRetrieveCardListResponse
    | SearchResponseV2<CardsRetrieveCardListResponse>
  > {
    return transport.request<
      | CardsRetrieveCardListResponse
      | SearchResponseV2<CardsRetrieveCardListResponse>
    >({
      method: "GET",
      path: "/cards",
      query:
        query?.filter !== undefined && typeof query.filter !== "string"
          ? { ...query, filter: encodeCardFilter(query.filter) }
          : query,
      signal: options?.signal,
    });
  }
  return {
    cardAllowedUsers: {
      /** @see https://developers.kaiten.ru/card-allowed-users/retrieve-users-list */
      retrieveUsersList: (
        cardId: number,
        query?: CardAllowedUsersRetrieveUsersListQuery,
        options?: OperationOptions,
      ) => {
        return transport.request<CardAllowedUsersRetrieveUsersListResponse>({
          method: "GET",
          path: "/cards/" + pathSegment(cardId) + "/allowed-users",
          query,
          signal: options?.signal,
        });
      },
    },
    cardBlockerCategories: {
      /** @see https://developers.kaiten.ru/card-blocker-categories/add-blocker-category */
      addBlockerCategory: (
        blockerId: number,
        name: string,
        options?: OperationOptions,
      ) => {
        return transport.request<CardBlockerCategoriesAddBlockerCategoryResponse>(
          {
            method: "POST",
            path: "/blockers/" + pathSegment(blockerId) + "/categories",
            body: { name },
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/card-blocker-categories/remove-category */
      removeCategory: (
        blockerId: number,
        categoryUuid: string,
        options?: OperationOptions,
      ) => {
        return transport.request<CardBlockerCategoriesRemoveCategoryResponse>({
          method: "DELETE",
          path:
            "/blockers/" +
            pathSegment(blockerId) +
            "/categories/" +
            pathSegment(categoryUuid),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-blocker-categories/retrieve-list-of-categories */
      retrieveListOfCategories: (options?: OperationOptions) => {
        return transport.request<CardBlockerCategoriesRetrieveListOfCategoriesResponse>(
          {
            method: "GET",
            path: "/categories",
            signal: options?.signal,
          },
        );
      },
    },
    cardBlockerUsers: {
      /** @see https://developers.kaiten.ru/card-blocker-users/add-user-to-the-card-blocker */
      addUserToTheCardBlocker: (
        blockerId: number,
        userId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardBlockerUsersAddUserToTheCardBlockerResponse>(
          {
            method: "POST",
            path: "/blockers/" + pathSegment(blockerId) + "/users",
            body: { user_id: userId },
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/card-blocker-users/remove-user */
      removeUser: (
        blockerId: number,
        userId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardBlockerUsersRemoveUserResponse>({
          method: "DELETE",
          path:
            "/blockers/" +
            pathSegment(blockerId) +
            "/users/" +
            pathSegment(userId),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-blocker-users/retrieve-blockers-cards-list-on-current-user */
      retrieveBlockersCardsListOnCurrentUser: (options?: OperationOptions) => {
        return transport.request<CardBlockerUsersRetrieveBlockersCardsListOnCurrentUserResponse>(
          {
            method: "GET",
            path: "/users/current/blockers",
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/card-blocker-users/retrieve-list-of-users */
      retrieveListOfUsers: (blockerId: number, options?: OperationOptions) => {
        return transport.request<CardBlockerUsersRetrieveListOfUsersResponse>({
          method: "GET",
          path: "/blockers/" + pathSegment(blockerId) + "/users",
          signal: options?.signal,
        });
      },
    },
    cardBlockers: {
      /** @see https://developers.kaiten.ru/card-blockers/block-card */
      blockCard: (
        cardId: number,
        body: CardBlockersBlockCardBody,
        options?: OperationOptions,
      ) => {
        return transport.request<CardBlockersBlockCardResponse>({
          method: "POST",
          path: "/cards/" + pathSegment(cardId) + "/blockers",
          body,
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-blockers/delete-card-blockers */
      deleteCardBlockers: (
        cardId: number,
        blockerId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardBlockersDeleteCardBlockersResponse>({
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(cardId) +
            "/blockers/" +
            pathSegment(blockerId),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-blockers/retrieve-card-blockers-list */
      retrieveCardBlockersList: (
        cardId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardBlockersRetrieveCardBlockersListResponse>({
          method: "GET",
          path: "/cards/" + pathSegment(cardId) + "/blockers",
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-blockers/update-card-blockers */
      updateCardBlockers: (
        cardId: number,
        blockerId: number,
        body: CardBlockersUpdateCardBlockersBody,
        options?: OperationOptions,
      ) => {
        return transport.request<CardBlockersUpdateCardBlockersResponse>({
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(cardId) +
            "/blockers/" +
            pathSegment(blockerId),
          body,
          signal: options?.signal,
        });
      },
    },
    cardChildren: {
      /** @see https://developers.kaiten.ru/card-children/add-children */
      addChildren: (
        parentCardId: number,
        childCardId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardChildrenAddChildrenResponse>({
          method: "POST",
          path: "/cards/" + pathSegment(parentCardId) + "/children",
          body: { card_id: childCardId },
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-children/remove-children */
      removeChildren: (
        cardId: number,
        id: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardChildrenRemoveChildrenResponse>({
          method: "DELETE",
          path:
            "/cards/" + pathSegment(cardId) + "/children/" + pathSegment(id),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-children/retrieve-card-children-list */
      retrieveCardChildrenList: (
        cardId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardChildrenRetrieveCardChildrenListResponse>({
          method: "GET",
          path: "/cards/" + pathSegment(cardId) + "/children",
          signal: options?.signal,
        });
      },
    },
    cardComments: {
      /** @see https://developers.kaiten.ru/card-comments/add-comment */
      addComment: (
        cardId: number,
        body: CardCommentsAddCommentBody | FormData,
        options?: OperationOptions,
      ) => {
        return transport.request<CardCommentsAddCommentResponse>({
          method: "POST",
          path: "/cards/" + pathSegment(cardId) + "/comments",
          body,
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-comments/remove-comment */
      removeComment: (
        cardId: number,
        commentId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardCommentsRemoveCommentResponse>({
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(cardId) +
            "/comments/" +
            pathSegment(commentId),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-comments/retrieve-card-comments */
      retrieveCardComments: (cardId: number, options?: OperationOptions) => {
        return transport.request<CardCommentsRetrieveCardCommentsResponse>({
          method: "GET",
          path: "/cards/" + pathSegment(cardId) + "/comments",
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-comments/update-comment */
      updateComment: (
        cardId: number,
        commentId: number,
        body: CardCommentsUpdateCommentBody | FormData,
        options?: OperationOptions,
      ) => {
        return transport.request<CardCommentsUpdateCommentResponse>({
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(cardId) +
            "/comments/" +
            pathSegment(commentId),
          body,
          signal: options?.signal,
        });
      },
    },
    cardExternalLinks: {
      /** @see https://developers.kaiten.ru/card-external-links/add-external-link */
      addExternalLink: (
        cardId: number,
        url: string,
        description?: string | null,
        options?: OperationOptions,
      ) => {
        return transport.request<CardExternalLinksAddExternalLinkResponse>({
          method: "POST",
          path: "/cards/" + pathSegment(cardId) + "/external-links",
          body: { url, description },
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-external-links/remove-external-link */
      removeExternalLink: (
        cardId: number,
        id: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardExternalLinksRemoveExternalLinkResponse>({
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(cardId) +
            "/external-links/" +
            pathSegment(id),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-external-links/retrieve-card-external-links */
      retrieveCardExternalLinks: (
        cardId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardExternalLinksRetrieveCardExternalLinksResponse>(
          {
            method: "GET",
            path: "/cards/" + pathSegment(cardId) + "/external-links",
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/card-external-links/update-external-link */
      updateExternalLink: (
        cardId: number,
        id: number,
        body: CardExternalLinksUpdateExternalLinkBody,
        options?: OperationOptions,
      ) => {
        return transport.request<CardExternalLinksUpdateExternalLinkResponse>({
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(cardId) +
            "/external-links/" +
            pathSegment(id),
          body,
          signal: options?.signal,
        });
      },
    },
    cardMembers: {
      /** @see https://developers.kaiten.ru/card-members/add-member-to-card */
      addMemberToCard: (
        cardId: number,
        userId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardMembersAddMemberToCardResponse>({
          method: "POST",
          path: "/cards/" + pathSegment(cardId) + "/members",
          body: { user_id: userId },
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-members/remove-member-from-card */
      removeMemberFromCard: (
        cardId: number,
        memberId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardMembersRemoveMemberFromCardResponse>({
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(cardId) +
            "/members/" +
            pathSegment(memberId),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-members/retrieve-list-of-card-members */
      retrieveListOfCardMembers: (
        cardId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardMembersRetrieveListOfCardMembersResponse>({
          method: "GET",
          path: "/cards/" + pathSegment(cardId) + "/members",
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-members/update-member-role */
      updateMemberRole: (
        cardId: number,
        memberId: number,
        type: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardMembersUpdateMemberRoleResponse>({
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(cardId) +
            "/members/" +
            pathSegment(memberId),
          body: { type },
          signal: options?.signal,
        });
      },
    },
    cards: {
      /** Lazily iterate version 2 search results using Kaiten's cursor. */
      iterate: (query?: CardsIterateQuery, options?: OperationOptions) => {
        const searchQuery = { ...query, version: 2 as const };
        return iterateSearchResults(
          (position) =>
            retrieveCardList(
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
      /** @see https://developers.kaiten.ru/cards/batch-update-for-cards */
      batchUpdateForCards: (
        body: CardsBatchUpdateForCardsBody,
        options?: OperationOptions,
      ) => {
        return transport.request<CardsBatchUpdateForCardsResponse>({
          method: "PATCH",
          path: "/cards",
          body,
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/cards/create-new-card */
      createNewCard,
      /** @see https://developers.kaiten.ru/cards/delete-card */
      deleteCard: (cardId: number, options?: OperationOptions) => {
        return transport.request<CardsDeleteCardResponse>({
          method: "DELETE",
          path: "/cards/" + pathSegment(cardId),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/cards/retrieve-card */
      retrieveCard: (
        cardId: number,
        brokenApi?: boolean,
        options?: OperationOptions,
      ) => {
        return transport.request<CardsRetrieveCardResponse>({
          method: "GET",
          path: "/cards/" + pathSegment(cardId),
          query: { broken_api: brokenApi },
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/cards/retrieve-card-baselines */
      retrieveCardBaselines: (cardId: number, options?: OperationOptions) => {
        return transport.request<CardsRetrieveCardBaselinesResponse>({
          method: "GET",
          path: "/cards/" + pathSegment(cardId) + "/baselines",
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/cards/retrieve-card-list */
      retrieveCardList,
      /** @see https://developers.kaiten.ru/cards/retrieve-card-location-history */
      retrieveCardLocationHistory: (
        cardId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardsRetrieveCardLocationHistoryResponse>({
          method: "GET",
          path: "/cards/" + pathSegment(cardId) + "/location-history",
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/cards/update-card */
      updateCard: (
        cardId: number,
        body: CardsUpdateCardBody,
        options?: OperationOptions,
      ) => {
        return transport.request<CardsUpdateCardResponse>({
          method: "PATCH",
          path: "/cards/" + pathSegment(cardId),
          body,
          signal: options?.signal,
        });
      },
      create: createNewCard,
    },
  };
};
