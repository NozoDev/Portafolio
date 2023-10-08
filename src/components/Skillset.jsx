import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const Skillset = () => {
  const { t } = useTranslation();
  return (
    <section
      className=" text-white px-2 py-12 max-w-[1000px] mx-auto "
      id="Skillset"
    >
      {/* Subseccion superior */}
      <section className="relative z-20 top-24">
        <article className="font-bold text-center text-white text-4xl ">
          <h3 className="">{t(descripcionHabilidades)}</h3>
          <p className="text-whitefont-semibold  my-4 text-xl">
          {t(descripcionHabilidadesParrafo)}
          </p>
        </article>

        <div className="grid grid-cols-5 mt-8 p-2 gap-3 max-w-[800px] mx-auto items-center">
          <img className="animate-pulse " src="/images/HTML.png" alt="" />
          <img className="animate-pulse " src="/images/CSS.png" alt="" />
          <img className="animate-pulse " src="/images/JS.png" alt="" />
          <img className="animate-pulse " src="/images/React.png" alt="" />
          <img className="animate-pulse " src="/images/tailwind.png" alt="" />
          <img className="animate-pulse " src="/images/Postgresql.png" alt="" />
          <img className="animate-pulse " src="/images/nextjs3.png" alt="" />
          <img className="animate-pulse " src="/images/nodejs.png" alt="" />
          <img className="animate-pulse " src="/images/Git.png" alt="" />
          <img className="animate-pulse " src="/images/redux.png" alt="" />
        </div>
      </section>
    </section>
  );
};

export default Skillset;
