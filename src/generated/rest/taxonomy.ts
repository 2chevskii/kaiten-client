/** Generated from the Kaiten developer documentation audit. */

import type { HttpTransport, OperationOptions } from "../../http.js";

import { pathSegment } from "../../http.js";

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

export type CardTypeTreeEntitiesGetListOfTypeTreeEntitiesResponse = Array<
  | {
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
    }
  | {
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
    }
  | {
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
    }
>;

export interface CardTypeTreeEntitiesGetListOfTypeTreeEntitiesParams extends OperationOptions {
  type_id: number;
  signal?: AbortSignal;
}

export type CardTypesCreateNewCardTypeBody = {
  letter: string;
  name: string;
  color: number;
  properties?: Record<string, unknown>;
  card_properties?: Array<unknown | unknown>;
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

export type CardTypesGetListOfCardTypesResponse = Array<{
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
}>;

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

export type CardTypesUpdateCardTypeBody = unknown | unknown | unknown | unknown;

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

export type TreeEntitiesGetListOfEntitiesQuery = {
  limit?: number;
  offset?: number;
  parent_entity_uid?: string;
  levels_count?: number;
};

export type TreeEntitiesGetListOfEntitiesResponse = Array<
  | {
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
    }
  | {
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
    }
  | {
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
    }
>;

export interface TreeEntitiesGetListOfEntitiesParams extends OperationOptions {
  query?: TreeEntitiesGetListOfEntitiesQuery;
  signal?: AbortSignal;
}

export type TreeEntityRolesGetListOfTreeEntityRolesResponse = Array<{
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
}>;

export interface TreeEntityRolesGetListOfTreeEntityRolesParams extends OperationOptions {
  signal?: AbortSignal;
}

export const createTaxonomyResources = (transport: HttpTransport) => ({
  cardTypeTreeEntities: {
    /** @see https://developers.kaiten.ru/card-type-tree-entities/add-tree-entity-to-card-type */
    addTreeEntityToCardType: (
      params: CardTypeTreeEntitiesAddTreeEntityToCardTypeParams,
    ) => {
      return transport.request<CardTypeTreeEntitiesAddTreeEntityToCardTypeResponse>(
        {
          method: "POST",
          path: "/card-types/" + pathSegment(params.type_id) + "/tree-entities",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-type-tree-entities/delete-tree-entity-from-card-type */
    deleteTreeEntityFromCardType: (
      params: CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeParams,
    ) => {
      return transport.request<CardTypeTreeEntitiesDeleteTreeEntityFromCardTypeResponse>(
        {
          method: "DELETE",
          path:
            "/card-types/" +
            pathSegment(params.type_id) +
            "/tree-entities/" +
            pathSegment(params.uid),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-type-tree-entities/get-list-of-type-tree-entities */
    getListOfTypeTreeEntities: (
      params: CardTypeTreeEntitiesGetListOfTypeTreeEntitiesParams,
    ) => {
      return transport.request<CardTypeTreeEntitiesGetListOfTypeTreeEntitiesResponse>(
        {
          method: "GET",
          path: "/card-types/" + pathSegment(params.type_id) + "/tree-entities",
          signal: params.signal,
        },
      );
    },
  },
  cardTypes: {
    /** @see https://developers.kaiten.ru/card-types/create-new-card-type */
    createNewCardType: (params: CardTypesCreateNewCardTypeParams) => {
      return transport.request<CardTypesCreateNewCardTypeResponse>({
        method: "POST",
        path: "/card-types",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/get-card-type */
    getCardType: (params: CardTypesGetCardTypeParams) => {
      return transport.request<CardTypesGetCardTypeResponse>({
        method: "GET",
        path: "/card-types/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/get-list-of-card-types */
    getListOfCardTypes: (params: CardTypesGetListOfCardTypesParams = {}) => {
      return transport.request<CardTypesGetListOfCardTypesResponse>({
        method: "GET",
        path: "/card-types",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/remove-card-type */
    removeCardType: (params: CardTypesRemoveCardTypeParams) => {
      return transport.request<CardTypesRemoveCardTypeResponse>({
        method: "DELETE",
        path: "/card-types/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-types/update-card-type */
    updateCardType: (params: CardTypesUpdateCardTypeParams) => {
      return transport.request<CardTypesUpdateCardTypeResponse>({
        method: "PATCH",
        path: "/card-types/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  treeEntities: {
    /** @beta */
    /** @see https://developers.kaiten.ru/tree-entities/get-list-of-entities */
    getListOfEntities: (params: TreeEntitiesGetListOfEntitiesParams = {}) => {
      return transport.request<TreeEntitiesGetListOfEntitiesResponse>({
        method: "GET",
        path: "/tree-entities",
        query: params.query,
        signal: params.signal,
      });
    },
  },
  treeEntityRoles: {
    /** @beta */
    /** @see https://developers.kaiten.ru/tree-entity-roles/get-list-of-tree-entity-roles */
    getListOfTreeEntityRoles: (
      params: TreeEntityRolesGetListOfTreeEntityRolesParams = {},
    ) => {
      return transport.request<TreeEntityRolesGetListOfTreeEntityRolesResponse>(
        {
          method: "GET",
          path: "/tree-entity-roles",
          signal: params.signal,
        },
      );
    },
  },
});
