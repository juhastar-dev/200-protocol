const { ethers } = require("hardhat");

const BASE_SEPOLIA_CHAIN_ID = 84532n;
const EXPECTED_OWNER = "0x64d6719831414f883aA51CB59584D7B4F4066E08";
const EXPECTED_SUPPLY = ethers.parseEther("100000000");

async function main() {
  const network = await ethers.provider.getNetwork();
  if (network.chainId !== BASE_SEPOLIA_CHAIN_ID) {
    throw new Error("Refusing deployment: expected Base Sepolia chain 84532, got " + network.chainId);
  }
  const [deployer] = await ethers.getSigners();
  if (!deployer) throw new Error("No deployer signer available");
  console.log("Network:", network.name, network.chainId.toString());
  console.log("Deployer:", deployer.address);
  console.log("Intended owner:", EXPECTED_OWNER);
  console.log("This script is TESTNET ONLY. It refuses Base Mainnet.");

  const Token = await ethers.getContractFactory("TwoHundredToken");
  const token = await Token.deploy(EXPECTED_OWNER);
  const deploymentTx = token.deploymentTransaction();
  if (!deploymentTx) throw new Error("Deployment transaction was not created");
  console.log("Deployment tx submitted:", deploymentTx.hash);

  const receipt = await deploymentTx.wait();
  if (!receipt || receipt.status !== 1) throw new Error("Deployment transaction failed: " + deploymentTx.hash);
  const address = await token.getAddress();
  console.log("Candidate address:", address);
  console.log("Receipt block:", receipt.blockNumber);
  console.log("Receipt status:", receipt.status);

  let code = "0x";
  for (let attempt = 1; attempt <= 12; attempt++) {
    code = await ethers.provider.getCode(address);
    console.log("Bytecode check " + attempt + "/12:", code === "0x" ? "not visible yet" : "present");
    if (code !== "0x") break;
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
  if (code === "0x") {
    throw new Error("Receipt succeeded but bytecode is not visible at " + address + ". Transaction: " + deploymentTx.hash + ". Do NOT redeploy until inspected.");
  }

  const totalSupply = await token.totalSupply();
  const owner = await token.owner();
  if (owner.toLowerCase() !== EXPECTED_OWNER.toLowerCase()) throw new Error("Owner mismatch: " + owner);
  if (totalSupply !== EXPECTED_SUPPLY) throw new Error("Supply mismatch: " + totalSupply);

  console.log("TwoHundredToken:", address);
  console.log("Owner:", owner);
  console.log("Total supply:", ethers.formatEther(totalSupply));
  console.log("Runtime bytecode bytes:", (code.length - 2) / 2);
  console.log("Deployment tx:", deploymentTx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
