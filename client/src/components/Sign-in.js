import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
import "./styles.css";
import axios from 'axios';

function SignIn() {
    const {
        register,
        handleSubmit,
        errors,
        setError,
        clearError,
        formState: { isSubmitting }
    } = useForm();
    const onSubmit = data => {

        axios.get('http://localhost:1337/users')
            .then(function (response) {
                // handle success
                console.log('got response successfully: ', response)
                response.data.map(function (dataItem) {
                    console.log(dataItem)
                    console.log(data.email)
                    if (dataItem.email === data.email && dataItem.password === data.password) {
                        console.log('User Exists: ' + dataItem)
                        window.location = './LoggedIn'
                    }
                })
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                console.log(data)
            });
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
                <p style={{ fontSize: 30, marginLeft: 70, paddingTop: 20 }}>FITNESS TRACKER</p>
            </div>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign In</h1>
                
                <label>Email:</label>
                <input name="email" ref={register({ required: true, minLength: 4})} />
                {errors.email && <p>Email is required</p>} 

                <label>Password:</label>
                <input name="password" ref={register({ required: true, minLength: {value: 6, message: "minimum is 6 characters"} })} />
                {errors.password && <p>Password is required</p>}


                <input disabled={isSubmitting} type="submit" />
            </form>
        </div>
    );
}

export default SignIn



/* const email = data.email
const password = data.password
const userData = data

axios.get('http://localhost:1337/users')
    .then(function (response) {
        // handle success
        response.data.map(function (dataItem) {
            if (dataItem.email === email) {
                console.log('User Exists')
                window.location = './LoggedIn'
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
console.log(userData) */