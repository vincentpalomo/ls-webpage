'use client';

import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Nav from './Nav';

gsap.registerPlugin(ScrollToPlugin);

const Main = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (selector: string, active: number) => {
    setActive(active);
    gsap.to(window, { duration: 1.5, scrollTo: { y: selector } });
    if (active === 1) {
      setTimeout(() => {
        setActive(0);
      }, 2500);
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center bg-off-black text-off-white relative' id='home'>
      <div className='bg-noise w-full h-screen fixed opacity-[.02] pointer-events-none z-10'></div>

      {/* Navbar */}
      <nav className='fixed flex flex-row sm:flex-row items-center justify-between w-full sm:w-[980px] font-switzer uppercase  h-auto sm:h-[5vw] p-4 sm:px-2 bg-off-black'>
        <h1 className='cursor-pointer sm:mb-0 text-[12px] w-2/3 sm:text-[20px]' onClick={() => scrollTo('#home', 1)}>
          lucid studio ✌
        </h1>

        <ul className='flex flex-wrap justify-end sm:justify-around space-x-2 sm:space-x-5 w-full sm:w-fit text-[12px] sm:text-[20px]'>
          {[
            // { label: 'home', selector: '#home', id: 1 },
            { label: 'about', selector: '#about', id: 2 },
            { label: 'work', selector: '#work', id: 3 },
            { label: 'contact', selector: '#contact', id: 4 },
          ].map((item) => (
            <li
              key={item.id}
              className={`hover:text-purple-400 cursor-pointer ${active === item.id ? 'text-purple-400' : 'text-off-white'}`}
              onClick={() => scrollTo(item.selector, item.id)}
            >
              <button className='uppercase'>{item.label}</button>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex flex-col justify-center items-center overflow-hidden h-screen w-full sm:w-[980px] px-4 sm:px-0'>
        <p className='text-7xl sm:text-[128px] leading-[60px] sm:leading-[100px] uppercase tracking-normal sm:tracking-[-.01em] font-montserrat font-black text-left sm:text-left'>
          lucid studio
        </p>
        <p className='w-full sm:w-[65%] text-off-grey tracking-[.06em] leading-relaxed sm:leading-[1.28em] text-base sm:text-[24px] font-montserrat text-center sm:text-left sm:mt-0'>
          embody the essence of modern design
        </p>
      </div>
    </main>
  );
};

export default Main;
