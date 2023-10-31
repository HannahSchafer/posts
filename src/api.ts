import { PostsResponse, Post } from "./types";

const BASE_URL = "http://localhost:3004";

async function makeRequest(path: string, queryString?: string) {
  let url = `${BASE_URL}${path}`;
  try {
    const response = await fetch(url);
    const body = await response.json();

    return body;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export const getPosts = (): Promise<Post[]> => makeRequest(`/posts`);
