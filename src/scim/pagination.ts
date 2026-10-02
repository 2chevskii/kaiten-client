/** Advance by the actual page size using SCIM's one-based request index. */
export async function* iterateScimResults<Item>(
  fetchPage: (startIndex: number) => Promise<{
    Resources: readonly Item[];
    totalResults: number;
  }>,
  initialStartIndex = 1,
  signal?: AbortSignal,
): AsyncGenerator<Item, void> {
  signal?.throwIfAborted();
  if (!Number.isSafeInteger(initialStartIndex) || initialStartIndex < 1) {
    throw new RangeError("SCIM startIndex must be a positive safe integer");
  }

  let startIndex = initialStartIndex;
  while (true) {
    signal?.throwIfAborted();
    const page = await fetchPage(startIndex);
    signal?.throwIfAborted();
    if (
      !Array.isArray(page.Resources) ||
      !Number.isSafeInteger(page.totalResults) ||
      page.totalResults < 0
    ) {
      throw new TypeError("Kaiten returned invalid SCIM pagination metadata");
    }

    for (const resource of page.Resources) {
      signal?.throwIfAborted();
      yield resource;
    }

    signal?.throwIfAborted();
    startIndex += page.Resources.length;
    if (page.Resources.length === 0 || startIndex > page.totalResults) {
      return;
    }
  }
}
