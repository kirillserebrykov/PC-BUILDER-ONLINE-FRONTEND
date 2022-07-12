import React, { FC } from "react";
import {Col} from "antd";
import { IPropsName } from "../../../types/globalTypes";
import "antd/dist/antd.css";
import InputComponent from "./Input/Input";
import DropdownComponent from "./Dropdown/Dropdown";


const ColumComponent: FC<IPropsName> = ({ name }: IPropsName) => {
  return (
    <Col className="gutter-row" span={24} style={{ display: "flex",justifyContent:"center",alignItems:"center" }}>
       <DropdownComponent/>
      <InputComponent name={name} />
    </Col>
  );
};

export default ColumComponent;
