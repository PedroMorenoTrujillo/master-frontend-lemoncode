import React from "react";

interface Resident {
  id: number;
  name: string;
  image: string;
}

interface Props {
  resident: Resident;
}

export const LocationResidentComponent: React.FC<Props> = ({ resident }) => {
  return (
    <li>
      <img src={resident.image} alt={resident.name} width="50" />
      {resident.name}
    </li>
  );
};

export default LocationResidentComponent;