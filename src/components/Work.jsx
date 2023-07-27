import React, { useRef, useState } from "react";
// import required modules
const Work = () => {
  return (
    <section className="mx-auto max-w-[1250px]"
      
      id="Work"
    >
        <h3 className="text-4xl text-white font-bold text-center mt-10 mb-5">Proyectos</h3>
      <article className="grid justify-center mt-10 gap-4 justify-items-center auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(230px,_340px))]">
      <div className="w-[300px]  h-[320px] bg-transparent group perspective shadow-2xl">
        <div className="relative rounded-md preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden bg-gradient-to-tr from-cold p-1 rounded-md">
            <img
              src="/images/Rick.png"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="absolute bg-dark border-2  backface-hidden bg-gradient-to-tr from-blue p-1 rounded-md  my-rotate-y-180 w-full h-full overflow-hidden ">
            <div className="text-center flex text-white flex-col items-center  h-full px-2 pb-24 p-4 ">
              <h1 className="text-3xl font-semibold ">Rick And Morty</h1>

              <p className="p-2">
                React js, tailwind css. No te imaginas los personajes que
                encontraremos en estos diferentes lugares.
              </p>
              <div className="text-xl py-3 flex text-white gap-3 ">
                <p>
                  <i className="bx bxl-tailwind-css"></i> Tailwind
                </p>
                <p>
                  <i className="bx bxl-react"></i> React
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sparkling-axolotl-da64bc.netlify.app/"
                className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px]  bg-transparent group perspective">
        <div className="relative preserve-3d  rounded-md group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden bg-gradient-to-tr from-cold p-1 rounded-md">
            <img
              src="/images/Reloj.png"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="absolute bg-dark border-2  backface-hidden bg-gradient-to-tr from-blue p-1 rounded-md  my-rotate-y-180 w-full  h-full overflow-hidden ">
            <div className=" text-white text-center flex flex-col items-center h-full px-2 pb-24 p-2">
              <h1 className="text-3xl font-semibold p-2">App-Clima</h1>

              <p>
                Uso Tailwind CSS, JS y HTML en React para la API terminada.
                agregue modos como el modo oscuro que se adapta automáticamente
                según el tiempo, puede buscar en diferentes lugares.
              </p>
              <div className="text-xl py-2 flex text-white gap-3 ">
                <p>
                  <i className="bx bxl-tailwind-css"></i> Tailwind
                </p>
                <p>
                  <i className="bx bxl-react"></i> React
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shiny-quokka-7d33ba.netlify.app/"
                className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group  perspective">
        <div className="relative preserve-3d  rounded-md  group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0  w-full h-full backface-hidden bg-gradient-to-tr from-cold p-1 rounded-md">
            <img
              src="/images/shoppin1.png"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="absolute bg-dark border-2  backface-hidden bg-gradient-to-tr from-blue p-1 rounded-md  my-rotate-y-180 w-full  h-full overflow-hidden ">
            <div className="text-white text-center flex flex-col items-center h-full px-2 pb-24 p-2">
              <h1 className="text-3xl py-2 font-semibold">E-commerc</h1>
              <p className="">
                En este proyecto estoy trabajando con un equipo de Academlo,
                hicimos esta tienda con carrito en modo oscuro, slider, memoria
                principal, ventana de soporte, etc. Usamos CSS y JavaScript.
              </p>
              <div className="text-xl py-3 flex text-white gap-3 ">
                <p>
                  <i className="bx bxl-tailwind-css"></i> Tailwind
                </p>
                <p>
                  <i className="bx bxl-react"></i> React
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thecardshopping.netlify.app/"
                className="bg-[#7895CB]  px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group  perspective">
        <div className="relative preserve-3d  rounded-md  group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0  w-full h-full backface-hidden bg-gradient-to-tr from-cold p-1 rounded-md">
            <img
              src="/images/blog.png"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="absolute bg-dark border-2  backface-hidden bg-gradient-to-tr from-blue p-1 rounded-md  my-rotate-y-180 w-full  h-full overflow-hidden ">
            <div className="text-white text-center flex flex-col items-center h-full px-2 pb-24 p-2">
              <h1 className="text-3xl py-2 font-semibold">App-Mascotas</h1>
              <p className="">
                En este proyecto estoy trabajando con html y css,
                hicimos una app para mascotas donde tiene diferentes secciones.
              </p>
              <div className="text-xl py-3 flex text-white gap-3 ">
                <p>
                  <i className="bx bxl-tailwind-css"></i> Tailwind
                </p>
                <p>
                  <i className="bx bxl-react"></i> React
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://miprimerpag.netlify.app/"
                className="bg-[#7895CB]  px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div
            className="absolute border-0 w-full h-full backface-hidden
          bg-gradient-to-tr from-cold p-1 rounded-md"
          >
            <img
              src="/images/Usuario.png"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="absolute bg-dark border-2  backface-hidden bg-gradient-to-tr from-blue p-1 rounded-md  my-rotate-y-180 w-full  h-full overflow-hidden ">
            <div className="text-white text-center flex flex-col items-center h-full px-2 pb-24 p-2">
              <h1 className="text-3xl font-semibold ">Card Usuario</h1>
              <p className="p-3">
                En este proyecto se trabaja con funciones de registro de
                usuarios, eliminación de usuarios y actualización de datos
                Reactjs Y tailwind.
              </p>
              <div className="text-xl flex text-white gap-3 ">
                <p>
                  <i className="bx bxl-tailwind-css"></i> Tailwind
                </p>
                <p>
                  <i className="bx bxl-react"></i> React
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://infinityspaces.netlify.app/"
                className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div
            className="absolute border-0 w-full h-full backface-hidden
          bg-gradient-to-tr from-cold p-1 rounded-md"
          >
            <img
              src="./images/pokedex.jpg"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="absolute bg-dark border-2  backface-hidden bg-gradient-to-tr from-blue p-1 rounded-md  my-rotate-y-180 w-full  h-full overflow-hidden ">
            <div className="text-center flex flex-col items-center h-full text-white px-2 pb-24 p-2">
              <h1 className="text-3xl font-semibold ">Pokedex</h1>
              <p className="p-3">
                En este proyecto, usamos tailwind, react, vite y una API para
                crear un pokedex. ven a buscar tu pokemon
              </p>
              <div className="text-xl py-3 flex text-white gap-3 ">
                <p>
                  <i className="bx bxl-tailwind-css"></i> Tailwind
                </p>
                <p>
                  <i className="bx bxl-react"></i> React
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://subtle-pastelito-c13191.netlify.app/"
                className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-0 w-full h-full backface-hidden bg-gradient-to-tr from-cold p-1 rounded-md">
            <img
              src="/images/Galaxia.png"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="absolute bg-dark border-2  backface-hidden bg-gradient-to-tr from-blue p-1 rounded-md my-rotate-y-180 w-full h-full overflow-hidden ">
            <div className=" text-center flex flex-col items-center h-full text-white px-2 pb-24 p-2">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="p-3">
                Bienvenido a la galaxia. Realizarás este viaje por el espacio en
                un cohete, logrando así viajar a diferentes lugares
              </p>
              <div className="text-xl py-3 flex text-white gap-3 ">
                <p>
                  <i className="bx bxl-tailwind-css"></i> Tailwind
                </p>
                <p>
                  <i className="bx bxl-react"></i> React
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://subtle-pastelito-c13191.netlify.app"
                className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div
            className="absolute border-0 w-full h-full backface-hidden
          bg-gradient-to-tr from-cold p-1 rounded-md"
          >
            <img
              src="/images/tienda.png"
              alt=""
              className="w-full rounded-md h-full"
            />
          </div>
          <div className="absolute bg-dark border-2  backface-hidden bg-gradient-to-tr from-blue p-1 rounded-md my-rotate-y-180 w-full h-full overflow-hidden">
            <div className=" text-center flex flex-col items-center h-full text-white px-2 pb-24 p-2">
              <h1 className="text-2xl font-semibold py-2">Tienda Online</h1>
              <p className="p-3">
                Esta tienda esta hecha con react js y tailwind css y se consumio
                una Api para los productos
              </p>
              <div className="text-xl py-3 flex text-white gap-3 ">
                <p>
                  <i className="bx bxl-tailwind-css"></i> Tailwind
                </p>
                <p>
                  <i className="bx bxl-react"></i> React
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://starlit-pothos-b658b1.netlify.app/"
                className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>
      </article>
    </section>
  );
};

export default Work;
