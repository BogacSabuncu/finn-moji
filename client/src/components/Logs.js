import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import CardDeck from 'react-bootstrap/CardDeck';
// import IncomeCard from "./IncomeCard";
//import ExpensesCard from "./ExpensesCard";
import Card from 'react-bootstrap/Card';

class IncomeCard extends Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <>
        <Card border="success" style={{ width: '18rem', margin: '20px' }}>
          <Card.Header>
            {this.props.nameIncome}

            <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => this.props.removeIncome(this.props.id)} >
              &#10062;
            </span></Card.Header>

          <Card.Text><span style={{ float: 'left', cursor: 'pointer', padding: '10px' }} onClick={() => this.props.updateIncome(this.props.id, this.state.value, this.props.nameIncome)} >
            &#10004;
            </span>
            <input type="text" value={this.state.value} onChange={this.handleChange} name={this.props.valueIncome} id={this.props.id} style={{ width: '5rem', margin: '10px', textAlign: 'center' }} placeholder={this.props.valueIncome} /> dollars
            </Card.Text>


        </Card>




      </>
    )
  }
}




class ExpensesCard extends Component {

  state = {
    value: ''
  }

  handleChange2 = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <>
        <Card border="danger" style={{ width: '18rem', margin: '20px' }}>
          <Card.Header>
            {this.props.name}

            <span style={{ float: 'right', cursor: 'pointer' }} onClick={() => this.props.removeExpenses(this.props.id)} >
              &#10062;
            </span></Card.Header>

          <Card.Text><span style={{ float: 'left', cursor: 'pointer', padding: '10px' }} onClick={() => this.props.updateExpenses(this.props.id, this.state.value, this.props.name)} >
            &#10004;
            </span>
            <input type="text" value={this.state.value} onChange={this.handleChange2} name={this.props.value} id={this.props.id} style={{ width: '5rem', margin: '10px', textAlign: 'center' }} placeholder={this.props.value} /> USD
            </Card.Text>


        </Card>




      </>
    )
  }
}






class Logs extends Component {

  state = {
    name: "",
    value: "",
    income: [{}],
    expenses: [{}]
  }

  componentDidMount = () => {

    API.getIncome()
      .then((response) => {
        console.log(response.data.income);

        this.setState({ income: response.data.income });


        API.getExpenses()
          .then((response) => {
            console.log(response.data);

            this.setState({ expenses: response.data.expenses });



          })

      })

      .catch(err => console.log(err));

  };


  removeExpenses = id => {
    API.deleteExpenses(id)
      .then(() => {

        console.log(id);
        const expensesNew = this.state.expenses.filter(expensesNewItem => expensesNewItem._id !== id);
        console.log(expensesNew);
        this.setState({ expenses: expensesNew });
      });
  };


  removeIncome = id => {
    API.deleteIncome(id)
      .then(() => {

        console.log(id);
        const incomeNew = this.state.income.filter(incomItem => incomItem._id !== id);
        console.log(incomeNew);
        this.setState({ income: incomeNew });
      });
  };

  changeHandler = e => {
    console.log('e', e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };



  updateExpenses= (id, value, name2) => {

    let n = {
      _id: id,
      name: name2,
      value: value
    };
    console.log(n);
    API.updateExpenses(id, n)

      .then((response) => {
        console.log("hhhh");
        //  console.log(response.data);

        //this.setState({ income: response.data});


        API.getExpenses()
          .then((response) => {
            console.log(response.data.expenses);

            this.setState({ expenses: response.data.expenses });
          });




      })
  };




  updateIncome = (id, value, name2) => {

    let n = {
      _id: id,
      nameIncome: name2,
      valueIncome: value
    };
    console.log(n);
    API.updateIncome(id, n)

      .then((response) => {
        console.log("hhhh");
        //  console.log(response.data);

        //this.setState({ income: response.data});


        API.getIncome()
          .then((response) => {
            console.log(response.data.income);

            this.setState({ income: response.data.income });
          });




      })
  };

  render() {

    return (
      <>
        <h1>Income</h1>
        <CardDeck>
          {this.state.income.map(incomeItem => (
            <IncomeCard
              changeHandler={this.changeHandler}
              removeIncome={this.removeIncome}
              nameIncome={incomeItem.nameIncome}
              valueIncome={incomeItem.valueIncome}
              updateIncome={this.updateIncome}
              id={incomeItem._id}
              key={incomeItem._id}
            />
          ))} </CardDeck>

        <h1>Expenses</h1>
        <CardDeck>
          {this.state.expenses.map(expensesItem => (
            <ExpensesCard
            id={expensesItem._id}
            updateExpenses={this.updateExpenses}
              name={expensesItem.name}
              value={expensesItem.value}
              removeExpenses={this.removeExpenses}
              category={expensesItem.category}
              key={expensesItem._id}

            />

          ))}</CardDeck>
      </>
    );
  }
}


export default withRouter(Logs);
