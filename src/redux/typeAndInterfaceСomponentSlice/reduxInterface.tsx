
export interface INamesСomponents {
  name: string
  value:string
}

export interface IСomponentsState {
  Сomponents: Array<INamesСomponents>; 
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