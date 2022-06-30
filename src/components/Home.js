import React, { Component } from "react";
import { LearningEnum } from "../enum";
import { getLearningList } from "../Utils";
import AddPost from "./AddPost";
import CounterWrapper from "./CounterWrapper";
import PostList from "./PostList";
import UseCallbackExample from "./UseCallbackExample";
import UseContextExample from "./UseContextExample";
import UseEffectExamples from "./useEffectExamples";
import UseReducerExamples from "./UseReducerExamples";
import UseStateExamples from "./UseStateExamples";

const learningContainerClasses = (shouldApplyTopBorder) => {
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

const learningContentTitleClasses = {
  width: "50%",
  padding: "12px",
  borderRight: "1px solid black",
};

const learningContentClasses = {
  width: "50%",
  margin: "12px",
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenStatus: LearningEnum.Home,
      LearningList: [],
    };
  }

  handleScreeenTypeChange = (event) => {
    this.setState({ screenStatus: Number(event.target.value) });
  };

  handleGoToContentsClick = () => {
    this.setState({ screenStatus: LearningEnum.Home });
  };

  renderLearningContentItem = (learningItem) => {
    const { title, screen, screenChangeText, id } = learningItem;
    return (
      <div style={learningContainerClasses(id === 1)} key={id}>
        <div style={learningContentTitleClasses}>{title}</div>
        <button
          style={learningContentClasses}
          value={screen}
          onClick={this.handleScreeenTypeChange}
        >
          {screenChangeText}
        </button>
      </div>
    );
  };

  renderLearningContent = () => {
    const learningList = getLearningList();
    const learningListItems = learningList.map((item) => {
      return this.renderLearningContentItem(item);
    });
    return (
      <>
        <h3>List of Learnings: </h3>
        {learningListItems}
      </>
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
      case LearningEnum.UseReducerExamples:
        body = (
          <UseReducerExamples
            handleGoToContentsClick={this.handleGoToContentsClick}
          />
        );
        break;
      case LearningEnum.UseCallbackExample:
        body = (
          <UseCallbackExample
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
