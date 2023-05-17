import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" id="email" name="email" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button className="submit" type="submit">Log In</button>
            </form>
            history.push("/register");
            <p>
                Already have an account?
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login here.</button>
            </p>

        </div>
        
    )
}