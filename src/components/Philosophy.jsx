import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import Frontend from "/images/frontend.png";
import Fullstack from "/images/fullstack.png";
import Backend from "/images/backend.png"
import fundamentos from "/images/fundamentos.png"

const Philosophy = () => {
  const { t } = useTranslation();
  return (
    <section className="p-10 relative z-20 ">
      <section
        className="max-w-[1200px] mt-10 mx-auto p-2 text-white sm:grid sm:grid-cols-2 "
        id="Philosophy"
      >
        <article className="bg-blue text-white text-center py-10 px-2 grid gap-12 sm:grid sm:content-between">
          <div>
            <h3 className="text-3xl font-bold pt-4 py-10">
            {t(descripcionProjectCertificados)}
            </h3>
            <p className="text-white ">
            {t(descripcionProjectCertificadosParrafo)}
            </p>
          </div>
        </article>

        <article>
          <img
            className="w-full h-[350px] mx-auto object-cover"
            src="./images/codigo.png"
            alt=""
          />
        </article>
      </section>

      <section className="relative z-20 ">
        <h4 className="text-center mt-10 text-white  text-4xl">{t(descripcionProjectCertificadosOne)}</h4>
        <article className="flex justify-center gap-4 flex-wrap mt-10">
          <div className="text-white border-4  w-[550px] border-winter border-solid rounded-lg">
            <img
              className="w-[650px] h-[350px] rounded-sm"
              src={Frontend}
              alt=""
            />
         <div className="flex justify-around mt-4  mb-4 items-center shadow-xl">
              <a
                href="https://certificates.academlo.com/en/verify/62918974502376"
                target="_blank"
                className="w-24 rounded-md bg-slate-700 text-center"
              >
                {t(descripcionProjectCertificadosOne)}
              </a>

              <h3 className="">{t(descripcionFrontend)}</h3>
            </div>
          </div>

          <div className="text-white border-4 w-[550px] border-winter border-solid rounded-md">
            <img
              className="w-[650px] h-[350px] rounded-sm"
              src={Fullstack}
              alt=""
            />
          <div className="flex justify-around mt-4  mb-4 items-center shadow-xl">
              <a
                href="https://certificates.academlo.com/en/verify/93951562649959"
                target="_blank"
                className="w-24 rounded-md bg-slate-700 text-center"
              >
                {t(descripcionProjectCertificadosOne)}
              </a>

              <h3 className="">{t(descripcionFullStack)}</h3>
            </div>
          </div>

          <div className="text-white w-[550px] border-4  border-winter border-solid rounded-lg">
            <img
              className="w-[650px] h-[350px] rounded-sm"
              src={Backend}
              alt="backend"
            />
         <div className="flex justify-around mt-4  mb-4 items-center shadow-xl">
              <a
                href="https://certificates.academlo.com/en/verify/67245286791377"
                target="_blank"
                className=" w-24 rounded-md bg-slate-700 text-center"
              >
                {t(descripcionProjectCertificadosOne)}
              </a>

              <h3 className="">{t(descripcionBackEnd)}</h3>
            </div>
          </div>

          <div className="text-white w-[550px] border-4 border-winter border-solid rounded-lg">
            <img
              className="w-[650px] h-[350px] rounded-sm"
              src={fundamentos}
              alt="fundamentos"
            />
            <div className="flex justify-around mt-4  mb-4 items-center shadow-xl">
              <a
                href="https://certificates.academlo.com/en/verify/60049887092301"
                target="_blank"
                className=" w-24 rounded-md bg-slate-700 text-center"
              >
                {t(descripcionProjectCertificadosOne)}
              </a>

              <h3 className="">{t(descripcionBackEnd)}</h3>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Philosophy;
