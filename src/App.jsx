import { useCallback, useContext, useEffect, useRef } from "react";
import { Route, Routes } from "react-router";

import About from "./pages/About";
import Home from "./pages/Home";

import "./App.css";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  // const apiKey = import.meta.env.VITE_API_KEY;

  console.log("API URL:", apiUrl);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/project" element={<Projects />} />
      <Route path="/contact-me" element={<ContactMe />} />
    </Routes>
  );
}

export default App;
