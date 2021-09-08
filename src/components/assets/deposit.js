import React, {useState, useEffect} from 'react';
import { Card, Form, Table, Button } from 'react-bootstrap';
import depositbg from '../../assets/image/depositbg.png';
import * as commHelper from '../../helpers/common';
import PoolSelect from '../common/PoolSelect';
import { pools } from '../../blockchain/constants';
import usePayr from '../../hooks/usePayr';
import {NotificationManager} from 'react-notifications';

const Deposit = (props) => {
  const payr = usePayr();
  const { assets } = props;
  const options = commHelper.generatePoolSelectOptions();
  const [poolId, setPoolId] = useState(options[0].value);
  const [amount, setAmount] = useState(0);
  const [approved, setApproved] = useState(false);
  const [requestedApproval, setRequestedApproval] = useState(false);
  const [requestedDeposit, setRequestedDeposit] = useState(false);

  useEffect(() => {
    if (assets) {
      const _approved = assets[poolId].allowance !== 0 && assets[poolId].allowance >= assets[poolId].holding;
      setApproved(_approved);
    }
  }, [assets, poolId]);

  const handlePoolChange = (id) => {
    setPoolId(id);
  }

  const handleMaxValue = () => {
    setAmount(commHelper.toFixed(assets[poolId].holding));
  }

  const handleAmountChange = (e) => {
    const newValue = e.target.value;
    if (isNaN(newValue))
      return;
    setAmount(newValue);
  }

  const handleApprove = async () => {
    setRequestedApproval(true);
    const txHash = await payr.approveTokenForPool(poolId);
    setRequestedApproval(false);
    if (!txHash) {
      NotificationManager.error('Approve Error');
      return;
    }
    setApproved(true);
    NotificationManager.success('Approval Success');
  }

  const handleDeposit = async () => {
    if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
      NotificationManager.error('Invalid amount');
      return;
    }
    if (Number(amount) > Number(assets[poolId].holding)) {
      NotificationManager.error('Insufficient balance');
      return;
    }
    setRequestedDeposit(true);
    const txHash = await payr.depositTokenToPool(poolId, amount);
    setRequestedDeposit(false);
    if (!txHash) {
      NotificationManager.error('Deposit Error');
      return;
    }
    setAmount(0);
    NotificationManager.success(amount + " " + pools[poolId].symbol, 'Deposit Success');
  }

  const disabled = !approved || requestedDeposit;

  return (
    <Card className="deposit_block asset-modal">
      <h2>Deposit</h2>
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
            Max: {commHelper.toFixed(assets[poolId].holding)}
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
              <td>Total Balance</td>
              <td><strong>{commHelper.toFixed(assets[poolId].balance + (isNaN(amount)?0:Number(amount)))} {pools[poolId].symbol}</strong></td>
              </tr>
            </tbody>
          </Table>
          <p className="hide_text">.</p>
          {
            approved?
              requestedDeposit?
                <Button variant="primary" disabled>
                  Depositing...
                </Button>
              :
                <Button variant="primary" onClick={handleDeposit}>
                  Deposit
                </Button>
            :
              requestedApproval?
                <Button variant="primary" disabled>
                  Approving...
                </Button>
              :
                <Button variant="primary" onClick={handleApprove}>
                  Approve
                </Button>
          }
        </Card>
      </Form>
    </Card>
  )
}

export default Deposit;