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
          <Route path="/Work" element={<Work />} />
          <Route path="/Philosophy" element={<Philosophy />} />
          <Route path="/Skillset" element={<Skillset />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
   
      </div>
    </Router>
  );
}

export default App;
