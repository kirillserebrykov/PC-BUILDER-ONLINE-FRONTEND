import React, { FC, useEffect } from "react";
import "antd/dist/antd.css";
import { Typography, Card, Space, Divider } from "antd";
import type * as CSS from "csstype";
import {
  IPrice,
  IResultComponent,
  ITitleComponent,
  I_ImgComponent,
} from "../../../../types/globalTypes";
import { useAppDispatch } from "../../../../redux/hooks";
import { increment, setCurrency } from "../../../../redux/TotalPriceSlice";



const TitleComponent: FC<ITitleComponent> = ({
  title,
  name,
}: ITitleComponent) => {
  return (
    <>
      <Divider orientation="left">{name}</Divider>
      <Typography.Title level={5} style={{ margin: 0 }}>
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
        style={{ position: "absolute", left: "-70px", marginTop: "70px", borderRadius:"10px" }}
      />
    </>
  );
};

const PriceComponent: FC<IPrice> = ({ price }: IPrice) => {
  const CardStyle: CSS.Properties = {
    position: "absolute",
    right: "-70px",
    marginTop: "50px",
    border: "none",
  };

  return (
    <Card className="price" style={CardStyle}>
      <Typography.Title level={5} style={{ margin: 0 }}>
        Price: {price}
      </Typography.Title>
    </Card>
  );
};

const ResultComponent: FC<IResultComponent> = ({ data, name }: IResultComponent) => {
 const price = data && +data[0].replace(/[A-Z,a-z, а-я,\W]/g,"")
 const currency = data[0].replace(/[0-9]/g,"")
 const dispatch = useAppDispatch();
 useEffect(() => {
  dispatch(increment(price))
  dispatch(setCurrency(currency))
}, [data]) 
 
  return (
    <>
      <ImgComponent url={data[1]} />
      <Space
        direction="vertical"
        size="middle"
        style={{ display: "flex", width: "100%", rowGap: 0 }}
      >
        <TitleComponent title={data[2]} name={name} />
      </Space>
      <PriceComponent price={data[0]} />
    </>
  );
};

export default ResultComponent;

