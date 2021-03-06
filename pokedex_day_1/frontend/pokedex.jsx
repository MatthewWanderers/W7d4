import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
