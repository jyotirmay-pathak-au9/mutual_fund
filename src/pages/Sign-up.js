import React from 'react'

function Sign() {
    return (
            <div className="form">
            <h1>Sign Up Form</h1>
            <form>
                <input type="text" placeholder="Name" name="name"/><br/>
                <input type="email" placeholder="Email" name="email" /><br/>
                <input type="password" placeholder="Password" name="password" /><br/>
                <input type="submit" value="Submit" />
            </form>    
        </div>
    )
}

export default Sign
