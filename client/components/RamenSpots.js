import React from "react";
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import Markers from './Markers';

import '../css/main.css';



class RamenSpots extends React.Component{
  constructor(props){
    super(props);

    this.state={lat:null,lng:null}
  }

  static defaultProps = {
    center:{
      lat: null,
      lng: null
    },
    zoom:12
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude, lng:position.coords.longitude}),
      (err) => this.setState({errMessage: err.message})
    );
  }

  

  

  render() {
    
    if(this.props.locations.length > 0){
      console.log(this.props.locations)
      
      return (
        <div className="middle__container">
          <GoogleMapReact 
              bootstrapURLKeys={{ key: 'AIzaSyDlgDCQqIXD5pZXxddyrg4uEFGV9kWSwKU'}}
              defaultCenter={{lat:this.state.lat, lng:this.state.lng}}
              defaultZoom={this.props.zoom}
              center={{lat: this.state.lat, lng:this.state.lng}}
              yesIWantToUseGoogleMapApiInternals
              
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

