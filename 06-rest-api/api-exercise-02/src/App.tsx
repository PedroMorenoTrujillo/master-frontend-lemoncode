import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./layout/navbar.component";
import CharacterListContainer from "./scenes/character-list/character-list.container";
import EpisodeListContainer from "./scenes/episodie-list/episodie-list.container";
import LocationListContainer from "./scenes/location-list/location-list.container";
import { CharacterDetailContainer } from "./scenes/character-detail/character-detail.container";
import LocationDetailContainer from "./scenes/location-detail/location-detail.container";
import EpisodeDetailContainer from "./scenes/episode-detail/episode-detail.container";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/character/:id" element={<CharacterDetailContainer />} />
          <Route path="/characters" element={<CharacterListContainer />} />
          <Route path="/locations" element={<LocationListContainer />} />
          <Route path="/location/:id" element={<LocationDetailContainer />} />
          <Route path="/episodes" element={<EpisodeListContainer />} />
          <Route
            path="/episode/:id"
            element={<EpisodeDetailContainer />}
          />{" "}
          <Route path="/" element={<CharacterListContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
