import axios from "axios";

export default {
  register: function(userInfo) {
    console.log("userInfo", userInfo);
    return axios.post("/api/signup", userInfo);
  },
  logIn: function(userCred) {
    console.log("userCred", userCred);
    return axios.post("/api/authenticate", userCred).then(function(result) {
      console.log("results!!!", result);
    });
  },
  addExpense: function(data) {
    console.log("userInfo", data);
    return axios.post(
      "/api/add-expense/" + localStorage.getItem("userId"),
      data
    );
  },
  addIncome: function(data) {
    console.log("userInfo", data);
    return axios.post(
      "/api/add-income/" + localStorage.getItem("userId"),
      data
    );
  },

  getIncome: function() {
    
    return axios.get(
      "/api/getIncome/" + localStorage.getItem("userId")
    );
  }
};
