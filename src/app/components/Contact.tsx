'use client';

import React from 'react';

const Contact = () => {
  const handleClick = () => {
    return console.log('hello');
  };

  return (
    <div className="min-h-screen bg-off-black text-off-white font-montserrat flex flex-col justify-between">
      <div className="relative w-full mt-10">
        <div className="font-montserrat uppercase text-[11.25rem] leading-[180px] tracking-title ml-20">work</div>
        <div className="font-montserrat uppercase text-[11.25rem] leading-[180px] absolute left-[320px] top-36 tracking-title">
          with us
        </div>
      </div>

      <div className="w-[90%] flex items-center mt-20 ml-20">
        <p className="w-[45%] tracking-[.08em] leading-[1.5em] text-[16px] font-monsterrat">
          Ready to elevate your online presence? Get in touch with us today to discuss your project and take the first
          step towards digital success. Whether you have a specific vision in mind or need guidance in shaping your
          online strategy, our team is here to help. Reach out to us via phone, email, or the contact form below, and
          let&apos;s bring your digital dreams to life together.
        </p>
      </div>

      <div className="ml-20">
        <h1 className="uppercase text-[20px] font-bold">say hello</h1>

        <div className="text-[16px] text-off-grey w-1/3">
          <div className="border-b py-2">name</div>
          <div className="border-b py-2">email</div>
          <div className="border-b py-2">phone</div>
          <div className="border-b py-2">message</div>
        </div>

        <div className="mb-10 mt-5">
          <button
            className="bg-off-white text-off-black w-[200px] h-[50px] rounded-[20px] hover:bg-purple-400"
            onClick={handleClick}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
