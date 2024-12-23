import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;