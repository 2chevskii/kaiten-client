export interface SearchResponseV2<Result extends readonly unknown[]> {
  result: Result;
  position: string;
}

/** Fetch one page at a time, stopping when the consumer stops iteration. */
export async function* iterateSearchResults<Item>(
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
