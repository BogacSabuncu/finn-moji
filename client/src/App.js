import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import UserContext from "./context/UserContext";
import SingupForm from "./components/SingupForm";
import Profile from "./components/Profile";

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
          <header>
            <nav>
              <Link to='/'>Home</Link> | <Link to='/login'>Login</Link> |{" "}
              <Link to='/signup'>Sign Up</Link>
            </nav>
          </header>
          <UserContext.Provider value={{ setUser, user }}>
            <ProtectedRoute exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SingupForm} />
            <Route exact path='/profile' component={Profile} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
