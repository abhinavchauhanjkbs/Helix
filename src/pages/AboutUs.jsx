import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const assets = {
  hero: "/assets/team-meeting.png",
  story: "/assets/innovation-rocket.png",
  whoWeAre: "/assets/who-we-are-team.png",
  mission: "/assets/tech-analytics.png",
  vision: "/assets/global-network.png",
  teamCelebration: "/assets/team-celebration.png",
  icons: {
    smart: "/assets/icons/smart-innovation.png",
    security: "/assets/icons/trusted-security.png",
    support: "/assets/icons/seamless-support.png",
  },
  cta: "/assets/cta-team.png",
};

const AboutHero = () => (
  <section className="relative h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center scale-110"
      style={{ backgroundImage: `url(${assets.hero})` }}
    />
    <div className="absolute inset-0 bg-black/55" />
    <div className="relative z-10 flex h-full items-center justify-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-manrope font-semibold text-white text-center animate-fade-in">
        About Us
      </h1>
    </div>
  </section>
);

const OurStorySection = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
      <div className="order-2 md:order-1 lg:order-1 space-y-4 animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="section-label text-black text-sm sm:text-base">Our Story</span>
          <img src="/assets/line.png" alt="Line" className="h-1 w-12 sm:w-16" loading="lazy" decoding="async" width={64} height={4} />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-manrope font-semibold">
          From <span className="text-primary">Vision to Innovation</span>
        </h2>
        <p className="font-work-sans font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] tracking-[0px] text-gray-600">
          Helix began with a simple idea—to make technology smarter, simpler, and accessible
          for every business. What started as a focused vision is now a trusted IT hardware
          partner for companies across industries. We deliver dependable, high-performance
          solutions that help organizations adapt, evolve, and stay competitive.
        </p>
      </div>
      <div className="order-1 md:order-2 lg:order-2 animate-slide-up">
        <img
          src={assets.story}
          alt="Innovation concept"
          className="w-full rounded-2xl shadow-elevated"
          loading="lazy"
          decoding="async"
          width={1200}
          height={800}
        />
      </div>
    </div>
  </section>
);

const WhoWeAreSection = () => (
  <section className="relative py-8 sm:py-10 md:py-12 lg:py-20 overflow-hidden bg-primary">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.whoWeAre})`, opacity: 0.1 }}
    />
    <div className="relative max-w-4xl mx-auto px-4 text-center space-y-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-manrope font-normal text-white animate-fade-in leading-[120%]">
        <span className="font-bold">Who</span> We Are
      </h2>
      <p className="font-work-sans font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] text-white max-w-4xl mx-auto px-4 text-center animate-slide-up">
        We are Helix—a team of IT innovators dedicated to simplifying technology for
        businesses of every size. From infrastructure to cybersecurity, we deliver reliable,
        scalable, and intelligent solutions that help organizations evolve, grow, and lead.
      </p>
    </div>
  </section>
);

const MissionVisionSection = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center space-y-3 mb-8 md:mb-10 lg:mb-12">
        <div className="flex items-center justify-center gap-2">
          <span className="section-label text-black text-sm sm:text-base">Empower Growth</span>
          <img src="/assets/line.png" alt="Line" className="h-1 w-12 sm:w-16" loading="lazy" decoding="async" width={64} height={4} />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-manrope font-semibold">
          Our <span className="text-primary">Vision &amp; Mission</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-[14px] sm:text-[15px] md:text-[16px]">
          We create secure, scalable IT ecosystems designed to help organizations thrive in today's
          fast-evolving digital era.
        </p>
      </div>

      <div className="space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center md:items-stretch border border-gray-200 rounded-2xl overflow-hidden p-0">
          <div className="relative -ml-4 sm:-ml-6">
            <img src={assets.vision} alt="Vision" className="w-full md:h-full shadow-soft object-cover" loading="lazy" decoding="async" width={1200} height={800} />
          </div>
          <div className="space-y-4 text-center md:text-left p-4 sm:p-5 lg:p-6 px-2 sm:px-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="section-label text-black text-sm sm:text-base">Our Vision</span>
              <img src="/assets/line.png" alt="Line" className="h-1 w-12 sm:w-16" loading="lazy" decoding="async" width={64} height={4} />
            </div>
            <h3 className="font-manrope font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] tracking-[0px] text-[#010101]">Building Future of Connected Business</h3>
            <p className="font-work-sans font-normal text-[15px] sm:text-[15px] md:text-[16px] leading-[150%] tracking-[0px] text-gray-600">
              We envision a world where technology empowers every business to innovate fearlessly,
              collaborate seamlessly, and scale without limits—powered by Helix's commitment to
              reliability and transformation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center md:items-stretch border border-gray-200 rounded-2xl overflow-hidden p-0">
          <div className="order-2 md:order-1 lg:order-1 space-y-4 text-center md:text-left p-4 sm:p-5 lg:p-6 px-2 sm:px-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="section-label text-black text-sm sm:text-base">Our Mission</span>
              <img src="/assets/line.png" alt="Line" className="h-1 w-12 sm:w-16" loading="lazy" decoding="async" width={64} height={4} />
            </div>
            <h3 className="font-manrope font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[120%] tracking-[0px] text-[#010101]">Empowering Businesses Through Smarter IT</h3>
            <p className="font-work-sans font-normal text-[15px] sm:text-[15px] md:text-[16px] leading-[150%] tracking-[0px] text-gray-600">
              Our mission is to simplify technology for every organization—building secure, scalable,
              and intelligent IT systems that drive efficiency, innovation, and sustainable growth.
            </p>
          </div>
          <div className="order-1 md:order-2 lg:order-2">
            <img src={assets.mission} alt="Mission" className="w-full md:h-full shadow-soft object-cover" loading="lazy" decoding="async" width={1200} height={800} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
      <div className="space-y-4 text-center lg:text-left order-1">
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <span className="section-label text-black text-sm sm:text-base">Why choose us</span>
          <img src="/assets/line.png" alt="Line" className="h-1 w-12 sm:w-16" loading="lazy" decoding="async" width={64} height={4} />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-manrope font-semibold">
          Why Businesses <span className="text-primary">Choose</span> <br /> <span className="text-primary">Helix</span>
        </h2>
        <p className="font-work-sans font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] tracking-[0px] text-gray-600">
          Helix is trusted by growing startups and leading enterprises for delivering reliable, secure, and scalable IT solutions.
        </p>
        <p className="font-work-sans font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] tracking-[0px] text-gray-600">
          We combine innovation with expertise to help your business perform smarter and grow faster.
        </p>
      </div>
      {/* Desktop: overlapping image + cards; Mobile: stacked */}
      <div className="relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:h-[360px] order-2">
        <div className="absolute left-16 sm:left-20 md:left-16 lg:right-12 top-1/2 -translate-y-1/2 w-[70%] sm:w-[85%] md:w-[85%] lg:w-[75%] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] rounded-2xl overflow-hidden shadow-elevated">
          <img src={assets.teamCelebration} alt="Team" className="w-full h-full object-cover" loading="lazy" decoding="async" width={1200} height={800} />
        </div>
        <div className="absolute left-0 top-[48%] -translate-y-1/2 flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-4">
          {[
            { icon: assets.icons.smart, title: "Smart\nInnovation" },
            { icon: assets.icons.security, title: "Trusted\nSecurity" },
            { icon: assets.icons.support, title: "Seamless\nSupport" },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center justify-center rounded-xl shadow-soft bg-white text-center px-2 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 ${
                index === 1 ? "w-28 sm:w-32 md:w-36 lg:w-40" : "w-20 sm:w-24 md:w-28 lg:w-32"
              } h-16 sm:h-20 md:h-24 lg:h-24 whitespace-pre-line font-manrope text-xs sm:text-sm md:text-xs font-semibold relative ${
                index === 0 ? "-my-1 lg:-my-1" : index === 2 ? "-my-3 lg:-my-4" : "z-10"
              } ${
                index === 1 ? "bg-primary text-white scale-105 lg:scale-110" : "text-gray-800"
              }`}
            >
              <img src={feature.icon} alt={feature.title} className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-10 lg:w-10 lg:h-10 mb-1 sm:mb-2" loading="lazy" decoding="async" width={40} height={40} />
              {feature.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden bg-primary">
    <img
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: "center 30%", opacity: 0.1 }}
      src={assets.cta}
      alt=""
      loading="lazy"
      decoding="async"
      width={1600}
      height={900}
    />
    <div className="relative max-w-3xl mx-auto px-4 text-center text-white space-y-6">
      <h2 className="font-manrope text-[28px] sm:text-[34px] md:text-[42px] leading-[1.2] tracking-normal text-white text-center">
        <span className="font-light">Ready to Scale</span>{" "}
        <span className="font-extrabold">with Smarter IT?</span>
      </h2>
      <p className="font-work-sans font-normal text-base md:text-lg leading-relaxed text-white max-w-2xl mx-auto px-4 text-center">
        Partner with Helix for secure, scalable IT solutions that drive growth,
        <br />
        efficiency, and continuous business success.
      </p>
      <div className="flex flex-row gap-4 justify-center">
        <button className="flex justify-center items-center gap-2 sm:gap-3 transition-colors duration-200 hover:bg-transparent hover:outline-1 hover:text-white text-black bg-white rounded-full font-medium sm:font-bold text-base cursor-pointer px-4 sm:px-5 py-2 sm:py-2.5">
          Get Started
          <BsArrowUpRightCircleFill size={24} sm:size={30} className="sm:-mr-3" />
        </button>

        <button className="flex justify-center items-center text-white bg-transparent rounded-full font-medium sm:font-bold cursor-pointer border border-white transition-colors duration-200 px-4 sm:px-5.5 py-2 sm:py-3 hover:bg-white hover:text-black hover:font-bold text-base">
          Explore Services
        </button>
      </div>
    </div>
  </section>
);

const AboutUs = () => {
  return (
    <div className="bg-[#faf8f6]">
      <AboutHero />
      <OurStorySection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
};

export default AboutUs;
