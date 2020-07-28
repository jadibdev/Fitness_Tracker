import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UsersList from './Users'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ForumIcon from '@material-ui/icons/Forum';

import { IconButton } from '@material-ui/core';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider />
						<List>
								<ListItem button >
									
						<ListItemText style={{ fontSize: 36, color: "#bf1650"}}>FITNESS TRACKER</ListItemText>
								</ListItem>
								<ListItem button >
									<ListItemIcon><Brightness1Icon style={{ color: "#bf1650", border: "1px solid white"}}/></ListItemIcon>
									<ListItemText>Mohamed Jadib</ListItemText>
								</ListItem>
								<ListItem button >
									<ListItemIcon><FitnessCenterIcon style={{ color: "#bf1650"}}/></ListItemIcon>
									<ListItemText>Workouts</ListItemText>
								</ListItem>
								<ListItem button >
									<ListItemIcon><ForumIcon style={{ color: "#bf1650"}}/></ListItemIcon>
									<ListItemText>Community</ListItemText>
								</ListItem>
					
            </List>
        </div>
    );

	const menu = 
		['left'].map((anchor) => (
			<React.Fragment key={anchor} >
				<Button onClick={toggleDrawer(anchor, true)} style={{ backgroundColor: "#0e101c" }}><DehazeOutlinedIcon style={{ fontSize: 40, margin: 20, color: "#bf1650"}} /></Button>
				<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
					{list(anchor)}
				</Drawer>
			</React.Fragment>
		))

	return (
		<div>
			<Grid container spacing={2}>
				<Grid className={classes.paper} item xs={10}>
					{menu}
				</Grid>
				<Grid item xs={2}>			
					<AddCircleOutlineIcon style={{ fontSize: 40, marginTop: 25, color: "#bf1650"}}/>	
				</Grid>
				<Grid container>
					<Grid item xs={12}>
					
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
	}


    
		
