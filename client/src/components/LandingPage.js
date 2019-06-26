import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/Landing.css";
import { MDBBtn } from "mdbreact";
import Typist from "react-typist";
import "../stylesheets/Typist.css";
// import UserContext from "../context/UserContext";
import "react-typist/dist/Typist";

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
            <div className="quoteBox">
              <Typist
                cursor={{
                  show: false,
                  blink: true,
                  element: "|",
                  hideWhenDone: false,
                  hideWhenDoneDelay: 1000
                }}
              >
                <h1 id="quoteText">
                  <i>
                    "Securing the bag is hard enough. We're here to make sure
                    you hold on to it."
                  </i>
                </h1>
              </Typist>
            </div>
          </Col>
        </Row>
        <hr id="line" />
        <Row>
          <Col className="bullet text-center">
            <h4><strong>Financial accountability made approachable</strong></h4>
            <div className="icondiv text-center">
              <i className="fas fa-search-dollar fa-3x" />
            </div>
            <p>
              With Finmoji, taking responsibility for your personal finances has
              never been more fun or hassle-free. Finmoji can assist you in
              allocating your income to a budget within your means.
            </p>
          </Col>
          <Col className="bullet text-center">
            <h4><strong>Break down budgeting easily</strong></h4>
            <div className="icondiv text-center">
              <i className="fas fa-hand-holding-usd fa-3x"/>
            </div>
            <p>
              Finmoji provides the user with a
              recommendation of what percentage of their income should be used
              for fixed costs (rent, food, bills, etc.) and disposable expenses
              (dining out, entertainment, etc.).
            </p>
          </Col>
          <Col className="bullet text-center">
            <h4><strong>Intuitive features with effortless results</strong></h4>
            <div className="icondiv text-center">
              <i className="fas fa-coins fa-3x" />
            </div>
            <p>
              We bring together everything from balances and bills to your
              credit score and more. It’s your financial life, in one place
              that’s easy to understand.
            </p>
          </Col>
        </Row>

        <hr id="line" />
        <Row>
          <Col className="finnSteps text-center">
            <div className="finnFaces">
              <img
                alt="finn1"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/grinning-cat-face-with-smiling-eyes_1f638.png"
              />
            </div>
            <p>This is Finn. Finn represents your spending.</p>
          </Col>
          <Col className="finnSteps text-center">
            <div className="finnFaces">
              <img
                alt="finn2"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/pouting-cat-face_1f63e.png"
              />
            </div>
            <p>Finn is here to help keep your spending on track.</p>
          </Col>
          <Col className="finnSteps text-center">
            <div className="finnFaces">
              <img
                alt="finn3"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/crying-cat-face_1f63f.png"
              />
            </div>
            <p>If you go over your budget, Finn will be sad.</p>
          </Col>
          <Col className="finnSteps text-center">
            <div className="finnFaces">
              <img
                alt="finn4"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/kissing-cat-face-with-closed-eyes_1f63d.png"
              />
            </div>
            <p>But if you stay under budget, Finn stays alive. </p>
          </Col>
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
