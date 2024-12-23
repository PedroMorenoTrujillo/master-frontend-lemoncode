import React from "react";
import { Link } from "react-router-dom";
import { Episode } from "../../core/models/episodie.model";

interface Props {
  episodes: Episode[];
}

export const EpisodeListComponent: React.FC<Props> = ({ episodes }) => {
  return (
    <div>
      <h1>Episode List</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeListComponent;