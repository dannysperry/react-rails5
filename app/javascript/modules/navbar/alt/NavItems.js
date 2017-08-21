import React from 'react';
import { Link } from 'react-router-dom'

import routes, { navRoutes } from 'config/routes'

const NavItems = (props) => (
  <ul class="NavItems nav navbar-nav navbar-right">
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