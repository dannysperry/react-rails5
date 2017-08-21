import React from 'react';

import { Link } from 'react-router-dom'

const Filter = (props) => (
  <div className='Filter'>
    <span className='Filter--inner'>
      <div className='Filter--inner_icon'>
        {props.children}
      </div>
    </span>
  </div>
)

export default Filter

