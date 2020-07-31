import React, { useState } from "react";
import AllKitties from "./AllKitties";

export default function Body({ allKitties, mint, getBalance, breed }) {
	const [loading, setLoading] = useState(false);
	const [userAccount, setUserAccount] = useState("");
	const [userBalance, setUserBalance] = useState("-");
	const [avatarId1, setAvatarId1] = useState("");
	const [avatarId2, setAvatarId2] = useState("");

	const handleMint = async () => {
		// setLoading(true);
		await mint();
		// window.alert("Mint Successful!");
		// setLoading(false);
	};

	const handleBreed = async () => {
		await breed(avatarId1, avatarId2);
	};

	const getUserBalance = async () => {
		setLoading(true);
		const _userBalance = await getBalance(userAccount);
		setUserBalance(_userBalance);
		setLoading(false);
	};
	if (loading === true) return <p className="text-center">Processing...</p>;
	return (
		<div className="mx-5 mt-5">
			<div className="text-center">
				<h1>CryptoAvatars</h1>
				<p className="heading-sub">Collect and breed forrver friends!</p>
			</div>
			<div className="jumbotron mx-auto mt-3">
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
					<input
						type="text"
						className="form-control input-width"
						placeholder="Account"
						onChange={(e) => {
							setUserAccount(e.target.value);
						}}
					/>
					<button className="btn btn-success mx-3" onClick={getUserBalance}>
						Get Avatar Balance
					</button>
					<p type="text" className="form-control" defaultValue="">
						{userBalance} Avatars
					</p>
				</div>
				<div className="input-group my-3">
					<div className="input-group-prepend">
						<div className="input-group-text">Breed Avatars</div>
					</div>
					<input
						type="text"
						className="form-control input-width"
						onChange={(e) => {
							setAvatarId1(e.target.value);
						}}
						placeholder="Avatar-1 ID"
					/>
					<input
						type="text"
						className="form-control input-width"
						onChange={(e) => {
							setAvatarId2(e.target.value);
						}}
						placeholder="Avatar-2 ID"
					/>
					<button className="btn btn-success mx-3" onClick={handleBreed}>
						Breed
					</button>
				</div>
			</div>
			<AllKitties allKitties={allKitties} />
		</div>
	);
}
