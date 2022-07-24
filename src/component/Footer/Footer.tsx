import React, { FC, useContext } from "react";
import type * as CSS from "csstype";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./Footer.css";
import { ModalContext } from ".././../context/ModalContext";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import CurrencyComponent from "./Currency/Currency";

const buttonStyle: CSS.Properties = {
  width: "60px",
  borderRadius: "20px",
  borderColor: "rgb(54, 79, 107)",
  color: "rgb(54, 79, 107)",
  fontFamily: "Source Sans Pro, sans-serif"
};
const FooterComponent: FC = () => {
  const ModalVisibility = useContext(ModalContext);
  const TotalPrice = useAppSelector(
    (state: RootState) => state.TotalPriceSlice.TotalPrice
  );
  
  const handleOpen = () =>{ 
    ModalVisibility?.setVisibility(true);
    ModalVisibility?.setTypeModal("add")
  }

  return (
    <>
      <div className="wrapper price">
        <span>{TotalPrice.toFixed(2)}</span>
      </div>
      <div className="wrapper currency">
       <CurrencyComponent />
      </div>
      
      <Button onClick={handleOpen} ghost type="primary" style={buttonStyle}>
        <span>+</span>
      </Button>
    </>
  );
};

export default FooterComponent;
