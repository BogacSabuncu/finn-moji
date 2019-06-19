import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";

const ProtectedRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => (
		Auth.isLoggedIn() ? (
			<Component {...props} />
		) : (
			<Redirect to="/login" />
		)
	)} {...rest} />
);

export default ProtectedRoute;