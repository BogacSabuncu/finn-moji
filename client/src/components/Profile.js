import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Auth from "../utils/Auth";
import API from "../utils/API";

class Profile extends Component {
  static contextType = UserContext;

  state = {
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
    const { name, value, category } = this.state;
    API.addExpense({
      name,
      value,
      category
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.changeHandler}
          placeholder='Ex. expense'
        />
        <input
          type='text'
          name='value'
          value={this.state.value}
          onChange={this.changeHandler}
          placeholder='Ex. Value'
        />
        <select
          name='category'
          onChange={this.changeHandler}
          placeholder='Ex. Category'
          value={this.state.category}
        >
          <option value='Housing'>Housing</option>
          <option value='Healthcare'>Healthcare</option>
          <option value='food'>food</option>
          <option value='insurance'>insurance</option>
        </select>

        <button type='submit' onClick={this.submitHandler}>
          Add Expense
        </button>
      </form>
    );
  }
}

export default withRouter(Profile);
