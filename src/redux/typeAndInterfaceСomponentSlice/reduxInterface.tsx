export interface СomponentsState {
  NamesСomponents: Array<string>;
}

export interface IRenameActions {
  component: string;
  renameValue: string;
}
export interface ITotalPrice {
  TotalPrice: number;
  currency: string
}