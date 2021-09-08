import { ethers } from 'ethers';
import PayrToken from './contracts/PayrToken';
import WEth from './contracts/WEth';
import { addresses, pools } from './constants';
import Erc20Factory from './contracts/Erc20Factory';
import Erc20Token from './contracts/Erc20Token';
import * as defs from '../helpers/defines';
import * as utils from './utils';

export class PAYR {
  constructor(provider, networkId, disconnect, options = {}) {

    this.web3 = utils.createWeb3(provider, options);
    this.networkId = networkId;
    this.disconnect = disconnect;
        
    const contract_options = {
      web3: this.web3,
      networkId: networkId,
      ...options
    }
    this.payrtoken = new PayrToken(contract_options);
    this.weth = new WEth(contract_options);

    // Initializing Pool Contracts
    this.factorys = {};
    this.tokens = {};
    for (var id in pools) {
      const pool = pools[id];
      const pool_options = {...contract_options, id};
      this.factorys[pool.id] = new Erc20Factory(pool_options, pool.factory[networkId]);
      this.tokens[pool.id] = new Erc20Token(pool_options, pool.token[networkId]);
    }
  }

  async getAccountInfo() {
    const account = this.web3.currentProvider.selectedAddress;
    const ethBalance = await utils.getEthBalance(account);
    const payrAmount = await this.getInvestedPAYR(account);
    return {
      ethBalance,
      payrAmount
    }
  }

  async getPayrAllowance() {
    const account = this.web3.currentProvider.selectedAddress;
    const allowance = await this.payrtoken.call("allowance", account, addresses.crowdsale[this.networkId]);
    return allowance;
  }

  async getAssets() {
    const account = this.web3.currentProvider.selectedAddress;
    const assets = {};
    for (var id in pools) {
      const pool = pools[id];
      const factory = this.factorys[id];
      const token = this.tokens[id];

      const balance = await factory.call("balanceOf");
      const holding = await token.call("balanceOf", account);
      const allowance = await token.call("allowance", account, factory.address);

      assets[id] = {
        balance: utils.BNtoNum(balance, pool.decimal),
        holding: utils.BNtoNum(holding, pool.decimal),
        allowance: utils.BNtoNum(allowance, pool.decimal),
      };
    }
    return assets;
  }

  async getAssetDetails() {
    const account = this.web3.currentProvider.selectedAddress;
    const assetDetails = {};
    for (var id in pools) {
      const factory = this.factorys[id];

      const depositEvent = await utils.getLastOneEvent(factory, "Deposit", {from: account});
      const lastDeposit = depositEvent?(await utils.blokcNumberToDate(depositEvent.blockNumber)):null;

      const withdrawEvent = await utils.getLastOneEvent(factory, "Withdraw", {to: account});
      const lastWithdraw = withdrawEvent?(await utils.blokcNumberToDate(withdrawEvent.blockNumber)):null;

      //const tranEvents = await utils.getLastEvents(factory, "SendTransaction", "f")

      assetDetails[id] = {
        lastDeposit,
        lastWithdraw,
      };
    }
    return assetDetails;
  }

  async approveTokenForPool(poolId) {
    try {
      const tx = await this.tokens[poolId].send("approve", null, this.factorys[poolId].address, ethers.constants.MaxUint256);
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async depositTokenToPool(poolId, amount) {
    try {
      const tx = await this.factorys[poolId].send("deposit", null, utils.NumToBN(amount, pools[poolId].decimal));
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async withdrawTokenFromPool(poolId, amount) {
    try {
      const tx = await this.factorys[poolId].send("withdraw", null, utils.NumToBN(amount, pools[poolId].decimal));
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async createEscrow(poolId, to, amount, title) {
    try {
      const _toHash = utils.getHash(to);
      const _amount = utils.NumToBN(amount, pools[poolId].decimal);
      const tx = await this.factorys[poolId].send("send", null, _toHash, _amount, title);
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async releaseEscrow(poolId, tranId) {
    try {
      const tx = await this.factorys[poolId].send("release", null, tranId);
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async claimEscrow(poolId, tranId) {
    try {
      const tx = await this.factorys[poolId].send("getFund", null, tranId);
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async cancelEscrow(poolId, tranId) {
    try {
      const tx = await this.factorys[poolId].send("cancel", null, tranId);
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async getActiveTrans() {
    const actives = {};
    for (var poolId in pools) {
      const pool = pools[poolId];
      const factory = this.factorys[poolId];

      let i;

      // Fetching Buyer Pending Transactions.
      const buyIds = await factory.call("pendingFromIds");
      for (i in buyIds) {
        const buyId = buyIds[i];
        const buy = await factory.call("transactions", buyId);
        // Don't need to show Available Transactions for Buyer since it is already released.
        if (Number(buy.status) === defs.TranStatus.AVAILABLE)
          continue;
        actives[buyId] = {
          id: buyId,
          poolId: poolId,
          title: buy.description,
          amount: utils.BNtoNum(buy.amount, pool.decimal),
          type: defs.TranType.BUY,
          from: buy.from,
          toHash: buy.toHash,
          status: Number(buy.status),
          createdAt: utils.timestampToDate(buy.createdAt),
          endedAt: utils.timestampToDate(buy.endedAt),
        };
      }

      // Fetching Seller Pending Transactions.
      const sellIds = await factory.call("pendingToIds");
      for (i in sellIds) {
        const sellId = sellIds[i];
        const sell = await factory.call("transactions", sellId);
        actives[sellId] = {
          id: sellId,
          poolId: poolId,
          title: sell.description,
          amount: utils.BNtoNum(sell.amount, pool.decimal),
          type: defs.TranType.SELL,
          from: sell.from,
          toHash: sell.toHash,
          status: Number(sell.status),
          createdAt: utils.timestampToDate(sell.createdAt),
          endedAt: utils.timestampToDate(sell.endedAt),
        };
      }
    }
    
    return actives;
  }

  async getPastTrans() {
    //const account = this.web3.currentProvider.selectedAddress;
    var trans = [];
    for (var poolId in pools) {
      //const pool = pools[poolId];
      const factory = this.factorys[poolId];
      //const token = this.tokens[poolId];
      const events = await factory.getPastEvents('SendTransaction', {
        // filter: { from: account },
        fromBlock: 0,
        toBlock: 'latest'
      });
      trans = trans.concat(events);
    }
    return trans;
  }
}
