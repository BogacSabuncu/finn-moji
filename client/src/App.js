import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import { Provider as UserProvider } from "./context/UserContext";
import SingupForm from "./components/SingupForm";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  // MDBNavbarToggler,
  MDBCollapse,
  // MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import News from "./components/News";
import FooterPage from "./components/Footer";
import "./stylesheets/App.css";
import API from "./utils/API";

class App extends Component {
  state = {
    user: null,
    userObj: null
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

  deleteIncome = data => {
    console.log("data: ", data);
    API.deleteIncome(data).then(response => {
      this.getUser();
    });
  };

  deleteExpense = data => {
    console.log("data: ", data);
    API.deleteExpense(data).then(response => {
      this.getUser();
    });
  };

  updateIncome = data => {
    console.log("data hello it is data: ", data);
    API.updateIncome(data).then(response => {
      this.getUser();
    });
  };

  updateExpense = data => {
    console.log("data hello it is data: ", data);
    API.updateExpense(data).then(response => {
      this.getUser();
    });
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.getUser();
    }
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
          <MDBNavbar color='special-color-dark' dark expand='md'>
            <MDBNavbarBrand>
              <img
                alt='Finmoji navbar icon'
                src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/cat-face-with-wry-smile_1f63c.png'
                width='50'
                height='50'
                className='d-inline-block align-top'
              />

              <strong className='white-text'> &nbsp; FinMoji</strong>
            </MDBNavbarBrand>
            {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
            <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to='/'>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/profile'>Profile</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/news'>News</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className='mr-2'>Resources</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem
                        id='robinhood'
                        href='https://robinhood.com/'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        Robinhood - Invest Commission-Free{" "}
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        id='simpledollar'
                        href='https://www.thesimpledollar.com/blog-overview/'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        Simple Dollar - Financial Blog{" "}
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        id='stackingbenjamins'
                        href='https://www.stackingbenjamins.com/about/'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        Stacking Benjamins - Finance Podcast
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        id='beermoney'
                        href='https://www.reddit.com/r/beermoney/'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        Beermoney - Earn Extra Income{" "}
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem />
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
              deleteIncome: this.deleteIncome,
              updateIncome: this.updateIncome,
              deleteExpense: this.deleteExpense,
              updateExpense: this.updateExpense
            }}
          >
            <ProtectedRoute exact path='/profile' component={Profile} />
            {/* <Route exact path='/logs' component={Logs} /> */}
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SingupForm} />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/news' component={News} />
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
