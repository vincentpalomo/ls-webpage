import React from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.svg';

const Work = () => {
  return (
    <div className="min-h-screen bg-off-black text-off-white font-montserrat flex flex-col items-center" id="work">
      <div className="w-full sm:text-right mt-5 sm:mt-0">
        <div className="2xl:text-title xl:text-mac 2xl:leading-title xl:leading-mac sm:mx-20 ml-5 uppercase text-7xl sm:tracking-title mt-10">
          Our Work
        </div>
      </div>

      <div className="flex flex-col w-[90%] sm:text-website text-5xl sm:leading-website sm:tracking-website uppercase 2xl:mt-20 xl:mt-10">
        <div className="border-t-2 border-b flex justify-between h-[10vh] items-center cursor-pointer hover:bg-purple-400">
          website
          <span className="hidden sm:block">
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b flex justify-between h-[10vh] items-center cursor-pointer hover:bg-purple-400 ">
          website
          <span className="hidden sm:block">
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b flex justify-between h-[10vh] items-center cursor-pointer hover:bg-purple-400">
          website
          <span className="hidden sm:block">
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b-2 flex justify-between h-[10vh] items-center cursor-pointer hover:bg-purple-400">
          website
          <span className="hidden sm:block">
            <Image src={arrow} alt="arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Work;
