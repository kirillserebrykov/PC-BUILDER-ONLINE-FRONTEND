import { Dropdown, Menu } from "antd";
import React, { FC } from "react";
import "./Dropdown.css";
import type * as CSS from "csstype";

const resetCss: CSS.Properties = { background: "none", border: "none" };
const menuDropdown: CSS.Properties = {
  position: "relative",
  left: "-60px",
};

const menu = (
  <Menu
    style={menuDropdown}
    items={[
      {
        key: "1",
        label: <button style={resetCss}>Rename</button>,
      },
      {
        key: "2",
        label: <button style={resetCss}>Delete</button>,
      },
    ]}
  />
);

const DropdownComponent: FC = () => {
  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <span style={spanDropdown}>...</span>
    </Dropdown>
  );
};

export default DropdownComponent;

const spanDropdown: CSS.Properties = {
  marginTop: "50px",
  paddingRight: "20px",
  marginLeft: "-30px",
  fontSize: "15px",
  cursor: "pointer",
};
