import React from "react";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Props {
  character: Character;
}

export const EpisodeCharacterComponent: React.FC<Props> = ({ character }) => {
  return (
    <li>
      <img src={character.image} alt={character.name} width="50" />
      {character.name}
    </li>
  );
};

export default EpisodeCharacterComponent;