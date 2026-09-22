const { ethers } = require("hardhat");

const BASE_MAINNET_CHAIN_ID = 8453n;
const EXPECTED_OWNER = "0x64d6719831414f883aA51CB59584D7B4F4066E08";
const EXPECTED_SUPPLY = ethers.parseEther("100000000");

async function main() {
  if (process.env.CONFIRM_200_MAINNET_DEPLOY !== "I_UNDERSTAND_REAL_ETH_WILL_BE_SPENT") {
    throw new Error("Mainnet deployment is locked. Explicit confirmation variable is required.");
  }

  const network = await ethers.provider.getNetwork();
  if (network.chainId !== BASE_MAINNET_CHAIN_ID) {
    throw new Error("Refusing deployment: expected Base Mainnet chain 8453, got " + network.chainId);
  }

  const [deployer] = await ethers.getSigners();
  if (!deployer) throw new Error("No deployer signer available");
  if (deployer.address.toLowerCase() !== EXPECTED_OWNER.toLowerCase()) {
    throw new Error("Refusing deployment: signer must be frozen Account 2 owner " + EXPECTED_OWNER);
  }

  console.log("Network:", network.name, network.chainId.toString());
  console.log("Deployer/owner:", deployer.address);
  console.log("WARNING: THIS IS BASE MAINNET AND SPENDS REAL ETH.");

  const Token = await ethers.getContractFactory("TwoHundredToken");
  const txRequest = await Token.getDeployTransaction(EXPECTED_OWNER);
  const gasEstimate = await ethers.provider.estimateGas({...txRequest, from: deployer.address});
  const feeData = await ethers.provider.getFeeData();
  console.log("Estimated deployment gas:", gasEstimate.toString());
  console.log("Gas price:", feeData.gasPrice ? ethers.formatUnits(feeData.gasPrice, "gwei") + " Gwei" : "provider did not return gasPrice");

  const token = await Token.deploy(EXPECTED_OWNER);
  const deploymentTx = token.deploymentTransaction();
  console.log("Deployment tx submitted:", deploymentTx.hash);
  const receipt = await deploymentTx.wait();
  if (!receipt || receipt.status !== 1) throw new Error("Deployment transaction failed");

  const address = await token.getAddress();
  const code = await ethers.provider.getCode(address);
  if (code === "0x") throw new Error("No runtime bytecode visible at deployed address");

  const owner = await token.owner();
  const totalSupply = await token.totalSupply();
  if (owner.toLowerCase() !== EXPECTED_OWNER.toLowerCase()) throw new Error("Owner mismatch");
  if (totalSupply !== EXPECTED_SUPPLY) throw new Error("Supply mismatch");

  console.log("TwoHundredToken:", address);
  console.log("Owner:", owner);
  console.log("Total supply:", ethers.formatEther(totalSupply));
  console.log("Runtime bytecode bytes:", (code.length - 2) / 2);
  console.log("Deployment tx:", deploymentTx.hash);
  console.log("IMPORTANT: Do not add liquidity until source/configuration verification is complete.");
}
main().catch((e)=>{ console.error(e); process.exitCode=1; });
