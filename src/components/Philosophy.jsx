import React from "react";

const Philosophy = () => {
  return (
    <section className="p-10">
      <section
        className="max-w-[1200px] mt-10 mx-auto p-2 text-white sm:grid sm:grid-cols-2"
        id="Philosophy"
      >
        <article className="bg-blue text-white text-center py-10 px-2 grid gap-12 sm:grid sm:content-between">
          <div>
            <h3 className="text-3xl font-bold pt-4 py-10">
              Filosofia y valores
            </h3>
            <p className="text-white ">
              El diseño esta en todo lo que hacemos, pero tambien esta en medio
              de todo, es una combinacion de arte, ciencia, historia y filosofia
              pero tambien creo que La Honestidad es la mejor de todas las artes
              perdidas.
            </p>
          </div>
        </article>

        <article>
          <img
            className="w-full h-[300px] mx-auto object-cover"
            src="/images/codigo.png"
            alt=""
          />
        </article>
      </section>

      <section>
        <h4 className="text-center mt-10 text-white text-4xl">Certificados</h4>
        <article className="flex justify-center gap-4 mt-10">
          <div className="bg-red-500 w-[250px] h-[250px]"></div>
          <div className="bg-red-500 w-[250px] h-[250px]"></div>
          <div className="bg-red-500 w-[250px] h-[250px]"></div>
          <div className="bg-red-500 w-[250px] h-[250px]"></div>
        </article>
      </section>
    </section>
  );
};

export default Philosophy;
