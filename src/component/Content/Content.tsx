import React, { FC } from "react";
import "antd/dist/antd.css";
import {Row} from "antd";
import "./Content.css";
import ColumComponent from "./Row/Row";



const ContentComponent: FC = (): JSX.Element  => {
  
  return (
    <div className="wrapper-content">
      <Row gutter={[0, 10]} className="wrapper-content-row">
        <ColumComponent name="Videocard"/>
      </Row>
    </div>
  );
};

export default ContentComponent;
