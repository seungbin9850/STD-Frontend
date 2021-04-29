import { apiRequest } from "./request";

export const signup = (userId, password, nickname) => {
  return apiRequest.post("/users", { userId, password, nickname });
};
