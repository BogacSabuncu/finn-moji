import React, { Component } from "react";
<<<<<<< HEAD
import { withRouter, Link } from "react-router-dom";
import Charts from "./Charts";
=======
import { withRouter } from "react-router-dom";
>>>>>>> 9acd9a157e323d4a3e93973b5995cec38f7e4105
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
  