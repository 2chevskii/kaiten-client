import type {HttpTransport, OperationOptions} from '../http.ts';
import {pathSegment} from '../http.ts';

/** The predecessor date is named first. */
export type PlannedRelationType =
  'end-start' | 'start-start' | 'end-end' | 'start-end';
export type PlannedRelationGapType = 'hours' | 'days';
export interface CardPlannedRelationsAddPlannedRelationBody {
  target_card_id: number;
  type: PlannedRelationType;
}
export interface CardPlannedRelationsUpdatePlannedRelationResponse {
  source_id: number;
  target_id: number;
  type: PlannedRelationType;
  author_id: number;
  gap: number | null;
  gap_type: PlannedRelationGapType | null;
}
export interface CardPlannedRelationsAddPlannedRelationResponse extends CardPlannedRelationsUpdatePlannedRelationResponse {
  created: string;
  updated: string;
  gap: null;
  gap_type: null;
}
/** A single gap field can be changed only when a gap already exists. */
export type CardPlannedRelationsUpdatePlannedRelationBody =
  | {type: PlannedRelationType; gap?: number; gap_type?: PlannedRelationGapType}
  | {type?: PlannedRelationType; gap: number; gap_type?: PlannedRelationGapType}
  | {type?: PlannedRelationType; gap?: number; gap_type: PlannedRelationGapType}
  | {type?: PlannedRelationType; gap: null; gap_type: null};
export interface CardPlannedRelationsRemovePlannedRelationResponse {
  card_id: number;
  target_card_id: number;
}
export type CardPlannedRelationsAddPlannedRelationParams = Parameters<
  ReturnType<
    typeof createPlannedRelationsResources
  >['cardPlannedRelations']['addPlannedRelation']
>;
export type CardPlannedRelationsUpdatePlannedRelationParams = Parameters<
  ReturnType<
    typeof createPlannedRelationsResources
  >['cardPlannedRelations']['updatePlannedRelation']
>;
export type CardPlannedRelationsRemovePlannedRelationParams = Parameters<
  ReturnType<
    typeof createPlannedRelationsResources
  >['cardPlannedRelations']['removePlannedRelation']
>;
export const createPlannedRelationsResources = (transport: HttpTransport) => ({
  cardPlannedRelations: {
    /** @see https://developers.kaiten.ru/card-planned-relations/add-planned-relation */
    addPlannedRelation: (
      cardId: number,
      body: CardPlannedRelationsAddPlannedRelationBody,
      options?: OperationOptions,
    ) =>
      transport.request<CardPlannedRelationsAddPlannedRelationResponse>({
        method: 'POST',
        path: '/cards/' + pathSegment(cardId) + '/planned-relation',
        body,
        signal: options?.signal,
      }),
    /** @see https://developers.kaiten.ru/card-planned-relations/update-planned-relation */
    updatePlannedRelation: (
      cardId: number,
      targetCardId: number,
      body: CardPlannedRelationsUpdatePlannedRelationBody,
      options?: OperationOptions,
    ) =>
      transport.request<CardPlannedRelationsUpdatePlannedRelationResponse>({
        method: 'PATCH',
        path:
          '/cards/' +
          pathSegment(cardId) +
          '/planned-relation/' +
          pathSegment(targetCardId),
        body,
        signal: options?.signal,
      }),
    /** @see https://developers.kaiten.ru/card-planned-relations/remove-planned-relation */
    removePlannedRelation: (
      cardId: number,
      targetCardId: number,
      options?: OperationOptions,
    ) =>
      transport.request<CardPlannedRelationsRemovePlannedRelationResponse>({
        method: 'DELETE',
        path:
          '/cards/' +
          pathSegment(cardId) +
          '/planned-relation/' +
          pathSegment(targetCardId),
        signal: options?.signal,
      }),
  },
});
