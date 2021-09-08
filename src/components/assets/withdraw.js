import React, {useState} from  'react';
import { Card, Form, Table, Button } from 'react-bootstrap';
import depositbg from '../../assets/image/depositbg.png';
import * as commHelper from '../../helpers/common';
import PoolSelect from '../common/PoolSelect';
import { pools } from '../../blockchain/constants';
import usePayr from '../../hooks/usePayr';
import {NotificationManager} from 'react-notifications';

const Withdraw = (props) => {
  const payr = usePayr();
  const { assets } = props;
  const options = commHelper.generatePoolSelectOptions();
  const [poolId, setPoolId] = useState(options[0].value);
  const [amount, setAmount] = useState(0);
  const [requestedWithdraw, setRequestedWithdraw] = useState(false);

  const handlePoolChange = (id) => {
    setPoolId(id);
  }

  const handleMaxValue = () => {
    setAmount(commHelper.toFixed(assets[poolId].balance));
  }

  const handleAmountChange = (e) => {
    const newValue = e.target.value;
    if (isNaN(newValue))
      return;
    setAmount(newValue);
  }

  const handleWithdraw = async () => {
    if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
      NotificationManager.error('Invalid amount');
      return;
    }
    if (Number(amount) > Number(assets[poolId].holding)) {
      NotificationManager.error('Insufficient balance');
      return;
    }
    setRequestedWithdraw(true);
    const txHash = await payr.withdrawTokenFromPool(poolId, amount);
    setRequestedWithdraw(false);
    if (!txHash) {
      NotificationManager.error('Withdrawal Error');
      return;
    }
    setAmount(0);
    NotificationManager.success(amount + " " + pools[poolId].symbol, 'Withdrawal Success');
  }

  const disabled = requestedWithdraw;
  return(
    <Card className="deposit_block">
      <h2>Withdraw</h2>
      <Form>
        <Form.Group controlId="Amount">
          <Form.Label>Pool</Form.Label>
          <PoolSelect onChange={handlePoolChange} />
        </Form.Group>

        <Form.Group controlId="To">
          <Form.Label>Amount</Form.Label>
          <Form.Control 
            className="text-right amount-input"
            type="text"
            value={amount}
            onChange={handleAmountChange}
            disabled={disabled}
            autoComplete="off"
          />
          <span className={"max_value " + (disabled?"disable-click":"")} onClick={disabled?null:handleMaxValue}>
            Max: {commHelper.toFixed(assets[poolId].balance)}
          </span>
        </Form.Group>
                
        <Card className="deposit_bottom" style={{ backgroundImage: `url(${depositbg})` }}>
          <Table>
            <tbody>
              <tr>
              <td>Current Balance</td>    
              <td><strong>{commHelper.toFixed(assets[poolId].balance)} {pools[poolId].symbol}</strong></td>
              </tr>
              <tr>
              <td>Remaining Balance</td>    
              <td><strong>{commHelper.toFixed(assets[poolId].balance - (isNaN(amount)?0:Number(amount)))} {pools[poolId].symbol}</strong></td>
              </tr>
                          
            </tbody>
          </Table>
          <p className="hide_text">.</p>
          {
            requestedWithdraw?
              <Button variant="primary" disabled>
                Withdrawing...
              </Button>
            :
              <Button variant="primary" onClick={handleWithdraw}>
                Withdraw
              </Button>
          }
        </Card>
                                
      </Form>
    </Card>
  )
}

export default Withdraw;