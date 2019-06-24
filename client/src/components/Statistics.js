import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Charts from "./Charts";
// import UserContext from "../context/UserContext";
// import Auth from "../utils/Auth";
// import { Button, Nav, Navbar, Form, Container } from "react-bootstrap";

class Statistics extends Component {
    render() {
      return <div><h1>Statistics</h1>
      <Charts />
      </div>
    }
  }
  
  export default withRouter(Statistics);
  