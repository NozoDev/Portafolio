import React, { useState } from "react";
import { Route } from "react-router-dom";


const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <header className="flex justify-between  py-4 px-2 text-2xl text-white items-center md:px-4 md:py-0 absolute top-0 left-0 w-full z-30">
      <h1 className="font-bold text-3xl animate-pulse p-2 ">
        Kevin R.
      </h1>

      <i
        onClick={handleShowNav}
        className="bx bx-menu-alt-right text-3xl cursor-pointer md:hidden"
      ></i>

      <nav
        className={`text-white ? absolute top-full ${
          isShowNav ? "left-0" : "-left-full"
        } w-full grid text-lg gap-2 duration-200 md:static md:flex md:w-auto`}
      >
        <a
          className="hover:bg-blue-200 font-bold p-4 duration-200 pl-2 text-2xl "
          href="#Work"
        >
          Proyectos
        </a>
        <a
          className="hover:bg-sky-200 font-bold p-4 duration-200 pl-2 text-2xl "
          href="#Philosophy"
        >
          Filosofia
        </a>
        <a
          className="hover:bg-sky-200 font-bold p-4 duration-200 pl-2 text-2xl "
          href="#Skillset"
        >
          Habilidades
        </a>
        <a
          className="hover:bg-sky-200 font-bold p-4 duration-200 pl-2 text-2xl "
          href="#Contact"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
