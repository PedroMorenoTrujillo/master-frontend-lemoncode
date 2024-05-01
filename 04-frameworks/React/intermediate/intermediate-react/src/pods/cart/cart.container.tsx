import React from "react";
import { PictureContext } from "../../core/Picture";
import { CartComponent } from ".";

export const CartContainer: React.FC = () => {
  const { pictureList, selectedIds, setSelectedIds } =
    React.useContext(PictureContext);
  const selectedPictures = pictureList.filter((picture) => picture.selected);
  const onRemove = (id: string) => {
    const updatedSelectedIds = selectedIds.filter(
      (selectedId) => selectedId !== id
    );
    setSelectedIds(updatedSelectedIds);
  };

  const removeAll = () => {
    setSelectedIds([]);
  };
  return (
    <>
      <CartComponent pictureList={selectedPictures} onRemove={onRemove} />
      <div>
        <button onClick={removeAll}>Remove all items</button>
      </div>
    </>
  );
};
