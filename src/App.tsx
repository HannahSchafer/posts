import TreeView from "./views/TreeView";
import Loader from "./components/Loader/Loader";

import "./App.css";

import useFetchPosts from "./hooks/useFetchPosts";
import { PostsContextProvider } from "./stores/PostsContext";

function App() {
  const { posts, isLoading, error } = useFetchPosts();

  return (
    <div className="App">
      <PostsContextProvider posts={posts}>
        {isLoading ? <Loader /> : <TreeView />}
      </PostsContextProvider>
    </div>
  );
}

export default App;
