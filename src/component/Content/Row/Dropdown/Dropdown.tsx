import React, { FC, useContext } from "react";
import { Dropdown, Menu } from "antd";
import "./Dropdown.css";
import { useAppDispatch } from "../../../../redux/hooks";
import { deleteСomponent } from "../../../../redux/СomponentSlice";
import { IPropsName } from "../../../../types/globalTypes";
import { ModalContext } from "../../../../context/ModalContext";

const MenuComponent: FC<IPropsName> = ({ name }: IPropsName) => {
  const ModalVisibility = useContext(ModalContext);
  const handleRename = () => {
    ModalVisibility?.setRenameComponent(name);
    ModalVisibility?.setVisibility(true);
    ModalVisibility?.setTypeModal("rename");
  };
  const dispatch = useAppDispatch();

  return (
    <Menu
      className="menu-dropdown"
      items={[
        {
          key: "1",
          label: (
            <button className="resetStyle" onClick={handleRename}>
              Rename
            </button>
          ),
        },
        {
          key: "2",
          label: (
            <button
              className="resetStyle"
              onClick={() => dispatch(deleteСomponent(name))}
            >
              Delete
            </button>
          ),
        },
      ]}
    />
  );
};

const DropdownComponent: FC<IPropsName> = ({ name }: IPropsName) => {
  return (
    <Dropdown overlay={<MenuComponent name={name} />} placement="bottomLeft">
      <span className="dropdown-span">...</span>
    </Dropdown>
  );
};

export default DropdownComponent;
