import cardData from "../data/GrowHelixData";

const GrowWithHelix = () => {
  return (
    <div className="flex flex-col w-full py-10">
      {/* Top Section with BG + Overlay */}
      <div className="relative bg-primary flex items-center py-16 md:py-20 lg:py-24">
        {/* Background Image */}
        <img
          src="/assets/GrowWithHelix.webp"
          alt="Grow With Helix"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="lazy"
          decoding="async"
        />

        {/* Content Overlay */}
        <div className="relative container mx-auto px-4 md:px-16 py-8 text-white grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center -translate-y-4 md:-translate-y-6 lg:-translate-y-8">
          {/* Heading */}
          <div className="md:px-4">
            <div className="flex items-start gap-2">
              <h1 className="italic font-bold text-balance whitespace-normal md:whitespace-nowrap">
                Future-Ready Technology
              </h1>
              <img src="/assets/white line.png" alt="White Line Icon" className="w-20 h-1 mt-3" loading="lazy" decoding="async" />
            </div>
            <h1 className="text-3xl md:text-4xl font-light leading-snug">
              Grow with Helix –{" "}
              <span className="font-semibold">Smart IT Solutions</span>
            </h1>
          </div>

          {/* Right div text */}
          <div className="md:px-16 ">
            <p className="font-work-sans font-normal text-base md:text-lg leading-relaxed text-white">
              Grow your business with Helix’s advanced IT solutions and
              services. We ensure your satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 md:-mt-20 lg:-mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="z-10 bg-white shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
          >
            {/* Lottie animation */}
            {/* <Lottie
              path={item.lottie}
              loop
              autoplay
              className="w-20 h-20 mb-4 rounded-lg"
            /> */}

            <img
              src={item.icon}
              alt={item.label}
              className="w-14 h-14 object-contain mb-3 bg-primary rounded-xl p-2"
              loading="lazy"
              decoding="async"
            />
            <h3 className="font-semibold text-lg mb-2 ">{item.label}</h3>
            <p className="text-gray-700 text-base ">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowWithHelix;
