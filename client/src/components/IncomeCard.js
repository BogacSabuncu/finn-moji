import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class IncomeCard extends Component {
  render() {
    return (
      <>
        <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>{props.nameIncome}<span style={{ float: 'right' }} onClick={() => props.removeIncome(props.id)} >
            Delete
      </span></Card.Header>
          <Card.Body>
            <Card.Text><input type="text" value={props.valueIncome} name={props.valueIncome} id={props.id} style={{ width: '5rem' }} /> dollars</Card.Text>

          </Card.Body>
        </Card>
        <br />
      </>
    )
  }
}


export default IncomeCard;
