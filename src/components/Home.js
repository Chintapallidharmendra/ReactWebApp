import React, { Component } from "react";
import { LearningEnum } from "../enum";
import AddPost from "./AddPost";
import CounterWrapper from "./CounterWrapper";
import PostList from "./PostList";
import UseContextExample from "./UseContextExample";
import UseEffectExamples from "./useEffectExamples";
import UseStateExamples from "./UseStateExamples";

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
          <tr>
            <td>UseState Counter</td>
            <button
              value={LearningEnum.UseStateCounter}
              onClick={this.handleScreeenTypeChange}
            >
              Click for Counter
            </button>
          </tr>
          <tr>
            <td>UseState Examples</td>
            <button
              value={LearningEnum.UseStateExamples}
              onClick={this.handleScreeenTypeChange}
            >
              UseState Examples
            </button>
          </tr>
          <tr>
            <td>UseEffect Examples</td>
            <button
              value={LearningEnum.UseEffectExamples}
              onClick={this.handleScreeenTypeChange}
            >
              UseEffect Examples
            </button>
          </tr>
          <tr>
            <td>UseContext Example</td>
            <button
              value={LearningEnum.UseContextExample}
              onClick={this.handleScreeenTypeChange}
            >
              UseContext Example
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
      case LearningEnum.UseStateCounter:
        body = (
          <CounterWrapper
            handleGoToContentsClick={this.handleGoToContentsClick}
          />
        );
        break;
      case LearningEnum.UseStateExamples:
        body = (
          <UseStateExamples
            handleGoToContentsClick={this.handleGoToContentsClick}
          />
        );
        break;
      case LearningEnum.UseEffectExamples:
        body = (
          <UseEffectExamples
            handleGoToContentsClick={this.handleGoToContentsClick}
          />
        );
        break;
      case LearningEnum.UseContextExample:
        body = (
          <UseContextExample
            handleGoToContentsClick={this.handleGoToContentsClick}
          />
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
