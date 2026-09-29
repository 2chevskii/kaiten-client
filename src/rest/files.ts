import type { HttpTransport, OperationOptions } from "../http.js";

import { pathSegment } from "../http.js";

export interface CardFilesAttachFileToCardResponse {
  author_id: number;
  card_cover: boolean;
  card_id: number;
  comment_id: number | null;
  created: string;
  deleted: boolean;
  external: boolean;
  id: number;
  mh_markup_id: null;
  mh_secret: null;
  name: string;
  size: number | null;
  sort_order: number;
  type: number;
  updated: string;
  url: string;
}

export interface CardFilesAttachFileToCardParams extends OperationOptions {
  card_id: number;
  file: Blob;
  filename?: string;
  signal?: AbortSignal;
}

export interface CardFilesDetachFileFromCardResponse {
  id: number;
}

export interface CardFilesDetachFileFromCardParams extends OperationOptions {
  card_id: number;
  id: number;
  signal?: AbortSignal;
}

export interface CardFilesUpdateFileBody {
  card_cover?: boolean;
}

export type CardFilesUpdateFileResponse = Record<string, unknown>;

export interface CardFilesUpdateFileParams extends OperationOptions {
  card_id: number;
  id: number;
  body: CardFilesUpdateFileBody;
  signal?: AbortSignal;
}

export interface RestrictedAccessCardFilesAttachFileToCardResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
}

export interface RestrictedAccessCardFilesAttachFileToCardParams extends OperationOptions {
  card_uid: string;
  file: Blob;
  filename?: string;
  signal?: AbortSignal;
}

export interface RestrictedAccessCardFilesDeleteCardFileResponse {
  id: string;
}

export interface RestrictedAccessCardFilesDeleteCardFileParams extends OperationOptions {
  card_uid: string;
  id: string;
  signal?: AbortSignal;
}

export interface RestrictedAccessCardFilesGetCardFileQuery {
  redirect?: boolean;
  download?: boolean;
}

export interface RestrictedAccessCardFilesGetCardFileResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  entity_type: string;
  created: string;
  updated: string;
  card_uid: string;
  author_uid: string;
  card_cover: boolean;
  url: string;
}

export interface RestrictedAccessCardFilesGetCardFileParams extends OperationOptions {
  card_uid: string;
  id: string;
  query?: RestrictedAccessCardFilesGetCardFileQuery;
  signal?: AbortSignal;
}

export interface RestrictedAccessCardFilesUpdateCardFileBody {
  name?: string;
  card_cover?: boolean;
}

export interface RestrictedAccessCardFilesUpdateCardFileResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
}

export interface RestrictedAccessCardFilesUpdateCardFileParams extends OperationOptions {
  card_uid: string;
  id: string;
  body: RestrictedAccessCardFilesUpdateCardFileBody;
  signal?: AbortSignal;
}

export interface RestrictedAccessCommentFilesAttachFileToCommentResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  comment_uid: string | null;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
}

export interface RestrictedAccessCommentFilesAttachFileToCommentParams extends OperationOptions {
  card_uid: string;
  comment_uid: string;
  file: Blob;
  filename?: string;
  signal?: AbortSignal;
}

export interface RestrictedAccessCommentFilesDeleteCommentFileResponse {
  id: string;
}

export interface RestrictedAccessCommentFilesDeleteCommentFileParams extends OperationOptions {
  card_uid: string;
  comment_uid: string;
  id: string;
  signal?: AbortSignal;
}

export interface RestrictedAccessCommentFilesGetCommentFileQuery {
  redirect?: boolean;
  download?: boolean;
}

export interface RestrictedAccessCommentFilesGetCommentFileResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  entity_type: string;
  created: string;
  updated: string;
  card_uid: string;
  comment_uid: string | null;
  author_uid: string;
  card_cover: boolean;
  url: string;
}

export interface RestrictedAccessCommentFilesGetCommentFileParams extends OperationOptions {
  card_uid: string;
  comment_uid: string;
  id: string;
  query?: RestrictedAccessCommentFilesGetCommentFileQuery;
  signal?: AbortSignal;
}

export interface RestrictedAccessCommentFilesUpdateCommentFileBody {
  name?: string;
  card_cover?: boolean;
}

export interface RestrictedAccessCommentFilesUpdateCommentFileResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  comment_uid: string | null;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
}

export interface RestrictedAccessCommentFilesUpdateCommentFileParams extends OperationOptions {
  card_uid: string;
  comment_uid: string;
  id: string;
  body: RestrictedAccessCommentFilesUpdateCommentFileBody;
  signal?: AbortSignal;
}

export interface RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  custom_property_uid: string;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
}

export interface RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyParams extends OperationOptions {
  card_uid: string;
  property_uid: string;
  file: Blob;
  filename?: string;
  signal?: AbortSignal;
}

export interface RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileResponse {
  id: string;
}

export interface RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileParams extends OperationOptions {
  card_uid: string;
  property_uid: string;
  id: string;
  signal?: AbortSignal;
}

export interface RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery {
  redirect?: boolean;
  download?: boolean;
}

export interface RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  entity_type: string;
  created: string;
  updated: string;
  card_uid: string;
  custom_property_uid: string;
  author_uid: string;
  card_cover: boolean;
  url: string;
}

export interface RestrictedAccessCustomPropertyFilesGetCustomPropertyFileParams extends OperationOptions {
  card_uid: string;
  property_uid: string;
  id: string;
  query?: RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery;
  signal?: AbortSignal;
}

export interface RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileBody {
  name?: string;
  card_cover?: boolean;
}

export interface RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileResponse {
  id: string;
  name: string;
  size: string | null;
  mime_type: string;
  author_uid: string;
  card_uid: string;
  custom_property_uid: string;
  company_uid: string;
  entity_type: string;
  created: string;
  updated: string;
  card_cover: boolean;
}

export interface RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileParams extends OperationOptions {
  card_uid: string;
  property_uid: string;
  id: string;
  body: RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileBody;
  signal?: AbortSignal;
}

export const createFilesResources = (transport: HttpTransport) => ({
  cardFiles: {
    /** @deprecated Use restrictedAccessCardFiles.attachFileToCard. */
    /** @see https://developers.kaiten.ru/card-files/attach-file-to-card */
    attachFileToCard: (params: CardFilesAttachFileToCardParams) => {
      const form = new FormData();
      form.append("file", params.file, params.filename ?? "file");
      return transport.request<CardFilesAttachFileToCardResponse>({
        method: "PUT",
        path: "/cards/" + pathSegment(params.card_id) + "/files",
        body: form,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-files/detach-file-from-card */
    detachFileFromCard: (params: CardFilesDetachFileFromCardParams) => {
      return transport.request<CardFilesDetachFileFromCardResponse>({
        method: "DELETE",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/files/" +
          pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/card-files/update-file */
    updateFile: (params: CardFilesUpdateFileParams) => {
      return transport.request<CardFilesUpdateFileResponse>({
        method: "PATCH",
        path:
          "/cards/" +
          pathSegment(params.card_id) +
          "/files/" +
          pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  restrictedAccessCardFiles: {
    /** @see https://developers.kaiten.ru/restricted-access-card-files/attach-file-to-card */
    attachFileToCard: (
      params: RestrictedAccessCardFilesAttachFileToCardParams,
    ) => {
      const form = new FormData();
      form.append("file", params.file, params.filename ?? "file");
      return transport.request<RestrictedAccessCardFilesAttachFileToCardResponse>(
        {
          method: "POST",
          path: "/cards/" + pathSegment(params.card_uid) + "/files",
          body: form,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/restricted-access-card-files/delete-card-file */
    deleteCardFile: (params: RestrictedAccessCardFilesDeleteCardFileParams) => {
      return transport.request<RestrictedAccessCardFilesDeleteCardFileResponse>(
        {
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(params.card_uid) +
            "/files/" +
            pathSegment(params.id),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/restricted-access-card-files/get-card-file */
    getCardFile: (params: RestrictedAccessCardFilesGetCardFileParams) => {
      return transport.request<
        RestrictedAccessCardFilesGetCardFileResponse | { location: string }
      >({
        method: "GET",
        path:
          "/cards/" +
          pathSegment(params.card_uid) +
          "/files/" +
          pathSegment(params.id),
        query: params.query,
        responseMode: params.query?.redirect === true ? "redirect" : "json",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-card-files/update-card-file */
    updateCardFile: (params: RestrictedAccessCardFilesUpdateCardFileParams) => {
      return transport.request<RestrictedAccessCardFilesUpdateCardFileResponse>(
        {
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(params.card_uid) +
            "/files/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
  restrictedAccessCommentFiles: {
    /** @see https://developers.kaiten.ru/restricted-access-comment-files/attach-file-to-comment */
    attachFileToComment: (
      params: RestrictedAccessCommentFilesAttachFileToCommentParams,
    ) => {
      const form = new FormData();
      form.append("file", params.file, params.filename ?? "file");
      return transport.request<RestrictedAccessCommentFilesAttachFileToCommentResponse>(
        {
          method: "POST",
          path:
            "/cards/" +
            pathSegment(params.card_uid) +
            "/comments/" +
            pathSegment(params.comment_uid) +
            "/files",
          body: form,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/restricted-access-comment-files/delete-comment-file */
    deleteCommentFile: (
      params: RestrictedAccessCommentFilesDeleteCommentFileParams,
    ) => {
      return transport.request<RestrictedAccessCommentFilesDeleteCommentFileResponse>(
        {
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(params.card_uid) +
            "/comments/" +
            pathSegment(params.comment_uid) +
            "/files/" +
            pathSegment(params.id),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/restricted-access-comment-files/get-comment-file */
    getCommentFile: (
      params: RestrictedAccessCommentFilesGetCommentFileParams,
    ) => {
      return transport.request<
        | RestrictedAccessCommentFilesGetCommentFileResponse
        | { location: string }
      >({
        method: "GET",
        path:
          "/cards/" +
          pathSegment(params.card_uid) +
          "/comments/" +
          pathSegment(params.comment_uid) +
          "/files/" +
          pathSegment(params.id),
        query: params.query,
        responseMode: params.query?.redirect === true ? "redirect" : "json",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-comment-files/update-comment-file */
    updateCommentFile: (
      params: RestrictedAccessCommentFilesUpdateCommentFileParams,
    ) => {
      return transport.request<RestrictedAccessCommentFilesUpdateCommentFileResponse>(
        {
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(params.card_uid) +
            "/comments/" +
            pathSegment(params.comment_uid) +
            "/files/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
  restrictedAccessCustomPropertyFiles: {
    /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/attach-file-to-custom-property */
    attachFileToCustomProperty: (
      params: RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyParams,
    ) => {
      const form = new FormData();
      form.append("file", params.file, params.filename ?? "file");
      return transport.request<RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyResponse>(
        {
          method: "POST",
          path:
            "/cards/" +
            pathSegment(params.card_uid) +
            "/custom-properties/" +
            pathSegment(params.property_uid) +
            "/files",
          body: form,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/delete-custom-property-file */
    deleteCustomPropertyFile: (
      params: RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileParams,
    ) => {
      return transport.request<RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileResponse>(
        {
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(params.card_uid) +
            "/custom-properties/" +
            pathSegment(params.property_uid) +
            "/files/" +
            pathSegment(params.id),
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/get-custom-property-file */
    getCustomPropertyFile: (
      params: RestrictedAccessCustomPropertyFilesGetCustomPropertyFileParams,
    ) => {
      return transport.request<
        | RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse
        | { location: string }
      >({
        method: "GET",
        path:
          "/cards/" +
          pathSegment(params.card_uid) +
          "/custom-properties/" +
          pathSegment(params.property_uid) +
          "/files/" +
          pathSegment(params.id),
        query: params.query,
        responseMode: params.query?.redirect === true ? "redirect" : "json",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/update-custom-property-file */
    updateCustomPropertyFile: (
      params: RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileParams,
    ) => {
      return transport.request<RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileResponse>(
        {
          method: "PATCH",
          path:
            "/cards/" +
            pathSegment(params.card_uid) +
            "/custom-properties/" +
            pathSegment(params.property_uid) +
            "/files/" +
            pathSegment(params.id),
          body: params.body,
          signal: params.signal,
        },
      );
    },
  },
});
