import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Auth from "../utils/Auth";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class LoginForm extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      Auth.logIn(username, password, response => {
        localStorage.setItem("userId", response.id);
        this.context.setUser(response);
        this.props.history.push("/profile");
      });
    }
  };

  render() {
    return (
      <MDBContainer className="container">
        <MDBRow>
          <MDBCol />
          <MDBCol md="4">
            <form onSubmit={this.submitHandler}>
              <MDBInput
                label="Username"
                icon="user"
                group
                type="text"
                name="username"
                error="Wrong!"
                success="Welcome Back!"
                value={this.state.username}
                onChange={this.changeHandler}
                validate
              />

              <MDBInput
                label="Password"
                icon="lock"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
              <div className="text-center">
                <MDBBtn variant="success" onClick={this.submitHandler}>
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(LoginForm);
