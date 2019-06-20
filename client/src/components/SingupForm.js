import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import UserContext from "../context/UserContext";
import Auth from "../utils/Auth";

class SignupForm extends Component {
	static contextType = UserContext;

	state = {
		username: "",
        password: "",
        email: "",
        gender: "",
        age: "",
        income: "",
        expenses: "",

	}

	changeHandler = (e) => {
		const {name, value} = e.target;
		this.setState({ [name]: value });
	}

	submitHandler = (e) => {
		e.preventDefault();
		const {username, password} = this.state;
		if (username && password) {
			Auth.logIn(username, password, (response) => {
				this.context.setUser(response);
				this.props.history.push("/");
			});
		}
	}

	render () {
		return (
			<form onSubmit={this.submitHandler}>
				<input
					type="text"
					name="username"
					value={this.state.username}
                    onChange={this.changeHandler}
                    placeholder="Username"
				/>
				<input
					type="password"
					name="password" 
					value={this.state.password}
                    onChange={this.changeHandler}
                    placeholder="Password"
				/>
                <input
					type="email"
					name="email" 
					value={this.state.email}
                    onChange={this.changeHandler}
                    placeholder="Email"
				/>
                <input
					type="text"
					name="gender" 
					value={this.state.gender}
                    onChange={this.changeHandler}
                    placeholder="Gender"
				/>
                <input
					type="text"
					name="age" 
					value={this.state.age}
                    onChange={this.changeHandler}
                    placeholder="Age"
				/>
                <input
					type="text"
					name="income" 
					value={this.state.income}
                    onChange={this.changeHandler}
                    placeholder="Income"
				/>
                <input
					type="expenses"
					name="expenses" 
					value={this.state.expenses}
                    onChange={this.changeHandler}
                    placeholder="Expenses"
				/>
                
                
				<button type="submit">Create</button>
			</form>
		);
	}
}

export default withRouter(SignupForm);