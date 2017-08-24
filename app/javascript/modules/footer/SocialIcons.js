import React, { Component } from 'react'
import settings from 'config/settings'

export default class SocialIcons extends Component {

  render() {
    const icons = settings.social_icons.map((socialIcon, i) => (
      <li key={i}>
        <a href={socialIcon.href}>
          <i className={`fa ${socialIcon.fa_class}`}></i>
        </a>
      </li>
    ))
    return (
      <ul className="SocialIcons">
        { icons }
      </ul>
    )
  }
}