import { useState } from "react";
import { Post, GroupedTreeNodes, TreeSortKey } from "../types";
import { buildTree } from "../utils/buildTree";
import "./TreeView.css";
import Tree from "../components/Tree/Tree";
import useFetchPosts from "../hooks/useFetchPosts";

function TreeView() {
  const [selectedSort, setSelectedSort] = useState("location");

  const { posts, isLoading, error } = useFetchPosts();
  const groupedPosts = buildTree(posts, selectedSort);
  console.log("groupedPosts", groupedPosts);

  return (
    <div className="posts-tree-view">
      <div>Group By:</div>
      <button>Location</button>
      <button>Author</button>
      <button>Week</button>
      <div>Posts Tree View</div>

      <div className="groups-container">
        {groupedPosts.map((group) => {
          return (
            <>
              <div>{group.label}</div>
              <Tree treeData={group.children} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TreeView;
