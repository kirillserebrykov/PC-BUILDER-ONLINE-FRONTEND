import React, { FC, useState } from "react";
import { Col } from "antd";
import { IPropsName } from "../../../types/globalTypes";
import "antd/dist/antd.css";
import InputComponent from "./Input/Input";
import DropdownComponent from "./Dropdown/Dropdown";
import ResultComponent from "./Result/Result";
import { useGetDataComponentQuery } from "../../../redux/api/getData";





const ColumComponent: FC<IPropsName> = ({ name }: IPropsName) => {
  const [skip, setSkip] = useState<boolean>(true)
  const [url, setUrl] = useState("")
  const { data , isFetching, refetch } = useGetDataComponentQuery(url, {skip: skip})
  return (
    <Col
      className="gutter-row"
      span={24}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      { !data ?
        <>
          <DropdownComponent name={name} />
          <InputComponent name={name} setSkip={setSkip} skip={skip} setUrl={setUrl} isFetching={isFetching} refetch={refetch} />
        </>
        : <ResultComponent data={data && data} />
      }
    </Col>
  );
};

export default ColumComponent;
