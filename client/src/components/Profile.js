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

  state = {
    nameIncome: "",
    valueIncome: "",
    name: "",
    value: "",
    category: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { nameIncome, valueIncome, name, value, category } = this.state;
    if (nameIncome) {
      API.addIncome({
        nameIncome,
        valueIncome
      });
    }

    if (name) {
      API.addExpense({
        name,
        value,
        category
      });
    }

    this.props.history.push("/statistics");
  };

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
// import React from "react";
// import UserContext from "../context/UserContext";

// const Profile = (props) => (
// 	<UserContext.Consumer>
// 		{context => {
// 			return <div>
// 				<h1>Home Page (protected)</h1>
// 				<h2>Welcome, {context.user.username}!</h2>
// 			</div>
// 		}}
// 	</UserContext.Consumer>
// );

// export default Profile;
