import React, { useState, useEffect } from "react";
import AllKitties from "./AllKitties";

export default function Body({ allKitties, mint }) {
	const handleMint = () => {
		mint();
	};
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
			<div className="my-5 options">
				<div className="input-group my-3">
					<div className="input-group-prepend">
						<div className="input-group-text">Mint a new Avatar</div>
					</div>
					<button className="btn btn-success mx-3" onClick={handleMint}>
						Mint
					</button>
				</div>
				<div className="input-group my-3">
					<div className="input-group-prepend">
						<div className="input-group-text">Get Balance of</div>
					</div>
					<input type="text" className="form-control input-width" placeholder="Account" />
					<button className="btn btn-success mx-3">Get Avatar Balance</button>
					<p></p>
				</div>
				<div className="input-group my-3">
					<div className="input-group-prepend">
						<div className="input-group-text">Breed Avatars</div>
					</div>
					<input type="text" className="form-control input-width" placeholder="Avatar-1 ID" />
					<input type="text" className="form-control input-width" placeholder="Avatar-2 ID" />
					<button className="btn btn-success mx-3">Breed</button>
				</div>
			</div>
			<AllKitties allKitties={allKitties} />
		</div>
	);
}
