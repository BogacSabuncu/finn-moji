import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import UserContext from "../context/UserContext";

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
      ["modal" + 14]: !this.state["modal" + 14]
    });
    const { name, value, category } = this.state;
    const expenseObj = {
      name,
      value,
      category
    };
    this.context.postExpense(expenseObj);
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color='red darken-3' onClick={this.toggle(14)}>
          Expense
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            Add An Expense{" "}
            <span role='img' aria-label='expense-icon'>
              &#128557;
            </span>
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <MDBInput
                label='Expense Name'
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.changeHandler}
                placeholder='Ex. expense title'
              />
              <MDBInput
                label='Expense Amount'
                type='text'
                name='value'
                value={this.state.value}
                onChange={this.changeHandler}
                placeholder='Ex. Value'
              />
              <select
                className='browser-default custom-select'
                name='category'
                onChange={this.changeHandler}
                value={this.state.category}
              >
                <option defaultValue=''>Choose a Category</option>
                <option value='Housing'>Housing</option>
                <option value='Healthcare'>Healthcare</option>
                <option value='Food'>Food</option>
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

export default AddExpense;
