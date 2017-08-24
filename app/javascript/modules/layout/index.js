import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from 'config/routes'

import Header from '../header'
import Footer from '../footer'

const App = (props) => (
  <Router>
    <div className='App'>
      <Header />

      <div className='Routes'>
        <Switch>
          {routes.map((route, i) => (
            <Route exact path={route.path} component={route.component} key={i} />
          ))}
        </Switch>
      </div>

      <Footer />
    </div>
  </Router>

)

export default App