import React, { FC, useContext } from "react";
import type * as CSS from "csstype";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./Footer.css";
import { ModalContext } from ".././../context/ModalContext";

const buttonStyle: CSS.Properties = {
  width: "60px",
  borderRadius: "20px",
  borderColor: "rgb(54, 79, 107)",
  color: "rgb(54, 79, 107)",
};
const FooterComponent: FC = () => {
  const ModalVisibility = useContext(ModalContext);
  const handleOpen = () => ModalVisibility?.setVisibility(true);
  return (
    <>
      <div className="wrapper-price">
        <span>Price: 4000</span>
      </div>
      <Button onClick={handleOpen} ghost type="primary" style={buttonStyle}>
        <span>+</span>
      </Button>
    </>
  );
};

export default FooterComponent;
