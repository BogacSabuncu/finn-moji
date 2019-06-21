import React from "react";
import UserContext from "../context/UserContext";

const Profile = (props) => (
	<UserContext.Consumer>
		{context => {
			return <div>
				<h1>Home Page (protected)</h1>
				<h2>Welcome, {context.user.username}!</h2>
			</div>
		}}
	</UserContext.Consumer>
);

export default Profile;