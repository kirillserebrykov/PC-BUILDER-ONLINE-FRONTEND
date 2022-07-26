import React, { FC, useContext } from "react";
import "antd/dist/antd.css";
import { useAppDispatch } from "../../../redux/hooks";
import { ModalContext } from "../../../context/ModalContext";
import { addСomponent, renameСomponent } from "../../../redux/СomponentSlice";
import ModalComponent from "./Modal";
import { ComponentStateActions, saveState } from "../../../localStorage/localStorage";

const ModalComponentContainer: FC = () => {
  const ModalVisibility = useContext(ModalContext);
  const dispatch = useAppDispatch();


  if (ModalVisibility?.typeModal === "add") {
    return (
      <ModalComponent
        isVisibility={ModalVisibility?.isVisibility}
        setVisibility={(value) => ModalVisibility?.setVisibility(value)}
        ComponentHandler={(value) => {
          dispatch(addСomponent(value))
        }}
        modalTitle="Add new component"
      />
    );
  } else if (ModalVisibility?.typeModal === "rename") {
    return (
      <ModalComponent
        isVisibility={ModalVisibility?.isVisibility}
        setVisibility={(value) => ModalVisibility?.setVisibility(value)}
        ComponentHandler={(value) =>{
          dispatch(
            renameСomponent({
              component: ModalVisibility?.renameComponent,
              renameValue: value,
            })
          )
          
        }
        }
        modalTitle="Rename new component"
      />
    );
  } else return <div className=""></div>;


  
};
export default ModalComponentContainer;
