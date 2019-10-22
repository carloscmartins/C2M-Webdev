import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => (
    <header className="Navbar">
        <nav className="Navbar_nav">
            <div className="Navbar_logo"><NavLink to="/">C2M</NavLink></div>
            <div className="spacer"/>
            <div className="Navbar_nav-items">
                <ul>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contacts">Contact</NavLink></li> 
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;