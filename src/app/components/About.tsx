import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-off-white bg-off-black overflow-hidden px-4 py-8 sm:px-0' id='about'>
      <div className='w-full max-w-[960px] h-full mt-20'>
        <div className='w-full pointer-events-none flex flex-col mb-8'>
          <h1 className='font-montserrat uppercase text-[60px] sm:text-[128px] sm:leading-[100px] font-black sm:text-left text-left leading-[52px]'>
            our services
          </h1>
        </div>

        <div className='grid gap-8 sm:gap-10 mt-10 sm:mt-20'>
          {[
            {
              title: 'Web design & development:',
              description:
                "Our team of expert designers and developers creates bespoke websites tailored to your brand's unique identity and goals. From concept to launch, we handle every aspect of the development process to ensure a seamless online presence.",
            },
            {
              title: 'Responsive Design:',
              description:
                "In today's mobile-first world, having a responsive website is crucial. We optimize your site to adapt seamlessly to any screen size, ensuring a consistent and user-friendly experience across all devices.",
            },
            {
              title: 'UI/UX Design:',
              description:
                'User experience is paramount in the digital realm. Our UI/UX designers create intuitive interfaces that guide users through your site effortlessly, maximizing engagement and conversions.',
            },
            {
              title: 'SEO & Digital Marketing:',
              description:
                "A beautiful website is only effective if it's visible to your target audience. Our SEO and digital marketing experts employ proven strategies to boost your online visibility and drive qualified traffic to your site.",
            },
            {
              title: 'Maintenance & Support:',
              description:
                "Your journey with us doesn't end at launch. We provide ongoing maintenance and support to keep your website running smoothly and up-to-date with the latest trends and technologies.",
            },
            {
              title: 'E-commerce Solutions:',
              description:
                "Ready to take your business online? We specialize in building robust e-commerce platforms that drive sales and enhance customer engagement. From inventory management to payment integration, we've got you covered.",
            },
          ].map((service, index) => (
            <div key={index} className='w-full'>
              <h2 className='text-lg sm:text-xl font-bold uppercase font-montserrat mb-2'>{service.title}</h2>
              <p className='text-sm sm:text-base font-montserrat leading-relaxed tracking-wide text-off-grey'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
