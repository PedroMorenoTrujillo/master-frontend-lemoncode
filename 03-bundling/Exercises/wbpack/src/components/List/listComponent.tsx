import React from "react";
import ItemComponent from "../Item/itemComponent";
import { Item } from "../models";
import logo1 from "/content/logo1.png";
import logo2 from "/content/logo2.png";
import "./listComponent.scss";
const ListComponent: React.FC = () => {
  //Check para comprobar que el API_BASE es correcto por entorno
  console.log(process.env.API_BASE);

  const list: Item[] = [
    {
      id: 1,
      name: "Superman 1",
      image: logo1,
    },
    {
      id: 2,
      name: "Superman 2",
      image: logo2,
    },
  ];

  return (
    <ul className="hero__list">
      {list.map((item) => (
        <li className="hero__list__item" key={item.id}>
          <ItemComponent item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
