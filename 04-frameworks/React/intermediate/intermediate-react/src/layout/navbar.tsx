import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../core/router";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to={switchRoutes.puppie}>Puppies images</Link>
      <Link to={switchRoutes.kitten}>Kitties images</Link>
    </nav>
  );
};
