import React, { Component } from "react";
import axios from "axios";
import ContentTop from "./ContentTop";

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: -1,
      title: "",
      body: "",
    };
  }

  handleInputChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
    event.preventDefault();
  };

  handleAddPostClick = (event) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        if (response.status === 201) {
          alert("Post added Successfully!");
          this.setState({
            userId: -1,
            title: "",
            body: "",
          });
        } else {
          alert("Failed to add post");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  render() {
    const { handleGoToContentsClick } = this.props;
    return (
      <>
        <ContentTop
          contentHeading="Add Post: "
          handleGoToContentsClick={handleGoToContentsClick}
        />
        <form>
          <div className="formFlex">
            <div className="formLabel">User Id: </div>
            <input
              placeholder="Enter User Id"
              name="userId"
              value={this.state.userId}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <div className="formFlex">
            <div className="formLabel">Title: </div>
            <input
              placeholder="Enter Post Title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <div className="formFlex">
            <div className="formLabel">Content: </div>
            <input
              placeholder="Enter Post Content"
              name="body"
              value={this.state.body}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <button type="submit" onClick={this.handleAddPostClick}>
            Add Post
          </button>
        </form>
      </>
    );
  }
}

export default AddPost;
