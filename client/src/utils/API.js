import axios from "axios";

export default {
  register: function(query) {
    console.log("query", query);
    return axios.post("/api/signup", query);
  }
};
