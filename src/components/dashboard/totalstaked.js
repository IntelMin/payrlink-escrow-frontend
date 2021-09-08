import React from 'react';
import { Card } from 'react-bootstrap';
import asset1 from '../../assets/image/asset1.png';
import asset2 from '../../assets/image/asset2.png';
import asset3 from '../../assets/image/asset3.png';
import asset4 from '../../assets/image/asset4.png';
import { NavLink } from 'react-router-dom';
export default function TotalStaked(){
  return(
    <Card className="myassets totalstaked">
      <h3>Total Staked</h3>
      <p>20000PAYR</p>
      <h3>Staked Pools</h3>
      <Card className="stakedicon">
             <ul>
        <li><img src={asset1} alt="" /></li>
        <li><img src={asset2} alt="" /></li>
        <li><img src={asset3} alt="" /></li>
        <li><img src={asset4} alt="" /></li>
             </ul>    
             </Card>
             <h3>Total Rewards</h3>   
             <p>$ 50,037</p>
             <NavLink className="tablereadmore" to="/staking">View All </NavLink>
      {/* <a href="/#" className="tablereadmore">View All </a> */}
    </Card>
  )
}