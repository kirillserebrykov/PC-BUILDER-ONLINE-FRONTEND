import React, { FC } from "react";
import {Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import type * as CSS from "csstype";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { divideTotalPrice, multiplyTotalPrice, setCurrency } from "../../../redux/TotalPriceSlice";
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
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(setCurrency(currency))
    if(currency === "$")  dispatch(divideTotalPrice(36.56))
    if(currency === "€") dispatch(divideTotalPrice(37.25))  
    
  }
  return (
    <button onClick={clickHandler} style={styleBtn} className="">
      {currency}
    </button>
  );
};


const menu = (
  <Menu
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
);

const CurrencyComponent: FC = () => {
  const currency = useAppSelector(
    (state: RootState) => state.TotalPriceSlice.currency
  );

  return (
    <Dropdown overlay={menu} placement="top">
      <span>{currency === "ГРН" ? "₴" : currency}</span>
    </Dropdown>
  );
};

export default CurrencyComponent;


