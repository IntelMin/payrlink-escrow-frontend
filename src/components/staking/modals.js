import React,{ useState } from 'react';
import downwhite from '../../images/downwhite.png';
import {Modal, props, Button, Form, Card, Table} from 'react-bootstrap';
import depositbg from '../../images/depositbg.png';
import bitcoinimg from '../../images/asset1.png';
import ethimg from '../../images/asset3.png';
import payrimg from '../../images/asset2.png';
import usdimg from '../../images/asset4.png';
import Select from 'react-select';
function WithdrawEth(props){
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const options = [
        { value: 'BTC', label:<div><img src={bitcoinimg} height="30px" width="30px"/> BTC </div> },
        { value: 'ETH', label:<div><img src={ethimg} height="30px" width="30px"/> ETH </div> },
        { value: 'PYR', label:<div><img src={payrimg} height="30px" width="30px"/> PYR</div> },
        { value: 'USD', label:<div><img src={usdimg} height="30px" width="30px"/> USD</div> },
      ];
      const [Amount,setAmount]=useState({
          Pool:'',
          Amt:0
      })
      const ChangeAmt=(e)=>{
          e.target.value===''?
          setAmount({...Amount,Amt:0})
          :
          setAmount({...Amount,Amt:e.target.value})
      }
  return (
    <>
      <Modal show={show} onHide={handleClose} className="connectmodal WalletConnectmodal withdraw_popup">
        
        <Card className="deposit_block">
            <h2>Withdraw</h2>
            <Form>                                          
                <Form.Group controlId="Amount">
                <Form.Label>Pool</Form.Label>
                <Select
                    options={options}
                    defaultValue = {options[0]}
                    isSearchable={false}
                />
                </Form.Group>

                <Form.Group controlId="To">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" onChange={ChangeAmt} />
                <span className="max_value">Max: {Amount.Amt}</span>
                </Form.Group>
                
                <Card className="deposit_bottom" style={{ backgroundImage: `url(${depositbg})` }}>
                <Table>
                    <tbody>
                        <tr>
                        <td>Current Staked</td>    
                        <td><strong>5.747 PAYR</strong></td>
                        </tr>
                        <tr>
                        <td>Remaining Staked</td>    
                        <td><strong>4.247 PAYR</strong></td>
                        </tr>
                        
                    </tbody>
                </Table>
                <p>Withdraw your staked PAYR from pools</p>
                <Card className="modalbutton withdraw_popup_btn">
                <Button variant="primary" type="submit">
                Withdraw
                </Button>
                <Button variant="secondary" type="submit">
                Cancel
                </Button>
                </Card>
               
                </Card>
                                
            </Form>
        </Card>
        
      </Modal>
    </>
  );
}

export default WithdrawEth;