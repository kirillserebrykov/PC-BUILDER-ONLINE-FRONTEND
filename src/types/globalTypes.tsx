export interface IPropsName {
  name: string,
}

export interface IColumPropsName {
  name: string;
  value: string
}



export interface IInputComponent {
  name: string;
  defaultValue:string;
  setSkip: (prevState: any) => void;
  setUrl: (value: string) => void;
  isFetching: boolean;
  refetch: () => void;
}

export interface IResultComponent {
  data?: any;
  name: string;
  url:string;
  
}
export interface ITitleComponent {
  title:string;
  name:string;
  price:string;
  url:string;
}

export interface I_ImgComponent {
  url:string
}

export interface IPrice{
  price:string
}