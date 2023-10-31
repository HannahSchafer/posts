import TreeView from "./views/TreeView";
import useFetchPosts from "./hooks/useFetchPosts";
import { PostsContextProvider } from "./stores/PostsContext";

function App() {
  const { posts, isLoading, error } = useFetchPosts();

  return (
    <div>
      <PostsContextProvider posts={posts}>
        <TreeView />
      </PostsContextProvider>
    </div>
  );
}

export default App;
