import React, { FC } from "react";
import { Dropdown, Menu } from "antd";
import "./Dropdown.css";
import { useAppDispatch } from "../../../../redux/hooks";
import { deleteСomponent, renameСomponent  } from "../../../../redux/СomponentSlice";
import { IPropsName } from "../../../../types/globalTypes";


const payload = {
   1:"dsadas"
}


const MenuComponent:FC<IPropsName> = ({name}:IPropsName) =>{
  const dispatch = useAppDispatch();

  return <Menu
    className="menu-dropdown"
    items={[
      {
        key: "1",
        label: <button className="resetStyle" onClick={()=> dispatch(renameСomponent({fdfds:""}))}>Rename</button>,
      },
      {
        key: "2",
        label: <button className="resetStyle" onClick={()=> dispatch(deleteСomponent(name))}>Delete</button>, 
      },
    ]}
  />
};







const DropdownComponent:FC<IPropsName> = ({name}:IPropsName) => {
 
  return (
    <Dropdown overlay={<MenuComponent name={name}/>} placement="bottomLeft">
      <span  className="dropdown-span">...</span>
    </Dropdown>
  );
};

export default DropdownComponent;



