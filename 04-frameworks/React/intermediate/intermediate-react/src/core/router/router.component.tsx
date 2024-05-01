import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { switchRoutes } from ".";
import { Puppie } from "../../scenes/puppie";
import { Kitten } from "../../scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route path={switchRoutes.root} element={<Navigate to="/puppie" />} />
      <Route path={switchRoutes.puppie} element={<Puppie />} />
      <Route path={switchRoutes.kitten} element={<Kitten />} />
    </Routes>
  );
};
