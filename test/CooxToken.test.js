const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CooxToken", function () {
  it("mints exactly 250,000,000 COOX to the initial holder", async function () {
    const [holder] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("CooxToken");
    const token = await Token.deploy(holder.address);
    await token.waitForDeployment();

    const expected = ethers.parseUnits("250000000", 18);
    expect(await token.name()).to.equal("Coox");
    expect(await token.symbol()).to.equal("COOX");
    expect(await token.decimals()).to.equal(18);
    expect(await token.totalSupply()).to.equal(expected);
    expect(await token.balanceOf(holder.address)).to.equal(expected);
  });

  it("rejects a zero initial holder", async function () {
    const Token = await ethers.getContractFactory("CooxToken");
    await expect(Token.deploy(ethers.ZeroAddress)).to.be.revertedWith(
      "Coox: zero initial holder"
    );
  });

  it("allows holders to burn their own COOX", async function () {
    const [holder] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("CooxToken");
    const token = await Token.deploy(holder.address);
    await token.waitForDeployment();

    const burnAmount = ethers.parseUnits("100", 18);
    await token.burn(burnAmount);

    expect(await token.totalSupply()).to.equal(
      ethers.parseUnits("249999900", 18)
    );
  });
});
