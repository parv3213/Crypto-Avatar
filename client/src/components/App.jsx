import React, { useEffect, useState } from "react";
import { getWeb3, getCryptoKitty } from "../utils.js";
import Web3 from "web3";
import Header from "./Header";
import Body from "./Body";
// import "./App.css";

function App() {
	const [web3, setWeb3] = useState(undefined);
	const [account, setAccount] = useState("");
	const [cryptoKitty, setCryptoKitty] = useState(undefined);
	const [allKitties, setAllKitties] = useState([]);
	const [tokenName, setTokenName] = useState("");
	const [tokenSymbol, setTokenSymbol] = useState("");
	const [tokenURI, setTokenURI] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			const web3 = await getWeb3();
			const accounts = await web3.eth.getAccounts();
			const cryptoKitty = await getCryptoKitty(web3);
			const tokenName = await cryptoKitty.methods.name().call();
			const tokenSymbol = await cryptoKitty.methods.symbol().call();
			const tokenURI = await cryptoKitty.methods.tokenURI(0).call();
			// await initialize(cryptoKitty, accounts[0]);
			const allKitties = await cryptoKitty.methods.getAllKitties().call();
			setWeb3(web3);
			setAccount(accounts[0]);
			setCryptoKitty(cryptoKitty);
			setTokenName(tokenName);
			setTokenSymbol(tokenSymbol);
			setTokenURI(tokenURI);
			setAllKitties(allKitties);
			setLoading(false);
		};
		init();
	}, []);

	// const initialize = async (cryptoKitty, account) => {
	// 	await cryptoKitty.methods.mint().send({ from: account });
	// 	await cryptoKitty.methods.mint().send({ from: account });
	// };

	if (loading) return <h2 className="text-center">Loading...</h2>;

	return (
		<div>
			<Body allKitties={allKitties} />
		</div>
	);
}

export default App;
