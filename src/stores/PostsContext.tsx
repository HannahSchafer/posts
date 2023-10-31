import React, { createContext, useContext, useEffect, useReducer } from "react";
import { postsByWeek } from "../utils/time";
import { buildTree } from "../utils/buildTree";
import { Post, TreeNode } from "../types";

export enum ActionTypes {
  SET_POSTS = "SET_POSTS",
  SET_POSTS_BY_GROUP = "SET_POSTS_BY_GROUP",
  SET_SELECTED_GROUP = "SET_SELECTED_GROUP",
}

export const StoreContext = createContext<any | undefined>(undefined);

type StoreState = {
  posts: [];
  postsByGroup: { [key: string]: TreeNode[] };
  selectedGroup: string;
};

type ActionType = {
  type: ActionTypes;
  payload?: any;
};

type PostsContextProviderProps = {
  posts: Post[];
  children: React.ReactNode;
};

const reducer = (state: StoreState, action: ActionType): StoreState => {
  switch (action.type) {
    case ActionTypes.SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case ActionTypes.SET_SELECTED_GROUP: {
      return {
        ...state,
        selectedGroup: action.payload,
      };
    }
    case ActionTypes.SET_POSTS_BY_GROUP: {
      let postsValue = [];
      if (action.payload.group === "week") {
        postsValue = postsByWeek(action.payload.posts);
      } else {
        postsValue = buildTree(action.payload.posts, action.payload.group);
      }

      const updatedPostsByGroup = {
        ...state.postsByGroup,
        [action.payload.group]: postsValue,
      };
      return {
        ...state,
        postsByGroup: updatedPostsByGroup,
      };
    }
    default:
      console.warn("Not a valid action type");
      return state;
  }
};

const defaultStoreState: StoreState = {
  posts: [],
  postsByGroup: {},
  selectedGroup: "week",
};

type ContextStore = {
  state: StoreState;
  actions: {
    setPosts: (posts: Post[]) => void;
    setPostsByGroup: (groupKey: string) => void;
    setSelectedGroup: (group: string) => void;
  };
};

export function PostsContextProvider({
  posts,
  children,
}: PostsContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, defaultStoreState);
  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_POSTS,
      payload: posts,
    });
    dispatch({
      type: ActionTypes.SET_POSTS_BY_GROUP,
      payload: { group: "week", posts: posts },
    });
    dispatch({
      type: ActionTypes.SET_SELECTED_GROUP,
      payload: "week",
    });
  }, [posts]);

  const store: ContextStore = {
    state: {
      posts: state.posts,
      postsByGroup: state.postsByGroup,
      selectedGroup: state.selectedGroup,
    },
    actions: {
      setPosts: (posts) => {
        dispatch({
          type: ActionTypes.SET_POSTS,
          payload: posts,
        });
      },
      setPostsByGroup: (group) => {
        dispatch({
          type: ActionTypes.SET_POSTS_BY_GROUP,
          payload: { group: group, posts: store.state.posts },
        });
      },
      setSelectedGroup: (group) => {
        if (!(group in state.postsByGroup)) {
          console.log("setting group: ", group);
          store.actions.setPostsByGroup(group);
        }
        dispatch({
          type: ActionTypes.SET_SELECTED_GROUP,
          payload: group,
        });
      },
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStoreContext(): ContextStore {
  const context = useContext(StoreContext);

  if (context === undefined) {
    console.warn(
      "useStorecontext has to be used within the StoreContextProvider"
    );
  }

  return context;
}
