import React from "react"
import {render, screen} from "@testing-library/react"
import Header from "../component/Header/Header"

test("Header check StandWithUkraine", () => {
	render(<Header />)
	const linkElement = screen.getByText('StandWithUkraine')
	expect(linkElement).toBeInTheDocument()
})
