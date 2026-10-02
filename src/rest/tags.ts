import type { HttpTransport, OperationOptions } from "../http.ts";
import type { QueryList } from "../types.ts";

import { pathSegment } from "../http.ts";

export interface CardTagsAddTagBody {
  name: string;
}

export interface CardTagsAddTagResponse {
  created: string;
  updated: string;
  archived: boolean;
  id: number;
  name: string;
  company_id: number;
  color: number;
}

export type CardTagsAddTagParams = Parameters<
  ReturnType<typeof createTagsResources>["cardTags"]["addTag"]
>;

export interface CardTagsRemoveTagFromCardResponse {
  id: number;
}

export type CardTagsRemoveTagFromCardParams = Parameters<
  ReturnType<typeof createTagsResources>["cardTags"]["removeTagFromCard"]
>;

export type CardTagsRertrieveListOfTagsResponse = {
  id: number;
  name: string;
  color: number;
  card_id: number;
  tag_id: number;
}[];

export type CardTagsRertrieveListOfTagsParams = Parameters<
  ReturnType<typeof createTagsResources>["cardTags"]["rertrieveListOfTags"]
>;

export interface TagsAddTagQuery {
  ids?: string;
  query?: string;
  space_id?: number;
  limit?: number;
  offset?: number;
}

export interface TagsAddTagBody {
  name: string;
}

export interface TagsAddTagResponse {
  created: string;
  updated: string;
  id: number;
  name: string;
  company_id: number;
  color: number;
  archived: boolean;
}

export type TagsAddTagParams = Parameters<
  ReturnType<typeof createTagsResources>["tags"]["addTag"]
>;

export interface TagsRetrieveListOfTagsQuery {
  limit?: number;
  offset?: number;
  space_id?: number;
  ids?: QueryList<number>;
  query?: string;
}

export type TagsRetrieveListOfTagsResponse = {
  created: string;
  updated: string;
  id: number;
  name: string;
  company_id: number;
  color: number;
  archived: boolean;
}[];

export type TagsRetrieveListOfTagsParams = Parameters<
  ReturnType<typeof createTagsResources>["tags"]["retrieveListOfTags"]
>;

export const createTagsResources = (transport: HttpTransport) => ({
  cardTags: {
    /** @see https://developers.kaiten.ru/card-tags/add-tag */
    addTag: (cardId: number, name: string, options?: OperationOptions) => {
      return transport.request<CardTagsAddTagResponse>({
        method: "POST",
        path: "/cards/" + pathSegment(cardId) + "/tags",
        body: { name },
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-tags/remove-tag-from-card */
    removeTagFromCard: (
      cardId: number,
      tagId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CardTagsRemoveTagFromCardResponse>({
        method: "DELETE",
        path: "/cards/" + pathSegment(cardId) + "/tags/" + pathSegment(tagId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-tags/rertrieve-list-of-tags */
    rertrieveListOfTags: (cardId: number, options?: OperationOptions) => {
      return transport.request<CardTagsRertrieveListOfTagsResponse>({
        method: "GET",
        path: "/cards/" + pathSegment(cardId) + "/tags",
        signal: options?.signal,
      });
    },
  },
  tags: {
    /** @see https://developers.kaiten.ru/tags/add-tag */
    addTag: (
      name: string,
      query?: TagsAddTagQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<TagsAddTagResponse>({
        method: "POST",
        path: "/tags",
        query,
        body: { name },
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/tags/retrieve-list-of-tags */
    retrieveListOfTags: (
      query?: TagsRetrieveListOfTagsQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<TagsRetrieveListOfTagsResponse>({
        method: "GET",
        path: "/tags",
        query,
        signal: options?.signal,
      });
    },
  },
});
