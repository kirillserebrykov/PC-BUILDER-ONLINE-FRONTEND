import React, { FC, useEffect } from "react";
import "antd/dist/antd.css";
import { Typography, Card, Space, Divider } from "antd";
import type * as CSS from "csstype";
import {
  IResultComponent,
  ITitleComponent,
  I_ImgComponent,
} from "../../../../types/globalTypes";
import { useAppDispatch } from "../../../../redux/hooks";
import { increment, setCurrency } from "../../../../redux/TotalPriceSlice";

const TitleComponent: FC<ITitleComponent> = ({
  title,
  name,
  price,
}: ITitleComponent) => {
  
  return (
    <>
      <Divider orientation="left">
        <span>{name}</span> 
        <span style={priceStyle}>{price}</span>
      </Divider>
      <Typography.Title level={5} style={{ margin: 0, paddingLeft:"60px"}}>
        {title}
      </Typography.Title>
    </>
  );
};

const ImgComponent: FC<I_ImgComponent> = ({ url }: I_ImgComponent) => {
  return (
    <>
      <img
        src={url}
        alt=""
        width={50}
        style={{
          position: "absolute",
          left: "0px",
          marginTop: "70px",
          borderRadius: "10px",
        }}
      />
    </>
  );
};

const ResultComponent: FC<IResultComponent> = ({
  data,
  name,
}: IResultComponent) => {
  const { price, img, title, currency } = data;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrency(currency));
    dispatch(increment(price));
  }, [currency, dispatch, price]);

  return (
    <>
      <ImgComponent url={img} />
      <Space
        direction="vertical"
        size="middle"
        style={{ display: "flex", width: "100%", rowGap: 0,  }}
      >
        <TitleComponent title={title} name={name} price={price + currency} />
      </Space>
    </>
  );
};

export default ResultComponent;
const priceStyle: CSS.Properties = {
    minWidth: "100px",
    position: "absolute",
    right: "30px",
    background: "#fff",
    zIndex: "10",
  };