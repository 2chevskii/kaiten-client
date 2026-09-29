export type SearchResponseV2<Result extends readonly unknown[]> = {
  result: Result;
  position: string;
};
