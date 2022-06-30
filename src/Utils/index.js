import { LearningEnum } from "../enum";
export const getLearningList = () => {
  const learningList = [
    {
      id: 1,
      title: "HTTP GET",
      screen: LearningEnum.HttpGet,
      screenChangeText: "Click to fetch Posts",
    },
    {
      id: 2,
      title: "HTTP POST",
      screen: LearningEnum.HttpPost,
      screenChangeText: "Click to Add Post",
    },
    {
      id: 3,
      title: "UseState Counter",
      screen: LearningEnum.UseStateCounter,
      screenChangeText: "Click for Counter",
    },
    {
      id: 4,
      title: "UseState Examples",
      screen: LearningEnum.UseStateExamples,
      screenChangeText: "UseState Examples",
    },
    {
      id: 5,
      title: "UseEffect Examples",
      screen: LearningEnum.UseEffectExamples,
      screenChangeText: "UseEffect Examples",
    },
    {
      id: 6,
      title: "UseContext Examples",
      screen: LearningEnum.UseContextExample,
      screenChangeText: "UseContext Examples",
    },
    {
      id: 7,
      title: "UseReducer Examples",
      screen: LearningEnum.UseReducerExamples,
      screenChangeText: "UseReducer Examples",
    },
    {
      id: 8,
      title: "UseCallback Example",
      screen: LearningEnum.UseCallbackExample,
      screenChangeText: "UseCallback Example",
    },
  ];
  return learningList;
};
