import React from 'react'

import ContactForm from './ContactForm'
import Banner from '../banner'

const ContactHeader = props => {
  return(
    <Banner>
      <ContactForm />
    </Banner>
  )
}

export default ContactHeader