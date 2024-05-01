import React from "react";
import { CATEGORIES } from "../../core/models";
import { KittenComponent } from ".";
import { PictureContext } from "../../core/Picture";

export const KittenContainer: React.FC = () => {
  const { pictureList, selectedIds, setSelectedIds } =
    React.useContext(PictureContext);
  const kittiesImages = pictureList.filter(
    (picture) => picture.category === CATEGORIES.KITTENS
  );

  const onChange = (id: string) => {
    const updatedSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];
    setSelectedIds(updatedSelectedIds);
  };
  return <KittenComponent kittiesList={kittiesImages} onChange={onChange} />;
};
