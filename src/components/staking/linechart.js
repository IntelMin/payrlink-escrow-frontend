import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Card } from "react-bootstrap";

class LineChart extends React.Component {
  state = {
    dataLine: {
      labels: ["02/27/2021", "02/28/2021", "02/29/2021", "03/01/2021", "03/02/2021", "03/04/2021"],
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
      datasets: [
        {
          label: " ",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(68, 62, 159, .3)",
          borderColor: "#443E9F",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(255, 255, 255)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 6,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [19000, 8000, 16000, 13000, 16000, 10000]
        }
        
      ]
    }
  };

  render() {
    return (
      <Card className="myassets revenuehistory">
        <h2>Revenue History</h2>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
        </Card>
    );
  }
}

export default LineChart;