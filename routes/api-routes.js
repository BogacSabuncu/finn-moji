const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authWare = require("../middleware/authware");

module.exports = function (app) {
	app.post("/api/signup", function (req, res) {
		User.create(req.body).then(function (result) {
			res.json({ message: "user created" });
		}).catch(function (err) {
			res.status(500).json({ error: err.message });
		});
	});

	app.post("/api/authenticate", function (req, res) {
		const { username, password } = req.body;
		User.findOne({ username: username }).then(function (dbUser) {
			if (!dbUser) return res.status(401).json({ message: "Username or password is incorrect." });
			if (dbUser.comparePassword(password)) {

				const token = jwt.sign({
					data: dbUser._id
				}, "superSecretKey");

				res.json({
					id: dbUser._id,
					username: dbUser.username,
					token: token
				});

			} else {
				res.status(401).json({ message: "Username or password is incorrect." });
			}
		})
	});

	app.get("/api/users", function (req, res) {
		User.find().then(function (dbUser) {
			res.json(dbUser);
		}).catch(function (err) {
			res.status(500).json({ error: err.message });


		});
	});
}