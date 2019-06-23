import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../../node_modules/react-vis/dist/style.css';
import API from "../utils/API";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend
} from 'react-vis';

class Charts extends Component {


  state = {
    data3: "",
    data4: ""
  };


  componentDidMount = () => {
    let totalIncome = 0;
    API.getIncome()
      .then(function (response) {
        console.log(response.data);

        for(let i=0;i<response.data.income.length;i++){
          totalIncome+=response.data.income[i].valueIncome


        }
console.log("totalincome",+ totalIncome);
       
        
      }

      )

      .catch(err => console.log(err));
  };



  render() {
    const data1 = [
      { x: 'Needs', y: 50 },


      { x: 'Wants', y: 30 },


      { x: 'Savings', y: 20 }

    ];

    const data2 = [

      { x: 0, y: 4 },

      { x: 3, y: 7 },


      { x: 6, y: 2 }
    ];
    return (
      <div className="App">
        <XYPlot margin={{ bottom: 70 }} xType="ordinal" height={300} width={400}>
          <DiscreteColorLegend
            style={{ position: 'absolute', left: '300px', top: '10px' }}
            orientation="vertical"
            items={[
              {
                title: 'GA Average',
                color: 'red'
              },
              {
                title: 'You',
                color: 'yellow'
              }
            ]}
          />

          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <VerticalBarSeries data={data1} color="red" />
          <VerticalBarSeries data={data2} color="yellow" />
        </XYPlot>
      </div>
    );
  }
}

export default withRouter(Charts);
