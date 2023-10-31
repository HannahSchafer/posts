import { useState } from "react";
import { Post, GroupedTreeNodes, TreeGroupKey } from "../types";
import { useStoreContext } from "../stores/PostsContext";
import { buildTree } from "../utils/buildTree";
import "./TreeView.css";
import Tree from "../components/Tree/Tree";
import Tabs from "../components/Tabs/Tabs";

function TreeView() {
  const {
    state: { postsByGroup, selectedGroup },
  } = useStoreContext();

  if (!postsByGroup[selectedGroup]) {
    return null;
  }

  return (
    <div className="tree-view">
      <Tabs />
      {postsByGroup[selectedGroup].map((group, idx) => (
        <div key={idx}>
          <Tree label={group.label} treeData={group.children} />
        </div>
      ))}
    </div>
  );
}

export default TreeView;
