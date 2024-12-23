import React from "react";
import { Character } from "../../core/models/character.model";

interface Props {
  character: Character;
  bestSentence: string;
  setBestSentence: (sentence: string) => void;
  handleSave: () => void;
  handleEdit: (sentence: string, index: number) => void;
  handleDelete: (index: number) => void;
}

export const CharacterDetailComponent: React.FC<Props> = ({
  character,
  bestSentence,
  setBestSentence,
  handleSave,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <h2>Best Sentences</h2>
      <ul>
        {character.bestSentences.map((sentence, index) => (
          <li key={index}>
            {sentence} 
            <button onClick={() => handleEdit(sentence, index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={bestSentence}
        onChange={(e) => setBestSentence(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CharacterDetailComponent;