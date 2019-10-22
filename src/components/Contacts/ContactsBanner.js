import React from 'react';
import './ContactsBanner.css';

const ContactsBanner = props => (

<div>
<div id="spacer"/>
<div id="center">
<div className="container-fluid banner_contact">
  <h1 className="banner-heading">Why not getting in touch?</h1>
  <p className="banner-p">
  I am ready to help you with the online solution you need.
  </p>
  <a href="mailto:carlos@c2m-webdev.com">
  <button>
  Send me a message!
  </button>
  </a>
</div>
</div>
</div>

);

export default ContactsBanner