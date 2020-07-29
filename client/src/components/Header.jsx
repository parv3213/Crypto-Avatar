import React from "react";

export default function Header({ account }) {
	return (
		<nav className="navbar navbar-expand-lg mx-3 my-3">
			<a className="navbar-brand">CryptoAvatars</a>
			<span className="ml-auto">Current Account: {account}</span>
		</nav>
	);
}
