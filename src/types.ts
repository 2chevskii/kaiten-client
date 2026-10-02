/** Values that can cross a Kaiten JSON boundary. */
export type JsonValue =
  string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

export type CustomPropertyValues = Partial<Record<`id_${number}`, JsonValue>>;

/** A comma-separated query string or values that the transport joins for you. */
export type QueryList<Value extends string | number> =
  string | readonly Value[];

/** Require at least one of the fields listed by a Kaiten anyOf schema. */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Omit<
  T,
  Keys
> &
  {
    [Key in Keys]-?: Required<Pick<T, Key>> &
      Partial<Pick<T, Exclude<Keys, Key>>>;
  }[Keys];
