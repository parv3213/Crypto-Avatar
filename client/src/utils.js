import Web3 from "web3";
import CryptoKitty from "./contracts/Cryptokitty.json";

const getWeb3 = () => {
	return new Promise((resolve, reject) => {
		window.addEventListener("load", async () => {
			if (window.ethereum) {
				const web3 = new Web3(window.ethereum);
				try {
					await window.ethereum.enable();
					resolve(web3);
				} catch (e) {
					reject(e);
				}
			} else if (window.web3) {
				resolve(window.web3);
			} else {
				window.alert("Must install Metamask Extension!\nDApp will not load");
				reject("Must install Metamask Extension!");
			}
		});
	});
};

const getCryptoKitty = async (web3) => {
	const networkId = await web3.eth.net.getId();
	const contractDeployment = CryptoKitty.networks[networkId];
	if (!contractDeployment) window.alert("Contract is not deployed on this network!");
	return new web3.eth.Contract(CryptoKitty.abi, contractDeployment && contractDeployment.address);
};

export { getWeb3, getCryptoKitty };
