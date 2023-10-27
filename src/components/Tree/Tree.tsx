import TreeNode from "../TreeNode/TreeNode";
// import "./PostsTreeView.css";

function Tree({ treeData }: any) {
  if (!treeData) {
    return null;
  }
  return (
    <ul>
      {treeData.map((node: any) => (
        <TreeNode node={node} key={node.id} />
      ))}
    </ul>
  );
}

export default Tree;
