import React, { FC, ReactElement } from "react";
import "antd/dist/antd.css";
import {Row} from "antd";
import "./Content.css";
import ColumComponent from "./Row/Row";
import ModalComponent from "./Modal/Modal";
import type { RootState } from '../../redux/store'
import {useAppSelector } from "../../redux/hooks";



const ContentComponent: FC = (): JSX.Element  => {
  const NamesAccessories = useAppSelector((state: RootState) => state.NamesСomponents)
  const Accessories =  NamesAccessories.map((el,i) => <ColumComponent key={i} name={el}/> )

  return (
    <div className="wrapper-content">
      <Row gutter={[0, 10]} className="wrapper-content-row">
        {Accessories}
      </Row>
      <ModalComponent/>
    </div>
  );
};

export default ContentComponent;
