import React from "react";

const Header = () => {
  return (
    <section className="text-white md:grid md:grid-cols-[1fr_2fr] md:min-h-[508px] max-w-[1200px] mx-auto">
      <div className="relative">
        <img className="w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:w-[86%] left-4  md:max-w-none" src="/images/header.png" alt="" />
      </div>

      <section className="px-4 py-10  bg-gray-500 md:grid md:place-content-center md:px-10 ">
        <h2 className="text-3xl font-bold md:text-5xl md:relative md:z-20 text-sky-500">Soy Kevin Rojas. Un desarrollador front-end <span className="text-gray-300">Vivo en <span className="text-cyan-400 animate-pulse duration-200" >Colombia.</span></span></h2>
        <p className="mt-4 md:mt-10 md:relative md:z-20 ">
        Probablemente soy el diseñador más apasionado me gusta innovar, con el que trabajarás
          Si tienes un gran proyecto que necesita algunas habilidades increíbles.
        </p>
      </section>
    </section>
  );
};

export default Header;
