import React, { FC, useState } from "react";
import "antd/dist/antd.css";
import { Modal, Input } from "antd";
import "./Modal.css";

interface IModalComponent {
  isVisibility?: boolean;
  setVisibility: (value: boolean) => void;
  addComponent: (value: string) => void;
}




const ModalComponent: FC<IModalComponent> = ({
  isVisibility,
  setVisibility,
  addComponent,
}: IModalComponent): JSX.Element => {
  const [value, setValue] = useState("");
  const handleCancel = () => setVisibility(false);
  const handleOk = () => {
    if (value) {
      addComponent(value);
      setValue("");
      setVisibility(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Modal
      title="Add new component"
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
