import React from "react";

const Philosophy = () => {
  return (
    <section
      className="max-w-[1200px] mt-6 mx-auto  text-white sm:grid sm:grid-cols-2"
      id="Philosophy"
    >
      <article className="bg-sky-300 text-white text-center py-10 px-2 grid gap-12 sm:grid sm:content-between">
        <div>
          <h3 className="text-3xl font-bold pt-4 py-10">Filosofia y valores</h3>
          <p className="text-white ">
            El diseño esta en todo lo que hacemos, pero tambien esta en medio de
            todo, es una combinacion de arte, ciencia, historia y filosofia pero
            tambien creo que La Honestidad es la mejor de todas las artes
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
  );
};

export default Philosophy;
