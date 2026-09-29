/** Generated from the Kaiten developer documentation audit. */

import type { HttpTransport, OperationOptions } from "../../http.js";

import { pathSegment } from "../../http.js";

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

export type CardTagsRertrieveListOfTagsResponse = Array<{
  id: number;
  name: string;
  color: number;
  card_id: number;
  tag_id: number;
}>;

export interface CardTagsRertrieveListOfTagsParams extends OperationOptions {
  card_id: number;
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

export type TagsRetrieveListOfTagsResponse = Array<{
  created: string;
  updated: string;
  id: number;
  name: string;
  company_id: number;
  color: number;
  archived: boolean;
}>;

export interface TagsRetrieveListOfTagsParams extends OperationOptions {
  query?: TagsRetrieveListOfTagsQuery;
  signal?: AbortSignal;
}

export const createTagsResources = (transport: HttpTransport) => ({
  cardTags: {
    /** @see https://developers.kaiten.ru/card-tags/add-tag */
    addTag: (params: CardTagsAddTagParams) => {
      return transport.request<CardTagsAddTagResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(params.card_id) + "/tags",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-tags/remove-tag-from-card */
    removeTagFromCard: (params: CardTagsRemoveTagFromCardParams) => {
      return transport.request<CardTagsRemoveTagFromCardResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/tags/" +
          pathSegment(params.tag_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-tags/rertrieve-list-of-tags */
    rertrieveListOfTags: (params: CardTagsRertrieveListOfTagsParams) => {
      return transport.request<CardTagsRertrieveListOfTagsResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(params.card_id) + "/tags",
        signal: params.signal,
      });
    },
  },
  tags: {
    /** @see https://developers.kaiten.ru/tags/add-tag */
    addTag: (params: TagsAddTagParams) => {
      return transport.request<TagsAddTagResponse>({
        method: "POST",
        path: "/tags",
        query: params.query,
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/tags/retrieve-list-of-tags */
    retrieveListOfTags: (params: TagsRetrieveListOfTagsParams = {}) => {
      return transport.request<TagsRetrieveListOfTagsResponse>({
        method: "GET",
        path: "/tags",
        query: params.query,
        signal: params.signal,
      });
    },
  },
});
