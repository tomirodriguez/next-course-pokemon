import { pokeApi } from '../api';
import { FullPokemon } from '../interfaces';

export const getPokemonInfo = async (nameOfId: string) => {
  const { data } = await pokeApi.get<FullPokemon>(`pokemon/${nameOfId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
