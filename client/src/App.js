import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import logo from './logo.svg';
import SignIn from './components/Sign-in.js';
import { BrowserRouter as Router, Route } from "react-router-dom"
import SignUp from './components/Sign-up.js'
import Signin from './components/Sign-in.js'


function App() {
  return (
        <div>
          <Signin />
        </div>
  );
} 

export default App;
