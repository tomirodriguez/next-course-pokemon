import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../../api';
import { POKEMONS_AMOUNT } from '../../api/pokeApi';
import { Layout } from '../../components/layouts';
import PokemonFullCard from '../../components/pokemon/PokemonFullCard';
import { FullPokemon } from '../../interfaces';

interface Props {
  pokemon: FullPokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
  const paths = [...Array(POKEMONS_AMOUNT)].map((value, index) => ({
    params: {
      id: `${index + 1}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data: pokemon } = await pokeApi.get<FullPokemon>(`pokemon/${id}`);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;
