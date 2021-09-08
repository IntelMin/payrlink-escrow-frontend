import React from 'react';
import { Card, Table } from 'react-bootstrap';
import asset1 from '../../assets/image/asset1.png';
import asset2 from '../../assets/image/asset2.png';
import asset3 from '../../assets/image/asset3.png';
import asset4 from '../../assets/image/asset4.png';
import { NavLink } from 'react-router-dom';
const DashboardAssets = () => {
  return(
    <Card className="myassets">
      <h2>My Assets</h2>
      <Table>
        <thead>
          <tr>
          <th>Pools</th>
          <th></th>
          <th>Amount</th>
          <th>Revenue</th>
          <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><img src={asset1} alt=""/></td>
          <td>
          <h3>BTC</h3>
          <small>Bitcoin</small>
          </td>
          <td><h3>10</h3></td>
          <td><p className="red">-4.20%</p></td>
          <td><h3>$ 611,690</h3></td>
          </tr>
          <tr>
          <td><img src={asset2} alt=""/></td>
          <td>
          <h3>PAYR</h3>
          <small>Payrlink</small>
          </td>
          <td><h3>2500</h3></td>
          <td><p className="green">+2.00%</p></td>
          <td><h3>$ 2,500</h3></td>
          </tr>
          <tr>
          <td><img src={asset3} alt=""/></td>
          <td>
          <h3>ETH</h3>
          <small>Ethereum</small>
          </td>
          <td><h3>20</h3></td>
          <td><p className="green">+5.30%</p></td>
          <td><h3>$ 60,000</h3></td>
          </tr>
          <tr>
          <td><img src={asset4} alt=""/></td>
          <td>
          <h3>USDT</h3>
          <small>US Dollar</small>
          </td>
          <td><h3>20000</h3></td>
          <td><p className="red">-1.06%</p></td>
          <td><h3>$ 20,000</h3></td>
          </tr>
        </tbody>
      </Table>
      
      <NavLink className="tablereadmore" to="/assets">View All </NavLink>
      {/* <a href="/#" className="tablereadmore">View All  </a> */}
    </Card>
  )
}

export default DashboardAssets;