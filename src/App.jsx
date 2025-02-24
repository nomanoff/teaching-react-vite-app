import { Route, Routes } from "react-router";

import About from "./pages/About";
import Home from "./pages/Home";

import "./App.css";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";

function App() {
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
