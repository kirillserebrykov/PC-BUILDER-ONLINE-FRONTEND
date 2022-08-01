import React, { FC } from "react";
import { Alert } from "antd";
import type * as CSS from "csstype";
import { RootState } from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
import { INamesComponents } from "../../../redux/typeAndInterfaceСomponentSlice/reduxInterface";

interface IAlertShareComponent {
  isVisibility?: boolean;
  setVisibility: (value: boolean) => void;
}

const creatorUrl = (state: Array<INamesComponents>) => {
  return state.map((el: { name: string; value: string }) => {
    resultURL = `${resultURL}#${el.name}=${el.value}`;
    return []
  });
};

let resultURL: string = "";

const AlertShareComponent: FC<IAlertShareComponent> = ({
  isVisibility,
  setVisibility,
}: IAlertShareComponent): JSX.Element => {
  const ComponentsReduxState = useAppSelector(
    (state: RootState) => state.ComponentsSlice.Components
  );

  resultURL = `${window.location.href}#components`;
  isVisibility && creatorUrl(ComponentsReduxState);
  navigator.clipboard.writeText(resultURL);
  resultURL = `${window.location.href}#components`;
  const onCloseAlert = () => setVisibility(false);

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

export default AlertShareComponent;
const AlertStyle: CSS.Properties = {
  position: "fixed",
  right: "10px",
  bottom: "56px",
  borderRadius: "10px",
};
