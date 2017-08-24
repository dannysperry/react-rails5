import React from 'react'
import { Link } from 'react-router-dom'
import settings from 'config/settings'

const ContactInfo = props => {
  return (
    <ul className="ContactInfo">
      <li>
        <address><i className="fa fa-map-marker"></i>{ settings.address }</address>
      </li>
      <li>
        <i className="fa fa-envelope-o"></i>Email: <Link to="/contact">{ settings.email }</Link>
      </li>
      <li>
        <i className="fa fa-phone"></i>Phone: <a href="tel:360-875-8189">{ settings.phone_number }</a>
      </li>
    </ul>
  )
}

export default ContactInfo