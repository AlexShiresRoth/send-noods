import React from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import Marker from "./Marker";

import { maps_api_key } from "../../config/keys";

import "../css/main.css";

class RamenSpots extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, lng: null, userLat: null, userLng: null };
  }

  static defaultProps = {
    center: {
      lat: null,
      lng: null
    },
    zoom: 12
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          userLat: position.coords.latitude,
          userLng: position.coords.longitude
        }),
      err => this.setState({ errMessage: err.message })
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.locations !== prevProps.locations) {
      if (this.props.locations.length > 0) {
        this.setState({
          lat: this.props.locations[0].geometry.location.lat,
          lng: this.props.locations[0].geometry.location.lng
        });
      }
    }
  }

  render() {
    const renderMarkers = this.props.locations.map(location => {
      return (
        <Marker
          lat={location.geometry.location.lat}
          lng={location.geometry.location.lng}
          key={location.id}
          locationInfo={location}
          text="Ramen Spot"
        />
      );
    });

    if (this.props.locations.length > 0) {
      return (
        <div className="middle__container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: maps_api_key }}
            defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
            defaultZoom={this.props.zoom}
            center={{ lat: this.state.lat, lng: this.state.lng }}
            yesIWantToUseGoogleMapApiInternals
          >
            {renderMarkers}

            <LocationMarker
              lat={this.state.userLat}
              lng={this.state.userLng}
              text="Current User Location"
            />
          </GoogleMapReact>
        </div>
      );
    } else {
      return (
        <div style={{ height: "40vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: maps_api_key }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={{ lat: this.state.lat, lng: this.state.lng }}
            yesIWantToUseGoogleMapApiInternals
          >
            <LocationMarker
              lat={this.state.lat}
              lng={this.state.lng}
              text="Current User Location"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default RamenSpots;
