import { useState } from "react";
import { Post, GroupedTreeNodes, TreeSortKey } from "../types";
import { buildTree } from "../utils/buildTree";
import "./TreeView.css";
import Tree from "../components/Tree/Tree";
import Tabs from "../components/Tabs/Tabs";
import useFetchPosts from "../hooks/useFetchPosts";

function TreeView() {
  const [selectedGroup, setSelectedGroup] = useState<string>("location");

  const { posts, isLoading, error } = useFetchPosts();
  const groupedPosts = buildTree(posts, selectedGroup);
  console.log("groupedPosts", groupedPosts);

  return (
    <div className="tree-view">
      <Tabs selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
      <div className="accordion">
        {groupedPosts.map((group, index) => (
          <div key={index}>
            <Tree label={group.label} treeData={group.children} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TreeView;
