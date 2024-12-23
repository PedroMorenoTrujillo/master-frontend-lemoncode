import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import CharacterListContainer from "./scenes/character-list/character-list.container";
import CharacterDetailContainer from "./scenes/character-detail/character-detail.container";
import { AppLayout } from "./layout/app.layout";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<CharacterListContainer />} />
          <Route path="/character/:id" element={<CharacterDetailContainer />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
