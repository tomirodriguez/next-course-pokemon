import { FC } from 'react';
import { PokemonCard } from '.';
import { SmallPokemon } from '../../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">
      {pokemons.map((pokemon) => (
        <li className="aspect-square" key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};
