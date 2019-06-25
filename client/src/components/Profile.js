import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
// import Auth from "../utils/Auth";
import API from "../utils/API";
import Charts from "./Charts";
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";

class Profile extends Component {
  static contextType = UserContext;

  state = {};

  render() {
    return (
      <div>
        <Charts />
        <AddIncome />
        <AddExpense />
      </div>
    );
  }
}

export default withRouter(Profile);
