import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';



function Contact() {
  return (
      <div className='container'>
        <h1>We'd love to hear from you</h1>
        <p>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions </p>
        <Link to='/Form' className='button'>GET IN TOUCH</Link>
      </div>
  );
}

export default Contact;
