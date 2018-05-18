import axios from 'axios';
import * as actions from './types';

export const setMapCoords = (coords) => {
  return {
    type: actions.SET_MAP_COORDS,
    coords,
  };
};

export const postalCodeChanged = (postalCode) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${ postalCode }+Mexico&key=AIzaSyCtJHhhqfgNrcmxn8tEYAlHuF9-e7U9YKY`;
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        const coords = response.data.results[0].geometry.location;
        dispatch(setMapCoords(coords));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
