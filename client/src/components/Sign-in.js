import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
import "./styles.css";
import axios from 'axios';
import LoggedIn from './LoggedIn'
import { useState } from 'react'
import Image from 'material-ui-image'
import Avatar from '@material-ui/core/Avatar';
import fitnessLogo from '../images/fitness.png'

function SignIn() {
    const [user, setUser] = useState({})
    const {
        register,
        handleSubmit,
        errors,
        setError,
        clearError,
        formState: { isSubmitting, firstName, lastName}
    } = useForm();
    const onSubmit = data => {

        axios.get('http://localhost:1337/users')
            .then(function (response) {
                // handle success
                response.data.map(function (dataItem) {
                    if ((dataItem.email === data.email) && (dataItem.password === parseInt(data.password))) {
                        console.log('User Exists: ' + dataItem.firstName + ' ' + dataItem.lastName)
                        console.log(dataItem)
                        setUser(dataItem)
                    } 
                }, )
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(console.log(user))
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
            <div style={{marginBottom: 100}}>
                <ul>
                    <li><Avatar alt="fitness-logo" src={fitnessLogo} /></li>
                    <li style={{color: "#fff"}}>itness Tracker</li>
                </ul>
            </div>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign In</h1>
                
                <label>Email:</label>
                <input name="email" ref={register({ required: true, minLength: 4})} />
                {errors.email && <p>Email is required</p>} 

                <label>Password:</label>
                <input name="password" ref={register({ required: true, minLength: {value: 4, message: "minimum is 4 characters"} })} />
                {errors.password && <p>Password is required</p>}


                <input disabled={isSubmitting} type="submit" />
            </form>
        </div>
    );
}

export default SignIn




