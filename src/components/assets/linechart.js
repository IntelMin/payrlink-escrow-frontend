import React from "react";
import { Chart } from "react-google-charts";
class LineChart1 extends React.Component {
  
  render() {
    return (
      <Chart
  width={'150px'}
  height={'50px'}
  chartType="LineChart"
  data={[
    ['ammount', 'currency'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
    hAxis: { 
      baselineColor: 'none',
      gridlineColor: 'none',
      textPosition: 'none'

  },
    vAxis: {
      baselineColor: 'none',
      gridlineColor: 'none',
      textPosition: 'none'
    },
    backgroundColor:'none',
    showAxisLine: false,
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    );
  }
}


class LineChart2 extends React.Component {
  
  render() {
    return (
      <Chart
  width={'150px'}
  height={'50px'}
  chartType="LineChart"
  data={[
    ['ammount', 'currency'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
    hAxis: { 
      // textPosition: 'none',
      // gridlines: {
      //   color: 'transparent'
    // },
        baselineColor: 'none',
        gridlineColor: 'none',
        textPosition: 'none'


  },
    vAxis: {
    //   textPosition: 'none',
    //   gridlines: {
    //     color: 'transparent'
    // }
        baselineColor: 'none',
        gridlineColor: 'none',
        textPosition: 'none'
    },
    backgroundColor:'none',
    showAxisLine: false,
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    );
  }
}

export {LineChart1,LineChart2};