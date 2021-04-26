import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import listicon from '../../images/listicon.png';
import gridicon from '../../images/gridicon.png';
import PoolsGrid from './poolsgrid';
import PoolsList from './poolslist';

export default function Pools(){
    const [showGrid, setShowGrid] = useState(true);
    const showhide = (ev, value) =>{
        console.log(value);
        if(value == 1){
            setShowGrid(true)
        } else {
            setShowGrid(false)
        }
    }
return (
    <Card className="myassets pools_main">
        <Row className="pools_header">
        <Col md={6}>
            <h2>Pools</h2>
        </Col>
        <Col md={6}>
        <Card className="pool_style_btn">
            <a href="javascript:void(0)" onClick={(ev => showhide(ev, 2))}><img src={listicon}/></a>
            <a href="javascript:void(0)" onClick={(ev => showhide(ev, 1))}><img src={gridicon}/></a>
        </Card>
         </Col>   
        </Row>    
        { showGrid ? 
        <PoolsGrid/>
        : 
        <PoolsList/>}
    </Card>
)

}