import React, { FC, useState } from "react";
import { Input, Button, Divider } from "antd";
import { IInputComponent } from "../../../../types/globalTypes";
import "antd/dist/antd.css";
import "./Input.css";

const InputComponent: FC<IInputComponent> = ({
  name,
  setSkip,
  setUrl,
  isFetching,
  refetch
}: IInputComponent) => {

  const [value, setValue] = useState("");
  const handlerChenge = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handlerSubmit =  () => {
      setSkip(false);
      setUrl(value);
      refetch()
  };

  return (
    <div className="wrapper-input">
      <Divider orientation="left">{name}</Divider>
      <Input.Group compact style={{ display: "flex" }}>
        <Input
          onChange={(e) => handlerChenge(e)}
          value={value}
          className="input-row"
          placeholder="URL"
        />
        <Button
          loading={isFetching}
          type="primary"
          onClick={handlerSubmit}
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
