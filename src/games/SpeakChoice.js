import React, { useEffect, useRef, useState } from "react";
import "../app.scss";

const SpeakChoice = () => {
  const [size, setSize] = useState(60);
  const [run, setRun] = useState(false);
  const listData = [
    {
      icon: "fa-solid fa-truck-monster",
      text: "monster-truck",
      color: "red",
    },
    {
      icon: "fa-solid fa-bicycle",
      text: "bicycle",
      color: "blue",
    },
    {
      icon: "fa-solid fa-car-side",
      text: "car",
      color: "purple",
    },
    {
      icon: "fa-solid fa-plane",
      text: "air plane",
      color: "green",
    },
    {
      icon: "fa-solid fa-rocket",
      text: "rocket",
      color: "orange",
    },
    {
      icon: "fa-solid fa-motorcycle",
      text: "motorbike",
      color: "black",
    },
    {
      icon: "fa-solid fa-truck-medical",
      text: "ambulance",
      color: "red",
    },
    {
      icon: "fa-solid fa-ship",
      text: "boat",
      color: "violet",
    },
    {
      icon: "fa-solid fa-bus",
      text: "bus",
      color: "green",
    },
    {
      icon: "fa-solid fa-cat",
      text: "cat",
      color: "brown",
    },
    {
      icon: "fa-solid fa-dog",
      text: "dog",
      color: "black",
    },
    {
      icon: "fa-solid fa-apple-whole",
      text: "apple",
      color: "orangered",
    },
    {
      icon: "fa-solid fa-hammer",
      text: "hammer",
      color: "blue",
    },
    {
      icon: "fa-solid fa-glasses",
      text: "glasses",
      color: "purple",
    },
    {
      icon: "fa-solid fa-key",
      text: "key",
      color: "brown",
    },
    {
      icon: "fa-solid fa-ice-cream",
      text: "ice-cream",
      color: "green",
    },
    {
      icon: "fa-solid fa-pencil",
      text: "pencil",
      color: "blue",
    },
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
    {
      icon: "fa-solid fa-car-on",
      text: "police car",
      color: "red",
    },
    {
      icon: "fa-solid fa-clock",
      text: "watch",
      color: "pink",
    },
    {
      icon: "fa-solid fa-bridge-water",
      text: "bridge",
      color: "yellowgreen",
    },
    {
      icon: "fa-solid fa-gun",
      text: "gun",
      color: "black",
    },
    {
      icon: "fa-solid fa-laptop-code",
      text: "laptop",
      color: "yellowgreen",
    },
    {
      icon: "fa-solid fa-book",
      text: "book",
      color: "yellowgreen",
    },
    {
      icon: "fa-solid fa-house",
      text: "house",
      color: "brown",
    },
    {
      icon: "fa-solid fa-graduation-cap",
      text: "hat",
      color: "black",
    },
    {
      icon: "fa-solid fa-couch",
      text: "sofa",
      color: "purple",
    },
    {
      icon: "fa-solid fa-boxes-packing",
      text: "box",
      color: "purple",
    },
  ];

  const [count, setCount] = useState(0);
  const [question, SetQuestion] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [shuffledList, setShuffledList] = useState([]);
  const [used, setUsed] = useState([]);

  const audioRef = useRef(null);

  const shuffle = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  //đọc text
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // Đặt ngôn ngữ là tiếng Việt
    synth.speak(utterance);
  };

  const playAudio = (src) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    audio.src = src;
    audio.play().catch((err) => {
      console.error("Play audio error:", err);
    });
  };

  const getNextQuestion = (usedItems) => {
    const filtered = listData.filter(
      (item) => !usedItems.some((used) => used.text === item.text)
    );
    const shuffled = shuffle(filtered);
    return shuffled[0] || null;
  };

  const handleSelectIcon = (item, check) => {
    const { text } = item;
    if (check) return;

    speak(text);

    if (!question) return;

    const isCorrect = text === question;

    if (isCorrect) {
      const newUsed = [...used, item];
      setUsed(newUsed);
      setCorrect((prev) => prev + 1);
      setTimeout(() => playAudio("audio/dungroi.mp3"), 1000);

      if (newUsed.length === listData.length) {
        setRun(false);
        setTimeout(() => playAudio("audio/dung.mp3"), 2000);
        return;
      }

      const next = getNextQuestion(newUsed);
      if (next) {
        SetQuestion(next.text);
        setTimeout(() => speak(next.text), 3000);
      }
    } else {
      setIncorrect((prev) => prev + 1);
      setTimeout(() => playAudio("audio/sai.mp3"), 1000);

      const next = getNextQuestion(used);
      if (next) {
        SetQuestion(next.text);
        setTimeout(() => speak(next.text), 5000);
      }
    }

    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCorrect(0);
    setIncorrect(0);
    setCount(0);
    SetQuestion("");
    setUsed([]);
    setRun(false);
  };

  useEffect(() => {
    setShuffledList(shuffle(listData));
  }, []);

  return (
    <div className="tiger">
      <audio ref={audioRef} preload="auto"></audio>

      <div className="result">
        <div className="correct">Correct: {correct}</div>
        <div className="incorrect">Incorrect: {incorrect}</div>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="main">
        <div className="flex">
          {shuffledList.map((item, index) => {
            const { icon, color, text } = item;
            const check = used.some((item) => item.text === text);
            return (
              <p
                className={color}
                key={index}
                style={{
                  width: size * 2,
                  height: size * 2,
                  backgroundColor: check ? "white" : "",
                }}
              >
                <i
                  className={`${icon} ${run ? "run" : ""}`}
                  style={{ fontSize: size, color: check ? "white" : color }}
                  onClick={() => handleSelectIcon(item, check)}
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
            setSize(size - 10);
          }}
        >
          {"< Nhỏ"}
        </button>
        <button
          type="button"
          onClick={() => {
            if (run) {
              speak(question);
            } else {
              speak(shuffledList[0].text);
              SetQuestion(shuffledList[0].text);
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
            setSize(size + 10);
          }}
        >
          {"Lớn >"}
        </button>
      </div>
    </div>
  );
};

export default SpeakChoice;
