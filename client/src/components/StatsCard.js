import React from "react";
import {
  MDBContainer,
  MDBCardHeader,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";
import Charts from "./Charts";

const StatsCard = () => {
  return (
    <MDBContainer>
      <MDBCard style={{ width: "auto", marginTop: "1rem" }}>
        <MDBCardHeader color='deep-orange lighten-1'>
          Your Statistics:
        </MDBCardHeader>
        <MDBCardBody style={{ marginLeft: "auto", marginRight: "auto" }}>
          <MDBCardTitle />
            <Charts />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default StatsCard;
