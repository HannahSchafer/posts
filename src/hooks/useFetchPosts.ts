import { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Post } from "../types";

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    getPosts()
      .then((postsData) => {
        setPosts(postsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, isLoading, error };
};

export default useFetchPosts;
