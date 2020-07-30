import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SignUp from './components/Sign-up.js'
import SignIn from './components/Sign-in.js'
import UsersList from './components/Users'
import App2 from './components/codeShop'
import CountEverything from './components/total'
import ImageAvatars from './components/codeShop'
import LoggedIn from './components/LoggedIn'
import CreateExercise from './components/create-exercise'




function App() {
  return (
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/users" component={UsersList} />
      <Route path="/codeShop" component={ImageAvatars} />
      <Route path="/total" component={CountEverything} />
      <Route path="/LoggedIn" component={LoggedIn} />
      <Route path="/CreateExercise" component={CreateExercise} />
    </Router>
  );
} 

export default App;
