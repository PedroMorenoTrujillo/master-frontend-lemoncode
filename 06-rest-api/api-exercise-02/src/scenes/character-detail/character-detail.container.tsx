import { useEffect, useState } from "react";
import { AxiosGet, AxiosPut } from "../../core/api/axios.service";
import CharacterDetailComponent from "./character-detail.component";
import { useParams } from "react-router-dom";
import { Character } from "../../core/models/character.model";

export const CharacterDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [bestSentence, setBestSentence] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    AxiosGet(`characters/${id}`)
      .then((response) => {
        setCharacter(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, [id]);

  const handleSave = () => {
    if (character) {
      let updatedBestSentences = [...character.bestSentences];
      if (editingIndex !== null) {
        updatedBestSentences[editingIndex] = bestSentence;
      } else {
        updatedBestSentences = [...updatedBestSentences, bestSentence];
      }

      const updatedCharacter = {
        ...character,
        bestSentences: updatedBestSentences,
      };

      AxiosPut(`characters/${id}`, updatedCharacter)
        .then((response) => {
          setCharacter(response.data);
          setBestSentence("");
          setEditingIndex(null);
        })
        .catch((error) => {
          console.error("Error updating data: ", error);
          setError("Error updating data");
        });
    }
  };

  const handleEdit = (sentence: string, index: number) => {
    setBestSentence(sentence);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    if (character) {
      const updatedBestSentences = character.bestSentences.filter((_, i) => i !== index);
      const updatedCharacter = {
        ...character,
        bestSentences: updatedBestSentences,
      };

      AxiosPut(`characters/${id}`, updatedCharacter)
        .then((response) => {
          setCharacter(response.data);
        })
        .catch((error) => {
          console.error("Error updating data: ", error);
          setError("Error updating data");
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!character) {
    return <div>No character found</div>;
  }

  return (
    <CharacterDetailComponent
      character={character}
      bestSentence={bestSentence}
      setBestSentence={setBestSentence}
      handleSave={handleSave}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default CharacterDetailContainer;