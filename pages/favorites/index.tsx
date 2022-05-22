import { FC, useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { PokemonList } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<number[]>([]);

  useEffect(() => {
    setPokemons(localFavorites.getPokemons);
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  return (
    <Layout title="Pokémons favoritos">
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonList
          pokemons={pokemons.map((id) => ({
            id,
            name: '',
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
          }))}
        />
      )}
    </Layout>
  );
};

export default FavoritesPage;
