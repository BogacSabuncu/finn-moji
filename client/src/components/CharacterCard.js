
import React from 'react';
import { MDBBtnGroup, MDBRow, MDBContainer, MDBCardHeader, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";
import "../stylesheets/CharacterCard.css"

const CharacterCard = () => {
    return (
        <MDBContainer>
          <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
            <MDBCardHeader color="purple lighten-1">Finn is feeling...</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle></MDBCardTitle>
              <MDBContainer id="" className="align-center">
              <MDBCardImage id="avatar" className="img-fluid" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/smiling-cat-face-with-heart-shaped-eyes_1f63b.png" />
              </MDBContainer>
              <MDBCardText>
              </MDBCardText>
              <MDBRow>
                  <MDBCol md="12" className="text-center">
            <MDBBtnGroup>
              <AddExpense/> <AddIncome />
              </MDBBtnGroup>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
  )
}

export default CharacterCard;