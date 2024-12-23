
import { useEffect, useState } from "react";
import { AxiosGet } from "../../core/api/axios.service";
import CharacterListComponent from "./character-list.component";
import { Character } from "../../core/models/character.model";

const CharacterListContainer: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    AxiosGet("characters")
      .then(response => {
        setCharacters(response?.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    < CharacterListComponent characters={characters} />
  );
};

export default CharacterListContainer;