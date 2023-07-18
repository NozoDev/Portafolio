import React from "react";

const Skillset = () => {
  return (
    <section className=" text-white px-2 py-12 max-w-[1000px] mx-auto " id="Skillset">
      {/* Subseccion superior */}
      <section className="">
        <article className="font-bold text-center text-white text-4xl ">
          <h3 className="">Habilidades</h3>
          <p className="text-whitefont-semibold  my-4 text-xl">
          Con habilidades en más de 4 campos diferentes de diseño, soy la
              persona a contratar cuando se trata de un proyecto completo, cualquiera que sean tus necesidades, puedo asumir practicamente cualquier desafio.
          </p>
          
          
        </article>

            <div className="grid grid-cols-5 mt-8  gap-5 max-w-[800px] mx-auto  items-center   ">
             
             <img className="" src="/images/HTML.png" alt="" />
             <img src="/images/CSS.png" alt="" />
             <img src="/images/JS.png" alt="" />
             <img src="/images/React.png" alt="" />
             <img src="/images/tailwind.png" alt="" />
             <img src="/public/images/Postgresql_elephant.svg.png" alt="" />
             <img src="/public/images/nextjs3.webp" alt="" />
             <img src="/public/images/1200px-Node.js_logo.svg.png" alt="" />
             <img src="/public/images/Git.png" alt="" />
             <img src="/public/images/Cuando_y_por_que_debo_usar_redux_en_mis_proyectos_frontend.jpg" alt="" />


             
            </div>
      </section>

      {/* Subseccion inferior (Logos) */}
     
    </section>
  );
};

export default Skillset;
