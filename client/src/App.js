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
import GetStarted from "./components/GetStarted";
import FooterPage from "./components/Footer";
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
        <div>
          <div className='wrapper'>
            <Navbar fluid bg='dark' variant='dark'>
              <Navbar.Brand href='/landing'>
                <img
                  alt=''
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/74/money-mouth-face_1f911.png'
                  width='45'
                  height='45'
                  className='d-inline-block align-top'
                />
                {" fingachi"}
              </Navbar.Brand>
              <Nav className='justify-content-end' activeKey='/landing'>
                <Nav.Item>
                  <Nav.Link href='/landing'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/statistics'>Stats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/getstarted'>Get Started</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
            <UserContext.Provider value={{ setUser, user }}>
              {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/signup' component={SingupForm} />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/statistics' component={Statistics} />
              <Route exact path='/getstarted' component={GetStarted} />
            </UserContext.Provider>
            <div className='push' />
          </div>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
