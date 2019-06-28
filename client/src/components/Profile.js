import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
// import Auth from "../utils/Auth";
import API from "../utils/API";
import Charts from "./Charts";
import Logs from "./Logs";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import CharacterCard from "./CharacterCard";
import StatsCard from "./StatsCard";
import DonutCard from "./DonutCard.js";
import Typist from "react-typist";


class Profile extends Component {
  static contextType = UserContext;

  state = {};

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="text-center" md="12">
          <Typist
                cursor={{
                  show: false,
                  blink: true,
                  element: "|",
                  hideWhenDone: false,
                  hideWhenDoneDelay: 1000
                }}
              >
            <h1>Chief called, this profile is it.</h1>
            </Typist>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <CharacterCard />
          </MDBCol>
          <MDBCol>
            <StatsCard />
            <DonutCard />
          </MDBCol>
          <MDBCol>
            <Logs />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(Profile);
