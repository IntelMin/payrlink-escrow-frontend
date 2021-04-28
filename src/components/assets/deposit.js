import React from 'react';
import { Card, Form, Table, Button } from 'react-bootstrap';
import bluedown from '../../images/bluedown.png';
import depositbg from '../../images/depositbg.png';
export default function Deposit(){
    return(
        <Card className="deposit_block">
            <h2>Deposit</h2>
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