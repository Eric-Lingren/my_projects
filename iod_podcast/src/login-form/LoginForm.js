import React from 'react';
import './login-form-styles.css';
import { withAuthProvider } from '../context/AuthProvider'

function LoginForm(props) {
    return (
        <div className="login-form-wrapper">
            <form className='login-form' onSubmit={props.handleSubmit}>
                <h2 className='form-title'> Please verify your email... </h2>
                {!props.loginAttemptFailed ? 
                <div className='input-wrapper'>
                    <span> Email: </span> 
                    <input type='email' name='userEmail' className='login-input-field' onChange={props.handleChange}></input>
                </div>
                : 
                <div className='input-wrapper'>
                    <span > Please Enter a Valid Login: </span> 
                    <input type='email' name='userEmail' className='login-input-field-attempt-failed' onChange={props.handleChange}></input>
                </div>
                }
                
                
                <button className='login-button'> Enter </button>
            </form>
        </div>
    );
}

export default withAuthProvider(LoginForm);