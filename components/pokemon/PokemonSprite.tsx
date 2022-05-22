import Image from 'next/image';
import { FC } from 'react';

interface Props {
  sprite: string;
  name: string;
  priority?: boolean;
}

export const PokemonSprite: FC<Props> = ({
  sprite,
  name,
  priority = false,
}) => {
  return (
    <Image
      src={sprite}
      alt={name}
      title={name}
      layout={'fill'}
      objectFit="contain"
      priority={priority}
    />
  );
};
