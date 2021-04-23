
import React from 'react';
import { Card, Col, Row, Form, Table, Tab, Nav, Pagination } from 'react-bootstrap';
import plusicon from '../../images/plusicon.png';
import downwhite from '../../images/downwhite.png';
export default function TransactionHistory (){
    return(
<Card className="myassets transation_history">
            <h2>Transaction History</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="all">
 
            <Row>
            <Col md={5}>
               <span class="buy">BUY</span>
               <span class="sell">SELL</span>

            </Col>
            <Col md={7}>
            <Nav variant="tabs" defaultActiveKey="all">
  <Nav.Item>
    <Nav.Link eventKey="all">All</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="active">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="pending">Pending</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="dispute">On Dispute</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="canceled">Canceled</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="completed">Completed</Nav.Link>
  </Nav.Item>

</Nav>
            </Col>
              
            </Row>
            
            <Tab.Content>
        <Tab.Pane eventKey="all">
      <Card className="transation_history_table">
      <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th>To/From</th>
                    <th>Created At</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>    
                    <td>BuyCat</td>
                    <td>80 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_active">Active</span></td>
  
                    </tr>

                    <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>

                    </tr>

                   
                    
                </tbody>
            </Table>
      </Card>
        </Tab.Pane>
        <Tab.Pane eventKey="active">
        <Card className="transation_history_table">
      <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th>To/From</th>
                    <th>Created At</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>    
                    <td>BuyCat</td>
                    <td>80 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_active">Active</span></td>
  
                    </tr>

                    <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_active">Active</span></td>

                    </tr>

                   
                    
                </tbody>
            </Table>
      </Card>
        </Tab.Pane>

        <Tab.Pane eventKey="pending">
        <Card className="transation_history_table">
      <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th>To/From</th>
                    <th>Created At</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>    
                    <td>BuyCat</td>
                    <td>80 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_active">Active</span></td>
  
                    </tr>

                    <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>

                    </tr>

                   
                    
                </tbody>
            </Table>
      </Card>
        </Tab.Pane>

        <Tab.Pane eventKey="dispute">
        <Card className="transation_history_table">
      <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th>To/From</th>
                    <th>Created At</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>    
                    <td>BuyCat</td>
                    <td>80 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>
  
                    </tr>

                    <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>

                    </tr>

                   
                    
                </tbody>
            </Table>
      </Card>
        </Tab.Pane>

        <Tab.Pane eventKey="canceled">
        <Card className="transation_history_table">
      <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th>To/From</th>
                    <th>Created At</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>    
                    <td>BuyCat</td>
                    <td>80 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_active">Active</span></td>
  
                    </tr>

                    <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>

                    </tr>

                   
                    
                </tbody>
            </Table>
      </Card>
        </Tab.Pane>

        <Tab.Pane eventKey="completed">
        <Card className="transation_history_table">
      <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th>To/From</th>
                    <th>Created At</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>    
                    <td>BuyCat</td>
                    <td>80 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_active">Active</span></td>
  
                    </tr>

                    <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>

                    </tr>

                   
                    
                </tbody>
            </Table>
      </Card>
        </Tab.Pane>
      </Tab.Content>
      </Tab.Container>

      <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  of
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
</Card>            
    )
}