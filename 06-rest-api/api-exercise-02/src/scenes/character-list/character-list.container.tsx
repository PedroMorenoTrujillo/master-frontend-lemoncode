import React, { useEffect, useState } from "react";
import { AxiosGet } from "../../core/api/axios.service";
import { CharacterListComponent } from "./character-list.component";
import { Character } from "../../core/models/character.model";

export const CharacterListContainer: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const query = gender
      ? `characters?_page=${page}&_per_page=5&gender=${encodeURIComponent(
          gender
        )}`
      : `characters?_page=${page}&_per_page=5`;
    AxiosGet(query)
      .then((response) => {
        setCharacters(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, [page, gender]);

  const handleNextPage = () => {
    console.log("Next page:", page + 1);
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    console.log("Previous page:", page - 1);
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
    setPage(1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const selectorData: { name: string; value: string }[] = [
    { name: "All", value: "" },
    { name: "Male", value: "Male" },
    { name: "Female", value: "Female" },
    { name: "Unknown", value: "unknown" },
  ];

  return (
    <div>
      <select value={gender} onChange={handleGenderChange}>
        {selectorData.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <CharacterListComponent characters={characters} />
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default CharacterListContainer;
