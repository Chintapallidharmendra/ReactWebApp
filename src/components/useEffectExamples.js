import axios from "axios";
import React, { useState, useEffect } from "react";
import ContentTop from "./ContentTop";

const timerTextClasses = {
  textAlign: "center",
  fontSize: "30px",
  fontWeight: "bold",
  fontStyle: "lato",
};

const TimerDisplay = () => {
  const [timer, setTimer] = useState(0);
  const tick = () => {
    setTimer((prevTimer) => prevTimer + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      console.log("timer cleared");
      clearInterval(interval);
    };
  }, []);
  return <div style={timerTextClasses}> {timer}</div>;
};

const MouseListener = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const logMousePosition = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <>
      <p>UseEffect- Mouse Listener </p>
      <p>{`mouseX - ${mouseX} || mouseY - ${mouseY}`}</p>
    </>
  );
};

const PostData = () => {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("Post Fetching....");
    if (id > 0) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setPost(res.data);
          } else {
            console.log("Post Fetching Failed");
          }
        })
        .catch((err) => console.error(err));
    }
  }, [id]);
  return (
    <>
      <input
        onChange={(e) => {
          if (e.target.value) {
            setId(e.target.value);
          }
        }}
        placeholder="Enter Post Id"
      />
      {post && <li id={id}>{post.title}</li>}
    </>
  );
};

const UseEffectExamples = ({ handleGoToContentsClick }) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [ismouLisActive, setMouLisStatus] = useState(false);
  const [isTimerActive, setTimerStatus] = useState(false);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <ContentTop
        contentHeading="UseStateExamples: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <p>Title Update -- Button Click(Conditonal call effect) </p>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>{`Name: ${name}`}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicked {count} times
      </button>
      <hr />
      <button
        onClick={() => {
          setMouLisStatus(!ismouLisActive);
        }}
      >
        Toggle Mouse Listener
      </button>
      {ismouLisActive && <MouseListener />}
      <hr />
      <button
        onClick={() => {
          setTimerStatus(!isTimerActive);
        }}
      >
        Toggle Timer
      </button>
      {isTimerActive && <TimerDisplay />}
      <hr />
      <PostData />
      <hr />
    </div>
  );
};

export default UseEffectExamples;
