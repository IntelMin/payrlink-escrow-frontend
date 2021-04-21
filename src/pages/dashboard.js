import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ActiveEscrows from '../components/dashboard/activeescrows';
import DashboardAssets from '../components/dashboard/assets/assets';
import Disputes from '../components/dashboard/disputes';
import TotalStaked from '../components/dashboard/totalstaked';
import TransactionHistory from '../components/dashboard/transactionhistory';

export default function DashboardPage(){
return(
<Container fluid className="dashboardpage">
    <Container>
    <Row>
    <Col md={8}>
    <DashboardAssets/>
        <Row>
        <Col md={8}>   
        <ActiveEscrows/> 
        </Col> 
        <Col md={4}>
        <TotalStaked/>
        </Col> 
        </Row>
       <Disputes/> 
    </Col>    
    <Col md={4}>
    <TransactionHistory/>
     </Col>   
    </Row>    
    </Container>
</Container>

)

}

