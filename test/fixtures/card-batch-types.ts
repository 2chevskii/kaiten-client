import type {KaitenClient} from '@2chevskii/kaiten-client';

export function checkCardBatchTypes(client: KaitenClient): void {
  const cell = {column_id: 3, lane_id: 4};
  const patch = {board_id: 2, attributes: {asap: false, title: 'Bulk'}};

  void client.cards.batchUpdateForCards(patch);
  void client.cards.batchUpdateForCards({
    ...cell,
    order_by: {field_type: 'title', direction: 'asc'},
  });
  void client.cards.batchUpdateForCards({
    ...cell,
    order_by: {field_type: 'cp', id: 8, direction: 'desc'},
  });

  // @ts-expect-error An empty order_by provides neither sort selector.
  void client.cards.batchUpdateForCards({...cell, order_by: {}});
  void client.cards.batchUpdateForCards({
    ...cell,
    // @ts-expect-error A sort needs a field_type.
    order_by: {direction: 'asc'},
  });
  void client.cards.batchUpdateForCards({
    ...cell,
    // @ts-expect-error A sort needs a direction.
    order_by: {field_type: 'size'},
  });
  // @ts-expect-error A patch with order_by still needs both sort selectors.
  void client.cards.batchUpdateForCards({...patch, order_by: {}});
}
