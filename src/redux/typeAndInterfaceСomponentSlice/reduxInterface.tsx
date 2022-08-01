
export interface INamesComponents {
  name: string
  value:string
}
export interface INamesСomponentsForSetState {
  name?: string
  value?:string
}


export interface IComponentsState {
  Components: Array<INamesComponents>; 
}

export interface IRenameActions {
  component: string;
  value: string;
}
export interface ITotalPrice {
  TotalPriceUAH: number;
  TotalPriceEURO: number;
  TotalPriceUSD: number;
  currency: string
}