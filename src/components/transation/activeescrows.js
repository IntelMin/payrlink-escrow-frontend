import React,{useState} from 'react';
import {Button, Card, Col, Row, Form, Table } from 'react-bootstrap';
import plusicon from '../../images/plusicon.png';
import downwhite from '../../images/downwhite.png';
import CreateNew from '../modal/createnew';

export default function ActiveEscrows (){
    const[showcreatenew,setShowCraeateNew]=useState(false)
    const func1=()=>{
        setShowCraeateNew(true)
    }
    return(
        <>
        {
            showcreatenew===true?<CreateNew status={showcreatenew} setStatus={setShowCraeateNew}/>:""
        }
    <Card className="myassets transation_active_escrows">
        
            <Row>
            <Col md={6}>
                <h2>Active Escrows</h2>
            </Col>
            <Col md={6}>
                <Button className="create_new" onClick={func1}>Create New <img src={plusicon}/></Button>
            </Col>
              
            </Row>

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
                    <th>Actions</th>
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

                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom style={{ backgroundImage: `url(${downwhite})` }}>
                            <option>Select</option>
                            <option>Select 1</option>
                            <option>Select 2</option>
                            <option>Select 3</option>
                            <option>Select 4</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                     </td>   
                    </tr>

                    <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>

                    <td>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom style={{ backgroundImage: `url(${downwhite})` }}>
                            <option>Select</option>
                            <option>Select 1</option>
                            <option>Select 2</option>
                            <option>Select 3</option>
                            <option>Select 4</option>
                            </Form.Control>
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