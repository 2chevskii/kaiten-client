import type { FileRedirectResponse, FileUploadOptions } from "../http.ts";
import type { HttpTransport, OperationOptions } from "../http.ts";

import { pathSegment } from "../http.ts";

export interface CardFilesAttachFileToCardResponse {
  author_id: number;
  card_cover: boolean;
  card_id: number;
  comment_id: number | null;
  created: string;
  deleted: boolean;
  external: boolean;
  id: number;
  mh_markup_id: number | null;
  mh_secret: string | null;
  name: string;
  size: number | null;
  sort_order: number;
  type: number;
  updated: string;
  url: string;
}

export type CardFilesAttachFileToCardParams = Parameters<
  ReturnType<typeof createFilesResources>["cardFiles"]["attachFileToCard"]
>;

export interface CardFilesDetachFileFromCardResponse {
  id: number;
}

export type CardFilesDetachFileFromCardParams = Parameters<
  ReturnType<typeof createFilesResources>["cardFiles"]["detachFileFromCard"]
>;

export interface CardFilesUpdateFileBody {
  card_cover?: boolean;
}

export type CardFilesUpdateFileResponse = Record<string, unknown>;

export type CardFilesUpdateFileParams = Parameters<
  ReturnType<typeof createFilesResources>["cardFiles"]["updateFile"]
>;

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

export type RestrictedAccessCardFilesAttachFileToCardParams = Parameters<
  ReturnType<
    typeof createFilesResources
  >["restrictedAccessCardFiles"]["attachFileToCard"]
>;

export interface RestrictedAccessCardFilesDeleteCardFileResponse {
  id: string;
}

export type RestrictedAccessCardFilesDeleteCardFileParams = Parameters<
  ReturnType<
    typeof createFilesResources
  >["restrictedAccessCardFiles"]["deleteCardFile"]
>;

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

export type RestrictedAccessCardFilesGetCardFileParams = Parameters<
  ReturnType<
    typeof createFilesResources
  >["restrictedAccessCardFiles"]["getCardFile"]
>;

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

export type RestrictedAccessCardFilesUpdateCardFileParams = Parameters<
  ReturnType<
    typeof createFilesResources
  >["restrictedAccessCardFiles"]["updateCardFile"]
>;

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

export type RestrictedAccessCommentFilesAttachFileToCommentParams = Parameters<
  ReturnType<
    typeof createFilesResources
  >["restrictedAccessCommentFiles"]["attachFileToComment"]
>;

export interface RestrictedAccessCommentFilesDeleteCommentFileResponse {
  id: string;
}

export type RestrictedAccessCommentFilesDeleteCommentFileParams = Parameters<
  ReturnType<
    typeof createFilesResources
  >["restrictedAccessCommentFiles"]["deleteCommentFile"]
>;

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

export type RestrictedAccessCommentFilesGetCommentFileParams = Parameters<
  ReturnType<
    typeof createFilesResources
  >["restrictedAccessCommentFiles"]["getCommentFile"]
>;

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

export type RestrictedAccessCommentFilesUpdateCommentFileParams = Parameters<
  ReturnType<
    typeof createFilesResources
  >["restrictedAccessCommentFiles"]["updateCommentFile"]
>;

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

export type RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyParams =
  Parameters<
    ReturnType<
      typeof createFilesResources
    >["restrictedAccessCustomPropertyFiles"]["attachFileToCustomProperty"]
  >;

export interface RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileResponse {
  id: string;
}

export type RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileParams =
  Parameters<
    ReturnType<
      typeof createFilesResources
    >["restrictedAccessCustomPropertyFiles"]["deleteCustomPropertyFile"]
  >;

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

export type RestrictedAccessCustomPropertyFilesGetCustomPropertyFileParams =
  Parameters<
    ReturnType<
      typeof createFilesResources
    >["restrictedAccessCustomPropertyFiles"]["getCustomPropertyFile"]
  >;

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

export type RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileParams =
  Parameters<
    ReturnType<
      typeof createFilesResources
    >["restrictedAccessCustomPropertyFiles"]["updateCustomPropertyFile"]
  >;

export const createFilesResources = (transport: HttpTransport) => {
  function getCardFile(
    cardUid: string,
    fileUid: string,
    redirect: true,
    download?: boolean,
    options?: OperationOptions,
  ): Promise<FileRedirectResponse>;
  function getCardFile(
    cardUid: string,
    fileUid: string,
    redirect?: false,
    download?: boolean,
    options?: OperationOptions,
  ): Promise<RestrictedAccessCardFilesGetCardFileResponse>;
  function getCardFile(
    cardUid: string,
    fileUid: string,
    redirect: boolean | undefined,
    download?: boolean,
    options?: OperationOptions,
  ): Promise<
    RestrictedAccessCardFilesGetCardFileResponse | FileRedirectResponse
  >;
  function getCardFile(
    cardUid: string,
    fileUid: string,
    redirect?: boolean,
    download?: boolean,
    options?: OperationOptions,
  ): Promise<
    RestrictedAccessCardFilesGetCardFileResponse | FileRedirectResponse
  > {
    return transport.request<
      RestrictedAccessCardFilesGetCardFileResponse | { location: string }
    >({
      method: "GET",
      path: "/cards/" + pathSegment(cardUid) + "/files/" + pathSegment(fileUid),
      query: { redirect, download },
      responseMode: redirect === true ? "redirect" : "json",
      signal: options?.signal,
    });
  }

  function getCommentFile(
    cardUid: string,
    commentUid: string,
    fileUid: string,
    query: RestrictedAccessCommentFilesGetCommentFileQuery & { redirect: true },
    options?: OperationOptions,
  ): Promise<FileRedirectResponse>;
  function getCommentFile(
    cardUid: string,
    commentUid: string,
    fileUid: string,
    query?: Omit<
      RestrictedAccessCommentFilesGetCommentFileQuery,
      "redirect"
    > & { redirect?: false },
    options?: OperationOptions,
  ): Promise<RestrictedAccessCommentFilesGetCommentFileResponse>;
  function getCommentFile(
    cardUid: string,
    commentUid: string,
    fileUid: string,
    query: RestrictedAccessCommentFilesGetCommentFileQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    RestrictedAccessCommentFilesGetCommentFileResponse | FileRedirectResponse
  >;
  function getCommentFile(
    cardUid: string,
    commentUid: string,
    fileUid: string,
    query?: RestrictedAccessCommentFilesGetCommentFileQuery,
    options?: OperationOptions,
  ): Promise<
    RestrictedAccessCommentFilesGetCommentFileResponse | FileRedirectResponse
  > {
    return transport.request<
      RestrictedAccessCommentFilesGetCommentFileResponse | { location: string }
    >({
      method: "GET",
      path:
        "/cards/" +
        pathSegment(cardUid) +
        "/comments/" +
        pathSegment(commentUid) +
        "/files/" +
        pathSegment(fileUid),
      query,
      responseMode: query?.redirect === true ? "redirect" : "json",
      signal: options?.signal,
    });
  }

  function getCustomPropertyFile(
    cardUid: string,
    propertyUid: string,
    fileUid: string,
    query: RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery & {
      redirect: true;
    },
    options?: OperationOptions,
  ): Promise<FileRedirectResponse>;
  function getCustomPropertyFile(
    cardUid: string,
    propertyUid: string,
    fileUid: string,
    query?: Omit<
      RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery,
      "redirect"
    > & { redirect?: false },
    options?: OperationOptions,
  ): Promise<RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse>;
  function getCustomPropertyFile(
    cardUid: string,
    propertyUid: string,
    fileUid: string,
    query:
      RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery | undefined,
    options?: OperationOptions,
  ): Promise<
    | RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse
    | FileRedirectResponse
  >;
  function getCustomPropertyFile(
    cardUid: string,
    propertyUid: string,
    fileUid: string,
    query?: RestrictedAccessCustomPropertyFilesGetCustomPropertyFileQuery,
    options?: OperationOptions,
  ): Promise<
    | RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse
    | FileRedirectResponse
  > {
    return transport.request<
      | RestrictedAccessCustomPropertyFilesGetCustomPropertyFileResponse
      | { location: string }
    >({
      method: "GET",
      path:
        "/cards/" +
        pathSegment(cardUid) +
        "/custom-properties/" +
        pathSegment(propertyUid) +
        "/files/" +
        pathSegment(fileUid),
      query,
      responseMode: query?.redirect === true ? "redirect" : "json",
      signal: options?.signal,
    });
  }
  return {
    cardFiles: {
      /** @deprecated Use restrictedAccessCardFiles.attachFileToCard. */
      /** @see https://developers.kaiten.ru/card-files/attach-file-to-card */
      attachFileToCard: (
        cardId: number,
        file: Blob,
        options?: FileUploadOptions,
      ) => {
        const form = createFileForm(file, options?.filename);
        return transport.request<CardFilesAttachFileToCardResponse>({
          method: "PUT",
          path: "/cards/" + pathSegment(cardId) + "/files",
          body: form,
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-files/detach-file-from-card */
      detachFileFromCard: (
        cardId: number,
        fileId: number,
        options?: OperationOptions,
      ) => {
        return transport.request<CardFilesDetachFileFromCardResponse>({
          method: "DELETE",
          path:
            "/cards/" + pathSegment(cardId) + "/files/" + pathSegment(fileId),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/card-files/update-file */
      updateFile: (
        cardId: number,
        fileId: number,
        cardCover?: boolean,
        options?: OperationOptions,
      ) => {
        return transport.request<CardFilesUpdateFileResponse>({
          method: "PATCH",
          path:
            "/cards/" + pathSegment(cardId) + "/files/" + pathSegment(fileId),
          body: { card_cover: cardCover },
          signal: options?.signal,
        });
      },
    },
    restrictedAccessCardFiles: {
      /** @see https://developers.kaiten.ru/restricted-access-card-files/attach-file-to-card */
      attachFileToCard: (
        cardUid: string,
        file: Blob,
        options?: FileUploadOptions,
      ) => {
        const form = createFileForm(file, options?.filename);
        return transport.request<RestrictedAccessCardFilesAttachFileToCardResponse>(
          {
            method: "POST",
            path: "/cards/" + pathSegment(cardUid) + "/files",
            body: form,
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/restricted-access-card-files/delete-card-file */
      deleteCardFile: (
        cardUid: string,
        fileUid: string,
        options?: OperationOptions,
      ) => {
        return transport.request<RestrictedAccessCardFilesDeleteCardFileResponse>(
          {
            method: "DELETE",
            path:
              "/cards/" +
              pathSegment(cardUid) +
              "/files/" +
              pathSegment(fileUid),
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/restricted-access-card-files/get-card-file */
      getCardFile,
      /** @see https://developers.kaiten.ru/restricted-access-card-files/update-card-file */
      updateCardFile: (
        cardUid: string,
        fileUid: string,
        name?: string,
        cardCover?: boolean,
        options?: OperationOptions,
      ) => {
        return transport.request<RestrictedAccessCardFilesUpdateCardFileResponse>(
          {
            method: "PATCH",
            path:
              "/cards/" +
              pathSegment(cardUid) +
              "/files/" +
              pathSegment(fileUid),
            body: { name, card_cover: cardCover },
            signal: options?.signal,
          },
        );
      },
    },
    restrictedAccessCommentFiles: {
      /** @see https://developers.kaiten.ru/restricted-access-comment-files/attach-file-to-comment */
      attachFileToComment: (
        cardUid: string,
        commentUid: string,
        file: Blob,
        options?: FileUploadOptions,
      ) => {
        const form = createFileForm(file, options?.filename);
        return transport.request<RestrictedAccessCommentFilesAttachFileToCommentResponse>(
          {
            method: "POST",
            path:
              "/cards/" +
              pathSegment(cardUid) +
              "/comments/" +
              pathSegment(commentUid) +
              "/files",
            body: form,
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/restricted-access-comment-files/delete-comment-file */
      deleteCommentFile: (
        cardUid: string,
        commentUid: string,
        fileUid: string,
        options?: OperationOptions,
      ) => {
        return transport.request<RestrictedAccessCommentFilesDeleteCommentFileResponse>(
          {
            method: "DELETE",
            path:
              "/cards/" +
              pathSegment(cardUid) +
              "/comments/" +
              pathSegment(commentUid) +
              "/files/" +
              pathSegment(fileUid),
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/restricted-access-comment-files/get-comment-file */
      getCommentFile,
      /** @see https://developers.kaiten.ru/restricted-access-comment-files/update-comment-file */
      updateCommentFile: (
        cardUid: string,
        commentUid: string,
        fileUid: string,
        body: RestrictedAccessCommentFilesUpdateCommentFileBody,
        options?: OperationOptions,
      ) => {
        return transport.request<RestrictedAccessCommentFilesUpdateCommentFileResponse>(
          {
            method: "PATCH",
            path:
              "/cards/" +
              pathSegment(cardUid) +
              "/comments/" +
              pathSegment(commentUid) +
              "/files/" +
              pathSegment(fileUid),
            body,
            signal: options?.signal,
          },
        );
      },
    },
    restrictedAccessCustomPropertyFiles: {
      /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/attach-file-to-custom-property */
      attachFileToCustomProperty: (
        cardUid: string,
        propertyUid: string,
        file: Blob,
        options?: FileUploadOptions,
      ) => {
        const form = createFileForm(file, options?.filename);
        return transport.request<RestrictedAccessCustomPropertyFilesAttachFileToCustomPropertyResponse>(
          {
            method: "POST",
            path:
              "/cards/" +
              pathSegment(cardUid) +
              "/custom-properties/" +
              pathSegment(propertyUid) +
              "/files",
            body: form,
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/delete-custom-property-file */
      deleteCustomPropertyFile: (
        cardUid: string,
        propertyUid: string,
        fileUid: string,
        options?: OperationOptions,
      ) => {
        return transport.request<RestrictedAccessCustomPropertyFilesDeleteCustomPropertyFileResponse>(
          {
            method: "DELETE",
            path:
              "/cards/" +
              pathSegment(cardUid) +
              "/custom-properties/" +
              pathSegment(propertyUid) +
              "/files/" +
              pathSegment(fileUid),
            signal: options?.signal,
          },
        );
      },
      /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/get-custom-property-file */
      getCustomPropertyFile,
      /** @see https://developers.kaiten.ru/restricted-access-custom-property-files/update-custom-property-file */
      updateCustomPropertyFile: (
        cardUid: string,
        propertyUid: string,
        fileUid: string,
        body: RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileBody,
        options?: OperationOptions,
      ) => {
        return transport.request<RestrictedAccessCustomPropertyFilesUpdateCustomPropertyFileResponse>(
          {
            method: "PATCH",
            path:
              "/cards/" +
              pathSegment(cardUid) +
              "/custom-properties/" +
              pathSegment(propertyUid) +
              "/files/" +
              pathSegment(fileUid),
            body,
            signal: options?.signal,
          },
        );
      },
    },
  };
};

function createFileForm(file: Blob, filename?: string): FormData {
  const form = new FormData();
  form.append(
    "file",
    file,
    filename ?? (file instanceof File ? file.name : "file"),
  );
  return form;
}
