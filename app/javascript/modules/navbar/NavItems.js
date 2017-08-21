import React from 'react';
import { Link } from 'react-router-dom'

import routes, { navRoutes } from '../../config/routes'
import Logo from './Logo'

const NavItems = (props) => (
  <ul className='NavItems'>
    <li>
      <Logo>
        {props.logo}
      </Logo>
    </li>
    {navRoutes.map((route, i) => (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key}
        </Link>
      </li>
    ))}
  </ul>
)

export default NavItems