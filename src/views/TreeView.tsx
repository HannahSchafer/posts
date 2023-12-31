import React from "react";
import { useStoreContext } from "../stores/PostsContext";
import Tree from "../components/Tree/Tree";
import Tabs from "../components/Tabs/Tabs";

import "./TreeView.css";

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
