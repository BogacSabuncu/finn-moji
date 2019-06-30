import axios from "axios";
import { withRouter } from "react-router-dom";

function Auth() {
  let loggedIn;
  if (!localStorage.getItem("token")) {
    loggedIn = false;
  } else {
    loggedIn = true;
  }
  console.log("Auth was ran", loggedIn);

  function logIn(username, password, cb) {
    axios
      .post("/api/authenticate", { username, password })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
        loggedIn = true;
        console.log("loggedin", loggedIn);
        cb(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function logOut(cb) {
    localStorage.clear();
    loggedIn = false;
    cb();
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function isLoggedIn() {
    return loggedIn;
  }

  return {
    isLoggedIn,
    logIn,
    logOut,
    getToken
  };
}

export default withRouter(Auth());
