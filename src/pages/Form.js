import React from 'react';
import './Form.css';

function Form() {
    return (
        <div className="form">
            <h1>QUERY FORM</h1>
            <form>
                <input type="text" placeholder="Name" name="name"/><br/>
                <input type="email" placeholder="Email" name="email" /><br/>
                <input type="number" placeholder="Phone Number" name="number" /><br/>
                <input type="text-area" placeholder="Enter your query" className="query"/><br/>
                <input type="submit" value="Submit" />
            </form>    
        </div>
    )
}

export default Form
