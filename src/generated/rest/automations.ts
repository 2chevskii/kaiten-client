/** Generated from the Kaiten developer documentation audit. */

import type { HttpTransport, OperationOptions } from "../../http.js";

import { pathSegment } from "../../http.js";

import type { AutomationBody, AutomationUpdateBody } from "../../automation.js";

export type AutomationsCreateAutomationBody = AutomationBody;

export type AutomationsCreateAutomationResponse = {
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: {
    type: string;
    hasToFireOnCardCreation: boolean;
  };
  actions: Array<{
    data: {
      slaIds: Array<string>;
    };
    type: string;
    created: string;
  }>;
  conditions: Record<string, unknown>;
  type: string;
  sort_order: number;
};

export interface AutomationsCreateAutomationParams extends OperationOptions {
  space_id: number;
  body?: AutomationsCreateAutomationBody;
  signal?: AbortSignal;
}

export type AutomationsDeleteAutomationResponse = {
  message: string;
};

export interface AutomationsDeleteAutomationParams extends OperationOptions {
  space_id: number;
  automation_uid: string;
  signal?: AbortSignal;
}

export type AutomationsGetListOfAutomationsResponse = Array<{
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: {
    type: string;
    hasToFireOnCardCreation: boolean;
  };
  actions: Array<{
    data: {
      slaIds: Array<string>;
    };
    type: string;
    created: string;
  }>;
  conditions: Record<string, unknown>;
  type: string;
  sort_order: number;
}>;

export interface AutomationsGetListOfAutomationsParams extends OperationOptions {
  space_id: number;
  signal?: AbortSignal;
}

export type AutomationsUpdateAutomationBody = AutomationUpdateBody;

export type AutomationsUpdateAutomationResponse = {
  created: string;
  updated: string;
  id: string;
  company_id: number;
  space_uid: string;
  updater_id: number;
  name: string | null;
  status: string;
  trigger: {
    type: string;
    hasToFireOnCardCreation: boolean;
  };
  actions: Array<{
    data: {
      slaIds: Array<string>;
    };
    type: string;
    created: string;
  }>;
  conditions: Record<string, unknown>;
  type: string;
  sort_order: number;
};

export interface AutomationsUpdateAutomationParams extends OperationOptions {
  space_id: number;
  automation_uid: string;
  body?: AutomationsUpdateAutomationBody;
  signal?: AbortSignal;
}

export const createAutomationsResources = (transport: HttpTransport) => ({
  automations: {
    /** @see https://developers.kaiten.ru/automations/create-automation */
    createAutomation: (params: AutomationsCreateAutomationParams) => {
      return transport.request<AutomationsCreateAutomationResponse>({
        method: "POST",
        path: "/spaces/" + pathSegment(params.space_id) + "/automations",
        body: params.body,
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/delete-automation */
    deleteAutomation: (params: AutomationsDeleteAutomationParams) => {
      return transport.request<AutomationsDeleteAutomationResponse>({
        method: "DELETE",
        path:
          "/spaces/" +
          pathSegment(params.space_id) +
          "/automations/" +
          pathSegment(params.automation_uid),
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/get-list-of-automations */
    getListOfAutomations: (params: AutomationsGetListOfAutomationsParams) => {
      return transport.request<AutomationsGetListOfAutomationsResponse>({
        method: "GET",
        path: "/spaces/" + pathSegment(params.space_id) + "/automations",
        signal: params.signal,
      });
    },
    /** @see https://developers.kaiten.ru/automations/update-automation */
    updateAutomation: (params: AutomationsUpdateAutomationParams) => {
      return transport.request<AutomationsUpdateAutomationResponse>({
        method: "PATCH",
        path:
          "/spaces/" +
          pathSegment(params.space_id) +
          "/automations/" +
          pathSegment(params.automation_uid),
        body: params.body,
        signal: params.signal,
      });
    },
  },
});
