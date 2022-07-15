export interface IPropsName {
    name: string;
  }

  export interface IInputComponent {
    name: string;
    setSkip: (prevState: any) => void;
    skip:boolean 
    setUrl: (value: string) => void;
    isFetching: boolean;
    refetch: () => void

  }