import React from 'react';
import { Card, Table } from "react-bootstrap"
import { Chart } from "react-google-charts";

class DoughnutChart extends React.Component {
  // state={
  //   dataLine:{
  //     labels: ['ETH','DAI','USDT'],
  //     datasets: [
  //       {
  //         data: [30, 40, 30],
  //         backgroundColor: ["#868DAC", "#F2A919", "#6297A4"],
  //         hoverBackgroundColor: [
  //           "#7482C4",
  //           "#FEAB09",
  //           "#488695"
  //         ],
  //       },
  //     ],
  //     options: {
  //       plugins: {
  //           legend: {
  //             display: false,
  //           },
  //           labels: {
  //             render: 'percentage',
  //             fontColor: ['green', 'white', 'red'],
  //             precision: 2
  //           }
  //       },
  //     }
  //   }
  // }
  render(){
    return (
      <Card className="doughchart">
        {/* <Doughnut data={this.state.dataLine} options={this.state.dataLine.options}/> */}
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="PieChart"
          data={[
            ['Task', 'Hours per Day'],
            ['ETH', 5000],
            ['DAI', 3000],
            ['USDT', 3500]
          ]}

          options={{
            title: '',
            legend:'none',
            pieHole: 0.4,
            colors:[{color:'#6297A4'},{color:'#F2A919'},{color:'#868DAC'}],
            backgroundColor: 'none',
            animation:{
              duration: 1000,
              startup: 'true',
            },
          }}
          rootProps={{ 'data-testid': '3' }}
        />
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
export default DoughnutChart;