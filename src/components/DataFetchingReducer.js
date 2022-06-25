import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const postContainerClasses = (shouldApplyTopBorder) => {
  return {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderTop: shouldApplyTopBorder && "1px solid black",
    borderBottom: "1px solid black",
    width: "50%",
    marginLeft: "20px",
  };
};

const postContentTitleClasses = {
  width: "25%",
  padding: "12px",
};

const postContentClasses = {
  width: "50%",
  padding: "12px",
  borderLeft: "1px solid black",
};

const postContainerMarginClasses = {
  marginTop: "12px",
};
const POST_FETCH = "ReducerExamples/POST_FETCH";
const postReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_FETCH:
      if (action.payload) {
        const postPaylod = action.payload;
        const newSate = {
          id: postPaylod.id,
          title: postPaylod.title,
          body: postPaylod.body,
        };
        return newSate;
      } else {
        console.log("No Post Fetched...");
        return state;
      }
    default:
      return state;
  }
};
const DataFetchingReducer = () => {
  const [post, postDispatch] = useReducer(postReducer, {});
  const [postId, setPostId] = useState(0);
  const [fetchPostWithId, setFetchPostWithId] = useState(0);
  const [isPostVisible, setPostVisibility] = useState(false);
  useEffect(() => {
    if (fetchPostWithId > 0) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${fetchPostWithId}`)
        .then((res) => {
          if (res.status === 200) {
            postDispatch({ type: POST_FETCH, payload: res.data });
          } else {
            postDispatch({ type: POST_FETCH, payload: {} });
            alert("Post Fetching Failed!");
          }
        })
        .catch((err) => {
          postDispatch({ type: POST_FETCH, payload: {} });
          console.error(err);
        });
    } else {
      setPostVisibility(false);
    }
  }, [fetchPostWithId]);

  return (
    <>
      <input
        placeholder="Enter PostId"
        onChange={(e) => {
          setPostId(e.target.value);
          setPostVisibility(false);
        }}
      />
      <button
        onClick={() => {
          setFetchPostWithId(postId);
          setPostVisibility(true);
        }}
      >
        Get Post
      </button>
      {isPostVisible && post.id && (
        <div style={postContainerMarginClasses}>
          <div style={postContainerClasses(true)}>
            <div style={postContentTitleClasses}>Title</div>
            <div style={postContentClasses}>Content</div>
          </div>
          <div style={postContainerClasses(false)} id={`post-${post.id}`}>
            <div style={postContentTitleClasses}>{post.title}</div>
            <div style={postContentClasses}>{post.body}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataFetchingReducer;
