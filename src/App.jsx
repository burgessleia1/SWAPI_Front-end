import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import ViewCharacter from "./Pages/ViewCharacter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/ViewCharacter/:id" element={<ViewCharacter />} />
      </Routes>
    </Router>
  );
}

export default App;











