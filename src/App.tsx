import TreeView from "./views/TreeView";
import "./App.css";
import useFetchPosts from "./hooks/useFetchPosts";
import { PostsContextProvider } from "./stores/PostsContext";

function App() {
  const { posts, isLoading, error } = useFetchPosts();
  console.log("posts", posts);

  return (
    <div className="App">
      <PostsContextProvider posts={posts}>
        <TreeView />
      </PostsContextProvider>
    </div>
  );
}

export default App;
