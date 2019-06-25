import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
// import Auth from "../utils/Auth";
import API from "../utils/API";
import Charts from "./Charts";
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import CharacterCard from "./CharacterCard";
import StatsCard from "./StatsCard";
import { Stats } from "fs";

class Profile extends Component {
  static contextType = UserContext;

  state = {};

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="text-center" md="12">
            <h1>Welcome, NAME </h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <CharacterCard />
          </MDBCol>
          <MDBCol>
            <StatsCard />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(Profile);
