import React, { Component } from 'react';
import Banner from './Banner/Banner.js';
import Projects from './Projects/Projects.js';
import ContactsBanner from './Contacts/ContactsBanner.js';
import Footer from '../components/Footer/Footer.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div id="spacer"/>
        <Banner />  
        <Projects />
        <ContactsBanner />
        <Footer />         
      </div>
    );
  }
}

export default Home;
