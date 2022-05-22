import { FC, useEffect, useState } from 'react';
import { Pokemon } from '../../interfaces/pokeApi';
import { localFavorites } from '../../utils';
import { PokemonSprite } from './PokemonSprite';

interface Props {
  pokemon: Pokemon;
}

const PokemonFullCard: FC<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(localFavorites.isFavorite(pokemon.id));
  }, [pokemon.id]);

  const toggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
  };

  return (
    <article
      role={'article'}
      className="p-5 rounded bg-slate-600 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 transition-all rounded px-5 py-2"
          onClick={toggleFavorite}
        >
          {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>

      <div>
        <div className="h-80 flex items-center justify-center relative">
          <PokemonSprite
            sprite={
              pokemon.sprites.other?.['official-artwork'].front_default ||
              pokemon.sprites.front_default
            }
            name={pokemon.name}
            priority
          />
        </div>
        <div className="grid grid-cols-4 h-20 md:h-30 lg:h-40">
          <div className="relative w-3/4 mx-auto">
            <PokemonSprite
              sprite={pokemon.sprites.front_default}
              name={pokemon.name}
            />
          </div>
          <div className="relative w-3/4 mx-auto">
            <PokemonSprite
              sprite={pokemon.sprites.back_default}
              name={pokemon.name}
            />
          </div>
          <div className="relative w-3/4 mx-auto">
            <PokemonSprite
              sprite={pokemon.sprites.front_shiny}
              name={pokemon.name}
            />
          </div>
          <div className="relative w-3/4 mx-auto">
            <PokemonSprite
              sprite={pokemon.sprites.back_shiny}
              name={pokemon.name}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PokemonFullCard;
