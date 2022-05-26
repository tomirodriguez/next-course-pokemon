import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../../api';
import { POKEMONS_AMOUNT } from '../../api/pokeApi';
import { Layout } from '../../components/layouts';
import PokemonFullCard from '../../components/pokemon/PokemonFullCard';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { getPokemonInfo } from '../../utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout
      title={
        pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.substring(1)
      }
    >
      <PokemonFullCard pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    `/pokemon?limit=${POKEMONS_AMOUNT}`
  );
  const paths = data.results.map((pokemon) => ({
    params: {
      name: pokemon.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByNamePage;
