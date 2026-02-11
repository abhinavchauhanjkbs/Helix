import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const FooterQuote = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section with BG + Overlay */}
      <div className="relative bg-primary h-auto md:h-72 flex items-center">
        {/* Background Image */}
        <img
          src="/assets/FooterQuote.webp"
          alt="Grow With Helix"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          style={{ objectPosition: "center 25%" }}
          loading="lazy"
          decoding="async"
        />

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-6 md:py-8 text-white items-center justify-center space-y-3">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-manrope text-[28px] sm:text-[34px] md:text-[42px] leading-[1.2] tracking-[0%] text-white text-center">
              <span className="font-light">Ready to Scale</span>{" "}
              <span className="font-extrabold">with Smarter IT?</span>
            </h1>
            <p className="font-work-sans font-normal text-base md:text-lg leading-relaxed text-white max-w-2xl mx-auto px-4 text-center">
              Partner with Helix for secure, scalable IT solutions that drive
              growth, efficiency, and continuous business success.
            </p>
          </div>

          {/* navigation button's */}
          <div className="flex flex-row gap-2 md:gap-4 justify-center items-center mt-6">
            <button className="flex justify-center items-center gap-3 transition-colors duration-200 hover:bg-transparent hover:outline-1 hover:text-white text-black bg-white md:px-5 md:py-2.5 rounded-full md:font-bold font-medium text-base cursor-pointer p-1">
              {" "}
              Get Started
              <BsArrowUpRightCircleFill size={30} className="md:-mr-3" />
            </button>
            <button className="flex justify-center items-center text-white bg-transparent md:px-5.5 md:py-3 rounded-full font-bold cursor-pointer border border-white transition-colors duration-200 p-2 hover:bg-white hover:text-black hover:font-bold">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterQuote;
