import { Buffer } from "node:buffer";

/** ISO 8601 bounds used by Kaiten's date filter comparisons. */
export interface CardFilterDateRange {
  from: string;
  to: string;
}

export interface CardFilterPath {
  id: number;
  type: "column" | "lane" | "board" | "space";
  spaceId?: number;
  boardId?: number;
  parentId?: number;
}

export type CardFilterSource =
  | "app"
  | "api"
  | "email"
  | "telegram"
  | "max_messenger"
  | "slack"
  | "webhook"
  | "import"
  | "schedule"
  | "automation"
  | "help_center";

interface Comparison<Operator extends string, Value> {
  comparison: Operator;
  value: Value;
}

interface FlagComparison<Operator extends string> {
  comparison: Operator;
  value?: never;
}

type PresenceComparison = FlagComparison<"known" | "unknown">;

type DateComparison =
  | Comparison<
      | "eq"
      | "eq:relative"
      | "lt:relative"
      | "today"
      | "yesterday"
      | "prev_seven_days"
      | "prev_thirty_days",
      CardFilterDateRange
    >
  | Comparison<"gt" | "lt" | "gt:relative", string>;

type FutureDateComparison = Comparison<
  "tomorrow" | "next_seven_days" | "next_thirty_days",
  CardFilterDateRange
>;

/** Documented custom-property predicates; numeric property values use strings. */
export type CardCustomPropertyFilter = {
  key: "custom_property";
  id: number;
} & (
  | ({ type: "string" | "email" | "url" | "phone" } & (
      | Comparison<
          | "eq"
          | "ne"
          | "starts_with"
          | "ends_with"
          | "contains"
          | "not_contains",
          string
        >
      | PresenceComparison
    ))
  | ({ type: "number" | "formula" | "collective_vote" } & (
      Comparison<"eq" | "ne" | "gt" | "lt", string> | PresenceComparison
    ))
  | ({ type: "collective_score" } & (
      | Comparison<
          "eq" | "ne" | "gt" | "lt" | "contains" | "not_contains",
          string
        >
      | PresenceComparison
    ))
  | ({ type: "date" } & (
      | Comparison<"eq" | "eq:relative" | "lt:relative", CardFilterDateRange>
      | Comparison<"gt" | "lt" | "gt:relative", string>
      | PresenceComparison
    ))
  | ({ type: "checkbox" } & Comparison<"true" | "false", null>)
  | ({ type: "attachment" } & Comparison<"known" | "unknown", null>)
  | ({ type: "select" | "catalog" } & (
      Comparison<"eq" | "ne", number> | PresenceComparison
    ))
  | ({ type: "user" | "vote" } & (
      Comparison<"eq" | "ne", string> | PresenceComparison
    ))
);

export type CardFilterCondition =
  | ({ key: "id" } & (
      | Comparison<"eq" | "ne", number>
      | Comparison<"in" | "not_in", readonly number[]>
    ))
  | ({ key: "owner_id" | "state" | "type_id" } & Comparison<
      "eq" | "ne",
      number
    >)
  | ({ key: "asap" } & FlagComparison<"true" | "false">)
  | ({ key: "tag" | "responsible" | "member" } & (
      Comparison<"eq" | "ne", number> | PresenceComparison
    ))
  | ({ key: "created" | "updated" | "last_moved_at" } & DateComparison)
  | ({ key: "first_moved_to_in_progress_at" | "completed_at" } & (
      DateComparison | PresenceComparison
    ))
  | ({ key: "planned_start" | "planned_end" } & (
      DateComparison | FutureDateComparison | PresenceComparison
    ))
  | ({ key: "due_date" } & (
      | DateComparison
      | FutureDateComparison
      | PresenceComparison
      | FlagComparison<"overdue:custom" | "completed_on_time:custom">
    ))
  | ({ key: "source" } & (
      Comparison<"eq" | "ne", CardFilterSource> | PresenceComparison
    ))
  | ({ key: "partial_path" } & Comparison<"eq" | "ne", CardFilterPath>)
  | ({ key: "condition" } & Comparison<"eq", number>)
  | ({ key: "time_spent_sum" } & Comparison<"eq" | "ne" | "gt" | "lt", number>)
  | CardCustomPropertyFilter;

export interface CardFilterGroup {
  key: "and" | "or";
  value: readonly CardFilterCondition[];
}

/**
 * Two-level card filter described by the Kaiten search API.
 * @see https://developers.kaiten.ru/cards/retrieve-card-list
 */
export interface CardFilter {
  key: "and" | "or";
  value: readonly CardFilterGroup[];
}

/** Encode a typed filter for Kaiten's base64 query parameter. */
export function encodeCardFilter(filter: CardFilter): string {
  return Buffer.from(JSON.stringify(filter), "utf8").toString("base64");
}
