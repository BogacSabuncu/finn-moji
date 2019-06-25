import React from "react";
import Card from 'react-bootstrap/Card';


function ExpensesCard(props) {
  return (
    <>
    <Card border="danger" style={{ width: '18rem' }}>
    <Card.Header>{props.name}/{props.category}</Card.Header>
    
    <Card.Body>
      
      <Card.Text>{props.value} dollars</Card.Text>
      
    </Card.Body>
  </Card>
  <br />
  </>
  );
}

export default ExpensesCard;
