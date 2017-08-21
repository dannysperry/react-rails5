import React from 'react';

import NavItems from './NavItems'
import LogoImage from 'images/logo/logo.jpg'

const NavBar = (props) => (
  <nav class="NavBar navbar">
    <div class="container-fluid">

      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img class="navbar--logo_img" src={LogoImage} alt="Logo">
        </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <NavItems />
      </div>
    </div>
  </nav>
)

export default NavBar