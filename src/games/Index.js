import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="tiger">
      <div className="main">
        <div className="flex">
          <button
            type="button"
            onClick={() => {
              navigate("/game-1");
            }}
          >
            Game 1
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/game-2");
            }}
          >
            Game 2
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/game-3");
            }}
          >
            Game 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
