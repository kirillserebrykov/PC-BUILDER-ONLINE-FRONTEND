import React, { FC } from "react";
import { Modal } from "antd";
import "./Modal.css";
import type * as CSS from "csstype";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
import { useHref, useLocation } from "react-router-dom";
interface IModalShareComponent {
  isVisibility?: boolean;
  setVisibility: (value: boolean) => void;
}
let resultURL: string = "";

const ModalShareComponent: FC<IModalShareComponent> = ({
  isVisibility,
  setVisibility,
}: IModalShareComponent): JSX.Element => {
  const СomponentsReduxState = useAppSelector(
    (state: RootState) => state.СomponentsSlice.Сomponents
  );
  
  resultURL = `${window.location.href}#components`;
  isVisibility &&
    СomponentsReduxState.map((el: { name: string; value: string }) => {
      resultURL = `${resultURL}#${el.name}=${el.value}`;
    });

  return (
    <Modal
      title="Share you build"
      visible={isVisibility}
      onCancel={() => {
        resultURL = `${window.location.href}#components`;
        setVisibility(false);
      }}
      footer={false}
    >
      <span className="shareURL">{resultURL}</span>
    </Modal>
  );
};

export default ModalShareComponent;
