'use client';

import React, { useState } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Main = () => {
  const [active, setActive] = useState(0);

  const scrollTo = (selector: any, active: any) => {
    setActive(active);

    gsap.to(window, { duration: 1.5, scrollTo: { y: selector } });

    if (active == 1) {
      setTimeout(() => {
        setActive(0);
      }, 2500);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-off-black text-off-white relative" id="home">
      <div className="bg-noise w-full h-screen fixed opacity-[.02] pointer-events-none"></div>

      <nav className="fixed flex xl:justify-between items-center 2xl:px-24 xl:px-20 sm:w-full w-[95vw] h-[70px] uppercase font-switzer text-xl tracking-wide">
        <h1 className="cursor-pointer hover:text-purple-400" onClick={() => scrollTo('#home', 1)}>
          lucid studio ✌
        </h1>

        <ul className="flex justify-around space-x-5 w-fit">
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 1 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo('#home', 1)}
          >
            <button>home</button>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 2 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo('#about', 2)}
          >
            <button>about</button>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 3 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo('#work', 3)}
          >
            <button>work</button>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 4 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo('#contact', 4)}
          >
            <button>contact</button>
          </li>
        </ul>
      </nav>

      <div className="2xl:h-[500px] xl:h-[500px] h-[350px] w-[90%] flex items-center overflow-hidden opacity-25 bg-hero-pattern mt-[70px] pointer-events-none"></div>

      <div className="flex justify-center overflow-hidden mt-5 xl:ml-1 ml-3">
        <p className="2xl:text-[11.25rem] xl:text-[8.5rem] text-7xl leading-[3.5rem] xl:leading-[8.5rem] uppercase xl:tracking-[.17em] tracking-[.1em] 2xl:leading-[180px] font-montserrat font-black">
          lucid studio
        </p>
      </div>

      <div className="w-[91%] flex items-center mt-5">
        <p className="2xl:w-[65%] text-off-grey tracking-[.06em] 2xl:leading-[1.28em] xl:leading-[1.2em] 2xl:text-[24px] xl:text-[20px] font-montserrat sm:ml-3">
          Our studio specializes in creating visually stunning websites that embody the essence of modern design. With a
          focus on sleek aesthetics and cutting-edge design, we bring your vision to life in the digital realm. Our team
          of digital artisans meticulously curates every pixel to ensure a seamless user experience that captivates and
          inspires.
        </p>
      </div>
    </main>
  );
};

export default Main;
