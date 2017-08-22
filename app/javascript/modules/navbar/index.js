import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
            <Link to="/" className="navbar-brand">
              <img className="navbar--logo_img" src={LogoImage} alt="Logo" />
            </Link>
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