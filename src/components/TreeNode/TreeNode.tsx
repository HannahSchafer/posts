import { useState } from "react";
import Tree from "../Tree/Tree";
import "./TreeNode.css";

function TreeNode({ node, isOpen }: any) {
  const { children, location, author, time, text } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div className="tree-node-container">
      {isOpen && (
        <div style={{ marginBottom: "10px" }}>
          <span>{text}</span>
        </div>
      )}
      <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </div>
  );
}

export default TreeNode;
