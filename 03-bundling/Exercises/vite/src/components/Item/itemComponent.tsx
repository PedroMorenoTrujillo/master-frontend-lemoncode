import React from "react";
import { Item } from "../models";
import './itemComponent.scss';
interface Props {
  item: Item;
}
const ItemComponent: React.FC<Props> = ({ item }) => {
  return (
    <div className="hero__container">
      <span className="hero__container__name">{item.name}</span>
      <img  className="hero__container__image" src={item.image} alt={item.name} />
    </div>
  );
};

export default ItemComponent;
