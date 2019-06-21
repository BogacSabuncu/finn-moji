import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import UserContext from "./context/UserContext";
import SingupForm from "./components/SingupForm";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import { Navbar, Nav } from "react-bootstrap";
import Statistics from "./components/Statistics";
import GetStarted from "./components/GetStarted";

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
          <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='#home'>
              <img
                alt=''
                src='/logo.svg'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />
              {" fingachi"}
            </Navbar.Brand>
            <Nav className='justify-content-end' activeKey='/home'>
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
            <ProtectedRoute exact path='/' component={Profile} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SingupForm} />
            <Route exact path='/landing' component={LandingPage} />
            <Route exact path='/statistics' component={Statistics} />
            <Route exact path='/getstarted' component={GetStarted} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
