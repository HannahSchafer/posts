import { useState } from "react";
import TreeNode from "../TreeNode/TreeNode";
import { Post, TreeSortKey } from "../../types";
import "./Tree.css";

interface TreeProps {
  treeData: Post[];
  label: TreeSortKey;
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
    <div className="tree-container">
      <button
        className="accordion-button"
        onClick={() => {
          toggleNode();
        }}
      >
        {label}
      </button>
      <div className={`accordion-content ${isOpen ? "active" : ""}`}>
        {treeData.map((node: Post) => (
          <TreeNode node={node} key={node.id} />
        ))}
      </div>
    </div>
  );
}

export default Tree;
