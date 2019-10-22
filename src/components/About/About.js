import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from '../Footer/Footer.js';
import './About.css';

let CCM = require('../../img/cm_bwgranulado_circ.png')
let WEM = require('../../img/weMap.png')
let IST = require('../../img/ist.png')
let OCR = require('../../img/openclassrooms.png')

const About = props =>(

<div>
<div id="spacer"/>

<div className="container-fluid" id="backgr"> 

  <div className="banner-about align-center">
  
    <img src={CCM} alt="Carlos Martins"></img>
    
    <div id="center-text">
      <h1 className="banner-heading-about">Carlos Martins</h1>
      <span className="banner-p-about">Web Development Student with Hydropower Consulting background</span>
    </div>
  
  </div>

  <div id="flex-skill">
    <div className="flex">
      <div id="skill_tag">HTML</div>
      <div id="skill_tag">CSS</div>
      <div id="skill_tag">Bootstrap</div>
      <div id="skill_tag">WordPress</div>
      <div id="skill_tag">React</div>
      <div id="skill_tag">Project Management</div>
      <div id="skill_tag">Project Acquisition</div>
      <div id="skill_tag">Business Development</div>
      <div id="skill_tag">Worldwide Experience</div>
    </div>
  </div>

</div>
 
<div className="container align-center">
  <img src={WEM} alt="Work Experience Map" className="resp-img"></img>
</div>

<div className="container flex">
  <div className="custom-card">
    <h2>Professional Background</h2>
  
    <Row>
      <Col xl="8" lg="8">Project Manager - Hydropower</Col>
      <Col xl="4" lg="4">11/2015 - 09/2019</Col> 
    </Row>
    
    <Row>
      <Col xl="8" lg="8">Hydropower Engineer</Col>
      <Col xl="4" lg="4">04/2013 - 09/2015</Col>
    </Row>
    
    <Row>
      <Col xl="8" lg="8">Consultant - Hydropower</Col>
      <Col xl="4" lg="4">02/2010 - 02/2013</Col>
    </Row>
  </div>
  
  <div className="custom-card">
    <h2>Education</h2>
    
    <Row>
      <Col xl="2" lg="2"><a href="https://openclassrooms.com/" alt="openclassrooms" target="blank"><img src={OCR} alt="OpenClassrooms"></img></a></Col>
      <Col xl="7" lg="7">B.Sc. Web Development - Full Stack Developer</Col> 
      <Col xl="3" lg="3">December 2019 (expected)</Col>
    </Row>
    
    <Row>
      <Col xl="2" lg="2"><a href="https://tecnico.ulisboa.pt/en/" alt="IST" target="blank"><img src={IST} alt="Instituto Superior Técnico"></img></a></Col>
      <Col xl="7" lg="7">M.Sc. Civil Engineering - Hydropower and Water Resources</Col> 
      <Col xl="3" lg="3">October 2010</Col>
    </Row>
  </div>   

</div>


  <Footer />

</div>




);

export default About;