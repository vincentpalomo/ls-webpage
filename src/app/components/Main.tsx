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
    <main className="flex min-h-screen flex-col items-center  bg-off-black text-off-white relative" id="home">
      <div className="bg-noise w-full h-screen fixed opacity-[.02] pointer-events-none"></div>
      {/* navbar */}
      <nav className="fixed flex items-center justify-between w-[980px] font-switzer uppercase h-[5vw] px-2">
        <h1 className="cursor-pointer hover:text-purple-400 flex-1" onClick={() => scrollTo('#home', 1)}>
          lucid studio ✌
        </h1>

        <ul className="flex justify-around space-x-5 w-fit ">
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 1 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo('#home', 1)}
          >
            <button className="uppercase">home</button>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 2 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo('#about', 2)}
          >
            <button className="uppercase">about</button>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 3 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo('#work', 3)}
          >
            <button className="uppercase">work</button>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 4 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={() => scrollTo('#contact', 4)}
          >
            <button className="uppercase">contact</button>
          </li>
        </ul>
      </nav>

      {/* <div className="2xl:h-[500px] xl:h-[500px] h-[350px] w-[60%] flex items-center overflow-hidden opacity-25 bg-hero-pattern mt-[70px] pointer-events-none"></div> */}

      <div className="flex flex-col justify-center items-center overflow-hidden h-screen w-[980px]">
        <p className="2xl:text-[128px] xl:text-[8.5rem] text-7xl leading-[3.5rem] xl:leading-[8.5rem] uppercase xl:tracking-[-.01em] tracking-[.1em] 2xl:leading-[100px] font-montserrat font-black">
          lucid studio
        </p>
        <p className="2xl:w-[65%] text-off-grey tracking-[.06em] 2xl:leading-[1.28em] xl:leading-[1.2em] 2xl:text-[24px] xl:text-[20px] font-montserrat sm:ml-3">
          embody the essence of modern design
        </p>
      </div>

      {/* <div className="w-[91%] flex items-center mt-5">
        <p className="2xl:w-[65%] text-off-grey tracking-[.06em] 2xl:leading-[1.28em] xl:leading-[1.2em] 2xl:text-[24px] xl:text-[20px] font-montserrat sm:ml-3">
          embody the essence of modern design
        </p>
      </div> */}
    </main>
  );
};

export default Main;
