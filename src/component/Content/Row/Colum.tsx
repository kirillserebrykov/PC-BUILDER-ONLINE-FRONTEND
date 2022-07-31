import React, { FC, useContext, useEffect, useState } from "react";
import { Col } from "antd";
import { IColumPropsName, IPropsName } from "../../../types/globalTypes";
import type * as CSS from "csstype";
import "antd/dist/antd.css";
import InputComponent from "./Input/Input";
import DropdownComponent from "./Dropdown/Dropdown";
import ResultComponent from "./Result/Result";
import { useGetDataComponentQuery } from "../../../redux/api/getData";
import { ModalContext } from "../../../context/ModalContext";


const ColStyle: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ColumComponent: FC<IColumPropsName> = ({ name,  value = ""}: IColumPropsName) => {
  const [skip, setSkip] = useState<boolean>(true);
  const [url, setUrl] = useState("");
  const ShareMode = useContext(ModalContext);
  const { data, isFetching, refetch } = useGetDataComponentQuery(url, {
    skip: skip,
  });
  
  
  return (
    <Col className="gutter-row" span={24} style={ColStyle}>
      {!data ? (
        <>
          {!ShareMode?.shareMode &&  <DropdownComponent name={name}  />}
          <InputComponent
            name={name}
            setSkip={setSkip}
            setUrl={setUrl}
            isFetching={isFetching}
            refetch={refetch}
            defaultValue={value}
          />
        </>
      ) : (
        <>
      {!ShareMode?.shareMode &&  <DropdownComponent name={name}  />}
        <ResultComponent data={data} name={name} url={url} />
        </>
      )}
    </Col>
  );
};

export default ColumComponent;
