import React, { useRef, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


const Work = () => {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-[1250px] relative z-20 cursor-pointer">
      <h3 className="text-4xl  text-white font-bold text-center mt-12 p-10">
        {t(descripcionProject)}
      </h3>
      <article className="flex flex-wrap h-full justify-center gap-4 justify-items-center p-10 ">
        <div className="w-[300px] h-[320px] bg-transparent group perspective shadow-2xl">
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
                <h1 className="text-3xl font-semibold ">{t(descripcionProjectMorthy)}</h1>

                <p className="p-2">
                {t(descripcionProjectParrafoOne)}
                </p>
                <div className="text-xl py-3 flex text-white gap-3 ">
                  <p>
                    <i className="bx bxl-tailwind-css"></i>{t(descripcionProjectParrafoTailwind)}
                  </p>
                  <p>
                    <i className="bx bxl-react"></i>{t(descripcionProjectParrafoReact)}
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sparkling-axolotl-da64bc.netlify.app/"
                  className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
                >
                  {t(descripcionProjectParrafoInf)}
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
                <h1 className="text-3xl font-semibold p-2"> {t(descripcionProjecClimate)}</h1>

                <p>
                {t(descripcionProjecParrafoClimate)}
                </p>
                <div className="text-xl py-2 flex text-white gap-3 ">
                  <p>
                    <i className="bx bxl-tailwind-css"></i>{t(descripcionProjectParrafoTailwind)}
                  </p>
                  <p>
                    <i className="bx bxl-react"></i>{t(descripcionProjectParrafoReact)}
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://shiny-quokka-7d33ba.netlify.app/"
                  className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
                >
                  {t(descripcionProjectParrafoInf)}
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
                <h1 className="text-3xl py-2 font-semibold">{t(descripcionProjectEcommerce)}</h1>
                <p className="">
                {t(descripcionProjectParrafoEcommerce)}
                </p>
                <div className="text-xl py-3 flex text-white gap-3 ">
                  <p>
                    <i className="bx bxl-tailwind-css"></i>{t(descripcionProjectParrafoTailwind)}
                  </p>
                  <p>
                    <i className="bx bxl-react"></i>{t(descripcionProjectParrafoReact)}
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://thecardshopping.netlify.app/"
                  className="bg-[#7895CB]  px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
                >
                  {t(descripcionProjectParrafoInf)}
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
                <h1 className="text-3xl py-2 font-semibold">{t(descripcionProjectMascotas)}</h1>
                <p className="">
                {t(descripcionProjectParrafoPets)}
                </p>
                <div className="text-xl py-3 flex text-white gap-3 ">
                  <p>
                    <i className="bx bxl-tailwind-css"></i> {t(descripcionProjectParrafoTailwind)}
                  </p>
                  <p>
                    <i className="bx bxl-react"></i> {t(descripcionProjectParrafoReact)}
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://miprimerpag.netlify.app/"
                  className="bg-[#7895CB]  px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
                >
                  {t(descripcionProjectParrafoInf)}
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
                <h1 className="text-2xl font-semibold ">{t(descripcionProjectCard)}</h1>
                <p className="p-2 text-md">
                {t(descripcionProjectCardParrafo)}
                </p>
                <div className="text-xl flex text-white gap-3 ">
                  <p>
                    <i className="bx bxl-tailwind-css"></i> {t(descripcionProjectParrafoTailwind)}
                  </p>
                  <p>
                    <i className="bx bxl-react"></i> {t(descripcionProjectParrafoReact)}
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://infinityspaces.netlify.app/"
                  className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
                >
                  {t(descripcionProjectParrafoInf)}
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
                <h1 className="text-3xl font-semibold ">{t(descripcionProjectPoke)}</h1>
                <p className="p-3">
                {t(descripcionProjectParrafoPokedex)}
                </p>
                <div className="text-xl py-3 flex text-white gap-3 ">
                  <p>
                    <i className="bx bxl-tailwind-css"></i> {t(descripcionProjectParrafoTailwind)}
                  </p>
                  <p>
                    <i className="bx bxl-react"></i> {t(descripcionProjectParrafoReact)}
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://subtle-pastelito-c13191.netlify.app/"
                  className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
                >
                  {t(descripcionProjectParrafoInf)}
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
                <h1 className="text-3xl font-semibold">{t(descripcionProjectGalaxy)}</h1>
                <p className="p-3">
                {t(descripcionProjectParrafoGalaxy)}
                </p>
                <div className="text-xl py-3 flex text-white gap-3 ">
                  <p>
                    <i className="bx bxl-tailwind-css"></i> {t(descripcionProjectParrafoTailwind)}
                  </p>
                  <p>
                    <i className="bx bxl-react"></i> {t(descripcionProjectParrafoReact)}
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://infinityspaces.netlify.app/"
                  className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
                >
                  {t(descripcionProjectParrafoInf)}
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
                <h1 className="text-2xl font-semibold py-2">{t(descripcionProjectTienda)}</h1>
                <p className="p-3">
                {t(descripcionProjectTiendaParrafo)}
                </p>
                <div className="text-xl py-3 flex text-white gap-3 ">
                  <p>
                    <i className="bx bxl-tailwind-css"></i> {t(descripcionProjectParrafoTailwind)}
                  </p>
                  <p>
                    <i className="bx bxl-react"></i> {t(descripcionProjectParrafoReact)}
                  </p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://starlit-pothos-b658b1.netlify.app/"
                  className="bg-[#7895CB] px-4 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125"
                >
                  {t(descripcionProjectParrafoInf)}
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
