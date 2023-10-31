export type Post = {
  id: number;
  location: string;
  time: number;
  author: string;
  text: string;
};

export type PostsResponse = {
  results: Post[];
};

export type TreeNode = {
  label: TreeGroupKey;
  children: Post[];
};

export type GroupedTreeNodes = {
  [key: string]: TreeNode;
};

export type TreeGroupKey = string | number;
