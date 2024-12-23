import React from "react";
import { Link } from "react-router-dom";
import { Location } from "../../core/models/location.model";

interface Props {
  locations: Location[];
}

export const LocationListComponent: React.FC<Props> = ({ locations }) => {
  return (
    <div>
      <h1>Location List</h1>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <Link to={`/location/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationListComponent;