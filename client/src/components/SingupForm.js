import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap";
import { MDBInput, MDBBtn } from "mdbreact";
import Typist from "react-typist";

class SignupForm extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    password: "",
    gender: "",
    age: "",
    income: "",
    expenses: ""
  };

  redirectToTarget = () => {
    this.props.history.push("/profile");
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, password, gender, age } = this.state;
    API.register({
      username,
      password,
      gender,
      age
    });
    this.redirectToTarget();
  };

  render() {
    return (
      <Container>
        <div className="text-center">
          <img
            className="img-fluid"
            alt="login icon"
            src="https://images.vexels.com/media/users/3/143349/isolated/preview/d4a9daa55995698be51b9abc7029bd3d-color-maneki-neko-cat-by-vexels.png"
          />
        </div>

        <div id="getStartedTypist">
          <Typist
            cursor={{
              show: false,
              blink: true,
              element: "|",
              hideWhenDone: false,
              hideWhenDoneDelay: 1000
            }}
          >
            <h3 id="welcomeText">Get started today!</h3>
          </Typist>
        </div>

        <form className="needs-validation" onSubmit={this.submitHandler}>
          <Row>
            <Col>
              <MDBInput
                icon="user"
                label="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.changeHandler}
                placeholder="Username"
              />
            </Col>
            <Col>
              <MDBInput
                icon="lock"
                label="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.changeHandler}
                placeholder="Password"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <MDBInput
                icon="envelope"
                label="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.changeHandler}
                placeholder="Email"
              />
            </Col>
            <Col>
              <MDBInput
                icon="restroom"
                label="Gender"
                type="text"
                name="gender"
                value={this.state.gender}
                onChange={this.changeHandler}
                placeholder="Gender"
              />
            </Col>
            <Col>
              <MDBInput
                icon="sort-numeric-up"
                label="Age"
                type="text"
                name="age"
                value={this.state.age}
                onChange={this.changeHandler}
                placeholder="Age"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <MDBInput
                icon="dollar-sign"
                label="Monthly Income"
                type="text"
                name="income"
                value={this.state.income}
                onChange={this.changeHandler}
                placeholder="Income"
              />
            </Col>
            <Col>
              <MDBInput
                icon="dollar-sign"
                label="Monthly Expenses"
                type="text"
                name="expenses"
                value={this.state.expenses}
                onChange={this.changeHandler}
                placeholder="Expenses"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                <Fragment>
                  <MDBBtn
                    href="/profile"
                    size="lg"
                    className="sunny-morning-gradient"
                    onClick={this.submitHandler}
                  >
                    Create Your Account!
                  </MDBBtn>
                </Fragment>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}

export default withRouter(SignupForm);
