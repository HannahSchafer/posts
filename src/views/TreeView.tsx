import { useState } from "react";
import { Post, GroupedTreeNodes, TreeSortKey } from "../types";
import { useStoreContext } from "../stores/PostsContext";
import { buildTree } from "../utils/buildTree";
import "./TreeView.css";
import Tree from "../components/Tree/Tree";
import Tabs from "../components/Tabs/Tabs";
import useFetchPosts from "../hooks/useFetchPosts";

function TreeView() {
  // const [selectedGroup, setSelectedGroup] = useState<string>("location");

  // console.log("groupedPosts", groupedPosts);

  const {
    state: { postsByGroup, selectedGroup },
    actions: { setSelectedGroup },
  } = useStoreContext();
  console.log("selectedGroup", selectedGroup);

  // const { posts, isLoading, error } = useFetchPosts();
  // const groupedPosts = buildTree(posts, selectedGroup);

  console.log("postsByGroup", postsByGroup);

  if (!postsByGroup[selectedGroup]) {
    return null;
  }

  return (
    <div className="tree-view">
      <Tabs />
      <div className="accordion">
        {postsByGroup[selectedGroup].map((group, index) => (
          <div key={index}>
            <Tree label={group.label} treeData={group.children} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TreeView;
