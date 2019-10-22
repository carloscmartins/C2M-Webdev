import React from 'react';
import Card from 'react-bootstrap/Card';

import './Projects.css';

let CC = require('../../img/CC_banner.jpg')
let BOFF = require('../../img/BOFF_banner.jpg')

const Projects = props => (
    <div className="Projects container">
    
    <h1>Featured Projects</h1>
    
    <div className="Professional">
        <a href="http://dev-chaandcav.pantheonsite.io/" target="blank">
        <Card>
            <Card.Img variant="top" src={CC} />
            <Card.Body>
            <Card.Title>Chalets and Caviar</Card.Title>
            <Card.Text>
                Presentation of the Agency. Properties' Listing. Contacts.
            </Card.Text>
                <div className="flex-card">
                    <div id="tool_tag">WordPress</div>
                    <div id="tool_tag">Elementor</div>
                    <div id="tool_tag">CSS</div>
                </div>
            </Card.Body>
        </Card>
        </a>
        
        <a href="https://gracious-panini-7bfa4f.netlify.com/" target="blank">
        <Card>
            <Card.Img variant="top" src={BOFF}/>
            <Card.Body>
            <Card.Title>Brooklyn Outdoor Film Festival</Card.Title>
            <Card.Text>
                Agenda. Pre-Reservation Form. Presentation of the Festival and Team.
            </Card.Text>
                <div className="flex-card">
                    <div id="tool_tag">HTML</div>
                    <div id="tool_tag">Bootstrap</div>
                </div>
            </Card.Body>
        </Card>
        </a>
        
    </div>
   
    </div>
);

export default Projects;

