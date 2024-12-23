import React from "react";
import { Episode } from "../../core/models/episodie.model";
import EpisodeCharacterContainer from "./episode-character.container";

interface Props {
  episode: Episode;
}

export const EpisodeDetailComponent: React.FC<Props> = ({ episode }) => {
  return (
    <div>
      <h1>{episode.name}</h1>
      <p>
        <strong>Air Date:</strong> {episode.air_date}
      </p>
      <p>
        <strong>Episode:</strong> {episode.episode}
      </p>
      <h2>Characters</h2>
      <ul>
        {episode?.characters.length > 0 && (
          <EpisodeCharacterContainer characters={episode.characters} />
        )}
      </ul>
    </div>
  );
};

export default EpisodeDetailComponent;
