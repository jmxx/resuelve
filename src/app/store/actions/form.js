import * as actions from './types';

export const inputChanged = (input) => {
  return { type: actions.INPUT_CHANGED, input };
};
