const getPokemons = (): number[] =>
  JSON.parse(localStorage.getItem('favorites') || '[]');

const toggleFavorite = (id: number) => {
  let favorites: number[] = getPokemons();

  if (favorites.includes(id)) favorites = favorites.filter((fav) => fav !== id);
  else favorites.push(id);

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isFavorite = (id: number): boolean => getPokemons().includes(id);

const functions = { toggleFavorite, isFavorite, getPokemons };

export default functions;
