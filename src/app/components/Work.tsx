import React from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.svg';

const Work = () => {
  return (
    <div className="min-h-screen bg-off-black text-off-white font-montserrat flex flex-col items-center">
      <div className="w-full text-right">
        <div className="text-title leading-title mx-20 uppercase tracking-title mt-10">Our Work</div>
      </div>

      <div className="flex flex-col w-[90%] text-website leading-website tracking-website uppercase mt-20">
        <div className="border-t-2 border-b flex justify-between items-center">
          website 1
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b flex justify-between items-center">
          website 2
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b flex justify-between items-center">
          website 3
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </div>

        <div className="border-t border-b-2 flex justify-between items-center">
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
