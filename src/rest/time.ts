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
  updater_id: number;
  time_spent: number;
  for_date: string;
  comment: string | null;
}

export interface CardTimeLogsAddTimeLogParams extends OperationOptions {
  card_id: number;
  body: CardTimeLogsAddTimeLogBody;
  signal?: AbortSignal;
}

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
  updater_id: number;
  time_spent: number;
  for_date: string;
  comment: string | null;
  role: string | number;
  user: string | number;
  author: string | number;
}[];

export interface CardTimeLogsGetTimeLogsParams extends OperationOptions {
  card_id: number;
  query?: CardTimeLogsGetTimeLogsQuery;
  signal?: AbortSignal;
}

export interface CardTimeLogsRemoveTimeLogResponse {
  id: number;
}

export interface CardTimeLogsRemoveTimeLogParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardTimeLogsUpdateLogRecordBody = unknown;

export interface CardTimeLogsUpdateLogRecordResponse {
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
}

export interface CardTimeLogsUpdateLogRecordParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardTimeLogsUpdateLogRecordBody;
  signal?: AbortSignal;
}

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

export interface IterationsAddCardToIterationParams extends OperationOptions {
  space_uid: string;
  iteration_id: string;
  body: IterationsAddCardToIterationBody;
  signal?: AbortSignal;
}

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

export interface IterationsCreateIterationParams extends OperationOptions {
  space_uid: string;
  body: IterationsCreateIterationBody;
  signal?: AbortSignal;
}

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
  moved_cards: string | number;
  created: string;
  updated: string;
}

export interface IterationsDeleteIterationParams extends OperationOptions {
  space_uid: string;
  id: string;
  body?: IterationsDeleteIterationBody;
  signal?: AbortSignal;
}

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
}[];

export interface IterationsGetCardIterationsHistoryParams extends OperationOptions {
  card_uid: string;
  query?: IterationsGetCardIterationsHistoryQuery;
  signal?: AbortSignal;
}

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
  data: number;
  created: string;
  updated: string;
}

export interface IterationsGetIterationParams extends OperationOptions {
  space_uid: string;
  id: string;
  signal?: AbortSignal;
}

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

export interface IterationsRemoveCardFromIterationParams extends OperationOptions {
  space_uid: string;
  iteration_id: string;
  uid: string;
  signal?: AbortSignal;
}

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

export interface IterationsRetrieveCardsInIterationParams extends OperationOptions {
  space_uid: string;
  iteration_id: string;
  query?: IterationsRetrieveCardsInIterationQuery;
  signal?: AbortSignal;
}

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
  data: number;
  created: string;
  updated: string;
  cards?: string | number;
}[];

export interface IterationsRetrieveListOfIterationsParams extends OperationOptions {
  space_uid: string;
  query?: IterationsRetrieveListOfIterationsQuery;
  signal?: AbortSignal;
}

export type IterationsUpdateIterationBody = unknown;

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
  data: number;
  created: string;
  updated: string;
  moved_cards?: string | number;
}

export interface IterationsUpdateIterationParams extends OperationOptions {
  space_uid: string;
  id: string;
  body: IterationsUpdateIterationBody;
  signal?: AbortSignal;
}

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
  cards: string | number;
  cardUpdates: string | number;
  customProperties: unknown[];
}

export interface SprintsGetSprintSummaryParams extends OperationOptions {
  id: number;
  query?: SprintsGetSprintSummaryQuery;
  signal?: AbortSignal;
}

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

export interface SprintsGetSprintsListParams extends OperationOptions {
  query?: SprintsGetSprintsListQuery;
  signal?: AbortSignal;
}

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
      id_74: {
        count: number;
        emoji: string;
        userIds: number[];
      }[];
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
      card_properties: {
        key: string;
        laneIds: unknown[];
        required: boolean;
        cardTypeIds: unknown[];
      }[];
      spaces: {
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
}[];

export interface TimesheetGetListParams extends OperationOptions {
  query?: TimesheetGetListQuery;
  signal?: AbortSignal;
}

export const createTimeResources = (transport: HttpTransport) => ({
  cardTimeLogs: {
    /** @see https://developers.kaiten.ru/card-time-logs/add-time-log */
    addTimeLog: (params: CardTimeLogsAddTimeLogParams) => {
      return transport.request<CardTimeLogsAddTimeLogResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(params.card_id) + "/time-logs",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/get-time-logs */
    getTimeLogs: (params: CardTimeLogsGetTimeLogsParams) => {
      return transport.request<CardTimeLogsGetTimeLogsResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/time-logs",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/remove-time-log */
    removeTimeLog: (params: CardTimeLogsRemoveTimeLogParams) => {
      return transport.request<CardTimeLogsRemoveTimeLogResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/time-logs/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-time-logs/update-log-record */
    updateLogRecord: (params: CardTimeLogsUpdateLogRecordParams) => {
      return transport.request<CardTimeLogsUpdateLogRecordResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/time-logs/" +
          pathSegment(params.id),
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
        method: "POST",
        path:
          "/spaces/" +
          pathSegment(params.space_uid) +
          "/iterations/" +
          pathSegment(params.iteration_id) +
          "/cards",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/create-iteration */
    createIteration: (params: IterationsCreateIterationParams) => {
      return transport.request<IterationsCreateIterationResponse>({
        method: "POST",
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/delete-iteration */
    deleteIteration: (params: IterationsDeleteIterationParams) => {
      return transport.request<IterationsDeleteIterationResponse>({
        method: "DELETE",
        path:
          "/spaces/" +
          pathSegment(params.space_uid) +
          "/iterations/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/get-card-iterations-history */
    getCardIterationsHistory: (
      params: IterationsGetCardIterationsHistoryParams,
    ) => {
      return transport.request<IterationsGetCardIterationsHistoryResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_uid) + "/iterations-history",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/get-iteration */
    getIteration: (params: IterationsGetIterationParams) => {
      return transport.request<IterationsGetIterationResponse>({
        method: "GET",
        path:
          "/spaces/" +
          pathSegment(params.space_uid) +
          "/iterations/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/remove-card-from-iteration */
    removeCardFromIteration: (
      params: IterationsRemoveCardFromIterationParams,
    ) => {
      return transport.request<IterationsRemoveCardFromIterationResponse>({
        method: "DELETE",
        path:
          "/spaces/" +
          pathSegment(params.space_uid) +
          "/iterations/" +
          pathSegment(params.iteration_id) +
          "/cards/" +
          pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/retrieve-cards-in-iteration */
    retrieveCardsInIteration: (
      params: IterationsRetrieveCardsInIterationParams,
    ) => {
      return transport.request<IterationsRetrieveCardsInIterationResponse>({
        method: "GET",
        path:
          "/spaces/" +
          pathSegment(params.space_uid) +
          "/iterations/" +
          pathSegment(params.iteration_id) +
          "/cards",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/retrieve-list-of-iterations */
    retrieveListOfIterations: (
      params: IterationsRetrieveListOfIterationsParams,
    ) => {
      return transport.request<IterationsRetrieveListOfIterationsResponse>({
        method: "GET",
        path: "/spaces/" + pathSegment(params.space_uid) + "/iterations",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/iterations/update-iteration */
    updateIteration: (params: IterationsUpdateIterationParams) => {
      return transport.request<IterationsUpdateIterationResponse>({
        method: "PATCH",
        path:
          "/spaces/" +
          pathSegment(params.space_uid) +
          "/iterations/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  sprints: {
    /** @see https://developers.kaiten.ru/sprints/get-sprint-summary */
    getSprintSummary: (params: SprintsGetSprintSummaryParams) => {
      return transport.request<SprintsGetSprintSummaryResponse>({
        method: "GET",
        path: "/sprints/" + pathSegment(params.id),
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/sprints/get-sprints-list */
    getSprintsList: (params: SprintsGetSprintsListParams = {}) => {
      return transport.request<SprintsGetSprintsListResponse>({
        method: "GET",
        path: "/sprints",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  timesheet: {
    /** @see https://developers.kaiten.ru/timesheet/get-list */
    getList: (params: TimesheetGetListParams = {}) => {
      return transport.request<TimesheetGetListResponse>({
        method: "GET",
        path: "/time-logs",
        query: params.query,
        signal: params.signal,
      });
    },
  },
});
