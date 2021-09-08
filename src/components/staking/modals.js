import React,{ useState } from 'react';

import {Modal, Button, Form, Card, Table} from 'react-bootstrap';
import depositbg from '../../assets/image/depositbg.png';
import bitcoinimg from '../../assets/image/asset1.png';
import ethimg from '../../assets/image/asset3.png';
import payrimg from '../../assets/image/asset2.png';
import usdimg from '../../assets/image/asset4.png';
import Select from 'react-select';


// WITHDRAW FUNCTION
function WithdrawModal(props){
  const [show, setShow] = useState(true);
  const options = [
    { value: 'ETH', label:<div><img src={ethimg} alt="ETH" height="30px" width="30px"/> ETH </div> },
    { value: 'BTC', label:<div><img src={bitcoinimg} alt="BTC" height="30px" width="30px"/> BTC </div> },
    { value: 'PAYR', label:<div><img src={payrimg} alt="PAYR" height="30px" width="30px"/> PAYR</div> },
    { value: 'USDT', label:<div><img src={usdimg} alt="USDT" height="30px" width="30px"/> USDT</div> },
  ];
  const [pool, setPool] = useState(props.CurrencyType);
  const handlePoolChange = (e) => {
    setPool(e.value);
  }
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
    
  return (
  <>
      <Modal show={show} onHide={handleClose} className="connectmodal WalletConnectmodal withdraw_popup" animation={false}>
        
    <Card className="deposit_block">
      <h2>{props.title}</h2>
      <Form>                                          
        <Form.Group controlId="Amount">
        <Form.Label>Pool</Form.Label>
        <Select                
          className="pool-select"
          options={options}
          isSearchable={false}
          defaultValue={
            props.CurrencyType==='ETH'?{value: 'ETH', label:<div><img src={ethimg}  alt="ETH" height="30px" width="30px"/> ETH </div> }
            :
            props.CurrencyType==='BTC'?{ value: 'BTC', label:<div><img src={bitcoinimg} alt="BTC"  height="30px" width="30px"/> BTC </div> }
            :
            props.CurrencyType==='PAYR'? { value: 'PAYR', label:<div><img src={payrimg} alt="PAYR"  height="30px" width="30px"/> PAYR</div> }
            :
            props.CurrencyType==='USDT'? { value: 'USDT', label:<div><img src={usdimg} alt="USDT"  height="30px" width="30px"/> USDT</div> }
            :
            {value: 'ETH', label:<div><img src={ethimg}  alt="ETH" height="30px" width="30px"/> ETH </div> }
          }
          onChange={handlePoolChange}
        />
        </Form.Group>

        <Form.Group controlId="To">
        <Form.Label>Amount</Form.Label>
        <Form.Control className="text-right" type="text" />
        <span className="max_value">Max: 5.747</span>
        </Form.Group>
                
        <Card className="deposit_bottom" style={{ backgroundImage: `url(${depositbg})` }}>
        <Table>
          <tbody>
            <tr>
            <td>Current Staked</td>    
            <td><strong>5.747 {pool}</strong></td>
            </tr>
            <tr>
            <td>Remaining Staked</td>    
            <td><strong>4.247 {pool}</strong></td>
            </tr>
                        
          </tbody>
        </Table>
        <p>Withdraw your staked {pool} from pools</p>
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
  const [show, setShow] = useState(true);
  const options = [
    { value: 'ETH', label:<div><img src={ethimg} alt="ETH" height="30px" width="30px"/> ETH </div> },
    { value: 'BTC', label:<div><img src={bitcoinimg} alt="BTC" height="30px" width="30px"/> BTC </div> },
    { value: 'PAYR', label:<div><img src={payrimg} alt="PAYR" height="30px" width="30px"/> PAYR</div> },
    { value: 'USDT', label:<div><img src={usdimg} alt="USDT" height="30px" width="30px"/> USDT</div> },
  ];
  const [pool, setPool] = useState(props.CurrencyType);
  const handlePoolChange = (e) => {
    setPool(e.value);
  }
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
  return (
  <>
      <Modal show={show} onHide={handleClose} className="connectmodal WalletConnectmodal withdraw_popup">
        
    <Card className="deposit_block">
      <h2>{props.title}</h2>
      <Form>                                          
        <Form.Group controlId="Amount">
        <Form.Label>Pool</Form.Label>
        <Select                
          className="pool-select"
          options={options}
          isSearchable={false}
          defaultValue={
            props.CurrencyType==='ETH'?{value: 'ETH', label:<div><img src={ethimg}  alt="ETH" height="30px" width="30px"/> ETH </div> }
            :
            props.CurrencyType==='BTC'?{ value: 'BTC', label:<div><img src={bitcoinimg} alt="BTC"  height="30px" width="30px"/> BTC </div> }
            :
            props.CurrencyType==='PAYR'? { value: 'PAYR', label:<div><img src={payrimg} alt="PYR"  height="30px" width="30px"/> PAYR</div> }
            :
            props.CurrencyType==='USDT'? { value: 'USDT', label:<div><img src={usdimg} alt="USDT"  height="30px" width="30px"/> USDT</div> }
            :
            {value: 'ETH', label:<div><img src={ethimg}  alt="ETH" height="30px" width="30px"/> ETH </div> }
          }
          onChange={handlePoolChange}
        />
        </Form.Group>

        <Form.Group controlId="To">
        <Form.Label>Amount</Form.Label>
        <Form.Control className="text-right" type="text"/>
        <span className="max_value">Max: 2.312</span>
        </Form.Group>
                
        <Card className="deposit_bottom" style={{ backgroundImage: `url(${depositbg})` }}>
        <Table>
          <tbody>
            <tr>
            <td>Current Staked</td>    
            <td><strong>5.747 {pool}</strong></td>
            </tr>
            <tr>
            <td>Total Staked</td>    
            <td><strong>7.345 {pool}</strong></td>
            </tr>
                        
          </tbody>
        </Table>
        <p>Stake your {pool} into pools</p>
        <Card className="modalbutton withdraw_popup_btn">
        <Button variant="primary">
        Stake
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