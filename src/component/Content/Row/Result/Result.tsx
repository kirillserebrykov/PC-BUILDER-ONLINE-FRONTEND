import React, { FC } from "react";
import "antd/dist/antd.css";
import { Typography, Card, Space, Divider } from "antd";
import { IResultComponent } from "../../../../types/globalTypes";

const ResultComponent: FC<IResultComponent> = ({data}:IResultComponent) => {
  
  return (
    <>
      <img
        src={data && data[1]}
        alt=""
        width={50}
        style={{ position: "absolute", left: "-70px", marginTop: "70px" }}
      />
      <Space
        direction="vertical"
        size="middle"
        style={{ display: "flex", width: "100%", rowGap: 0 }}
      >
        <Divider orientation="left">{"GPU"}</Divider>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {data && data[2]}
        </Typography.Title>
      </Space>
      <Card className="price" style={{ position: "absolute", right:"-70px", marginTop: "50px", border:"none" }}>
      <Typography.Title level={5} style={{ margin: 0 }}>
          Price:{data && data[0]}
        </Typography.Title>
      </Card>
    </>
  );
};

export default ResultComponent;
