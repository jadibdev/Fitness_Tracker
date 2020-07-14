import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import logo from './logo.svg';
import SignIn from './components/Sign-in.js';
import { BrowserRouter as Router, Route } from "react-router-dom"
import SignUp from './components/Sign-up.js'
import Form from './components/NearForm'


/* function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}  */

// create our material ui theme using up to date typography variables
/* const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
}); */

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/nearform">
          <Form />
        </Route>
      </div>
    </Router>
  );
} 

export default App;
