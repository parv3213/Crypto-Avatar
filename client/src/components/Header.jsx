import React from "react";

export default function Header({ account }) {
	return (
		<nav className="navbar navbar-expand-lg mx-3 my-3">
			<p className="navbar-brand">CryptoAvatars</p>
			<span className="ml-auto">Current Account: {account}</span>
		</nav>
	);
}
