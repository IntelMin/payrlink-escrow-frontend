import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import listicon from '../../images/listicon.png';
import gridicon from '../../images/gridicon.png';
import PoolsGrid from './poolsgrid';
import PoolsList from './poolslist';

export default function Pools(){
return (
    <Card className="myassets">
        <Row>
        <Col md={6}>
            <h2>Pools</h2>
        </Col>
        <Col md={6}>
        <Card className="pool_style_btn">
            <a href="#"><img src={listicon}/></a>
            <a href="#"><img src={gridicon}/></a>
        </Card>
         </Col>   
        </Row>    
        <PoolsGrid/>
        <PoolsList/>
    </Card>
)

}