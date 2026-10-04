import type {ColumnSummary, LaneSummary, BoardSummary} from '../entities.ts';
import type {JsonValue} from '../types.ts';
import type {HttpTransport, OperationOptions} from '../http.ts';

import {pathSegment} from '../http.ts';

export interface CardServiceDeskExternalRecipientsAddNewRecipientBody {
  email: string;
}

export interface CardServiceDeskExternalRecipientsAddNewRecipientResponse {
  created: string;
  updated: string;
  card_id: number;
  user_id: number | null;
  email: string;
  unsubscribed: boolean;
  updater_id: number;
}

export type CardServiceDeskExternalRecipientsAddNewRecipientParams = Parameters<
  ReturnType<
    typeof createServiceDeskResources
  >['cardServiceDeskExternalRecipients']['addNewRecipient']
>;

export interface CardServiceDeskExternalRecipientsRemoveRecipientResponse {
  created: string;
  updated: string;
  card_id: number;
  user_id: number | null;
  email: string;
  unsubscribed: boolean;
  updater_id: number;
  company_id: number;
}

export type CardServiceDeskExternalRecipientsRemoveRecipientParams = Parameters<
  ReturnType<
    typeof createServiceDeskResources
  >['cardServiceDeskExternalRecipients']['removeRecipient']
>;

export interface CardSlaRetrieveCardSlaMeasurementsResponse {
  calendars: {
    id: string;
    timezone: string;
    work_days: (
      | {
          created: string;
          updated: string;
          id: string;
          calendar_id: string;
          day: number | null;
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
          date: string | null;
          full_day: boolean;
          period_start: number;
          period_finish: number;
        }
    )[];
    holidays: {
      created: string;
      updated: string;
      id: string;
      calendar_id: string;
      day: number;
      month: number;
      year: number;
      description: string;
    }[];
  }[];
  rulesTimeData: {
    rule_id: string;
    card_id: number;
    actual_time: number;
    started: boolean;
    completed: boolean;
    last_calculated_at: string;
    is_last_calculated_at_work_time: boolean;
  }[];
}

export type CardSlaRetrieveCardSlaMeasurementsParams = Parameters<
  ReturnType<
    typeof createServiceDeskResources
  >['cardSla']['retrieveCardSlaMeasurements']
>;

export type ServiceDeskServicesRetrieveServicesListResponse = {
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
  template_description: string | null;
  settings: {
    allowed_email_masks: JsonValue[];
  };
  allow_to_add_external_recipients: boolean;
  column: ColumnSummary;
  board: BoardSummary;
  lane: LaneSummary;
  voteCustomProperty: {
    created: string;
    updated: string;
    service_id: number;
    custom_property_id: number;
    author_id: number;
  };
}[];

export type ServiceDeskServicesRetrieveServicesListParams = Parameters<
  ReturnType<
    typeof createServiceDeskResources
  >['serviceDeskServices']['retrieveServicesList']
>;

export const createServiceDeskResources = (transport: HttpTransport) => ({
  cardServiceDeskExternalRecipients: {
    /** @see https://developers.kaiten.ru/card-service-desk-external-recipients/add-new-recipient */
    addNewRecipient: (
      cardId: number,
      email: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CardServiceDeskExternalRecipientsAddNewRecipientResponse>(
        {
          method: 'POST',
          path: '/cards/' + pathSegment(cardId) + '/sd-external-recipients',
          body: {email},
          signal: options?.signal,
        },
      );
    },
    /** @see https://developers.kaiten.ru/card-service-desk-external-recipients/remove-recipient */
    removeRecipient: (
      cardId: number,
      email: string,
      options?: OperationOptions,
    ) => {
      return transport.request<CardServiceDeskExternalRecipientsRemoveRecipientResponse>(
        {
          method: 'DELETE',
          path:
            '/cards/' +
            pathSegment(cardId) +
            '/sd-external-recipients/' +
            pathSegment(email),
          signal: options?.signal,
        },
      );
    },
  },
  cardSla: {
    /** @see https://developers.kaiten.ru/card-sla/retrieve-card-sla-measurements */
    retrieveCardSlaMeasurements: (
      cardId: number,
      options?: OperationOptions,
    ) => {
      return transport.request<CardSlaRetrieveCardSlaMeasurementsResponse>({
        method: 'GET',
        path: '/cards/' + pathSegment(cardId) + '/sla-rules-measurements',
        signal: options?.signal,
      });
    },
  },
  serviceDeskServices: {
    /** @see https://developers.kaiten.ru/service-desk-services/retrieve-services-list */
    retrieveServicesList: (options?: OperationOptions) => {
      return transport.request<ServiceDeskServicesRetrieveServicesListResponse>(
        {
          method: 'GET',
          path: '/service-desk/services',
          signal: options?.signal,
        },
      );
    },
  },
});
