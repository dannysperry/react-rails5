import { default as React, Component, PropTypes } from 'react'
import AsyncGoogleMap from './AsyncGoogleMap'

export default class ContactMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 46.668253,
          lng: -123.787084,
        },
        key: `South Bend, WA`,
        defaultAnimation: 2,
      }],
    }
  }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      // console.log(map.getZoom());
    }
  }

  handleMapClick(event) {
    const nextMarkers = [
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      }
    ];
    this.setState({
      markers: [{
        position: {
          lat: 46.668253,
          lng: -123.787084,
        },
        key: `Taiwan`,
        defaultAnimation: 2,
      }, ...nextMarkers],
    });
  }

  handleMarkerRightClick(targetMarker) {
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return(
      <AsyncGoogleMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBZ8_pTTeGFMRqJSYZsS4b3PoQ_NEiP--c"
        loadingElement={
          <div>
            Loading...
          </div>
        }
        containerElement={
          <div className='google_map--container' />
        }
        mapElement={
          <div className='google_map--canvas' />
        }
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        markers={this.state.markers}
        onMarkerRightClick={this.handleMarkerRightClick}
      />
    )
  }
}