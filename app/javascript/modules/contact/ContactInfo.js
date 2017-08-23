import React from 'react'
import { Link } from 'react-router-dom'

const ContactInfo = props => {
  return (
    <ul className="ContactInfo">
      <li>
        <address><i className="fa fa-map-marker"></i>613 Montana Ave #2, South Bend, WA 98586</address>
      </li>
      <li>
        <i className="fa fa-envelope-o"></i>Email: <Link to="/contact">growersoutlet1@gmail.com</Link>
      </li>
      <li>
        <i className="fa fa-phone"></i>Phone: <a href="tel:360-875-8189">(360) 875-8189</a>
      </li>
    </ul>
  )
}

export default ContactInfo