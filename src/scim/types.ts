export interface ScimName {
  givenName: string;
  familyName: string;
}

export interface ScimResourceMeta {
  resourceType: string;
  created: string;
  lastModified: string;
  location: string;
}

export interface ScimEmail {
  value: string;
  type: string;
  primary: boolean;
}

export interface ScimResourceReference {
  value: number;
  $ref: string;
  display: string;
}

export type ScimUserPatchOperation =
  | { op: "replace"; path: "active"; value: boolean }
  | { op: "add" | "replace"; path: "name"; value: Partial<ScimName> }
  | {
      op: "add" | "replace";
      path: "name.givenName" | "name.familyName";
      value: string;
    }
  | { op: "remove"; path: "name" | "name.givenName" | "name.familyName" };

export type ScimGroupPatchOperation =
  | { op: "add" | "remove"; path: "members"; value: number }
  | { op: "add" | "replace"; path: "displayName"; value: string };
