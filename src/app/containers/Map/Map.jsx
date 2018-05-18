import React          from 'react';
import { hot }        from 'react-hot-loader';
import { connect }    from 'react-redux';
// import * as actions   from '@/store/actions';
import GoogleMapReact from 'google-map-react';
import classes        from './Map.styl';

class Map extends React.Component {
  render() {
    return (
      <div className={ classes.MapContainer }>
        <GoogleMapReact
          center={ this.props.coords }
          zoom={ this.props.zoom }
          >
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.map;
};

export default hot(module)(
  connect(mapStateToProps)(Map)
);
