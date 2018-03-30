import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectSinglePokemon = (state, id) => {
  // debugger
  return values(state.entities.items[id]);
};
