import React from 'react'

import ContactHeader from './ContactHeader'
import ContactFooter from './ContactFooter'

const Contact = props => {
  return(
    <section className="Contact" id="contact-form">
      <ContactHeader />
      <ContactFooter />
    </section>
  )
}

export default Contact