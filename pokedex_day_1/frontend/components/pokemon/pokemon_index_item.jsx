import React from 'react';
import { Link } from 'react-router-dom';

export default ({pokemon}) => {
  const path = `/pokemon/${pokemon.id}`;
  return (
    <Link to={path}>
      <li>
        <img src={pokemon.image_url}/>{pokemon.name}
      </li>
    </Link>
  );
};
