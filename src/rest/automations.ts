import type { HttpTransport, OperationOptions } from "../http.js";

import { pathSegment } from "../http.js";

import type {
  AutomationBody,
  AutomationUpdateBody,
  AutomationAction,
  AutomationTrigger,
  AutomationConditionGroup,
} from "../automation.js";

export type AutomationsCreateAutomationBody = AutomationBody;

export interface AutomationsCreateAutomationResponse {
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: AutomationTrigger;
  actions: AutomationAction[];
  conditions: Partial<AutomationConditionGroup>;
  type: string;
  sort_order: number;
}

export type AutomationsCreateAutomationParams = Parameters<
  ReturnType<
    typeof createAutomationsResources
  >["automations"]["createAutomation"]
>;

export interface AutomationsDeleteAutomationResponse {
  message: string;
}

export type AutomationsDeleteAutomationParams = Parameters<
  ReturnType<
    typeof createAutomationsResources
  >["automations"]["deleteAutomation"]
>;

export type AutomationsGetListOfAutomationsResponse = {
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: AutomationTrigger;
  actions: AutomationAction[];
  conditions: Partial<AutomationConditionGroup>;
  type: string;
  sort_order: number;
}[];

export type AutomationsGetListOfAutomationsParams = Parameters<
  ReturnType<
    typeof createAutomationsResources
  >["automations"]["getListOfAutomations"]
>;

export type AutomationsUpdateAutomationBody = AutomationUpdateBody;

export interface AutomationsUpdateAutomationResponse {
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: AutomationTrigger;
  actions: AutomationAction[];
  conditions: Partial<AutomationConditionGroup>;
  type: string;
  sort_order: number;
}

export type AutomationsUpdateAutomationParams = Parameters<
  ReturnType<
    typeof createAutomationsResources
  >["automations"]["updateAutomation"]
>;

export const createAutomationsResources = (transport: HttpTransport) => ({
  automations: {
    /** @see https://developers.kaiten.ru/automations/create-automation */
    createAutomation: (
      spaceId: number,
      body: AutomationsCreateAutomationBody,
      options?: OperationOptions,
    ) => {
      return transport.request<AutomationsCreateAutomationResponse>({
        method: "POST",
        path: "/spaces/" + pathSegment(spaceId) + "/automations",
        body,
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/delete-automation */
    deleteAutomation: (
      spaceId: number,
      automationUid: string,
      options?: OperationOptions,
    ) => {
      return transport.request<AutomationsDeleteAutomationResponse>({
        method: "DELETE",
        path:
          "/spaces/" +
          pathSegment(spaceId) +
          "/automations/" +
          pathSegment(automationUid),
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/get-list-of-automations */
    getListOfAutomations: (spaceId: number, options?: OperationOptions) => {
      return transport.request<AutomationsGetListOfAutomationsResponse>({
        method: "GET",
        path: "/spaces/" + pathSegment(spaceId) + "/automations",
        signal: options?.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/update-automation */
    updateAutomation: (
      spaceId: number,
      automationUid: string,
      body: AutomationsUpdateAutomationBody,
      options?: OperationOptions,
    ) => {
      return transport.request<AutomationsUpdateAutomationResponse>({
        method: "PATCH",
        path:
          "/spaces/" +
          pathSegment(spaceId) +
          "/automations/" +
          pathSegment(automationUid),
        body,
        signal: options?.signal,
      });
    },
  },
});
