import { useState } from "react";
import moment from "moment";
import { Post } from "../../types";
import EditableText from "../EditableText/EditableText";
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
            <EditableText text={author} />
            <div>{dateString}</div>
          </div>
        </div>
        <div className="tree-node-post-text">{text}</div>

        <EditableText text={location} />
      </div>
    </div>
  );
}

export default TreeNode;
