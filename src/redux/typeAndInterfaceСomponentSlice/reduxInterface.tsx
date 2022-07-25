export interface СomponentsState {
  NamesСomponents: Array<string>;
}

export interface IRenameActions {
  component: string;
  renameValue: string;
}
export interface ITotalPrice {
  TotalPriceUAH: number;
  TotalPriceEURO: number;
  TotalPriceUSD: number;
  currency: string
}