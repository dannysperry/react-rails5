import React, { Component } from 'react';

import NavItems from './NavItems'
import LogoImage from 'images/logo.png'

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar navbar">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img className="navbar--logo_img" src={LogoImage} alt="Logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <NavItems />
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar