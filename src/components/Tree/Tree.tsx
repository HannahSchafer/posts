import { useState } from "react";
import TreeNode from "../TreeNode/TreeNode";
import "./Tree.css";

function Tree({ treeData, label }: any) {
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
        {treeData.map((node: any) => (
          <TreeNode node={node} key={node.id} />
        ))}
      </div>
    </div>
  );
}

export default Tree;
