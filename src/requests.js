import { API_KEY, BASE_URL } from "./config";

export const getPosts = async (limit = 9, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&page=${page}`
  );
  const result = await response.json();

  return result.posts;
};

export const addPost = async ({ title, description }) => {
  const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`, {
    method: "POST",
    body: JSON.stringify({
      title,
      seo_url: "",
      short_description: description,
      full_description: "",
      status: 1,
    }),
  });

  const result = await response.json();

  return result;
};

export const removePost = async (postId) => {
  const response = await fetch(`${BASE_URL}/${postId}?api_key=${API_KEY}`, {
    method: "DELETE",
  });

  const result = await response.json();

  return result;
};
