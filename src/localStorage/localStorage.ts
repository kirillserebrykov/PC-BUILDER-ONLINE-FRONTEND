import {INamesComponents} from "../redux/typeAndInterfaceСomponentSlice/reduxInterface"

export const loadState = () => {
	try {
		const serialState = localStorage.getItem("ComponentState")
		if (serialState === null) {
			return undefined
		}
		return JSON.parse(serialState)
	} catch (err) {
		return undefined
	}
}

export const saveState = (state: any) => {
	try {
		const serialState = JSON.stringify(state)
		localStorage.setItem("ComponentState", serialState)
	} catch (err) {
		console.log(err)
	}
}
const StateMap = (
	state: Array<INamesComponents>,
	component: string,
	type: string,
	value: string = ""
) => {
	// eslint-disable-next-line array-callback-return
	return state.map((el: INamesComponents, i: number) => {
		if (el.name === component) {
			if (type === "delete") {
				state.splice(i, 1)
				saveState(state)
				return state
			} else if (type === "rename") {
				state[i].name = value
				saveState(state)
				return state
			} else if (type === "changeValue") {
				state[i].value = value
				saveState(state)
				return state
			}
		}
	})
}

export const ComponentStateActions = (
	component: string,
	type: string,
	value: string = ""
) => {
	try {
		let LocalStorageStateJSON = localStorage.getItem("ComponentState")
		if (LocalStorageStateJSON === null) {
			return [""]
		}
		let LocalStorageState = JSON.parse(LocalStorageStateJSON)
		const results: Array<any> = StateMap(
			LocalStorageState,
			component,
			type,
			value
		).filter((element) => {
			return element !== undefined
		})

		return results[0]
	} catch (err) {
		return [""]
	}
}
