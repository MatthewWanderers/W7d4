import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    console.log(this.props);
    return (
      <div>

        <h1>Rendered</h1>
      </div>
    );
  }
}

export default PokemonDetail;

//
// <h1>{pokemon.name}</h1>
// <img src={pokemon.image_url}/>
