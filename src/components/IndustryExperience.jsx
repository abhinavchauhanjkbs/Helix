import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import industryData from "../data/Industry";
import { useState } from "react";
import useResponsiveSlides from "../hooks/useResponsiveSlides";

const IndustryExperience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = useResponsiveSlides();
  const pageCount = Math.max(1, Math.ceil(industryData.length / pageSize));
  const isFirst = currentPage === 0;
  const isLast = currentPage === pageCount - 1;
  const pages = Array.from({ length: pageCount }, (_, pageIndex) =>
    industryData.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
  );

  const goToPrevSlide = () => {
    if (isFirst) return;
    setCurrentPage((prev) => (prev <= 0 ? 0 : prev - 1));
  };
  const goToNextSlide = () => {
    if (isLast) return;
    setCurrentPage((prev) => (prev >= pageCount - 1 ? pageCount - 1 : prev + 1));
  };

  return (
    <div className="max-w-7xl container flex flex-col bg-white px-4 sm:px-5 py-8 md:py-10 lg:p-16 w-full space-y-6 md:space-y-8 items-center justify-center mx-auto">
      {/* Heading & Description */}
      <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 md:w-[40rem]">
        <div className="flex items-center justify-center gap-2">
          <h1 className="italic font-bold text-sm sm:text-base">Smart Solutions</h1>
          <img src="/assets/line.png" alt="Line Icon" className="w-16 sm:w-20 h-1" loading="lazy" decoding="async" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-[46px] font-sans font-normal justify-center text-center">
          With the expertise gain over the years,{" "}
          <span className="font-bold text-primary">We can Cater</span>
        </h1>
        <p className="text-gray-500 max-w-2xl text-center text-sm sm:text-base md:text-lg p-2">
          Helix caters to a range of industries, from procuring products to
          creating innovative solutions. Some of the industries we serve are:
        </p>
      </div>

      {/* Image Slider */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Left Navigation Arrow - Outside */}
        <button
          className={`absolute top-2/5 -left-2 sm:-left-1 md:-left-4 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-full z-20 transition-all duration-300 flex items-center justify-center outline-none border-none ${
            isFirst
              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
              : "bg-[#842326] text-white hover:bg-[#6a1c1e] hover:scale-110"
          }`}
          onClick={goToPrevSlide}
          aria-label="Previous Slide"
          aria-disabled={isFirst}
          disabled={isFirst}
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Right Navigation Arrow - Outside */}
        <button
          className={`absolute top-2/5 -right-2 sm:-right-1 md:-right-4 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-full z-20 transition-all duration-300 flex items-center justify-center outline-none border-none ${
            isLast
              ? "bg-gray-300 text-white cursor-not-allowed"
              : "bg-[#842326] text-white hover:bg-[#6a1c1e] hover:scale-110"
          }`}
          onClick={!isLast ? goToNextSlide : undefined}
          aria-label="Next Slide"
          aria-disabled={isLast}
          disabled={isLast}
        >
          <FiChevronRight size={24} />
        </button>

        <div className="overflow-hidden">
        {/* Image & Label */}
        <div
          className="slider-track flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((pageItems, pageIndex) => (
            <div
              className="min-w-full flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-2 sm:px-4"
              key={pageIndex}
            >
              {pageItems.map((item, index) => (
                <div
                  key={`${pageIndex}-${index}`}
                  className="relative flex-shrink-0 w-full max-w-[280px] min-h-[260px] h-[320px] mx-auto sm:mx-0 sm:max-w-[220px] sm:w-[calc(50%-0.5rem)] sm:h-[340px] md:w-[267px] md:h-[383px] md:max-w-none"
                >
                  <img
                    src={item.icon}
                    alt="Industry Images"
                    className="w-full h-full rounded-2xl object-cover opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {/* Text above overlay */}
                  <div className="absolute bottom-4 left-0 w-full pl-4 z-10">
                    <p className="text-white text-sm sm:text-base md:text-lg font-sans font-semibold drop-shadow-lg">
                      {item.label}
                    </p>
                    {/* <p className="text-gray-200 text-sm font-normal drop-shadow-md">
                      {item.desc}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        </div>

        {/* Slider Indicator buttons*/}
        <div className="flex items-center justify-center my-8 space-x-3">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === i ? "bg-primary scale-125 " : "bg-lightPrimary"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExperience;
