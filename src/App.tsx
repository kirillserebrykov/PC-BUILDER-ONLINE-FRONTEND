import React, { FC, useEffect, useState } from "react";
import { Layout } from "antd";
import ContentComponent from "./component/Content/Content";
import HeaderComponent from "./component/Header/Header";
import FooterComponent from "./component/Footer/Footer";
import { ModalContext } from "./context/ModalContext";
import type * as CSS from "csstype";
import "antd/dist/antd.css";
import "./App.css";

const { Content, Footer, Header } = Layout;

const App: FC = () => {
  const [isVisibility, setVisibility] = useState(false);
  const [shareMode, setShareMode] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [renameComponent, setRenameComponent] = useState("");

  return (
    <Layout>
      <Header style={headerStyle}>
        <HeaderComponent />
      </Header>
      <ModalContext.Provider
        value={{
          isVisibility,
          setVisibility,
          typeModal,
          setTypeModal,
          renameComponent,
          setRenameComponent,
          shareMode,
          setShareMode,
        }}
      >
        <Content style={contentStyle}>
          <ContentComponent />
        </Content>
        <Footer style={footeStyle}>
          <FooterComponent />
        </Footer>
      </ModalContext.Provider>
    </Layout>
  );
};

export default App;

const headerStyle: CSS.Properties = {
  backgroundColor: "#ffff",
  display: "flex",
  justifyContent: "center",
  width: "100%",
};
const contentStyle: CSS.Properties = { backgroundColor: "#ffff" };

const footeStyle: CSS.Properties = {
  width: "100%",
  height: "50px",
  position: "fixed",
  bottom: "0",
  backgroundColor: "#B2C8DF",
  display: "flex",
  alignItems: "center",
};
