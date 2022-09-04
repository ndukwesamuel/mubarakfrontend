import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
