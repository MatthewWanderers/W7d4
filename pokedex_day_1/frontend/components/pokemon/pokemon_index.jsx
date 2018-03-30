import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';



class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let pokemons = this.props.pokemon.map((pokemon, idx) => (
    <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />));

    return (
      <div>
      <Route path="/pokemon/:pokemonId"
        component={PokemonDetailContainer} />
      <ul id='Pokemon_index'>
        {pokemons}
      </ul>
    </div>
    );
  }
}
 export default PokemonIndex;
