import React, { FC, useContext } from "react";
import "antd/dist/antd.css";
import { useAppDispatch } from "../../../redux/hooks";
import { ModalContext } from "../../../context/ModalContext";
import { addСomponent } from "../../../redux/itemAccessoriesSlice";
import ModalComponent from "./Modal";

const ModalComponentContainer: FC = (): JSX.Element => {
  const ModalVisibility = useContext(ModalContext);
  const dispatch = useAppDispatch();
  return (
    <ModalComponent
      isVisibility={ModalVisibility?.isVisibility}
      setVisibility={(value) => ModalVisibility?.setVisibility(value)}
      addComponent={(value) => dispatch(addСomponent(value))}
    />
  );
};
export default ModalComponentContainer;
