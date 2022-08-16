import {createContext} from "react"

interface CurrencyContextInterface {
	currencyStatus: string
	setCurrencyStatus: (value: string) => void
}

export const CurrencyContext = createContext<
	CurrencyContextInterface | undefined
>(undefined)
