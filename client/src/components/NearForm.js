// import built in hook for functional component state

import React, { useState } from "react";
// importing useCallback
import { useCallback } from "react";
// material-ui hook functions
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import material-ui components
import { Paper, TextField, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Container from '@material-ui/core/Container';
import { useForm } from "react-hook-form";
import axios from 'axios'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Fitness Tracker
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

//create a custom material-ui hook to access class styles
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
		marginTop: theme.spacing(1),
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

function Form() {
	// use of custom hook to bring in styles (usually done with HOC and prop)
	const classes = useStyles();
	const classes1 = logoStyle()
	// get hookform tools to handle the form	
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = data => {
		console.log(data);
	}; // your form submit function which will invoke after 

	console.log(watch("example"));

    return (
			<Container component="main" maxWidth="xs">
				<FitnessCenterIcon className={classes1.root} color="primary" />
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
          </Typography>
					<form className={classes.form} noValidate onSubmit={handleSubmit(data => {
						const email = data.email
						const password = data.password
						const userData = data

						axios.post('http://localhost:1337/signin', userData)
							.then(res => res.send(userData))

						console.log(data.email, data.password)
					})}>
					
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							inputRef={register}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							inputRef={register}
						/>
						<FormControlLabel
							control={<Checkbox inputRef={register} name="remember" color="primary" defaultValue={false}/>}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign In
                    </Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
                            </Link>
							</Grid>
							<Grid item>
								<Link href='sign-up' variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Container>
    );
}
export default Form;