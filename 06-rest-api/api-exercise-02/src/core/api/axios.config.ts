import axios from "axios";

const API_URL = "http://localhost:3001/"

export const AxiosConfig = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});