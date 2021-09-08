
import Contract from './Contract';
import abi from '../abis/erc20-factory.json';

class Erc20Factory extends Contract {
  constructor(options, address) {
    super(options, "erc20factory-" + options.id);
    this.address = address;
    this.contract = new this.web3.eth.Contract(abi, address);
  }
}

export default Erc20Factory;