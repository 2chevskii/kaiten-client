/** Generated from the Kaiten developer documentation audit. */

import type { HttpTransport, OperationOptions } from "../../http.js";

import { pathSegment } from "../../http.js";

export type CardServiceDeskExternalRecipientsAddNewRecipientBody = {
  email: string;
};

export type CardServiceDeskExternalRecipientsAddNewRecipientResponse = {
  created: string;
  updated: string;
  card_id: number;
  user_id: number | null;
  email: string;
  unsubscribed: boolean;
  updater_id: number;
};

export interface CardServiceDeskExternalRecipientsAddNewRecipientParams extends OperationOptions {
  card_id: number;
  body: CardServiceDeskExternalRecipientsAddNewRecipientBody;
  signal?: AbortSignal;
}

export type CardServiceDeskExternalRecipientsRemoveRecipientResponse = {
  created: string;
  updated: string;
  card_id: number;
  user_id: number | null;
  email: string;
  unsubscribed: boolean;
  updater_id: number;
  company_id: number;
};

export interface CardServiceDeskExternalRecipientsRemoveRecipientParams extends OperationOptions {
  card_id: number;
  email: string;
  signal?: AbortSignal;
}

export type CardSlaRetrieveCardSlaMeasurementsResponse = {
  calendars: Array<{
    id: string;
    timezone: string;
    work_days: Array<
      | {
          created: string;
          updated: string;
          id: string;
          calendar_id: string;
          day: number;
          date: null;
          full_day: null;
          period_start: number;
          period_finish: number;
        }
      | {
          created: string;
          updated: string;
          id: string;
          calendar_id: string;
          day: null;
          date: string;
          full_day: boolean;
          period_start: number;
          period_finish: number;
        }
    >;
    holidays: Array<{
      created: string;
      updated: string;
      id: string;
      calendar_id: string;
      day: number;
      month: number;
      year: number;
      description: string;
    }>;
  }>;
  rulesTimeData: Array<{
    rule_id: string;
    card_id: number;
    actual_time: number;
    started: boolean;
    completed: boolean;
    last_calculated_at: string;
    is_last_calculated_at_work_time: boolean;
  }>;
};

export interface CardSlaRetrieveCardSlaMeasurementsParams extends OperationOptions {
  card_id: number;
  signal?: AbortSignal;
}

export type ServiceDeskServicesRetrieveServicesListResponse = Array<{
  id: number;
  name: string;
  fields_settings: Record<string, unknown> | null;
  archived: boolean;
  lng: string;
  email_settings: number;
  type_id: number | null;
  email_key: string;
  board_id: number;
  column_id: number;
  lane_id: number;
  display_status: string;
  template_description: string;
  settings: {
    allowed_email_masks: unknown[];
  };
  allow_to_add_external_recipients: boolean;
  column: string | number;
  board: string | number;
  lane: string | number;
  voteCustomProperty: {
    created: string;
    updated: string;
    service_id: number;
    custom_property_id: number;
    author_id: number;
  };
}>;

export interface ServiceDeskServicesRetrieveServicesListParams extends OperationOptions {
  signal?: AbortSignal;
}

export const createServiceDeskResources = (transport: HttpTransport) => ({
  cardServiceDeskExternalRecipients: {
    /** @see https://developers.kaiten.ru/card-service-desk-external-recipients/add-new-recipient */
    addNewRecipient: (
      params: CardServiceDeskExternalRecipientsAddNewRecipientParams,
    ) => {
      return transport.request<CardServiceDeskExternalRecipientsAddNewRecipientResponse>(
        {
          method: "POST",
          path:
            "/cards/" + pathSegment(params.card_id) + "/sd-external-recipients",
          body: params.body,
          signal: params.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-service-desk-external-recipients/remove-recipient */
    removeRecipient: (
      params: CardServiceDeskExternalRecipientsRemoveRecipientParams,
    ) => {
      return transport.request<CardServiceDeskExternalRecipientsRemoveRecipientResponse>(
        {
          method: "DELETE",
          path:
            "/cards/" +
            pathSegment(params.card_id) +
            "/sd-external-recipients/" +
            pathSegment(params.email),
          signal: params.signal,
        },
      );
    },
  },
  cardSla: {
    /** @see https://developers.kaiten.ru/card-sla/retrieve-card-sla-measurements */
    retrieveCardSlaMeasurements: (
      params: CardSlaRetrieveCardSlaMeasurementsParams,
    ) => {
      return transport.request<CardSlaRetrieveCardSlaMeasurementsResponse>({
        method: "GET",
        path:
          "/cards/" + pathSegment(params.card_id) + "/sla-rules-measurements",
        signal: params.signal,
      });
    },
  },
  serviceDeskServices: {
    /** @see https://developers.kaiten.ru/service-desk-services/retrieve-services-list */
    retrieveServicesList: (
      params: ServiceDeskServicesRetrieveServicesListParams = {},
    ) => {
      return transport.request<ServiceDeskServicesRetrieveServicesListResponse>(
        {
          method: "GET",
          path: "/service-desk/services",
          signal: params.signal,
        },
      );
    },
  },
});
