import type { HttpTransport, OperationOptions } from "../http.ts";
import { pathSegment } from "../http.ts";
import type {
  ScimEmail,
  ScimGroupPatchOperation,
  ScimName,
  ScimResourceMeta,
  ScimResourceReference,
  ScimUserPatchOperation,
} from "./types.ts";
import type { JsonValue } from "../types.ts";
import { iterateScimResults } from "./pagination.ts";

export interface GroupsAddGroupBody {
  displayName: string;
}

export interface GroupsAddGroupResponse {
  schemas: string[];
  id: string;
  displayName: string;
  meta: ScimResourceMeta;
}

export type GroupsAddGroupParams = Parameters<
  ReturnType<typeof createScimResources>["groups"]["addGroup"]
>;

export interface GroupsGetGroupResponse {
  schemas: string[];
  id: string;
  displayName: string;
  meta: ScimResourceMeta;
  members: ScimResourceReference[];
}

export type GroupsGetGroupParams = Parameters<
  ReturnType<typeof createScimResources>["groups"]["getGroup"]
>;

export interface GroupsGetGroupsQuery {
  startIndex?: number;
  count?: number;
}

export interface GroupsGetGroupsResponse {
  schemas: string[];
  Resources: GroupsGetGroupResponse[];
  totalResults: number;
  itemsPerPage: number;
  startIndex: number;
}

export type GroupsGetGroupsParams = Parameters<
  ReturnType<typeof createScimResources>["groups"]["getGroups"]
>;

export interface GroupsUpdateGroupBody {
  Operations: ScimGroupPatchOperation[];
}

export interface GroupsUpdateGroupResponse {
  schemas: string[];
  id: string;
  displayName: string;
  meta: ScimResourceMeta;
  members: ScimResourceReference[];
}

export type GroupsUpdateGroupParams = Parameters<
  ReturnType<typeof createScimResources>["groups"]["updateGroup"]
>;

export interface UsersAddUserBody {
  userName?: string;
  name?: Partial<ScimName>;
  emails: Record<string, JsonValue>;
}

export interface UsersAddUserResponse {
  schemas: string[];
  meta: ScimResourceMeta;
  id: number;
  name: ScimName;
  userName: string;
  active: boolean;
  emails: ScimEmail[];
}

export type UsersAddUserParams = Parameters<
  ReturnType<typeof createScimResources>["users"]["addUser"]
>;

export interface UsersGetUserResponse {
  schemas: string[];
  meta: ScimResourceMeta;
  id: number;
  name: ScimName;
  userName: string;
  active: boolean;
  emails: ScimEmail[];
  groups: ScimResourceReference[];
}

export type UsersGetUserParams = Parameters<
  ReturnType<typeof createScimResources>["users"]["getUser"]
>;

export interface UsersGetUsersQuery {
  startIndex?: number;
  count?: number;
  filter?: string;
}

export interface UsersGetUsersResponse {
  schemas: string[];
  Resources: UsersAddUserResponse[];
  totalResults: number;
  itemsPerPage: number;
  startIndex: number;
}

export type UsersGetUsersParams = Parameters<
  ReturnType<typeof createScimResources>["users"]["getUsers"]
>;

export interface UsersUpdateUserBody {
  Operations: ScimUserPatchOperation[];
}

export interface UsersUpdateUserResponse {
  schemas: string[];
  meta: ScimResourceMeta;
  id: number;
  name: ScimName;
  userName: string;
  active: boolean;
  emails: ScimEmail[];
  groups: unknown[];
}

export type UsersUpdateUserParams = Parameters<
  ReturnType<typeof createScimResources>["users"]["updateUser"]
>;

export type GroupsIterateParams = Parameters<
  ReturnType<typeof createScimResources>["groups"]["iterate"]
>;

export type UsersIterateParams = Parameters<
  ReturnType<typeof createScimResources>["users"]["iterate"]
>;

export const createScimResources = (transport: HttpTransport) => {
  const getGroups = (
    startIndex?: number,
    count?: number,
    options?: OperationOptions,
  ) => {
    return transport.request<GroupsGetGroupsResponse>({
      method: "GET",
      path: "/Groups",
      query: { startIndex, count },
      signal: options?.signal,
    });
  };

  const getUsers = (
    startIndex?: number,
    count?: number,
    filter?: string,
    options?: OperationOptions,
  ) => {
    return transport.request<UsersGetUsersResponse>({
      method: "GET",
      path: "/Users",
      query: { startIndex, count, filter },
      signal: options?.signal,
    });
  };

  return {
    groups: {
      /**
       * Lazily iterate groups, preserving the requested page size.
       * @beta
       */
      iterate: (
        startIndex?: number,
        count?: number,
        options?: OperationOptions,
      ) => {
        const requestOptions = { ...options };
        return iterateScimResults(
          (index) => getGroups(index, count, requestOptions),
          startIndex,
          requestOptions.signal,
        );
      },
      /** @beta */
      /** @see https://developers.kaiten.ru/scim/groups/add-group */
      addGroup: (displayName: string, options?: OperationOptions) => {
        return transport.request<GroupsAddGroupResponse>({
          method: "POST",
          path: "/Groups",
          body: { displayName },
          signal: options?.signal,
        });
      },
      /** @beta */
      /** @see https://developers.kaiten.ru/scim/groups/get-group */
      getGroup: (groupId: string | number, options?: OperationOptions) => {
        return transport.request<GroupsGetGroupResponse>({
          method: "GET",
          path: "/Groups/" + pathSegment(groupId),
          signal: options?.signal,
        });
      },
      /** @beta */
      /** @see https://developers.kaiten.ru/scim/groups/get-groups */
      getGroups,
      /** @beta */
      /** @see https://developers.kaiten.ru/scim/groups/update-group */
      updateGroup: (
        groupId: string | number,
        operations: ScimGroupPatchOperation[],
        options?: OperationOptions,
      ) => {
        return transport.request<GroupsUpdateGroupResponse>({
          method: "PATCH",
          path: "/Groups/" + pathSegment(groupId),
          body: { Operations: operations },
          signal: options?.signal,
        });
      },
    },
    users: {
      /** Lazily iterate users, preserving the page size and filter. */
      iterate: (
        startIndex?: number,
        count?: number,
        filter?: string,
        options?: OperationOptions,
      ) => {
        const requestOptions = { ...options };
        return iterateScimResults(
          (index) => getUsers(index, count, filter, requestOptions),
          startIndex,
          requestOptions.signal,
        );
      },
      /** @see https://developers.kaiten.ru/scim/users/add-user */
      addUser: (body: UsersAddUserBody, options?: OperationOptions) => {
        return transport.request<UsersAddUserResponse>({
          method: "POST",
          path: "/Users",
          body,
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/scim/users/get-user */
      getUser: (userId: number, options?: OperationOptions) => {
        return transport.request<UsersGetUserResponse>({
          method: "GET",
          path: "/Users/" + pathSegment(userId),
          signal: options?.signal,
        });
      },
      /** @see https://developers.kaiten.ru/scim/users/get-users */
      getUsers,
      /** @see https://developers.kaiten.ru/scim/users/update-user */
      updateUser: (
        userId: number,
        operations: ScimUserPatchOperation[],
        options?: OperationOptions,
      ) => {
        return transport.request<UsersUpdateUserResponse>({
          method: "PATCH",
          path: "/Users/" + pathSegment(userId),
          body: { Operations: operations },
          signal: options?.signal,
        });
      },
    },
  };
};

export type ScimResources = ReturnType<typeof createScimResources>;

export const SCIM_OPERATION_METADATA = [
  {
    documentation: "/scim/groups/add-group",
    resource: "groups",
    operation: "addGroup",
    method: "POST",
    path: "/Groups",
    pathParameters: [],
    hasBody: true,
  },
  {
    documentation: "/scim/groups/get-group",
    resource: "groups",
    operation: "getGroup",
    method: "GET",
    path: "/Groups/{group_id}",
    pathParameters: ["group_id"],
    hasBody: false,
  },
  {
    documentation: "/scim/groups/get-groups",
    resource: "groups",
    operation: "getGroups",
    method: "GET",
    path: "/Groups",
    pathParameters: [],
    hasBody: false,
  },
  {
    documentation: "/scim/groups/update-group",
    resource: "groups",
    operation: "updateGroup",
    method: "PATCH",
    path: "/Groups/{group_id}",
    pathParameters: ["group_id"],
    hasBody: true,
  },
  {
    documentation: "/scim/users/add-user",
    resource: "users",
    operation: "addUser",
    method: "POST",
    path: "/Users",
    pathParameters: [],
    hasBody: true,
  },
  {
    documentation: "/scim/users/get-user",
    resource: "users",
    operation: "getUser",
    method: "GET",
    path: "/Users/{user_id}",
    pathParameters: ["user_id"],
    hasBody: false,
  },
  {
    documentation: "/scim/users/get-users",
    resource: "users",
    operation: "getUsers",
    method: "GET",
    path: "/Users",
    pathParameters: [],
    hasBody: false,
  },
  {
    documentation: "/scim/users/update-user",
    resource: "users",
    operation: "updateUser",
    method: "PATCH",
    path: "/Users/{user_id}",
    pathParameters: ["user_id"],
    hasBody: true,
  },
] as const;
