import React, { FC, useContext } from "react";
import {Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import type * as CSS from "csstype";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { setCurrency } from "../../../redux/TotalPriceSlice";
import { CurrencyContext } from "../../../context/CurrencyContext";
const styleBtn: CSS.Properties = {
  width: "100%",
  border: "none",
  background: "none",
  fontSize: "20px",
  fontWeight: "700",
};
interface ISelectCurrency {
    currency: string,
    
}

const SelectCurrency = ({currency}: ISelectCurrency) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const CurrencyStatus = useContext(CurrencyContext);
  const dispatch = useAppDispatch();
  
  const clickHandler = () => {
    dispatch(setCurrency(currency))
    
     switch (currency as string) {
      case "UAH":
      case "ГРН":
      case "₴":
           CurrencyStatus && CurrencyStatus.setCurrencyStatus("UAH") 
        break;
      case "USD":
      case "$":
        CurrencyStatus && CurrencyStatus.setCurrencyStatus("USD")  
        break;
      case "EUR":
      case "€":
        CurrencyStatus && CurrencyStatus.setCurrencyStatus("EUR")
        break;
        
    }
    
    
  }
  console.log(CurrencyStatus)
  return (
    <button onClick={clickHandler} style={styleBtn} className="">
      {currency}
    </button>
  );
};


const MenuComponent = () => {
return <Menu
    items={[
      {
        key: "1",
        label: <SelectCurrency currency={"$"} />,
        
      },
      {
        key: "2",
        label: <SelectCurrency currency={"€"} />,
      },
      {
        key: "3",
        label: <SelectCurrency currency={"₴"} />,
      },
      
    ]}
  />
}


const CurrencyComponent: FC = () => {
  const currency = useAppSelector(
    (state: RootState) => state.TotalPriceSlice.currency
  );
 
  return (
    
    <Dropdown overlay={<MenuComponent/>} placement="top">
      <span>{currency === "ГРН" ? "₴" : currency}</span>
    </Dropdown>
  );
};

export default CurrencyComponent;


