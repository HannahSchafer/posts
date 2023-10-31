import React, { useState } from "react";
import TreeNode from "../TreeNode/TreeNode";
import { Post, TreeGroupKey } from "../../types";

import "./Tree.css";

interface TreeProps {
  treeData: Post[];
  label: TreeGroupKey;
}

function Tree({ treeData, label }: TreeProps) {
  const [isOpen, setIsOpen] = useState(false);
  if (!treeData) {
    return null;
  }

  const toggleNode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tree-wrapper">
      <button
        className="tree-accordion-button"
        onClick={() => {
          toggleNode();
        }}
      >
        {label}
      </button>
      <div className={`tree-accordion-content ${isOpen ? "active" : ""}`}>
        {treeData.map((node: Post) => (
          <TreeNode node={node} key={node.id} />
        ))}
      </div>
    </div>
  );
}

export default Tree;
