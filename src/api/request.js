import axios from "axios";
import { BASE_URL } from "../constants/baseurl";

export const apiRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
