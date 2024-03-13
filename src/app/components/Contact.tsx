'use client';

import React from 'react';

const Contact = () => {
  const handleClick = () => {
    return console.log('hello');
  };

  return (
    <div className='min-h-screen bg-off-black text-off-white font-montserrat flex flex-col justify-between' id='contact'>
      <div className='relative w-full mt-10 pointer-events-none'>
        <div className='font-montserrat uppercase 2xl:text-[11.25rem] 2xl:leading-[180px] tracking-title xl:text-mac xl:leading-mac ml-20'>work</div>
        <div className='font-montserrat uppercase 2xl:text-[11.25rem] 2xl:leading-[180px] xl:text-mac xl:leading-mac absolute left-[320px] 2xl:top-36 xl:top-28 tracking-title'>
          with us
        </div>
      </div>

      <div className='w-[90%] flex items-center mt-20 ml-20'>
        <p className='w-[45%] tracking-[.08em] leading-[1.5em] text-[16px] font-monsterrat'>
          Ready to elevate your online presence? Get in touch with us today to discuss your project and take the first step towards digital success.
          Whether you have a specific vision in mind or need guidance in shaping your online strategy, our team is here to help. Reach out to us via
          phone, email, or the contact form below, and let&apos;s bring your digital dreams to life together.
        </p>
      </div>

      <div className='ml-20'>
        <h1 className='uppercase text-[20px] font-bold'>say hello</h1>

        {/* <form>
          <div className="text-[16px] text-off-grey w-1/3">
            <div className="border-b py-2">
              <label htmlFor="name">name: </label>
              <input type="text" id="name" name="name" required className=" bg-transparent" />
            </div>
            <div className="border-b py-2">
              <label htmlFor="email">email: </label>
              <input type="email" id="email" name="email" required className=" bg-transparent" />
            </div>
            <div className="border-b py-2">
              <label htmlFor="phone">phone: </label>
              <input type="tel" id="phone" name="phone" required className=" bg-transparent" />
            </div>
            <div className="border-b py-2">
              <label htmlFor="message">message: </label>
              <textarea id="message" name="message" rows={1} required className=" bg-transparent" />
            </div>
          </div>
        </form> */}

        <div className='text-[16px] text-off-grey w-1/3'>
          <div className='border-b py-2'>name</div>
          <div className='border-b py-2'>email</div>
          <div className='border-b py-2'>phone</div>
          <div className='border-b py-2'>message</div>
        </div>

        <div className='mb-10 mt-5'>
          <button className='bg-off-white text-off-black w-[200px] h-[50px] rounded-[20px] hover:bg-purple-400' onClick={handleClick}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
