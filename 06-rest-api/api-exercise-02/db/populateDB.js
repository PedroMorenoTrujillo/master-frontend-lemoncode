import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = 'https://rickandmortyapi.com/api/character';
const DB_PATH = path.join(__dirname, '../server/db.json');

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    const characters = response.data.results.map(character => ({
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
      bestSentences: [],
    }));

    const db = { characters };

    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
    console.log('Database populated successfully');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();