import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import { Provider as UserProvider } from "./context/UserContext";
import SingupForm from "./components/SingupForm";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import { Navbar, Nav } from "react-bootstrap";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";
import Statistics from "./components/Statistics";
import FooterPage from "./components/Footer";
import Logs from "./components/Logs";
import "./stylesheets/App.css";
import API from "./utils/API";

class App extends Component {
  state = {
    user: null,
    userObj: null
    // charStatus: "neutral"
  };

  setUser = user => {
    this.setState({ user });
  };

  getUser = () => {
    API.getUser().then(response => {
      this.refreshUser(response.data);
    });
  };

  refreshUser = userData => {
    this.setState({ userObj: userData });
    this.getCharStatus();
  };

  postExpense = data => {
    API.addExpense(data).then(response => {
      this.getUser();
    });
  };

  postIncome = data => {
    API.addIncome(data).then(response => {
      this.getUser();
    });
  };

  deleteIncome = data =>{
    console.log("data: ", data)
    API.deleteIncome(data).then(response => {
      this.getUser();
    });
  }

  deleteExpense = data =>{
    console.log("data: ", data)
    API.deleteExpense(data).then(response => {
      this.getUser();
    });
  }
  
 updateIncome = data =>{
    console.log("data hello it is data: ", data)
    API.updateIncome(data).then(response => {
      this.getUser();
    });
  }

  updateExpense = data =>{
    console.log("data hello it is data: ", data)
    API.updateExpense(data).then(response => {
      this.getUser();
    });
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.getUser();
    }
  }

  getCharStatus = () => {
    // console.log("userObj in char card", this.context.userObj);
    let characterStatus;
    switch (characterStatus) {
      case "happy":
        console.log("happy");
        break;
      case "neutral":
        console.log("neutral");
        break;
      case "sad":
        console.log("sad");
        break;
      case "very sad":
        console.log("very sad");
        break;
      case "dead":
        console.log("dead");
        break;
      default:
        console.log("default");
    }
  };

  calculateChart = (expenses, income) => {
    let needs = 0;
    let wants = 0;
    let savings = 0;
    let totalIncome = 0;

    expenses.forEach(expense => {
      const needsCategories = ["Housing", "Healthcare", "Food", "Insurance"];
      const savingsCategories = ["Savings"];
      if (needsCategories.includes(expense.category)) {
        needs += expense.value;
      } else if (savingsCategories.includes(expense.category)) {
        savings += expense.value;
      } else {
        wants += expense.value;
      }
    });

    income.forEach(element => {
      totalIncome += element.valueIncome;
    });

    console.log("needs", needs);
    console.log("wants ", wants);
    console.log("savings ", savings);

    needs = Math.floor((needs * 100) / totalIncome);
    wants = Math.floor((wants * 100) / totalIncome);
    savings = Math.floor((savings * 100) / totalIncome);
    console.log("after percent conversion");
    console.log("needs", needs);
    console.log("wants ", wants);
    console.log("savings ", savings);

    let userGraphData = [
      { x: "Needs", y: `${needs}` },
      { x: "Wants", y: `${wants}` },
      { x: "Savings", y: `${savings}` }
    ];

    // for character state

    if (wants < 30) {
      // return this.setState({ charStatus: "happy" });
    }
    if (wants < 35 && wants >= 30) {
      // return (charStatus = "neutral");
    }
    if (wants < 45 && wants >= 35) {
      // return (charStatus = "sad");
    }
    if (wants >= 45) {
      // return (charStatus = "very sad");
    }
    // console.log("charStatus", charStatus, "wants", wants);
    return userGraphData;
  };

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
        <MDBNavbar color="special-color-dark" dark expand="md">
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
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
            <UserProvider
              value={{
                setUser,
                user,
                userObj: this.state.userObj,
                postExpense: this.postExpense,
                postIncome: this.postIncome,
                calculateChart: this.calculateChart
              }}
            >
              {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/logs' component={Logs} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/signup' component={SingupForm} />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/statistics' component={Statistics} />
            </UserProvider>
            <div className='push' />
          {/* </div> */}
          <FooterPage />
        </div> 
      </Router>
    );
  }
}

export default App;
