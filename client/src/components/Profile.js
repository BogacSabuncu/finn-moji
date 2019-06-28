import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
// import Auth from "../utils/Auth";
import API from "../utils/API";
import Charts from "./Charts";
import Logs from "./Logs";
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import CharacterCard from "./CharacterCard";
import StatsCard from "./StatsCard";
import DonutCard from "./DonutCard.js";

class Profile extends Component {
  static contextType = UserContext;

  state = {};

  render() {
    return (
      <MDBContainer md='12'>
        <MDBRow>
          <MDBCol className="text-center" md="12">
            <h1 id="">Chief called, this profile is it.</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md='6'>
            <CharacterCard />
          </MDBCol>
          <MDBCol md='6'>
          <DonutCard />
            
          </MDBCol>
        </MDBRow>

        <MDBRow>
        
          <MDBCol md='12'>
          <StatsCard />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <Logs />
          </MDBCol>
        </MDBRow>
        <MDBRow />
      </MDBContainer>
    );
  }
}

export default withRouter(Profile);
