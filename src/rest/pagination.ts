import type {OperationOptions} from '../http.ts';

/** Offset pagination for list routes capped at 100 items per request. */
export function iterateOffsetResults<
  Query extends {limit?: number; offset?: number},
  Result extends readonly unknown[],
>(
  fetchPage: (
    query: Query & {limit: number; offset: number},
    options?: OperationOptions,
  ) => Promise<Result>,
  query: Query,
  options?: OperationOptions,
): AsyncGenerator<Result[number], void> {
  const querySnapshot = structuredClone(query);
  const requestOptions = {...options};
  return iteratePages<Result[number]>(
    (offset, limit) =>
      fetchPage({...querySnapshot, offset, limit}, requestOptions),
    querySnapshot.offset ?? 0,
    querySnapshot.limit ?? 100,
    requestOptions.signal,
  );
}

async function* iteratePages<Item>(
  fetchPage: (offset: number, limit: number) => Promise<readonly Item[]>,
  initialOffset: number,
  limit: number,
  signal?: AbortSignal,
): AsyncGenerator<Item, void> {
  signal?.throwIfAborted();
  if (!Number.isSafeInteger(initialOffset) || initialOffset < 0) {
    throw new RangeError(
      'Pagination offset must be a non-negative safe integer',
    );
  }
  if (!Number.isSafeInteger(limit) || limit < 1 || limit > 100) {
    throw new RangeError('Pagination limit must be an integer from 1 to 100');
  }

  let offset = initialOffset;
  while (true) {
    signal?.throwIfAborted();
    const page = await fetchPage(offset, limit);
    signal?.throwIfAborted();
    if (!Array.isArray(page)) {
      throw new TypeError('Kaiten returned an invalid offset pagination page');
    }
    if (page.length === 0) {
      return;
    }

    for (const item of page) {
      signal?.throwIfAborted();
      yield item;
    }

    signal?.throwIfAborted();
    offset += page.length;
    if (!Number.isSafeInteger(offset)) {
      throw new RangeError('Pagination offset exceeded the safe integer range');
    }
  }
}
