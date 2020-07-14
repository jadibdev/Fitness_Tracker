import React from 'react';
import {Component} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { useForm } from "react-hook-form";
import axios from 'axios'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
					</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));


const logoStyle = makeStyles({
	root: {
		width: 100,
		height: 100,
		position: "absolute",
		top: 20,
		left: 50,
	}
}) 

export default function SignUp(props) {
	const classes = useStyles();
	const classes1 = logoStyle();

	// get hookform tools to handle the form	
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = data => {
		console.log(data);
	}; // your form submit function which will invoke after 

	//console.log(watch("example"));
	return (
			<Container component="main" maxWidth="xs">
				<FitnessCenterIcon className={classes1.root} color="primary" />
					<CssBaseline />
					<div className={classes.paper}>
							<Avatar className={classes.avatar}>
									<LockOutlinedIcon />
							</Avatar>
							<Typography component="h1" variant="h5">
									Sign up
							</Typography>
							<form className={classes.form} noValidate onSubmit={handleSubmit(data => {
								const firstName = data.firstName
								const lastName = data.lastName
								const email = data.email
								const password = data.password
								const userData = data

								axios.post('http://localhost:1337/users/add', userData)
									.then(() => {window.location='/'})

								console.log(data.firstName, data.lastName, data.email, data.password)
							})}>
									<Grid container spacing={2}>
											<Grid item xs={12} sm={6}>
													<TextField
															autoComplete="fname"
															name="firstName"
															variant="outlined"
															required
															fullWidth
															id="firstName"
															label="First Name"
															autoFocus
															inputRef={register}
													/>
											</Grid>
											<Grid item xs={12} sm={6}>
													<TextField
															variant="outlined"
															required
															fullWidth
															id="lastName"
															label="Last Name"
															name="lastName"
															autoComplete="lname"
															inputRef={register}
													/>
											</Grid>
											<Grid item xs={12}>
													<TextField
															variant="outlined"
															required
															fullWidth
															id="email"
															label="Email Address"
															name="email"
															autoComplete="email"
															inputRef={register}
													/>
											</Grid>
											<Grid item xs={12}>
													<TextField
															variant="outlined"
															required
															fullWidth
															name="password"
															label="Password"
															type="password"
															id="password"
															autoComplete="current-password"
															inputRef={register}
													/>
											</Grid>
											<Grid item xs={12}>
													<FormControlLabel
															control={<Checkbox value="allowExtraEmails" color="primary" />}
															label="I want to receive inspiration, marketing promotions and updates via email."
													/>
											</Grid>
									</Grid>
									<Button
											type="submit"
											fullWidth
											variant="contained"
											color="primary"
											className={classes.submit}
									>
											Sign Up
									</Button>
									<Grid container justify="flex-end">
											<Grid item>
													<Link href="sign-in" variant="body2">
															Already have an account? Sign in
													</Link>
											</Grid>
									</Grid>
							</form>
					</div>
					<Box mt={5}>
							<Copyright />
					</Box>
			</Container>
	)
}