import { useState } from "react";
import Tree from "../Tree/Tree";
// import "./PostsTreeView.css";

function TreeNode({ node }: any) {
  console.log("node", node);
  const { children, location, author, time, text } = node;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNode = () => {
    setIsOpen(!isOpen);
  };

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div onClick={toggleNode}>
        {isOpen ? "-" : "+"} {node.name}
      </div>
      {isOpen && (
        <div style={{ marginBottom: "10px" }}>
          <span>{text}</span>
        </div>
      )}
      <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </>
  );
}

export default TreeNode;
