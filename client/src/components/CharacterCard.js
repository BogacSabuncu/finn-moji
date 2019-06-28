import React, { Component } from "react";
import {
  MDBBtnGroup,
  MDBRow,
  MDBContainer,
  MDBCardHeader,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";
import UserContext from "../context/UserContext";
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";
import "../stylesheets/CharacterCard.css";

class CharacterCard extends Component {
  static contextType = UserContext;

  

  render() {
    let charImageUrl = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/smiling-cat-face-with-heart-shaped-eyes_1f63b.png";

    let charStatus = this.context.charStatus || "screw this cat"
    console.log(charStatus);

    if(charStatus === "happy"){
      charImageUrl = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/smiling-cat-face-with-heart-shaped-eyes_1f63b.png";
    }else if(charStatus === "neutral"){
      charImageUrl = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/grinning-cat-face-with-smiling-eyes_1f638.png";
    }else if(charStatus === "sad"){
      charImageUrl = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/pouting-cat-face_1f63e.png";
    }else if(charStatus === "very sad"){
      charImageUrl = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/crying-cat-face_1f63f.png";
    }else{
      charImageUrl = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/weary-cat-face_1f640.png";
    }

    return (
      <MDBContainer>
        <MDBCard style={{ width: "auto", marginTop: "1rem" }}>
          <MDBCardHeader color='purple lighten-1'>
            Finn is feeling...
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle />
            <MDBContainer className='align-center'>
              <MDBCardImage
                id='avatar'
                className='img-fluid'
                src={charImageUrl}
              />
            </MDBContainer>
            <MDBCardText />
            <MDBRow>
              <MDBCol md='12' className='text-center'>
                <MDBBtnGroup>
                  <AddExpense /> <AddIncome />
                </MDBBtnGroup>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default CharacterCard;
