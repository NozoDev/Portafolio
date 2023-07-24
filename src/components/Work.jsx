import React, { useRef, useState } from "react";
// import required modules
const Work = () => {
  return (
    <section
    className="px-6 md:px-12 py-8 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(230px,_340px))] justify-center"
    id="Work"
    >
      
      <div className="w-[300px] h-[320px] bg-transparent  group perspective shadow-2xl">
        <div className="relative bg-slate-700 rounded-md preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
   
          <div className="absolute  border-0 w-full h-full backface-hidden bg-gradient-to-tr from-amber-500/40 p-2 rounded-md">
            <img src="/images/Rick.png" alt="" className="w-full h-full rounded-md" />
          </div>
          <div className="absolute rounded-md bg-slate-700 my-rotate-y-180 w-full backface-hidden h-full overflow-hidden ">
            <div className="text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5 ">
              <h1 className="text-3xl font-semibold py-2 ">Rick And Morty</h1>
      
              <p>
              React js, tailwind css. No te imaginas los personajes que encontraremos en estos diferentes lugares.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sparkling-axolotl-da64bc.netlify.app/"
                className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px]  bg-transparent group perspective">
        <div className="relative preserve-3d bg-slate-700 rounded-md group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden bg-gradient-to-tr from-amber-500/40 p-2 rounded-md">
            <img src="/images/Reloj.png" alt="" className="w-full h-full rounded-md" />
          </div>
          <div className="absolute rounded-md my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-slate-700 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-2">
              <h1 className="text-3xl font-semibold p-2">App-Clima</h1>
              
              <p>
              Uso Tailwind CSS, JS y HTML en React para la API terminada. agregue modos como el modo oscuro que se adapta automáticamente según el tiempo, puede buscar en diferentes lugares.
              </p>
              <div className="text-2xl py-4 flex text-white gap-4 ">
              <i class='bx bxl-tailwind-css'>Tailwind</i>
              <i class='bx bxl-react'>react</i>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shiny-quokka-7d33ba.netlify.app/"
                className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group  perspective">
        <div className="relative preserve-3d bg-slate-700 rounded-md  group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0  w-full h-full backface-hidden bg-gradient-to-tr from-amber-500/40 p-2 rounded-md">
            <img src="/images/shoppin1.png" alt="" className="w-full h-full rounded-md" />
          </div>
          <div className="absolute my-rotate-y-180 rounded-md w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-slate-700 rounded-md text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-2xl font-semibold">E-commerc</h1>
              <p className="text-sm p-2">
              En este proyecto estoy trabajando con un equipo de Academlo, hicimos esta tienda con carrito en modo oscuro, slider, memoria principal, ventana de soporte, etc. Usamos CSS y JavaScript.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thecardshopping.netlify.app/"
                className="bg-teal-500  px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden
          bg-gradient-to-tr from-amber-500/40 p-2 rounded-md">
            <img src="/images/blog.png" alt="" className="w-full h-full rounded-md" />
          </div>
          <div className="absolute my-rotate-y-180 rounded-md w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-slate-700 rounded-md text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">App-Mascotas</h1>
              <p>
               Una aplicacion donde encontraras diferentes secciones de interes, hecho con HTML, CSS
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://miprimerpag.netlify.app/"
                className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden
          bg-gradient-to-tr from-amber-500/40 p-2 rounded-md">
            <img src="/images/Usuario.png" alt="" className="w-full h-full rounded-md" />
          </div>
          <div className="absolute my-rotate-y-180 rounded-md w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-slate-700 rounded-md text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold py-2">Card Usuario</h1>
              <p>
              En este proyecto se trabaja con funciones de registro de usuarios, eliminación de usuarios y actualización de datos Reactjs Y tailwind.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://infinityspaces.netlify.app/"
                className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden
          bg-gradient-to-tr from-amber-500/40 p-2 rounded-md">
            <img src="./images/pokedex.jpg" alt="" className="w-full h-full rounded-md" />
          </div>
          <div className="absolute my-rotate-y-180 rounded-md w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-slate-700 rounded-md text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold py-2">Pokedex</h1>
              <p>
              En este proyecto, usamos tailwind, react, vite y una API para crear un pokedex. ven a buscar tu pokemon
              </p>
              <div className="text-3xl py-4 flex text-white gap-4 ">
              <i class='bx bxl-tailwind-css'>Tailwind</i>
              <i class='bx bxl-react'>react</i>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://subtle-pastelito-c13191.netlify.app/"
                className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden
          bg-gradient-to-tr from-amber-500/40 p-2 rounded-md">
            <img src="/images/Galaxia.png" alt="" className="w-full h-full rounded-md" />
          </div>
          <div className="absolute my-rotate-y-180 rounded-md w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-slate-700 rounded-md text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p>
              Bienvenido a la galaxia. Realizarás este viaje por el espacio en un cohete, logrando así viajar a diferentes lugares 
              </p>
              <div className="text-3xl py-4 flex text-white gap-4 ">
              <i class='bx bxl-tailwind-css'>Tailwind</i>
              <i class='bx bxl-react'>react</i>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://subtle-pastelito-c13191.netlify.app"
                className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden
          bg-gradient-to-tr from-amber-500/40 p-2 rounded-md">
            <img src="/images/tienda.png" alt="" className="w-full rounded-md h-full" />
          </div>
          <div className="absolute rounded-md my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-slate-700 rounded-mdtext-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold py-2">Tienda Online</h1>
              <p>
                Esta tienda esta hecha con react js y tailwind css y se consumio una Api para los productos
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://starlit-pothos-b658b1.netlify.app/"
                className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
