import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import DoughnutChart from './doughnutchart';
import asset1 from '../../assets/image/asset1.png';
import asset3 from '../../assets/image/asset3.png';
import asset4 from '../../assets/image/asset4.png';

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
            <span className="total_revenue_date">
                <label>Since</label> 02/27/2021
            </span>
            <span className="total_revenue_pools">
                <label>Pools Staked</label> 3
                <ul>
                <li><img src={asset1} alt="" /></li>
                <li><img src={asset3} alt="" /></li>
                <li><img src={asset4} alt="" /></li>
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