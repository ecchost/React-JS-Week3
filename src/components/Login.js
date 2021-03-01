import React from 'react';
import '../css/Login.css';

function Login() {
    return (
        <div className="container">
            <h1>Login Form</h1>
            <div className="card">
                <h3>Assignment of Week 3</h3>
                <br/>
                <div className="row">
                    <p>Username</p>
                    <input type="text" placeholder="Input username..." />
                </div>
                <div className="row">
                    <p>Password</p>
                    <input type="text" placeholder="Input your password" />
                </div>
                

                <div className="row">
                    <button className='login-button__green'> Login </button>
                </div>
                <div className="row">
                    <input type="checkbox" name="rememberMe"/>
                    <p style={{fontWeight:'normal', marginTop:'25px'}}>Remember Me</p>
                </div>

                <br/>

                <div className="row">
                    <button className="cancel-button__red">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;