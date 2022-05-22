import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces';
import { PokemonSprite } from './PokemonSprite';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, image } = pokemon;

  return (
    <Link href={`/pokemon/${id}`}>
      <a className="h-full relative flex flex-col items-center p-2 rounded bg-slate-600 cursor-pointer hover:-translate-y-1 transition-transform">
        <div className="absolute left-2 top-2 text-lg">
          <b>{`#${id}`}</b>
        </div>
        <div className="flex-grow w-full">
          <div className="relative h-full">
            <PokemonSprite sprite={image} name={name} />
          </div>
        </div>
        <h2 className="capitalize mt-2 text-md">{name}</h2>
      </a>
    </Link>
  );
};