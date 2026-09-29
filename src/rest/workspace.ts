import type { HttpTransport, OperationOptions } from "../http.js";

import { pathSegment } from "../http.js";

export interface BoardsGetBoardResponse {
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
  cards_deprecation_message?: string;
}

export interface BoardsGetBoardParams extends OperationOptions {
  id: number;
  signal?: AbortSignal;
}

export interface ColumnsCreateNewColumnBody {
  external_id?: (number | string) | null;
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
}

export interface ColumnsCreateNewColumnResponse {
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
  uid?: string;
  locked?: string | null;
}

export interface ColumnsCreateNewColumnParams extends OperationOptions {
  board_id: number;
  body: ColumnsCreateNewColumnBody;
  signal?: AbortSignal;
}

export type ColumnsGetListOfColumnsResponse = {
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
  uid?: string;
  locked?: string | null;
}[];

export interface ColumnsGetListOfColumnsParams extends OperationOptions {
  board_id: number;
  signal?: AbortSignal;
}

export interface ColumnsRemoveColumnBody {
  force?: boolean;
}

export interface ColumnsRemoveColumnResponse {
  id: number;
}

export interface ColumnsRemoveColumnParams extends OperationOptions {
  board_id: number;
  id: number;
  body?: ColumnsRemoveColumnBody;
  signal?: AbortSignal;
}

export type ColumnsUpdateColumnBody = unknown;

export interface ColumnsUpdateColumnResponse {
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
  uid?: string;
  locked?: string | null;
}

export interface ColumnsUpdateColumnParams extends OperationOptions {
  board_id: number;
  id: number;
  body: ColumnsUpdateColumnBody;
  signal?: AbortSignal;
}

export interface LanesCreateNewLaneBody {
  title: string;
  sort_order?: number;
  wip_limit?: number;
  wip_limit_type?: 1 | 2;
  last_moved_warning_after_days?: number;
  last_moved_warning_after_hours?: number;
  last_moved_warning_after_minutes?: number;
  row_count?: number;
}

export interface LanesCreateNewLaneResponse {
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
  uid?: string;
  locked?: string | null;
}

export interface LanesCreateNewLaneParams extends OperationOptions {
  board_id: number;
  body: LanesCreateNewLaneBody;
  signal?: AbortSignal;
}

export interface LanesGetListOfLanesQuery {
  condition?: string;
}

export type LanesGetListOfLanesResponse = {
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
  uid?: string;
  locked?: string | null;
}[];

export interface LanesGetListOfLanesParams extends OperationOptions {
  board_id: number;
  query?: LanesGetListOfLanesQuery;
  signal?: AbortSignal;
}

export interface LanesRemoveLaneBody {
  force?: boolean;
}

export interface LanesRemoveLaneResponse {
  id: number;
}

export interface LanesRemoveLaneParams extends OperationOptions {
  board_id: number;
  id: number;
  body?: LanesRemoveLaneBody;
  signal?: AbortSignal;
}

export type LanesUpdateLaneBody = unknown;

export interface LanesUpdateLaneResponse {
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
  uid?: string;
  locked?: string | null;
}

export interface LanesUpdateLaneParams extends OperationOptions {
  board_id: number;
  id: number;
  body: LanesUpdateLaneBody;
  signal?: AbortSignal;
}

export interface SpaceBoardsCreateNewBoardBody {
  title: string | number;
  columns?: {
    title: string;
    sort_order?: number;
    type: 1 | 2 | 3;
    wip_limit?: number;
    col_count?: number;
    archive_after_days?: number;
    months_to_hide_cards?: number | null;
    card_hide_after_days?: number | null;
    rules?: number;
    external_id?: (number | string) | null;
    default_tags?: string | null;
  }[];
  lanes?: {
    title: string;
    sort_order?: number;
    wip_limit?: number;
    row_count?: number;
    default_tags?: string | null;
  }[];
  description?: string | null;
  top?: number;
  left?: number;
  default_card_type_id?: number;
  first_image_is_cover?: boolean;
  reset_lane_spent_time?: boolean;
  automove_cards?: boolean;
  backward_moves_enabled?: boolean;
  auto_assign_enabled?: boolean;
  sort_order?: number;
  external_id?: (number | string) | null;
}

export interface SpaceBoardsCreateNewBoardResponse {
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
}

export interface SpaceBoardsCreateNewBoardParams extends OperationOptions {
  space_id: number;
  body: SpaceBoardsCreateNewBoardBody;
  signal?: AbortSignal;
}

export interface SpaceBoardsGetBoardResponse {
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
  cards_deprecation_message?: string;
}

export interface SpaceBoardsGetBoardParams extends OperationOptions {
  space_id: number;
  id: number;
  signal?: AbortSignal;
}

export type SpaceBoardsGetListOfBoardsResponse = {
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
}[];

export interface SpaceBoardsGetListOfBoardsParams extends OperationOptions {
  space_id: number;
  signal?: AbortSignal;
}

export interface SpaceBoardsRemoveBoardBody {
  force?: boolean;
}

export interface SpaceBoardsRemoveBoardResponse {
  id: number;
}

export interface SpaceBoardsRemoveBoardParams extends OperationOptions {
  space_id: number;
  id: number;
  body?: SpaceBoardsRemoveBoardBody;
  signal?: AbortSignal;
}

export type SpaceBoardsUpdateBoardBody = unknown;

export interface SpaceBoardsUpdateBoardResponse {
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
}

export interface SpaceBoardsUpdateBoardParams extends OperationOptions {
  space_id: number;
  id: number;
  body: SpaceBoardsUpdateBoardBody;
  signal?: AbortSignal;
}

export type SpaceUsersChangeUserRoleAndNotificationSettingsBody = unknown;

export interface SpaceUsersChangeUserRoleAndNotificationSettingsResponse {
  entity_uid: string;
  access_mod: string;
  own_role_ids: string[];
  own_access_mod: string;
  own_role: number;
  user_id: number;
  id: number;
}

export interface SpaceUsersChangeUserRoleAndNotificationSettingsParams extends OperationOptions {
  space_id: number;
  id: number;
  body: SpaceUsersChangeUserRoleAndNotificationSettingsBody;
  signal?: AbortSignal;
}

export interface SpaceUsersGetListOfUsersQuery {
  include_inherited_access?: boolean;
  inactive?: boolean;
  limit?: number;
  last_user_id?: number;
}

export type SpaceUsersGetListOfUsersResponse = {
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
  own_role_ids: string[];
  own_access_mod: string;
  own_role: number;
  current: boolean;
}[];

export interface SpaceUsersGetListOfUsersParams extends OperationOptions {
  space_id: number;
  query?: SpaceUsersGetListOfUsersQuery;
  signal?: AbortSignal;
}

export interface SpaceUsersGetUserResponse {
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
}

export interface SpaceUsersGetUserParams extends OperationOptions {
  space_id: number;
  id: number;
  signal?: AbortSignal;
}

export interface SpaceUsersInviteUserToSpaceBody {
  email: string;
  role_id?: string;
  guest?: boolean;
  operator_comment?: string;
  send_email?: boolean;
}

export interface SpaceUsersInviteUserToSpaceResponse {
  user: string | number;
  access_record: {
    access_mod: string;
    entity_uid: string;
    user_id: number;
    own_role_ids: string[];
    own_access_mod: string;
    own_role: number;
  };
  message: string;
}

export interface SpaceUsersInviteUserToSpaceParams extends OperationOptions {
  space_id: number;
  body: SpaceUsersInviteUserToSpaceBody;
  signal?: AbortSignal;
}

export interface SpaceUsersRemoveUserFromSpaceResponse {
  entity_uid: string;
  access_mod: string;
  own_role_ids: unknown;
  own_access_mod: string;
  own_role: null;
  user_id: number;
}

export interface SpaceUsersRemoveUserFromSpaceParams extends OperationOptions {
  space_id: number;
  id: number;
  signal?: AbortSignal;
}

export interface SpacesCreateNewSpaceBody {
  title: string | number;
  external_id?: (number | string) | null;
  parent_entity_uid?: string;
  for_everyone_access_role_id?: string;
  sort_order?: number;
  work_calendar_id?: string;
}

export interface SpacesCreateNewSpaceResponse {
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
      workDays: number[];
      startHour: number;
      planningUnits: number;
      calculateResourcesBy: number;
    };
  };
  users: string | number;
}

export interface SpacesCreateNewSpaceParams extends OperationOptions {
  body: SpacesCreateNewSpaceBody;
  signal?: AbortSignal;
}

export interface SpacesRemoveSpaceResponse {
  id: number;
}

export interface SpacesRemoveSpaceParams extends OperationOptions {
  space_id: number;
  signal?: AbortSignal;
}

export interface SpacesRetrieveListOfSpacesQuery {
  limit?: number;
  offset?: number;
}

export type SpacesRetrieveListOfSpacesResponse = {
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
      workDays: number[];
      startHour: number;
      planningUnits: number;
      calculateResourcesBy: number;
    };
  };
  boards: string | number;
  user_id: number;
  entity_uid: string;
  access_mod: string;
}[];

export interface SpacesRetrieveListOfSpacesParams extends OperationOptions {
  query?: SpacesRetrieveListOfSpacesQuery;
  signal?: AbortSignal;
}

export interface SpacesRetrieveSpaceResponse {
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
      workDays: number[];
      startHour: number;
      planningUnits: number;
      calculateResourcesBy: number;
    };
  };
}

export interface SpacesRetrieveSpaceParams extends OperationOptions {
  space_id: number;
  signal?: AbortSignal;
}

export type SpacesUpdateSpaceBody = unknown;

export interface SpacesUpdateSpaceResponse {
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
}

export interface SpacesUpdateSpaceParams extends OperationOptions {
  space_id: number;
  body: SpacesUpdateSpaceBody;
  signal?: AbortSignal;
}

export interface SubcolumnCreateNewSubcolumnBody {
  external_id?: (number | string) | null;
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
}

export interface SubcolumnCreateNewSubcolumnResponse {
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
  uid?: string;
  locked?: string | null;
}

export interface SubcolumnCreateNewSubcolumnParams extends OperationOptions {
  column_id: number;
  body: SubcolumnCreateNewSubcolumnBody;
  signal?: AbortSignal;
}

export type SubcolumnGetListOfSubcolumnsResponse = {
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
  uid?: string;
  locked?: string | null;
}[];

export interface SubcolumnGetListOfSubcolumnsParams extends OperationOptions {
  column_id: number;
  signal?: AbortSignal;
}

export interface SubcolumnRemoveSubcolumnBody {
  force?: boolean;
}

export interface SubcolumnRemoveSubcolumnResponse {
  id: number;
}

export interface SubcolumnRemoveSubcolumnParams extends OperationOptions {
  column_id: number;
  id: number;
  body?: SubcolumnRemoveSubcolumnBody;
  signal?: AbortSignal;
}

export type SubcolumnUpdateSubcolumnBody = unknown;

export interface SubcolumnUpdateSubcolumnResponse {
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
  uid?: string;
  locked?: string | null;
}

export interface SubcolumnUpdateSubcolumnParams extends OperationOptions {
  column_id: number;
  id: number;
  body: SubcolumnUpdateSubcolumnBody;
  signal?: AbortSignal;
}

export const createWorkspaceResources = (transport: HttpTransport) => ({
  boards: {
    /** @see https://developers.kaiten.ru/boards/get-board */
    getBoard: (params: BoardsGetBoardParams) => {
      return transport.request<BoardsGetBoardResponse>({
        method: "GET",
        path: "/boards/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
  },
  columns: {
    /** @see https://developers.kaiten.ru/columns/create-new-column */
    createNewColumn: (params: ColumnsCreateNewColumnParams) => {
      return transport.request<ColumnsCreateNewColumnResponse>({
        method: "POST",
        path: "/boards/" + pathSegment(params.board_id) + "/columns",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/get-list-of-columns */
    getListOfColumns: (params: ColumnsGetListOfColumnsParams) => {
      return transport.request<ColumnsGetListOfColumnsResponse>({
        method: "GET",
        path: "/boards/" + pathSegment(params.board_id) + "/columns",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/remove-column */
    removeColumn: (params: ColumnsRemoveColumnParams) => {
      return transport.request<ColumnsRemoveColumnResponse>({
        method: "DELETE",
        path:
          "/boards/" +
          pathSegment(params.board_id) +
          "/columns/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/update-column */
    updateColumn: (params: ColumnsUpdateColumnParams) => {
      return transport.request<ColumnsUpdateColumnResponse>({
        method: "PATCH",
        path:
          "/boards/" +
          pathSegment(params.board_id) +
          "/columns/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  lanes: {
    /** @see https://developers.kaiten.ru/lanes/create-new-lane */
    createNewLane: (params: LanesCreateNewLaneParams) => {
      return transport.request<LanesCreateNewLaneResponse>({
        method: "POST",
        path: "/boards/" + pathSegment(params.board_id) + "/lanes",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/get-list-of-lanes */
    getListOfLanes: (params: LanesGetListOfLanesParams) => {
      return transport.request<LanesGetListOfLanesResponse>({
        method: "GET",
        path: "/boards/" + pathSegment(params.board_id) + "/lanes",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/remove-lane */
    removeLane: (params: LanesRemoveLaneParams) => {
      return transport.request<LanesRemoveLaneResponse>({
        method: "DELETE",
        path:
          "/boards/" +
          pathSegment(params.board_id) +
          "/lanes/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/update-lane */
    updateLane: (params: LanesUpdateLaneParams) => {
      return transport.request<LanesUpdateLaneResponse>({
        method: "PATCH",
        path:
          "/boards/" +
          pathSegment(params.board_id) +
          "/lanes/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  subcolumn: {
    /** @see https://developers.kaiten.ru/subcolumn/create-new-subcolumn */
    createNewSubcolumn: (params: SubcolumnCreateNewSubcolumnParams) => {
      return transport.request<SubcolumnCreateNewSubcolumnResponse>({
        method: "POST",
        path: "/columns/" + pathSegment(params.column_id) + "/subcolumns",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/get-list-of-subcolumns */
    getListOfSubcolumns: (params: SubcolumnGetListOfSubcolumnsParams) => {
      return transport.request<SubcolumnGetListOfSubcolumnsResponse>({
        method: "GET",
        path: "/columns/" + pathSegment(params.column_id) + "/subcolumns",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/remove-subcolumn */
    removeSubcolumn: (params: SubcolumnRemoveSubcolumnParams) => {
      return transport.request<SubcolumnRemoveSubcolumnResponse>({
        method: "DELETE",
        path:
          "/columns/" +
          pathSegment(params.column_id) +
          "/subcolumns/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/update-subcolumn */
    updateSubcolumn: (params: SubcolumnUpdateSubcolumnParams) => {
      return transport.request<SubcolumnUpdateSubcolumnResponse>({
        method: "PATCH",
        path:
          "/columns/" +
          pathSegment(params.column_id) +
          "/subcolumns/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  spaceBoards: {
    /** @see https://developers.kaiten.ru/space-boards/create-new-board */
    createNewBoard: (params: SpaceBoardsCreateNewBoardParams) => {
      return transport.request<SpaceBoardsCreateNewBoardResponse>({
        method: "POST",
        path: "/spaces/" + pathSegment(params.space_id) + "/boards",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/get-board */
    getBoard: (params: SpaceBoardsGetBoardParams) => {
      return transport.request<SpaceBoardsGetBoardResponse>({
        method: "GET",
        path:
          "/spaces/" +
          pathSegment(params.space_id) +
          "/boards/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/get-list-of-boards */
    getListOfBoards: (params: SpaceBoardsGetListOfBoardsParams) => {
      return transport.request<SpaceBoardsGetListOfBoardsResponse>({
        method: "GET",
        path: "/spaces/" + pathSegment(params.space_id) + "/boards",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/remove-board */
    removeBoard: (params: SpaceBoardsRemoveBoardParams) => {
      return transport.request<SpaceBoardsRemoveBoardResponse>({
        method: "DELETE",
        path:
          "/spaces/" +
          pathSegment(params.space_id) +
          "/boards/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/update-board */
    updateBoard: (params: SpaceBoardsUpdateBoardParams) => {
      return transport.request<SpaceBoardsUpdateBoardResponse>({
        method: "PATCH",
        path:
          "/spaces/" +
          pathSegment(params.space_id) +
          "/boards/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  spaceUsers: {
    /** @see https://developers.kaiten.ru/space-users/change-user-role-and-notification-settings */
    changeUserRoleAndNotificationSettings: (
      params: SpaceUsersChangeUserRoleAndNotificationSettingsParams,
    ) => {
      return transport.request<SpaceUsersChangeUserRoleAndNotificationSettingsResponse>(
        {
          method: "PATCH",
          path:
            "/spaces/" +
            pathSegment(params.space_id) +
            "/users/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-users/get-list-of-users */
    getListOfUsers: (params: SpaceUsersGetListOfUsersParams) => {
      return transport.request<SpaceUsersGetListOfUsersResponse>({
        method: "GET",
        path: "/spaces/" + pathSegment(params.space_id) + "/users",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/get-user */
    getUser: (params: SpaceUsersGetUserParams) => {
      return transport.request<SpaceUsersGetUserResponse>({
        method: "GET",
        path:
          "/spaces/" +
          pathSegment(params.space_id) +
          "/users/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/invite-user-to-space */
    inviteUserToSpace: (params: SpaceUsersInviteUserToSpaceParams) => {
      return transport.request<SpaceUsersInviteUserToSpaceResponse>({
        method: "POST",
        path: "/spaces/" + pathSegment(params.space_id) + "/users",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/remove-user-from-space */
    removeUserFromSpace: (params: SpaceUsersRemoveUserFromSpaceParams) => {
      return transport.request<SpaceUsersRemoveUserFromSpaceResponse>({
        method: "DELETE",
        path:
          "/spaces/" +
          pathSegment(params.space_id) +
          "/users/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
  },
  spaces: {
    /** @see https://developers.kaiten.ru/spaces/create-new-space */
    createNewSpace: (params: SpacesCreateNewSpaceParams) => {
      return transport.request<SpacesCreateNewSpaceResponse>({
        method: "POST",
        path: "/spaces",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/remove-space */
    removeSpace: (params: SpacesRemoveSpaceParams) => {
      return transport.request<SpacesRemoveSpaceResponse>({
        method: "DELETE",
        path: "/spaces/" + pathSegment(params.space_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/retrieve-list-of-spaces */
    retrieveListOfSpaces: (params: SpacesRetrieveListOfSpacesParams = {}) => {
      return transport.request<SpacesRetrieveListOfSpacesResponse>({
        method: "GET",
        path: "/spaces",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/retrieve-space */
    retrieveSpace: (params: SpacesRetrieveSpaceParams) => {
      return transport.request<SpacesRetrieveSpaceResponse>({
        method: "GET",
        path: "/spaces/" + pathSegment(params.space_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/update-space */
    updateSpace: (params: SpacesUpdateSpaceParams) => {
      return transport.request<SpacesUpdateSpaceResponse>({
        method: "PATCH",
        path: "/spaces/" + pathSegment(params.space_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
});
