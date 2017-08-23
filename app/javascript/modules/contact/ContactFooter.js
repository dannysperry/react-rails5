import React from 'react'

import ContactMap from './ContactMap'
import ContactInfo from './ContactInfo'
import SocialIcons from './SocialIcons'

const ContactFooter = props => {
  return(
    <div className="ContactFooter container">
      <div id="contact-box" className="row">
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <h2>Contact Us</h2>
            <ContactInfo />

            <SocialIcons />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <h2>Google Us</h2>
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter


