import { useEffect, useState } from "react";
import { AxiosGet } from "../../core/api/axios.service";
import CharacterDetailComponent from "./character-detail.component";
import { useParams } from "react-router-dom";
import { Character } from "../../core/models/character.model";

export const CharacterDetailContainer: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    AxiosGet(`character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }
  return <CharacterDetailComponent character={character} />;
};

export default CharacterDetailContainer;
