import React from "react";
import { Link } from "react-router-dom";


export default function NavBar(props) {
	return (
		<div className="ui teal four item inverted menu">
			<Link to={"/"} className="header item">
				HOME
			</Link>
			<Link to={"/products"} className="item">
				PRODUCTS
			</Link>
			<Link to={"/about"} className="item">
				ABOUT US
			</Link>
			<Link to={"/purchase"} className="item">
				<i className="shopping bag icon"></i>
				<span>{props.bagCount}</span>
			</Link>
		</div>
	)
}