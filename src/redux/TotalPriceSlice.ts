import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"
import type {ITotalPrice} from "./typeAndInterfaceСomponentSlice/reduxInterface"
import {rete} from "./api/rate"

const initialState: ITotalPrice = {
	TotalPriceUAH: 0,
	TotalPriceEURO: 0,
	TotalPriceUSD: 0,
	currency: "",
}

const USD = +rete[0].buy
const EURO = +rete[0].buy
const IncrementInCurrency = (state: ITotalPrice, amount: number) => {
	switch (state.currency as string) {
		case "UAH":
		case "ГРН":
		case "$":
			state.TotalPriceUAH += amount
			state.TotalPriceUSD += amount / USD
			state.TotalPriceEURO += amount / EURO
			break
		case "USD":
		case "₴":
			state.TotalPriceUSD += amount
			state.TotalPriceUAH += amount * USD
			state.TotalPriceEURO += amount * 0.97
			break
		case "EUR":
		case "€":
			state.TotalPriceEURO += amount
			state.TotalPriceUSD += amount * 1.01
			state.TotalPriceUAH += amount * EURO
	}
}
const DecrementInCurrency = (state: ITotalPrice, amount: number) => {
	switch (state.currency as string) {
		case "UAH":
		case "ГРН":
		case "$":
			state.TotalPriceUAH -= amount
			state.TotalPriceUSD -= amount / USD
			state.TotalPriceEURO -= amount / EURO
			break
		case "USD":
		case "₴":
			state.TotalPriceUSD -= amount
			state.TotalPriceUAH -= amount * USD
			state.TotalPriceEURO -= amount * 0.97
			break
		case "EUR":
		case "€":
			state.TotalPriceEURO -= amount
			state.TotalPriceUSD -= amount * 1.01
			state.TotalPriceUAH -= amount * EURO
	}
}

export const TotalPriceSlice = createSlice({
	name: "TotalPrice",
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<number>) => {
			IncrementInCurrency(state, action.payload)
		},
		decrement: (state, action: PayloadAction<number>) => {
			DecrementInCurrency(state, action.payload)
		},
		setCurrency: (state, action: PayloadAction<string>) => {
			state.currency = action.payload
		},
		divideTotalPrice: (state, action: PayloadAction<number>) => {
			state.TotalPriceUAH = state.TotalPriceUAH / action.payload
		},
		multiplyTotalPrice: (state, action: PayloadAction<number>) => {
			state.TotalPriceUAH = state.TotalPriceUAH * action.payload
		},
	},
})

export const {
	increment,
	decrement,
	setCurrency,
	divideTotalPrice,
	multiplyTotalPrice,
} = TotalPriceSlice.actions
export default TotalPriceSlice.reducer
