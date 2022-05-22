import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokémonApp'}</title>
        <meta name="author" content="Tomás Rodríguez" />
        <meta name="description" content="Informació sobre el Pokémon XXXX" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
      </Head>

      <Navbar />
      <main className="container mx-auto my-6 px-4 sm:px-8">{children}</main>
    </>
  );
};
