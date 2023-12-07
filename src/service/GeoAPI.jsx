import axios from "axios";

const API_BASE_URL = "";
const API_KEY = "";

const instance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL,
  headers: {
    "API-KEY": API_KEY,
  },
});
