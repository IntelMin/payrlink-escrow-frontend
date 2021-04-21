import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import DoughnutChart from './doughnutchart';
import asset1 from '../../images/asset1.png';
import asset3 from '../../images/asset3.png';
import asset4 from '../../images/asset4.png';

export default function TotalRevenue() {
    return(
        <Card className="myassets totalrevenue">
            <Row>
            <Col md={6}>
            <Card className="total_revenue_detail">
            <h2>Total Revenue</h2>
            <h3>$ 73803.27</h3>
            <h2>Total Staked</h2>
            <h3>89000 PAYR</h3>
            <span class="total_revenue_date">
                <label>Since</label> 02/27/2021
            </span>
            <span class="total_revenue_pools">
                <label>Pools Staked</label> 3
                <ul>
                <li><img src={asset1}/></li>
                <li><img src={asset3}/></li>
                <li><img src={asset4}/></li>
             </ul>     
            </span>   
            </Card>    
            </Col>
            <Col md={6}>
             <DoughnutChart/>
            </Col>

            </Row>    
        </Card>    
    )

}