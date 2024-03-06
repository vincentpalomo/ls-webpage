import React from 'react';
import Link from 'next/link';

const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-off-black text-off-white relative">
      <div className="bg-noise w-full h-screen fixed opacity-[.02] pointer-events-none"></div>

      <nav className="flex justify-between items-center px-24 w-full h-[70px] uppercase font-switzer text-xl tracking-wide">
        <h1 className="cursor-pointer">lucid studio ✌</h1>

        <ul className="flex justify-around space-x-5 w-fit">
          <li className="hover:text-purple-400 cursor-pointer">
            <Link href="/">home</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <Link href="/">about</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <Link href="/">work</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <Link href="/">contact</Link>
          </li>
        </ul>
      </nav>

      <div className="h-[500px] w-[90%] flex items-center overflow-hidden opacity-25 bg-hero-pattern"></div>

      <div className="flex justify-center overflow-hidden mt-5 ml-1">
        <p className="text-[11.25rem] uppercase tracking-[.20em] leading-[180px] font-montserrat">lucid studio</p>
        {/* <p className="text-[11.25rem] uppercase tracking-[.02em] leading-[180px] font-montserrat">vincent palomo</p> */}
      </div>

      <div className="w-[91%] flex items-center mt-5">
        <p className="w-[65%] text-off-grey tracking-[.02em] leading-[1.28em] text-[24px] font-montserrat">
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
