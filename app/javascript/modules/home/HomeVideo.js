import React, { Component } from 'react'
import { render } from 'react-dom'

import { DefaultPlayer as Video } from 'html5video'
import 'html5video/dist/styles.css'
import styles from 'stylesheets/home/_HomeVideo'
import Filter from './Filter'

import Poster from 'images/cover/Earlybird.jpg'
import WebmPoster from 'images/cover/Earlybird.webm'
import Mp4Poster from 'images/cover/Earlybird.mp4'

class HomeVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {showFilter: false};
  }

  componentWillMount(props) {
    if (typeof(this.props.message) !== 'undefined' && this.props.message.length > 0) {
      this.setState({showFilter: true})
    }
  }


  render() {
    const isShowingFilter = this.state.showFilter;
    let filter = <div></div>;
    if (isShowingFilter) {
      filter = <Filter>{this.props.message}</Filter>
    }


    return (
      <div className={styles.root}>
        <Video autoPlay loop muted
          controls={[]}
          poster={Poster} >
            <source src={WebmPoster} type="video/webm" />
            <source src={Mp4Poster} type="video/mp4" />
        </Video>
        {filter}
      </div>
    )
  }
  
}

export default HomeVideo