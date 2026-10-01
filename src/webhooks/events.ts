import type { CustomPropertyValues, JsonValue } from "../types.js";
import type { UserSummary } from "../entities.js";

/** Types for every documented outgoing Kaiten webhook event. */

/** @see https://developers.kaiten.ru/external-webhooks/block/block:add */
export interface BlockAddWebhookEvent {
  event: "block:add";
  data: {
    blocker_id: number;
    released_by_id: number | null;
    blocked_card: {
      type_id: number;
      sprint_id: number | null;
      planned_end: string | null;
      ignore_planned_dates_recalculation: boolean;
      size: number | null;
      goals_done: number;
      expires_later: boolean;
      last_moved_to_done_at: string | null;
      asap: boolean;
      children_done: number;
      parents_ids: number[] | null;
      size_unit: string | null;
      archived: boolean;
      share_settings: Record<string, JsonValue> | null;
      column_id: number;
      goals_total: number;
      service_id: number | null;
      description_filled: boolean;
      calculated_planned_start: string | null;
      time_blocked_sum: number;
      owner_id: number;
      planned_start: string | null;
      column_changed_at: string;
      completed_at: string | null;
      last_moved_at: string;
      time_spent_sum: number;
      created: string;
      public: boolean;
      parent_checklist_ids: number[] | null;
      size_text: string | null;
      blocked: boolean;
      sort_order: number;
      lane_id: number;
      due_date_time_present: boolean;
      external_id: string | null;
      children_count: number;
      updater_id: number;
      state: number;
      lane_changed_at: string;
      sd_new_comment: boolean;
      properties: CustomPropertyValues | null;
      board_id: number;
      first_moved_to_in_progress_at: string | null;
      children_number_properties_sum: number | Record<string, number> | null;
      external_user_emails: string | null;
      has_blocked_children: boolean;
      children_ids: number[] | null;
      version: number;
      title: string;
      counters_recalculated_at: string;
      comments_total: number;
      parents_count: number;
      due_date: string | null;
      completed_on_time: boolean | null;
      blocking_card: boolean;
      type: {
        id: number;
        name: string;
        color: number;
        letter: string;
        company_id: number | null;
        archived: boolean;
        properties: Record<string, JsonValue> | null;
      };
      updated: string;
      id: number;
      condition: number;
      share_id: string | null;
      comment_last_added_at: string | null;
      /** Legacy spelling in Kaiten's published example. */
      ifo_order?: number | null;
      fifo_order?: number | null;
      /** Legacy spelling in Kaiten's published example. */
      alculated_planned_end?: string | null;
      calculated_planned_end?: string | null;
    };
    reason: string;
    blocker_card_id: number;
    created: string;
    card_id: number;
    blocker_card_title: unknown;
    card: {
      type_id: number;
      sprint_id: number | null;
      planned_end: string | null;
      ignore_planned_dates_recalculation: boolean;
      size: number | null;
      goals_done: number;
      expires_later: boolean;
      last_moved_to_done_at: string | null;
      asap: boolean;
      children_done: number;
      parents_ids: number[] | null;
      size_unit: string | null;
      archived: boolean;
      share_settings: Record<string, JsonValue> | null;
      column_id: number;
      goals_total: number;
      service_id: number | null;
      description_filled: boolean;
      calculated_planned_start: string | null;
      time_blocked_sum: number;
      owner_id: number;
      planned_start: string | null;
      column_changed_at: string;
      completed_at: string | null;
      last_moved_at: string;
      time_spent_sum: number;
      created: string;
      public: boolean;
      parent_checklist_ids: number[] | null;
      size_text: string | null;
      blocked: boolean;
      sort_order: number;
      lane_id: number;
      due_date_time_present: boolean;
      external_id: string | null;
      children_count: number;
      updater_id: number;
      state: number;
      lane_changed_at: string;
      sd_new_comment: boolean;
      properties: CustomPropertyValues | null;
      owner: {
        avatar_type: number;
        avatar_initials_url: string;
        lng: string;
        theme: string;
        initials: string;
        avatar_uploaded_url: string | null;
        username: string;
        timezone: string;
        updated: string;
        id: number;
        full_name: string;
        email: string;
      };
      board_id: number;
      first_moved_to_in_progress_at: string | null;
      children_number_properties_sum: number | Record<string, number> | null;
      external_user_emails: string | null;
      /** Legacy spelling in Kaiten's published example. */
      as_blocked_children?: boolean;
      has_blocked_children?: boolean;
      children_ids: number[] | null;
      version: number;
      title: string;
      counters_recalculated_at: string;
      comments_total: number;
      parents_count: number;
      due_date: string | null;
      completed_on_time: boolean | null;
      blocking_card: boolean;
      type: {
        id: number;
        name: string;
        color: number;
        letter: string;
        company_id: number | null;
        archived: boolean;
        properties: Record<string, JsonValue> | null;
      };
      updated: string;
      id: number;
      condition: number;
      share_id: string | null;
      comment_last_added_at: string | null;
      fifo_order: number | null;
      calculated_planned_end: string | null;
    };
    blocker: {
      avatar_type: number;
      avatar_initials_url: string;
      lng: string;
      theme: string;
      initials: string;
      avatar_uploaded_url: string | null;
      username: string;
      timezone: string;
      updated: string;
      id: number;
      full_name: string;
      email: string;
    };
    updated: string;
    id: number;
    released: boolean;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/block/block:update */
export interface BlockUpdateWebhookEvent {
  event: "block:update";
  data: {
    old: {
      blocker_id: number;
      released_by_id: number | null;
      reason: string;
      blocker_card_id: number;
      created: string;
      card_id: number;
      blocker_card_title: unknown;
      updated: string;
      id: number;
      released: boolean;
    };
    changes: Partial<BlockUpdateWebhookEvent["data"]["old"]>;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/board/board:add */
export interface BoardAddWebhookEvent {
  event: "board:add";
  data: {
    reset_lane_spent_time: boolean;
    move_parents_to_done: boolean;
    automove_cards: boolean;
    left: number;
    hide_done_policies_in_done_column: boolean;
    created: string;
    backward_moves_enabled: boolean;
    sort_order: number;
    external_id: string | null;
    default_card_type_id: number;
    hide_done_policies: boolean;
    space_id: number;
    first_image_is_cover: boolean;
    top: number;
    cell_wip_limits: unknown;
    default_tags: unknown;
    title: string;
    updated: string;
    id: number;
    description: string | null;
    lanes: {
      last_moved_warning_after_minutes: number;
      created: string;
      row_count: number;
      sort_order: number;
      external_id: string | null;
      default_card_type_id: number | null;
      last_moved_warning_after_days: number;
      board_id: number;
      last_moved_warning_after_hours: number;
      default_tags: unknown;
      title: string;
      wip_limit: number;
      updated: string;
      id: number;
      condition: number;
      wip_limit_type: number;
    }[];
    columns: {
      column_id: number | null;
      last_moved_warning_after_minutes: number;
      created: string;
      sort_order: number;
      external_id: string | null;
      col_count: number;
      last_moved_warning_after_days: number;
      board_id: number;
      last_moved_warning_after_hours: number;
      archive_after_days: number;
      rules: number;
      default_tags: unknown;
      title: string;
      wip_limit: number;
      type: number;
      updated: string;
      id: number;
      subcolumns: unknown[];
      months_to_hide_cards: unknown;
      card_hide_after_days: unknown;
      wip_limit_type: number;
    }[];
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/board/board:update */
export interface BoardUpdateWebhookEvent {
  event: "board:update";
  data: {
    changes: Partial<BoardUpdateWebhookEvent["data"]["old"]>;
    old: {
      reset_lane_spent_time: boolean;
      move_parents_to_done: boolean;
      automove_cards: boolean;
      left: number;
      hide_done_policies_in_done_column: boolean;
      created: string;
      backward_moves_enabled: boolean;
      sort_order: number;
      external_id: string | null;
      default_card_type_id: number;
      hide_done_policies: boolean;
      first_image_is_cover: boolean;
      top: number;
      cell_wip_limits: unknown;
      default_tags: unknown;
      title: string;
      updated: string;
      id: number;
      description: string | null;
    };
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/card-members/card_member:add */
export interface CardMemberAddWebhookEvent {
  event: "card_member:add";
  data: {
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
    type: number;
    card_id: number;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/card-members/card_member:remove */
export interface CardMemberRemoveWebhookEvent {
  event: "card_member:remove";
  data: {
    card_id: number;
    user_id: number;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/card-members/card_member:update */
export interface CardMemberUpdateWebhookEvent {
  event: "card_member:update";
  data: {
    old: {
      card_id: number;
      user_id: number;
      type: number;
    };
    changes: Partial<CardMemberUpdateWebhookEvent["data"]["old"]>;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/card/card:add */
export interface CardAddWebhookEvent {
  event: "card:add";
  data: {
    type_id: number;
    sprint_id: number | null;
    planned_end: string | null;
    ignore_planned_dates_recalculation: boolean;
    size: number | null;
    goals_done: number;
    expires_later: boolean;
    last_moved_to_done_at: string | null;
    asap: boolean;
    children_done: number;
    size_unit: string | null;
    archived: boolean;
    share_settings: Record<string, JsonValue> | null;
    column_id: number;
    goals_total: number;
    external_links: unknown[];
    service_id: number | null;
    description_filled: boolean;
    time_blocked_sum: number;
    owner_id: number;
    planned_start: string | null;
    column_changed_at: string;
    completed_at: string | null;
    last_moved_at: string;
    time_spent_sum: number;
    created: string;
    public: boolean;
    parent_checklist_ids: number[] | null;
    size_text: string | null;
    blocked: boolean;
    sort_order: number;
    checklists: unknown[];
    lane_id: number;
    due_date_time_present: boolean;
    external_id: string | null;
    children_count: number;
    updater_id: number;
    state: number;
    lane_changed_at: string;
    sd_new_comment: boolean;
    properties: CustomPropertyValues | null;
    owner: {
      avatar_type: number;
      avatar_initials_url: string;
      lng: string;
      created: string;
      theme: string;
      news_subscription: boolean;
      sd_telegram_id: number | null;
      ui_version: number;
      initials: string;
      activated: boolean;
      avatar_uploaded_url: string | null;
      username: string;
      skype: unknown;
      apps_permissions: number;
      timezone: string;
      chat_enabled: boolean;
      show_tour: boolean;
      updated: string;
      id: number;
      full_name: string;
      email: string;
    };
    board_id: number;
    first_moved_to_in_progress_at: string | null;
    children_number_properties_sum: number | Record<string, number> | null;
    external_user_emails: string | null;
    files: unknown[];
    version: number;
    title: string;
    counters_recalculated_at: string;
    comments_total: number;
    parents_count: number;
    due_date: string | null;
    completed_on_time: boolean | null;
    blocking_card: boolean;
    type: {
      archived: boolean;
      color: number;
      letter: string;
      created: string;
      name: string;
      properties: Record<string, JsonValue> | null;
      updated: string;
      id: number;
      company_id: number | null;
      description_template: string | null;
    };
    updated: string;
    id: number;
    condition: number;
    share_id: string | null;
    comment_last_added_at: string | null;
    fifo_order: number | null;
    description: string | null;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/card/card:update */
export interface CardUpdateWebhookEvent {
  event: "card:update";
  data: {
    old: {
      type_id: number;
      sprint_id: number | null;
      sd_external_recipients: unknown;
      planned_end: string | null;
      ignore_planned_dates_recalculation: boolean;
      project_id: number | null;
      size: number | null;
      goals_done: number;
      expires_later: boolean;
      last_moved_to_done_at: string | null;
      asap: boolean;
      children_done: number;
      parents_ids: number[] | null;
      size_unit: string | null;
      archived: boolean;
      share_settings: Record<string, JsonValue> | null;
      column_id: number;
      goals_total: number;
      service_id: number | null;
      description_filled: boolean;
      calculated_planned_start: string | null;
      time_blocked_sum: number;
      owner_id: number;
      planned_start: string | null;
      column_changed_at: string;
      completed_at: string | null;
      last_moved_at: string;
      parent_link_ids: unknown;
      time_spent_sum: number;
      created: string;
      public: boolean;
      parent_checklist_ids: number[] | null;
      milestone_id: number | null;
      size_text: string | null;
      blocked: boolean;
      sort_order: number;
      lane_id: number;
      due_date_time_present: boolean;
      external_id: string | null;
      children_count: number;
      updater_id: number;
      state: number;
      lane_changed_at: string;
      sd_new_comment: boolean;
      tag_ids: number[] | null;
      properties: CustomPropertyValues | null;
      board_id: number;
      first_moved_to_in_progress_at: string | null;
      children_number_properties_sum: number | Record<string, number> | null;
      import_id: number | null;
      external_user_emails: string | null;
      has_blocked_children: boolean;
      children_ids: number[] | null;
      version: number;
      title: string;
      counters_recalculated_at: string;
      comments_total: number;
      parents_count: number;
      due_date: string | null;
      completed_on_time: boolean | null;
      blocking_card: boolean;
      updated: string;
      id: number;
      condition: number;
      share_id: string | null;
      comment_last_added_at: string | null;
      fifo_order: number | null;
      description: string | null;
      calculated_planned_end: string | null;
    };
    changes: Partial<CardUpdateWebhookEvent["data"]["old"]>;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/comment/comment:add */
export interface CommentAddWebhookEvent {
  event: "comment:add";
  data: {
    created: string;
    edited: boolean;
    card_id: number;
    notification_sent: unknown;
    text: string;
    author_id: number;
    deleted: boolean;
    type: number;
    updated: string;
    id: number;
    email_addresses_to: string | null;
    internal: boolean;
    sd_external_recipients_cc: unknown;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/comment/comment:remove */
export interface CommentRemoveWebhookEvent {
  event: "comment:remove";
  data: {
    sent_slack_messages_data: unknown;
    created: string;
    edited: boolean;
    card_id: number;
    notification_sent: string;
    text: string;
    author_id: number;
    deleted: boolean;
    type: number;
    updated: string;
    id: number;
    email_addresses_to: string | null;
    internal: boolean;
    sd_external_recipients_cc: unknown;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/comment/comment:update */
export interface CommentUpdateWebhookEvent {
  event: "comment:update";
  data: {
    old: {
      sent_slack_messages_data: unknown;
      created: string;
      edited: boolean;
      card_id: number;
      notification_sent: string;
      text: string;
      author_id: number;
      deleted: boolean;
      type: number;
      updated: string;
      id: number;
      email_addresses_to: string | null;
      internal: boolean;
      /** Legacy spelling in Kaiten's published example. */
      d_external_recipients_cc?: string | null;
      sd_external_recipients_cc?: string | null;
    };
    changes: Partial<CommentUpdateWebhookEvent["data"]["old"]>;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/file/file:add */
export interface FileAddWebhookEvent {
  event: "file:add";
  data: {
    size: number;
    card_cover: boolean;
    created: string;
    card_id: number;
    name: string;
    external: boolean;
    url_with_not_encoded_filename: string | null;
    sort_order: number;
    mh_markup_id: number | null;
    author_id: number;
    url: string;
    mh_secret: unknown;
    deleted: boolean;
    type: number;
    updated: string;
    id: number;
    comment_id: number | null;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/file/file:remove */
export interface FileRemoveWebhookEvent {
  event: "file:remove";
  data: {
    size: number;
    card_cover: boolean;
    created: string;
    card_id: number;
    name: string;
    external: boolean;
    sort_order: number;
    author_id: number;
    url: string;
    uid: string;
    deleted: boolean;
    type: number;
    updated: string;
    id: number;
    comment_id: number | null;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/file/file:update */
export interface FileUpdateWebhookEvent {
  event: "file:update";
  data: {
    old: {
      size: number;
      card_cover: boolean;
      created: string;
      card_id: number;
      name: string;
      external: boolean;
      url_with_not_encoded_filename: string | null;
      sort_order: number;
      mh_markup_id: number | null;
      author_id: number;
      url: string;
      mh_secret: unknown;
      deleted: boolean;
      type: number;
      updated: string;
      id: number;
      comment_id: number | null;
    };
    changes: Partial<FileUpdateWebhookEvent["data"]["old"]>;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/space/space:update */
export interface SpaceUpdateWebhookEvent {
  event: "space:update";
  data: {
    changes: Partial<SpaceUpdateWebhookEvent["data"]["old"]>;
    old: {
      archived: boolean;
      settings: Record<string, JsonValue> | null;
      private: boolean;
      subspace: boolean;
      created: string;
      allowed_card_type_ids: unknown;
      hidden_card_type_uids: unknown;
      external_id: string | null;
      title: string;
      updated: string;
      id: number;
    };
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/tag/tag:add */
export interface TagAddWebhookEvent {
  event: "tag:add";
  data: {
    created: string;
    updated: string;
    id: number;
    name: string;
    company_id: number;
    color: number;
    archived: boolean;
    card_id: number;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/tag/tag:remove */
export interface TagRemoveWebhookEvent {
  event: "tag:remove";
  data: {
    id: number;
    card_id: number;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/tag/tag:update */
export interface TagUpdateWebhookEvent {
  event: "tag:update";
  data: {
    old: {
      created: string;
      updated: string;
      archived: boolean;
      id: number;
      name: string;
      company_id: number;
      color: number;
    };
    changes: Partial<TagUpdateWebhookEvent["data"]["old"]>;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/timelog/timelog:add */
export interface TimelogAddWebhookEvent {
  event: "card_time_log:add";
  data: {
    for_date: string;
    role_id: number;
    created: string;
    card_id: number;
    author_id: number;
    user_id: number;
    updater_id: number | null;
    updated: string;
    id: number;
    time_spent: number;
    comment: string;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/timelog/timelog:remove */
export interface TimelogRemoveWebhookEvent {
  event: "card_time_log:remove";
  data: {
    for_date: string;
    role_id: number;
    created: string;
    card_id: number;
    author_id: number;
    user_id: number;
    updater_id: number | null;
    updated: string;
    id: number;
    /** Legacy spelling in Kaiten's published example. */
    ime_spent?: number;
    time_spent?: number;
    comment: string;
    /** Legacy spelling in Kaiten's published example. */
    uthor?: UserSummary;
    author?: UserSummary;
  };
}

/** @see https://developers.kaiten.ru/external-webhooks/timelog/timelog:update */
export interface TimelogUpdateWebhookEvent {
  event: "card_time_log:update";
  data: {
    old: {
      for_date: string;
      role_id: number;
      created: string;
      card_id: number;
      author_id: number;
      user_id: number;
      updater_id: number | null;
      updated: string;
      id: number;
      time_spent: number;
      comment: string;
    };
    changes: Partial<TimelogUpdateWebhookEvent["data"]["old"]>;
    author: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
  };
}

export type KaitenWebhookEvent =
  | BlockAddWebhookEvent
  | BlockUpdateWebhookEvent
  | BoardAddWebhookEvent
  | BoardUpdateWebhookEvent
  | CardMemberAddWebhookEvent
  | CardMemberRemoveWebhookEvent
  | CardMemberUpdateWebhookEvent
  | CardAddWebhookEvent
  | CardUpdateWebhookEvent
  | CommentAddWebhookEvent
  | CommentRemoveWebhookEvent
  | CommentUpdateWebhookEvent
  | FileAddWebhookEvent
  | FileRemoveWebhookEvent
  | FileUpdateWebhookEvent
  | SpaceUpdateWebhookEvent
  | TagAddWebhookEvent
  | TagRemoveWebhookEvent
  | TagUpdateWebhookEvent
  | TimelogAddWebhookEvent
  | TimelogRemoveWebhookEvent
  | TimelogUpdateWebhookEvent;

export const WEBHOOK_EVENT_METADATA = [
  {
    documentation: "/external-webhooks/block/block:add",
    event: "block:add",
    type: "BlockAddWebhookEvent",
  },
  {
    documentation: "/external-webhooks/block/block:update",
    event: "block:update",
    type: "BlockUpdateWebhookEvent",
  },
  {
    documentation: "/external-webhooks/board/board:add",
    event: "board:add",
    type: "BoardAddWebhookEvent",
  },
  {
    documentation: "/external-webhooks/board/board:update",
    event: "board:update",
    type: "BoardUpdateWebhookEvent",
  },
  {
    documentation: "/external-webhooks/card-members/card_member:add",
    event: "card_member:add",
    type: "CardMemberAddWebhookEvent",
  },
  {
    documentation: "/external-webhooks/card-members/card_member:remove",
    event: "card_member:remove",
    type: "CardMemberRemoveWebhookEvent",
  },
  {
    documentation: "/external-webhooks/card-members/card_member:update",
    event: "card_member:update",
    type: "CardMemberUpdateWebhookEvent",
  },
  {
    documentation: "/external-webhooks/card/card:add",
    event: "card:add",
    type: "CardAddWebhookEvent",
  },
  {
    documentation: "/external-webhooks/card/card:update",
    event: "card:update",
    type: "CardUpdateWebhookEvent",
  },
  {
    documentation: "/external-webhooks/comment/comment:add",
    event: "comment:add",
    type: "CommentAddWebhookEvent",
  },
  {
    documentation: "/external-webhooks/comment/comment:remove",
    event: "comment:remove",
    type: "CommentRemoveWebhookEvent",
  },
  {
    documentation: "/external-webhooks/comment/comment:update",
    event: "comment:update",
    type: "CommentUpdateWebhookEvent",
  },
  {
    documentation: "/external-webhooks/file/file:add",
    event: "file:add",
    type: "FileAddWebhookEvent",
  },
  {
    documentation: "/external-webhooks/file/file:remove",
    event: "file:remove",
    type: "FileRemoveWebhookEvent",
  },
  {
    documentation: "/external-webhooks/file/file:update",
    event: "file:update",
    type: "FileUpdateWebhookEvent",
  },
  {
    documentation: "/external-webhooks/space/space:update",
    event: "space:update",
    type: "SpaceUpdateWebhookEvent",
  },
  {
    documentation: "/external-webhooks/tag/tag:add",
    event: "tag:add",
    type: "TagAddWebhookEvent",
  },
  {
    documentation: "/external-webhooks/tag/tag:remove",
    event: "tag:remove",
    type: "TagRemoveWebhookEvent",
  },
  {
    documentation: "/external-webhooks/tag/tag:update",
    event: "tag:update",
    type: "TagUpdateWebhookEvent",
  },
  {
    documentation: "/external-webhooks/timelog/timelog:add",
    event: "card_time_log:add",
    type: "TimelogAddWebhookEvent",
  },
  {
    documentation: "/external-webhooks/timelog/timelog:remove",
    event: "card_time_log:remove",
    type: "TimelogRemoveWebhookEvent",
  },
  {
    documentation: "/external-webhooks/timelog/timelog:update",
    event: "card_time_log:update",
    type: "TimelogUpdateWebhookEvent",
  },
] as const;
