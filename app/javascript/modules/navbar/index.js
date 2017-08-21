import React from 'react';

import NavItems from './NavItems'

const NavBar = (props) => (
  <nav className='NavBar'>
    <NavItems logo={props.logo}/>
  </nav>
)

export default NavBar