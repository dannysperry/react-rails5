import React, { Component } from 'react'
const { env } = require('process')

import styles from 'stylesheets/menu/index'

const GREENBITS_API_KEY='Jb-lf-fEuCQdPWawNv-Agg'
const GREENBITS_MENU_ID='0049dd84-555d-448d-8929-70ff15e75d77'

class Menu extends Component {
  render() {
    return(
      <div className={styles.root}>
        <inventory-list
          menu-id={GREENBITS_API_KEY}
          manu-api-key={GREENBITS_MENU_ID}
          default-item
          default-group-header>
          <div>
            <yield to="header">
              <h1>React Menu [menuName]</h1>
            </yield>
          </div>
        </inventory-list>
      </div>)
  }
}

export default Menu