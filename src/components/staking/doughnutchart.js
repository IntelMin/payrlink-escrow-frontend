import React from 'react';
import { Card, Table } from "react-bootstrap"
import {Doughnut} from 'react-chartjs-2';


const data = {
  labels: ['ETH','DAI','USDT'],
  datasets: [
    {
      data: [30, 40, 30],
      backgroundColor: ["#868DAC", "#F2A919", "#6297A4"],
      hoverBackgroundColor: [
        "#7482C4",
        "#FEAB09",
        "#488695"
      ],
    }
  ],
};
// Set Position of the labels but it is not working
const options = {
  datalabels: {
    display: true,
    align: "bottom"
  }
};

function DoughnutChart() {
  return (
    <Card className="doughchart">
      <Doughnut data={data} options={options}/>
        <Table>
        <tbody>
            <tr>
            <td><span className="ethpool"></span><strong>ETH</strong> pool</td>    
            <td>50000 PAYR</td>
            </tr>
            <tr>
            <td><span className="usdtpool"></span><strong>USDT</strong> pool</td>    
            <td>50000 PAYR</td>
            </tr>
            <tr>
            <td><span className="daipool"></span><strong>DAI</strong> pool</td>    
            <td>50000 PAYR</td>
            </tr>
            
        </tbody>
        </Table>
    </Card>
  );
}
export default DoughnutChart;