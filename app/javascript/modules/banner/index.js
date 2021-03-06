import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Banner extends Component {
  render() {
    let sectionId, classNames, colSizes, title, subtitle = null
    if (this.props.big) {
      sectionId = 'BannerBig'
      classNames = 'animated fadeInUp'
      colSizes = "col-md-10 col-md-offset-2"
    } else {
      sectionId = 'Banner'
      classNames = ''
      colSizes = 'col-md-12'
    }

    title = <h1 className={classNames}>{this.props.title}</h1>
    subtitle = <p className={classNames}>{this.props.subtitle}</p>

    return(
      <section id={sectionId} className="Banner">
        <div className="container">
          <div className="row">
            <div className={colSizes}>
              <div className="block">
                { title }
                { subtitle }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner