import { receiveAllPokemon, RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);


  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = action.pokemon;
      return newState;
    case RECEIVE_SINGLE_POKEMON:
      const pokemon = action.payload.pokemon;
      newState[pokemon.id] = pokemon;
      return newState;
    default:
      return state;
  }
};
