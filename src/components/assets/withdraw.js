import React from 'react';
import { Card, Form, Table, Button } from 'react-bootstrap';
import bluedown from '../../images/bluedown.png';
import depositbg from '../../images/depositbg.png';
export default function WithDraw(){
    return(
        <Card className="deposit_block">
            <h2>Withdraw</h2>
            <Form>
                                
                               
                                  
                                    <Form.Group controlId="Amount">
                                    <Form.Label>Pool</Form.Label>
                                    <Form.Control as="select" style={{ backgroundImage: `url(${bluedown})` }}>
                                    <option>ETH</option>
                                    <option>USDT</option>
                                    <option>PAYR</option>
                                    <option>BTC</option>
                                    </Form.Control>
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