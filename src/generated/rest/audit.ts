/** Generated from the Kaiten developer documentation audit. */

import type { HttpTransport, OperationOptions } from "../../http.js";

export type AuditLogsRetrieveAuditLogEventsQuery = {
  from?: string;
  to?: string;
  author_id?: number;
  author_uid?: string;
  categories?: string;
  actions?: string;
  id?: string;
  limit?: number;
  offset?: number;
};

export type AuditLogsRetrieveAuditLogEventsResponse = Array<{
  id: string;
  app_name: string | null;
  company_uid: string | null;
  author_id: number | null;
  author_uid: string | null;
  author_username: string | null;
  author_remote_address: string | null;
  author: Record<string, unknown> | null;
  category: string;
  action: string;
  message: string;
  details: Record<string, unknown> | null;
  created: string;
}>;

export interface AuditLogsRetrieveAuditLogEventsParams extends OperationOptions {
  query?: AuditLogsRetrieveAuditLogEventsQuery;
  signal?: AbortSignal;
}

export const createAuditResources = (transport: HttpTransport) => ({
  auditLogs: {
    /** @see https://developers.kaiten.ru/audit-logs/retrieve-audit-log-events */
    retrieveAuditLogEvents: (
      params: AuditLogsRetrieveAuditLogEventsParams = {},
    ) => {
      return transport.request<AuditLogsRetrieveAuditLogEventsResponse>({
        method: "GET",
        path: "/audit-logs",
        query: params.query,
        signal: params.signal,
      });
    },
  },
});
