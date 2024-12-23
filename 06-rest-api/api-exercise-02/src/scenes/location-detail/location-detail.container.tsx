import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { LocationDetailComponent } from "./location-detail.component";
import { Location } from "../../core/models/location.model";

export const LocationDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const query = `https://rickandmortyapi.com/api/location/${id}`;
    axios.get(query)
      .then((response) => {
        setLocation(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {location && <LocationDetailComponent location={location} />}
    </div>
  );
};

export default LocationDetailContainer;