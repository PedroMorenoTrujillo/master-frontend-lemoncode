import React, { useEffect, useState } from "react";
import axios from 'axios';
import { LocationListComponent } from "./location-list.component";
import { Location } from "../../core/models/location.model";

export const LocationListContainer: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const query = `https://rickandmortyapi.com/api/location?page=${page}`;
    axios.get(query)
      .then((response) => {
        setLocations(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, [page]);

  const handleNextPage = () => {
    console.log('Next page:', page + 1);
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    console.log('Previous page:', page - 1);
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <LocationListComponent locations={locations} />
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default LocationListContainer;