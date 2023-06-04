import { ethers } from "hardhat";
import { expect } from "chai";

describe("SadaivDeveloperToken", function () {
  let creatorCoin;
  let owner;
  let buyer;

  const INITIAL_SUPPLY = 0;
  const MAX_COINS = 1500;
  const DESO_PRICE = 16;

  beforeEach(async function () {
    const CreatorCoinSupplyCurve = await ethers.getContractFactory("SadaivDeveloperToken");
    [owner, buyer] = await ethers.getSigners();

    creatorCoin = await CreatorCoinSupplyCurve.deploy();
    await creatorCoin.deployed();
  });

  it("should return correct price for the given supply", async function () {
    const price1 = await creatorCoin.getPrice(0);
    expect(price1).to.equal(0);

    const price2 = await creatorCoin.getPrice(500);
    expect(price2).to.be.gt(2000);

    const price3 = await creatorCoin.getPrice(1500);
    expect(price3).to.be.gt(20000);
  });

  it("should allow buying coins and update supply and balance correctly", async function () {
    const amount = 100;
    const price = await creatorCoin.getPrice(INITIAL_SUPPLY);
    const cost = price * amount;

    await expect(() => creatorCoin.buyCoins(amount, { value: cost }))
      .to.changeEtherBalances([buyer, creatorCoin], [-cost, cost]);

    const newSupply = await creatorCoin.totalSupply();
    expect(newSupply).to.equal(amount);
  });

  it("should not allow buying coins with invalid amount", async function () {
    const amount = 0;
    const price = await creatorCoin.getPrice(INITIAL_SUPPLY);
    const cost = price * amount;

    await expect(creatorCoin.buyCoins(amount, { value: cost })).to.be.revertedWith("Invalid amount");
  });

  it("should not allow buying coins exceeding maximum supply", async function () {
    const amount = MAX_COINS + 1;
    const price = await creatorCoin.getPrice(INITIAL_SUPPLY);
    const cost = price * amount;

    await expect(creatorCoin.buyCoins(amount, { value: cost })).to.be.revertedWith("Exceeds maximum supply");
  });

  // it("should not allow buying coins with insufficient funds", async function () {
  //   const amount = 100;
  //   const price = await creatorCoin.getPrice(INITIAL_SUPPLY);
  //   const cost = price * amount;

  //   await expect(creatorCoin.buyCoins(amount, { value: cost - 1 })).to.be.revertedWith("Insufficient funds");
  // });

  it("should allow selling coins and update supply and balance correctly", async function () {
    const amount = 100;
    const price = await creatorCoin.getPrice(INITIAL_SUPPLY);
    const payout = price * amount;

    // Mint coins to the buyer
    await creatorCoin.buyCoins(amount, { value: payout });

    await expect(() => creatorCoin.sellCoins(amount))
      .to.changeEtherBalances([creatorCoin, buyer], [-payout, payout]);

    const newSupply = await creatorCoin.totalSupply();
    expect(newSupply).to.equal(INITIAL_SUPPLY);
  });

  it("should not allow selling coins with invalid amount", async function () {
    const amount = 0;
    await expect(creatorCoin.sellCoins(amount)).to.be.revertedWith("Invalid amount");
  });

  it("should not allow selling coins with insufficient balance", async function () {
    const amount = 100;
    await expect(creatorCoin.sellCoins(amount)).to.be.revertedWith("Insufficient balance");
  });

  it("should return correct total supply", async function () {
    const totalSupply = await creatorCoin.totalSupply();
    expect(totalSupply).to.equal(INITIAL_SUPPLY);
  });
});
