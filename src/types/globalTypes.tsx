export interface IPropsName {
  name: string;
}

export interface IInputComponent {
  name: string;
  setSkip: (prevState: any) => void;
  setUrl: (value: string) => void;
  isFetching: boolean;
  refetch: () => void;
}

export interface IResultComponent {
  data?: any;
  name: string;
}
export interface ITitleComponent {
  title:string;
  name:string;
}

export interface I_ImgComponent {
  url:string
}

export interface IPrice{
  price:string
}