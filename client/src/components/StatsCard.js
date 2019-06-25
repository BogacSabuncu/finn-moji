import React from 'react';
import { MDBContainer, MDBCardHeader, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Charts from "./Charts";

const StatsCard = () => {
    return (
    <MDBContainer>
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
        <MDBCardHeader color="deep-orange lighten-1">Your Statistics:</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText>
          <Charts />
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    );
    };
    
    export default StatsCard;