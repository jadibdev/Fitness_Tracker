import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
import "./styles.css";
import axios from 'axios';

function SignUp() {
	const {
		register,
		handleSubmit,
		errors,
		setError,
		clearError,
		formState: { isSubmitting }
	} = useForm();
	const onSubmit = data => {
		const user = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password
		}
		axios.get('http://localhost:1337/users')
			.then(function (response) {
				// handle success
				response.data.map(function (dataItem) {
					if (dataItem.email === data.email) {
						console.log('User already Exists')
						window.location = './LoggedIn'
					} else {
						axios.post('http://localhost:1337/users/add', user)
							.then(res => console.log(res.data))
							.then(() => window.location = './LoggedIn')
					}
				})
				console.log(response);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
		console.log(data)
	};
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
	const validateUserName = async value => {
		await sleep(1000);
		if (value !== "bill") {
			setError("username", "validate");
		} else {
			clearError("username");
		}
	};

	return (
		<div>
			<div style={{ marginBottom: 100 }}>
				<p style={{ fontSize: 30, marginLeft: 70, paddingTop: 20}}>FITNESS TRACKER</p>
			</div>
			<form className="App" onSubmit={handleSubmit(onSubmit)}>
				<h1>Sign Up</h1>
				<label>First Name:</label>
				<input name="firstName" ref={register({ required: true, minLength: 2})} />
				{errors.firstName && <p>First Name is required</p>}

				<label>Last Name:</label>
				<input name="lastName" ref={register({ required: true, minLength: 2 })} />
				{errors.lastName && <p>Last Name is required</p>}

				<label>Email</label>
				<input
					name="email"
					ref={register({ required: true, pattern: /^\S+@\S+$/i })}
				/>
				{errors.email && <p>Email is required</p>}

				<label>Password</label>
				<input
					name="password"
					type="number"
					ref={register({ required: true, minLength: {value: 6, message: "Too short, a minimum of 6 characters is required"} })}
				/>
				{errors.password && <p>Password is required: minimum 6 characters</p>}

				
				<input disabled={isSubmitting} type="submit" />
			</form>
		</div>
	);
}

export default SignUp
