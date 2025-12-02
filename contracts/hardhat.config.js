require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/deploy-Pets");

const PRIVATE_KEY = process.env.PrivateKey;
const ETHERSCAN_API = process.env.EhterscanApi;
const QUICKNODE_API = process.env.QuickNodeApi;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: QUICKNODE_API,
      accounts: [PRIVATE_KEY],
      chainId: 11155111
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};
