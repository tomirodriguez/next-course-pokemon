import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar: FC = () => {
  return (
    <div className="w-full bg-red-600 shadow-sm shadow-slate-700">
      <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between py-2">
        <Link href="/">
          <a className="flex">
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
              alt="Pikachu"
              width={70}
              height={70}
            />
            <h1 className="text-2xl flex items-center">
              <span className="text-4xl">
                <b>P</b>
              </span>
              okémon
            </h1>
          </a>
        </Link>
        <Link href="/favorites">Favoritos</Link>
      </div>
    </div>
  );
};
