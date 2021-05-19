import React from 'react';
import { Card, Form, Table, Dropdown, DropdownButton  } from 'react-bootstrap';
import asset1 from '../../images/asset1.png';
import asset2 from '../../images/asset2.png';
import asset3 from '../../images/asset3.png';
import asset4 from '../../images/asset4.png';

import bitcoinimg from '../../images/asset1.png';
import ethimg from '../../images/asset3.png';
import payrimg from '../../images/asset2.png';
import usdimg from '../../images/asset4.png';
import {WithdrawModal,StakeModal} from './modals';

export default function PoolsList(props){
    return(
        <>
        {
            props.stacks.Eth==="Stake"?<StakeModal title="Stake" Stacks={props.stacks} setStacks={props.setStacks} CurrencyType="ETH" img={ethimg}/>
            :
            props.stacks.Eth==="Withdraw"? <WithdrawModal title="Withdraw" Stacks={props.stacks} setStacks={props.setStacks} CurrencyType="ETH"/>
            :
            props.stacks.Usdt==="Stake"? <StakeModal title="Stake" Stacks={props.stacks} setStacks={props.setStacks} CurrencyType="USDT" img={usdimg}/>
            :
            props.stacks.Usdt==="Withdraw"? <WithdrawModal title="Withdraw" Stacks={props.stacks} setStacks={props.setStacks} CurrencyType="USDT"/>
            :
            props.stacks.Payr==="Stake"? <StakeModal title="Stake" Stacks={props.stacks} setStacks={props.setStacks} CurrencyType="PYR" img={payrimg}/>
            :
            props.stacks.Payr==="Withdraw"? <WithdrawModal title="Withdraw" Stacks={props.stacks} setStacks={props.setStacks} CurrencyType="PYR"/>
            :
            props.stacks.Btc==="Stake"? <StakeModal title="Stake" Stacks={props.stacks} setStacks={props.setStacks} CurrencyType="BTC" img={bitcoinimg}/>
            :
            props.stacks.Btc==="Withdraw"? <WithdrawModal title="Withdraw" Stacks={props.stacks} setStacks={props.setStacks} CurrencyType="BTC"/>
            :
            ""
        }
        <Card className="pools_list_block">
            <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Pools</th>
                    <th>Staked</th>
                    <th>Total Revenue</th>
                    <th>Since</th>
                    <th>Revenue Price</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><h3>1</h3></td>    
                    <td className="amounticon"><img src={asset3} alt="" />
                    <span>
                    <h3>10.5 ETH</h3>
                    <small>Ethereum</small>
                    </span>    
                    </td>
                    <td>50000 PAYR</td>
                    <td>30 ETH</td>
                    <td>03/03/2021</td>
                    <td>$ 7200</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                        <DropdownButton
                            alignRight
                            title= "Stake"
                            id="dropdown-menu-align-right"
                            onSelect={props.SetStackEth}
                        >
                            <Dropdown.Item eventKey="Stake">Stake</Dropdown.Item>        
                            <Dropdown.Item eventKey="Withdraw">Withdraw</Dropdown.Item>
                            <Dropdown.Item eventKey="ETH">ETH</Dropdown.Item>
                        </DropdownButton>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>

                    <tr>
                    <td><h3>2</h3></td>    
                    <td className="amounticon"><img src={asset4} alt="" />
                    <span>
                    <h3>USDT</h3>
                    <small>US Dollar</small>
                    </span>    
                    </td>
                    <td>50000 PAYR</td>
                    <td>30 ETH</td>
                    <td>03/03/2021</td>
                    <td>$ 7200</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                        <DropdownButton
                            alignRight
                            title="Stake"
                            id="dropdown-menu-align-right"
                            onSelect={props.SetStackUsdt}
                        >
                            <Dropdown.Item eventKey="Stake">Stake</Dropdown.Item>        
                            <Dropdown.Item eventKey="Withdraw">Withdraw</Dropdown.Item>
                            <Dropdown.Item eventKey="USDT">USDT</Dropdown.Item>
                        </DropdownButton>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>

                    <tr>
                    <td><h3>3</h3></td>    
                    <td className="amounticon"><img src={asset2} alt="" />
                    <span>
                    <h3>PAYR</h3>
                    <small>Payrlink</small>
                    </span>    
                    </td>
                    <td>50000 PAYR</td>
                    <td>30 ETH</td>
                    <td>03/03/2021</td>
                    <td>$ 7200</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                        <DropdownButton
                            alignRight
                            title="Stake"
                            id="dropdown-menu-align-right"
                            onSelect={props.SetStackPayr}
                        >
                            <Dropdown.Item eventKey="Stake">Stake</Dropdown.Item>        
                            <Dropdown.Item eventKey="Withdraw">Withdraw</Dropdown.Item>
                            <Dropdown.Item eventKey="PAYR">PAYR</Dropdown.Item>
                        </DropdownButton>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>

                    <tr>
                    <td><h3>4</h3></td>    
                    <td className="amounticon"><img src={asset1} alt="" />
                    <span>
                    <h3>BTC</h3>
                    <small>Bitcoin</small>
                    </span>    
                    </td>
                    <td>50000 PAYR</td>
                    <td>30 ETH</td>
                    <td>03/03/2021</td>
                    <td>$ 7200</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                        <DropdownButton
                            alignRight
                            title= "Stake"
                            id="dropdown-menu-align-right"
                            onSelect={props.SetStackBtc}
                        >
                            <Dropdown.Item eventKey="Stake">Stake</Dropdown.Item>        
                            <Dropdown.Item eventKey="Withdraw">Withdraw</Dropdown.Item>
                            <Dropdown.Item eventKey="BTC">BTC</Dropdown.Item>
                        </DropdownButton>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>
                    
                </tbody>
            </Table>

        </Card>
        </>
    )
}