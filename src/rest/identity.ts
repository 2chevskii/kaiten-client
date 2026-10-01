import type { UserRoleSummary, SpaceSummary } from "../entities.js";
import type { JsonValue, RequireAtLeastOne } from "../types.js";
import type { HttpTransport, OperationOptions } from "../http.js";

import { pathSegment } from "../http.js";

export interface CompanyUsersGetListOfUsersQuery {
  invitesOnly?: boolean;
  withTransferAccessStatus?: boolean;
  for_members_section?: boolean;
  owner_only?: boolean;
  only_paid?: boolean;
  only_records_count?: boolean;
  only_virtual?: boolean;
  offset?: number;
  limit?: number;
  query?: string;
  access_type_permissions?: string;
  sd_access_type?: string;
  take_licence?: string;
  temporarily_inactive_status?: string;
  group_ids?: unknown[];
  permissions?: unknown[];
}

export type CompanyUsersGetListOfUsersResponse = {
  id: number;
  uid: string;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  timezone: string;
  theme: string;
  created: string;
  updated: string;
  activated: boolean;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  permissions: number;
  own_permissions: number;
  spaces: SpaceSummary[];
  groups: {
    created: string;
    updated: string;
    id: number;
    uid: string;
    name: string;
    company_id: number;
    permissions: number;
    add_to_cards_and_spaces_enabled: boolean;
    spaces: {
      archived: boolean;
      uid: string;
      access: string;
      for_everyone_access_role_id: string;
      entity_type: string;
      path: string;
      sort_order: number;
      parent_entity_uid: string | null;
      created: string;
      updated: string;
      company_id: number;
      id: number;
      title: string;
      hidden_card_type_uids: string[] | null;
      external_id: string | null;
      settings: JsonValue;
      group_id: number;
      entity_uid: string;
    }[];
    user_id: number;
    group_id: number;
  }[];
  company_id: number;
  user_id: number;
  default_space_id: number | null;
  role: number;
  email_frequency: number;
  email_settings: boolean | null;
  slack_id: number | null;
  slack_settings: Record<string, unknown> | null;
  notification_settings: Record<string, JsonValue> | null;
  notification_enabled_channels: string[];
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string | null;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
  work_time_settings: {
    work_days: number[];
    hours_count: number;
  };
  personal_settings: Record<string, unknown> | null;
  locked: boolean;
  take_licence: boolean;
}[];

export type CompanyUsersGetListOfUsersParams = Parameters<
  ReturnType<typeof createIdentityResources>["companyUsers"]["getListOfUsers"]
>;

export interface CompanyUsersRemoveVirtualUserResponse {
  id: number;
}

export type CompanyUsersRemoveVirtualUserParams = Parameters<
  ReturnType<
    typeof createIdentityResources
  >["companyUsers"]["removeVirtualUser"]
>;

export interface CompanyUsersUpdateUserBody {
  apps_permissions?: number;
  temporarily_inactive?: boolean;
}

export interface CompanyUsersUpdateUserResponse {
  id: number;
  uid: string;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  timezone: string;
  theme: string;
  created: string;
  updated: string;
  activated: boolean;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  user_id: number;
  company_id: number;
  default_space_id: number | null;
  role: number;
  permissions: number;
  apps_permissions: number;
  email_frequency: number;
  email_settings: string | null;
  slack_id: number | null;
  slack_private_channel_id: number | null;
  slack_settings: Record<string, unknown> | null;
  telegram_sd_bot_enabled: boolean;
  external: boolean;
  notification_settings: Record<string, JsonValue> | null;
  work_time_settings: {
    work_days: number[];
    hours_count: number;
  };
  invite_last_sent_at: string | null;
  last_request_date: string | null;
  last_request_method: string | null;
  notification_enabled_channels: string[];
  personal_settings: Record<string, unknown> | null;
  locked: boolean;
  temporarily_inactive: boolean;
}

export type CompanyUsersUpdateUserParams = Parameters<
  ReturnType<typeof createIdentityResources>["companyUsers"]["updateUser"]
>;

export interface GroupAdminsAddAdminToGroupBody {
  user_id: number;
}

export interface GroupAdminsAddAdminToGroupResponse {
  id: number;
  uid: string;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  timezone: string;
  theme: string;
  created: string;
  updated: string;
  activated: boolean;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
}

export type GroupAdminsAddAdminToGroupParams = Parameters<
  ReturnType<typeof createIdentityResources>["groupAdmins"]["addAdminToGroup"]
>;

export type GroupAdminsGetListOfGroupAdminsResponse = {
  created: string;
  updated: string;
  id: number;
  uid: string;
  full_name: string;
  username: string;
  email: string;
  activated: boolean;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  sd_telegram_id: number | null;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  delete_confirmation_sent_at: string | null;
}[];

export type GroupAdminsGetListOfGroupAdminsParams = Parameters<
  ReturnType<
    typeof createIdentityResources
  >["groupAdmins"]["getListOfGroupAdmins"]
>;

export interface GroupAdminsRemoveAdminFromGroupResponse {
  id: number;
  uid: string;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  timezone: string;
  theme: string;
  created: string;
  updated: string;
  activated: boolean;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
}

export type GroupAdminsRemoveAdminFromGroupParams = Parameters<
  ReturnType<
    typeof createIdentityResources
  >["groupAdmins"]["removeAdminFromGroup"]
>;

export interface GroupEntitiesAddEntityBody {
  entity_uid: string;
  role_ids: string[];
}

export interface GroupEntitiesAddEntityResponse {
  group_id: number;
  entity_uid: string;
  role_permissions: {
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
  access_mod: string | null;
  own_role_ids: string[];
  own_access_mod: string | null;
  role_ids: string[];
}

export type GroupEntitiesAddEntityParams = Parameters<
  ReturnType<typeof createIdentityResources>["groupEntities"]["addEntity"]
>;

export type GroupEntitiesGetListOfGroupEntitiesResponse = {
  uid: string;
  path: string;
  title: string;
  entity_type: string;
  own_role_ids: string[];
}[];

export type GroupEntitiesGetListOfGroupEntitiesParams = Parameters<
  ReturnType<
    typeof createIdentityResources
  >["groupEntities"]["getListOfGroupEntities"]
>;

export interface GroupEntitiesRemoveEntityResponse {
  group_id: number;
  entity_uid: string;
  role_permissions: unknown;
  access_mod: string | null;
  role: UserRoleSummary | null;
  own_role_ids: unknown[] | null;
  own_access_mod: string | null;
  role_ids: JsonValue[];
  own_role: JsonValue;
}

export type GroupEntitiesRemoveEntityParams = Parameters<
  ReturnType<typeof createIdentityResources>["groupEntities"]["removeEntity"]
>;

export interface GroupEntitiesUpdateGroupEntityBody {
  role_ids: string[];
}

export interface GroupEntitiesUpdateGroupEntityResponse {
  group_id: number;
  entity_uid: string;
  role_permissions: {
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
  access_mod: string | null;
  own_role_ids: string[];
  own_access_mod: string | null;
  role_ids: string[];
}

export type GroupEntitiesUpdateGroupEntityParams = Parameters<
  ReturnType<
    typeof createIdentityResources
  >["groupEntities"]["updateGroupEntity"]
>;

export interface GroupUsersAddUserToGroupBody {
  user_id: number;
  request_id?: string;
  operator_comment?: string | null;
}

export interface GroupUsersAddUserToGroupResponse {
  id: number;
  uid: string;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  timezone: string;
  theme: string;
  created: string;
  updated: string;
  activated: boolean;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
}

export type GroupUsersAddUserToGroupParams = Parameters<
  ReturnType<typeof createIdentityResources>["groupUsers"]["addUserToGroup"]
>;

export type GroupUsersGetListOfGroupUsersResponse = {
  created: string;
  updated: string;
  id: number;
  uid: string;
  full_name: string;
  username: string;
  email: string;
  activated: boolean;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  sd_telegram_id: number | null;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  delete_confirmation_sent_at: string | null;
}[];

export type GroupUsersGetListOfGroupUsersParams = Parameters<
  ReturnType<
    typeof createIdentityResources
  >["groupUsers"]["getListOfGroupUsers"]
>;

export interface GroupUsersRemoveUserFromGroupResponse {
  id: number;
  uid: string;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  timezone: string;
  theme: string;
  created: string;
  updated: string;
  activated: boolean;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
}

export type GroupUsersRemoveUserFromGroupParams = Parameters<
  ReturnType<
    typeof createIdentityResources
  >["groupUsers"]["removeUserFromGroup"]
>;

export interface GroupsCreateGroupBody {
  name: string;
  permissions?: number;
  add_to_cards_and_spaces_enabled?: boolean;
}

export interface GroupsCreateGroupResponse {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
}

export type GroupsCreateGroupParams = Parameters<
  ReturnType<typeof createIdentityResources>["groups"]["createGroup"]
>;

export interface GroupsGetGroupResponse {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
}

export type GroupsGetGroupParams = Parameters<
  ReturnType<typeof createIdentityResources>["groups"]["getGroup"]
>;

export interface GroupsGetListOfGroupsQuery {
  with_tree_entities?: boolean;
  with_users_count?: boolean;
  with_sync_group_attribute?: boolean;
  condition?: string;
  query?: string;
  limit?: number;
  offset?: number;
}

export type GroupsGetListOfGroupsResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
}[];

export type GroupsGetListOfGroupsParams = Parameters<
  ReturnType<typeof createIdentityResources>["groups"]["getListOfGroups"]
>;

export interface GroupsRemoveGroupResponse {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
}

export type GroupsRemoveGroupParams = Parameters<
  ReturnType<typeof createIdentityResources>["groups"]["removeGroup"]
>;

export interface GroupsUpdateGroupBody {
  name?: string;
  permissions?: number;
  add_to_cards_and_spaces_enabled?: boolean;
}

export interface GroupsUpdateGroupResponse {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
}

export type GroupsUpdateGroupParams = Parameters<
  ReturnType<typeof createIdentityResources>["groups"]["updateGroup"]
>;

export interface UserRolesCreateUserRoleBody {
  name: string;
}

export interface UserRolesCreateUserRoleResponse {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
}

export type UserRolesCreateUserRoleParams = Parameters<
  ReturnType<typeof createIdentityResources>["userRoles"]["createUserRole"]
>;

export type UserRolesGetListOfUserRolesResponse = {
  created: string;
  updated: string;
  id: number;
  uid: string;
  name: string;
  company_id: number;
}[];

export type UserRolesGetListOfUserRolesParams = Parameters<
  ReturnType<typeof createIdentityResources>["userRoles"]["getListOfUserRoles"]
>;

export interface UserRolesGetUserRoleResponse {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
}

export type UserRolesGetUserRoleParams = Parameters<
  ReturnType<typeof createIdentityResources>["userRoles"]["getUserRole"]
>;

export interface UserRolesRemoveUserRoleBody {
  replace_role_id: number;
}

export interface UserRolesRemoveUserRoleResponse {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
}

export type UserRolesRemoveUserRoleParams = Parameters<
  ReturnType<typeof createIdentityResources>["userRoles"]["removeUserRole"]
>;

export interface UserRolesUpdateUserRoleBody {
  name: string;
}

export interface UserRolesUpdateUserRoleResponse {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
}

export type UserRolesUpdateUserRoleParams = Parameters<
  ReturnType<typeof createIdentityResources>["userRoles"]["updateUserRole"]
>;

export interface UsersRetrieveCurrentUserResponse {
  id: number;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  timezone: string;
  theme: string;
  created: string;
  updated: string;
  activated: boolean;
  ui_version: number;
  company_id: number;
  telegram_id: number | null;
  telegram_settings: Record<string, unknown>;
  user_id: number;
  default_space_id: number | null;
  permissions: number;
  role: number;
  email_frequency: number;
  email_settings: {
    deadlines: boolean;
    subject_by: number;
  };
  slack_id: number | null;
  slack_settings: Record<string, unknown> | null;
  notification_settings: Record<string, JsonValue> | null;
  notification_enabled_channels: string[];
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string | null;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
  has_password: boolean;
}

export type UsersRetrieveCurrentUserParams = Parameters<
  ReturnType<typeof createIdentityResources>["users"]["retrieveCurrentUser"]
>;

export interface UsersRetrieveListOfUsersQuery {
  type?: string;
  query?: string;
  access_type_permissions?: string;
  ids?: string;
  limit?: number;
  offset?: number;
  include_inactive?: boolean;
  exclude_directly_added_members_by_entity_uid?: string;
}

export type UsersRetrieveListOfUsersResponse = {
  id: number;
  full_name: string;
  email: string;
  username: string;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  timezone: string;
  theme: string;
  created: string;
  updated: string;
  activated: boolean;
  ui_version: number;
  company_id: number;
  user_id: number;
  default_space_id: number | null;
  permissions: number;
  role: number;
  email_frequency: number;
  email_settings: string | null;
  slack_id: number | null;
  slack_settings: Record<string, unknown> | null;
  notification_settings: Record<string, JsonValue> | null;
  notification_enabled_channels: string[];
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string | null;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
  include_inactive?: boolean;
}[];

export type UsersRetrieveListOfUsersParams = Parameters<
  ReturnType<typeof createIdentityResources>["users"]["retrieveListOfUsers"]
>;

export type UsersUpdateUserBody = RequireAtLeastOne<
  {
    username?: string;
    full_name?: string;
    initials?: string;
    avatar_type?: 1 | 2 | 3;
    password?: string;
    old_password?: string | null;
    lng?: string;
    default_space_id?: number | null;
    theme?: "light" | "dark" | "auto";
    email_frequency?: 1 | 2;
    timezone?: string;
    subject_by?: 1 | 2;
    email_settings?: Record<string, JsonValue>;
    telegram_settings?: Record<string, JsonValue>;
    slack_settings?: Record<string, JsonValue>;
    notification_enabled_channels?: (
      "inner" | "mobile_app" | "email" | "slack" | "telegram"
    )[];
    notification_settings?: Record<string, JsonValue>;
    ui_version?: 1 | 2;
  },
  | "username"
  | "full_name"
  | "initials"
  | "avatar_type"
  | "password"
  | "lng"
  | "default_space_id"
  | "email_frequency"
  | "timezone"
  | "subject_by"
  | "email_settings"
  | "telegram_settings"
  | "slack_settings"
  | "theme"
  | "notification_enabled_channels"
  | "notification_settings"
  | "ui_version"
>;

export interface UsersUpdateUserResponse {
  created: string;
  updated: string;
  id: number;
  full_name: string;
  username: string;
  email: string;
  activated: boolean;
  show_tour: boolean;
  avatar_initials_url: string;
  avatar_uploaded_url: string | null;
  initials: string;
  avatar_type: number;
  lng: string;
  sd_telegram_id: number | null;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  default_space_id: number | null;
  email_frequency: number;
  email_settings: string | null;
  work_time_settings: {
    work_days: number[];
    hours_count: number;
  };
  telegram_id: number | null;
  telegram_settings: Record<string, unknown>;
  has_password: boolean;
}

export type UsersUpdateUserParams = Parameters<
  ReturnType<typeof createIdentityResources>["users"]["updateUser"]
>;

export const createIdentityResources = (transport: HttpTransport) => ({
  companyUsers: {
    /** @see https://developers.kaiten.ru/company-users/get-list-of-users */
    getListOfUsers: (
      query?: CompanyUsersGetListOfUsersQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<CompanyUsersGetListOfUsersResponse>({
        method: "GET",
        path: "/company/users",
        query,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/company-users/remove-virtual-user */
    removeVirtualUser: (userId: number, options?: OperationOptions) => {
      return transport.request<CompanyUsersRemoveVirtualUserResponse>({
        method: "DELETE",
        path: "/company/users/" + pathSegment(userId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/company-users/update-user */
    updateUser: (
      userId: number,
      appsPermissions?: number,
      temporarilyInactive?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<CompanyUsersUpdateUserResponse>({
        method: "PATCH",
        path: "/company/users/" + pathSegment(userId),
        body: {
          apps_permissions: appsPermissions,
          temporarily_inactive: temporarilyInactive,
        },
        signal: options?.signal,
      });
    },
  },
  groupAdmins: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/add-admin-to-group */
    addAdminToGroup: (
      groupUid: string,
      userId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<GroupAdminsAddAdminToGroupResponse>({
        method: "POST",
        path: "/groups/" + pathSegment(groupUid) + "/admins",
        body: { user_id: userId },
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/get-list-of-group-admins */
    getListOfGroupAdmins: (groupUid: string, options?: OperationOptions) => {
      return transport.request<GroupAdminsGetListOfGroupAdminsResponse>({
        method: "GET",
        path: "/groups/" + pathSegment(groupUid) + "/admins",
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/remove-admin-from-group */
    removeAdminFromGroup: (
      groupUid: string,
      userId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<GroupAdminsRemoveAdminFromGroupResponse>({
        method: "DELETE",
        path:
          "/groups/" + pathSegment(groupUid) + "/admins/" + pathSegment(userId),
        signal: options?.signal,
      });
    },
  },
  groupEntities: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/add-entity */
    addEntity: (
      groupUid: string,
      entityUid: string,
      roleIds: string[],
      options?: OperationOptions,
    ) => {
      return transport.request<GroupEntitiesAddEntityResponse>({
        method: "POST",
        path: "/company/groups/" + pathSegment(groupUid) + "/entities",
        body: { entity_uid: entityUid, role_ids: roleIds },
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/get-list-of-group-entities */
    getListOfGroupEntities: (groupUid: string, options?: OperationOptions) => {
      return transport.request<GroupEntitiesGetListOfGroupEntitiesResponse>({
        method: "GET",
        path: "/company/groups/" + pathSegment(groupUid) + "/entities",
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/remove-entity */
    removeEntity: (
      groupUid: string,
      uid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<GroupEntitiesRemoveEntityResponse>({
        method: "DELETE",
        path:
          "/company/groups/" +
          pathSegment(groupUid) +
          "/entities/" +
          pathSegment(uid),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/update-group-entity */
    updateGroupEntity: (
      groupUid: string,
      uid: string,
      roleIds: string[],
      options?: OperationOptions,
    ) => {
      return transport.request<GroupEntitiesUpdateGroupEntityResponse>({
        method: "PATCH",
        path:
          "/company/groups/" +
          pathSegment(groupUid) +
          "/entities/" +
          pathSegment(uid),
        body: { role_ids: roleIds },
        signal: options?.signal,
      });
    },
  },
  groupUsers: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/add-user-to-group */
    addUserToGroup: (
      groupUid: string,
      userId: number,
      requestId?: string,
      operatorComment?: string | null,
      options?: OperationOptions,
    ) => {
      return transport.request<GroupUsersAddUserToGroupResponse>({
        method: "POST",
        path: "/groups/" + pathSegment(groupUid) + "/users",
        body: {
          user_id: userId,
          request_id: requestId,
          operator_comment: operatorComment,
        },
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/get-list-of-group-users */
    getListOfGroupUsers: (groupUid: string, options?: OperationOptions) => {
      return transport.request<GroupUsersGetListOfGroupUsersResponse>({
        method: "GET",
        path: "/groups/" + pathSegment(groupUid) + "/users",
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/remove-user-from-group */
    removeUserFromGroup: (
      groupUid: string,
      userId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<GroupUsersRemoveUserFromGroupResponse>({
        method: "DELETE",
        path:
          "/groups/" + pathSegment(groupUid) + "/users/" + pathSegment(userId),
        signal: options?.signal,
      });
    },
  },
  groups: {
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/create-group */
    createGroup: (
      name: string,
      permissions?: number,
      addToCardsAndSpacesEnabled?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<GroupsCreateGroupResponse>({
        method: "POST",
        path: "/company/groups",
        body: {
          name,
          permissions,
          add_to_cards_and_spaces_enabled: addToCardsAndSpacesEnabled,
        },
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/get-group */
    getGroup: (uid: string, options?: OperationOptions) => {
      return transport.request<GroupsGetGroupResponse>({
        method: "GET",
        path: "/company/groups/" + pathSegment(uid),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/get-list-of-groups */
    getListOfGroups: (
      query?: GroupsGetListOfGroupsQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<GroupsGetListOfGroupsResponse>({
        method: "GET",
        path: "/company/groups",
        query,
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/remove-group */
    removeGroup: (uid: string, options?: OperationOptions) => {
      return transport.request<GroupsRemoveGroupResponse>({
        method: "DELETE",
        path: "/company/groups/" + pathSegment(uid),
        signal: options?.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/update-group */
    updateGroup: (
      uid: string,
      name?: string,
      permissions?: number,
      addToCardsAndSpacesEnabled?: boolean,
      options?: OperationOptions,
    ) => {
      return transport.request<GroupsUpdateGroupResponse>({
        method: "PATCH",
        path: "/company/groups/" + pathSegment(uid),
        body: {
          name,
          permissions,
          add_to_cards_and_spaces_enabled: addToCardsAndSpacesEnabled,
        },
        signal: options?.signal,
      });
    },
  },
  userRoles: {
    /** @see https://developers.kaiten.ru/user-roles/create-user-role */
    createUserRole: (name: string, options?: OperationOptions) => {
      return transport.request<UserRolesCreateUserRoleResponse>({
        method: "POST",
        path: "/user-roles",
        body: { name },
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/get-list-of-user-roles */
    getListOfUserRoles: (options?: OperationOptions) => {
      return transport.request<UserRolesGetListOfUserRolesResponse>({
        method: "GET",
        path: "/user-roles",
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/get-user-role */
    getUserRole: (roleId: number, options?: OperationOptions) => {
      return transport.request<UserRolesGetUserRoleResponse>({
        method: "GET",
        path: "/user-roles/" + pathSegment(roleId),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/remove-user-role */
    removeUserRole: (
      roleId: number,
      replaceRoleId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<UserRolesRemoveUserRoleResponse>({
        method: "DELETE",
        path: "/user-roles/" + pathSegment(roleId),
        body: { replace_role_id: replaceRoleId },
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/update-user-role */
    updateUserRole: (
      roleId: number,
      name: string,
      options?: OperationOptions,
    ) => {
      return transport.request<UserRolesUpdateUserRoleResponse>({
        method: "PATCH",
        path: "/user-roles/" + pathSegment(roleId),
        body: { name },
        signal: options?.signal,
      });
    },
  },
  users: {
    /** @see https://developers.kaiten.ru/users/retrieve-current-user */
    retrieveCurrentUser: (options?: OperationOptions) => {
      return transport.request<UsersRetrieveCurrentUserResponse>({
        method: "GET",
        path: "/users/current",
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/users/retrieve-list-of-users */
    retrieveListOfUsers: (
      query?: UsersRetrieveListOfUsersQuery,
      options?: OperationOptions,
    ) => {
      return transport.request<UsersRetrieveListOfUsersResponse>({
        method: "GET",
        path: "/users",
        query,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/users/update-user */
    updateUser: (
      userId: number,
      body: UsersUpdateUserBody,
      options?: OperationOptions,
    ) => {
      return transport.request<UsersUpdateUserResponse>({
        method: "PATCH",
        path: "/users/" + pathSegment(userId),
        body,
        signal: options?.signal,
      });
    },
  },
});
