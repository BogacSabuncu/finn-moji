import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import UserContext from "./context/UserContext";
import SingupForm from "./components/SingupForm";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import { Navbar, Nav } from "react-bootstrap";
import Statistics from "./components/Statistics";
import FooterPage from "./components/Footer";
import Logs from "./components/Logs";
import "./stylesheets/App.css";

class App extends Component {
  state = {
    user: null
    
  };

  setUser = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img
                alt="Finmoji navbar icon"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/cat-face-with-wry-smile_1f63c.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
              {" Finmoji"}
            </Navbar.Brand>
            <Nav className="justify-content-end" activeKey="/">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/statistics">Statistics</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <div className="wrapper">
            <UserContext.Provider value={{ setUser, user }}>
              {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SingupForm} />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/statistics" component={Statistics} />
            </UserContext.Provider>
            <div className="push" />
          </div>
          <FooterPage />
        </>
      </Router>
    );
  }
}

export default App;
