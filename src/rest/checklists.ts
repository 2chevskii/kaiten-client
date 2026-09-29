import type { HttpTransport, OperationOptions } from "../http.js";

import { pathSegment } from "../http.js";

export interface CardChecklistItemsAddItemToChecklistBody {
  text: string;
  sort_order?: number;
  checked?: boolean;
  due_date?: string | null;
  responsible_id?: number;
}

export interface CardChecklistItemsAddItemToChecklistResponse {
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
}

export interface CardChecklistItemsAddItemToChecklistParams extends OperationOptions {
  card_id: number;
  checklist_id: number;
  body: CardChecklistItemsAddItemToChecklistBody;
  signal?: AbortSignal;
}

export interface CardChecklistItemsRemoveChecklistItemResponse {
  id: number;
}

export interface CardChecklistItemsRemoveChecklistItemParams extends OperationOptions {
  card_id: number;
  checklist_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardChecklistItemsUpdateChecklistItemBody = unknown;

export interface CardChecklistItemsUpdateChecklistItemResponse {
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
}

export interface CardChecklistItemsUpdateChecklistItemParams extends OperationOptions {
  card_id: number;
  checklist_id: number;
  id: number;
  body: CardChecklistItemsUpdateChecklistItemBody;
  signal?: AbortSignal;
}

export type CardChecklistsAddChecklistToCardBody = unknown;

export interface CardChecklistsAddChecklistToCardResponse {
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
}

export interface CardChecklistsAddChecklistToCardParams extends OperationOptions {
  card_id: number;
  body: CardChecklistsAddChecklistToCardBody;
  signal?: AbortSignal;
}

export interface CardChecklistsRemoveChecklistFromCardResponse {
  id: number;
}

export interface CardChecklistsRemoveChecklistFromCardParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export interface CardChecklistsRetrieveCardChecklistResponse {
  created: string;
  updated: string;
  id: number;
  uid: string;
  fts_version: string;
  name: string;
  policy_id: number | null;
  items: string | number;
}

export interface CardChecklistsRetrieveCardChecklistParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export type CardChecklistsUpdateChecklistBody = unknown;

export interface CardChecklistsUpdateChecklistResponse {
  created: string;
  updated: string;
  id: number;
  name: string;
  policy_id: number | null;
}

export interface CardChecklistsUpdateChecklistParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardChecklistsUpdateChecklistBody;
  signal?: AbortSignal;
}

export interface ChecklistItemsAddItemToChecklistBody {
  text: string;
  sort_order?: number;
  checked?: boolean;
  due_date?: string | null;
  responsible_id?: number;
}

export interface ChecklistItemsAddItemToChecklistResponse {
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
}

export interface ChecklistItemsAddItemToChecklistParams extends OperationOptions {
  checklist_id: number;
  body: ChecklistItemsAddItemToChecklistBody;
  signal?: AbortSignal;
}

export interface ChecklistItemsRemoveChecklistItemResponse {
  id: number;
}

export interface ChecklistItemsRemoveChecklistItemParams extends OperationOptions {
  checklist_id: number;
  id: number;
  signal?: AbortSignal;
}

export type ChecklistItemsUpdateChecklistItemBody = unknown;

export interface ChecklistItemsUpdateChecklistItemResponse {
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
}

export interface ChecklistItemsUpdateChecklistItemParams extends OperationOptions {
  checklist_id: number;
  id: number;
  body: ChecklistItemsUpdateChecklistItemBody;
  signal?: AbortSignal;
}

export interface ChecklistsRetrieveCardsWithChecklistQuery {
  only_shared_cards: boolean;
}

export type ChecklistsRetrieveCardsWithChecklistResponse = {
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
  tag_ids: number[];
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
  tags_ids?: unknown[];
}[];

export interface ChecklistsRetrieveCardsWithChecklistParams extends OperationOptions {
  id: number;
  query?: ChecklistsRetrieveCardsWithChecklistQuery;
  signal?: AbortSignal;
}

export interface SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemBody {
  text: string;
  sort_order?: number;
}

export interface SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemResponse {
  uid: string;
  text: string;
  sort_order: number;
  user_id: number;
  created: string;
  updated: string;
}

export interface SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  body: SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemBody;
  signal?: AbortSignal;
}

export interface SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemResponse {
  uid: string;
}

export interface SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  item_uid: string;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemBody =
  unknown;

export interface SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemResponse {
  uid: string;
  text: string;
  sort_order: number;
  user_id: number;
  created: string;
  updated: string;
}

export interface SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  item_uid: string;
  body: SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemBody;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistCreateNewSpaceTemplateChecklistBody = unknown;

export interface SpaceTemplateChecklistCreateNewSpaceTemplateChecklistResponse {
  uid: string;
  name: string;
  sort_order: number;
  space_uid: string;
  created: string;
  updated: string;
}

export interface SpaceTemplateChecklistCreateNewSpaceTemplateChecklistParams extends OperationOptions {
  space_uid: string;
  body: SpaceTemplateChecklistCreateNewSpaceTemplateChecklistBody;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsResponse = {
  uid: string;
  name: string;
  sort_order: number;
  space_uid: string;
  created: string;
  updated: string;
  items: {
    uid: string;
    text: string;
    sort_order: number;
    user_id: number;
    created: string;
    updated: string;
  }[];
}[];

export interface SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsParams extends OperationOptions {
  space_uid: string;
  signal?: AbortSignal;
}

export interface SpaceTemplateChecklistRemoveSpaceTemplateChecklistResponse {
  uid: string;
}

export interface SpaceTemplateChecklistRemoveSpaceTemplateChecklistParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  signal?: AbortSignal;
}

export type SpaceTemplateChecklistUpdateSpaceTemplateChecklistBody = unknown;

export interface SpaceTemplateChecklistUpdateSpaceTemplateChecklistResponse {
  uid: string;
  name: string;
  sort_order: number;
  space_uid: string;
  created: string;
  updated: string;
}

export interface SpaceTemplateChecklistUpdateSpaceTemplateChecklistParams extends OperationOptions {
  space_uid: string;
  template_checklist_uid: string;
  body: SpaceTemplateChecklistUpdateSpaceTemplateChecklistBody;
  signal?: AbortSignal;
}

export const createChecklistsResources = (transport: HttpTransport) => ({
  cardChecklistItems: {
    /** @see https://developers.kaiten.ru/card-checklist-items/add-item-to-checklist */
    addItemToChecklist: (
      params: CardChecklistItemsAddItemToChecklistParams,
    ) => {
      return transport.request<CardChecklistItemsAddItemToChecklistResponse>({
        method: "POST",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/checklists/" +
          pathSegment(params.checklist_id) +
          "/items",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklist-items/remove-checklist-item */
    removeChecklistItem: (
      params: CardChecklistItemsRemoveChecklistItemParams,
    ) => {
      return transport.request<CardChecklistItemsRemoveChecklistItemResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/checklists/" +
          pathSegment(params.checklist_id) +
          "/items/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklist-items/update-checklist-item */
    updateChecklistItem: (
      params: CardChecklistItemsUpdateChecklistItemParams,
    ) => {
      return transport.request<CardChecklistItemsUpdateChecklistItemResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/checklists/" +
          pathSegment(params.checklist_id) +
          "/items/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  cardChecklists: {
    /** @see https://developers.kaiten.ru/card-checklists/add-checklist-to-card */
    addChecklistToCard: (params: CardChecklistsAddChecklistToCardParams) => {
      return transport.request<CardChecklistsAddChecklistToCardResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(params.card_id) + "/checklists",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/remove-checklist-from-card */
    removeChecklistFromCard: (
      params: CardChecklistsRemoveChecklistFromCardParams,
    ) => {
      return transport.request<CardChecklistsRemoveChecklistFromCardResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/checklists/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/retrieve-card-checklist */
    retrieveCardChecklist: (
      params: CardChecklistsRetrieveCardChecklistParams,
    ) => {
      return transport.request<CardChecklistsRetrieveCardChecklistResponse>({
        method: "GET",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/checklists/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/update-checklist */
    updateChecklist: (params: CardChecklistsUpdateChecklistParams) => {
      return transport.request<CardChecklistsUpdateChecklistResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/checklists/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  checklistItems: {
    /** @see https://developers.kaiten.ru/checklist-items/add-item-to-checklist */
    addItemToChecklist: (params: ChecklistItemsAddItemToChecklistParams) => {
      return transport.request<ChecklistItemsAddItemToChecklistResponse>({
        method: "POST",
        path: "/checklists/" + pathSegment(params.checklist_id) + "/items",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/checklist-items/remove-checklist-item */
    removeChecklistItem: (params: ChecklistItemsRemoveChecklistItemParams) => {
      return transport.request<ChecklistItemsRemoveChecklistItemResponse>({
        method: "DELETE",
        path:
          "/checklists/" +
          pathSegment(params.checklist_id) +
          "/items/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/checklist-items/update-checklist-item */
    updateChecklistItem: (params: ChecklistItemsUpdateChecklistItemParams) => {
      return transport.request<ChecklistItemsUpdateChecklistItemResponse>({
        method: "PATCH",
        path:
          "/checklists/" +
          pathSegment(params.checklist_id) +
          "/items/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  checklists: {
    /** @see https://developers.kaiten.ru/checklists/retrieve-cards-with-checklist */
    retrieveCardsWithChecklist: (
      params: ChecklistsRetrieveCardsWithChecklistParams,
    ) => {
      return transport.request<ChecklistsRetrieveCardsWithChecklistResponse>({
        method: "GET",
        path: "/checklists/" + pathSegment(params.id),
        query: params.query,
        signal: params.signal,
      });
    },
  },
  spaceTemplateChecklist: {
    /** @see https://developers.kaiten.ru/space-template-checklist/create-new-space-template-checklist */
    createNewSpaceTemplateChecklist: (
      params: SpaceTemplateChecklistCreateNewSpaceTemplateChecklistParams,
    ) => {
      return transport.request<SpaceTemplateChecklistCreateNewSpaceTemplateChecklistResponse>(
        {
          method: "POST",
          path:
            "/spaces/" + pathSegment(params.space_uid) + "/template-checklists",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/get-list-of-space-template-checklists */
    getListOfSpaceTemplateChecklists: (
      params: SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsParams,
    ) => {
      return transport.request<SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsResponse>(
        {
          method: "GET",
          path:
            "/spaces/" + pathSegment(params.space_uid) + "/template-checklists",
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/remove-space-template-checklist */
    removeSpaceTemplateChecklist: (
      params: SpaceTemplateChecklistRemoveSpaceTemplateChecklistParams,
    ) => {
      return transport.request<SpaceTemplateChecklistRemoveSpaceTemplateChecklistResponse>(
        {
          method: "DELETE",
          path:
            "/spaces/" +
            pathSegment(params.space_uid) +
            "/template-checklists/" +
            pathSegment(params.template_checklist_uid),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/update-space-template-checklist */
    updateSpaceTemplateChecklist: (
      params: SpaceTemplateChecklistUpdateSpaceTemplateChecklistParams,
    ) => {
      return transport.request<SpaceTemplateChecklistUpdateSpaceTemplateChecklistResponse>(
        {
          method: "PATCH",
          path:
            "/spaces/" +
            pathSegment(params.space_uid) +
            "/template-checklists/" +
            pathSegment(params.template_checklist_uid),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
  spaceTemplateChecklistItems: {
    /** @see https://developers.kaiten.ru/space-template-checklist-items/create-new-space-template-checklist-item */
    createNewSpaceTemplateChecklistItem: (
      params: SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemParams,
    ) => {
      return transport.request<SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemResponse>(
        {
          method: "POST",
          path:
            "/spaces/" +
            pathSegment(params.space_uid) +
            "/template-checklists/" +
            pathSegment(params.template_checklist_uid) +
            "/items",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist-items/remove-space-template-checklist-item */
    removeSpaceTemplateChecklistItem: (
      params: SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemParams,
    ) => {
      return transport.request<SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemResponse>(
        {
          method: "DELETE",
          path:
            "/spaces/" +
            pathSegment(params.space_uid) +
            "/template-checklists/" +
            pathSegment(params.template_checklist_uid) +
            "/items/" +
            pathSegment(params.item_uid),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist-items/update-space-template-checklist-item */
    updateSpaceTemplateChecklistItem: (
      params: SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemParams,
    ) => {
      return transport.request<SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemResponse>(
        {
          method: "PATCH",
          path:
            "/spaces/" +
            pathSegment(params.space_uid) +
            "/template-checklists/" +
            pathSegment(params.template_checklist_uid) +
            "/items/" +
            pathSegment(params.item_uid),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
});
