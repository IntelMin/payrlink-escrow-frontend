import React from 'react';
import { Card, Table } from 'react-bootstrap';
import asset1 from '../../images/asset1.png';
import asset2 from '../../images/asset2.png';
import asset3 from '../../images/asset3.png';
import asset4 from '../../images/asset4.png';
export default function TotalStaked(){
    return(
        <Card className="myassets totalstaked">
            <h2>Active Escrows</h2>
            <h4>20000PAYR</h4>
            <h3>Staked Pools</h3>
            <Card className="stakedicon">
             <ul>
                <li><img src={asset1}/></li>
                <li><img src={asset2}/></li>
                <li><img src={asset3}/></li>
                <li><img src={asset4}/></li>
             </ul>    
             </Card>
             <h3>Total Rewards</h3>   
             <p>$ 50,037</p>
            <a href="#" className="tablereadmore">Read More </a>
        </Card>
    )
}