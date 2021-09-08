import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function TransactionHistory(){
  return(
    <Card className="myassets transactionhistory">
      <h2>Transaction History</h2>
      <Table>
        <thead>
          <tr>
          <th>Date/Time</th>
          <th>Amount</th>
          <th>To/From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
          <h4>08/04/2021</h4>
          <small>03:45PM</small>
          </td>
          <td><h3>30 ETH</h3></td>
          <td><p>0x13*****58</p></td>
          </tr>

          <tr>
          <td>
          <h4>09/04/2021</h4>
          <small>12:05PM</small>
          </td>
          <td><h3>10 ETH</h3></td>
          <td><p>0x45*****23</p></td>
          </tr>

          <tr>
          <td>
          <h4>08/04/2021</h4>
          <small>03:45PM</small>
          </td>
          <td><h3>30 ETH</h3></td>
          <td><p>0x13*****58</p></td>
          </tr>

          <tr>
          <td>
          <h4>09/04/2021</h4>
          <small>12:05PM</small>
          </td>
          <td><h3>10 ETH</h3></td>
          <td><p>0x45*****23</p></td>
          </tr>

          <tr>
          <td>
          <h4>08/04/2021</h4>
          <small>03:45PM</small>
          </td>
          <td><h3>30 ETH</h3></td>
          <td><p>0x13*****58</p></td>
          </tr>

          <tr>
          <td>
          <h4>09/04/2021</h4>
          <small>12:05PM</small>
          </td>
          <td><h3>10 ETH</h3></td>
          <td><p>0x45*****23</p></td>
          </tr>

          <tr>
          <td>
          <h4>08/04/2021</h4>
          <small>03:45PM</small>
          </td>
          <td><h3>30 ETH</h3></td>
          <td><p>0x13*****58</p></td>
          </tr>

                    
        </tbody>
      </Table>
      <NavLink className="tablereadmore" to="/transaction">View All </NavLink>
      {/* <a href="/#" className="tablereadmore">View All  </a> */}
    </Card>
  )
}