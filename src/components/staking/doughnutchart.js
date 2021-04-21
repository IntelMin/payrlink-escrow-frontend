import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Card, Table } from "react-bootstrap";

class  DoughnutChart  extends React.Component {
state = {
  dataDoughnut: {
   
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#868DAC", "#F2A919", "#6297A4"],
        hoverBackgroundColor: [
          "#7482C4",
          "#FEAB09",
          "#488695"
        ]
      }
    ]
  }
}

render() {
    return (
    <Card className="doughchart">
      
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
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
}

export default  DoughnutChart ;