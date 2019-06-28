import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Auth from "../utils/Auth";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "../stylesheets/LoginForm.css";
import Typist from "react-typist";

class LoginForm extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    password: ""
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
    const { username, password } = this.state;
    if (username && password) {
      Auth.logIn(username, password, response => {
        localStorage.setItem("userId", response.id);
        this.context.setUser(response);
        this.props.history.push("/profile");
      });
    }
    this.redirectToTarget();
  };

  render() {
    return (
      <MDBContainer className="container">
        <MDBRow>
          <MDBCol />
          <MDBCol md="4">
            <div className="text-center">
              <img
                className="img-fluid"
                alt="login icon"
                src="https://images.vexels.com/media/users/3/143349/isolated/preview/d4a9daa55995698be51b9abc7029bd3d-color-maneki-neko-cat-by-vexels.png"
              />
            </div>
            <div id="welcomeTypist">
              <Typist
                cursor={{
                  show: false,
                  blink: true,
                  element: "|",
                  hideWhenDone: false,
                  hideWhenDoneDelay: 1000
                }}
              >
                <h3 id="welcomeText">Welcome back!</h3>
              </Typist>
            </div>
            <hr />
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
                <MDBBtn
                  className="sunny-morning-gradient"
                  onClick={this.submitHandler}
                >
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
