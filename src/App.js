import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Services from './Services';
import Products from './Product';
import SignUp from './SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Router>
    </>
  );
}

export default App;
