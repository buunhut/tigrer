import React, { useEffect, useState } from "react";
import { shuffleDouble, speak } from "../function";

const SelectTwoHidden = () => {
  const [size, setSize] = useState(160);
  const [firstSelect, setFirstSelect] = useState(null);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [listData, setListData] = useState([]);
  const [count, setCount] = useState(0);

  const listImg = [
    { url: "chase.png", text: "Chase" },
    { url: "marshall.png", text: "Marshall" },
    { url: "rocky.png", text: "Rocky" },
    { url: "skye.png", text: "Skye" },
    { url: "zuma.png", text: "Zuma" },
    { url: "rubble.png", text: "Rubble" },
    { url: "everest.png", text: "Everest" },
    { url: "ryder.png", text: "Ryder" },
    { url: "tracker.png", text: "Tracker" },
    { url: "batman.png", text: "Batman" },
    { url: "spiderman.png", text: "Spider man" },
    { url: "captainamerica.png", text: "Captain America" },
    { url: "hulk.png", text: "Hulk" },
    { url: "ironman.png", text: "Iron man" },
    { url: "peppa.png", text: "Peppa pig" },
    { url: "doremon.png", text: "Doremon" },
    { url: "star.png", text: "Star" },
    { url: "moon.png", text: "Moon" },
    { url: "tina.png", text: "Tina" },
    { url: "tiger.png", text: "Tiger" },
    { url: "ohmygod.png", text: "Oh My God" },
    { url: "dumptruck.png", text: "Dump truck" },
    { url: "grandfather.png", text: "Grandfather" },
    { url: "daddy.png", text: "Daddy" },
  ];

  useEffect(() => {
    // Lấy ngẫu nhiên 12 phần tử từ listImg
    const randomItems = [...listImg]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);

    // Nhân đôi và trộn
    const shuffled = shuffleDouble(randomItems);
    setListData(shuffled);
  }, []);

  const handleClick = (item, index) => {
    if (
      visibleIndexes.includes(index) ||
      matchedIndexes.includes(index) ||
      firstSelect?.index === index
    )
      return;

    speak(item.text, "en-US");
    setVisibleIndexes((prev) => [...prev, index]);

    if (!firstSelect) {
      setFirstSelect({ ...item, index });
    } else {
      if (firstSelect.text === item.text) {
        // Đúng cặp
        setMatchedIndexes((prev) => [...prev, firstSelect.index, index]);
        setFirstSelect(null);
      } else {
        // Sai cặp
        setTimeout(() => {
          setVisibleIndexes((prev) =>
            prev.filter((i) => i !== firstSelect.index && i !== index)
          );
          setFirstSelect(null);
        }, 1000);
      }
    }
    setCount(count + 1);
  };

  const handleReset = () => {
    const randomItems = [...listImg]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    const shuffled = shuffleDouble(randomItems);
    setListData(shuffled);
    setMatchedIndexes([]);
    setVisibleIndexes([]);
    setFirstSelect(null);
    setCount(0);
  };

  const isShown = (index) =>
    visibleIndexes.includes(index) || matchedIndexes.includes(index);

  return (
    <div className="tiger">
      <div className="result">Click: {count}</div>
      <div className="main">
        <div className="flex" style={{ flexWrap: "wrap", gap: 5 }}>
          {listData.map((item, index) => {
            return (
              <div
                key={index}
                className="imgItem"
                style={{
                  width: size,
                  height: size,
                  border: "2px solid",
                  borderColor:
                    firstSelect?.index === index ? "green" : "transparent",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(item, index)}
              >
                {isShown(index) ? (
                  <img
                    src={`./img/${item.url}`}
                    alt={item.text}
                    style={{ width: size - 10, height: size - 10 }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    style={{
                      width: size - 10,
                      height: size - 10,
                      backgroundColor: "#ccc",
                      borderRadius: 8,
                    }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="btn" style={{ marginTop: 20 }}>
        <button onClick={() => setSize(size - 10)}>{"< Nhỏ"}</button>
        <button onClick={handleReset}>
          <i className="fa-solid fa-play"></i>
        </button>
        <button onClick={() => setSize(size + 10)}>{"Lớn >"}</button>
      </div>
    </div>
  );
};

export default SelectTwoHidden;
