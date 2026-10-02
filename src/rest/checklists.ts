import type { CustomPropertyValues, JsonValue } from "../types.ts";
import type { ChecklistItemSummary } from "../entities.ts";
import type { RequireAtLeastOne } from "../types.ts";
import type { HttpTransport, OperationOptions } from "../http.ts";

import { pathSegment } from "../http.ts";

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

export type CardChecklistItemsAddItemToChecklistParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["cardChecklistItems"]["addItemToChecklist"]
>;

export interface CardChecklistItemsRemoveChecklistItemResponse {
  id: number;
}

export type CardChecklistItemsRemoveChecklistItemParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["cardChecklistItems"]["removeChecklistItem"]
>;

export type CardChecklistItemsUpdateChecklistItemBody = RequireAtLeastOne<
  {
    text?: string | null;
    sort_order?: number;
    checklist_id?: number;
    checked?: boolean;
    due_date?: string | null;
    responsible_id?: number | null;
  },
  | "text"
  | "checked"
  | "due_date"
  | "sort_order"
  | "checklist_id"
  | "responsible_id"
>;

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

export type CardChecklistItemsUpdateChecklistItemParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["cardChecklistItems"]["updateChecklistItem"]
>;

export type CardChecklistsAddChecklistToCardBody = RequireAtLeastOne<
  {
    name?: string;
    sort_order?: number;
    items_source_checklist_id?: number;
    exclude_item_ids?: number[];
    source_share_id?: number;
  },
  "name" | "source_share_id"
>;

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
  items: ChecklistItemSummary[];
}

export type CardChecklistsAddChecklistToCardParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["cardChecklists"]["addChecklistToCard"]
>;

export interface CardChecklistsRemoveChecklistFromCardResponse {
  id: number;
}

export type CardChecklistsRemoveChecklistFromCardParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["cardChecklists"]["removeChecklistFromCard"]
>;

export interface CardChecklistsRetrieveCardChecklistResponse {
  created: string;
  updated: string;
  id: number;
  uid: string;
  fts_version: string;
  name: string;
  policy_id: number | null;
  items: ChecklistItemSummary[];
}

export type CardChecklistsRetrieveCardChecklistParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["cardChecklists"]["retrieveCardChecklist"]
>;

export type CardChecklistsUpdateChecklistBody = RequireAtLeastOne<
  {
    name?: string;
    sort_order?: number;
    card_id?: number;
  },
  "name" | "sort_order" | "card_id"
>;

export interface CardChecklistsUpdateChecklistResponse {
  created: string;
  updated: string;
  id: number;
  name: string;
  policy_id: number | null;
}

export type CardChecklistsUpdateChecklistParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["cardChecklists"]["updateChecklist"]
>;

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

export type ChecklistItemsAddItemToChecklistParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["checklistItems"]["addItemToChecklist"]
>;

export interface ChecklistItemsRemoveChecklistItemResponse {
  id: number;
}

export type ChecklistItemsRemoveChecklistItemParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["checklistItems"]["removeChecklistItem"]
>;

export type ChecklistItemsUpdateChecklistItemBody = RequireAtLeastOne<
  {
    text?: string | null;
    sort_order?: number;
    checklist_id?: number;
    checked?: boolean;
    due_date?: string | null;
    responsible_id?: number | null;
  },
  | "text"
  | "checked"
  | "due_date"
  | "sort_order"
  | "checklist_id"
  | "responsible_id"
>;

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

export type ChecklistItemsUpdateChecklistItemParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["checklistItems"]["updateChecklistItem"]
>;

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
  parent_checklist_ids: number[] | null;
  parent_link_ids: null;
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
  project_id: null;
  milestone_id: null;
  fifo_order: number | null;
  blocking_card: boolean;
  sprint_id: number | null;
  condition: number;
  last_moved_at: string | null;
  external_id: string | null;
  lane_changed_at: string | null;
  column_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  service_id: number | null;
  has_blocked_children: boolean;
  comments_total: number;
  comment_last_added_at: string | null;
  children_ids: number[] | null;
  parents_ids: number[] | null;
  properties: CustomPropertyValues | null;
  planned_start: string | null;
  planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  counters_recalculated_at: string;
  sd_new_comment: boolean;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, JsonValue> | null;
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

export type ChecklistsRetrieveCardsWithChecklistParams = Parameters<
  ReturnType<
    typeof createChecklistsResources
  >["checklists"]["retrieveCardsWithChecklist"]
>;

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

export type SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemParams =
  Parameters<
    ReturnType<
      typeof createChecklistsResources
    >["spaceTemplateChecklistItems"]["createNewSpaceTemplateChecklistItem"]
  >;

export interface SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemResponse {
  uid: string;
}

export type SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemParams =
  Parameters<
    ReturnType<
      typeof createChecklistsResources
    >["spaceTemplateChecklistItems"]["removeSpaceTemplateChecklistItem"]
  >;

export type SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemBody =
  RequireAtLeastOne<
    {
      text?: string;
      sort_order?: number;
    },
    "text" | "sort_order"
  >;

export interface SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemResponse {
  uid: string;
  text: string;
  sort_order: number;
  user_id: number;
  created: string;
  updated: string;
}

export type SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemParams =
  Parameters<
    ReturnType<
      typeof createChecklistsResources
    >["spaceTemplateChecklistItems"]["updateSpaceTemplateChecklistItem"]
  >;

export interface SpaceTemplateChecklistCreateNewSpaceTemplateChecklistBody {
  name: string;
  sort_order?: number;
}

export interface SpaceTemplateChecklistCreateNewSpaceTemplateChecklistResponse {
  uid: string;
  name: string;
  sort_order: number;
  space_uid: string;
  created: string;
  updated: string;
}

export type SpaceTemplateChecklistCreateNewSpaceTemplateChecklistParams =
  Parameters<
    ReturnType<
      typeof createChecklistsResources
    >["spaceTemplateChecklist"]["createNewSpaceTemplateChecklist"]
  >;

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

export type SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsParams =
  Parameters<
    ReturnType<
      typeof createChecklistsResources
    >["spaceTemplateChecklist"]["getListOfSpaceTemplateChecklists"]
  >;

export interface SpaceTemplateChecklistRemoveSpaceTemplateChecklistResponse {
  uid: string;
}

export type SpaceTemplateChecklistRemoveSpaceTemplateChecklistParams =
  Parameters<
    ReturnType<
      typeof createChecklistsResources
    >["spaceTemplateChecklist"]["removeSpaceTemplateChecklist"]
  >;

export type SpaceTemplateChecklistUpdateSpaceTemplateChecklistBody =
  RequireAtLeastOne<
    {
      name?: string;
      sort_order?: number;
      space_uid?: string;
    },
    "name" | "sort_order"
  >;

export interface SpaceTemplateChecklistUpdateSpaceTemplateChecklistResponse {
  uid: string;
  name: string;
  sort_order: number;
  space_uid: string;
  created: string;
  updated: string;
}

export type SpaceTemplateChecklistUpdateSpaceTemplateChecklistParams =
  Parameters<
    ReturnType<
      typeof createChecklistsResources
    >["spaceTemplateChecklist"]["updateSpaceTemplateChecklist"]
  >;

export const createChecklistsResources = (transport: HttpTransport) => ({
  cardChecklistItems: {
    /** @see https://developers.kaiten.ru/card-checklist-items/add-item-to-checklist */
    addItemToChecklist: (
      cardId: number,
      checklistId: number,
      body: CardChecklistItemsAddItemToChecklistBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CardChecklistItemsAddItemToChecklistResponse>({
        method: "POST",
        path:
          "/cards/" +
          pathSegment(cardId) +
          "/checklists/" +
          pathSegment(checklistId) +
          "/items",
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklist-items/remove-checklist-item */
    removeChecklistItem: (
      cardId: number,
      checklistId: number,
      itemId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CardChecklistItemsRemoveChecklistItemResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(cardId) +
          "/checklists/" +
          pathSegment(checklistId) +
          "/items/" +
          pathSegment(itemId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklist-items/update-checklist-item */
    updateChecklistItem: (
      cardId: number,
      checklistId: number,
      itemId: number,
      body: CardChecklistItemsUpdateChecklistItemBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CardChecklistItemsUpdateChecklistItemResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(cardId) +
          "/checklists/" +
          pathSegment(checklistId) +
          "/items/" +
          pathSegment(itemId),
        body,
        signal: options?.signal,
      });
    },
  },
  cardChecklists: {
    /** @see https://developers.kaiten.ru/card-checklists/add-checklist-to-card */
    addChecklistToCard: (
      cardId: number,
      body: CardChecklistsAddChecklistToCardBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CardChecklistsAddChecklistToCardResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(cardId) + "/checklists",
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/remove-checklist-from-card */
    removeChecklistFromCard: (
      cardId: number,
      checklistId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CardChecklistsRemoveChecklistFromCardResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(cardId) +
          "/checklists/" +
          pathSegment(checklistId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/retrieve-card-checklist */
    retrieveCardChecklist: (
      cardId: number,
      checklistId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CardChecklistsRetrieveCardChecklistResponse>({
        method: "GET",
        path:
          "/cards/" +
          pathSegment(cardId) +
          "/checklists/" +
          pathSegment(checklistId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-checklists/update-checklist */
    updateChecklist: (
      cardId: number,
      checklistId: number,
      body: CardChecklistsUpdateChecklistBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CardChecklistsUpdateChecklistResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(cardId) +
          "/checklists/" +
          pathSegment(checklistId),
        body,
        signal: options?.signal,
      });
    },
  },
  checklistItems: {
    /** @see https://developers.kaiten.ru/checklist-items/add-item-to-checklist */
    addItemToChecklist: (
      checklistId: number,
      body: ChecklistItemsAddItemToChecklistBody,
      options?: OperationOptions,
    ) => {
      return transport.request<ChecklistItemsAddItemToChecklistResponse>({
        method: "POST",
        path: "/checklists/" + pathSegment(checklistId) + "/items",
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/checklist-items/remove-checklist-item */
    removeChecklistItem: (
      checklistId: number,
      itemId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<ChecklistItemsRemoveChecklistItemResponse>({
        method: "DELETE",
        path:
          "/checklists/" +
          pathSegment(checklistId) +
          "/items/" +
          pathSegment(itemId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/checklist-items/update-checklist-item */
    updateChecklistItem: (
      checklistId: number,
      itemId: number,
      body: ChecklistItemsUpdateChecklistItemBody,
      options?: OperationOptions,
    ) => {
      return transport.request<ChecklistItemsUpdateChecklistItemResponse>({
        method: "PATCH",
        path:
          "/checklists/" +
          pathSegment(checklistId) +
          "/items/" +
          pathSegment(itemId),
        body,
        signal: options?.signal,
      });
    },
  },
  checklists: {
    /** @see https://developers.kaiten.ru/checklists/retrieve-cards-with-checklist */
    retrieveCardsWithChecklist: (
      id: number,
      onlySharedCards: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<ChecklistsRetrieveCardsWithChecklistResponse>({
        method: "GET",
        path: "/checklists/" + pathSegment(id),
        query: { only_shared_cards: onlySharedCards },
        signal: options?.signal,
      });
    },
  },
  spaceTemplateChecklist: {
    /** @see https://developers.kaiten.ru/space-template-checklist/create-new-space-template-checklist */
    createNewSpaceTemplateChecklist: (
      spaceUid: string,
      name: string,
      sortOrder?: number,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceTemplateChecklistCreateNewSpaceTemplateChecklistResponse>(
        {
          method: "POST",
          path: "/spaces/" + pathSegment(spaceUid) + "/template-checklists",
          body: { name, sort_order: sortOrder },
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/get-list-of-space-template-checklists */
    getListOfSpaceTemplateChecklists: (
      spaceUid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceTemplateChecklistGetListOfSpaceTemplateChecklistsResponse>(
        {
          method: "GET",
          path: "/spaces/" + pathSegment(spaceUid) + "/template-checklists",
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/remove-space-template-checklist */
    removeSpaceTemplateChecklist: (
      spaceUid: string,
      templateChecklistUid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceTemplateChecklistRemoveSpaceTemplateChecklistResponse>(
        {
          method: "DELETE",
          path:
            "/spaces/" +
            pathSegment(spaceUid) +
            "/template-checklists/" +
            pathSegment(templateChecklistUid),
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist/update-space-template-checklist */
    updateSpaceTemplateChecklist: (
      spaceUid: string,
      templateChecklistUid: string,
      body: SpaceTemplateChecklistUpdateSpaceTemplateChecklistBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceTemplateChecklistUpdateSpaceTemplateChecklistResponse>(
        {
          method: "PATCH",
          path:
            "/spaces/" +
            pathSegment(spaceUid) +
            "/template-checklists/" +
            pathSegment(templateChecklistUid),
          body,
          signal: options?.signal,
        },
      );
    },
  },
  spaceTemplateChecklistItems: {
    /** @see https://developers.kaiten.ru/space-template-checklist-items/create-new-space-template-checklist-item */
    createNewSpaceTemplateChecklistItem: (
      spaceUid: string,
      templateChecklistUid: string,
      text: string,
      sortOrder?: number,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceTemplateChecklistItemsCreateNewSpaceTemplateChecklistItemResponse>(
        {
          method: "POST",
          path:
            "/spaces/" +
            pathSegment(spaceUid) +
            "/template-checklists/" +
            pathSegment(templateChecklistUid) +
            "/items",
          body: { text, sort_order: sortOrder },
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist-items/remove-space-template-checklist-item */
    removeSpaceTemplateChecklistItem: (
      spaceUid: string,
      templateChecklistUid: string,
      itemUid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceTemplateChecklistItemsRemoveSpaceTemplateChecklistItemResponse>(
        {
          method: "DELETE",
          path:
            "/spaces/" +
            pathSegment(spaceUid) +
            "/template-checklists/" +
            pathSegment(templateChecklistUid) +
            "/items/" +
            pathSegment(itemUid),
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/space-template-checklist-items/update-space-template-checklist-item */
    updateSpaceTemplateChecklistItem: (
      spaceUid: string,
      templateChecklistUid: string,
      itemUid: string,
      body: SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemBody,
      options?: OperationOptions,
    ) => {
      return transport.request<SpaceTemplateChecklistItemsUpdateSpaceTemplateChecklistItemResponse>(
        {
          method: "PATCH",
          path:
            "/spaces/" +
            pathSegment(spaceUid) +
            "/template-checklists/" +
            pathSegment(templateChecklistUid) +
            "/items/" +
            pathSegment(itemUid),
          body,
          signal: options?.signal,
        },
      );
    },
  },
});
