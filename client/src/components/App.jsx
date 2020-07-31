import React, { useEffect, useState } from "react";
import { getWeb3, getCryptoKitty } from "../utils.js";
import Header from "./Header";
import Body from "./Body";
// import "./App.css";

function App() {
	const [account, setAccount] = useState("");
	const [cryptoKitty, setCryptoKitty] = useState(undefined);
	const [allKitties, setAllKitties] = useState([]);
	const [loading, setLoading] = useState(true);
	const [reload, setReload] = useState(0);

	useEffect(() => {
		const init = async () => {
			const web3 = await getWeb3();
			const accounts = await web3.eth.getAccounts();
			const cryptoKitty = await getCryptoKitty(web3);
			// await initialize(cryptoKitty, accounts[0]);
			const allKitties = await cryptoKitty.methods.getAllKitties().call();
			setAccount(accounts[0]);
			setCryptoKitty(cryptoKitty);
			setAllKitties(allKitties);
			setLoading(false);
		};
		init();
	}, [reload]);

	const mint = async () => {
		setLoading(true);
		await cryptoKitty.methods
			.mint()
			.send({ from: account })
			.on("transactionHash", (hash) => {
				setReload(reload + 1);
			});
	};

	const getBalance = async (_account) => {
		try {
			const userBalance = await cryptoKitty.methods.balanceOf(_account).call();
			return userBalance;
		} catch (e) {
			window.alert("Pass correct address!");
			return "";
		}
	};

	const breed = async (kittyId1, kittyId2) => {
		try {
			setLoading(true);
			await cryptoKitty.methods
				.breed(kittyId1, kittyId2)
				.send({ from: account })
				.on("transactionHash", (hash) => {
					setReload(reload + 1);
				});
		} catch (e) {
			window.alert("Error\nGive correct Kitty Ids");
		}
	};

	if (loading) return <h2 className="text-center">Loading...</h2>;

	return (
		<div>
			<Header account={account} />
			<Body allKitties={allKitties} mint={mint} getBalance={getBalance} breed={breed} />
		</div>
	);
}

export default App;
