import React from 'react'

import ContactForm from './ContactForm'

import styles from 'stylesheets/contact/_Contact'

const Contact = props => {
  return(
    <div className={styles.root}>
      <h1>Contact Us!</h1>
      <ContactForm />
    </div>
  )
}

export default Contact