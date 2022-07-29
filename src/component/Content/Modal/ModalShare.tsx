import React, { FC } from "react";
import { Alert } from "antd";
import "./Modal.css";
import type * as CSS from "csstype";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
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

  navigator.clipboard.writeText(resultURL);
  console.log(resultURL);
  resultURL = `${window.location.href}#components`;
  const onCloseAlert = () => {
    setVisibility(false);
  };

  return (
    <>
      {isVisibility && (
        <Alert
          message="Copy share link"
          onClose={onCloseAlert}
          type="success"
          showIcon
          closable
          style={AlertStyle}
        />
      )}
    </>
  );
};

export default ModalShareComponent;
const AlertStyle: CSS.Properties = {
  position: "absolute",
  right: "10px",
  bottom: "56px",
  borderRadius: "10px",
};
