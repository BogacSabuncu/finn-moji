import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../node_modules/react-vis/dist/style.css";
import API from "../utils/API";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  DiscreteColorLegend
} from "react-vis";
import UserContext from "../context/UserContext.js";

class Charts extends Component {
  static contextType = UserContext;

  render() {
    const gaData = [
      { x: "Needs", y: 50 },
      { x: "Wants", y: 30 },
      { x: "Savings", y: 20 }
    ];
    
    const { needs, wants, savings } = this.context.user ? this.context.user.categories : {};
    const userGraphData = [
      { x: "Needs", y: `${needs}` },
      { x: "Wants", y: `${wants}` },
      { x: "Savings", y: `${savings}` }
    ];

    return (
      <div className='App'>
        <XYPlot
          margin={{ bottom: 70 }}
          xType='ordinal'
          height={300}
          width={400}
          yDomain={[0, 100]}
        >
          <DiscreteColorLegend
            style={{ position: "absolute", left: "300px", top: "10px" }}
            orientation='vertical'
            items={[
              {
                title: "GA Average",
                color: "red"
              },
              {
                title: "You",
                color: "purple"
              }
            ]}
          />

          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <VerticalBarSeries data={gaData} color='red' />
          <VerticalBarSeries data={userGraphData} color='purple' />
        </XYPlot>
      </div>
    );
  }
}

export default Charts;
