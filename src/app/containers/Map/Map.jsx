import React          from 'react';
import { hot }        from 'react-hot-loader';
import GoogleMapReact from 'google-map-react';
import classes        from './Map.styl';

class Map extends React.Component {
  render() {
    return (
      <div className={ classes.MapContainer }>
        <GoogleMapReact
          defaultCenter={ { lat: 23.634501, lng: -102.552784 } }
          defaultZoom={ 6 }
          >
        </GoogleMapReact>
      </div>
    );
  }
}

export default hot(module)(Map);
