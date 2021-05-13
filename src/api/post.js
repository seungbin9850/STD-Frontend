import { apiRequestWithAccessToken } from "./request";

export const getPosts = (page) => {
  return apiRequestWithAccessToken.get(`/posts?page=${page}`);
};

export const searchPosts = (tag, page) => {
  return apiRequestWithAccessToken.get(`/posts?page=${page}&tag=${tag}`);
};
