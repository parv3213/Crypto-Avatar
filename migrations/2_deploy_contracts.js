const CryptoKitty = artifacts.require("CryptoKitty");

module.exports = function (deployer) {
	deployer.deploy(CryptoKitty, "ParvToken", "PGT", "https://api.adorable.io/avatars");
};
