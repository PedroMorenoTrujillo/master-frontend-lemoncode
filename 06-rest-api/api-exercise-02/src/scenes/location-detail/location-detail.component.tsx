import React from "react";
import { Location } from "../../core/models/location.model";
import LocationResidentContainer from "./location-resident-list.container";

interface Props {
  location: Location;
}

export const LocationDetailComponent: React.FC<Props> = ({ location }) => {
  return (
    <div>
      <h1>{location.name}</h1>
      <p>
        <strong>Type:</strong> {location.type}
      </p>
      <p>
        <strong>Dimension:</strong> {location.dimension}
      </p>
      {location.residents?.length > 0 && (
        <LocationResidentContainer residents={location.residents} />
      )}
    </div>
  );
};

export default LocationDetailComponent;
