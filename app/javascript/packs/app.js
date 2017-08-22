import React from 'react'
import { render } from 'react-dom'
import App from '../modules/layout/alt'

import './main_alt.scss';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root')

  render(<App />, node)
})