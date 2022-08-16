import React, {FC, useContext, useEffect, useMemo} from "react"
import "antd/dist/antd.css"
import type * as CSS from "csstype"
import {useAppSelector} from "../../../redux/hooks"
import {RootState} from "../../../redux/store"
import {CurrencyContext} from "../../../context/CurrencyContext"

const PriceComponent: FC = () => {
	const CurrencyStatus = useContext(CurrencyContext)

	const TotalPrice = useAppSelector((state: RootState) => state.TotalPriceSlice)

	const currencyCheck = () => {
		switch (CurrencyStatus?.currencyStatus as string) {
			case "UAH":
			case "ГРН":
			case "₴":
				return TotalPrice.TotalPriceUAH.toFixed(2)
			case "USD":
			case "$":
				return TotalPrice.TotalPriceUSD.toFixed(2)
			case "EUR":
			case "€":
				return TotalPrice.TotalPriceEURO.toFixed(2)
			default:
				return ""
		}
	}
	// The rest of your rendering logic
	return <span>{CurrencyStatus && currencyCheck()}</span>
}

export default PriceComponent
