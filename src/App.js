import React, { useEffect, useRef, useState } from "react";
import "./app.scss";
import SelectTwo from "./games/SelectTwo";
import SpeakChoice from "./games/SpeakChoice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./games/Home";
import Index from "./games/Index";
import SelectTwoHidden from "./games/SelectTwoHidden";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Index />} />
          <Route path="/game-1" element={<SpeakChoice />} />
          <Route path="/game-2" element={<SelectTwo />} />
          <Route path="/game-3" element={<SelectTwoHidden />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
