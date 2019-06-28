import React from "react";
import {
  MDBContainer,
  MDBCardHeader,
  MDBCard,
  MDBCardBody,
  MDBCardTitle
} from "mdbreact";
import DonutChart from "./Donut.js";

const DonutCard = () => {
  return (
    <MDBContainer>
      <MDBCard style={{ width: "auto", marginTop: "1rem" }}>
        <MDBCardHeader color='blue darken-3'>Your Expenses:</MDBCardHeader>
        <MDBCardBody style={{ marginLeft: "auto", marginRight: "auto" }}>
          <MDBCardTitle />
          <DonutChart />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default DonutCard;
