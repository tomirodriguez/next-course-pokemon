import type { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { POKEMONS_AMOUNT } from '../api/pokeApi';
import { Layout } from '../components/layouts';
import { PokemonList } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    `/pokemon?limit=${POKEMONS_AMOUNT}`
  );

  const pokemons: SmallPokemon[] = data.results.map((pkm, index) => ({
    id: index + 1,
    name: pkm.name,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' +
      (index + 1) +
      '.svg',
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
