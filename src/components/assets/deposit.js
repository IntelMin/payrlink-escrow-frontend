import React, {useState} from 'react';
import { Card, Form, Table, Button, Image } from 'react-bootstrap';
import Select from 'react-select';
import bluedown from '../../images/bluedown.png';
import depositbg from '../../images/depositbg.png';
import bitcoinimg from '../../images/asset1.png';
import ethimg from '../../images/asset3.png';
import payrimg from '../../images/asset2.png';
import usdimg from '../../images/asset4.png';

export default function Deposit(){
    
const options = [
    { value: 'BTC', label:<div><img src={bitcoinimg} height="30px" width="30px"/> BTC </div>},
    { value: 'ETH', label:<div><img src={ethimg} height="30px" width="30px"/> ETH </div> },
    { value: 'PYR', label:<div><img src={payrimg} height="30px" width="30px"/> PYR</div> },
    { value: 'USDT', label:<div><img src={usdimg} height="30px" width="30px"/> USD</div> },
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
    return(
        <Card className="deposit_block">
            <h2>Deposit</h2>
            <Form>                
                <Form.Group controlId="Amount">
                <Form.Label>Pool</Form.Label>
                <Select                
                    options={options}
                    defaultValue = {options[0]}
                    isSearchable={false}
                    // styles={colourStyles}
                />
                </Form.Group>

                <Form.Group controlId="To">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" onChange={ChangeAmt} />
                <span className="max_value">Max: {Amount.Amt} </span>
                </Form.Group>
                
                <Card className="deposit_bottom" style={{ backgroundImage: `url(${depositbg})` }}>
                <Table>
                    <tbody>
                        <tr>
                        <td>Current Balance</td>    
                        <td><strong>4.85 ETH</strong></td>
                        </tr>
                        <tr>
                        <td>Total Balance</td>    
                        <td><strong>8.08 ETH</strong></td>
                        </tr>
                        
                    </tbody>
                </Table>
                    <p className="hide_text">.</p>
                <Button variant="primary" type="submit">
                Deposit
                </Button>
                </Card>
            </Form>
        </Card>
    )
}