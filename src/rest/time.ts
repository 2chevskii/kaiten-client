import type { IterationReference } from "../entities.js";
import type {
  UserSummary,
  ColumnSummary,
  LaneSummary,
  CardTypeSummary,
  BoardSummary,
  UserRoleSummary,
  CardMemberSummary,
  BoardCardProperty,
} from "../entities.js";
import type {
  CustomPropertyValues,
  JsonValue,
  RequireAtLeastOne,
} from "../types.js";
import type { HttpTransport, OperationOptions } from "../http.js";

import { pathSegment } from "../http.js";

export interface CardTimeLogsAddTimeLogBody {
  role_id: number;
  time_spent: number;
  for_date: string;
  comment?: string;
}

export interface CardTimeLogsAddTimeLogResponse {
  created: string;
  updated: string;
  id: number;
  card_id: number;
  user_id: number;
  role_id: number;
  author_id: number;
  updater_id: number | null;
  time_spent: number;
  for_date: string;
  comment: string | null;
}

export type CardTimeLogsAddTimeLogParams = Parameters<
  ReturnType<typeof createTimeResources>["cardTimeLogs"]["addTimeLog"]
>;

export interface CardTimeLogsGetTimeLogsQuery {
  for_date?: string;
  personal?: boolean;
}

export type CardTimeLogsGetTimeLogsResponse = {
  created: string;
  updated: string;
  id: number;
  card_id: number;
  user_id: number;
  role_id: number;
  author_id: number;
  updater_id: number | null;
  time_spent: number;
  for_date: string;
  comment: string | null;
  role: UserRoleSummary;
  user: UserSummary;
  author: UserSummary;
}[];

export type CardTimeLogsGetTimeLogsParams = Parameters<
  ReturnType<typeof createTimeResources>["cardTimeLogs"]["getTimeLogs"]
>;

export interface CardTimeLogsRemoveTimeLogResponse {
  id: number;
}

export type CardTimeLogsRemoveTimeLogParams = Parameters<
  ReturnType<typeof createTimeResources>["cardTimeLogs"]["removeTimeLog"]
>;

export type CardTimeLogsUpdateLogRecordBody = RequireAtLeastOne<
  {
    role_id?: number;
    time_spent?: number;
    for_date?: string;
    comment?: string;
  },
  "role_id" | "time_spent" | "for_date" | "comment"
>;

export interface CardTimeLogsUpdateLogRecordResponse {
  created: string;
  updated: string;
  id: number;
  card_id: number;
  user_id: number;
  role_id: number;
  author_id: number;
  updater_id: number | null;
  time_spent: number;
  for_date: string;
  comment: string | null;
}

export type CardTimeLogsUpdateLogRecordParams = Parameters<
  ReturnType<typeof createTimeResources>["cardTimeLogs"]["updateLogRecord"]
>;

export interface IterationsAddCardToIterationBody {
  card_uid: string;
}

export interface IterationsAddCardToIterationResponse {
  iteration_id: string;
  card_uid: string;
  added_by_uid: string;
  removed_at: string | null;
  removed_by_uid: string | null;
  sort_order: number;
  created: string;
  updated: string;
}

export type IterationsAddCardToIterationParams = Parameters<
  ReturnType<typeof createTimeResources>["iterations"]["addCardToIteration"]
>;

export interface IterationsCreateIterationBody {
  title: string;
  goal?: string | null;
  start_date?: string | null;
  finish_date?: string | null;
}

export interface IterationsCreateIterationResponse {
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
}

export type IterationsCreateIterationParams = Parameters<
  ReturnType<typeof createTimeResources>["iterations"]["createIteration"]
>;

export interface IterationsDeleteIterationBody {
  new_iteration_id?: string | null;
}

export interface IterationsDeleteIterationResponse {
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
  moved_cards: JsonValue;
  created: string;
  updated: string;
}

export type IterationsDeleteIterationParams = Parameters<
  ReturnType<typeof createTimeResources>["iterations"]["deleteIteration"]
>;

export interface IterationsGetCardIterationsHistoryQuery {
  with_details?: boolean;
}

export type IterationsGetCardIterationsHistoryResponse = {
  iteration_id: string;
  card_uid: string;
  added_by_uid: string;
  removed_at: string | null;
  removed_by_uid: string | null;
  sort_order: number;
  created: string;
  updated: string;
  iteration?: IterationReference | null;
  addedBy?: UserSummary | null;
  removedBy?: UserSummary | null;
}[];

export type IterationsGetCardIterationsHistoryParams = Parameters<
  ReturnType<
    typeof createTimeResources
  >["iterations"]["getCardIterationsHistory"]
>;

export interface IterationsGetIterationResponse {
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
  data: Record<string, JsonValue> | null;
  created: string;
  updated: string;
}

export type IterationsGetIterationParams = Parameters<
  ReturnType<typeof createTimeResources>["iterations"]["getIteration"]
>;

export interface IterationsRemoveCardFromIterationResponse {
  iteration_id: string;
  card_uid: string;
  added_by_uid: string;
  removed_at: string;
  removed_by_uid: string;
  sort_order: number;
  created: string;
  updated: string;
}

export type IterationsRemoveCardFromIterationParams = Parameters<
  ReturnType<
    typeof createTimeResources
  >["iterations"]["removeCardFromIteration"]
>;

export interface IterationsRetrieveCardsInIterationQuery {
  status?: string;
}

export type IterationsRetrieveCardsInIterationResponse = {
  iteration_id: string;
  card_uid: string;
  card_id: number;
  added_by_uid: string;
  removed_at: string | null;
  removed_by_uid: string | null;
  sort_order: number;
  created: string;
  updated: string;
}[];

export type IterationsRetrieveCardsInIterationParams = Parameters<
  ReturnType<
    typeof createTimeResources
  >["iterations"]["retrieveCardsInIteration"]
>;

export interface IterationsRetrieveListOfIterationsQuery {
  status?: string;
  with_data?: string;
  limit?: number;
  offset?: number;
  order?: string;
}

export type IterationsRetrieveListOfIterationsResponse = {
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
  data: Record<string, JsonValue> | null;
  created: string;
  updated: string;
  cards?: string | number;
}[];

export type IterationsRetrieveListOfIterationsParams = Parameters<
  ReturnType<
    typeof createTimeResources
  >["iterations"]["retrieveListOfIterations"]
>;

export type IterationsUpdateIterationBody = RequireAtLeastOne<
  {
    title?: string;
    goal?: string | null;
    status?: "planned" | "active" | "closed";
    start_date?: string | null;
    finish_date?: string | null;
    actual_finish_date?: string | null;
    new_iteration_id?: string | null;
  },
  "title" | "goal" | "status" | "start_date" | "finish_date"
>;

export interface IterationsUpdateIterationResponse {
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
  data: Record<string, JsonValue> | null;
  created: string;
  updated: string;
  moved_cards?: string | number;
}

export type IterationsUpdateIterationParams = Parameters<
  ReturnType<typeof createTimeResources>["iterations"]["updateIteration"]
>;

export interface SprintsGetSprintSummaryQuery {
  exclude_deleted_cards?: boolean;
}

export interface SprintsGetSprintSummaryResponse {
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
    by_members: {
      user_id: number;
      velocity: number;
    }[];
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
  cards: {
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
    first_moved_to_in_progress_at: string;
    last_moved_to_done_at: string;
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
    tag_ids: number[] | null;
    estimate_workload: number;
    uid: string;
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
    parent_checklist_ids: number[] | null;
    children_ids: number[] | null;
    parents_ids: number[] | null;
    fifo_order: number | null;
    counters_recalculated_at: string;
    sd_new_comment: boolean;
    import_id: number | null;
    fts_version: string;
    locked: JsonValue;
    source: string;
    type: CardTypeSummary;
    owner: UserSummary;
    members: CardMemberSummary[];
    has_access_to_space: boolean;
    path_data: {
      lane: LaneSummary;
      board: BoardSummary;
      space: {
        id: number;
        title: string;
      };
      column: ColumnSummary;
    };
    space_id: number;
  }[];
  cardUpdates: {
    id: number;
    sprint_id: number | null;
    created: string;
    updated: string;
    size: number | null;
    size_unit: string | null;
    size_text: string | null;
    properties: CustomPropertyValues | null;
    tag_ids: number[] | null;
    description: string | null;
    board_id: number;
    column_id: number;
    lane_id: number;
    condition: number;
    state: number;
    archived: boolean;
    version: number;
  }[];
  customProperties: unknown[];
}

export type SprintsGetSprintSummaryParams = Parameters<
  ReturnType<typeof createTimeResources>["sprints"]["getSprintSummary"]
>;

export interface SprintsGetSprintsListQuery {
  active?: boolean;
  limit?: number;
  offset?: number;
}

export type SprintsGetSprintsListResponse = {
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
    by_members: {
      user_id: number;
      velocity: number;
    }[];
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
}[];

export type SprintsGetSprintsListParams = Parameters<
  ReturnType<typeof createTimeResources>["sprints"]["getSprintsList"]
>;

export interface TimesheetGetListQuery {
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
}

export type TimesheetGetListResponse = {
  created: string;
  updated: string;
  id: number;
  card_id: number;
  user_id: number;
  role_id: number;
  author_id: number;
  updater_id: number | null;
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
    parent_dod_item_ids: number[] | null;
    children_ids: number[] | null;
    parents_ids: number[] | null;
    blocking_card: boolean;
    blocked: boolean;
    size: number;
    size_unit: string | null;
    size_text: string;
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
    first_moved_to_in_progress_at: string;
    last_moved_to_done_at: string;
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
    type: {
      id: number;
      name: string;
      color: number;
      letter: string;
      company_id: number | null;
      archived: boolean;
      properties: CustomPropertyValues | null;
    };
    board: {
      id: number;
      title: string;
      external_id: string | null;
      card_properties: BoardCardProperty[] | null;
      spaces: {
        id: number;
        title: string;
        external_id: string | null;
        board_id: number;
        space_id: number;
        top: number;
        left: number;
        sort_order: number;
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
  user: UserSummary;
  role: UserRoleSummary;
}[];

export type TimesheetGetListParams = Parameters<
  ReturnType<typeof createTimeResources>["timesheet"]["getList"]
>;

export const createTimeResources = (transport: HttpTransport) => ({
  cardTimeLogs: {
    /** @see https://developers.kaiten.ru/card-time-logs/add-time-log */
    addTimeLog: (
      cardId: number,
      body: CardTimeLogsAddTimeLogBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTimeLogsAddTimeLogResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(cardId) + "/time-logs",
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/get-time-logs */
    getTimeLogs: (
      cardId: number,
      forDate?: string,
      personal?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTimeLogsGetTimeLogsResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(cardId) + "/time-logs",
        query: { for_date: forDate, personal },
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/remove-time-log */
    removeTimeLog: (
      cardId: number,
      timeLogId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTimeLogsRemoveTimeLogResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(cardId) +
          "/time-logs/" +
          pathSegment(timeLogId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/update-log-record */
    updateLogRecord: (
      cardId: number,
      timeLogId: number,
      body: CardTimeLogsUpdateLogRecordBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTimeLogsUpdateLogRecordResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(cardId) +
          "/time-logs/" +
          pathSegment(timeLogId),
        body,
        signal: options?.signal,
      });
    },
  },
  iterations: {
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/add-card-to-iteration */
    addCardToIteration: (
      spaceUid: string,
      iterationId: string,
      cardUid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsAddCardToIterationResponse>({
        method: "POST",
        path:
          "/spaces/" +
          pathSegment(spaceUid) +
          "/iterations/" +
          pathSegment(iterationId) +
          "/cards",
        body: { card_uid: cardUid },
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/create-iteration */
    createIteration: (
      spaceUid: string,
      body: IterationsCreateIterationBody,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsCreateIterationResponse>({
        method: "POST",
        path: "/spaces/" + pathSegment(spaceUid) + "/iterations",
        body,
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/delete-iteration */
    deleteIteration: (
      spaceUid: string,
      id: string,
      newIterationId?: string | null,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsDeleteIterationResponse>({
        method: "DELETE",
        path:
          "/spaces/" + pathSegment(spaceUid) + "/iterations/" + pathSegment(id),
        body:
          newIterationId === undefined
            ? undefined
            : { new_iteration_id: newIterationId },
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/get-card-iterations-history */
    getCardIterationsHistory: (
      cardUid: string,
      withDetails?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsGetCardIterationsHistoryResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(cardUid) + "/iterations-history",
        query: { with_details: withDetails },
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/get-iteration */
    getIteration: (
      spaceUid: string,
      id: string,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsGetIterationResponse>({
        method: "GET",
        path:
          "/spaces/" + pathSegment(spaceUid) + "/iterations/" + pathSegment(id),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/remove-card-from-iteration */
    removeCardFromIteration: (
      spaceUid: string,
      iterationId: string,
      uid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsRemoveCardFromIterationResponse>({
        method: "DELETE",
        path:
          "/spaces/" +
          pathSegment(spaceUid) +
          "/iterations/" +
          pathSegment(iterationId) +
          "/cards/" +
          pathSegment(uid),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/retrieve-cards-in-iteration */
    retrieveCardsInIteration: (
      spaceUid: string,
      iterationId: string,
      status?: string,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsRetrieveCardsInIterationResponse>({
        method: "GET",
        path:
          "/spaces/" +
          pathSegment(spaceUid) +
          "/iterations/" +
          pathSegment(iterationId) +
          "/cards",
        query: { status },
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/retrieve-list-of-iterations */
    retrieveListOfIterations: (
      spaceUid: string,
      query?: IterationsRetrieveListOfIterationsQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsRetrieveListOfIterationsResponse>({
        method: "GET",
        path: "/spaces/" + pathSegment(spaceUid) + "/iterations",
        query,
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/update-iteration */
    updateIteration: (
      spaceUid: string,
      id: string,
      body: IterationsUpdateIterationBody,
      options?: OperationOptions,
    ) => {
      return transport.request<IterationsUpdateIterationResponse>({
        method: "PATCH",
        path:
          "/spaces/" + pathSegment(spaceUid) + "/iterations/" + pathSegment(id),
        body,
        signal: options?.signal,
      });
    },
  },
  sprints: {
    /** @see https://developers.kaiten.ru/sprints/get-sprint-summary */
    getSprintSummary: (
      id: number,
      excludeDeletedCards?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<SprintsGetSprintSummaryResponse>({
        method: "GET",
        path: "/sprints/" + pathSegment(id),
        query: { exclude_deleted_cards: excludeDeletedCards },
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/sprints/get-sprints-list */
    getSprintsList: (
      active?: boolean,
      limit?: number,
      offset?: number,
      options?: OperationOptions,
    ) => {
      return transport.request<SprintsGetSprintsListResponse>({
        method: "GET",
        path: "/sprints",
        query: { active, limit, offset },
        signal: options?.signal,
      });
    },
  },
  timesheet: {
    /** @see https://developers.kaiten.ru/timesheet/get-list */
    getList: (query: TimesheetGetListQuery, options?: OperationOptions) => {
      return transport.request<TimesheetGetListResponse>({
        method: "GET",
        path: "/time-logs",
        query,
        signal: options?.signal,
      });
    },
  },
});
