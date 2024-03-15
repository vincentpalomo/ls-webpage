import React from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.svg';

const Work = () => {
  return (
    <div className="min-h-screen bg-off-black text-off-white font-montserrat flex flex-col items-center" id="work">
      <div className="w-full text-right">
        <div className="2xl:text-title xl:text-mac 2xl:leading-title xl:leading-mac mx-20 uppercase tracking-title mt-10">
          Our Work
        </div>
      </div>

      <div className="flex flex-col w-[90%] text-website leading-website tracking-website uppercase 2xl:mt-20 xl:mt-10">
        <div className="border-t-2 border-b flex justify-between items-center cursor-pointer hover:bg-purple-400 hover:bg-blend-luminosity">
          website 1
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b flex justify-between items-center cursor-pointer hover:bg-purple-400 ">
          website 2
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b flex justify-between items-center cursor-pointer hover:bg-purple-400">
          website 3
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b-2 flex justify-between items-center cursor-pointer hover:bg-purple-400">
          website 4
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Work;
