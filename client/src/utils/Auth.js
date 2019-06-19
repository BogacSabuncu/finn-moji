import axios from "axios";

function Auth () {
	let loggedIn = false;

	function logIn (username, password, cb) {
		axios.post("/api/authenticate", {username, password})
			.then(response => {
				localStorage.setItem("token", response.data.token);
				loggedIn = true;
				cb(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}

	function logOut (cb) {
		localStorage.removeItem("token");
		loggedIn = false;
		cb();
	}

	function getToken () {
		return localStorage.getItem("token");
	}

	function isLoggedIn () {
		return loggedIn;
	}

	return {
		isLoggedIn,
		logIn,
		logOut,
		getToken
	}
}

export default Auth();