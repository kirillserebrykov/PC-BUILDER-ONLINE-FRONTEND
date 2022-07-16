import React, { FC, ReactElement } from "react";
import "antd/dist/antd.css";
import { Row } from "antd";
import "./Content.css";
import ColumComponent from "./Row/Colum";
import ModalComponentContainer from "./Modal/ModalComponentContainer";
import type { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";

const ContentComponent: FC = (): JSX.Element => {
  const NamesСomponents = useAppSelector(
    (state: RootState) => state.СomponentsSlice.NamesСomponents
  );
  const Сomponents = NamesСomponents.map((el, i) => (
    <ColumComponent key={i.toString() + el} name={el} />
  ));

  return (
    <div className="wrapper-content">
      <Row gutter={[0, 10]} className="wrapper-content-row">
        {Сomponents}
      </Row>
      <ModalComponentContainer />
    </div>
  );
};

export default ContentComponent;
