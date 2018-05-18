import * as actions from '@/store/actions/types';

const initialState = {
  data: { }
};

const inputChanged = (state, action) => {
  const data = {
    ...state.data,
    [ action.input.id ]: action.input.value
  };

  return { ...state, data };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.INPUT_CHANGED: return inputChanged(state, action);
    default: return state;
  }
};
