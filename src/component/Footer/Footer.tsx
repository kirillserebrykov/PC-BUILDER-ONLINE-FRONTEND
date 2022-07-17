import React, { FC, useContext } from "react";
import type * as CSS from "csstype";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./Footer.css";
import { ModalContext } from ".././../context/ModalContext";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const buttonStyle: CSS.Properties = {
  width: "60px",
  borderRadius: "20px",
  borderColor: "rgb(54, 79, 107)",
  color: "rgb(54, 79, 107)",
};
const FooterComponent: FC = () => {
  const ModalVisibility = useContext(ModalContext);
  const TotalPrice = useAppSelector(
    (state: RootState) => state.TotalPriceSlice.TotalPrice
  );
  const currency = useAppSelector(
    (state: RootState) => state.TotalPriceSlice.currency
  );
  const handleOpen = () =>{ 
    ModalVisibility?.setVisibility(true);
    ModalVisibility?.setTypeModal("add")
  }

  return (
    <>
      <div className="wrapper-price">
        <span>Price: {TotalPrice} {currency}</span>
      </div>
      <Button onClick={handleOpen} ghost type="primary" style={buttonStyle}>
        <span>+</span>
      </Button>
    </>
  );
};

export default FooterComponent;
