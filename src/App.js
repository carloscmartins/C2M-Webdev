import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import About from './components/About/About.js';
import Contacts from './components/Contacts/Contacts.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/portfolio" component={Portfolio} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contacts" component={Contacts} exact />
          </switch>
        
        </div>
        
        
      </BrowserRouter>
      
      
    );
  }
}

export default App;
