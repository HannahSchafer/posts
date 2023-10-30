import { useState } from "react";
import Tree from "../Tree/Tree";
import "./TreeNode.css";
import moment from "moment";

function TreeNode({ node, isOpen }: any) {
  const { children, location, author, time, text } = node;
  let dateString = moment.unix(time).format("LL");
  console.log("dateString", dateString);

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div className="tree-node-container">
      <div className="tree-node-post">
        <div className="tree-node-post-header">
          <div className="tree-node-post-subheader">
            <div>{dateString}</div>
            <div>{author}</div>
          </div>
          <div>{location}</div>
        </div>
        <div>{text}</div>
      </div>
      <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </div>
  );
}

export default TreeNode;
