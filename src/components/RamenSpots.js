import React from "react";
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import Markers from './Markers';

import '../dist/css/main.css';



class RamenSpots extends React.Component{
  constructor(props){
    super(props);

    this.state={lat:null,lng:null}
  }

  static defaultProps = {
    center:{
      lat: 40.712776,
      lng: -74.005974
    },
    zoom:11
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude, lng:position.coords.longitude}),
      (err) => this.setState({errMessage: err.message})
    );
  }

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
 
  };

  

  

  render() {
    
    if(this.props.locations.length > 0){
      console.log(this.props.locations)
      return (
        <div className="middle__container">
          <GoogleMapReact 
              bootstrapURLKeys={{ key: 'AIzaSyBQmMt4Lv-pJjKzuAseXQDuP5EyOmzQUhk'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              center={{lat: this.state.lat, lng:this.state.lng}}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
            >
            <Markers
              ramenSpots={this.props.locations}
              lat={this.props.locations[0].geometry.location.lat} 
              lng={this.props.locations[0].geometry.location.lng}
              text="RamenSpot"
            />
             <Markers
              ramenSpots={this.props.locations}
              lat={this.props.locations[1].geometry.location.lat} 
              lng={this.props.locations[1].geometry.location.lng}
              text="RamenSpot"
            />
             <Markers
              ramenSpots={this.props.locations}
              lat={this.props.locations[2].geometry.location.lat} 
              lng={this.props.locations[2].geometry.location.lng}
              text="RamenSpot"
            />
             <Markers
              ramenSpots={this.props.locations}
              lat={this.props.locations[3].geometry.location.lat} 
              lng={this.props.locations[3].geometry.location.lng}
              text="RamenSpot"
            />
            <LocationMarker
                lat={this.state.lat}
                lng={this.state.lng}
                text="Current User Location"
            />
            
          </GoogleMapReact>
        </div>
      )
    }
else {
    return(
      <div style={{height:'40vh', width: '100%'}}>
        <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyBQmMt4Lv-pJjKzuAseXQDuP5EyOmzQUhk'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={{lat: this.state.lat, lng:this.state.lng}}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          >
          <LocationMarker
              lat={this.state.lat}
              lng={this.state.lng}
              text="Current User Location"
          />
          
        </GoogleMapReact>
    </div>
      )
    }
  }
}


export default RamenSpots;

