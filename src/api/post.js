import { apiRequestWithAccessToken } from "./request";

export const getPosts = (page) => {
  return apiRequestWithAccessToken.get(`/posts?page=${page}`);
};
