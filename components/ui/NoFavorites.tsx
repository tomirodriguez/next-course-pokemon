import Image from 'next/image';

export const NoFavorites = () => (
  <article className="flex flex-col justify-center items-center h-full max-h-96">
    <h1 className="text-5xl mb-10">No hay favoritos</h1>
    <Image
      src={
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
      }
      alt="Ditto"
      width={200}
      height={200}
      className="opacity-40"
    />
  </article>
);
