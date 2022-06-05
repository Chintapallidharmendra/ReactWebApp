import React, { Component } from "react";
import axios from "axios";
import ContentTop from "./ContentTop";

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            posts: response.data,
          });
        } else {
          alert("Sorry! Could load Posts...");
        }
      })
      .catch((err) => {
        console.log("Error in Loading Posts:", err);
        alert("Sorry! Could not load posts...");
      });
  }
  render() {
    const { posts } = this.state;
    const { handleGoToContentsClick } = this.props;
    return (
      <>
        <ContentTop
          contentHeading="PostList: "
          handleGoToContentsClick={handleGoToContentsClick}
        />
        {posts && posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          <h5>No Posts to display</h5>
        )}
      </>
    );
  }
}
