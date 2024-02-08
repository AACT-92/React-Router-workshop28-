import Red from "./Red.jsx";
import Blue from "./Blue.jsx";
import Home from "./Home.jsx"; 
import { Routes, Route, } from "react-router-dom";

export default function Main() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
