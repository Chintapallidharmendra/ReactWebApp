import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const tableBorderClasses = {
  border: "1px solid black",
  borderCollapse: "collapse",
};
const tableMarginClasses = {
  margin: "20px",
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
  useEffect(() => {
    if (fetchPostWithId > 0) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${fetchPostWithId}`)
        .then((res) => {
          if (res.status === 200) {
            postDispatch({ type: POST_FETCH, payload: res.data });
          } else {
            alert("Post Fetching Failed!");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [fetchPostWithId]);

  return (
    <>
      <input
        placeholder="Enter PostId"
        onChange={(e) => {
          setPostId(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setFetchPostWithId(postId);
        }}
      >
        Get Post
      </button>
      {post.id && (
        <table style={{ ...tableBorderClasses, ...tableMarginClasses }}>
          <thead style={tableBorderClasses}>
            <tr>
              <th style={tableBorderClasses}>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tr id={post.id} style={tableBorderClasses}>
            <td style={tableBorderClasses}>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        </table>
      )}
    </>
  );
};

export default DataFetchingReducer;
