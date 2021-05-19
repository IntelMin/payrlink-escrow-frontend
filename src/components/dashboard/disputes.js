import React from 'react';
import { Card, Table } from 'react-bootstrap';
import asset3 from '../../images/asset3.png';
export default function Disputes(){
    return(
        <Card className="myassets activeescrows disputes">
            <h2>Disputes</h2>
            <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Amount</th>
                    <th></th>
                    <th>Votes</th>
                    <th>Credited on</th>
                    <th>Desputed on</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><h3>1</h3></td>    
                    <td className="amounticon"><img src={asset3} alt="amt icon" />
                    <span>
                    <h3>10.5 ETH</h3>
                    <small>Ethereum</small>
                    </span>    
                    </td>
                    <td><span className="buy">Buy</span></td>
                    <td><h3>14/21</h3></td>
                    <td><h4>03/08/2021</h4>
                    <small>03:45PM</small>
                    </td>
                    <td><h4>03/19/2021</h4>
                    <small>10:10AM</small>
                    </td>
                    </tr>
                </tbody>
            </Table>
            <button className="tablereadmore">Read More </button>
            {/* <a href="/dashboard#" className="tablereadmore">Read More  </a> */}
        </Card>
    )
}