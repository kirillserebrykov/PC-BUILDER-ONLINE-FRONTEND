import React, { FC, useState } from "react";
import { Col } from "antd";
import { IPropsName } from "../../../types/globalTypes";
import type * as CSS from "csstype";
import "antd/dist/antd.css";
import InputComponent from "./Input/Input";
import DropdownComponent from "./Dropdown/Dropdown";
import ResultComponent from "./Result/Result";
import { useGetDataComponentQuery } from "../../../redux/api/getData";

const ColStyle: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const fakeData = {
  "price": 1,
  "img": "https://img.moyo.ua/img/products/5124/21_600.jpg?1658563555",
  "title": "Відеокарта MSI GeForce RTX3070 Ti 8GB GDDR6 SUPRIM X (RTX_3070TI_SUPRIM_X_8G)",
  "currency": "ГРН"
  }
const ColumComponent: FC<IPropsName> = ({ name }: IPropsName) => {
  const [skip, setSkip] = useState<boolean>(true);
  const [url, setUrl] = useState("");
  const { data, isFetching, refetch } = useGetDataComponentQuery(url, {
    skip: skip,
  });

  return (
    <Col className="gutter-row" span={24} style={ColStyle}>
      {!data ? (
        <>
          <DropdownComponent name={name} />
          <InputComponent
            name={name}
            setSkip={setSkip}
            setUrl={setUrl}
            isFetching={isFetching}
            refetch={refetch}
          />
        </>
      ) : (
        <ResultComponent data={data} name={name} />
      )}
    </Col>
  );
};

export default ColumComponent;
