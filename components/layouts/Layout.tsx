import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokémonApp'}</title>
        <meta name="author" content="Tomás Rodríguez" />
        <meta name="description" content="Informació sobre el Pokémon XXXX" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <div className="h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto my-6 px-4 sm:px-8 grow">
          {children}
        </main>
      </div>
    </>
  );
};
