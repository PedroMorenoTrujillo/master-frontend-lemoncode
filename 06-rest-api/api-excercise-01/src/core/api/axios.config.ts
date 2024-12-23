import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/"

export const AxiosConfig = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});