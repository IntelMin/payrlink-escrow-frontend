import React from 'react';
import { Card, Table } from 'react-bootstrap';
import asset3 from '../../assets/image/asset3.png';
import { NavLink } from 'react-router-dom';
export default function ActiveEscrows(){
  return(
    <Card className="myassets activeescrows">
      <h2>Active Escrows</h2>
      <Table>
        <thead>
          <tr>
          <th>No.</th>
          <th>Amount</th>
          <th></th>
          <th>To/From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><h3>1</h3></td>    
          <td className="asset-coin"><img src={asset3} alt="Amt Icon"/>
          <span>
          <h3>10.5 ETH</h3>
          <small>Ethereum</small>
          </span>    
          </td>
          <td><span className="buy">Buy</span></td>
          <td><p>0x13*****58</p></td>
          </tr>
          <tr>
          <td><h3>2</h3></td>    
          <td className="asset-coin"><img src={asset3} alt="Amt Icon"/>
          <span>
          <h3>15.2 USDT</h3>
          <small>US Dollar</small>
          </span>    
          </td>
          <td><span className="sell">SELL</span></td>
          <td><p>0x45*****97</p></td>
          </tr>
                    
        </tbody>
      </Table>
      <NavLink className="tablereadmore" to="/transaction">View All </NavLink>
      {/* <a href="/#" className="tablereadmore">View All </a> */}
    </Card>
  )
}