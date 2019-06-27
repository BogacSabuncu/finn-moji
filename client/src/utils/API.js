import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

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
  getUser: function() {
    return axios.get("/api/user/" + localStorage.getItem("userId"));
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
    return axios.get("/api/getIncome/" + localStorage.getItem("userId"));
  },

  getExpenses: function() {
    return axios.get("/api/getExpenses/" + localStorage.getItem("userId"));
  },

  deleteIncome: function(data) {
    console.log("APIdata: ", data)
    return axios.post("/api/deleteIncome/", data);
  },

  deleteExpense: function(data) {
    console.log("APIdata: ", data)
    return axios.post("/api/deleteExpense/", data);
  },

  deleteExpenses: function(id) {
    return axios.delete("/api/deleteExpenses/" + id);
  },

  updateIncome: function(value) {
    console.log("hello it is value",value);

    return axios.put("/api/updateIncome/" + localStorage.getItem("userId"), value);
  },

  updateExpense: function(value) {

    return axios.put("/api/updateExpense/" + localStorage.getItem("userId"), value);
  }
};
