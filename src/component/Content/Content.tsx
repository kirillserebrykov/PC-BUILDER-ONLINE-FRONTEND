import React, {FC, useContext, useEffect} from "react"
import "antd/dist/antd.css"
import {Row} from "antd"
import "./Content.css"
import ColumComponent from "./Row/Colum"
import ModalComponentContainer from "./Modal/ModalComponentContainer"
import type {RootState} from "../../redux/store"
import {useAppDispatch, useAppSelector} from "../../redux/hooks"
import {useLocation} from "react-router-dom"
import {loadState} from "../../localStorage/localStorage"
import {setСomponent} from "../../redux/СomponentSlice"
import {ModalContext} from "../../context/ModalContext"
import {INamesComponents} from "../../redux/typeAndInterfaceСomponentSlice/reduxInterface"

const Components = (state: Array<INamesComponents>) => {
	return state.map((el: INamesComponents, i: {toString: () => any}) => (
		<ColumComponent
			key={i.toString() + el.name}
			name={el.name}
			value={el.value}
		/>
	))
}

export const ComponentsUrl = (hash: string) => {
	return hash
		.split("#")
		.filter((el) => el !== "")
		.map((el) => {
			return {
				name: decodeURI(el.split("=")[0]),
				value: el.split("=")[1],
			}
		})
}

const ContentComponent: FC = (): JSX.Element => {
	const {hash} = useLocation()
	const dispatch = useAppDispatch()
	const ShareMode = useContext(ModalContext)
	const ComponentsReduxState = useAppSelector(
		(state: RootState) => state.ComponentsSlice.Components
	)

	useEffect(() => {
		loadState() && dispatch(setСomponent())
	}, [dispatch])

	const ComponentsChecker = () => {
		if (hash) {
			ShareMode?.setShareMode(true)
			return Components(ComponentsUrl(hash))
		} else if (loadState()) return Components(loadState())
		else return Components(ComponentsReduxState)
	}

	return (
		<div className="wrapper-content">
			<Row gutter={[0, 10]} className="wrapper-content-row">
				{ComponentsChecker()}
			</Row>
			<ModalComponentContainer />
		</div>
	)
}

export default ContentComponent
