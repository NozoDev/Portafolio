import React from 'react'
import emailjs from '@emailjs/browser';


const Footer = () => {
  return (
    <footer>
         <section className="flex bg-gray-d  items-center justify-center">
       
       <section className=" text-black mt-4 flex  gap-2">
         <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kevinrojasxd/"><i className="bx bxl-instagram  py-4 text-white text-3xl hover:text-cyan-500"></i></a>
         <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kevin.rojas.7509836"><i className="bx bxl-facebook py-4 text-white text-3xl hover:text-cyan-500"></i></a>
         <a target="_blank" rel="noopener noreferrer" href="https://github.com/NozoDev"><i className="bx bxl-github text-3xl py-4 text-white hover:text-cyan-500"></i></a>
         <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/kevinroj326"><i className="bx bxl-twitter text-3xl py-4 text-white hover:text-cyan-500" ></i></a>
         </section>
       </section>
         <span className="grid text-center  bg-gray-d  text-white ">&Copy; todos los derechos Reservados</span>
    </footer>
  )
}

export default Footer