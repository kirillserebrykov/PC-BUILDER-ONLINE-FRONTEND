import React, { FC, ReactElement, useEffect } from "react";
import "antd/dist/antd.css";
import { Row } from "antd";
import "./Content.css";
import ColumComponent from "./Row/Colum";
import ModalComponentContainer from "./Modal/ModalComponentContainer";
import type { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import { loadState, saveState } from "../../localStorage/localStorage";

const Сomponents = (state: string[]) => {
  return state.map((el: string, i: { toString: () => any }) => (
    <ColumComponent key={i.toString() + el} name={el} />
  ));
};

const ContentComponent: FC = (): JSX.Element => {
  const NamesСomponents = useAppSelector(
    (state: RootState) => state.СomponentsSlice.NamesСomponents
  );

  return (
    <div className="wrapper-content">
      <Row gutter={[0, 10]} className="wrapper-content-row">
        {loadState() ? Сomponents(loadState()) : Сomponents(NamesСomponents)}
      </Row>
      <ModalComponentContainer />
    </div>
  );
};

export default ContentComponent;
