import { createContext } from "react";

interface ModalContextInterface {
  isVisibility: boolean;
  setVisibility: (todo: boolean) => void;
}

export const ModalContext = createContext<ModalContextInterface | undefined>(
  undefined
);
