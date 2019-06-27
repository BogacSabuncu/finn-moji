import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import UserContext from "./context/UserContext";
import SingupForm from "./components/SingupForm";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";
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
        <MDBNavbar color="special-color-dark
" dark expand="md">
        <MDBNavbarBrand>
        <img
                alt="Finmoji navbar icon"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/cat-face-with-wry-smile_1f63c.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />

          <strong className="white-text"> &nbsp; FinMoji</strong>
        </MDBNavbarBrand>
        {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/profile">Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/statistics">Statistics</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Resources</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">
                  <a
                  id="robinhood"
                  href="https://robinhood.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                Robinhood - Invest Commission-Free{" "}
                </a>
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                  <a
                  id="simpledollar"
                  href="https://www.thesimpledollar.com/blog-overview/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                 Simple Dollar - Financial Blog{" "}
                </a>
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                  <a
                  id="stackingbenjamins"
                  href="https://www.stackingbenjamins.com/about/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Stacking Benjamins - Finance Podcast
                </a>
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                  <a
                  id="beermoney"
                  href="https://www.reddit.com/r/beermoney/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                 Beermoney - Earn Extra Income{" "}
                </a>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              {/* <MDBFormInline waves>
                <div className="secondary-color-dark">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline> */}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
          {/* <Navbar bg="dark" variant="dark">
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
          </Navbar> */}
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
