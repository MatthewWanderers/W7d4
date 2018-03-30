export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemon',
    method: 'GET'
  })
);

export const fetchSinglePokemon = (pokemonId) => (
  $.ajax({
    url: `/api/pokemon/${pokemonId}`,
    method: 'GET'
  })
);
