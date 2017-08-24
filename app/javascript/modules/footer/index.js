import React from 'react'

import Map from '../map'
import ContactInfo from './ContactInfo'
import SocialIcons from './SocialIcons'

const Footer = props => {
  return(
    <footer className="Footer container">
      <div id="contact-box" className="row">
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <h2>Save our contact information</h2>
            <ContactInfo />

            <SocialIcons />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <h2>Google Us</h2>
            <Map />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer