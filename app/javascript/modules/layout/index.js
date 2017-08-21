import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '../../config/routes'

import NavBar from '../navbar'

const logo = <h1>Welcome to FirePit!</h1>

const App = (props) => (
  <Router>
    <div className='App'>

      <NavBar logo={logo} />

      <div className='Routes'>
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