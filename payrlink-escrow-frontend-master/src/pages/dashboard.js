import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardAssets from '../components/dashboard/assets/assets';

export default function DashboardPage(){
return(
<Container fluid className="dashboardpage">
    <Container>
    <Row>
    <Col md={8}>
    <DashboardAssets/>
    </Col>    
    <Col md={4}>

     </Col>   
    </Row>    
    </Container>
</Container>

)

}

