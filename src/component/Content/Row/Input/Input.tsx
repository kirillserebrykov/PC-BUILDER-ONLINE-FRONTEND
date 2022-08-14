import React, { FC, useState } from "react";
import { Input, Button, Divider } from "antd";
import { IInputComponent } from "../../../../types/globalTypes";
import "antd/dist/antd.css";
import "./Input.css";
import { valueInputChange } from "../../../../redux/СomponentSlice";
import { useAppDispatch } from './../../../../redux/hooks';

const InputComponent: FC<IInputComponent> = ({
  name,
  defaultValue,
  setSkip,
  setUrl,
  isFetching,
  refetch
}: IInputComponent) => {

  const [value, setValue] = useState(defaultValue);
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const dispatch = useAppDispatch()
  const handlerSubmit =  () => {
    if(value){
      setSkip(false);
      dispatch(valueInputChange({ component: name, value: value }))
      setUrl(value);
      refetch()
    }
  };

  return (
    <div className="wrapper-input">
      <Divider orientation="left">{name}</Divider>
      <Input.Group compact className="input-group">
        <Input
          onChange={(e) => handlerChange(e)}
          value={value}
          className="input-row"
          placeholder="URL"
        />
        <Button
          loading={isFetching}
          type="primary"
          onClick={handlerSubmit}
          
          className="button-input-submit"
        >
          Submit
        </Button>
      </Input.Group>
    </div>
  );
};

export default InputComponent;
