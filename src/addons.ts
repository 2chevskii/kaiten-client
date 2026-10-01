import type { CustomPropertyValues, JsonValue } from "./types.js";

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
  delete<T = unknown>(endpoint: string): Promise<T | void>;
}

/** Card fields provided by the browser SDK before loading related entities. */
export interface AddonCard {
  id: number;
  title: string;
  created: string;
  updated: string;
  archived: boolean;
  asap: boolean;
  blocked: boolean;
  blocking_card: boolean;
  board_id: number;
  column_id: number;
  lane_id: number | null;
  owner_id: number;
  type_id: number | null;
  state: number;
  condition: number;
  version: number;
  updater_id: number;
  description: string | null;
  description_filled: boolean;
  due_date: string | null;
  due_date_time_present: boolean;
  expires_later: boolean;
  sort_order: number;
  fifo_order: number | null;
  size: number | null;
  size_text: string | null;
  size_unit: string | null;
  planned_start: string | null;
  planned_end: string | null;
  calculated_planned_start: string | null;
  calculated_planned_end: string | null;
  ignore_planned_dates_recalculation: boolean;
  completed_at: string | null;
  completed_on_time: boolean | null;
  last_moved_at: string | null;
  column_changed_at: string | null;
  lane_changed_at: string | null;
  first_moved_to_in_progress_at: string | null;
  last_moved_to_done_at: string | null;
  children_count: number;
  children_done: number;
  parents_count: number;
  children_ids: number[] | null;
  parents_ids: number[] | null;
  parent_checklist_ids: number[] | null;
  has_blocked_children: boolean;
  goals_total: number;
  goals_done: number;
  comments_total: number;
  comment_last_added_at: string | null;
  properties: CustomPropertyValues | null;
  service_id: number | null;
  sd_new_comment: boolean;
  public: boolean;
  share_id: string | null;
  share_settings: Record<string, JsonValue> | null;
  external_user_emails: string | null;
  email: string;
  time_spent_sum: number;
  time_blocked_sum: number;
  children_number_properties_sum: number | Record<string, number> | null;
  estimate_workload: number;
}

export interface AddonCurrentUser {
  id: number;
  uid: string;
  username: string;
  full_name: string;
  avatar_initials_url: string | null;
  avatar_uploaded_url: string | null;
  avatar_type: 1 | 2 | 3;
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
  uid?: string;
  url: string;
  size?: number | string | null;
  type?: number;
  author_id?: number;
  comment_id?: number | null;
  created?: string;
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

export interface AddonDialogAction {
  title: string;
  iconUrl?: string;
  url?: string;
  callback?: (context: AddonContext) => void | Promise<void>;
}

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
  additionalActions?: AddonDialogAction[];
}

/** Functions made available to addon capability callbacks and iframes. */
export interface AddonContext {
  setData(
    scope: "user",
    visibility: "private",
    values: Record<string, unknown>,
  ): Promise<void>;
  setData(
    scope: "card",
    visibility: AddonDataVisibility,
    values: Record<string, unknown>,
  ): Promise<void>;
  setData(
    scope: "user",
    visibility: "private",
    key: string,
    value: unknown,
  ): Promise<void>;
  setData(
    scope: "card",
    visibility: AddonDataVisibility,
    key: string,
    value: unknown,
  ): Promise<void>;
  getData<T = unknown>(
    scope: "user",
    visibility: "private",
    key: string,
  ): Promise<T>;
  getData<T = unknown>(
    scope: "card",
    visibility: AddonDataVisibility,
    key: string,
  ): Promise<T>;
  getAllData(): Promise<Record<string, unknown>>;
  setSettings(settings: Record<string, unknown>): Promise<void>;
  getSettings(): Promise<Record<string, unknown>[]>;
  getPermissions(): Promise<AddonPermissions>;
  getContext(): Promise<AddonContextData>;
  getCard(): Promise<AddonCard>;
  getCardProperties(subject: "type"): Promise<AddonCardType>;
  getCardProperties(subject: "members"): Promise<AddonCardMember[]>;
  getCardProperties(subject: "tags"): Promise<AddonCardTag[]>;
  getCardProperties(subject: "customProperties"): Promise<AddonCardProperty[]>;
  getCardProperties(subject: "files"): Promise<AddonCardFile[]>;
  getCurrentUser(): Promise<AddonCurrentUser>;
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

export type AddonCardFacadeBadges =
  AddonCardFacadeBadge | AddonCardFacadeBadge[] | null;

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
  ) => AddonCardFacadeBadges | Promise<AddonCardFacadeBadges>;
}

/** Global provided by https://files.kaiten.ru/web-sdk/v1.min.js. */
export interface KaitenAddonSdk {
  initialize(capabilities: AddonCapabilities): void;
  iframe(): AddonContext;
}

declare global {
  const Addon: KaitenAddonSdk;
  interface Window {
    Addon: KaitenAddonSdk;
    handleOAuthCallback?: () => void;
  }
}
