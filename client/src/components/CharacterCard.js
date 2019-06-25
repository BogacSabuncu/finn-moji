
import React from 'react';
import { MDBRow, MDBContainer, MDBCardHeader, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";
import "../stylesheets/CharacterCard.css"

const CharacterCard = () => {
    return (
        <MDBContainer>
          <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
            <MDBCardHeader color="purple lighten-1">Finn says Hello!</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle></MDBCardTitle>
              <MDBContainer id="avatar">
              <MDBCardImage className="img-fluid" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/200/weary-cat-face_1f640.png" />
              </MDBContainer>
              <MDBCardText>
              </MDBCardText>
              <MDBRow>
                  <MDBCol md="12">
              <AddExpense/> <AddIncome />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
  )
}

export default CharacterCard;