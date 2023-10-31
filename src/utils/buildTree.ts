import { Post, GroupedTreeNodes, TreeGroupKey } from "../types";

export const buildTree = (arr: Post[], key: string) => {
  const treeNodes: GroupedTreeNodes = {};
  arr.forEach((item: Post) => {
    const selectedKey: TreeGroupKey = item[key as keyof Post];
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
