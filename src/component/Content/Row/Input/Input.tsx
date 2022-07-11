import React, { FC } from "react";
import { Input, Button, Divider } from "antd";
import { IPropsName } from "../../../../types/globalTypes";
import "antd/dist/antd.css";
import "./Input.css";

const InputComponent: FC<IPropsName> = ({ name }: IPropsName) => {
  return (
    <div className="wrapper-input">
      <Divider orientation="left">{name}</Divider>
      <Input.Group compact style={{ display: "flex" }}>
        <Input defaultValue="" className="input-row" placeholder="URL" />
        <Button
          type="primary"
          style={{
            background: "#364F6B",
            borderColor: "#364F6B",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          Submit
        </Button>
      </Input.Group>
    </div>
  );
};

export default InputComponent;
