import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Donut from "./Donut";

class Statistics extends Component {
    render() {
      return <div><h1>Statistics</h1>

      <Donut />
      
      </div>
    }
  }
  
  export default withRouter(Statistics);
  