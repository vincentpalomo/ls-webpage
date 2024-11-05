import React from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.svg';

const Work = () => {
  return (
    <div
      className="min-h-screen bg-off-black text-off-white font-montserrat flex flex-col items-center px-4 sm:px-0 py-4"
      id="work"
    >
      <div className="w-full max-w-[960px] mt-20 mb-8">
        <h1 className="text-6xl sm:text-[128px] uppercase font-black text-center sm:text-left">Our Work</h1>
      </div>

      <div className="flex flex-col w-full max-w-[960px] text-2xl sm:text-4xl lg:text-5xl uppercase mt-5">
        {['website', 'website', 'website', 'website'].map((item, index) => (
          <div
            key={index}
            className="border-t-2 border-b flex justify-between h-[15vh] items-center cursor-pointer hover:bg-purple-400 px-2 sm:px-5"
          >
            {item}
            <span className="hidden sm:block">
              <Image src={arrow} alt="arrow" width={48} height={48} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
