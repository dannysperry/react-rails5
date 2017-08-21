import React from 'react'
import { Link } from 'react-router-dom'

const Logo = (props) => (
  <div className='Logo'>
    <Link to='/'>
      {props.children}
    </Link>
  </div>
)

export default Logo