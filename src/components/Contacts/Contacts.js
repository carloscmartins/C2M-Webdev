import React from 'react';
import ContactsBanner from '../Contacts/ContactsBanner.js';
import Footer from '../Footer/Footer.js';
import './Contacts.css'

const Contacts = props => (

<div>
<div id="spacer"/> 
<ContactsBanner />
<div id="footer_bottom">
<Footer />
</div>
</div>

);

export default Contacts