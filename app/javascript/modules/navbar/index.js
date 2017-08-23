import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import NavItems from './NavItems'
import LogoImage from 'images/logo.png'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    const buttonClass = `navbar-toggle ${this.state.collapsed ? 'collapsed' : ''}`
    const dropdownClass= `collapse navbar-collapse ${this.state.collapsed ? '' : 'in'}`

    return (
      <nav className="NavBar navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className={buttonClass} onClick={this.handleClick}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              <img className="navbar--logo_img" src={LogoImage} alt="Logo" />
            </Link>
          </div>

          <div className={dropdownClass}>
            <NavItems />
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar