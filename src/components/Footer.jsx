import React from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  return (
    <footer className="">
      <section className="flex bg-gray-d  items-center justify-center">
        <section className="flex gap-2 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kevin-oswaldo-rojas-velandia-73a343241/"
          >
            <i className="bx bxl-linkedin py-4 hover:animate-pulse text-white text-3xl"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/NozoDev"
          >
            <i className="bx bxl-github py-4 hover:animate-pulse text-white text-3xl"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/kevinroj326"
            className=""
          >
            <i className="bx bxl-twitter py-4 hover:animate-pulse text-white text-3xl "></i>
          </a>
      </section>
      <span className="grid text-center bg-gray-d text-white ">
        &Copy; todos los derechos Reservados
      </span>
        </section>
    </footer>
  );
};

export default Footer;
