// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import MenuPrincipal from "./MenuPrincipal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu-principal/*" element={<MenuPrincipal />} />
      </Routes>
    </Router>
  );
}

export default App;
