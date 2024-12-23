import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EpisodeDetailComponent } from "./episode-detail.component";
import { Episode } from "../../core/models/episodie.model";

export const EpisodeDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const query = `https://rickandmortyapi.com/api/episode/${id}`;
    axios
      .get(query)
      .then((response) => {
        setEpisode(response.data);
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

  return <div>{episode && <EpisodeDetailComponent episode={episode} />}</div>;
};

export default EpisodeDetailContainer;
