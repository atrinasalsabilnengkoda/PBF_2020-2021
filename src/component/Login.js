import React from 'react';
import '../CSS/Login.css';

function Login() {
    return (
        <div className="container">
            <br/>
            <h2>Login Form</h2>
            <div className="card">
                <br/>
                <h3>Assignment for Week 3</h3>
                <div className="row">
                    <p>Username</p>
                    <input type="text" placeholder="input your username" />
                </div>
                <div className="row">
                    <p>Password</p>
                    <input type="text" placeholder="input your password" />
                </div>
                <br/>
                <div className="row">
                    <button className='login-button'> Login </button>
                </div>
                <div className="row">
                    <input type="checkbox" name="rememberMe"/>
                    <p style={{marginTop:'25px'}}>Remember Me</p>
                </div>

                <br/>

                <div className="row">
                    <button className="cancel-button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;