
import Contract from './Contract';
import abi from '../abis/erc20.json';

class Erc20Token extends Contract {
  constructor(options, address) {
    super(options, "erc20-" + options.id);
    this.address = address;
    this.contract = new this.web3.eth.Contract(abi, address);
  }
}

export default Erc20Token;