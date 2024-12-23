import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationResidentComponent from "./location-resident-list.component";

interface Props {
  residents: string[];
}

interface Resident {
  id: number;
  name: string;
  image: string;
}

export const LocationResidentContainer: React.FC<Props> = ({ residents }) => {
  const [residentDetails, setResidentDetails] = useState<Resident[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const residentPromises = residents.map((url) => axios.get(url));
        const residentResponses = await Promise.all(residentPromises);
        const residentData = residentResponses.map((response) => response.data);
        setResidentDetails(residentData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resident data: ", error);
        setError("Error fetching resident data");
        setLoading(false);
      }
    };

    fetchResidents();
  }, [residents]);

  if (loading) {
    return <div>Loading residents...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Residents</h2>
      <ul>
        {residentDetails.map((resident) => (
          <LocationResidentComponent key={resident.id} resident={resident} />
        ))}
      </ul>
    </div>
  );
};

export default LocationResidentContainer;