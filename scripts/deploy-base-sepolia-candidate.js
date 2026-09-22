const { ethers } = require("hardhat");

const BASE_SEPOLIA_CHAIN_ID = 84532n;
const EXPECTED_OWNER = "0x64d6719831414f883aA51CB59584D7B4F4066E08";

async function main() {
  const network = await ethers.provider.getNetwork();
  if (network.chainId !== BASE_SEPOLIA_CHAIN_ID) {
    throw new Error(`Refusing deployment: expected Base Sepolia chain 84532, got ${network.chainId}`);
  }

  const [deployer] = await ethers.getSigners();
  if (!deployer) throw new Error("No deployer signer available");

  console.log("Network:", network.name, network.chainId.toString());
  console.log("Deployer:", deployer.address);
  console.log("Intended owner:", EXPECTED_OWNER);
  console.log("This script is TESTNET ONLY. It refuses Base Mainnet.");

  const Token = await ethers.getContractFactory("TwoHundredToken");
  const token = await Token.deploy(EXPECTED_OWNER);
  await token.waitForDeployment();

  const address = await token.getAddress();
  const totalSupply = await token.totalSupply();
  const owner = await token.owner();

  if (owner.toLowerCase() !== EXPECTED_OWNER.toLowerCase()) {
    throw new Error(`Owner mismatch: ${owner}`);
  }
  if (totalSupply !== ethers.parseEther("100000000")) {
    throw new Error(`Supply mismatch: ${totalSupply}`);
  }

  console.log("TwoHundredToken:", address);
  console.log("Owner:", owner);
  console.log("Total supply:", ethers.formatEther(totalSupply));
  console.log("Deployment tx:", token.deploymentTransaction().hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
