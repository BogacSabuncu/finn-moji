const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  // console.log("auth", req.headers);
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error();
    const token = authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.MY_SECRET);
    // console.log("token/decoded", token, decoded);

    User.findOne({ _id: decoded.data }).then(function(dbUser) {
      req.user = dbUser;
      next();
    });
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
