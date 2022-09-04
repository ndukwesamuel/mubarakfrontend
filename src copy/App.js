import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Update from "./Pages/Update";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
