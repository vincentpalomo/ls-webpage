'use client';

import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  const handleClick = () => {
    return console.log('hello');
  };

  return (
    <div
      className="min-h-screen bg-off-black text-off-white font-montserrat flex flex-col justify-between sm:pl-5"
      id="contact"
    >
      <div className="sm:relative w-full sm:mt-10 mb-10 mt-20 ml-5 sm:ml-0 pointer-events-none">
        <div className="font-montserrat uppercase 2xl:text-[11.25rem] 2xl:leading-[180px] text-7xl sm:tracking-title xl:text-mac xl:leading-mac sm:ml-20">
          work
        </div>
        <div className="font-montserrat uppercase 2xl:text-[11.25rem] 2xl:leading-[180px] text-7xl xl:text-mac xl:leading-mac sm:absolute left-[320px] 2xl:top-36 xl:top-28 sm:tracking-title">
          with us
        </div>
      </div>

      <div className="w-[90%] flex items-center sm:mt-20 sm:ml-20 ml-5">
        <p className="sm:w-[45%] tracking-[.08em] leading-[1.5em] text-[16px] font-monsterrat">
          Ready to elevate your online presence? Get in touch with us today to discuss your project and take the first
          step towards digital success. Whether you have a specific vision in mind or need guidance in shaping your
          online strategy, our team is here to help. Reach out to us via phone, email, or the contact form below, and
          let&apos;s bring your digital dreams to life together.
        </p>
      </div>

      <div className="sm:ml-20 ml-5">
        <h1 className="uppercase text-[20px] font-bold">say hello</h1>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
