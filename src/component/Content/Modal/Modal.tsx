import React, { FC, useContext, useState} from "react";
import "antd/dist/antd.css";
import {Modal, Input } from "antd";
import {useAppDispatch} from "../../../redux/hooks";
import { ModalContext } from ".././../../context/ModalContext";
import { addСomponent } from '.././../../redux/itemAccessoriesSlice'

const ModalComponent: FC = (): JSX.Element => {
  const ModalVisibility = useContext(ModalContext);
  const [value, setValue] = useState("")
  const dispatch = useAppDispatch()
  const handleCancel = () => ModalVisibility?.setVisibility(false)
  const handleOk = () => {
    if(value){
      dispatch(addСomponent(value))
      setValue("")
      ModalVisibility?.setVisibility(false)
      
    }
    
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  return (
    <Modal
      title="Add new accessories"
      visible={ModalVisibility && ModalVisibility.isVisibility}
       onCancel={handleCancel} 
       onOk={handleOk}
    >
      <Input.Group compact style={{ display: "flex" }}>
        <Input onChange={handleChange} value={value} defaultValue="" className="input-row" placeholder="Name" />
      </Input.Group>
    </Modal>
  );
};

export default ModalComponent;

