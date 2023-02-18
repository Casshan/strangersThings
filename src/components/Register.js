import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [ RegisteredUsername, setRegisteredUsername ] = useState('');
    const [ RegisteredPassword, setRegisteredPassword ] = useState('');

    const accountCreation = async () => {
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: 'username1234890',
                    password: 'password1234890'
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error)
    }

    return (
        <div id='Login' className='container'>
            <form>
                <h1>Register</h1>
                <div id='login-inputs' className="form-group">
                    <input type="username" className="form-control" placeholder="Username"></input>
                </div>
                <div id='login-inputs' className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div id='login-inputs' className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"></input>
                </div>
                <Link to='/posts'><button onClick={() => {
                    accountCreation();
                }} type="submit" id='login-buttons' className="btn btn-primary">Register</button></Link>
                <div>
                    <small className="form-text text-muted">Already have an account? <Link to='/login'>Click Here.</Link></small>
                </div>
            </form>
        </div>
    )

}

export default Register;