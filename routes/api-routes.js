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

  app.get("/api/user/:id", function (req, res) {
    User.findOne({ _id: req.params.id })
      .populate("expenses")
      .populate("income")
      .then(function (dbUser) {
        console.log("Get one user", dbUser);
        res.json(dbUser);
      })
      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
  });

  app.post("/api/add-expense/:id", authWare, function (req, res) {
    Expenses.create(req.body)
      .then(function (result) {
        return User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { expenses: result._id } },
          { new: true }
        );
      })
      .then(function () {
        res.end();
      })
      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
  });

  app.post("/api/add-income/:id", authWare, function (req, res) {
    Income.create(req.body)
      .then(function (result) {
        return User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { income: result._id } },
          { new: true }
        );
      })
      .then(function () {
        res.end();
      })
      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
  });

  app.get("/api/getIncome/:id", authWare, function (req, res) {
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

  app.get("/api/getExpenses/:id", authWare, function (req, res) {
    User.findOne({ _id: req.params.id })
      .populate("expenses")
      .then(function (result) {
        console.log("expense", result);
        res.json(result);
      })

      .catch(function (err) {
        res.status(500).json({ error: err.message });
      });
  });

  app.post("/api/deleteIncome/", function (req, res) {
    // Remove a note using the objectID
    res.json(req.body)

    User.update(
      { _id: req.body.userId },
      { $pull: { income: { $in: [req.body.id] } } },

      // function(error, removed) {
      //   // Log any errors from mongojs
      //   if (error) {
      //     console.log(error);
      //     res.send(error);
      //   } else {
      //     // Otherwise, send the mongojs response to the browser
      //     // This will fire off the success function of the ajax request
      //     console.log(removed);
      //     res.send(removed);
      //   }
      // }
    ).then(function (res) {
      res.end()
    }).catch(err => {
      console.log(err.message)
    })

    res.end()
  });


  app.post("/api/deleteExpense/", function (req, res) {
  
    res.json(req.body)

    User.update(
      { _id: req.body.userId },
      { $pull: { expenses: { $in: [req.body.id] } } },
      
    ).then(function (res) {
      res.end()
    }).catch(err => {
      console.log(err.message)
    })

    res.end()
  });


  app.delete("/api/deleteExpenses/:id", function (req, res) {
    // Remove a note using the objectID
    console.log("Thisisisisisisisisisiis", +req.params);
    Expenses.remove(
      {
        _id: req.params.id
      },
      function (error, removed) {
        // Log any errors from mongojs
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          // Otherwise, send the mongojs response to the browser
          // This will fire off the success function of the ajax request
          console.log(removed);
          res.send(removed);
        }
      }
    );
  });

  app.put("/api/updateIncome/:id", function (req, res) {
    console.log("Hello this is params", req.params.id)
    console.log("Hello this is body ", req.body.nameIncome)

    Income.update({ "_id": req.body._id},
      { $set: { "valueIncome": req.body.valueIncome } }

    ).then(function (res) {
      res.end()
    }).catch(err => {
      console.log(err.message)
    })
    res.end();
  });

  app.put("/api/updateExpense/:id", function (req, res) {
    console.log("Hello this is params", req.params.id)
    console.log("Hello this is body ", req.body.name)

    Expenses.update({ "_id": req.body._id},
      { $set: { "value": req.body.value } }

    ).then(function (res) {
      res.end()
    }).catch(err => {
      console.log(err.message)
    })
    res.end();
  });
};
