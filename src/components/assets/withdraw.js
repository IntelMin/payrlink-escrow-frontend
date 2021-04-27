import React from 'react';
import { Card, Form, Table, Button, } from 'react-bootstrap';
import Select from 'react-select';
import bluedown from '../../images/bluedown.png';
import depositbg from '../../images/depositbg.png';
import bitcoinimg from '../../images/asset1.png';
import ethimg from '../../images/asset3.png';
import payrimg from '../../images/asset2.png';
import usdimg from '../../images/asset4.png';

export default function WithDraw(){
    const options = [
        { value: 'BTC', label:<div><img src={bitcoinimg} height="30px" width="30px"/>BTC </div> },
        { value: 'ETH', label:<div><img src={ethimg} height="30px" width="30px"/>ETH </div> },
        { value: 'PYR', label:<div><img src={payrimg} height="30px" width="30px"/>PYR</div> },
        { value: 'USD', label:<div><img src={usdimg} height="30px" width="30px"/>USD</div> },
      ];
    return(
        <Card className="deposit_block">
            <h2>Withdraw</h2>
            <Form>            
                                  
                <Form.Group controlId="Amount">
                <Form.Label>Pool</Form.Label>
                <Select                 
                    options={options}
                    defaultValue = {options[0]}
                />
                </Form.Group>

                <Form.Group controlId="To">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" />
                <span className="max_value">Max: 2.2</span>
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
    )
}