import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../stylesheets/Landing.css";
import { MDBBtn } from "mdbreact";


// import UserContext from "../context/UserContext";

class LandingPage extends Component {
  render() {
    return (
    
      <Container id="container">
        <Row>
          <Col xs={4}>
            <img
              id="fingachi-img"
              src="https://via.placeholder.com/350"
              alt="fingachi img"
            />
          </Col>
          <Col xs={8}>
            <h5 id="quote">"Securing the bag is hard enough. Fingachi is here to make sure you hold on to it."</h5>
          </Col>
        </Row>
      

        <Row>
          <h3>Financial accountability made approachable</h3>
          <p>With Fingachi, taking responsibility for your personal finances has never been more fun or hassle-free. </p>
        </Row>
        <Row>
          <h3>Info #2</h3>
        </Row>
        <Row>
          <h3>Info #3</h3>
        </Row>



        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Fragment>
            <MDBBtn href="/getstarted" size="lg" gradient="purple">Start</MDBBtn>
            </Fragment>
          </Col>
        </Row>
        
      </Container>
      

      
    );
  }
}

export default withRouter(LandingPage);
