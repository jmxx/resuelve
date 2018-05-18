import * as actions from '@/store/actions/types';

const initialState = {
  coords: {
    lat: 23.634501,
    lng: -102.552784
  },
  zoom: 6
};

const setMapCoords = (state, action) => {
  return { ...state, coords: action.coords };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_MAP_COORDS: return setMapCoords(state, action);
    default: return state;
  }
};
