import React from "react";
import TreeView from "./views/TreeView";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import useFetchPosts from "./hooks/useFetchPosts";
import { PostsContextProvider } from "./stores/PostsContext";

import "./App.css";

function App() {
  const { posts, isLoading, error } = useFetchPosts();

  return (
    <div className="App">
      <PostsContextProvider posts={posts}>
        {isLoading ? <Loader /> : <TreeView />}
        {error && <Error type="posts" />}
      </PostsContextProvider>
    </div>
  );
}

export default App;
