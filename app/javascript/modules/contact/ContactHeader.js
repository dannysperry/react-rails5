import React from 'react'

import ContactForm from './ContactForm'

const ContactHeader = props => {
  return(
    <section className="ContactHeader Banner" id="global-header">
      <div className="container">
        <div className="row">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactHeader