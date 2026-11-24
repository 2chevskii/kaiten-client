/**
 * Trigger names for creating and updating Kaiten automations.
 *
 * Iteration triggers require the Iterations feature. Use `iteration_card_added`
 * and `iteration_card_removed` for membership events. Use
 * `iteration_start_date_on_date` and `iteration_finish_date_on_date` for start
 * and finish date rules in the automation's space.
 *
 * @see https://developers.kaiten.ru/automations/create-automation
 * @see https://developers.kaiten.ru/automations/update-automation
 */
export type AutomationTriggerType =
  | 'card_moved_in_path'
  | 'card_created'
  | 'comment_posted'
  | 'card_user_added'
  | 'responsible_added'
  | 'card_type_changed'
  | 'card_state_changed'
  | 'custom_property_changed'
  | 'due_date_changed'
  | 'checklist_item_checked'
  | 'checklists_completed'
  | 'child_cards_state_changed'
  | 'tag_added'
  | 'tag_removed'
  | 'blocked'
  | 'unblocked'
  | 'blocker_added'
  | 'iteration_card_added'
  | 'iteration_card_removed'
  | 'due_date_on_date'
  | 'checklist_item_due_date_on_date'
  | 'custom_property_date_on_date'
  | 'iteration_start_date_on_date'
  | 'iteration_finish_date_on_date'
  | 'all_conditions_met';

export interface AutomationTrigger {
  type: AutomationTriggerType;
  hasToFireOnCardCreation?: boolean;
  data?: Record<string, unknown>;
}

export interface AutomationAction {
  type: string;
  data: Record<string, unknown>;
  created?: string;
}

export interface AutomationCondition {
  type: string;
  operator?: string;
  data?: Record<string, unknown>;
  created?: string;
}

export interface AutomationConditionGroup {
  clause: 'and' | 'or';
  conditions: (AutomationCondition | AutomationConditionGroup)[];
  created?: string;
}

export type AutomationBody =
  | {
      type: 'on_action' | 'on_date';
      name?: string;
      trigger: AutomationTrigger;
      conditions?: AutomationConditionGroup;
      actions: [AutomationAction, ...AutomationAction[]];
    }
  | {
      type: 'on_demand';
      name: string;
      actions: [AutomationAction, ...AutomationAction[]];
    };

export type AutomationUpdateBody = Partial<AutomationBody>;
