import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../../node_modules/react-vis/dist/style.css';
import API from "../utils/API";
import {
  XYPlot,
  XAxis,
  YAxis,
  // VerticalGridLines,
  // HorizontalGridLines,
  VerticalBarSeries,
  // VerticalBarSeriesCanvas,
  DiscreteColorLegend
} from 'react-vis';

class Charts extends Component {


  state = {
    data3: "",
    data4:  ""}


  componentDidMount = () => {
    let totalIncome = 0;
    let bills = 0;
    let savings = 0;
    API.getIncome()
      .then((response)=>  {
        console.log(response.data);
        for (let i = 0; i < response.data.income.length; i++) {
          
          totalIncome += response.data.income[i].valueIncome
        }
        console.log("totalincome", + totalIncome);
        API.getExpenses()
        .then((response) => {
          console.log(response.data);
  
          for (let i = 0; i < response.data.expenses.length; i++) {

            if (response.data.expenses[i].category !== "Savings") { bills += response.data.expenses[i].value; }
            else { savings += response.data.expenses[i].value; }



            //bills += response.data.expenses[i].value
  
  
          }
          console.log("totalexpenses", + bills);
  
   this.calculate(totalIncome, bills,savings);
        }).catch(err => console.log(err));
  
        


      })

      .catch(err => console.log(err));

    // API.getExpenses()
    //   .then(function (response) {
    //     console.log(response.data);

    //     for (let i = 0; i < response.data.expenses.length; i++) {
    //       bills += response.data.expenses[i].value


    //     }
    //     console.log("totalexpenses", + bills);


    //   })

    //   .catch(err => console.log(err));
   

  };

  calculate = (totalIncome, bills, savings) => {
    let needs = Math.floor(bills * 100 / totalIncome);
    let savings2 =  Math.floor(savings * 100 / totalIncome);
    let disposable = 100 - needs - savings2;
    
    console.log("needs",needs)
    console.log("disposable",+disposable)
    console.log("savings",+savings2)
    let data4new= [
      { x: 'Needs', y: `${needs}` },


      { x: 'Wants', y: `${disposable}`},


      { x: 'Savings', y: `${savings2}` }
    ]
  ;
    this.setState({
      data4:data4new
    }, () => {
      console.log(this.state.data4)
    })

  }

  render() {
    const data1 = [
      { x: 'Needs', y: 50 },


      { x: 'Wants', y: 30 },


      { x: 'Savings', y: 20 }

    ];
    const data2=this.state.data4;
  
    return (

      
      <div className="App">
        <XYPlot margin={{ bottom: 70 }} xType="ordinal" height={300} width={400} yDomain={[0, 100]}>
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
          <YAxis/>
          <VerticalBarSeries data={data1} color="red" />
          <VerticalBarSeries data={data2} color="yellow" />
        </XYPlot>
      </div>
    );
  }
}

export default withRouter(Charts);
