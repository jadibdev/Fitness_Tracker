import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		marginLeft: 30
	},
}));

function Display(props) {
	const classes = useStyles();
	return (
		<List component="nav" className={classes.root} aria-label="contacts">
			<ListItem button>
				<ListItemIcon>
					<StarIcon />
				</ListItemIcon>
				<ListItemText key={props.password} primary={props.firstName + ' ' + props.lastName} />
			</ListItem>
		</List>
	)
}


function UsersList() {
	// Store the users in a state variable.
	// We are passing an empty array as the default value.
	let [users, setUsers] = useState([]);

	// The useEffect() hook fires any time that the component is rendered.
	// An empty array is passed as the second argument so that the effect only fires once.
	useEffect(() => {
		axios
			.get("http://localhost:1337/users")
			.then(response => setUsers(response.data));
	}, []);

	return (
		<div>
			<h3 style={{margin:50}}>Users List</h3>
			{users.map(({ firstName, lastName, email, password }) => <Display key={password.toString()} firstName={firstName} lastName={lastName} email={email} pasword={password}/>)}
		</div>
	);
}

export default UsersList
