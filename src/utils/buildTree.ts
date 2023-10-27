import { Post, TreeNode, GroupedTreeNodes, TreeSortKey } from "../types";

export const buildTree = (arr: Post[], key: string) => {
  const treeNodes: GroupedTreeNodes = {};
  arr.forEach((item: Post) => {
    const selectedKey: TreeSortKey = item[key as keyof Post];
    if (treeNodes[selectedKey]) {
      treeNodes[selectedKey].children.push(item);
    } else {
      treeNodes[selectedKey] = {
        label: selectedKey,
        children: item ? [item] : [],
      };
    }
  });
  return Object.values(treeNodes);
};
