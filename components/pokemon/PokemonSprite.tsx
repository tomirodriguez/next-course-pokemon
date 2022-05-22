import Image from 'next/image';
import { FC } from 'react';

interface Props {
  sprite: string;
  name: string;
}

export const PokemonSprite: FC<Props> = ({ sprite, name }) => {
  return (
    <Image
      src={sprite}
      alt={name}
      title={name}
      layout={'fill'}
      objectFit="contain"
    />
  );
};
