import type {
  UserSummary,
  ColumnSummary,
  LaneSummary,
  BoardSummary,
  BoardCardProperty,
} from '../entities.ts';
import type {
  CustomPropertyValues,
  JsonValue,
  RequireAtLeastOne,
} from '../types.ts';
import type {HttpTransport, OperationOptions} from '../http.ts';

import {pathSegment} from '../http.ts';

export interface BoardsGetBoardResponse {
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: {
    limits: {lane_id?: number; column_id?: number; limit?: number}[];
  } | null;
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
  card_properties: BoardCardProperty[] | null;
  columns: ColumnSummary[];
  lanes: LaneSummary[];
  cards: JsonValue[];
  cards_deprecation_message?: string;
}

export type BoardsGetBoardParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['boards']['getBoard']
>;

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

export type ColumnsCreateNewColumnParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['columns']['createNewColumn']
>;

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
  subcolumns: ColumnSummary[];
  uid?: string;
  locked?: string | null;
}[];

export type ColumnsGetListOfColumnsParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['columns']['getListOfColumns']
>;

export interface ColumnsRemoveColumnBody {
  force?: boolean;
}

export interface ColumnsRemoveColumnResponse {
  id: number;
}

export type ColumnsRemoveColumnParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['columns']['removeColumn']
>;

export type ColumnsUpdateColumnBody = RequireAtLeastOne<
  {
    external_id?: number | string | null;
    title?: string;
    sort_order?: number;
    type?: 1 | 2 | 3;
    wip_limit?: number | null;
    wip_limit_type?: 1 | 2;
    last_moved_warning_after_days?: number;
    last_moved_warning_after_hours?: number;
    last_moved_warning_after_minutes?: number;
    col_count?: number;
    archive_after_days?: number;
    months_to_hide_cards?: number | null;
    card_hide_after_days?: number | null;
    rules?: number;
    default_tags?: string | null;
    prev_column_id?: number | null;
    next_column_id?: number | null;
    pause_sla?: boolean;
  },
  | 'last_moved_warning_after_minutes'
  | 'last_moved_warning_after_hours'
  | 'last_moved_warning_after_days'
  | 'title'
  | 'external_id'
  | 'sort_order'
  | 'type'
  | 'wip_limit'
  | 'wip_limit_type'
  | 'col_count'
  | 'archive_after_days'
  | 'months_to_hide_cards'
  | 'card_hide_after_days'
  | 'rules'
  | 'default_tags'
  | 'prev_column_id'
  | 'next_column_id'
  | 'pause_sla'
>;

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

export type ColumnsUpdateColumnParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['columns']['updateColumn']
>;

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

export type LanesCreateNewLaneParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['lanes']['createNewLane']
>;

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

export type LanesGetListOfLanesParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['lanes']['getListOfLanes']
>;

export interface LanesRemoveLaneBody {
  force?: boolean;
}

export interface LanesRemoveLaneResponse {
  id: number;
}

export type LanesRemoveLaneParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['lanes']['removeLane']
>;

export type LanesUpdateLaneBody = RequireAtLeastOne<
  {
    title?: string;
    sort_order?: number;
    wip_limit?: number | null;
    wip_limit_type?: 1 | 2;
    last_moved_warning_after_days?: number;
    last_moved_warning_after_hours?: number;
    last_moved_warning_after_minutes?: number;
    row_count?: number;
    default_tags?: string | null;
    default_card_type_id?: number | null;
    condition?: 1 | 2;
  },
  | 'last_moved_warning_after_minutes'
  | 'last_moved_warning_after_hours'
  | 'last_moved_warning_after_days'
  | 'title'
  | 'sort_order'
  | 'wip_limit'
  | 'wip_limit_type'
  | 'row_count'
  | 'default_tags'
  | 'default_card_type_id'
  | 'condition'
>;

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

export type LanesUpdateLaneParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['lanes']['updateLane']
>;

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
  cell_wip_limits: {
    limits: {lane_id?: number; column_id?: number; limit?: number}[];
  } | null;
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
  card_properties: BoardCardProperty[] | Record<string, JsonValue> | null;
  columns: ColumnSummary[];
  lanes: LaneSummary[];
  top: number;
  left: number;
  sort_order: number;
}

export type SpaceBoardsCreateNewBoardParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaceBoards']['createNewBoard']
>;

export interface SpaceBoardsGetBoardResponse {
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: {
    limits: {lane_id?: number; column_id?: number; limit?: number}[];
  } | null;
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
  card_properties: BoardCardProperty[] | null;
  columns: ColumnSummary[];
  lanes: LaneSummary[];
  cards: {
    id: number;
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
    parent_checklist_ids: number[] | null;
    children_ids: number[] | null;
    parents_ids: number[] | null;
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
    last_moved_at: string;
    lane_changed_at: string;
    column_changed_at: string;
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
    share_settings: Record<string, JsonValue> | null;
    share_id: string | null;
    external_user_emails: string | null;
    description_filled: boolean;
    estimate_workload: number;
    type: {
      id: number;
      name: string;
      color: number;
      letter: string;
      company_id: number;
      archived: boolean;
      properties: CustomPropertyValues | null;
    };
    owner: {
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
  };
  space_id: number;
  board_id: number;
  top: number;
  left: number;
  sort_order: number;
  cards_deprecation_message?: string;
}

export type SpaceBoardsGetBoardParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaceBoards']['getBoard']
>;

export type SpaceBoardsGetListOfBoardsResponse = {
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: {
    limits: {lane_id?: number; column_id?: number; limit?: number}[];
  } | null;
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
  card_properties: BoardCardProperty[] | Record<string, JsonValue> | null;
  columns: ColumnSummary[];
  lanes: LaneSummary[];
  space_id: number;
  board_id: number;
  top: number;
  left: number;
  sort_order: number;
  type: number;
}[];

export type SpaceBoardsGetListOfBoardsParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaceBoards']['getListOfBoards']
>;

export interface SpaceBoardsRemoveBoardBody {
  force?: boolean;
}

export interface SpaceBoardsRemoveBoardResponse {
  id: number;
}

export type SpaceBoardsRemoveBoardParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaceBoards']['removeBoard']
>;

export type SpaceBoardsUpdateBoardBody = RequireAtLeastOne<
  {
    title?: string | number;
    description?: string | null;
    top?: number;
    left?: number;
    type?: 1 | 5;
    cell_wip_limits?: unknown[];
    default_card_type_id?: number;
    default_tags?: string | null;
    first_image_is_cover?: boolean;
    reset_lane_spent_time?: boolean;
    automove_cards?: boolean;
    backward_moves_enabled?: boolean;
    move_parents_to_done?: boolean;
    hide_done_policies?: boolean;
    hide_done_policies_in_done_column?: boolean;
    sort_order?: number;
    external_id?: number | string | null;
    move_from_space_id?: number;
    auto_assign_enabled?: boolean;
    card_properties?:
      | {
          key?: string;
          required?: boolean;
          laneIds?: unknown[] | null;
          columnIds?: unknown[] | null;
          cardTypeIds?: unknown[] | null;
        }[]
      | null;
  },
  | 'title'
  | 'external_id'
  | 'description'
  | 'top'
  | 'left'
  | 'type'
  | 'cell_wip_limits'
  | 'default_card_type_id'
  | 'default_tags'
  | 'first_image_is_cover'
  | 'reset_lane_spent_time'
  | 'automove_cards'
  | 'backward_moves_enabled'
  | 'move_parents_to_done'
  | 'hide_done_policies'
  | 'hide_done_policies_in_done_column'
  | 'auto_assign_enabled'
  | 'move_from_space_id'
  | 'card_properties'
>;

export interface SpaceBoardsUpdateBoardResponse {
  created: string;
  updated: string;
  id: number;
  title: string;
  cell_wip_limits: {
    limits: {lane_id?: number; column_id?: number; limit?: number}[];
  } | null;
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
  card_properties: BoardCardProperty[] | null;
  columns: ColumnSummary[];
  lanes: LaneSummary[];
  top: number;
  left: number;
  sort_order: number;
}

export type SpaceBoardsUpdateBoardParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaceBoards']['updateBoard']
>;

export type SpaceUsersChangeUserRoleAndNotificationSettingsBody =
  RequireAtLeastOne<
    {
      role_id?: string;
      notifications_enabled?: boolean;
      space_group_id?: number | null;
      settings?: Record<string, JsonValue>;
    },
    'role_id' | 'space_group_id'
  >;

export interface SpaceUsersChangeUserRoleAndNotificationSettingsResponse {
  entity_uid: string;
  access_mod: string;
  own_role_ids: string[];
  own_access_mod: string;
  own_role: number;
  user_id: number;
  id: number;
}

export type SpaceUsersChangeUserRoleAndNotificationSettingsParams = Parameters<
  ReturnType<
    typeof createWorkspaceResources
  >['spaceUsers']['changeUserRoleAndNotificationSettings']
>;

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

export type SpaceUsersGetListOfUsersParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaceUsers']['getListOfUsers']
>;

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

export type SpaceUsersGetUserParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaceUsers']['getUser']
>;

export interface SpaceUsersInviteUserToSpaceBody {
  email: string;
  role_id?: string;
  guest?: boolean;
  operator_comment?: string;
  send_email?: boolean;
}

export interface SpaceUsersInviteUserToSpaceResponse {
  user: UserSummary;
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

export type SpaceUsersInviteUserToSpaceParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaceUsers']['inviteUserToSpace']
>;

export interface SpaceUsersRemoveUserFromSpaceResponse {
  entity_uid: string;
  access_mod: JsonValue;
  own_role_ids: unknown;
  own_access_mod: JsonValue;
  own_role: JsonValue;
  user_id: number;
}

export type SpaceUsersRemoveUserFromSpaceParams = Parameters<
  ReturnType<
    typeof createWorkspaceResources
  >['spaceUsers']['removeUserFromSpace']
>;

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
  allowed_card_type_ids: number[] | null;
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
  users: UserSummary[];
}

export type SpacesCreateNewSpaceParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaces']['createNewSpace']
>;

export interface SpacesRemoveSpaceResponse {
  id: number;
}

export type SpacesRemoveSpaceParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaces']['removeSpace']
>;

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
  allowed_card_type_ids: number[] | null;
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
  boards: BoardSummary[];
  user_id: number;
  entity_uid: string;
  access_mod: string;
}[];

export type SpacesRetrieveListOfSpacesParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaces']['retrieveListOfSpaces']
>;

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
  allowed_card_type_ids: number[] | null;
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

export type SpacesRetrieveSpaceParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaces']['retrieveSpace']
>;

export type SpacesUpdateSpaceBody = RequireAtLeastOne<
  {
    title?: string | number;
    external_id?: number | string | null;
    hidden_card_type_uids?: string[];
    settings?: Record<string, JsonValue>;
    access?: 'for_everyone' | 'by_invite';
    parent_entity_uid?: string | null;
    sort_order?: number;
  },
  'title' | 'external_id' | 'hidden_card_type_uids'
>;

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
  allowed_card_type_ids: number[] | null;
  hidden_card_type_uids: unknown[] | null;
  external_id: string | null;
  settings: Record<string, unknown> | null;
}

export type SpacesUpdateSpaceParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['spaces']['updateSpace']
>;

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

export type SubcolumnCreateNewSubcolumnParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['subcolumn']['createNewSubcolumn']
>;

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

export type SubcolumnGetListOfSubcolumnsParams = Parameters<
  ReturnType<
    typeof createWorkspaceResources
  >['subcolumn']['getListOfSubcolumns']
>;

export interface SubcolumnRemoveSubcolumnBody {
  force?: boolean;
}

export interface SubcolumnRemoveSubcolumnResponse {
  id: number;
}

export type SubcolumnRemoveSubcolumnParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['subcolumn']['removeSubcolumn']
>;

export type SubcolumnUpdateSubcolumnBody = RequireAtLeastOne<
  {
    external_id?: number | string | null;
    title?: string;
    sort_order?: number;
    type?: 1 | 2 | 3;
    archive_after_days?: number;
    months_to_hide_cards?: number | null;
    card_hide_after_days?: number | null;
    col_count?: number;
    rules?: number;
    default_tags?: string | null;
    last_moved_warning_after_minutes?: number;
    last_moved_warning_after_hours?: number;
    last_moved_warning_after_days?: number;
    prev_column_id?: number | null;
    next_column_id?: number | null;
    pause_sla?: boolean;
  },
  | 'title'
  | 'external_id'
  | 'sort_order'
  | 'type'
  | 'col_count'
  | 'rules'
  | 'archive_after_days'
  | 'months_to_hide_cards'
  | 'card_hide_after_days'
  | 'default_tags'
  | 'last_moved_warning_after_minutes'
  | 'last_moved_warning_after_hours'
  | 'last_moved_warning_after_days'
  | 'prev_column_id'
  | 'next_column_id'
  | 'pause_sla'
>;

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

export type SubcolumnUpdateSubcolumnParams = Parameters<
  ReturnType<typeof createWorkspaceResources>['subcolumn']['updateSubcolumn']
>;

export const createWorkspaceResources = (transport: HttpTransport) => ({
  boards: {
    /** @see https://developers.kaiten.ru/boards/get-board */
    getBoard: (boardId: number, options?: OperationOptions) => {
      return transport.request<BoardsGetBoardResponse>({
        method: 'GET',
        path: '/boards/' + pathSegment(boardId),
        signal: options?.signal,
      });
    },
  },
  columns: {
    /** @see https://developers.kaiten.ru/columns/create-new-column */
    createNewColumn: (
      boardId: number,
      body: ColumnsCreateNewColumnBody,
      options?: OperationOptions,
    ) => {
      return transport.request<ColumnsCreateNewColumnResponse>({
        method: 'POST',
        path: '/boards/' + pathSegment(boardId) + '/columns',
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/get-list-of-columns */
    getListOfColumns: (boardId: number, options?: OperationOptions) => {
      return transport.request<ColumnsGetListOfColumnsResponse>({
        method: 'GET',
        path: '/boards/' + pathSegment(boardId) + '/columns',
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/remove-column */
    removeColumn: (
      boardId: number,
      columnId: number,
      force?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<ColumnsRemoveColumnResponse>({
        method: 'DELETE',
        path:
          '/boards/' +
          pathSegment(boardId) +
          '/columns/' +
          pathSegment(columnId),
        body: force === undefined ? undefined : {force},
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/columns/update-column */
    updateColumn: (
      boardId: number,
      columnId: number,
      body: ColumnsUpdateColumnBody,
      options?: OperationOptions,
    ) => {
      return transport.request<ColumnsUpdateColumnResponse>({
        method: 'PATCH',
        path:
          '/boards/' +
          pathSegment(boardId) +
          '/columns/' +
          pathSegment(columnId),
        body,
        signal: options?.signal,
      });
    },
  },
  lanes: {
    /** @see https://developers.kaiten.ru/lanes/create-new-lane */
    createNewLane: (
      boardId: number,
      body: LanesCreateNewLaneBody,
      options?: OperationOptions,
    ) => {
      return transport.request<LanesCreateNewLaneResponse>({
        method: 'POST',
        path: '/boards/' + pathSegment(boardId) + '/lanes',
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/get-list-of-lanes */
    getListOfLanes: (
      boardId: number,
      condition?: string,
      options?: OperationOptions,
    ) => {
      return transport.request<LanesGetListOfLanesResponse>({
        method: 'GET',
        path: '/boards/' + pathSegment(boardId) + '/lanes',
        query: {condition},
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/remove-lane */
    removeLane: (
      boardId: number,
      laneId: number,
      force?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<LanesRemoveLaneResponse>({
        method: 'DELETE',
        path:
          '/boards/' + pathSegment(boardId) + '/lanes/' + pathSegment(laneId),
        body: force === undefined ? undefined : {force},
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/lanes/update-lane */
    updateLane: (
      boardId: number,
      laneId: number,
      body: LanesUpdateLaneBody,
      options?: OperationOptions,
    ) => {
      return transport.request<LanesUpdateLaneResponse>({
        method: 'PATCH',
        path:
          '/boards/' + pathSegment(boardId) + '/lanes/' + pathSegment(laneId),
        body,
        signal: options?.signal,
      });
    },
  },
  subcolumn: {
    /** @see https://developers.kaiten.ru/subcolumn/create-new-subcolumn */
    createNewSubcolumn: (
      columnId: number,
      body: SubcolumnCreateNewSubcolumnBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SubcolumnCreateNewSubcolumnResponse>({
        method: 'POST',
        path: '/columns/' + pathSegment(columnId) + '/subcolumns',
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/get-list-of-subcolumns */
    getListOfSubcolumns: (columnId: number, options?: OperationOptions) => {
      return transport.request<SubcolumnGetListOfSubcolumnsResponse>({
        method: 'GET',
        path: '/columns/' + pathSegment(columnId) + '/subcolumns',
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/remove-subcolumn */
    removeSubcolumn: (
      columnId: number,
      subcolumnId: number,
      force?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<SubcolumnRemoveSubcolumnResponse>({
        method: 'DELETE',
        path:
          '/columns/' +
          pathSegment(columnId) +
          '/subcolumns/' +
          pathSegment(subcolumnId),
        body: force === undefined ? undefined : {force},
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/subcolumn/update-subcolumn */
    updateSubcolumn: (
      columnId: number,
      subcolumnId: number,
      body: SubcolumnUpdateSubcolumnBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SubcolumnUpdateSubcolumnResponse>({
        method: 'PATCH',
        path:
          '/columns/' +
          pathSegment(columnId) +
          '/subcolumns/' +
          pathSegment(subcolumnId),
        body,
        signal: options?.signal,
      });
    },
  },
  spaceBoards: {
    /** @see https://developers.kaiten.ru/space-boards/create-new-board */
    createNewBoard: (
      spaceId: number,
      body: SpaceBoardsCreateNewBoardBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceBoardsCreateNewBoardResponse>({
        method: 'POST',
        path: '/spaces/' + pathSegment(spaceId) + '/boards',
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/get-board */
    getBoard: (spaceId: number, id: number, options?: OperationOptions) => {
      return transport.request<SpaceBoardsGetBoardResponse>({
        method: 'GET',
        path: '/spaces/' + pathSegment(spaceId) + '/boards/' + pathSegment(id),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/get-list-of-boards */
    getListOfBoards: (spaceId: number, options?: OperationOptions) => {
      return transport.request<SpaceBoardsGetListOfBoardsResponse>({
        method: 'GET',
        path: '/spaces/' + pathSegment(spaceId) + '/boards',
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/remove-board */
    removeBoard: (
      spaceId: number,
      id: number,
      force?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceBoardsRemoveBoardResponse>({
        method: 'DELETE',
        path: '/spaces/' + pathSegment(spaceId) + '/boards/' + pathSegment(id),
        body: force === undefined ? undefined : {force},
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-boards/update-board */
    updateBoard: (
      spaceId: number,
      id: number,
      body: SpaceBoardsUpdateBoardBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceBoardsUpdateBoardResponse>({
        method: 'PATCH',
        path: '/spaces/' + pathSegment(spaceId) + '/boards/' + pathSegment(id),
        body,
        signal: options?.signal,
      });
    },
  },
  spaceUsers: {
    /** @see https://developers.kaiten.ru/space-users/change-user-role-and-notification-settings */
    changeUserRoleAndNotificationSettings: (
      spaceId: number,
      id: number,
      body: SpaceUsersChangeUserRoleAndNotificationSettingsBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceUsersChangeUserRoleAndNotificationSettingsResponse>(
        {
          method: 'PATCH',
          path: '/spaces/' + pathSegment(spaceId) + '/users/' + pathSegment(id),
          body,
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-users/get-list-of-users */
    getListOfUsers: (
      spaceId: number,
      query?: SpaceUsersGetListOfUsersQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceUsersGetListOfUsersResponse>({
        method: 'GET',
        path: '/spaces/' + pathSegment(spaceId) + '/users',
        query,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/get-user */
    getUser: (spaceId: number, id: number, options?: OperationOptions) => {
      return transport.request<SpaceUsersGetUserResponse>({
        method: 'GET',
        path: '/spaces/' + pathSegment(spaceId) + '/users/' + pathSegment(id),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/invite-user-to-space */
    inviteUserToSpace: (
      spaceId: number,
      body: SpaceUsersInviteUserToSpaceBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceUsersInviteUserToSpaceResponse>({
        method: 'POST',
        path: '/spaces/' + pathSegment(spaceId) + '/users',
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/space-users/remove-user-from-space */
    removeUserFromSpace: (
      spaceId: number,
      id: number,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceUsersRemoveUserFromSpaceResponse>({
        method: 'DELETE',
        path: '/spaces/' + pathSegment(spaceId) + '/users/' + pathSegment(id),
        signal: options?.signal,
      });
    },
  },
  spaces: {
    /** @see https://developers.kaiten.ru/spaces/create-new-space */
    createNewSpace: (
      body: SpacesCreateNewSpaceBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SpacesCreateNewSpaceResponse>({
        method: 'POST',
        path: '/spaces',
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/remove-space */
    removeSpace: (spaceId: number, options?: OperationOptions) => {
      return transport.request<SpacesRemoveSpaceResponse>({
        method: 'DELETE',
        path: '/spaces/' + pathSegment(spaceId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/retrieve-list-of-spaces */
    retrieveListOfSpaces: (
      limit?: number,
      offset?: number,
      options?: OperationOptions,
    ) => {
      return transport.request<SpacesRetrieveListOfSpacesResponse>({
        method: 'GET',
        path: '/spaces',
        query: {limit, offset},
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/retrieve-space */
    retrieveSpace: (spaceId: number, options?: OperationOptions) => {
      return transport.request<SpacesRetrieveSpaceResponse>({
        method: 'GET',
        path: '/spaces/' + pathSegment(spaceId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/spaces/update-space */
    updateSpace: (
      spaceId: number,
      body: SpacesUpdateSpaceBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SpacesUpdateSpaceResponse>({
        method: 'PATCH',
        path: '/spaces/' + pathSegment(spaceId),
        body,
        signal: options?.signal,
      });
    },
  },
});
