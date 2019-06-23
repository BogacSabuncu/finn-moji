const User = require("../models/User");
const Expenses = require("../models/Expenses");
const Income = require("../models/Income");
const jwt = require("jsonwebtoken");
const authWare = require("../middleware/authware");

module.exports = function (app) {
  app.post("/api/signup", function (req, res) {
    User.create(req.body)
      .then(function (result) {
        res.json({ message: "user created" });
      })
      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
  });

  app.post("/api/authenticate", function (req, res) {
    const { username, password } = req.body;
    User.findOne({ username: username }).then(function (dbUser) {
      if (!dbUser)
        return res
          .status(401)
          .json({ message: "Username or password is incorrect." });
      if (dbUser.comparePassword(password)) {
        const token = jwt.sign(
          {
            data: dbUser._id
          },
          "superSecretKey"
        );

        res.json({
          id: dbUser._id,
          username: dbUser.username,
          token: token
        });
      } else {
        res.status(401).json({ message: "Username or password is incorrect." });
      }
    });
  });

  app.get("/api/users", function (req, res) {
    User.find()
      .populate("expenses")
      .populate("income")
      .then(function (dbUser) {
        console.log("Get all Users", dbUser);
        res.json(dbUser);
      })

      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
  });

  app.post("/api/add-expense/:id", function (req, res) {
    Expenses.create(req.body)
      .then(function (result) {
        return User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { expenses: result._id } },
          { new: true }
        );
      })
      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
  });

  app.post("/api/add-income/:id", function (req, res) {
    Income.create(req.body)
      .then(function (result) {
        return User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { income: result._id } },
          { new: true }
        );
      })
      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
  });

  app.get("/api/getIncome/:id", function (req, res) {
    User.findOne({ _id: req.params.id })
    .populate("income")
      .then(function (result) {
        console.log("income", result);
        res.json(result);
      })

      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
    });
  };
