import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import imageData from "../data/HeroSectionData";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageData.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row max-w-full items-center justify-center bg-white p-4 sm:p-5 md:p-12 lg:p-16 xl:p-24 relative min-h-0 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}
    >
      {/* Grey overlay boxes - hidden on small screens to avoid overflow */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div 
          className="absolute bg-gray-200 opacity-50"
          style={{
            left: '400px',
            top: '80px',
            width: '80px',
            height: '80px'
          }}
        />
        <div 
          className="absolute bg-gray-200 opacity-50"
          style={{
            left: '560px',
            top: '160px',
            width: '80px',
            height: '80px'
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 w-full">

        {/* LEFT CONTENT */}
        <div className="w-full space-y-4 max-w-xl xl:max-w-2xl relative hero-heading-highlight">
          <div className="flex items-start gap-2">
            <h1 className="italic font-bold section-label">
              Simplifying IT for Growth
            </h1>
            <img src="/assets/line.png" alt="Line Icon" className="w-20 h-1 mt-3" loading="lazy" decoding="async" width={80} height={4} />
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-manrope leading-tight">
            Powering Business <br className="hidden md:block" />
            With The <span className="text-primary font-extrabold">Best</span>
            <br className="hidden md:block" />
            <span className="text-primary font-extrabold">Global Brand</span>
          </h1>

          <p className="text-sm lg:text-[17px] text-black/60">
            We deliver end-to-end IT solutions, from consulting to support,
            ensuring seamless technology so you can focus on growth.
          </p>

          <Link to="/">
            <button className="mt-6 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white shadow-lg hover:scale-[1.02] transition">
              Get Started
              <BsArrowUpRightCircleFill size={28} />
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-[620px] mx-auto hero-image-wrapper">

          {/* BACKGROUND CAP */}
          <div className="hero-image-bg" />

          {/* IMAGE (SLOPED TOP) */}
          <div className="relative z-20 overflow-hidden hero-image-main">
            <img
              src={imageData[currentIndex].image}
              alt={imageData[currentIndex].label}
              className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
              fetchPriority="high"
              decoding="async"
              loading="eager"
            />
          </div>

          {/* SLIDER DOTS */}
          <div className="absolute bottom-8 left-6 flex gap-2 z-30">
            {imageData.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-white/90"
                    : "w-5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
