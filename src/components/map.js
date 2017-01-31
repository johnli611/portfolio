import React, { Component }               from 'react';
import { withGoogleMap, GoogleMap }       from "react-google-maps";
import _                                  from 'underscore';

const mapOptions = {
  center: { lat: 43.675819, lng: 7.289429},
  zoom: 4,
  zoomControl: false,
  streetViewControl: false,
  scrollwheel: false,
  rotateControl: false,
  panControl: false,
  mapTypeControl: false,
  styles: [
    {
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "poi",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "administrative",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "road",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        { color: "#000000" }
      ]
    },
    {
      elementType: "geometry.stroke",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        { color: "#36454f" }
      ]
    }
  ]
};

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    options={mapOptions}
    defaultZoom={4}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

export default class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={<div style={{ height: `550px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={_.noop}
        onMapClick={_.noop}
        markers={[]}
        onMarkerRightClick={_.noop}
      />
    );
  }

}