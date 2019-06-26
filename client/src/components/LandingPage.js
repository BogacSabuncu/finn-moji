import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/Landing.css";
import { MDBBtn } from "mdbreact";

class LandingPage extends Component {
  render() {
    return (
      <Container className="overflow-auto" id="container">
        <Row>
          <Col xs={4}>
            <div id="finmoji-img" className="text-center">
              <img
                fluid
                id="finn"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/smiling-cat-face-with-heart-shaped-eyes_1f63b.png"
                alt="finn finmoji img"
              />
            </div>
          </Col>
          <Col xs={8}>
            <h5 id="quote">
              "Securing the bag is hard enough. Finmoji is here to make sure you
              hold on to it."
            </h5>
          </Col>
        </Row>
        <hr />
          <Row>
            <h3 class="bullet">Financial accountability made approachable</h3>
            <p>
              With Finmoji, taking responsibility for your personal finances has
              never been more fun or hassle-free. Finmoji can assist you in
              allocating your income to a budget within your means.
            </p>
          </Row>
          <Row>
            <h3 class="bullet">Break down budgeting</h3>
            <p>
              Backed by market research, Finmoji provides the user with a
              recommendation of what percentage of their income should be used
              for fixed costs (rent, food, bills, etc.) and disposable expenses
              (dining out, entertainment, etc.).
            </p>
          </Row>
          <Row>
            <h3 class="bullet">Intuitive features, effortless results</h3>
            <p>
              We bring together everything from balances and bills to your
              credit score and more. It’s your financial life, in one place
              that’s easy to understand.
            </p>
          </Row>

        <Row className="justify-content-md-center">
          <Col>
            <div className="text-center">
              <Fragment>
                <MDBBtn href="/login" size="lg" gradient="purple">
                  Log In
                </MDBBtn>
                <MDBBtn href="/signup" size="lg" gradient="purple">
                  Sign Up
                </MDBBtn>
              </Fragment>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(LandingPage);
