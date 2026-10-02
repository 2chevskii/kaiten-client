import type { OperationOptions } from "../http.ts";

export interface SearchResponseV2<Result extends readonly unknown[]> {
  result: Result;
  position: string;
}

/** Capture search parameters and the cancellation signal before iteration. */
export function iterateSearchResults<
  Query extends { start_position?: string },
  Result extends readonly unknown[],
>(
  fetchPage: (
    query: Query & { version: 2 },
    options?: OperationOptions,
  ) => Promise<SearchResponseV2<Result>>,
  query: Query,
  options?: OperationOptions,
): AsyncGenerator<Result[number], void> {
  const querySnapshot = structuredClone(query);
  const requestOptions = { ...options };
  return iterateCursor<Result[number]>(
    (position) =>
      fetchPage(
        {
          ...querySnapshot,
          version: 2,
          ...(position === undefined ? {} : { start_position: position }),
        },
        requestOptions,
      ),
    querySnapshot.start_position,
    requestOptions.signal,
  );
}

/** Fetch one page at a time, stopping when the consumer stops iteration. */
async function* iterateCursor<Item>(
  fetchPage: (
    position: string | undefined,
  ) => Promise<SearchResponseV2<readonly Item[]>>,
  initialPosition?: string,
  signal?: AbortSignal,
): AsyncGenerator<Item, void> {
  let position = initialPosition;
  const visitedPositions = new Set<string>();
  if (position) {
    visitedPositions.add(position);
  }

  while (true) {
    signal?.throwIfAborted();
    const page = await fetchPage(position);
    signal?.throwIfAborted();
    for (const item of page.result) {
      signal?.throwIfAborted();
      yield item;
    }

    if (page.result.length === 0 || !page.position) {
      return;
    }
    if (visitedPositions.has(page.position)) {
      throw new Error("Kaiten returned a repeated search cursor");
    }
    visitedPositions.add(page.position);
    position = page.position;
  }
}
