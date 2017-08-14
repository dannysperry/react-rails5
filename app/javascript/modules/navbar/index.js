import React from 'react';

import NavItems from './NavItems'

import styles from 'stylesheets/navbar/index'

const NavBar = (props) => (
  <nav className={styles.root}>
    <NavItems logo={props.logo}/>
  </nav>
)

export default NavBar