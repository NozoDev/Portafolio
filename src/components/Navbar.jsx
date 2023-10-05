import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <header className="fixed top-0 flex bg-gray-d justify-between h-10 items-center py-4 md:px-6 text-white mx-auto lg:px-24 md:py-0 w-full z-30 transition-colors duration-700">
      <h1 className="font-bold text-3xl animate-pulse p-2">
        Kevin R.
      </h1>

      <i
        onClick={handleShowNav}
        className="bx bx-menu-alt-right text-3xl cursor-pointer md:hidden"
      ></i>

      <nav
        className={`text-white ? absolute top-full ${
          isShowNav ? "left-0" : "-left-full"
        } w-full grid text-lg gap-4 duration-200 rounded-md p-2  md:static md:flex md:w-auto`}
      >
        <Link
          to="/"
          className="hover:bg-[#7895CB] rounded-md font-bold  duration-200 pl-2 text-2xl"
        >
          Inicio
        </Link>
        <Link
          to="./Work"
          className="hover:bg-[#7895CB] rounded-md font-bold duration-200 pl-2 text-2xl"
        >
          Proyectos
        </Link>
        <Link
          to="./Philosophy"
          className="hover:bg-[#7895CB] rounded-md font-bold  duration-200 pl-2 text-2xl"
        >
          Filosofia
        </Link>
        <Link
          to="./Skillset"
          className="hover:bg-[#7895CB] rounded-md font-bold  duration-200 pl-2 text-2xl"
        >
          Habilidades
        </Link>
        <Link
          to="./Contact"
          className="hover:bg-[#7895CB] rounded-md font-bold duration-200 pl-2 text-2xl"
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
