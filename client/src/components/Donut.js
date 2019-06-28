import React, { Component } from "react";
import UserContext from "../context/UserContext.js";
import "../../node_modules/react-vis/dist/style.css";
import { RadialChart, Hint } from "react-vis";

export default class DonutChart extends Component {
  static contextType = UserContext;
  state = {
    value: false
  };

  calculate_theta = expenses => {
    let data = [];
    expenses.forEach(expense => {
      let expenseObj = {
        label: expense.name,
        subLabel: expense.category,
        theta: expense.value
      };

      data.push(expenseObj);
    });
    return data;
  };

  setValue = v => {
    let value = {
      Name: v.label,
      Category: v.subLabel,
      Amount: v.theta,
      x: v.x,
      y: v.y
    };
    this.setState({ value: value });
  };

  render() {
    const { value } = this.state;
    const { expenses } = this.context.userObj || { expenses: [] };
    let graph_data = this.calculate_theta(expenses);

    return (
      <div id='donut'>
        <RadialChart
          className={"donut-chart-expenses"}
          innerRadius={100}
          radius={140}
          getAngle={d => d.theta}
          data={graph_data}
          onValueMouseOver={v => this.setValue(v)}
          onSeriesMouseOut={v => this.setState({ value: false })}
          width={300}
          height={300}
          padAngle={0.04}
          showLabels={false}
        >
          {value !== false && (
            <Hint value={value}>
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  background: "#365cd3",
                  color: "#fff",
                  borderRadius: "0.5em",
                  padding: "0.5em",
                  textAlign: "center"
                }}
              >
                <h4>{"$" + value.Amount}</h4>
                <h5>{value.Name}</h5>
                <h6>{value.Category}</h6>
              </div>
            </Hint>
          )}
        </RadialChart>
      </div>
    );
  }
}
