import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="form">
            <h1>LOGIN</h1>
            <form>
                <input type="email" placeholder="Email" name="email" /><br/>
                <input type="password" placeholder="Password" name="password" /><br/>
                <input type="submit" value="Submit" />
            </form>    
            <p>Don't have an account? <Link to='/Sign-up'>Sign Up</Link></p>
        </div>
    )
}

export default Login
