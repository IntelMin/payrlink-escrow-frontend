import React from 'react';
import { Card, Table, Form, Dropdown  } from 'react-bootstrap';
import asset1 from '../../images/asset1.png';
import asset2 from '../../images/asset2.png';
import asset3 from '../../images/asset3.png';
import asset4 from '../../images/asset4.png';
import downwhite from '../../images/downwhite.png';
import charticon1 from '../../images/charticon1.png';
import charticon2 from '../../images/charticon2.png';
import {LineChart1,LineChart2} from './linechart'
export default function AvailableAssets() {
    return(
        <Card className="myassets availableassets">
            <h2>Available assets</h2>
            <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Pools</th>
                    <th>Amount</th>
                    <th>Last Deposit</th>
                    <th>Last Withdraw</th>
                    <th>Chart (24hr)</th>
                    <th>Value</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>    
                    <td className="amounticon"><img src={asset3}/>
                    <span>
                    <h3>10.5 ETH</h3>
                    <small>Ethereum</small>
                    </span>    
                    </td>
                    <td>25.12</td>
                    <td><h4>03/08/2021</h4><small>03:45PM</small></td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td class="chart_icon"><LineChart1/></td>
                    <td>$ 50,000</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom style={{ backgroundImage: `url(${downwhite})` }}>
                            <option>Deposit</option>
                            <option>Withdraw</option>
                            <option>Stake</option>
                            <option>Pool Detail</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>

                    <tr>
                    <td>2</td>    
                    <td className="amounticon"><img src={asset4}/>
                    <span>
                    <h3>10.5 ETH</h3>
                    <small>Ethereum</small>
                    </span>    
                    </td>
                    <td>25.12</td>
                    <td><h4>03/08/2021</h4><small>03:45PM</small></td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td class="chart_icon"><LineChart2/></td>
                    <td>$ 50,000</td>
                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            {/* <Form.Control as="select" custom style={{ backgroundImage: `url(${downwhite})` }}>
                            <option>Deposit</option>
                            <option>Withdraw</option>
                            <option>Stake</option>
                            <option>Pool Detail</option>
                            </Form.Control> */}
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item >Action</Dropdown.Item>
                                    <Dropdown.Item >Another action</Dropdown.Item>
                                    <Dropdown.Item> Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>
                    
                </tbody>
            </Table>
        </Card>

    )

}