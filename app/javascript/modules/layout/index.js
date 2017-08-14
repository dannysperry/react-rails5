import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '../../config/routes'
import styles from 'stylesheets/app'

import NavBar from '../navbar'

const logo = <h1>Welcome to FirePit!</h1>

const App = (props) => (
  <Router>
    <div className={styles.root}>

      <NavBar logo={logo} />

      <div className={styles.Routes}>
        <Switch>
          {routes.map((route, i) => (
            route.path === '/' ?
              <Route exact path={route.path} component={route.component} key={i} /> :
              <Route path={route.path} component={route.component} key={i} />
          ))}
        </Switch>
      </div>
    </div>
  </Router>

)

export default App