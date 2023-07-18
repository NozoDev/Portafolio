import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
const Work = () => {

 
  
  return (
    <section className="text-white py-12 px-2 max-w-[1100px] mx-auto " id="Work">
      <h2 className="text-3xl font-bold py-4 text-center text-withe  ">
        Proyectos en los que he trabajado!
      </h2>
      <Swiper
        spaceBetween={40}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper md:left-4 "
        breakpoints={{
          // Para pantallas de hasta 320px de ancho
          320: {
            slidesPerView: 1,
          },
          // Para pantallas mayores a 320px de ancho
          768: {
            slidesPerView: 3,
          },
        }}
      
      >
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sparkling-axolotl-da64bc.netlify.app/"
          >
            
            <img src="/images/Rick.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shiny-quokka-7d33ba.netlify.app/"
          >
            <img src="/images/Reloj.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://thecardshopping.netlify.app/"
          >
            <img src="/images/shoppin1.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://miprimerpag.netlify.app/"
          >
            <img src="/images/blog.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://helpful-conkies-072b91.netlify.app/"
          >
            <img src="/images/Usuario.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://infinityspaces.netlify.app/"
          >
            <img src="/images/Galaxia.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://subtle-pastelito-c13191.netlify.app/"
          >
            <img src="/images/pokedex.jpg" alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    
    </section>
  );
};

export default Work;
