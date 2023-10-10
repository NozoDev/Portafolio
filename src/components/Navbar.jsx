import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  const handleLinkClick = () => {
    setIsShowNav(false);
  };

  return (
    <header className="fixed top-0 flex bg-gray-d justify-between h-10 items-center py-4 md:px-6 text-white mx-auto lg:px-24 md:py-0 w-full z-30 transition-colors duration-700">
      <h1 className="font-bold text-3xl animate-pulse p-2">Kevin R.</h1>

      <i
        onClick={handleShowNav}
        className="bx bx-menu-alt-right text-3xl cursor-pointer md:hidden"
      ></i>

      <nav
        className={`text-white absolute top-full  ${
          isShowNav ? "left-0 bg-black h-[350px] text-center " : "-left-full"
        } w-full grid text-lg gap-4 duration-200 p-2 md:static md:flex md:w-auto `}
      >
        <Link
          to="/"
          className="font-bold  duration-200 pl-2 text-2xl hover:text-winter hover:animate-pulse"
          onClick={handleLinkClick}
        >
          Inicio
        </Link>

        <Link
          to="/Work"
          className="font-bold duration-200 pl-2 text-2xl hover:text-winter hover:animate-pulse "
          onClick={handleLinkClick}
        >
          Proyectos
        </Link>
        <Link
          to="/Philosophy"
          className="font-bold duration-200 pl-2 text-2xl hover:text-winter hover:animate-pulse"
          onClick={handleLinkClick}
        >
          Certificados
        </Link>

        <Link
          to="/Skillset"
          className="font-bold duration-200 pl-2 text-2xl hover:text-winter hover:animate-pulse"
          onClick={handleLinkClick}
        >
          Habilidades
        </Link>

        <Link
          to="./Contact"
          className="font-bold duration-200 pl-2 text-2xl hover:text-winter hover:animate-pulse"
          onClick={handleLinkClick}
        >
          Contacto
        </Link>
        <button
          className="w-[75%]  flex justify-center items-center rounded-full shadow-lg  hover:bg-blue-600/60 hover:text-white bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          onClick={() => {
            handleNav();
            handleLanguageChange();
          }}
        ></button>
      </nav>
    </header>
  );
};

export default Navbar;
