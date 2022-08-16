import React, {FC} from "react"
import "antd/dist/antd.css"
import "./Header.css"
import type * as CSS from "csstype"
import LOGO from "../../assets/LOGO.svg"

const HeaderComponent: FC = () => (
	<div className="wrapper-header-text">
		<img width={150} src={LOGO} style={titleStyle} alt="logo" />
		<a className="paragraph-text" href="https://www.standwithukraine.how/">
			<img
				width={20}
				src="https://www.standwithukraine.how/_nuxt/img/logo.ebae13d.png"
				alt=""
			/>
			<span>StandWithUkraine</span>
		</a>
	</div>
)

export default HeaderComponent

const titleStyle: CSS.Properties = {
	fontFamily: "'Inria Sans', sans-serif",
	fontWeight: "700",
	margin: 0,
}
