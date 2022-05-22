const favoritesFromLocalStorage = (): number[] =>
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('favorites') || '[]')
    : [];

const toggleFavorite = (id: number) => {
  let favorites: number[] = favoritesFromLocalStorage();

  if (favorites.includes(id)) favorites = favorites.filter((fav) => fav !== id);
  else favorites.push(id);

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isFavorite = (id: number): boolean =>
  favoritesFromLocalStorage().includes(id);

const functions = { toggleFavorite, isFavorite };

export default functions;
