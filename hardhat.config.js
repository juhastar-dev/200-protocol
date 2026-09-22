require("@nomicfoundation/hardhat-toolbox");

const networks = {
  hardhat: { chainId: 31337 }
};

if (process.env.BASE_SEPOLIA_RPC_URL && process.env.BASE_SEPOLIA_DEPLOYER_PRIVATE_KEY) {
  networks.baseSepolia = {
    url: process.env.BASE_SEPOLIA_RPC_URL,
    chainId: 84532,
    accounts: [process.env.BASE_SEPOLIA_DEPLOYER_PRIVATE_KEY]
  };
}

if (process.env.BASE_MAINNET_RPC_URL && process.env.BASE_MAINNET_DEPLOYER_PRIVATE_KEY) {
  networks.baseMainnet = {
    url: process.env.BASE_MAINNET_RPC_URL,
    chainId: 8453,
    accounts: [process.env.BASE_MAINNET_DEPLOYER_PRIVATE_KEY]
  };
}

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: "cancun",
      metadata: { bytecodeHash: "ipfs" }
    }
  },
  networks
};
