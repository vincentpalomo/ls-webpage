'use client';

import React from 'react';
import ContactForm from './ContactForm';
import CalComponent from '../api/cal/cal';

const Contact = () => {
  return (
    <div className='min-h-screen bg-off-black text-off-white font-montserrat flex justify-center items-center px-4 sm:px-0 py-8' id='contact'>
      <div className='w-full max-w-[980px] flex flex-col items-center justify-around mt-20'>
        <div className='w-full pointer-events-none mb-8'>
          <h1 className='font-montserrat uppercase text-[60px] leading-[52px] sm:text-[128px] sm:leading-[100px] font-black text-left sm:text-left'>
            let&apos;s connect
          </h1>
        </div>

        <div className='flex items-center mb-8'>
          <p className='w-full sm:w-[100%] tracking-[.08em] leading-[1.5em] text-sm sm:text-[16px] font-montserrat text-left sm:text-left'>
            Ready to elevate your online presence? Get in touch with us today to discuss your project and take the first step towards digital success.
            Whether you have a specific vision in mind or need guidance in shaping your online strategy, our team is here to help. Schedule a 30 min
            call with us below, and let&apos;s bring your digital dreams to life together.
          </p>
        </div>

        <div className='w-full relative'>
          {/* <h2 className="uppercase text-xl font-bold mb-4 text-center sm:text-left">say hello</h2> */}
          {/* <ContactForm /> */}
          <CalComponent />
          {/* <span className='absolute w-full h-10 bottom-5 bg-off-black border-2 rounded-2xl flex items-center justify-center'>thank you! 🙂</span> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
