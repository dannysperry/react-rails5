import React from 'react'
import { render } from 'react-dom'
import App from '../modules/layout'

import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root')

  render(<App />, node)
})