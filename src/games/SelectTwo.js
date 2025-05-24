import React, { useEffect, useState } from "react";
import { shuffleDouble, speak } from "../function";

const SelectTwo = () => {
  const [size, setSize] = useState(130);
  const [firstSelect, setFirstSelect] = useState(null);
  const [removedItems, setRemovedItems] = useState([]);
  const [listData, setListData] = useState([]);

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
    const shuffled = shuffleDouble(listImg); // Nhân đôi và trộn
    setListData(shuffled);
  }, []);

  const handleClick = (item, index) => {
    // Nếu đã bị ẩn rồi thì không click được
    if (removedItems.includes(index) || firstSelect?.index === index) return;

    speak(item.text, "en-US");

    if (!firstSelect) {
      setFirstSelect({ ...item, index });
    } else {
      if (firstSelect.text === item.text) {
        // Đúng cặp
        setRemovedItems((prev) => [...prev, firstSelect.index, index]);
        setFirstSelect(null);
      } else {
        // Sai cặp
        setFirstSelect({ ...item, index });
        setTimeout(() => {
          setFirstSelect(null);
        }, 1000);
      }
    }
  };

  const handleResset = () => {
    const shuffled = shuffleDouble(listImg); // Nhân đôi và trộn
    setListData(shuffled);
    setRemovedItems([]);
  };

  const isVisible = (index) => !removedItems.includes(index);

  return (
    <div className="tiger">
      <div className="result">
        <div className="correct"></div>
        <div className="incorrect"></div>
      </div>
      <div className="main">
        <div className="flex">
          {listData.map((item, index) => {
            const check = isVisible(index);
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
                }}
                onClick={() => handleClick(item, index)}
              >
                {check && (
                  <img
                    src={`./img/${item.url}`}
                    alt={item.text}
                    style={{ width: size, height: size }}
                  />
                )}
              </div>
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
        <button type="button" onClick={handleResset}>
          <i className="fa-solid fa-play"></i>
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

export default SelectTwo;
