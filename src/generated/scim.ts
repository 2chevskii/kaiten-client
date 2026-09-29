/** Generated from the Kaiten developer documentation audit. */
import type { HttpTransport, OperationOptions } from '../http.js';
import { pathSegment } from '../http.js';

export type GroupsAddGroupBody = {
  displayName: string;
};

export type GroupsAddGroupResponse = {
  schemas: Array<(string)>;
  id: string;
  displayName: string;
  meta: {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
};
};

export interface GroupsAddGroupParams extends OperationOptions {
  body: GroupsAddGroupBody;
  signal?: AbortSignal;
}

export type GroupsGetGroupResponse = {
  schemas: Array<(string)>;
  id: string;
  displayName: string;
  meta: {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
};
  members: Array<({
  value: number;
  $ref: string;
  display: string;
})>;
};

export interface GroupsGetGroupParams extends OperationOptions {
  group_id: number;
  signal?: AbortSignal;
}

export type GroupsGetGroupsQuery = {
  startIndex?: number;
  count?: number;
};

export type GroupsGetGroupsResponse = {
  schemas: Array<(string)>;
  Resources: Array<({
  schemas: Array<(string)>;
  id: string;
  displayName: string;
  meta: {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
};
  members: Array<({
  value: number;
  $ref: string;
  display: string;
})>;
})>;
  totalResults: number;
  itemsPerPage: number;
  startIndex: number;
};

export interface GroupsGetGroupsParams extends OperationOptions {
  query?: GroupsGetGroupsQuery;
  signal?: AbortSignal;
}

export type GroupsUpdateGroupBody = {
  Operations?: string | number;
};

export type GroupsUpdateGroupResponse = {
  schemas: Array<(string)>;
  id: string;
  displayName: string;
  meta: {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
};
  members: Array<({
  value: number;
  $ref: string;
  display: string;
})>;
};

export interface GroupsUpdateGroupParams extends OperationOptions {
  group_id: number;
  body: GroupsUpdateGroupBody;
  signal?: AbortSignal;
}

export type UsersAddUserBody = {
  userName?: string;
  name?: Record<string, unknown>;
  emails: Record<string, unknown>;
};

export type UsersAddUserResponse = {
  schemas: Array<(string)>;
  meta: {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
};
  id: number;
  name: {
  givenName: string;
  familyName: string;
};
  userName: string;
  active: boolean;
  emails: Array<({
  value: string;
  type: string;
  primary: boolean;
})>;
};

export interface UsersAddUserParams extends OperationOptions {
  body: UsersAddUserBody;
  signal?: AbortSignal;
}

export type UsersGetUserResponse = {
  schemas: Array<(string)>;
  meta: {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
};
  id: number;
  name: {
  givenName: string;
  familyName: string;
};
  userName: string;
  active: boolean;
  emails: Array<({
  value: string;
  type: string;
  primary: boolean;
})>;
  groups: Array<({
  value: number;
  display: string;
  $ref: string;
})>;
};

export interface UsersGetUserParams extends OperationOptions {
  user_id: number;
  signal?: AbortSignal;
}

export type UsersGetUsersQuery = {
  startIndex?: number;
  count?: number;
  filter?: string;
};

export type UsersGetUsersResponse = {
  schemas: Array<(string)>;
  Resources: Array<({
  schemas: Array<(string)>;
  meta: {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
};
  id: number;
  name: {
  givenName: string;
  familyName: string;
};
  userName: string;
  active: boolean;
  emails: Array<({
  value: string;
  type: string;
  primary: boolean;
})>;
})>;
  totalResults: number;
  itemsPerPage: number;
  startIndex: number;
};

export interface UsersGetUsersParams extends OperationOptions {
  query?: UsersGetUsersQuery;
  signal?: AbortSignal;
}

export type UsersUpdateUserBody = {
  Operations?: boolean;
};

export type UsersUpdateUserResponse = {
  schemas: Array<(string)>;
  meta: {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
};
  id: number;
  name: {
  givenName: string;
  familyName: string;
};
  userName: string;
  active: boolean;
  emails: Array<({
  value: string;
  type: string;
  primary: boolean;
})>;
  groups: unknown[];
};

export interface UsersUpdateUserParams extends OperationOptions {
  user_id: number;
  body: UsersUpdateUserBody;
  signal?: AbortSignal;
}

export const createScimResources = (transport: HttpTransport) => ({
  groups: {
    /** @beta */
    /** @see https://developers.kaiten.ru/scim/groups/add-group */
    addGroup: (params: GroupsAddGroupParams) => {
      return transport.request<GroupsAddGroupResponse>({
        method: 'POST',
        path: "/Groups",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/scim/groups/get-group */
    getGroup: (params: GroupsGetGroupParams) => {
      return transport.request<GroupsGetGroupResponse>({
        method: 'GET',
        path: "/Groups/" + pathSegment(params.group_id),
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/scim/groups/get-groups */
    getGroups: (params: GroupsGetGroupsParams = {}) => {
      return transport.request<GroupsGetGroupsResponse>({
        method: 'GET',
        path: "/Groups",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @beta */
    /** @see https://developers.kaiten.ru/scim/groups/update-group */
    updateGroup: (params: GroupsUpdateGroupParams) => {
      return transport.request<GroupsUpdateGroupResponse>({
        method: 'PATCH',
        path: "/Groups/" + pathSegment(params.group_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
  users: {
    /** @see https://developers.kaiten.ru/scim/users/add-user */
    addUser: (params: UsersAddUserParams) => {
      return transport.request<UsersAddUserResponse>({
        method: 'POST',
        path: "/Users",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/scim/users/get-user */
    getUser: (params: UsersGetUserParams) => {
      return transport.request<UsersGetUserResponse>({
        method: 'GET',
        path: "/Users/" + pathSegment(params.user_id),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/scim/users/get-users */
    getUsers: (params: UsersGetUsersParams = {}) => {
      return transport.request<UsersGetUsersResponse>({
        method: 'GET',
        path: "/Users",
        query: params.query,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/scim/users/update-user */
    updateUser: (params: UsersUpdateUserParams) => {
      return transport.request<UsersUpdateUserResponse>({
        method: 'PATCH',
        path: "/Users/" + pathSegment(params.user_id),
        body: params.body,
        signal: params.signal,
      });
    },
  },
});

export type ScimResources = ReturnType<typeof createScimResources>;

export const SCIM_OPERATION_METADATA = [
  {"documentation": "/scim/groups/add-group", "resource": "groups", "operation": "addGroup", "method": "POST", "path": "/Groups", "pathParameters": [], "hasBody": true},
  {"documentation": "/scim/groups/get-group", "resource": "groups", "operation": "getGroup", "method": "GET", "path": "/Groups/{group_id}", "pathParameters": ["group_id"], "hasBody": false},
  {"documentation": "/scim/groups/get-groups", "resource": "groups", "operation": "getGroups", "method": "GET", "path": "/Groups", "pathParameters": [], "hasBody": false},
  {"documentation": "/scim/groups/update-group", "resource": "groups", "operation": "updateGroup", "method": "PATCH", "path": "/Groups/{group_id}", "pathParameters": ["group_id"], "hasBody": true},
  {"documentation": "/scim/users/add-user", "resource": "users", "operation": "addUser", "method": "POST", "path": "/Users", "pathParameters": [], "hasBody": true},
  {"documentation": "/scim/users/get-user", "resource": "users", "operation": "getUser", "method": "GET", "path": "/Users/{user_id}", "pathParameters": ["user_id"], "hasBody": false},
  {"documentation": "/scim/users/get-users", "resource": "users", "operation": "getUsers", "method": "GET", "path": "/Users", "pathParameters": [], "hasBody": false},
  {"documentation": "/scim/users/update-user", "resource": "users", "operation": "updateUser", "method": "PATCH", "path": "/Users/{user_id}", "pathParameters": ["user_id"], "hasBody": true},
] as const;
