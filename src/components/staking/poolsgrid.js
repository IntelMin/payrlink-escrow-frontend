import React, {useState} from 'react';
import { Card, Col, Row, Form, Table, Dropdown, DropdownButton } from 'react-bootstrap';
import asset1 from '../../images/asset1.png';
import asset2 from '../../images/asset2.png';
import asset3 from '../../images/asset3.png';
import asset4 from '../../images/asset4.png';
import depositbg from '../../images/depositbg.png';
import bitcoinimg from '../../images/asset1.png';
import ethimg from '../../images/asset3.png';
import payrimg from '../../images/asset2.png';
import usdimg from '../../images/asset4.png';
import WithdrawEth from './modals';

export default function PoolsGrid(props){
    const[status,setStatus]=useState(true);
    const options = [
        { value: 'BTC', label:<div><img src={bitcoinimg} height="30px" width="30px"/> BTC </div> },
        { value: 'ETH', label:<div><img src={ethimg} height="30px" width="30px"/> ETH </div> },
        { value: 'PYR', label:<div><img src={payrimg} height="30px" width="30px"/> PYR</div> },
        { value: 'USD', label:<div><img src={usdimg} height="30px" width="30px"/> USD</div> },
      ];
    return(
        <>
        <WithdrawEth/>
        <Row className="poolsgrid">
            <Col md={4}>
                <Card className="pools_grid_block">
                <Card className="pools_grid_block_header">
                <img src={asset3}/>
                <span>
                <h3>ETH</h3>
                <small>Ethereum</small>
                 </span>
                </Card>  
                <Table>
                <tbody>
                    <tr>
                    <td>Staked</td>    
                    <td><strong>50000 PAYR</strong></td>
                    </tr>
                    <tr>
                    <td>Total Revenue</td>    
                    <td><strong>30 ETH</strong></td>
                    </tr>
                    <tr>
                    <td>Since</td>    
                    <td><strong>03/03/2021</strong></td>
                    </tr>
                    <tr>
                    <td>Revenue Price</td>    
                    <td><strong>$ 7200</strong></td>
                    </tr>
                    
                </tbody>
            </Table>  
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <DropdownButton
                        alignRight
                        title={props.stacks.Eth}
                        id="dropdown-menu-align-right"
                        onSelect={props.SetStackEth}
                    >
                    <Dropdown.Item eventKey="Stake">Stake</Dropdown.Item>        
                    <Dropdown.Item eventKey="Withdraw">Withdraw</Dropdown.Item>
                    <Dropdown.Item eventKey="ETH">ETH</Dropdown.Item>
                </DropdownButton>
                </Form.Group>
            </Form>
                </Card>    
            </Col>

            <Col md={4}>
                <Card className="pools_grid_block">
                <Card className="pools_grid_block_header">
                <img src={asset4}/>
                <span>
                <h3>USDT</h3>
                <small>US Dollar</small>
                 </span>
                </Card>  
                <Table>
                <tbody>
                    <tr>
                    <td>Staked</td>    
                    <td><strong>50000 PAYR</strong></td>
                    </tr>
                    <tr>
                    <td>Total Revenue</td>    
                    <td><strong>30 ETH</strong></td>
                    </tr>
                    <tr>
                    <td>Since</td>    
                    <td><strong>03/03/2021</strong></td>
                    </tr>
                    <tr>
                    <td>Revenue Price</td>    
                    <td><strong>$ 7200</strong></td>
                    </tr>
                    
                </tbody>
            </Table>  
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <DropdownButton
                    alignRight
                    title={props.stacks.Usdt}
                    id="dropdown-menu-align-right"
                    onSelect={props.SetStackUsdt}
                >
                    <Dropdown.Item eventKey="Stake">Stake</Dropdown.Item>        
                    <Dropdown.Item eventKey="Withdraw">Withdraw</Dropdown.Item>
                    <Dropdown.Item eventKey="USDT">USDT</Dropdown.Item>
                </DropdownButton>
                </Form.Group>
            </Form>
            </Card>    
            </Col>   

            <Col md={4}>
                <Card className="pools_grid_block">
                <Card className="pools_grid_block_header">
                <img src={asset2}/>
                <span>
                <h3>PAYR</h3>
                <small>Payrlink</small>
                 </span>
                </Card>  
                <Table>
                <tbody>
                    <tr>
                    <td>Staked</td>    
                    <td><strong>50000 PAYR</strong></td>
                    </tr>
                    <tr>
                    <td>Total Revenue</td>    
                    <td><strong>30 ETH</strong></td>
                    </tr>
                    <tr>
                    <td>Since</td>    
                    <td><strong>03/03/2021</strong></td>
                    </tr>
                    <tr>
                    <td>Revenue Price</td>    
                    <td><strong>$ 7200</strong></td>
                    </tr>
                    
                </tbody>
            </Table>  
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <DropdownButton
                        alignRight
                        title={props.stacks.Payr}
                        id="dropdown-menu-align-right"
                        onSelect={props.SetStackPayr}
                    >
                        <Dropdown.Item eventKey="Stake">Stake</Dropdown.Item>        
                        <Dropdown.Item eventKey="Withdraw">Withdraw</Dropdown.Item>
                        <Dropdown.Item eventKey="PAYR">PAYR</Dropdown.Item>
                    </DropdownButton>
                </Form.Group>
            </Form>
                </Card>    
            </Col>

            <Col md={4}>
                <Card className="pools_grid_block">
                <Card className="pools_grid_block_header">
                <img src={asset1}/>
                <span>
                <h3>BTC</h3>
                <small>Bitcoin</small>
                 </span>
                </Card>  
                <Table>
                <tbody>
                    <tr>
                    <td>Staked</td>    
                    <td><strong>50000 PAYR</strong></td>
                    </tr>
                    <tr>
                    <td>Total Revenue</td>    
                    <td><strong>30 ETH</strong></td>
                    </tr>
                    <tr>
                    <td>Since</td>    
                    <td><strong>03/03/2021</strong></td>
                    </tr>
                    <tr>
                    <td>Revenue Price</td>    
                    <td><strong>$ 7200</strong></td>
                    </tr>
                    
                </tbody>
            </Table>  
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <DropdownButton
                        alignRight
                        title={props.stacks.Btc}
                        id="dropdown-menu-align-right"
                        onSelect={props.SetStackBtc}
                    >
                        <Dropdown.Item eventKey="Stake">Stake</Dropdown.Item>        
                        <Dropdown.Item eventKey="Withdraw">Withdraw</Dropdown.Item>
                        <Dropdown.Item eventKey="BTC">BTC</Dropdown.Item>
                    </DropdownButton>
                </Form.Group>
            </Form>
            </Card>    
            </Col>
        </Row>
        </>
    )
}