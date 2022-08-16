import React, {FC, useContext, useEffect, useState} from "react"
import type * as CSS from "csstype"
import "antd/dist/antd.css"
import "./Footer.css"
import {ModalContext} from ".././../context/ModalContext"
import CurrencyComponent from "./Currency/Currency"
import Share from "../../assets/share.svg"
import {CurrencyContext} from "../../context/CurrencyContext"
import {useLocation} from "react-router-dom"
import {saveState} from "../../localStorage/localStorage"
import {ComponentsUrl} from "../Content/Content"
import {ButtonsForMobile, ButtonsForPC} from "./ButtonsWrapper/ButtonsForPC"
import PriceComponent from "./Price/Price"
import {useAppSelector} from "../../redux/hooks"
import {RootState} from "../../redux/store"

const FooterComponent: FC = () => {
	const ModalVisibility = useContext(ModalContext)
	const {hash} = useLocation()

	const TotalPrice = useAppSelector((state: RootState) => state.TotalPriceSlice)

	const [currencyStatus, setCurrencyStatus] = useState(TotalPrice.currency)
	useEffect(() => setCurrencyStatus(TotalPrice.currency), [TotalPrice.currency])

	const handleOpenAdd = () => {
		ModalVisibility?.setVisibility(true)
		ModalVisibility?.setTypeModal("add")
	}

	const handleOpenShare = () => {
		ModalVisibility?.setVisibility(true)
		ModalVisibility?.setTypeModal("share")
	}
	const handleEditShareData = () => {
		ModalVisibility?.setShareMode(false)
		saveState(ComponentsUrl(hash))
		window.location.href = ""
	}

	return (
		<>
			<CurrencyContext.Provider value={{currencyStatus, setCurrencyStatus}}>
				<div className="wrapper price">
					<PriceComponent />
				</div>
				<div className="wrapper currency">
					<CurrencyComponent />
				</div>
			</CurrencyContext.Provider>
			{window.innerWidth < 700 ? (
				<ButtonsForMobile
					shareMode={ModalVisibility && ModalVisibility.shareMode}
					handleOpenAdd={handleOpenAdd}
					handleOpenShare={handleOpenShare}
					Share={Share}
					handleEditShareData={handleEditShareData}
				/>
			) : (
				<ButtonsForPC
					shareMode={ModalVisibility && ModalVisibility.shareMode}
					handleOpenAdd={handleOpenAdd}
					handleOpenShare={handleOpenShare}
					Share={Share}
					handleEditShareData={handleEditShareData}
				/>
			)}
		</>
	)
}

export default FooterComponent

const buttonStyle: CSS.Properties = {
	minWidth: "100%",
	borderColor: "rgb(54, 79, 107)",
	color: "rgb(54, 79, 107)",
	fontFamily: "Source Sans Pro, sans-serif",
	marginTop: "20px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}

// const buttonStyle: CSS.Properties = {
//   minWidth: "60px",
//   borderRadius: "20px",
//   borderColor: "rgb(54, 79, 107)",
//   color: "rgb(54, 79, 107)",
//   fontFamily: "Source Sans Pro, sans-serif",
//   marginLeft: "10px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// {!ModalVisibility?.shareMode ? (
//   <>
//     <Button
//       onClick={handleOpenAdd}
//       ghost
//       type="primary"
//       style={buttonStyle}
//     >
//       <span>+</span>
//     </Button>
//     <Button
//       onClick={handleOpenShare}
//       ghost
//       type="primary"
//       style={buttonStyle}
//     >
//       <img width={20} src={Share} alt="Share" />
//     </Button>
//   </>
// ) : (
//   <Button
//     onClick={handleEditShareData}
//     ghost
//     type="primary"
//     style={buttonStyle}
//   >
//     <span>Edit share data</span>
//   </Button>
// )}
