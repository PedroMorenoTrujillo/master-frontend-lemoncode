import React from "react";
import { PictureContext } from "../../core/Picture";
import { CartComponent } from ".";
import "./cart.container.scss";
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
    <div className="cart-container">
      <div className="cart-container__items">
        <CartComponent pictureList={selectedPictures} onRemove={onRemove} />
      </div>
      {selectedPictures.length > 0 && (
        <div className="cart-container__button-container">
          <button
            className="cart-container__button-container--remove"
            onClick={removeAll}
          >
            Remove all images
          </button>
        </div>
      )}
    </div>
  );
};
