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
const fakeData = [
   "5000 грн",
   "https://ireland.apollo.olxcdn.com/v1/files/yxfpa175urcc1-UA/image;s=1000x700",
   "ПК AMD 8-core Ryzen 7 5800X, RTX 3060ti"

] 
const ColumComponent: FC<IPropsName> = ({ name }: IPropsName) => {
  const [skip, setSkip] = useState<boolean>(true);
  const [url, setUrl] = useState("");
  const { data, isFetching, refetch } = useGetDataComponentQuery(url, {
    skip: skip,
  });

  return (
    <Col className="gutter-row" span={24} style={ColStyle}>
      {!fakeData ? (
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
        <ResultComponent data={fakeData} name={name} />
      )}
    </Col>
  );
};

export default ColumComponent;
