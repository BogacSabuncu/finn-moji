import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../utils/API";
import CardDeck from "react-bootstrap/CardDeck";
import UserContext from "../context/UserContext.js";
import Card from "react-bootstrap/Card";
import {
  MDBBtnGroup,
  MDBRow,
  MDBContainer,
  MDBCardHeader,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

class IncomeCard extends Component {
  static contextType = UserContext;
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <>
        <MDBCard text="white" color="success-color" border="success" style={{ width: "auto", margin: "20px" }}>
        <MDBCardHeader>
            {this.props.nameIncome}

            <span
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => this.props.removeIncome(this.props.id)}
            >
              <span role='img' aria-label='icon'>
              <i class="fas fa-trash-alt"></i>
              </span>
            </span>
          </MDBCardHeader>
          <MDBCardBody className='text-center'>
          <span
              style={{ float: "", cursor: "pointer", padding: "10px" }}
              onClick={() =>
                this.props.updateIncome(
                  this.props.id,
                  this.state.value,
                  this.props.nameIncome
                )
              }
            >
            <i class="fas fa-sync-alt"></i>
            </span>
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              name={this.props.valueIncome}
              id={this.props.id}
              style={{ width: "5rem", margin: "10px", textAlign: "center" }}
              placeholder={this.props.valueIncome}
            />{" "}
            USD
          </MDBCardBody>
        </MDBCard>
      </>
    );
  }
}

class ExpensesCard extends Component {
  static contextType = UserContext;
  state = {
    value: ""
  };

  handleChange2 = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <>
        <MDBCard text="white" color="red lighten-1" border="danger" style={{ width: "auto", margin: "20px" }}>
          <MDBCardHeader color="red lighten-1">
            {this.props.name}

            <span
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => this.props.removeExpenses(this.props.id)}
            >
              <span role="img" aria-label="icon">
              <i class="fas fa-trash-alt"></i>
              </span>
            </span>
          </MDBCardHeader>

          <MDBCardBody className="text-center">
            <span
              style={{ float: "", cursor: "pointer", padding: "10px" }}
              onClick={() =>
                this.props.updateExpenses(
                  this.props.id,
                  this.state.value,
                  this.props.name
                )
              }
            >
              <i class="fas fa-sync-alt"></i>
            </span>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange2}
              name={this.props.value}
              id={this.props.id}
              style={{ width: "5rem", margin: "10px", textAlign: "center" }}
              placeholder={this.props.value}
            />{" "}
            USD
          </MDBCardBody>
        </MDBCard>
      </>
    );
  }
}

class Logs extends Component {
  static contextType = UserContext;
  state = {
    name: "",
    value: "",
    income: [{}],
    expenses: [{}]
  };

  // componentDidMount = () => {

  //   API.getIncome()
  //     .then((response) => {
  //       console.log(response.data.income);

  //       this.setState({ income: response.data.income });

  //       API.getExpenses()
  //         .then((response) => {
  //           console.log(response.data);

  //           this.setState({ expenses: response.data.expenses });

  //         })

  //     })

  //     .catch(err => console.log(err));

  // };

  removeExpenses = id => {
    let userId = localStorage.getItem("userId");
    console.log("userId: ", userId);
    let objDel = {
      id: id,
      userId: userId
    };
    console.log("objDel: ", objDel);
    this.context.deleteExpense(objDel);
  };

  removeIncome = id => {
    console.log("id: ", id);

    let userId = localStorage.getItem("userId");
    console.log("userId: ", userId);
    let objDel = {
      id: id,
      userId: userId
    };
    console.log("objDel: ", objDel);
    this.context.deleteIncome(objDel);
  };

  changeHandler = e => {
    console.log("e", e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateExpenses = (id, value, name2) => {
    let n = {
      _id: id,
      name: name2,
      value: value
    };
    console.log(n);
    this.context.updateExpense(n);
  };

  updateIncome = (id, value, name2) => {
    let objDel = {
      _id: id,
      nameIncome: name2,
      valueIncome: value
    };
    console.log(objDel);
    console.log("objUpdate: ", objDel);
    this.context.updateIncome(objDel);
  };

  render() {
    const { expenses, income } = this.context.userObj || {
      expenses: [],
      income: []
    };
    return (
      <>
      <MDBRow>
        <MDBCol md='6'>
        <MDBContainer>
          
          <MDBCard style={{ width: "auto", marginTop: "1rem" }}>
            <MDBCardHeader color="success-color">Income Log:</MDBCardHeader>
            <MDBCardBody>
            {/* <CardDeck> */}
              {income.map(incomeItem => (
                <IncomeCard
                  changeHandler={this.changeHandler}
                  removeIncome={this.removeIncome}
                  nameIncome={incomeItem.nameIncome}
                  valueIncome={incomeItem.valueIncome}
                  updateIncome={this.updateIncome}
                  id={incomeItem._id}
                  key={incomeItem._id}
                />
              ))}{" "}
              {/* </CardDeck> */}
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
          </MDBCol>
          <MDBCol md='6'>
        <MDBContainer  className=''>
          <MDBCard style={{ width: "auto", marginTop: "1rem" }}>
            <MDBCardHeader color="red lighten-1">
              Expense Log:
            </MDBCardHeader>
            <MDBCardBody>
            {/* <CardDeck> */}
              {expenses.map(expensesItem => (
                <ExpensesCard
                  id={expensesItem._id}
                  updateExpenses={this.updateExpenses}
                  name={expensesItem.name}
                  value={expensesItem.value}
                  removeExpenses={this.removeExpenses}
                  category={expensesItem.category}
                  key={expensesItem._id}
                />
              ))}
              {/* </CardDeck> */}
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        </MDBCol>
        </MDBRow>
{/* 
        <h1>Income</h1>
        <CardDeck>
          {income.map(incomeItem => (
            <IncomeCard
              changeHandler={this.changeHandler}
              removeIncome={this.removeIncome}
              nameIncome={incomeItem.nameIncome}
              valueIncome={incomeItem.valueIncome}
              updateIncome={this.updateIncome}
              id={incomeItem._id}
              key={incomeItem._id}
            />
          ))}{" "}
        </CardDeck>

        <h1>Expenses</h1>
        <CardDeck>
          {expenses.map(expensesItem => (
            <ExpensesCard
              id={expensesItem._id}
              updateExpenses={this.updateExpenses}
              name={expensesItem.name}
              value={expensesItem.value}
              removeExpenses={this.removeExpenses}
              category={expensesItem.category}
              key={expensesItem._id}
            />
          ))}
        </CardDeck> */}
      </>
    );
  }
}

export default Logs;
