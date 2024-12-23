import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_BASE_URL = 'https://rickandmortyapi.com/api';
const DB_PATH = path.join(__dirname, '../server/db.json');

const fetchData = async (endpoint) => {
  let results = [];
  let url = `${API_BASE_URL}/${endpoint}`;
  while (url) {
    const response = await axios.get(url);
    results = results.concat(response.data.results);
    url = response.data.info.next;
  }
  return results;
};

const populateDb = async () => {
  try {
    const characters = await fetchData('character');
    const locations = await fetchData('location');
    const episodes = await fetchData('episode');

    const dbData = {
      characters: characters.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: {
          name: character.origin.name,
        },
        location: {
          name: character.location.name,
        },
        image: character.image,
        bestSentences: []
      })),
      locations: locations.map((location) => ({
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
        residents: location.residents
      })),
      episodes: episodes.map((episode) => ({
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode,
        characters: episode.characters
      }))
    };

    fs.writeFileSync(DB_PATH, JSON.stringify(dbData, null, 2));
    console.log('Database populated successfully');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

populateDb();