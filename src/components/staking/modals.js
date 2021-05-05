import React,{ useState } from 'react';
import downwhite from '../../images/downwhite.png';
import {Modal, props, Button, Form, Card, Table, InputGroup} from 'react-bootstrap';
import depositbg from '../../images/depositbg.png';
import bitcoinimg from '../../images/asset1.png';
import ethimg from '../../images/asset3.png';
import payrimg from '../../images/asset2.png';
import usdimg from '../../images/asset4.png';
import Select from 'react-select';


// WITHDRAW FUNCTION
function WithdrawModal(props){
    const [show, setShow] = useState(true);
    const options = [
        { value: 'ETH', label:<div><img src={ethimg} height="30px" width="30px"/> ETH </div> },
        { value: 'BTC', label:<div><img src={bitcoinimg} height="30px" width="30px"/> BTC </div> },
        { value: 'PYR', label:<div><img src={payrimg} height="30px" width="30px"/> PYR</div> },
        { value: 'USDT', label:<div><img src={usdimg} height="30px" width="30px"/> USD</div> },
      ];

    const handleClose = () => {
        setShow(false);
        if(props.Stacks.Eth==="Withdraw"){
            props.setStacks({...props.Stacks, Eth:"", Usdt:"", Payr:"", Btc:""})
        }
        // else if(props.Stacks.Eth==="Stakes"){
        //     props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        // }
        else if(props.Stacks.Usdt==="Withdraw"){
            props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        }
        // else if(props.Stacks.Usdt==="Stakes"){
        //     props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        // }
        else if(props.Stacks.Payr==="Withdraw"){
            props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        }
        // else if(props.Stacks.Payr==="Stakes"){
        //     props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        // }
        else
        {
            props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        }
    };
    
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
            <h2>{props.title}</h2>
            <Form>                                          
                <Form.Group controlId="Amount">
                <Form.Label>Pool</Form.Label>
                <Select                
                    options={options}
                    defaultValue = {options[0]}
                    isSearchable={false}
                    defaultValue={
                        props.CurrencyType==='ETH'?{value: 'ETH', label:<div><img src={ethimg} height="30px" width="30px"/> ETH </div> }
                        :
                        props.CurrencyType==='BTC'?{ value: 'BTC', label:<div><img src={bitcoinimg} height="30px" width="30px"/> BTC </div> }
                        :
                        props.CurrencyType==='PYR'? { value: 'PYR', label:<div><img src={payrimg} height="30px" width="30px"/> PYR</div> }
                        :
                        props.CurrencyType==='USDT'? { value: 'USDT', label:<div><img src={usdimg} height="30px" width="30px"/> USD</div> }
                        :
                        ""
                    }
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
                        <td><strong>5.747 {props.CurrencyType}</strong></td>
                        </tr>
                        <tr>
                        <td>Remaining Staked</td>    
                        <td><strong>4.247 {props.CurrencyType}</strong></td>
                        </tr>
                        
                    </tbody>
                </Table>
                <p>Withdraw your staked {props.CurrencyType} from pools</p>
                <Card className="modalbutton withdraw_popup_btn">
                <Button variant="primary">
                Withdraw
                </Button>
                <Button variant="secondary" onClick={handleClose}>
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


// Stack modal

function StakeModal(props){
    console.log(props)
    const [show, setShow] = useState(true);
    
    const handleClose = () => {
        setShow(false);
        // if(props.Stacks.Eth==="Withdraw"){
        //     props.setStacks({...props.Stacks, Eth:"", Usdt:"", Payr:"", Btc:""})
        // }
        if(props.Stacks.Eth==="Stakes"){
            props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        }
        // if(props.Stacks.Usdt==="Withdraw"){
        //     props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        // }
        else if(props.Stacks.Usdt==="Stakes"){
            props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        }
        // if(props.Stacks.Payr==="Withdraw"){
        //     props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        // }
        else if(props.Stacks.Payr==="Stakes"){
            props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        }
        else
        {
            props.setStacks({...props.Stacks,Eth:"",Usdt:"",Payr:"",Btc:""})
        }
    };
    
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
            <h2>{props.title}</h2>
            <Form>                                          
                <Form.Group controlId="Amount">
                <Form.Label>Pool</Form.Label>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><img src={props.img} height="25px" width="30px"/> {props.CurrencyType} </InputGroup.Text>
                </InputGroup.Prepend>
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
                        <td><strong>5.747 {props.CurrencyType}</strong></td>
                        </tr>
                        <tr>
                        <td>Remaining Staked</td>    
                        <td><strong>4.247 {props.CurrencyType}</strong></td>
                        </tr>
                        
                    </tbody>
                </Table>
                <p>Withdraw your staked {props.CurrencyType} from pools</p>
                <Card className="modalbutton withdraw_popup_btn">
                <Button variant="primary">
                Withdraw
                </Button>
                <Button variant="secondary" onClick={handleClose}>
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
export { WithdrawModal,StakeModal}