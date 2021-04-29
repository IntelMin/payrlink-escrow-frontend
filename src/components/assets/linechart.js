import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Card } from "react-bootstrap";

class LineChart extends React.Component {
  state = {
    dataLine: {
      datasets: [
        {
          label: "",
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
          data: ['10', '12', '15', '14', '9', '11']
        }
        
      ],
      options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
              grid: {
                drawBorder: false,
              }
            },
          }
      }
    }
  };

  render() {
    return (
    
        <Line data={this.state.dataLine} options={this.state.dataLine.options} />
    );
  }
}

export default LineChart;