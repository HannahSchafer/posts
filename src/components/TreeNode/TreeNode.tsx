import React from "react";
import moment from "moment";
import { Post } from "../../types";
import EditableText from "../EditableText/EditableText";
import "./TreeNode.css";

interface TreeNode {
  node: Post;
}

function TreeNode({ node }: TreeNode) {
  const { location, author, time, text } = node;

  const dateString = moment.unix(time).format("LL");

  return (
    <div className="tree-node-wrapper">
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
