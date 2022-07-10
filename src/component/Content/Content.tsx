import React, { FC, ReactElement } from "react";
import "antd/dist/antd.css";
import {Row} from "antd";
import "./Content.css";
import ColumComponent from "./Row/Row";
import type { RootState } from '../../redux/store'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {addItem, deleteItem} from "../../redux/itemAccessoriesSlice";


const ContentComponent: FC = (): JSX.Element  => {
  const NamesAccessories = useAppSelector((state: RootState) => state.NamesAccessories)
  const dispatch = useAppDispatch()
  const Accessories =  NamesAccessories.map((el,i) => <ColumComponent key={i} name={el}/> )

  return (
    <div className="wrapper-content">
      <Row gutter={[0, 10]} className="wrapper-content-row">
        {Accessories}
      </Row>
      <button onClick={() => dispatch(addItem("223"))}>add</button>
      <button onClick={() => dispatch(deleteItem())}>delete</button>
    </div>
  );
};

export default ContentComponent;
