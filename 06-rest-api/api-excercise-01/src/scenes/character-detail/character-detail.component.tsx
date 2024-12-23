import { Character } from "../../core/models/character.model";

interface Props{
    character: Character;
}

export const CharacterDetailComponent: React.FC<Props> = ({character}) => {
    return (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      );
}

export default CharacterDetailComponent;