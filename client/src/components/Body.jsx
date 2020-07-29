import React, { useState, useEffect } from "react";
import AllKitties from "./AllKitties";

export default function Body({ allKitties }) {
	return (
		<div className="mx-5 mt-5">
			<div className="text-center">
				<h1>CryptoAvatars</h1>
				<p className="heading-sub">Collect and breed forrver friends!</p>
			</div>
			<div className="jumbotron mx-auto mt-5">
				<div className="button">
					<button className="btn btn-warning">Get your own Avatar</button>
				</div>
				<div className="info">
					<li>Mint new Avatar</li>
					<li>Breed your Avatars</li>
					<li>Buy and Sell Avatars</li>
				</div>
			</div>

			<AllKitties allKitties={allKitties} />
		</div>
	);
}
