import React, { useEffect, useState } from "react";
import { getWeb3, getCryptoKitty } from "../utils.js";
import Web3 from "web3";
// import "./App.css";

function App() {
	const [web3, setWeb3] = useState(undefined);
	const [account, setAccount] = useState("");
	const [cryptoKitty, setCryptoKitty] = useState(undefined);
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
			setWeb3(web3);
			setAccount(accounts[0]);
			setCryptoKitty(cryptoKitty);
			setTokenName(tokenName);
			setTokenSymbol(tokenSymbol);
			setTokenURI(tokenURI);
			setLoading(false);
		};
		init();
	}, []);

	if (loading) return <h2 className="text-center">Loading...</h2>;

	return <div>Hey</div>;
}

export default App;
