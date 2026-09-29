import type {
  CardsRetrieveCardResponse,
  UsersRetrieveCurrentUserResponse,
} from "./generated/rest.js";

export interface AddonTokenResponse {
  access_token: string;
  expires_at: string;
}

export interface AddonApiResponse<T> {
  ok: boolean;
  status: number;
  data: T;
}

/** The API client supplied by Kaiten's browser SDK. */
export interface AddonPlatformApiClient {
  authorize(options?: { scope?: string }): Promise<AddonTokenResponse>;
  getAccessToken(): Promise<AddonTokenResponse>;
  refreshToken(): Promise<AddonTokenResponse>;
  request<T = unknown>(
    endpoint: string,
    options?: RequestInit,
  ): Promise<AddonApiResponse<T>>;
  get<T = unknown>(endpoint: string): Promise<T>;
  post<T = unknown>(endpoint: string, data: unknown): Promise<T>;
  patch<T = unknown>(endpoint: string, data: unknown): Promise<T>;
  delete<T = unknown>(endpoint: string): Promise<T>;
}

export type AddonDataScope = "card" | "user";
export type AddonDataVisibility = "private" | "shared";

export interface AddonPermissions {
  card?: {
    create?: boolean;
    update?: boolean;
    read?: boolean;
    delete?: boolean;
    comment?: boolean;
    move?: boolean;
    properties?: boolean;
  };
  board?: {
    create?: boolean;
    update?: boolean;
    read?: boolean;
    delete?: boolean;
  };
}

export interface AddonContextData {
  addon_id: string;
  board_id?: number;
  card_id?: number;
  company_id: number;
  user_id: number;
  permissions: AddonPermissions;
}

export interface AddonCardType {
  id: number;
  name: string;
  color: number;
  letter: string;
}

export interface AddonCardMember {
  id: number;
  uid: string;
  full_name: string;
  username: string;
  type: 1 | 2;
}

export interface AddonCardTag {
  id: number;
  name: string;
  color: number;
  created: string;
  updated: string;
}

export interface AddonCardProperty {
  property: Record<string, unknown>;
  value: unknown;
}

export interface AddonCardFile {
  id: number | string;
  name: string;
  [field: string]: unknown;
}

export interface AddonPopupItem {
  text: string;
  secondaryText?: string;
  callback?: (context: AddonContext) => void | Promise<void>;
  url?: string;
}

export interface AddonPopupSearch {
  enabled?: boolean;
  emptyLabel?: string;
  debounce?: number;
}

export type AddonPopupOptions =
  | {
      type: "iframe";
      url: string;
      title?: string;
      height?: number;
      width?: number;
    }
  | {
      type: "confirm";
      text: string;
      title?: string;
      confirmLabel?: string;
      confirmCallback: (context: AddonContext) => void | Promise<void>;
      cancelLabel?: string;
      cancelCallback?: (context: AddonContext) => void | Promise<void>;
    }
  | {
      type: "staticList";
      items: AddonPopupItem[];
      title?: string;
      search?: AddonPopupSearch;
    }
  | {
      type: "dynamicList";
      items: (
        context: AddonContext,
        options: { data: { searchValue: string } },
      ) => AddonPopupItem[] | Promise<AddonPopupItem[]>;
      title?: string;
      loadingLabel?: string;
      search?: AddonPopupSearch;
    };

export interface AddonDialogOptions {
  url: string;
  title?: string;
  height?: number;
  width?: "xs" | "sm" | "md" | "lg" | "xl";
  fullScreen?: boolean;
  primaryActionCallback?: (context: AddonContext) => void | Promise<void>;
  primaryActionLabel?: string;
  secondaryActionCallback?: (context: AddonContext) => void | Promise<void>;
  secondaryActionLabel?: string;
  onCloseCallback?: (context: AddonContext) => void | Promise<void>;
  additionalActions?: { title: string; iconUrl?: string; url?: string }[];
}

/** Functions made available to addon capability callbacks and iframes. */
export interface AddonContext {
  setData(
    scope: AddonDataScope,
    visibility: AddonDataVisibility,
    values: Record<string, unknown>,
  ): Promise<void>;
  setData(
    scope: AddonDataScope,
    visibility: AddonDataVisibility,
    key: string,
    value: unknown,
  ): Promise<void>;
  getData<T = unknown>(
    scope: AddonDataScope,
    visibility: AddonDataVisibility,
    key: string,
  ): Promise<T>;
  getAllData(): Promise<Record<string, unknown>>;
  setSettings(settings: Record<string, unknown>): Promise<void>;
  getSettings(): Promise<Record<string, unknown>[]>;
  getPermissions(): Promise<AddonPermissions>;
  getContext(): Promise<AddonContextData>;
  getCard(): Promise<CardsRetrieveCardResponse>;
  getCardProperties(subject: "type"): Promise<AddonCardType>;
  getCardProperties(subject: "members"): Promise<AddonCardMember[]>;
  getCardProperties(subject: "tags"): Promise<AddonCardTag[]>;
  getCardProperties(subject: "customProperties"): Promise<AddonCardProperty[]>;
  getCardProperties(subject: "files"): Promise<AddonCardFile[]>;
  getCurrentUser(): Promise<UsersRetrieveCurrentUserResponse>;
  signUrl(url: string, args?: Record<string, unknown>): string;
  storeSecret(key: string, value: string): Promise<void>;
  getSecret(key: string): Promise<string | null>;
  clearSecret(key: string): Promise<void>;
  getLanguage(): "ru" | "en";
  /** @deprecated Use getLanguage(). */
  getLocale(): "ru" | "en";
  getThemeType(): "light" | "dark";
  render(callback: () => void | Promise<void>): void;
  openPopup(options: AddonPopupOptions): Promise<void>;
  closePopup(): void;
  openDialog(options: AddonDialogOptions): Promise<void>;
  closeDialog(): Promise<void>;
  showSnackbar(
    text: string,
    level?: "success" | "info" | "warning" | "error",
  ): Promise<void>;
  fitSize(elementOrHeight: string | Element | number): Promise<void>;
  authorize(authUrl: string | (() => string)): Promise<string>;
  getApiClient(): AddonPlatformApiClient;
  arg<T = unknown>(key: string): T;
}

export interface AddonCardButton {
  text: string;
  isVisibleForReader?: boolean;
  callback?: (context: AddonContext, options: unknown) => void | Promise<void>;
}

export interface AddonCardBodySection {
  title: string;
  content: { type: "iframe"; url: string; height?: number };
}

export interface AddonCardFacadeBadge {
  text: string;
  color?: "green" | "red" | "orange";
  icon?: string;
}

export interface AddonCapabilities {
  settings?: (context: AddonContext) => unknown;
  card_buttons?: (
    context: AddonContext,
  ) => AddonCardButton[] | Promise<AddonCardButton[]>;
  card_body_section?: (
    context: AddonContext,
  ) => AddonCardBodySection[] | Promise<AddonCardBodySection[]>;
  card_facade_badges?: (
    context: AddonContext,
  ) =>
    | AddonCardFacadeBadge
    | AddonCardFacadeBadge[]
    | Promise<AddonCardFacadeBadge | AddonCardFacadeBadge[]>;
}

/** Global provided by https://files.kaiten.ru/web-sdk/v1.min.js. */
export interface KaitenAddonSdk {
  initialize(capabilities: AddonCapabilities): void;
  iframe(): AddonContext;
}

declare global {
  const Addon: KaitenAddonSdk;
  interface Window {
    handleOAuthCallback?: () => void;
  }
}
