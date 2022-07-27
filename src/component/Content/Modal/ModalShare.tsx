import React, { FC } from "react";
import { Button, Divider, Modal, notification, Space } from "antd";
import "./Modal.css";
import type * as CSS from "csstype";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
interface IModalShareComponent {
  isVisibility?: boolean;
  setVisibility: (value: boolean) => void;
}


const ModalShareComponent: FC<IModalShareComponent> = ({isVisibility,setVisibility}:IModalShareComponent): JSX.Element => {
  const СomponentsReduxState = useAppSelector(
    (state: RootState) => state.СomponentsSlice.Сomponents
  );
  const resultURL:string = "http://localhost:3000/PC-BUILDER-ONLINE-FRONTEND#components"
  СomponentsReduxState.map((el: { name: string; value:string }) => {
    console.log(el.name)
    resultURL.concat(`#${el.name}=${el.value}`)
  })
 
  return (
    <Modal
      title="Basic Modal"
      visible={isVisibility}
      onCancel={() => setVisibility(false)}
      footer={false}
      
    >
      <span className="shareURL">{resultURL}</span>
    </Modal>
  );
};

export default ModalShareComponent;
