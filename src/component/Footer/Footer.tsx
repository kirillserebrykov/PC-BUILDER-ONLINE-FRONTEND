import React, { FC, useContext, useState } from "react";
import type * as CSS from "csstype";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./Footer.css";
import { ModalContext } from ".././../context/ModalContext";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import CurrencyComponent from "./Currency/Currency";
import Share from '../../assets/share.svg';
import { CurrencyContext } from "../../context/CurrencyContext";


const FooterComponent: FC = () => {
  const ModalVisibility = useContext(ModalContext);
  const TotalPrice = useAppSelector(
    (state: RootState) => state.TotalPriceSlice
  )
  
  const [currencyStatus,  setCurrencyStatus] = useState("€")


  const handleOpenAdd = () =>{ 
    ModalVisibility?.setVisibility(true);
    ModalVisibility?.setTypeModal("add")
  }
  
const handleOpenShare = () =>{ 
    ModalVisibility?.setVisibility(true);
    ModalVisibility?.setTypeModal("share")
  }
  const currencyCheck = () =>{
    switch (currencyStatus as string) {
      case "UAH":
      case "ГРН": 
      case "$": 
        return TotalPrice.TotalPriceUAH.toFixed(2)
      case "USD":
      case "₴":  
        return TotalPrice.TotalPriceUSD.toFixed(2)
      case "EUR":
      case "€":  
        return TotalPrice.TotalPriceEURO.toFixed(2)
    }
  }

  return (
    <>
      <div className="wrapper price">
        <span>{currencyCheck()}</span>
      </div>
      <div className="wrapper currency">
        <CurrencyContext.Provider value={{currencyStatus,  setCurrencyStatus}}>
        <CurrencyComponent />
        </CurrencyContext.Provider>
       
      </div>
      
      <Button onClick={handleOpenAdd} ghost type="primary" style={buttonStyle}> 
        <span>+</span>
      </Button>
      <Button onClick={handleOpenShare} ghost type="primary" style={buttonStyle}> 
        <img width={20} src={Share} alt="Share" />
      </Button>
    </>
  );
};

export default FooterComponent;

const buttonStyle: CSS.Properties = {
  width: "60px",
  borderRadius: "20px",
  borderColor: "rgb(54, 79, 107)",
  color: "rgb(54, 79, 107)",
  fontFamily: "Source Sans Pro, sans-serif",
  marginLeft: "10px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"

  
  
};