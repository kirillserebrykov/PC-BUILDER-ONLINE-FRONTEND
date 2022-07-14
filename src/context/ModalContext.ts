import { createContext } from "react";

interface ModalContextInterface {
  isVisibility: boolean;
  setVisibility: (value: boolean) => void;
  typeModal: string;
  setTypeModal: (value: string) => void;
  renameComponent: string;
  setRenameComponent: (value: string) => void;
}

export const ModalContext = createContext<ModalContextInterface | undefined>(
  undefined
);
