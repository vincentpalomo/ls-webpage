'use client';

import React, { useState } from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Main = () => {
  const [active, setActive] = useState(0);

  const scrollToHome = () => {
    setActive(1);
    gsap.to(window, { duration: 1.5, scrollTo: { y: '#home' } });

    setTimeout(() => {
      setActive(0);
    }, 2500);
  };

  const scrollToAbout = () => {
    setActive(2);
    gsap.to(window, { duration: 1.5, scrollTo: { y: '#about' } });
  };

  const scrollToWork = () => {
    setActive(3);
    gsap.to(window, { duration: 1.5, scrollTo: { y: '#work' } });
  };

  const scrollToContact = () => {
    setActive(4);
    gsap.to(window, { duration: 1.5, scrollTo: { y: '#contact' } });
  };

  return (
    <main className='flex min-h-screen flex-col items-center bg-off-black text-off-white relative' id='home'>
      <div className='bg-noise w-full h-screen fixed opacity-[.02] pointer-events-none'></div>

      <nav className='fixed flex justify-between items-center 2xl:px-24 xl:px-20 w-full h-[70px] uppercase font-switzer text-xl tracking-wide'>
        <h1 className='cursor-pointer hover:text-purple-400' onClick={scrollToHome}>
          lucid studio ✌
        </h1>

        <ul className='flex justify-around space-x-5 w-fit'>
          <li className={`hover:text-purple-400 cursor-pointer ${active === 1 ? 'text-purple-400' : 'text-off-white'}`} onClick={scrollToHome}>
            <button>home</button>
          </li>
          <li className={`hover:text-purple-400 cursor-pointer ${active === 2 ? 'text-purple-400' : 'text-off-white'}`} onClick={scrollToAbout}>
            <button>about</button>
          </li>
          <li className={`hover:text-purple-400 cursor-pointer ${active === 3 ? 'text-purple-400' : 'text-off-white'}`} onClick={scrollToWork}>
            <button>work</button>
          </li>
          <li className={`hover:text-purple-400 cursor-pointer ${active === 4 ? 'text-purple-400' : 'text-off-white'}`} onClick={scrollToContact}>
            <button>contact</button>
          </li>
        </ul>
      </nav>

      <div className='2xl:h-[500px] xl:h-[400px] w-[90%] flex items-center overflow-hidden opacity-25 bg-hero-pattern mt-[70px] pointer-events-none'></div>

      <div className='flex justify-center overflow-hidden mt-5 ml-1'>
        <p className='2xl:text-[11.25rem] xl:text-[8.5rem] xl:leading-[8.5rem] uppercase tracking-[.20em] 2xl:leading-[180px] font-montserrat'>
          lucid studio
        </p>
        {/* <p className="text-[11.25rem] uppercase tracking-[.02em] leading-[180px] font-montserrat">vincent palomo</p> */}
      </div>

      <div className='w-[91%] flex items-center mt-5'>
        <p className='w-[65%] text-off-grey tracking-[.02em] 2xl:leading-[1.28em] xl:leading-[1.2em] 2xl:text-[24px] xl:text-[20px] font-montserrat'>
          Our studio specializes in creating visually stunning websites that embody the essence of modern design. With a focus on sleek aesthetics and
          cutting-edge design, we bring your vision to life in the digital realm. Our team of digital artisans meticulously curates every pixel to
          ensure a seamless user experience that captivates and inspires.
        </p>
      </div>
    </main>
  );
};

export default Main;
