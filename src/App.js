import React, { useEffect, useState } from "react";
import "./app.scss";

const App = () => {
  const [size, setSize] = useState(80);
  const [run, setRun] = useState(false);
  const listData = [
    { icon: "fa-solid fa-truck-monster", text: "monster-truck", color: "red" },
    { icon: "fa-solid fa-bicycle", text: "bicycle", color: "blue" },
    { icon: "fa-solid fa-car-side", text: "car", color: "purple" },
    { icon: "fa-solid fa-plane", text: "air plane", color: "green" },
    { icon: "fa-solid fa-rocket", text: "rocket", color: "orange" },
    { icon: "fa-solid fa-motorcycle", text: "motorbike", color: "black" },
    { icon: "fa-solid fa-truck-medical", text: "ambulance", color: "red" },
    { icon: "fa-solid fa-ship", text: "boat", color: "violet" },
    { icon: "fa-solid fa-bus", text: "bus", color: "green" },
    { icon: "fa-solid fa-cat", text: "cat", color: "brown" },
    { icon: "fa-solid fa-dog", text: "dog", color: "black" },
    { icon: "fa-solid fa-apple-whole", text: "apple", color: "orangered" },
    { icon: "fa-solid fa-hammer", text: "hammer", color: "blue" },
    { icon: "fa-solid fa-glasses", text: "glasses", color: "purple" },
    { icon: "fa-solid fa-key", text: "key", color: "brown" },
    { icon: "fa-solid fa-ice-cream", text: "ice-cream", color: "green" },
    { icon: "fa-solid fa-pencil", text: "pencil", color: "blue" },
    {
      icon: "fa-solid fa-cake-candles",
      text: "birthday-cake",
      color: "orange",
    },
    {
      icon: "fa-solid fa-burger",
      text: "hamburger",
      color: "orange",
    },
    {
      icon: "fa-solid fa-umbrella-beach",
      text: "umbrella",
      color: "blue",
    },
    {
      icon: "fa-solid fa-frog",
      text: "frog",
      color: "violet",
    },
    {
      icon: "fa-solid fa-dove",
      text: "bird",
      color: "orangered",
    },
    {
      icon: "fa-solid fa-futbol",
      text: "ball",
      color: "black",
    },
    {
      icon: "fa-solid fa-moon",
      text: "moon",
      color: "red",
    },
    {
      icon: "fa-solid fa-sun",
      text: "sun",
      color: "red",
    },
    {
      icon: "fa-solid fa-hippo",
      text: "hippo",
      color: "brown",
    },
    {
      icon: "fa-solid fa-spider",
      text: "spider",
      color: "black",
    },
    {
      icon: "fa-solid fa-shrimp",
      text: "shrimp",
      color: "red",
    },
    {
      icon: "fa-solid fa-fish-fins",
      text: "fish",
      color: "purple",
    },
    {
      icon: "fa-solid fa-cow",
      text: "cow",
      color: "green",
    },
    {
      icon: "fa-solid fa-horse",
      text: "horse",
      color: "blue",
    },
    {
      icon: "fa-solid fa-carrot",
      text: "carrot",
      color: "red",
    },
    {
      icon: "fa-solid fa-lemon",
      text: "lemon",
      color: "green",
    },
    {
      icon: "fa-solid fa-truck",
      text: "truck",
      color: "blue",
    },
    {
      icon: "fa-solid fa-mobile-screen",
      text: "mobile-phone",
      color: "orangered",
    },
    {
      icon: "fa-solid fa-helicopter",
      text: "helicopter",
      color: "purple",
    },
    {
      icon: "fa-solid fa-tv",
      text: "television",
      color: "purple",
    },
    {
      icon: "fa-solid fa-baby",
      text: "baby",
      color: "violet",
    },
    {
      icon: "fa-solid fa-headphones",
      text: "headphones",
      color: "purple",
    },
    {
      icon: "fa-solid fa-heart",
      text: "heart",
      color: "red",
    },
  ];

  const [count, setCount] = useState(0);
  const [question, SetQuestion] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [shuffledList, setShuffledList] = useState([]);

  const shuffle = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  // console.log(question);

  const hanleRead = (text) => {
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // English - United States
      window.speechSynthesis.speak(utterance);
    }, 1000);
  };

  const handleSelectIcon = (text) => {
    if (!question) {
      hanleRead(text);
      return;
    }

    hanleRead(text);

    if (text === question) {
      setCorrect(correct + 1);
      hanleRead("you're right");
    } else {
      setIncorrect(incorrect + 1);
      hanleRead("you're wrong");
    }
    setTimeout(() => {
      const random = shuffle(listData);
      SetQuestion(random[1].text);
      hanleRead(random[1].text);
      setCount(count + 1);
    }, 1000);
  };

  const handleReset = () => {
    setCorrect(0);
    setIncorrect(0);
    setCount(0);
    setRun(false);
  };

  useEffect(() => {
    setShuffledList(shuffle(listData));
  }, [question]);

  return (
    <div className="tiger">
      <div className="result">
        <div className="count">
          {count > 1 ? "Questions:" : "Question"} {count}
        </div>
        <div className="correct">Correct: {correct}</div>
        <div className="incorrect">Incorrect: {incorrect}</div>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <p>{question}</p>
      </div>

      <div className="main">
        <div className="flex">
          {shuffledList.map((item, index) => {
            const { icon, color, text } = item;
            return (
              <p
                className={color}
                key={index}
                style={{ width: size * 2, height: size * 2 }}
              >
                <i
                  className={`${icon} ${run ? "run" : ""}`}
                  style={{ fontSize: size, color }}
                  onClick={() => handleSelectIcon(text)}
                ></i>
              </p>
            );
          })}
        </div>
      </div>
      <div className="btn">
        <button
          type="button"
          onClick={() => {
            setSize(size - 20);
          }}
        >
          {"< Nhỏ"}
        </button>
        <button
          type="button"
          onClick={() => {
            if (run) {
              hanleRead(question);
            } else {
              hanleRead(shuffledList[5].text);
              SetQuestion(shuffledList[5].text);
              setCount(count + 1);
              setRun(!run);
            }
          }}
        >
          {run ? (
            <i className="fa-solid fa-volume-high"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>
        <button
          type="button"
          onClick={() => {
            setSize(size + 20);
          }}
        >
          {"Lớn >"}
        </button>
      </div>
    </div>
  );
};

export default App;
