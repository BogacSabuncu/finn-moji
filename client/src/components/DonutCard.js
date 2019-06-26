import React from 'react';
import { MDBContainer, MDBCardHeader, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import DonutChart from "./Donut.js";

const DonutCard = () => {
    return (
    <MDBContainer>
      <MDBCard style={{ width: "auto", marginTop: "1rem"}}>
        <MDBCardHeader color="blue darken-3">Your Expenses:</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText>
          <DonutChart />
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    );
    };
    
    export default DonutCard;