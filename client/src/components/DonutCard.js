import React from "react";
import {
  MDBContainer,
  MDBCardHeader,
  MDBCard,
  MDBCardBody,
  MDBCardTitle
} from "mdbreact";
import DonutChart from "./Donut.js";
import { Consumer as UserConsumer } from "../context/UserContext";

const DonutCard = () => {
  return (
    <MDBContainer>
      <MDBCard style={{ width: "auto", marginTop: "1rem" }}>
        <MDBCardHeader color='blue darken-3'>Your Expenses:</MDBCardHeader>
        <MDBCardBody style={{ marginLeft: "auto", marginRight: "auto" }}>
          <MDBCardTitle />
          <DonutChart />
          {/* <UserConsumer>
            {context => (
              <div>
                {context.userObj && context.userObj.expenses.reduce((sum, expense) => {
                  return sum + expense.value;
                }, 0)}
              </div>
            )}
          </UserConsumer> */}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default DonutCard;
