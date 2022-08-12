import React, { FC, useState } from "react";
import type * as CSS from "csstype";
import { Button, Drawer } from "antd";
import "antd/dist/antd.css";
import burger from "../../../assets/burger.svg";

interface IButtonsForPC {
  shareMode: boolean | undefined;
  handleOpenAdd: () => void;
  handleOpenShare: () => void;
  Share: string;
  handleEditShareData: () => void;
}

export const ButtonsForPC: FC<IButtonsForPC> = ({
  shareMode,
  handleOpenAdd,
  handleOpenShare,
  Share,
  handleEditShareData,
}: IButtonsForPC) => {
  return (
    <>
      {!shareMode ? (
        <>
          <Button
            onClick={handleOpenAdd}
            ghost
            type="primary"
            style={buttonStyleForPC}
          >
            <span>+</span>
          </Button>
          <Button
            onClick={handleOpenShare}
            ghost
            type="primary"
            style={buttonStyleForPC}
          >
            <img width={20} src={Share} alt="Share" />
          </Button>
        </>
      ) : (
        <Button
          onClick={handleEditShareData}
          ghost
          type="primary"
          style={buttonStyleForPC}
        >
          <span>Edit share data</span>
        </Button>
      )}
    </>
  );
};

export const ButtonsForMobile: FC<IButtonsForPC> = ({
  shareMode,
  handleOpenAdd,
  handleOpenShare,
  Share,
  handleEditShareData,
}: IButtonsForPC) => {
  const [isMenu, setMenu] = useState(false);
  return (
    <>
      <Button
        onClick={() => setMenu(true)}
        ghost
        type="primary"
        style={buttonMenuStyleForMobile}
      >
        <img width={20} src={burger} alt="" />
      </Button>
      <Drawer
        title="Menu"
        placement="left"
        visible={isMenu}
        onClose={() => setMenu(false)}
      >
        {!shareMode ? (
          <>
            <Button
              onClick={handleOpenAdd}
              ghost
              type="primary"
              style={buttonStyleForMobile}
            >
              <span>+</span>
            </Button>
            <Button
              onClick={handleOpenShare}
              ghost
              type="primary"
              style={buttonStyleForMobile}
            >
              <img width={20} src={Share} alt="Share" />
            </Button>
          </>
        ) : (
          <Button
            onClick={handleEditShareData}
            ghost
            type="primary"
            style={buttonStyleForMobile}
          >
            <span>Edit share data</span>
          </Button>
        )}
      </Drawer>
    </>
  );
};

const buttonMenuStyleForMobile: CSS.Properties = {
  position: "absolute",
  left: "10px",
  minWidth: "40px",
  borderRadius: "20px",
  borderColor: "rgb(54, 79, 107)",
  color: "rgb(54, 79, 107)",
  fontFamily: "Source Sans Pro, sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const buttonStyleForPC: CSS.Properties = {
  minWidth: "60px",
  borderRadius: "20px",
  borderColor: "rgb(54, 79, 107)",
  color: "rgb(54, 79, 107)",
  fontFamily: "Source Sans Pro, sans-serif",
  marginLeft: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const buttonStyleForMobile: CSS.Properties = {
  minWidth: "100%",
  borderColor: "rgb(54, 79, 107)",
  color: "rgb(54, 79, 107)",
  fontFamily: "Source Sans Pro, sans-serif",
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
