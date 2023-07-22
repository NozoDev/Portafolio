import React, { useRef, useState } from "react";
// import required modules
const Work = () => {
  return (
    <section
      className="px-6 md:px-12 py-8 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_320px))] justify-center"
      id="Work"
    >
      <div className="w-[300px] h-[320px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-2 w-full h-full backface-hidden">
            <img src="/images/Rick.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-blue-500 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="my-2">morty :S</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eaque autem error, minima magnam nobis?
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

      <div className="w-[300px] h-[320px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-2 w-full h-full backface-hidden">
            <img src="/images/Reloj.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-blue-500 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="my-2">morty :S</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eaque autem error, minima magnam nobis?
              </p>
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

      <div className="w-[300px] h-[320px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-2 w-full h-full backface-hidden">
            <img src="/images/shoppin1.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-blue-500 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="my-2">morty :S</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eaque autem error, minima magnam nobis?
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thecardshopping.netlify.app/"
                className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
              >
                INFO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[320px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-2 w-full h-full backface-hidden">
            <img src="/images/blog.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-blue-500 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="my-2">morty :S</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eaque autem error, minima magnam nobis?
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

      <div className="w-[300px] h-[320px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-2 w-full h-full backface-hidden">
            <img src="/images/Usuario.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-blue-500 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="my-2">morty :S</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eaque autem error, minima magnam nobis?
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

      <div className="w-[300px] h-[320px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-2 w-full h-full backface-hidden">
            <img src="./images/pokedex.jpg" alt="" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-blue-500 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="my-2">morty :S</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eaque autem error, minima magnam nobis?
              </p>
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

      <div className="w-[300px] h-[320px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-2 w-full h-full backface-hidden">
            <img src="/images/Galaxia.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-blue-500 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="my-2">morty :S</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eaque autem error, minima magnam nobis?
              </p>
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

      <div className="w-[300px] h-[320px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute border-2 w-full h-full backface-hidden">
            <img src="/images/tienda.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100 overflow-hidden ">
            <div className="bg-blue-500 text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 p-5">
              <h1 className="text-3xl font-semibold">Rick And Morty</h1>
              <p className="my-2">morty :S</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eaque autem error, minima magnam nobis?
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
