import axios from 'axios';

export const POKEMONS_AMOUNT = 151;

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default pokeApi;
