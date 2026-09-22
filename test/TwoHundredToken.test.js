const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TwoHundredToken production candidate", function () {
  async function deploy() {
    const [owner, holder, spender, other] = await ethers.getSigners();
    const F = await ethers.getContractFactory("TwoHundredToken");
    const token = await F.deploy(owner.address);
    await token.waitForDeployment();
    return { token, owner, holder, spender, other };
  }

  it("freezes identity and fixed supply", async function () {
    const { token, owner } = await deploy();
    expect(await token.name()).to.equal("200 Token");
    expect(await token.symbol()).to.equal("200");
    expect(await token.decimals()).to.equal(18n);
    expect(await token.totalSupply()).to.equal(ethers.parseEther("100000000"));
    expect(await token.MAX_SUPPLY()).to.equal(ethers.parseEther("100000000"));
    expect(await token.balanceOf(owner.address)).to.equal(await token.totalSupply());
  });

  it("has standard transfer semantics with no token-side tax", async function () {
    const { token, owner, holder } = await deploy();
    const amount = ethers.parseEther("1000");
    await expect(token.connect(owner).transfer(holder.address, amount))
      .to.changeTokenBalances(token, [owner, holder], [-amount, amount]);
  });

  it("supports large transfers without max-wallet or max-transaction gates", async function () {
    const { token, owner, holder } = await deploy();
    const amount = ethers.parseEther("5000000");
    await token.connect(owner).transfer(holder.address, amount);
    expect(await token.balanceOf(holder.address)).to.equal(amount);
  });

  it("supports ERC-2612 Permit", async function () {
    const { token, owner, holder, spender } = await deploy();
    await token.connect(owner).transfer(holder.address, ethers.parseEther("1000"));
    const nonce = await token.nonces(holder.address);
    const deadline = BigInt(Math.floor(Date.now()/1000) + 3600);
    const value = ethers.parseEther("123");
    const network = await ethers.provider.getNetwork();
    const domain = { name:"200 Token", version:"1", chainId:network.chainId, verifyingContract:await token.getAddress() };
    const types = { Permit:[
      {name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},
      {name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}
    ]};
    const sig = ethers.Signature.from(await holder.signTypedData(domain, types, {owner:holder.address,spender:spender.address,value,nonce,deadline}));
    await token.permit(holder.address, spender.address, value, deadline, sig.v, sig.r, sig.s);
    expect(await token.allowance(holder.address, spender.address)).to.equal(value);
  });

  it("allows only owner to recover 200 held by the token contract", async function () {
    const { token, owner, holder } = await deploy();
    const amount = ethers.parseEther("5");
    await token.connect(owner).transfer(await token.getAddress(), amount);
    await expect(token.connect(holder).recoverToken(amount)).to.be.reverted;
    await expect(token.connect(owner).recoverToken(amount))
      .to.changeTokenBalances(token, [token, owner], [-amount, amount]);
  });

  it("uses two-step ownership and starts with no pending owner", async function () {
    const { token, owner, other } = await deploy();
    expect(await token.owner()).to.equal(owner.address);
    expect(await token.pendingOwner()).to.equal(ethers.ZeroAddress);
    await token.connect(owner).transferOwnership(other.address);
    expect(await token.owner()).to.equal(owner.address);
    expect(await token.pendingOwner()).to.equal(other.address);
    await token.connect(other).acceptOwnership();
    expect(await token.owner()).to.equal(other.address);
    expect(await token.pendingOwner()).to.equal(ethers.ZeroAddress);
  });

  it("exposes no mint function in the production ABI", async function () {
    const { token } = await deploy();
    const names = token.interface.fragments.filter(f => f.type === "function").map(f => f.name);
    expect(names).not.to.include("mint");
  });
});
