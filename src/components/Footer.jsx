import React from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  return (
    <footer className="p-2 z-20">
      <section className="flex bg-gray-d  items-center justify-center">
        <section className="flex gap-2 ">
          <a
            href="https://www.linkedin.com/in/kevin-oswaldo-rojas-velandia-73a343241/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin py-4 hover:animate-pulse text-white text-3xl"></i>
          </a>
          <a
            href="https://github.com/NozoDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github py-4 hover:animate-pulse text-white text-3xl"></i>
          </a>
          <a
            href="https://twitter.com/kevinroj326"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter py-4 hover:animate-pulse text-white text-3xl "></i>
          </a>
        </section>
      </section>
      <span className="grid text-center bg-gray-d text-white ">
        &copy; Todos los derechos reservados
      </span>
    </footer>
  );
};

export default Footer;
