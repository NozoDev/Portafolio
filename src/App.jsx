import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Work from "./components/Work";
import Philosophy from "./components/Philosophy";
import Skillset from "./components/Skillset";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark font-sen">
        <ParticlesBackground />
        <Navbar />
        <Routes>
          {/* Utiliza <Routes> para envolver tus rutas */}
          <Route path="/" element={<Header />} />
          <Route path="/work" element={<Work />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/skillset" element={<Skillset />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
