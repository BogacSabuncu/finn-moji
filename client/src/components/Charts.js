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
import UserContext from "../context/UserContext.js";

class Charts extends Component {
  static contextType = UserContext;


  calculate = (expenses, income) => {
    let needs = 0;
    let wants = 0;
    let savings = 0;
    let totalIncome=0;

    expenses.forEach(expense => {
      const needsCategories = ["Housing", "Healthcare", "Food", "Insurance"];
      const savingsCategories = ["Savings"];
      if(needsCategories.includes(expense.category)){
        needs += expense.value;
      }else if(savingsCategories.includes(expense.category)){
        savings += expense.value;
      }else{
        wants += expense.value;
      }
    });

    income.forEach(element => {
      totalIncome += element.valueIncome;
    });

    console.log("needs", needs)
    console.log("wants ", wants)
    console.log("savings ", savings)

    needs = Math.floor(needs * 100 / totalIncome);
    wants = Math.floor(wants * 100 / totalIncome);
    savings = Math.floor(savings * 100 / totalIncome);
    console.log("after percent conversion")
    console.log("needs", needs)
    console.log("wants ", wants)
    console.log("savings ", savings)

    let userGraphData = [
      { x: 'Needs', y: `${needs}` },
      { x: 'Wants', y: `${wants}` },
      { x: 'Savings', y: `${savings}` }
    ];

    return userGraphData;
  }

  render() {
    const gaData = [
      { x: 'Needs', y: 50 },
      { x: 'Wants', y: 30 },
      { x: 'Savings', y: 20 }
    ];

    const {expenses, income} = this.context.userObj || { expenses: [], income: [] };
    const userGraphData = this.calculate(expenses, income);

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
                color: 'purple'
              }
            ]}
          />

          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <VerticalBarSeries data={gaData} color="red" />
          <VerticalBarSeries data={userGraphData} color="purple" />
        </XYPlot>
      </div>
    );
  }
}

export default withRouter(Charts);
