import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import CardDeck from 'react-bootstrap/CardDeck';
import IncomeCard from "./IncomeCard";
import ExpensesCard from "./ExpensesCard";


class Logs extends Component {


  state = {
name:"",
value:"",
    income:[{}],
    expenses:[{}]
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


      removeIncome = id => {
        API.deleteIncome(id)
      .then(() => {
       
        console.log(id);
        const incomeNew = this.state.income.filter(incomItem => incomItem._id !== id);
       console.log(incomeNew);
        this.setState({ income:incomeNew }); });
      };

      // changeHandler = e => {
      //   console.log(e.target)
      //   const {id, name, value } = e.target;
      //   console.log(id)
      //   this.setState({ [name]: value });
      
      // };


      updateIncome = (id) => {
        

        API.updateIncome(id)
      .then(() => {
       
       // console.log(id);
      //  const incomeNew = this.state.income.filter(incomItem => incomItem._id !== id);
       //console.log(incomeNew);
       // this.setState({ income:incomeNew }); 
      });
      };
  changeHandler
  render() {


    return (
      <>
      <h1>Income</h1>
      <CardDeck>
    {this.state.income.map(incomeItem=> (
        <IncomeCard
        changeHandler={this.changeHandler}
        removeIncome={this.removeIncome}
        nameIncome={incomeItem.nameIncome}
          valueIncome={incomeItem.valueIncome}
          id={incomeItem._id}
          key={incomeItem._id}
          
        />
       
      ))}</CardDeck>

<h1>Expenses</h1>
<CardDeck>
{this.state.expenses.map(expensesItem=> (
  <ExpensesCard
  
  name={expensesItem.name}
    value={expensesItem.value}
    category={expensesItem.category}
    key={expensesItem._id}
    
  />
 
))}</CardDeck>
</>
    );
  }
}



export default withRouter(Logs);
