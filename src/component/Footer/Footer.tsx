import React, { FC } from "react";
import type * as CSS from "csstype";
import { Button } from 'antd';
import "antd/dist/antd.css";
import "./Footer.css"

const FooterComponent: FC = () => (
  <>
  <div className="wrapper-price">
     <span>Price: 4000</span>
  </div>
  <Button shape="circle" type="primary" >+</Button>
  </>

);

export default FooterComponent;