/** Types for every documented outgoing Kaiten webhook event. */

/** @see https://developers.kaiten.ru/external-webhooks/block/block:add */
export interface BlockAddWebhookEvent {
  event: "block:add";
  data: {
    blocker_id: number;
    released_by_id: unknown;
    blocked_card: {
      type_id: number;
      sprint_id: unknown;
      planned_end: unknown;
      ignore_planned_dates_recalculation: boolean;
      size: unknown;
      goals_done: number;
      expires_later: boolean;
      last_moved_to_done_at: unknown;
      asap: boolean;
      children_done: number;
      parents_ids: unknown;
      size_unit: unknown;
      archived: boolean;
      share_settings: unknown;
      column_id: number;
      goals_total: number;
      service_id: unknown;
      description_filled: boolean;
      calculated_planned_start: unknown;
      time_blocked_sum: number;
      owner_id: number;
      planned_start: unknown;
      column_changed_at: string;
      completed_at: unknown;
      last_moved_at: string;
      time_spent_sum: number;
      created: string;
      public: boolean;
      parent_checklist_ids: unknown;
      size_text: unknown;
      blocked: boolean;
      sort_order: number;
      lane_id: number;
      due_date_time_present: boolean;
      external_id: unknown;
      children_count: number;
      updater_id: number;
      state: number;
      lane_changed_at: string;
      sd_new_comment: boolean;
      properties: {
        id_5376: number;
        id_5419: number;
      };
      board_id: number;
      first_moved_to_in_progress_at: unknown;
      children_number_properties_sum: unknown;
      external_user_emails: unknown;
      has_blocked_children: boolean;
      children_ids: unknown;
      version: number;
      title: string;
      counters_recalculated_at: string;
      comments_total: number;
      parents_count: number;
      due_date: unknown;
      completed_on_time: unknown;
      blocking_card: boolean;
      type: {
        id: number;
        name: string;
        color: number;
        letter: string;
        company_id: unknown;
        archived: boolean;
        properties: unknown;
      };
      updated: string;
      id: number;
      condition: number;
      share_id: unknown;
      comment_last_added_at: unknown;
      ifo_order: unknown;
      alculated_planned_end: unknown;
    };
    reason: string;
    blocker_card_id: number;
    created: string;
    card_id: number;
    blocker_card_title: unknown;
    card: {
      type_id: number;
      sprint_id: unknown;
      planned_end: unknown;
      ignore_planned_dates_recalculation: boolean;
      size: unknown;
      goals_done: number;
      expires_later: boolean;
      last_moved_to_done_at: unknown;
      asap: boolean;
      children_done: number;
      parents_ids: unknown;
      size_unit: unknown;
      archived: boolean;
      share_settings: unknown;
      column_id: number;
      goals_total: number;
      service_id: unknown;
      description_filled: boolean;
      calculated_planned_start: unknown;
      time_blocked_sum: number;
      owner_id: number;
      planned_start: unknown;
      column_changed_at: string;
      completed_at: unknown;
      last_moved_at: string;
      time_spent_sum: number;
      created: string;
      public: boolean;
      parent_checklist_ids: unknown;
      size_text: unknown;
      blocked: boolean;
      sort_order: number;
      lane_id: number;
      due_date_time_present: boolean;
      external_id: unknown;
      children_count: number;
      updater_id: number;
      state: number;
      lane_changed_at: string;
      sd_new_comment: boolean;
      properties: {
        id_5376: number;
        id_5419: number;
      };
      owner: {
        avatar_type: number;
        avatar_initials_url: string;
        lng: string;
        theme: string;
        initials: string;
        avatar_uploaded_url: unknown;
        username: string;
        timezone: string;
        updated: string;
        id: number;
        full_name: string;
        email: string;
      };
      board_id: number;
      first_moved_to_in_progress_at: unknown;
      children_number_properties_sum: unknown;
      external_user_emails: unknown;
      as_blocked_children: boolean;
      children_ids: unknown;
      version: number;
      title: string;
      counters_recalculated_at: string;
      comments_total: number;
      parents_count: number;
      due_date: unknown;
      completed_on_time: unknown;
      blocking_card: boolean;
      type: {
        id: number;
        name: string;
        color: number;
        letter: string;
        company_id: unknown;
        archived: boolean;
        properties: unknown;
      };
      updated: string;
      id: number;
      condition: number;
      share_id: unknown;
      comment_last_added_at: unknown;
      fifo_order: unknown;
      calculated_planned_end: unknown;
    };
    blocker: {
      avatar_type: number;
      avatar_initials_url: string;
      lng: string;
      theme: string;
      initials: string;
      avatar_uploaded_url: unknown;
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
      released_by_id: unknown;
      reason: string;
      blocker_card_id: number;
      created: string;
      card_id: number;
      blocker_card_title: unknown;
      updated: string;
      id: number;
      released: boolean;
    };
    changes: {
      created: string;
      updated: string;
      reason: string;
    };
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
    external_id: unknown;
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
    description: unknown;
    lanes: {
      last_moved_warning_after_minutes: number;
      created: string;
      row_count: number;
      sort_order: number;
      external_id: unknown;
      default_card_type_id: unknown;
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
      column_id: unknown;
      last_moved_warning_after_minutes: number;
      created: string;
      sort_order: number;
      external_id: unknown;
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
    changes: {
      updated: string;
      title: string;
    };
    old: {
      reset_lane_spent_time: boolean;
      move_parents_to_done: boolean;
      automove_cards: boolean;
      left: number;
      hide_done_policies_in_done_column: boolean;
      created: string;
      backward_moves_enabled: boolean;
      sort_order: number;
      external_id: unknown;
      default_card_type_id: number;
      hide_done_policies: boolean;
      first_image_is_cover: boolean;
      top: number;
      cell_wip_limits: unknown;
      default_tags: unknown;
      title: string;
      updated: string;
      id: number;
      description: unknown;
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
    avatar_uploaded_url: unknown;
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
    changes: {
      card_id: number;
      user_id: number;
      type: number;
    };
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
    sprint_id: unknown;
    planned_end: unknown;
    ignore_planned_dates_recalculation: boolean;
    size: unknown;
    goals_done: number;
    expires_later: boolean;
    last_moved_to_done_at: unknown;
    asap: boolean;
    children_done: number;
    size_unit: unknown;
    archived: boolean;
    share_settings: unknown;
    column_id: number;
    goals_total: number;
    external_links: unknown[];
    service_id: unknown;
    description_filled: boolean;
    time_blocked_sum: number;
    owner_id: number;
    planned_start: unknown;
    column_changed_at: string;
    completed_at: unknown;
    last_moved_at: string;
    time_spent_sum: number;
    created: string;
    public: boolean;
    parent_checklist_ids: unknown;
    size_text: unknown;
    blocked: boolean;
    sort_order: number;
    checklists: unknown[];
    lane_id: number;
    due_date_time_present: boolean;
    external_id: unknown;
    children_count: number;
    updater_id: number;
    state: number;
    lane_changed_at: string;
    sd_new_comment: boolean;
    properties: {
      id_5376: number;
      id_5419: number;
    };
    owner: {
      avatar_type: number;
      avatar_initials_url: string;
      lng: string;
      created: string;
      theme: string;
      news_subscription: boolean;
      sd_telegram_id: unknown;
      ui_version: number;
      initials: string;
      activated: boolean;
      avatar_uploaded_url: unknown;
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
    first_moved_to_in_progress_at: unknown;
    children_number_properties_sum: unknown;
    external_user_emails: unknown;
    files: unknown[];
    version: number;
    title: string;
    counters_recalculated_at: string;
    comments_total: number;
    parents_count: number;
    due_date: unknown;
    completed_on_time: unknown;
    blocking_card: boolean;
    type: {
      archived: boolean;
      color: number;
      letter: string;
      created: string;
      name: string;
      properties: unknown;
      updated: string;
      id: number;
      company_id: unknown;
      description_template: unknown;
    };
    updated: string;
    id: number;
    condition: number;
    share_id: unknown;
    comment_last_added_at: unknown;
    fifo_order: unknown;
    description: unknown;
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
      sprint_id: unknown;
      sd_external_recipients: unknown;
      planned_end: unknown;
      ignore_planned_dates_recalculation: boolean;
      project_id: unknown;
      size: unknown;
      goals_done: number;
      expires_later: boolean;
      last_moved_to_done_at: unknown;
      asap: boolean;
      children_done: number;
      parents_ids: unknown;
      size_unit: unknown;
      archived: boolean;
      share_settings: unknown;
      column_id: number;
      goals_total: number;
      service_id: unknown;
      description_filled: boolean;
      calculated_planned_start: unknown;
      time_blocked_sum: number;
      owner_id: number;
      planned_start: unknown;
      column_changed_at: string;
      completed_at: unknown;
      last_moved_at: string;
      parent_link_ids: unknown;
      time_spent_sum: number;
      created: string;
      public: boolean;
      parent_checklist_ids: unknown;
      milestone_id: unknown;
      size_text: unknown;
      blocked: boolean;
      sort_order: number;
      lane_id: number;
      due_date_time_present: boolean;
      external_id: unknown;
      children_count: number;
      updater_id: number;
      state: number;
      lane_changed_at: string;
      sd_new_comment: boolean;
      tag_ids: unknown;
      properties: {
        id_5376: number;
        id_5419: number;
      };
      board_id: number;
      first_moved_to_in_progress_at: unknown;
      children_number_properties_sum: unknown;
      import_id: unknown;
      external_user_emails: unknown;
      has_blocked_children: boolean;
      children_ids: unknown;
      version: number;
      title: string;
      counters_recalculated_at: string;
      comments_total: number;
      parents_count: number;
      due_date: unknown;
      completed_on_time: unknown;
      blocking_card: boolean;
      updated: string;
      id: number;
      condition: number;
      share_id: unknown;
      comment_last_added_at: unknown;
      fifo_order: unknown;
      description: unknown;
      calculated_planned_end: unknown;
    };
    changes: {
      updated: string;
      archived: boolean;
      version: number;
      condition: number;
      properties: {
        id_5376: unknown;
        id_5419: number;
      };
      counters_recalculated_at: string;
    };
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
    email_addresses_to: unknown;
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
    email_addresses_to: unknown;
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
      email_addresses_to: unknown;
      internal: boolean;
      d_external_recipients_cc: unknown;
    };
    changes: {
      updated: string;
      text: string;
    };
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
    url_with_not_encoded_filename: unknown;
    sort_order: number;
    mh_markup_id: unknown;
    author_id: number;
    url: string;
    mh_secret: unknown;
    deleted: boolean;
    type: number;
    updated: string;
    id: number;
    comment_id: unknown;
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
    comment_id: unknown;
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
      url_with_not_encoded_filename: unknown;
      sort_order: number;
      mh_markup_id: unknown;
      author_id: number;
      url: string;
      mh_secret: unknown;
      deleted: boolean;
      type: number;
      updated: string;
      id: number;
      comment_id: unknown;
    };
    changes: {
      updated: string;
    };
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
    changes: {
      created: string;
      updated: string;
      title: string;
      external_id: string;
    };
    old: {
      archived: boolean;
      settings: unknown;
      private: boolean;
      subspace: boolean;
      created: string;
      allowed_card_type_ids: unknown;
      hidden_card_type_uids: unknown;
      external_id: unknown;
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
    changes: {
      created: string;
      updated: string;
      name: string;
    };
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
    updater_id: unknown;
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
    updater_id: unknown;
    updated: string;
    id: number;
    ime_spent: number;
    comment: string;
    uthor: {
      id: number;
      full_name: string;
      username: string;
      email: string;
    };
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
      updater_id: unknown;
      updated: string;
      id: number;
      time_spent: number;
      comment: string;
    };
    changes: {
      for_date: string;
    };
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
