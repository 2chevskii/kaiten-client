import type { TreeEntitySummary } from "../entities.ts";
import type { JsonValue } from "../types.ts";
import type { CardTypeProperty } from "../entities.ts";
import type { RequireAtLeastOne } from "../types.ts";
import type { HttpTransport, OperationOptions } from "../http.ts";

import { pathSegment } from "../http.ts";

export interface CardTypeTreeEntitiesAddTreeEntityToCardTypeBody {
  tree_entity_uid: string;
}

export interface CardTypeTreeEntitiesAddTreeEntityToCardTypeResponse {
  id: number;
}

export type CardTypeTreeEntitiesAddTreeEntityToCardTypeParams = Parameters<
  ReturnType<
    typeof createTaxonomyResources
  >["cardTypeTreeEntities"]["addTreeEntityToCardType"]
>;

export type CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeResponse = void;

export type CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeParams = Parameters<
  ReturnType<
    typeof createTaxonomyResources
  >["cardTypeTreeEntities"]["deleteTreeEntityFromCardType"]
>;

export type CardTypeTreeEntitiesGetListOfTypeTreeEntitiesResponse = (
  | {
      uid: string;
      title: string;
      company_id: number;
      sort_order: number;
      path: string;
      parent_entity_uid: string | null;
      entity_type: string;
      access: string;
      archived: boolean;
      for_everyone_access_role_id: string;
      protected: boolean;
    }
  | {
      uid: string;
      path: string;
      title: string;
      access: string;
      parent_entity_uid: string | null;
      entity_type: string;
      sort_order: number;
      archived: boolean;
      for_everyone_access_role_id: string;
      company_id: number;
      protected: boolean;
    }
  | {
      uid: string;
      path: string;
      access: string;
      title: string;
      parent_entity_uid: string | null;
      entity_type: string;
      sort_order: number;
      archived: boolean;
      for_everyone_access_role_id: string;
      company_id: number;
      protected: boolean;
    }
)[];

export type CardTypeTreeEntitiesGetListOfTypeTreeEntitiesParams = Parameters<
  ReturnType<
    typeof createTaxonomyResources
  >["cardTypeTreeEntities"]["getListOfTypeTreeEntities"]
>;

export interface CardTypesCreateNewCardTypeBody {
  letter: string;
  name: string;
  color: number;
  properties?: Record<string, unknown>;
  card_properties?: unknown[];
  suggest_fields?: boolean;
}

export interface CardTypesCreateNewCardTypeResponse {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: Record<string, JsonValue> | null;
  card_properties: CardTypeProperty[] | null;
  suggest_fields: boolean;
}

export type CardTypesCreateNewCardTypeParams = Parameters<
  ReturnType<typeof createTaxonomyResources>["cardTypes"]["createNewCardType"]
>;

export interface CardTypesGetCardTypeResponse {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: Record<string, JsonValue> | null;
  card_properties: CardTypeProperty[] | null;
  suggest_fields: boolean;
}

export type CardTypesGetCardTypeParams = Parameters<
  ReturnType<typeof createTaxonomyResources>["cardTypes"]["getCardType"]
>;

export interface CardTypesGetListOfCardTypesQuery {
  limit?: number;
  offset?: number;
}

export type CardTypesGetListOfCardTypesResponse = {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: Record<string, JsonValue> | null;
  card_properties: CardTypeProperty[] | null;
  suggest_fields: boolean;
}[];

export type CardTypesGetListOfCardTypesParams = Parameters<
  ReturnType<typeof createTaxonomyResources>["cardTypes"]["getListOfCardTypes"]
>;

export interface CardTypesRemoveCardTypeBody {
  replace_type_id: number;
}

export interface CardTypesRemoveCardTypeResponse {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: Record<string, JsonValue> | null;
  card_properties: CardTypeProperty[] | null;
  suggest_fields: boolean;
}

export type CardTypesRemoveCardTypeParams = Parameters<
  ReturnType<typeof createTaxonomyResources>["cardTypes"]["removeCardType"]
>;

export type CardTypesUpdateCardTypeBody = RequireAtLeastOne<
  {
    letter?: string;
    name?: string;
    color?: number;
    properties?: Record<string, JsonValue>;
    card_properties?: {
      regular_property?:
        "size" | "due_date" | "tags" | "timeline" | "description" | null;
      property_uid?: string | null;
      sort_order?: number;
      required?: boolean;
      type_uid?: string;
    }[];
    suggest_fields?: boolean;
  },
  "letter" | "name" | "color" | "properties"
>;

export interface CardTypesUpdateCardTypeResponse {
  company_id: number;
  letter: string;
  name: string;
  color: number;
  updated: string;
  created: string;
  id: number;
  description_template: string | null;
  archived: boolean;
  properties: Record<string, JsonValue> | null;
  card_properties: CardTypeProperty[] | null;
  suggest_fields: boolean;
}

export type CardTypesUpdateCardTypeParams = Parameters<
  ReturnType<typeof createTaxonomyResources>["cardTypes"]["updateCardType"]
>;

export interface TreeEntitiesGetListOfEntitiesQuery {
  limit?: number;
  offset?: number;
  parent_entity_uid?: string;
  levels_count?: number;
}

export type TreeEntitiesGetListOfEntitiesResponse = TreeEntitySummary[];

export type TreeEntitiesGetListOfEntitiesParams = Parameters<
  ReturnType<
    typeof createTaxonomyResources
  >["treeEntities"]["getListOfEntities"]
>;

export type TreeEntityRolesGetListOfTreeEntityRolesResponse = {
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
  role_permissions?: Record<string, unknown>;
}[];

export type TreeEntityRolesGetListOfTreeEntityRolesParams = Parameters<
  ReturnType<
    typeof createTaxonomyResources
  >["treeEntityRoles"]["getListOfTreeEntityRoles"]
>;

export const createTaxonomyResources = (transport: HttpTransport) => ({
  cardTypeTreeEntities: {
    /** @see https://developers.kaiten.ru/card-type-tree-entities/add-tree-entity-to-card-type */
    addTreeEntityToCardType: (
      typeId: number,
      treeEntityUid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTypeTreeEntitiesAddTreeEntityToCardTypeResponse>(
        {
          method: "POST",
          path: "/card-types/" + pathSegment(typeId) + "/tree-entities",
          body: { tree_entity_uid: treeEntityUid },
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-type-tree-entities/delete-tree-entity-from-card-type */
    deleteTreeEntityFromCardType: (
      typeId: number,
      uid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeResponse>(
        {
          method: "DELETE",
          responseMode: "void",
          path:
            "/card-types/" +
            pathSegment(typeId) +
            "/tree-entities/" +
            pathSegment(uid),
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-type-tree-entities/get-list-of-type-tree-entities */
    getListOfTypeTreeEntities: (typeId: number, options?: OperationOptions) => {
      return transport.request<CardTypeTreeEntitiesGetListOfTypeTreeEntitiesResponse>(
        {
          method: "GET",
          path: "/card-types/" + pathSegment(typeId) + "/tree-entities",
          signal: options?.signal,
        },
      );
    },
  },
  cardTypes: {
    /** @see https://developers.kaiten.ru/card-types/create-new-card-type */
    createNewCardType: (
      body: CardTypesCreateNewCardTypeBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTypesCreateNewCardTypeResponse>({
        method: "POST",
        path: "/card-types",
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/get-card-type */
    getCardType: (id: number, options?: OperationOptions) => {
      return transport.request<CardTypesGetCardTypeResponse>({
        method: "GET",
        path: "/card-types/" + pathSegment(id),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/get-list-of-card-types */
    getListOfCardTypes: (
      limit?: number,
      offset?: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTypesGetListOfCardTypesResponse>({
        method: "GET",
        path: "/card-types",
        query: { limit, offset },
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/remove-card-type */
    removeCardType: (
      id: number,
      replaceTypeId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTypesRemoveCardTypeResponse>({
        method: "DELETE",
        path: "/card-types/" + pathSegment(id),
        body: { replace_type_id: replaceTypeId },
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/update-card-type */
    updateCardType: (
      id: number,
      body: CardTypesUpdateCardTypeBody,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTypesUpdateCardTypeResponse>({
        method: "PATCH",
        path: "/card-types/" + pathSegment(id),
        body,
        signal: options?.signal,
      });
    },
  },
  treeEntities: {
    /** @beta */
    /** @see https://developers.kaiten.ru/tree-entities/get-list-of-entities */
    getListOfEntities: (
      query?: TreeEntitiesGetListOfEntitiesQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<TreeEntitiesGetListOfEntitiesResponse>({
        method: "GET",
        path: "/tree-entities",
        query,
        signal: options?.signal,
      });
    },
  },
  treeEntityRoles: {
    /** @beta */
    /** @see https://developers.kaiten.ru/tree-entity-roles/get-list-of-tree-entity-roles */
    getListOfTreeEntityRoles: (options?: OperationOptions) => {
      return transport.request<TreeEntityRolesGetListOfTreeEntityRolesResponse>(
        {
          method: "GET",
          path: "/tree-entity-roles",
          signal: options?.signal,
        },
      );
    },
  },
});
