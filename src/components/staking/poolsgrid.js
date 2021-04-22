import React from 'react';
import { Card, Col, Row, Form, Table } from 'react-bootstrap';
import asset1 from '../../images/asset1.png';
import asset2 from '../../images/asset2.png';
import asset3 from '../../images/asset3.png';
import asset4 from '../../images/asset4.png';
import arrowdown from '../../images/arrowdown.png';


export default function PoolsGrid(){
    return(
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
    <Form.Control as="select" custom style={{ backgroundImage: `url(${arrowdown})` }}>
    <option>Stake</option>
      <option>Stake 1</option>
      <option>Stake 2</option>
      <option>Stake 3</option>
      <option>Stake 4</option>
    </Form.Control>
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
    <Form.Control as="select" custom style={{ backgroundImage: `url(${arrowdown})` }}>
    <option>Stake</option>
      <option>Stake 1</option>
      <option>Stake 2</option>
      <option>Stake 3</option>
      <option>Stake 4</option>
    </Form.Control>
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
    <Form.Control as="select" custom style={{ backgroundImage: `url(${arrowdown})` }}>
    <option>Stake</option>
      <option>Stake 1</option>
      <option>Stake 2</option>
      <option>Stake 3</option>
      <option>Stake 4</option>
    </Form.Control>
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
    <Form.Control as="select" custom style={{ backgroundImage: `url(${arrowdown})` }}>
    <option>Stake</option>
      <option>Stake 1</option>
      <option>Stake 2</option>
      <option>Stake 3</option>
      <option>Stake 4</option>
    </Form.Control>
  </Form.Group>
</Form>
                </Card>    
            </Col>
        </Row>
    )
}