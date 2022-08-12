import React, { FC, useContext, useState } from "react";
import { Col } from "antd";
import { IColumPropsName } from "../../../types/globalTypes";
import type * as CSS from "csstype";
import "antd/dist/antd.css";
import InputComponent from "./Input/Input";
import DropdownComponent from "./Dropdown/Dropdown";
import ResultComponent from "./Result/Result";
import { useGetDataComponentQuery } from "../../../redux/api/getData";
import './Colum.css';
import { ModalContext } from "../../../context/ModalContext";




const ColumComponent: FC<IColumPropsName> = ({ name,  value = ""}: IColumPropsName) => {
  const [skip, setSkip] = useState<boolean>(true);
  const [url, setUrl] = useState("");
  const ShareMode = useContext(ModalContext);
  const { data, isFetching, refetch } = useGetDataComponentQuery(url, {
    skip: skip,
  });
  
  
  return (
    <Col  span={24} className="colum-wrapper">
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
