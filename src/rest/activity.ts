import {pathSegment} from '../http.ts';
import type {HttpTransport, OperationOptions} from '../http.ts';

export interface ActivityQuery {
  limit?: number;
  cursor?: string;
  /** Comma-separated activity actions. */
  actions?: string;
  author_id?: number;
  created_after?: string;
  created_before?: string;
}

export interface CompanyActivityQuery extends ActivityQuery {
  card_id?: number;
}

export interface ActivityEvent {
  id: string;
  created: string;
  action: string;
}

export interface ActivityPage {
  items: ActivityEvent[];
  limit: number;
  next_cursor: string | null;
}

export type ActivityListCompanyActivityParams = Parameters<
  ReturnType<typeof createActivityResources>['activity']['listCompanyActivity']
>;
export type ActivityListSpaceActivityParams = Parameters<
  ReturnType<typeof createActivityResources>['activity']['listSpaceActivity']
>;

export const createActivityResources = (transport: HttpTransport) => {
  const listCompanyActivity = (
    query?: CompanyActivityQuery,
    options?: OperationOptions,
  ) =>
    transport.request<ActivityPage>({
      method: 'GET',
      path: '/company/activity',
      query,
      signal: options?.signal,
    });
  const listSpaceActivity = (
    spaceId: number,
    query?: ActivityQuery,
    options?: OperationOptions,
  ) =>
    transport.request<ActivityPage>({
      method: 'GET',
      path: `/spaces/${pathSegment(spaceId)}/activity`,
      query,
      signal: options?.signal,
    });
  return {
    activity: {
      /** @see https://developers.kaiten.ru/activity/list-company-activity */
      listCompanyActivity,
      /** @see https://developers.kaiten.ru/activity/list-space-activity */
      listSpaceActivity,
      iterateCompanyActivity: (
        query: CompanyActivityQuery = {},
        options?: OperationOptions,
      ) => iterateActivity(listCompanyActivity, query, options),
      iterateSpaceActivity: (
        spaceId: number,
        query: ActivityQuery = {},
        options?: OperationOptions,
      ) =>
        iterateActivity(
          (q, o) => listSpaceActivity(spaceId, q, o),
          query,
          options,
        ),
    },
  };
};

function iterateActivity<Q extends ActivityQuery>(
  fetchPage: (query: Q, options?: OperationOptions) => Promise<ActivityPage>,
  query: Q,
  options?: OperationOptions,
): AsyncGenerator<ActivityEvent, void> {
  const snapshot = structuredClone(query);
  const requestOptions = {...options};
  return (async function* () {
    let cursor = snapshot.cursor;
    const visited = new Set<string>();
    if (cursor !== undefined) visited.add(cursor);
    while (true) {
      requestOptions.signal?.throwIfAborted();
      const page = await fetchPage(
        {...snapshot, ...(cursor === undefined ? {} : {cursor})},
        requestOptions,
      );
      requestOptions.signal?.throwIfAborted();
      if (
        !page ||
        !Array.isArray(page.items) ||
        (page.next_cursor !== null && typeof page.next_cursor !== 'string')
      ) {
        throw new TypeError(
          'Kaiten returned invalid activity pagination metadata',
        );
      }
      if (page.next_cursor !== null && visited.has(page.next_cursor))
        throw new Error('Kaiten returned a repeated activity cursor');
      for (const item of page.items) {
        requestOptions.signal?.throwIfAborted();
        yield item;
      }
      if (page.next_cursor === null) return;
      visited.add(page.next_cursor);
      cursor = page.next_cursor;
    }
  })();
}
