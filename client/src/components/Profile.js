import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import CharacterCard from "./CharacterCard";
import StatsCard from "./StatsCard";
import { Stats } from "fs";
import DonutCard from "./DonutCard.js";

class Profile extends Component {
  static contextType = UserContext;

  state = {};

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="text-center" md="12">
            <h1 id="">Chief called, this profile is it.</h1>
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
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(Profile);
