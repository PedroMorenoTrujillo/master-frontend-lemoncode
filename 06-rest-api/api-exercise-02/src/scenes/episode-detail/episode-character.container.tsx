import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCharacterComponent from "./episode-character.component";

interface Props {
  characters: string[];
}

interface Character {
  id: number;
  name: string;
  image: string;
}

export const EpisodeCharacterContainer: React.FC<Props> = ({ characters }) => {
  const [characterDetails, setCharacterDetails] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const characterPromises = characters.map((url) => axios.get(url));
        const characterResponses = await Promise.all(characterPromises);
        const characterData = characterResponses.map((response) => response.data);
        setCharacterDetails(characterData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character data: ", error);
        setError("Error fetching character data");
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [characters]);

  if (loading) {
    return <div>Loading characters...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul>
        {characterDetails.map((character) => (
          <EpisodeCharacterComponent key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
};

export default EpisodeCharacterContainer;