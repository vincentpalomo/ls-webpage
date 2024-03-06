import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen text-off-white bg-off-black overflow-hidden">
      <div className="relative w-full">
        <div className="font-montserrat uppercase text-[11.25rem] leading-[180px] ml-20">what we</div>
        <div className="font-montserrat uppercase text-[11.25rem] leading-[180px] absolute left-[450px] top-36">
          offer
        </div>
      </div>

      <div className="h-1/2 grid grid-cols-3 gap-20 mx-20 mb-20">
        <div className="w-[500px]">
          <h1 className="text-[20px] font-bold uppercase font-montserrat mb-5">Web design & development:</h1>

          <p className="text-[16px] font-monserrat leading-[1.6rem] tracking-widest text-off-grey">
            Our team of expert designers and developers creates bespoke websites tailored to your brand&apos;s unique
            identity and goals. From concept to launch, we handle every aspect of the development process to ensure a
            seamless online presence.
          </p>
        </div>

        <div className="w-[500px]">
          <h1 className="text-[20px] font-bold uppercase font-montserrat mb-5">Responsive Design:</h1>

          <p className="text-[16px] font-monserrat leading-[1.6rem] tracking-widest text-off-grey">
            In today&apos;s mobile-first world, having a responsive website is crucial. We optimize your site to adapt
            seamlessly to any screen size, ensuring a consistent and user-friendly experience across all devices.
          </p>
        </div>

        <div className="w-[500px]">
          <h1 className="text-[20px] font-bold uppercase font-montserrat mb-5">UI/UX Design:</h1>

          <p className="text-[16px] font-monserrat leading-[1.6rem] tracking-widest text-off-grey">
            User experience is paramount in the digital realm. Our UI/UX designers create intuitive interfaces that
            guide users through your site effortlessly, maximizing engagement and conversions.
          </p>
        </div>

        <div className="w-[500px]">
          <h1 className="text-[20px] font-bold uppercase font-montserrat mb-5">seo & Digital Marketing:</h1>

          <p className="text-[16px] font-monserrat leading-[1.6rem] tracking-widest text-off-grey">
            A beautiful website is only effective if it&apos;s visible to your target audience. Our SEO and digital
            marketing experts employ proven strategies to boost your online visibility and drive qualified traffic to
            your site.
          </p>
        </div>

        <div className="w-[500px]">
          <h1 className="text-[20px] font-bold uppercase font-montserrat mb-5">Maintenance & Support:</h1>

          <p className="text-[16px] font-monserrat leading-[1.6rem] tracking-widest text-off-grey">
            Your journey with us doesn&apos;t end at launch. We provide ongoing maintenance and support to keep your
            website running smoothly and up-to-date with the latest trends and technologies.
          </p>
        </div>

        <div className="w-[500px]">
          <h1 className="text-[20px] font-bold uppercase font-montserrat mb-5">E-commerce Solutions:</h1>

          <p className="text-[16px] font-monserrat leading-[1.6rem] tracking-widest text-off-grey">
            Ready to take your business online? We specialize in building robust e-commerce platforms that drive sales
            and enhance customer engagement. From inventory management to payment integration, we&apos;ve got you
            covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
