import React from "react";
import { PictureContext } from "../../core/Picture";
import { CATEGORIES } from "../../core/models";
import { PuppieComponent } from ".";

export const PuppieContainer: React.FC = () => {
  const { pictureList, selectedIds, setSelectedIds } =
    React.useContext(PictureContext);
  const puppiesImges = pictureList.filter(
    (picture) => picture.category === CATEGORIES.PUPPIES
  );

  const onChange = (id: string) => {
    const updatedSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];
    setSelectedIds(updatedSelectedIds);
  };
  return <PuppieComponent puppiesList={puppiesImges} onChange={onChange} />;
};
