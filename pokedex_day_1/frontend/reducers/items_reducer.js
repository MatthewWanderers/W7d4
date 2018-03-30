import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      let items = action.payload.items;
      newState = items;
      return newState;
    default:
      return state;
  }
};
