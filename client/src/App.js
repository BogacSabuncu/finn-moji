import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import { Provider as UserProvider } from "./context/UserContext";
import SingupForm from "./components/SingupForm";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import { Navbar, Nav } from "react-bootstrap";
import Statistics from "./components/Statistics";
import FooterPage from "./components/Footer";
import Logs from "./components/Logs";
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
          <div className='wrapper'>
            <Navbar bg='dark' variant='dark'>
              <Navbar.Brand href='/'>
                <img
                  alt=''
                  src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/74/money-mouth-face_1f911.png'
                  width='45'
                  height='45'
                  className='d-inline-block align-top'
                />
                {" finmoji"}
              </Navbar.Brand>
              <Nav className='justify-content-end' activeKey='/'>
                <Nav.Item>
                  <Nav.Link href='/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/profile'>Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/statistics'>Statistics</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
            <UserProvider
              value={{
                setUser,
                user,
                userObj: this.state.userObj,
                postExpense: this.postExpense,
                postIncome: this.postIncome
              }}
            >
              {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/signup' component={SingupForm} />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/statistics' component={Statistics} />
            </UserProvider>
            <div className='push' />
          </div>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
