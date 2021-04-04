import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Form from './pages/Form';
import Login from './pages/Login';
import Sign from './pages/Sign-up';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/About' component={About} />
          <Route path='/Form' component={Form} /> 
          <Route path='/Login' component={Login} />
          <Route path='/Sign-up' component={Sign} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
