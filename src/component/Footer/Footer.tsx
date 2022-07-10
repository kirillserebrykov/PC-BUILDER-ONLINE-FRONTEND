import React, { FC } from "react";
import { Statistic } from 'antd';
import type * as CSS from "csstype";
import "antd/dist/antd.css";
import "./Footer.css"

const FooterComponent: FC = () => (
  <div className="wrapper-price">
     <span>Price: 4000</span>
  </div>
);

export default FooterComponent;