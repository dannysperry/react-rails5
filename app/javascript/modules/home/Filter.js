import React from 'react';

import { Link } from 'react-router-dom'

import styles from 'stylesheets/home/_Filter'

const Filter = (props) => (
  <div className={styles.root}>
    <span className='Filter--inner'>
      <div className='Filter--inner_icon'>
        {props.children}
      </div>
    </span>
  </div>
)

export default Filter

