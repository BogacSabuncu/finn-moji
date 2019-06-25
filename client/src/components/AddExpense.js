import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
// import Auth from "../utils/Auth";
import API from "../utils/API";

class AddExpense extends Component {
  static contextType = UserContext;
  state = {
    modal14: false,
    name: "",
    value: "",
    category: ""
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addExpenseHandler = e => {
    e.preventDefault();
    this.setState({
      ["modal"+14]: !this.state["modal"+14]
    });
    const { name, value, category } = this.state;
    API.addExpense({
      name,
      value,
      category
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color='red darken-3' onClick={this.toggle(14)}>
          Expense
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            MDBModal title
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.changeHandler}
                placeholder='Ex. expense title'
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
                <option value='food'>Food</option>
                <option value='Insurance'>Insurance</option>
                <option value='Education'>Education</option>
                <option value='Savings'>Savings</option>
                <option value='Clothing'>Clothing</option>
                <option value='Entertainment'>Entertainment</option>
                <option value='Transportation'>Transportation</option>
                <option value='Miscellaneous'>Miscellaneous</option>
              </select>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn
              type='submit'
              onClick={this.addExpenseHandler}
              color='primary'
            >
              Save Expense
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default withRouter(AddExpense);
