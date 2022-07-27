import React, { FC } from "react";
import "antd/dist/antd.css";
import { Row } from "antd";
import "./Content.css";
import ColumComponent from "./Row/Colum";
import ModalComponentContainer from "./Modal/ModalComponentContainer";
import type { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import { useLocation } from "react-router-dom";
import { loadState } from "../../localStorage/localStorage";

const Сomponents = (state: any) => {
  return state.map((el: any, i: { toString: () => any }) => (
    <ColumComponent
      key={i.toString() + el.name}
      name={el.name}
      value={el.value}
    />
  ));
};




const ContentComponent: FC = (): JSX.Element => {
  const { hash } = useLocation();

  const ComponentsUrl = hash
    .split("#")
    .filter((el) => el !== "")
    .map((el) => {
      return {
        name: el.split("=")[0],
        value: el.split("=")[1],
      };
    });

  const СomponentsReduxState = useAppSelector(
    (state: RootState) => state.СomponentsSlice.Сomponents
  );

  const ComponentsChecker = () => {
    if (hash) {
      return Сomponents(ComponentsUrl);
    } else if (loadState()) {
      return Сomponents(loadState());
    } else {
      return Сomponents(СomponentsReduxState);
    }
  };


  return (
    <div className="wrapper-content">
      <Row gutter={[0, 10]} className="wrapper-content-row">
        {ComponentsChecker()}
      </Row>
      <ModalComponentContainer />
    </div>
  );
};

export default ContentComponent;

