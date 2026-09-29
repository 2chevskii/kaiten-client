/** Generated from the Kaiten developer documentation audit. */

import type { HttpTransport, OperationOptions } from "../../http.js";

import { pathSegment } from "../../http.js";

export type CompanyUsersGetListOfUsersQuery = {
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
};

export type CompanyUsersGetListOfUsersResponse = Array<{
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
  spaces: string | number;
  groups: Array<{
    created: string;
    updated: string;
    id: number;
    uid: string;
    name: string;
    company_id: number;
    permissions: number;
    add_to_cards_and_spaces_enabled: boolean;
    spaces: Array<{
      archived: boolean;
      uid: string;
      access: string;
      for_everyone_access_role_id: string;
      entity_type: string;
      path: string;
      sort_order: number;
      parent_entity_uid: null;
      created: string;
      updated: string;
      company_id: number;
      id: number;
      title: string;
      hidden_card_type_uids: null;
      external_id: null;
      settings: null;
      group_id: number;
      entity_uid: string;
    }>;
    user_id: number;
    group_id: number;
  }>;
  company_id: number;
  user_id: number;
  default_space_id: number | null;
  role: number;
  email_frequency: number;
  email_settings: boolean | null;
  slack_id: number | null;
  slack_settings: Record<string, unknown> | null;
  notification_settings: {
    card_unblock: Array<string>;
    card_block_add: Array<string>;
    card_member_add: Array<string>;
    due_date_reminder: Array<string>;
    card_member_remove: Array<string>;
    card_comment_mention: Array<string>;
    card_member_become_responsible: Array<string>;
  };
  notification_enabled_channels: Array<string>;
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string | null;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
  work_time_settings: {
    work_days: Array<number>;
    hours_count: number;
  };
  personal_settings: Record<string, unknown> | null;
  locked: boolean;
  take_licence: boolean;
}>;

export interface CompanyUsersGetListOfUsersParams extends OperationOptions {
  query?: CompanyUsersGetListOfUsersQuery;
  signal?: AbortSignal;
}

export type CompanyUsersRemoveVirtualUserResponse = {
  id: number;
};

export interface CompanyUsersRemoveVirtualUserParams extends OperationOptions {
  id: number;
  signal?: AbortSignal;
}

export type CompanyUsersUpdateUserBody = {
  apps_permissions?: number;
  temporarily_inactive?: boolean;
};

export type CompanyUsersUpdateUserResponse = {
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
  email_blocked: string;
  email_blocked_reason: string;
  delete_requested_at: string;
  user_id: number;
  company_id: number;
  default_space_id: number | null;
  role: number;
  permissions: number;
  apps_permissions: number;
  email_frequency: number;
  email_settings: boolean;
  slack_id: number | null;
  slack_private_channel_id: number | null;
  slack_settings: Record<string, unknown> | null;
  telegram_sd_bot_enabled: boolean;
  external: boolean;
  notification_settings: {
    card_unblock: Array<string>;
    card_block_add: Array<string>;
    card_member_add: Array<string>;
    due_date_reminder: Array<string>;
    card_member_remove: Array<string>;
    card_comment_mention: Array<string>;
    card_member_become_responsible: Array<string>;
  };
  work_time_settings: {
    work_days: Array<number>;
    hours_count: number;
  };
  invite_last_sent_at: string;
  last_request_date: string | null;
  last_request_method: string | null;
  notification_enabled_channels: Array<string>;
  personal_settings: Record<string, unknown>;
  locked: boolean;
  temporarily_inactive: boolean;
};

export interface CompanyUsersUpdateUserParams extends OperationOptions {
  id: number;
  body: CompanyUsersUpdateUserBody;
  signal?: AbortSignal;
}

export type GroupAdminsAddAdminToGroupBody = {
  user_id: number;
};

export type GroupAdminsAddAdminToGroupResponse = {
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
};

export interface GroupAdminsAddAdminToGroupParams extends OperationOptions {
  group_uid: string;
  body: GroupAdminsAddAdminToGroupBody;
  signal?: AbortSignal;
}

export type GroupAdminsGetListOfGroupAdminsResponse = Array<{
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
  sd_telegram_id: number;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  delete_confirmation_sent_at: string | null;
}>;

export interface GroupAdminsGetListOfGroupAdminsParams extends OperationOptions {
  group_uid: string;
  signal?: AbortSignal;
}

export type GroupAdminsRemoveAdminFromGroupResponse = {
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
};

export interface GroupAdminsRemoveAdminFromGroupParams extends OperationOptions {
  group_uid: string;
  user_id: number;
  signal?: AbortSignal;
}

export type GroupEntitiesAddEntityBody = {
  entity_uid: string;
  role_ids: Array<string>;
};

export type GroupEntitiesAddEntityResponse = {
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
  own_role_ids: Array<string>;
  own_access_mod: string | null;
  role_ids: Array<string>;
};

export interface GroupEntitiesAddEntityParams extends OperationOptions {
  group_uid: string;
  body: GroupEntitiesAddEntityBody;
  signal?: AbortSignal;
}

export type GroupEntitiesGetListOfGroupEntitiesResponse = Array<{
  uid: string;
  path: string;
  title: string;
  entity_type: string;
  own_role_ids: Array<string>;
}>;

export interface GroupEntitiesGetListOfGroupEntitiesParams extends OperationOptions {
  group_uid: string;
  signal?: AbortSignal;
}

export type GroupEntitiesRemoveEntityResponse = {
  group_id: number;
  entity_uid: string;
  role_permissions: unknown | null;
  access_mod: string | null;
  role: null;
  own_role_ids: unknown[] | null;
  own_access_mod: string | null;
  role_ids: unknown[];
  own_role: null;
};

export interface GroupEntitiesRemoveEntityParams extends OperationOptions {
  group_uid: string;
  uid: string;
  signal?: AbortSignal;
}

export type GroupEntitiesUpdateGroupEntityBody = unknown;

export type GroupEntitiesUpdateGroupEntityResponse = {
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
  own_role_ids: Array<string>;
  own_access_mod: string | null;
  role_ids: Array<string>;
};

export interface GroupEntitiesUpdateGroupEntityParams extends OperationOptions {
  group_uid: string;
  uid: string;
  body: GroupEntitiesUpdateGroupEntityBody;
  signal?: AbortSignal;
}

export type GroupUsersAddUserToGroupBody = {
  user_id: number;
  request_id?: string;
  operator_comment?: string | null;
};

export type GroupUsersAddUserToGroupResponse = {
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
};

export interface GroupUsersAddUserToGroupParams extends OperationOptions {
  group_uid: string;
  body: GroupUsersAddUserToGroupBody;
  signal?: AbortSignal;
}

export type GroupUsersGetListOfGroupUsersResponse = Array<{
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
  sd_telegram_id: number;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  virtual: boolean;
  email_blocked: string | null;
  email_blocked_reason: string | null;
  delete_requested_at: string | null;
  delete_confirmation_sent_at: string | null;
}>;

export interface GroupUsersGetListOfGroupUsersParams extends OperationOptions {
  group_uid: string;
  signal?: AbortSignal;
}

export type GroupUsersRemoveUserFromGroupResponse = {
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
};

export interface GroupUsersRemoveUserFromGroupParams extends OperationOptions {
  group_uid: string;
  user_id: number;
  signal?: AbortSignal;
}

export type GroupsCreateGroupBody = {
  name: string;
  permissions?: number;
  add_to_cards_and_spaces_enabled?: boolean;
};

export type GroupsCreateGroupResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface GroupsCreateGroupParams extends OperationOptions {
  body: GroupsCreateGroupBody;
  signal?: AbortSignal;
}

export type GroupsGetGroupResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface GroupsGetGroupParams extends OperationOptions {
  uid: string;
  signal?: AbortSignal;
}

export type GroupsGetListOfGroupsQuery = {
  with_tree_entities?: boolean;
  with_users_count?: boolean;
  with_sync_group_attribute?: boolean;
  condition?: string;
  query?: string;
  limit?: number;
  offset?: number;
};

export type GroupsGetListOfGroupsResponse = Array<{
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
}>;

export interface GroupsGetListOfGroupsParams extends OperationOptions {
  query?: GroupsGetListOfGroupsQuery;
  signal?: AbortSignal;
}

export type GroupsRemoveGroupResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface GroupsRemoveGroupParams extends OperationOptions {
  uid: string;
  signal?: AbortSignal;
}

export type GroupsUpdateGroupBody = {
  name?: string;
  permissions?: number;
  add_to_cards_and_spaces_enabled?: boolean;
};

export type GroupsUpdateGroupResponse = {
  name: string;
  permissions: number;
  add_to_cards_and_spaces_enabled: boolean;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface GroupsUpdateGroupParams extends OperationOptions {
  uid: string;
  body: GroupsUpdateGroupBody;
  signal?: AbortSignal;
}

export type UserRolesCreateUserRoleBody = {
  name: string;
};

export type UserRolesCreateUserRoleResponse = {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface UserRolesCreateUserRoleParams extends OperationOptions {
  body: UserRolesCreateUserRoleBody;
  signal?: AbortSignal;
}

export type UserRolesGetListOfUserRolesResponse = Array<{
  created: string;
  updated: string;
  id: number;
  uid: string;
  name: string;
  company_id: number;
}>;

export interface UserRolesGetListOfUserRolesParams extends OperationOptions {
  signal?: AbortSignal;
}

export type UserRolesGetUserRoleResponse = {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface UserRolesGetUserRoleParams extends OperationOptions {
  role_id: number;
  signal?: AbortSignal;
}

export type UserRolesRemoveUserRoleBody = {
  replace_role_id: number;
};

export type UserRolesRemoveUserRoleResponse = {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface UserRolesRemoveUserRoleParams extends OperationOptions {
  role_id: number;
  body: UserRolesRemoveUserRoleBody;
  signal?: AbortSignal;
}

export type UserRolesUpdateUserRoleBody = {
  name: string;
};

export type UserRolesUpdateUserRoleResponse = {
  name: string;
  company_id: number;
  updated: string;
  created: string;
  id: number;
  uid: string;
};

export interface UserRolesUpdateUserRoleParams extends OperationOptions {
  role_id: number;
  body: UserRolesUpdateUserRoleBody;
  signal?: AbortSignal;
}

export type UsersRetrieveCurrentUserResponse = {
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
  telegram_id: number;
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
  notification_settings: unknown[] | null;
  notification_enabled_channels: Array<string>;
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
  has_password: boolean;
};

export interface UsersRetrieveCurrentUserParams extends OperationOptions {
  signal?: AbortSignal;
}

export type UsersRetrieveListOfUsersQuery = {
  type?: string;
  query?: string;
  access_type_permissions?: string;
  ids?: string;
  limit?: number;
  offset?: number;
  include_inactive?: boolean;
  exclude_directly_added_members_by_entity_uid?: string;
};

export type UsersRetrieveListOfUsersResponse = Array<{
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
  email_settings: boolean;
  slack_id: number | null;
  slack_settings: Record<string, unknown> | null;
  notification_settings: unknown[] | null;
  notification_enabled_channels: Array<string>;
  slack_private_channel_id: number | null;
  telegram_sd_bot_enabled: boolean;
  invite_last_sent_at: string;
  apps_permissions: number;
  external: boolean;
  last_request_date: string | null;
  last_request_method: string | null;
  include_inactive?: boolean;
}>;

export interface UsersRetrieveListOfUsersParams extends OperationOptions {
  query?: UsersRetrieveListOfUsersQuery;
  signal?: AbortSignal;
}

export type UsersUpdateUserBody =
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown;

export type UsersUpdateUserResponse = {
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
  sd_telegram_id: number;
  timezone: string;
  news_subscription: boolean;
  theme: string;
  ui_version: number;
  default_space_id: number | null;
  email_frequency: number;
  email_settings: boolean;
  work_time_settings: {
    work_days: Array<number>;
    hours_count: number;
  };
  telegram_id: number;
  telegram_settings: Record<string, unknown>;
  has_password: boolean;
};

export interface UsersUpdateUserParams extends OperationOptions {
  id: number;
  body: UsersUpdateUserBody;
  signal?: AbortSignal;
}

export const createIdentityResources = (transport: HttpTransport) => ({
  companyUsers: {
    /** @see https://developers.kaiten.ru/company-users/get-list-of-users */
    getListOfUsers: (params: CompanyUsersGetListOfUsersParams = {}) => {
      return transport.request<CompanyUsersGetListOfUsersResponse>({
        method: "GET",
        path: "/company/users",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/company-users/remove-virtual-user */
    removeVirtualUser: (params: CompanyUsersRemoveVirtualUserParams) => {
      return transport.request<CompanyUsersRemoveVirtualUserResponse>({
        method: "DELETE",
        path: "/company/users/" + pathSegment(params.id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/company-users/update-user */
    updateUser: (params: CompanyUsersUpdateUserParams) => {
      return transport.request<CompanyUsersUpdateUserResponse>({
        method: "PATCH",
        path: "/company/users/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  groupAdmins: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/add-admin-to-group */
    addAdminToGroup: (params: GroupAdminsAddAdminToGroupParams) => {
      return transport.request<GroupAdminsAddAdminToGroupResponse>({
        method: "POST",
        path: "/groups/" + pathSegment(params.group_uid) + "/admins",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/get-list-of-group-admins */
    getListOfGroupAdmins: (params: GroupAdminsGetListOfGroupAdminsParams) => {
      return transport.request<GroupAdminsGetListOfGroupAdminsResponse>({
        method: "GET",
        path: "/groups/" + pathSegment(params.group_uid) + "/admins",
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-admins/remove-admin-from-group */
    removeAdminFromGroup: (params: GroupAdminsRemoveAdminFromGroupParams) => {
      return transport.request<GroupAdminsRemoveAdminFromGroupResponse>({
        method: "DELETE",
        path:
          "/groups/" +
          pathSegment(params.group_uid) +
          "/admins/" +
          pathSegment(params.user_id),
        signal: params.signal,
      });
    },
  },
  groupEntities: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/add-entity */
    addEntity: (params: GroupEntitiesAddEntityParams) => {
      return transport.request<GroupEntitiesAddEntityResponse>({
        method: "POST",
        path: "/company/groups/" + pathSegment(params.group_uid) + "/entities",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/get-list-of-group-entities */
    getListOfGroupEntities: (
      params: GroupEntitiesGetListOfGroupEntitiesParams,
    ) => {
      return transport.request<GroupEntitiesGetListOfGroupEntitiesResponse>({
        method: "GET",
        path: "/company/groups/" + pathSegment(params.group_uid) + "/entities",
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/remove-entity */
    removeEntity: (params: GroupEntitiesRemoveEntityParams) => {
      return transport.request<GroupEntitiesRemoveEntityResponse>({
        method: "DELETE",
        path:
          "/company/groups/" +
          pathSegment(params.group_uid) +
          "/entities/" +
          pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-entities/update-group-entity */
    updateGroupEntity: (params: GroupEntitiesUpdateGroupEntityParams) => {
      return transport.request<GroupEntitiesUpdateGroupEntityResponse>({
        method: "PATCH",
        path:
          "/company/groups/" +
          pathSegment(params.group_uid) +
          "/entities/" +
          pathSegment(params.uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  groupUsers: {
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/add-user-to-group */
    addUserToGroup: (params: GroupUsersAddUserToGroupParams) => {
      return transport.request<GroupUsersAddUserToGroupResponse>({
        method: "POST",
        path: "/groups/" + pathSegment(params.group_uid) + "/users",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/get-list-of-group-users */
    getListOfGroupUsers: (params: GroupUsersGetListOfGroupUsersParams) => {
      return transport.request<GroupUsersGetListOfGroupUsersResponse>({
        method: "GET",
        path: "/groups/" + pathSegment(params.group_uid) + "/users",
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/group-users/remove-user-from-group */
    removeUserFromGroup: (params: GroupUsersRemoveUserFromGroupParams) => {
      return transport.request<GroupUsersRemoveUserFromGroupResponse>({
        method: "DELETE",
        path:
          "/groups/" +
          pathSegment(params.group_uid) +
          "/users/" +
          pathSegment(params.user_id),
        signal: params.signal,
      });
    },
  },
  groups: {
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/create-group */
    createGroup: (params: GroupsCreateGroupParams) => {
      return transport.request<GroupsCreateGroupResponse>({
        method: "POST",
        path: "/company/groups",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/get-group */
    getGroup: (params: GroupsGetGroupParams) => {
      return transport.request<GroupsGetGroupResponse>({
        method: "GET",
        path: "/company/groups/" + pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/get-list-of-groups */
    getListOfGroups: (params: GroupsGetListOfGroupsParams = {}) => {
      return transport.request<GroupsGetListOfGroupsResponse>({
        method: "GET",
        path: "/company/groups",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/remove-group */
    removeGroup: (params: GroupsRemoveGroupParams) => {
      return transport.request<GroupsRemoveGroupResponse>({
        method: "DELETE",
        path: "/company/groups/" + pathSegment(params.uid),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/groups/update-group */
    updateGroup: (params: GroupsUpdateGroupParams) => {
      return transport.request<GroupsUpdateGroupResponse>({
        method: "PATCH",
        path: "/company/groups/" + pathSegment(params.uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  userRoles: {
    /** @see https://developers.kaiten.ru/user-roles/create-user-role */
    createUserRole: (params: UserRolesCreateUserRoleParams) => {
      return transport.request<UserRolesCreateUserRoleResponse>({
        method: "POST",
        path: "/user-roles",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/get-list-of-user-roles */
    getListOfUserRoles: (params: UserRolesGetListOfUserRolesParams = {}) => {
      return transport.request<UserRolesGetListOfUserRolesResponse>({
        method: "GET",
        path: "/user-roles",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/get-user-role */
    getUserRole: (params: UserRolesGetUserRoleParams) => {
      return transport.request<UserRolesGetUserRoleResponse>({
        method: "GET",
        path: "/user-roles/" + pathSegment(params.role_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/remove-user-role */
    removeUserRole: (params: UserRolesRemoveUserRoleParams) => {
      return transport.request<UserRolesRemoveUserRoleResponse>({
        method: "DELETE",
        path: "/user-roles/" + pathSegment(params.role_id),
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/user-roles/update-user-role */
    updateUserRole: (params: UserRolesUpdateUserRoleParams) => {
      return transport.request<UserRolesUpdateUserRoleResponse>({
        method: "PATCH",
        path: "/user-roles/" + pathSegment(params.role_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  users: {
    /** @see https://developers.kaiten.ru/users/retrieve-current-user */
    retrieveCurrentUser: (params: UsersRetrieveCurrentUserParams = {}) => {
      return transport.request<UsersRetrieveCurrentUserResponse>({
        method: "GET",
        path: "/users/current",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/users/retrieve-list-of-users */
    retrieveListOfUsers: (params: UsersRetrieveListOfUsersParams = {}) => {
      return transport.request<UsersRetrieveListOfUsersResponse>({
        method: "GET",
        path: "/users",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/users/update-user */
    updateUser: (params: UsersUpdateUserParams) => {
      return transport.request<UsersUpdateUserResponse>({
        method: "PATCH",
        path: "/users/" + pathSegment(params.id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
});
