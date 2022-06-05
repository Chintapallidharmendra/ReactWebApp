import React, { Component } from "react";
import { LearningEnum } from "../enum";
import AddPost from "./AddPost";
import PostList from "./PostList";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenStatus: LearningEnum.Home,
    };
  }

  handleScreeenTypeChange = (event) => {
    this.setState({ screenStatus: Number(event.target.value) });
  };

  handleGoToContentsClick = () => {
    this.setState({ screenStatus: LearningEnum.Home });
  };

  renderLearningContent = () => {
    return (
      <table>
        <thead>
          <h3>List of Learnings</h3>
        </thead>
        <tbody>
          <tr>
            <td>HTTP GET</td>
            <td>
              <button
                value={LearningEnum.HttpGet}
                onClick={this.handleScreeenTypeChange}
              >
                Click to fetch Posts
              </button>
            </td>
          </tr>
          <tr>
            <td>HTTP POST</td>
            <button
              value={LearningEnum.HttpPost}
              onClick={this.handleScreeenTypeChange}
            >
              Click to Add Post
            </button>
          </tr>
        </tbody>
      </table>
    );
  };

  renderBodyContent = (screenStatus) => {
    let body = <></>;
    switch (screenStatus) {
      case LearningEnum.Home:
        body = this.renderLearningContent();
        break;
      case LearningEnum.HttpGet:
        body = (
          <PostList handleGoToContentsClick={this.handleGoToContentsClick} />
        );
        break;
      case LearningEnum.HttpPost:
        body = (
          <AddPost handleGoToContentsClick={this.handleGoToContentsClick} />
        );
        break;
      default:
        body = <p>Something Went Wrong</p>;
    }
    return <>{body}</>;
  };
  render() {
    const { screenStatus } = this.state;
    return <>{this.renderBodyContent(screenStatus)}</>;
  }
}

export default Home;
