import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = props => (

    <footer className="footer">
    <div className="container">
        <div className="icon">
            <ul>
            <li><SocialIcon url="http://linkedin.com/in/carlos-martins-2689bb3b/" fgColor="white" target="blank" style={{ height: 25, width: 25 }}/></li>
            <li><SocialIcon url="https://github.com/carloscmartins" fgColor="white" target="blank" style={{ height: 25, width: 25 }}/></li>
            </ul>
        </div>
        <div className="spacer" />
        <div id="c2m">© C2M 2019</div>
    </div>
    </footer>
)

export default Footer;