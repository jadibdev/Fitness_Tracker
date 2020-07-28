import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
import "./styles.css";

function ExerciseForm() {
    const {
        register,
        handleSubmit,
        errors,
        setError,
        clearError,
        formState: { isSubmitting }
    } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
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
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <h1>Create Exercise</h1>
            <label>First Name:</label>
            <input name="firstName" ref={register({ required: true })} />
            <ErrorMessage error={errors.firstName} />

            <label>Last Name:</label>
            <input name="lastName" ref={register({ required: true, minLength: 2 })} />
            <ErrorMessage error={errors.firstName} />

            <label>Gender</label>
            <select name="gender" ref={register({ required: true })}>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <ErrorMessage error={errors.gender} />

            <label>Username</label>
            <input
                name="username"
                onBlur={e => validateUserName(e.target.value)}
                ref={register({ required: true, validate: validateUserName })}
            />
            <ErrorMessage error={errors.username} />

            <label>Email</label>
            <input
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <ErrorMessage error={errors.email} />

            <label>Age</label>
            <input
                name="age"
                type="number"
                ref={register({ required: true, min: 18 })}
            />
            <ErrorMessage error={errors.age} />

            <label>About you</label>
            <textarea name="aboutyou" ref={register} />

            <input disabled={isSubmitting} type="submit" />
        </form>
    );
}

export default ExerciseForm
