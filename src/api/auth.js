import { apiRequest } from "./request";

export const login = (userId, password) => {
  return apiRequest.post("/auth", { userId, password });
};
