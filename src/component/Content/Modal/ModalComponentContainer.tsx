import React, {FC, useContext} from "react"
import "antd/dist/antd.css"
import {useAppDispatch} from "../../../redux/hooks"
import {ModalContext} from "../../../context/ModalContext"
import {addСomponent, renameСomponent} from "../../../redux/СomponentSlice"
import ModalComponent from "./Modal"
import AlertShareComponent from "../Alert/AlertShare"

const ModalComponentContainer: FC = () => {
	const ModalVisibility = useContext(ModalContext)
	const dispatch = useAppDispatch()
	const actionsHandler = (value: string, type: string) => {
		if (type === "add") dispatch(addСomponent(value))
		else if (type === "rename") {
			ModalVisibility?.renameComponent &&
				dispatch(
					renameСomponent({
						component: ModalVisibility?.renameComponent,
						value,
					})
				)
		}
	}

	if (ModalVisibility?.typeModal === "add") {
		return (
			<ModalComponent
				isVisibility={ModalVisibility?.isVisibility}
				setVisibility={(value) => ModalVisibility?.setVisibility(value)}
				ComponentHandler={(value) => actionsHandler(value, "add")}
				modalTitle="Add new component"
			/>
		)
	} else if (ModalVisibility?.typeModal === "rename") {
		return (
			<ModalComponent
				isVisibility={ModalVisibility?.isVisibility}
				setVisibility={(value) => ModalVisibility?.setVisibility(value)}
				ComponentHandler={(value) => actionsHandler(value, "rename")}
				modalTitle="Rename new component"
			/>
		)
	} else
		return (
			<AlertShareComponent
				isVisibility={ModalVisibility?.isVisibility}
				setVisibility={(value) => ModalVisibility?.setVisibility(value)}
			/>
		)
}
export default ModalComponentContainer
