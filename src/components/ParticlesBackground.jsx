import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";
import './styles.css'

const ParticlesBackground = () => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-10">
      <Particles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
      />
    </div>
  );
};

export default ParticlesBackground;
