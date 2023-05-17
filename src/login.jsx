import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" id="email" name="email" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button className="submit" type="submit">Log In</button>
            </form>
            <p> Don't have an account?
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register here</button> </p>
        </div>
    )
}