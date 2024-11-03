'use client';

import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Main = () => {
  const [active, setActive] = useState(0);

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
    <main className="flex min-h-screen flex-col items-center bg-off-black text-off-white relative" id="home">
      <div className="bg-noise w-full h-screen fixed opacity-[.02] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex flex-col sm:flex-row items-center justify-between w-full sm:w-[980px] mx-auto font-switzer uppercase text-lg sm:text-xl p-4 sm:py-5 sm:p-2 z-50">
        <h1 className="cursor-pointer mb-4 sm:mb-0" onClick={() => scrollTo('#home', 1)}>
          lucid studio ✌
        </h1>

        <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
          {[
            { label: 'home', selector: '#home', id: 1 },
            { label: 'about', selector: '#about', id: 2 },
            { label: 'work', selector: '#work', id: 3 },
            { label: 'contact', selector: '#contact', id: 4 },
          ].map((item) => (
            <li
              key={item.id}
              className={`hover:text-purple-400 cursor-pointer ${
                active === item.id ? 'text-purple-400' : 'text-off-white'
              }`}
              onClick={() => scrollTo(item.selector, item.id)}
            >
              <button className="uppercase">{item.label}</button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col justify-center items-center overflow-hidden h-screen w-full sm:w-[980px] px-4 sm:px-0">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl uppercase tracking-[-.01em] leading-tight sm:leading-none font-montserrat font-black text-center sm:text-left">
          lucid studio
        </h2>
        <p className="w-full sm:w-2/3 text-off-grey tracking-wide leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-center">
          embody the essence of modern design
        </p>
      </div>
    </main>
  );
};

export default Main;
