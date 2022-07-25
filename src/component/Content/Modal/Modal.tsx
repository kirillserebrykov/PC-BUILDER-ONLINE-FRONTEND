import React, { FC, useState } from "react";
import "antd/dist/antd.css";
import { Modal, Input } from "antd";
import "./Modal.css";
import { ComponentStateActions } from "../../../localStorage/localStorage";

interface IModalComponent {
  isVisibility?: boolean;
  setVisibility: (value: boolean) => void;
  ComponentHandler: (value: string) => void;
  modalTitle:string

}




const ModalComponent: FC<IModalComponent> = ({
  isVisibility,
  setVisibility,
  ComponentHandler,
  modalTitle
}: IModalComponent): JSX.Element => {
  const [value, setValue] = useState("");
  const handleCancel = () => setVisibility(false);

  const handleOk = () => {
    if (value) {
      ComponentHandler(value);
      ComponentStateActions(value, "rename")
      setValue("");
      setVisibility(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);


  return (
    <Modal
      title={modalTitle}
      visible={isVisibility && isVisibility}
      onCancel={handleCancel}
      onOk={() => handleOk()}
    >
      <Input.Group compact style={{ display: "flex" }}>
        <Input
          onChange={handleChange}
          value={value}
          defaultValue=""
          className="input-row"
          placeholder="Name"
        />
      </Input.Group>
    </Modal>
  );
};

export default ModalComponent;
