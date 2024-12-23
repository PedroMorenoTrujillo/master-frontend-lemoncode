import React from "react";
import { Link } from "react-router-dom";
import { Character } from "../../core/models/character.model";

interface Props {
  characters: Character[];
}

export const CharacterListComponent: React.FC<Props> = ({ characters }) => {
  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters?.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterListComponent;
