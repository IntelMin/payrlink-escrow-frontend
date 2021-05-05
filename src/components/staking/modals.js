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
      <Modal show={show} onHide={handleClose} className="connectmodal WalletConnectmodal">
        
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
                        <td>Withdrawal Amount</td>    
                        <td><strong>5.747 ETH</strong></td>
                        </tr>
                        <tr>
                        <td>Remaining Balance</td>    
                        <td><strong>4.247 ETH</strong></td>
                        </tr>
                        
                    </tbody>
                </Table>
                <p>Withdrew amount will reflect in your bank after 2 hours.</p>
                <Button variant="primary" type="submit">
                Withdraw
                </Button>
                </Card>
                                
            </Form>
        </Card>
        
      </Modal>
    </>
  );
}

export default WithdrawEth;