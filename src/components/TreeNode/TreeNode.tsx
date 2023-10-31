import { useState } from "react";
import moment from "moment";
import { Post } from "../../types";
import "./TreeNode.css";

interface TreeNode {
  node: Post;
}

function TreeNode({ node }: TreeNode) {
  const { location, author, time, text } = node;
  let dateString = moment.unix(time).format("LL");

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div className="tree-node-container">
      <div className="tree-node-post">
        <div className="tree-node-post-header">
          <div className="tree-node-post-subheader">
            <div className="tree-node-editable">{author}</div>
            <div>{dateString}</div>
          </div>
        </div>
        <div className="tree-node-post-text">{text}</div>
        <div className=" tree-node-editable tree-node-post-location">
          {location}
        </div>
      </div>
    </div>
  );
}

export default TreeNode;
