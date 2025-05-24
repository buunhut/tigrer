import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="topMenu">
        <div className="bar">
          <button type="button">
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul>
            {/* <li>
              <NavLink to={"/"}>Home</NavLink>
            </li> */}
            <li>
              <NavLink to={"/game-1"}>Game - 1</NavLink>
            </li>
            <li>
              <NavLink to={"/game-2"}>Game - 2</NavLink>
            </li>
            <li>
              <NavLink to={"/game-3"}>Game - 3</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
