import { createContext } from "react";

interface ModalContextInterface {
  isVisibility: boolean;
  setVisibility: (value: boolean) => void;
  typeModal: string;
  setTypeModal: (value: string) => void;
  renameComponent: string;
  setRenameComponent: (value: string) => void;
  shareMode: boolean,
  setShareMode: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextInterface | undefined>(
  undefined
);
