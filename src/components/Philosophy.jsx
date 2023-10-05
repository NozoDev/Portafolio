import React from "react";
import Frontend from "/images/frontend.png";

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
            src="./images/codigo.png"
            alt=""
          />
        </article>
      </section>

      <section className="relative z-20 ">
        <h4 className="text-center mt-10 text-white  text-4xl">Certificados</h4>
        <article className="flex justify-center gap-4 flex-wrap mt-10">
          <div className="text-white border-8 w-[550px] border-winter border-solid rounded-lg">
            <img
              className="w-[650px] h-[350px] rounded-sm"
              src={Frontend}
              alt=""
            />
            <div className="flex justify-around mt-4  mb-4 items-center shadow-xl">
              <button type="text" className="border-2 w-24 rounded-sm bg-slate-700">
                Certificado
                <a
                
                  href="https://certificates.academlo.com/en/verify/62918974502376"
                  
                />
              </button>
              <h3 className="">Front-End</h3>
            </div>
          </div>
          
          <div className="text-white border-8 w-[550px] border-winter border-solid rounded-lg">
            <img
              className="w-[650px] h-[350px] rounded-sm"
              src={Frontend}
              alt=""
            />
            <div className="flex justify-around mt-4  mb-4 items-center shadow-xl">
              <button type="text" className="border-2 w-24 rounded-sm bg-slate-700">
                Certificado
                <a
                 
                  href="https://certificates.academlo.com/en/verify/62918974502376"
                  target="_blank"
                />
              </button>
              <h3 className="">Front-End</h3>
            </div>
          </div>

          <div className="text-white w-[550px] border-8  border-winter border-solid rounded-lg">
            <img
              className="w-[650px] h-[350px] rounded-sm"
              src={Frontend}
              alt=""
            />
            <div className="flex justify-around mt-4  mb-4 items-center shadow-xl">
              <button type="text" className="border-2 w-24 rounded-sm bg-slate-700">
                Certificado
                <a
                  rel="stylesheet"
                  href="https://certificates.academlo.com/en/verify/62918974502376"
                  target="_blank"
                />
              </button>
              <h3 className="">Front-End</h3>
            </div>
          </div>

         <div className="text-white w-[550px] border-8  border-winter border-solid rounded-lg">
            <img
              className="w-[650px] h-[350px] rounded-sm"
              src={Frontend}
              alt=""
            />
            <div className="flex justify-around mt-4  mb-4 items-center shadow-xl">
              <button type="text" className="border-2 w-24 rounded-sm bg-slate-700">
                Certificado
                <a
                  rel="stylesheet"
                  href="https://certificates.academlo.com/en/verify/62918974502376"
                  target="_blank"
                />
              </button>
              <h3 className="">Front-End</h3>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Philosophy;
