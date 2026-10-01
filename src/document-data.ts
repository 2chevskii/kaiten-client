import type { JsonValue } from "./types.js";

export interface DocumentMark {
  type: string;
  attrs?: Record<string, JsonValue>;
}

/** A ProseMirror node; content and attributes depend on the selected schema. */
export interface DocumentNode {
  type: string;
  attrs?: Record<string, JsonValue>;
  content?: DocumentNode[];
  marks?: DocumentMark[];
  text?: string;
}

export interface DocumentData extends DocumentNode {
  type: "doc";
  content: DocumentNode[];
}

export type JsonSchemaType =
  "null" | "boolean" | "object" | "array" | "number" | "integer" | "string";

export type JsonSchemaDefinition = boolean | JsonSchema;

/** JSON Schema keywords and extensions returned by a document schema version. */
export interface JsonSchema {
  $schema?: string;
  $id?: string;
  $ref?: string;
  title?: string;
  description?: string;
  type?: JsonSchemaType | JsonSchemaType[];
  properties?: Record<string, JsonSchemaDefinition>;
  definitions?: Record<string, JsonSchemaDefinition>;
  items?: JsonSchemaDefinition | JsonSchemaDefinition[];
  additionalProperties?: JsonSchemaDefinition;
  required?: string[];
  enum?: JsonValue[];
  const?: JsonValue;
  default?: JsonValue;
  allOf?: JsonSchemaDefinition[];
  anyOf?: JsonSchemaDefinition[];
  oneOf?: JsonSchemaDefinition[];
  not?: JsonSchemaDefinition;
  [keyword: string]: unknown;
}

export interface DocumentJsonSchema extends JsonSchema {
  version: string;
}

export interface ProseMirrorAttributeSpec {
  default?: JsonValue;
  validate?: string;
  [property: string]: unknown;
}

export interface ProseMirrorNodeSpec {
  content?: string;
  group?: string;
  marks?: string;
  inline?: boolean;
  atom?: boolean;
  selectable?: boolean;
  draggable?: boolean;
  code?: boolean;
  defining?: boolean;
  isolating?: boolean;
  attrs?: Record<string, ProseMirrorAttributeSpec>;
  [property: string]: unknown;
}

export interface ProseMirrorMarkSpec {
  attrs?: Record<string, ProseMirrorAttributeSpec>;
  inclusive?: boolean;
  excludes?: string;
  group?: string;
  spanning?: boolean;
  code?: boolean;
  [property: string]: unknown;
}

export interface DocumentProseMirrorSchema {
  type: "prosemirror-document-data-schema";
  version: string;
  topNode: string;
  data: { type: string; content: string };
  nodes: Record<string, ProseMirrorNodeSpec>;
  marks: Record<string, ProseMirrorMarkSpec>;
}
