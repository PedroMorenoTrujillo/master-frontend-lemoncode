import axios from "axios";

const BASE_URL = "http://localhost:3000";
const API_URL = BASE_URL + "/api/v1";

export const AxiosConfig = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});