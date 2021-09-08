import React, {useState} from 'react';
import {Button, Card, Col, Row, Table, Dropdown, SplitButton } from 'react-bootstrap';
import plusicon from '../../assets/image/plusicon.png';
import CreateModal from '../modal/CreateNew';
import { pools } from '../../blockchain/constants';
import * as commHelper from '../../helpers/common';
import * as defs from '../../helpers/defines';
import useConfirmDialog from '../../hooks/useConfirmDialog';
import usePayr from '../../hooks/usePayr';
import * as utils from '../../blockchain/utils';
import {NotificationManager} from 'react-notifications';

const ActiveEscrows = (props) => {
  const confirm = useConfirmDialog();
  const payr = usePayr();
  const { actives } = props;
  const [createModalShow, setCreateModalShow] = useState(false);
  const [processing, setProcessing] = useState(null);

  const handleCreateModalOpen = () => {
    setCreateModalShow(true);
  }

  const processEscrow = (tran, type) => {
    const {amount, from, poolId, id: tranId, title} = tran;
    const {symbol, fee} = pools[poolId];
    var confirmTitle = null;
    var confirmMsg = null;
    var func = null;
    var successTitle = null;
    var successMsg = null;
    if (type === defs.TranAction.RELEASE) {
      confirmTitle = "Release Escrow - " + title;
      confirmMsg = <>You are about to <b>Release</b> this escrow now. This means all the fund will be sent to Seller's wallet and you will be not able to get it back anymore. <br/>This action is going to be saved in on-chain database and it's <b>Irreversible</b> forever. <br/>Are you sure?</>;
      func = "releaseEscrow";
      successTitle = "Escrow is Released successfully.";
      successMsg = `${amount} ${symbol} to SELLER`;
    }
    else if (type === defs.TranAction.CLAIM) {
      confirmTitle = "Claim Escrow - " + title;
      confirmMsg = <>You are about to <b>Claim</b> this escrow now. This means all the fund will be sent to your wallet, which you can anytime withdraw. <br/>Are you sure?</>;
      func = "claimEscrow";
      successTitle = "Escrow is Claimed successfully.";
      successMsg = `${amount} ${symbol} (-${commHelper.toFixed(amount * fee / 100, false)} as Fee) from ${utils.formatAddress(from)}`;
    }
    else if (type === defs.TranAction.CANCEL) {
      confirmTitle = "Cancel Escrow - " + title;
      confirmMsg = <>You are about to <b>Cancel</b> this escrow now. This means all the fund will be sent back to Buyer's wallet and you will lose all access to it. <br/>This action is going to be saved in on-chain database and it's <b>Irreversible</b> forever. <br/>Are you sure?</>;
      func = "cancelEscrow";
      successTitle = "Escrow is Canceled successfully.";
      successMsg = `${amount} ${symbol} from ${utils.formatAddress(from)}`;
    }
    confirm({
      title: confirmTitle,
      message: confirmMsg,
    })
    .then(async () => {
      setProcessing(tranId);
      const txHash = await payr[func](poolId, tranId);
      setProcessing(null);
      if (!txHash) {
        NotificationManager.error('Error occurred while processing...');
        return;
      }
      NotificationManager.success(successMsg, successTitle);
    })
    .catch(console.log);
  }

  const handleDispute = () => {
    confirm({
      title: "Dispute Feature: Coming Soon...",
      message: <>PayrLink Arbitration Center where all disputes would be resolved, is going to be implemented with PayrLink Escrow v2.0. <br/>Please wait and stay tuned until we launch new major version.</>,
      variant: "info"
    })
    .then(() => {})
    .catch(console.log);
  }
  
  return (
    <>
      <Card className="myassets transation_active_escrows">
          
        <Row>
          <Col md={6}>
            <h2>Active Escrows</h2>
          </Col>
          <Col md={6}>
            <Button className="create_new" onClick={handleCreateModalOpen}>Create New <img src={plusicon} alt="" /></Button>
          </Col>
        </Row>

        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Amount</th>
              <th></th>
              <th>To/From</th>
              <th>Created At</th>
              <th>Released At</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            Object.keys(actives).map((tranId, index) => {
              const tran = actives[tranId];
              return (
                <tr key={`active-trans-${tran.poolId}-${tranId}`}>
                  <td>{index + 1}</td>
                  <td>{tran.title}</td>
                  <td>{tran.amount} {pools[tran.poolId].symbol}</td>
                  <td>{commHelper.generateTranTypeBadge(tran)}</td>
                  <td>{commHelper.generateTranRecipient(tran)}</td>
                  <td>{commHelper.generateDateFormat(tran.createdAt)}</td>
                  <td>{commHelper.generateDateFormat(tran.endedAt)}</td>
                  <td>{commHelper.generateTranStatusBadge(tran)}</td>
                  <td>
                    {
                      processing === tran.id ?
                        <Button className="tran-button" disabled>Processing...</Button>
                      :
                        <>
                          {
                            tran.type === defs.TranType.BUY && tran.status === defs.TranStatus.PENDING &&
                              <SplitButton title="Release" className="dropdown-button-custom tran-button" id="split-button-pull-right" menuAlign="right" 
                                onClick={() => processEscrow(tran, defs.TranAction.RELEASE)}>
                                <Dropdown.Item eventKey="1" onClick={() => handleDispute(tran)}>Dispute</Dropdown.Item>
                              </SplitButton>
                          }
                          {
                            tran.type === defs.TranType.SELL && tran.status === defs.TranStatus.AVAILABLE &&
                              <Button className="tran-button" onClick={() => processEscrow(tran, defs.TranAction.CLAIM)}>Claim</Button>
                          }
                          {
                            tran.type === defs.TranType.SELL && tran.status === defs.TranStatus.PENDING &&
                              <SplitButton title="Cancel" className="dropdown-button-custom tran-button" id="split-button-pull-right" menuAlign="right" 
                                onClick={() => processEscrow(tran, defs.TranAction.CANCEL)}>
                                <Dropdown.Item eventKey="1" onClick={() => handleDispute(tran)}>Dispute</Dropdown.Item>
                              </SplitButton>
                          }
                        </>
                    }
                    
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>

      </Card>
      <CreateModal show={createModalShow} onHide={() => setCreateModalShow(false)} />
    </>
  )
}

export default ActiveEscrows;