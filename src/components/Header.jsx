import React from "react";

const Header = () => {
  return (
    <section className="text-white md:grid md:grid-cols-[1fr_2fr] md:min-h-[508px] max-w-[1200px] mx-auto">
      <div className="relative">
        <img className="w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:w-[86%] left-4  md:max-w-none" src="/images/header.png" alt="" />
      </div>

      <section className="px-4 py-10  bg-gray-500 md:grid md:place-content-center md:px-10 ">
        <h2 className="text-3xl font-bold md:text-5xl md:relative md:z-20 text-sky-500">Soy Kevin Rojas. desarrollador front-end </h2>
        <p className="mt-4 md:mt-10 md:relative md:z-20 ">
        apasionado con un enfoque creativo y una fascinación por el mundo del diseño y la tecnología. A través de mi carrera, he tenido el privilegio de trabajar en diversos proyectos donde he podido combinar mis habilidades artísticas y mi experiencia técnica para crear soluciones únicas y atractivas.
        </p>
      </section>
    </section>
  );
};

export default Header;
