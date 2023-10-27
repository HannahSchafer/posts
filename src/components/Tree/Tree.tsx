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
      <div onClick={toggleNode}>
        {isOpen ? "-" : "+"} {label}
      </div>
      {treeData.map((node: any) => (
        <TreeNode node={node} isOpen={isOpen} key={node.id} />
      ))}
    </div>
  );
}

export default Tree;
