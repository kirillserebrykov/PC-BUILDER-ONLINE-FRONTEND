import React, { FC } from "react";
import "antd/dist/antd.css";
import { Typography, Card, Space, Divider } from "antd";

const ResultComponent: FC = () => {

  return (
    <>
      <img
        src="https://hotline.ua/img/tx/265/265996183_s265.jpg"
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
          GeForce RTX 3060
        </Typography.Title>
      </Space>
      <Card className="price" style={{ position: "absolute", right:0, marginTop: "50px" }}>
      <Typography.Title level={5} style={{ margin: 0 }}>
          Price:200$
        </Typography.Title>
      </Card>
    </>
  );
};

export default ResultComponent;
