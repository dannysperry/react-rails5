import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'stylesheets/navbar/_Logo'

const Logo = (props) => (
  <div className={styles.root}>
    <Link to='/'>
      {props.children}
    </Link>
  </div>
)

export default Logo