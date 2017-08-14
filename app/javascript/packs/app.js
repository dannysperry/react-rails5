import React from 'react'
import { render } from 'react-dom'
import App from '../modules/layout'

import 'normalize.css' // important to have this in the top most level of the project

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root')

  render(<App />, node)
})