import React, { useState, useEffect } from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const assets = {
  hero: "/assets/products-hero-bg.png",
  cta: "/assets/cta-team.png",
  products: {
    monitor: "/assets/products/monitor.png",
    keyboardMouse: "/assets/products/keyboard-mouse.png",
    laptop: "/assets/products/laptop.png",
    cpu: "/assets/products/cpu.png",
    thermalPrinter: "/assets/products/thermal-printer.png",
    allInOnePrinter: "/assets/products/all-in-one-printer.png",
    usbPrinter: "/assets/products/usb-printer.png",
    interactivePanel: "/assets/products/interactive-panel.png",
    advertisingPanel: "/assets/products/advertising-panel.png",
  },
  cloud: {
    m365: "/assets/products/M365 license.png",
    googleSuite: "/assets/products/G Suite.jpg",
    autodesk: "/assets/products/Autodesk License.jpg",
    pdf: "/assets/products/PDF License.webp",
  },
};

const productCategories = [
  {
    title: "BRANDED SYSTEMS",
    columns: 4,
    carousel: true,
    products: [
      { name: "Monitor", image: assets.products.monitor },
      { name: "Keyboard Mouse", image: assets.products.keyboardMouse },
      { name: "Laptops", image: assets.products.laptop },
      { name: "CPU", image: assets.products.cpu },
      { name: "Keyboard Mouse", image: assets.products.keyboardMouse },
      { name: "Laptops", image: assets.products.laptop },
      { name: "CPU", image: assets.products.cpu },
      { name: "Monitor", image: assets.products.monitor },
    ],
  },
  {
    title: "PRINTERS",
    columns: 3,
    products: [
      { name: "Thermal Printer", image: assets.products.thermalPrinter },
      { name: "All in One Printer", image: assets.products.allInOnePrinter },
      { name: "USB Printer", image: assets.products.usbPrinter },
    ],
  },
  {
    title: "CLOUD PRODUCTS",
    columns: 4,
    carousel: true,
    products: [
      { name: "M365 License", image: assets.cloud.m365 },
      { name: "Google Suits", image: assets.cloud.googleSuite },
      { name: "Autodesk License", image: assets.cloud.autodesk },
      { name: "PDF License", image: assets.cloud.pdf },
      { name: "Google Suits", image: assets.cloud.googleSuite },
      { name: "Autodesk License", image: assets.cloud.autodesk },
      { name: "PDF License", image: assets.cloud.pdf },
      { name: "M365 License", image: assets.cloud.m365 },
    ],
  },
  {
    title: "CCTV",
    columns: 3,
    products: [
      { name: "NVRs", image: "/assets/products/NVRs.jpg" },
      { name: "Bullet Cameras", image: "/assets/products/Bullet Cameras.jpg" },
      { name: "Dome Cameras", image: "/assets/products/Dome Cameras.webp" },
    ],
  },
  {
    title: "ASAMBLE SYSTEMS",
    columns: 4,
    carousel: true,
    products: [
      { name: "Motherboard", image: "/assets/products/Motherboard.jpg" },
      { name: "Keyboard Mouse", image: "/assets/products/keyboard-mouse.png" },
      { name: "SMPS", image: "/assets/products/SMPs.webp" },
      { name: "CPU Cabinets", image: "/assets/products/cpu.png" },
      { name: "Keyboard Mouse", image: "/assets/products/keyboard-mouse.png" },
      { name: "SMPS", image: "/assets/products/SMPs.webp" },
      { name: "CPU Cabinets", image: "/assets/products/cpu.png" },
      { name: "Motherboard", image: "/assets/products/Motherboard.jpg" },
    ],
  },
  {
    title: "CABLES & ADAPTORS",
    columns: 3,
    products: [
      { name: "Cat-6 Cable", image: "/assets/products/Cat-6 Cable.jpg" },
      { name: "Fibre Cables", image: "/assets/products/Fibre Cables.jpg" },
      { name: "Any Adaptor", image: "/assets/products/Any Adaptor.jpg" },
    ],
  },
  {
    title: "AUDIO/VIDEO SOLUTIONS",
    columns: 4,
    carousel: true,
    products: [
      { name: "Mic", image: "/assets/products/Mic.jpg" },
      { name: "Ceiling Speaker", image: "/assets/products/Ceiling Speaker.jpg" },
      { name: "Wall Mount Speaker", image: "/assets/products/Wall Mount Speaker.jpg" },
      { name: "Amplifier", image: "/assets/products/Emplifier.jpg" },
      { name: "Ceiling Speaker", image: "/assets/products/Ceiling Speaker.jpg" },
      { name: "Wall Mount Speaker", image: "/assets/products/Wall Mount Speaker.jpg" },
      { name: "Amplifier", image: "/assets/products/Emplifier.jpg" },
      { name: "Mic", image: "/assets/products/Mic.jpg" },
    ],
  },
  {
    title: "SOFTWARE",
    columns: 2,
    products: [
      { name: "MS Office", image: "/assets/products/MS Office.jpg" },
      { name: "Anti Virus", image: "/assets/products/Antivirus.jpg" },
    ],
  },
  {
    title: "NETWORK PRODUCTS",
    columns: 4,
    products: [
      { name: "Data Switch", image: "/assets/products/Data Switch.jpg" },
      { name: "POE Switch", image: "/assets/products/POE Switches.jpg" },
      { name: "Wifi Routers", image: "/assets/products/WIFI Router.jpg" },
      { name: "Firewalls", image: "/assets/products/Firewalls.webp" },
    ],
  },
  {
    title: "VOICE PRODUCT",
    columns: 4,
    products: [
      { name: "EPABX", image: "/assets/products/EPABX.jpg" },
      { name: "IP Phones", image: "/assets/products/IP Phones.jpeg" },
      { name: "DKP Phones", image: "/assets/products/DKP Phones.jpg" },
      { name: "SLT Phones", image: "/assets/products/SLT Phones.jpg" },
    ],
  },
  {
    title: "PANEL",
    columns: 2,
    products: [
      { name: "Interactive Panel", image: assets.products.interactivePanel },
      { name: "Advertising Panel", image: assets.products.advertisingPanel },
    ],
  },
];

const ProductCard = ({ name, image }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-soft flex-shrink-0 w-full">
    <div className="aspect-square overflow-hidden rounded-xl">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl" />
    <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white font-manrope">
      {name}
    </h3>
  </div>
);

const ProductCarousel = ({ title, products, itemsPerView = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
  // Determine responsive itemsPerView
  const getResponsiveItemsPerView = () => {
    if (screenSize < 640) return 1; // Mobile
    if (screenSize < 1024) return 2; // Tablet
    return itemsPerView; // Desktop
  };

  const responsiveItemsPerView = getResponsiveItemsPerView();
  const totalItems = products.length;
  const maxIndex = Math.max(0, totalItems - responsiveItemsPerView);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Calculate number of dots based on how many "pages" of items
  const dotsCount = maxIndex + 1;

  // Calculate visible items
  const visibleProducts = products.slice(currentIndex, currentIndex + responsiveItemsPerView);

  return (
    <section className="pt-4 pb-8">
      <h2 className="mb-7 text-center text-xl sm:text-2xl font-bold tracking-[0.05em] text-gray-700 font-work-sans">
        {title}
      </h2>
      
      <div className="relative px-6 sm:px-12 md:px-16">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
            currentIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#842326] text-white hover:bg-[#6a1c1e] shadow-lg hover:scale-110'
          }`}
          aria-label="Previous"
        >
          <FiChevronLeft size={20} className="sm:hidden" />
          <FiChevronLeft size={24} className="hidden sm:block" />
        </button>

        {/* Carousel Container - Shows only full items */}
        <div className="overflow-hidden">
          <div className="flex gap-2 sm:gap-3 md:gap-4">
            {visibleProducts.map((product, index) => (
              <div
                key={`${product.name}-${currentIndex + index}`}
                className="flex-1 min-w-0 md:w-[calc(50%-0.5rem)] md:flex-none lg:flex-1"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
            currentIndex >= maxIndex
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#842326] text-white hover:bg-[#6a1c1e] shadow-lg hover:scale-110'
          }`}
          aria-label="Next"
        >
          <FiChevronRight size={20} className="sm:hidden" />
          <FiChevronRight size={24} className="hidden sm:block" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: dotsCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-[#842326] scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const ProductGrid = ({ title, products, columns }) => (
  <section className="py-8">
    <h2 className="mb-7 text-center text-xl sm:text-2xl font-bold tracking-[0.05em] text-gray-600 font-work-sans">
      {title}
    </h2>
    <div
      className={`flex flex-wrap justify-center ${
        title === "SOFTWARE" ? "gap-4 sm:gap-2" : "gap-2 sm:gap-3 md:gap-4"
      }`}
    >
      {products.map((product) => (
        <div key={product.name} className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.5rem)] lg:w-[260px]">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  </section>
);

const ProductCategory = ({ title, products, columns, carousel }) => {
  if (carousel) {
    return <ProductCarousel title={title} products={products} itemsPerView={columns} />;
  }
  return <ProductGrid title={title} products={products} columns={columns} />;
};

const CTASection = () => (
  <section className="relative py-16 overflow-hidden bg-primary">
    <div 
      className="absolute inset-0 bg-cover" 
      style={{ 
        backgroundImage: `url(${assets.cta})`,
        backgroundPosition: "center 25%",
        opacity: 0.1
      }} 
    />

    <div className="relative max-w-3xl mx-auto px-4 text-center text-white space-y-6">
      <h2 className="font-manrope text-[28px] sm:text-[34px] md:text-[42px] leading-[1.2] tracking-normal text-white text-center">
        <span className="font-light">Ready to Scale</span>{" "}
        <span className="font-extrabold">with Smarter IT?</span>
      </h2>
      <p className="font-work-sans font-normal text-base md:text-lg leading-relaxed text-white max-w-2xl mx-auto px-4">
        Partner with Helix for secure, scalable IT solutions that drive growth,
        efficiency, and continuous business success.
      </p>
      <div className="flex flex-row gap-4 justify-center">        <button className="flex gap-2 sm:gap-2 items-center justify-center transition-colors duration-200 hover:bg-transparent hover:outline-1 hover:text-white text-black bg-white rounded-full font-medium sm:font-bold text-base cursor-pointer px-4 sm:px-5 py-2 sm:py-2.5">
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

const Products = () => {
  return (
    <div className="bg-[#fafafa]">
      <section
        className="relative flex min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.hero})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-1 items-center justify-center text-center">
          <h1 className="font-manrope text-4xl sm:text-5xl font-bold text-white md:text-6xl">
            Our Products
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-14 text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <p className="font-poppins text-black italic font-semibold text-sm tracking-wide">Our Products</p>
            <img src="/assets/line.png" alt="line" className="h-[2px] w-16 object-cover" />
          </div>
          <h2 className="mt-4 font-manrope text-3xl md:text-4xl" style={{ fontWeight: 400 }}>
            Explore Our Complete <span className="font-bold" style={{ fontWeight: 700 }}>Hardware Solutions</span>
          </h2>
          <p className="mt-4 font-work-sans text-base text-gray-700" style={{ lineHeight: '150%' }}>
            Powerful, reliable, and scalable hardware options designed to support productivity, security,
            and smooth performance across every business requirement.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        {productCategories.map((category) => (
          <ProductCategory key={category.title} {...category} />
        ))}
      </div>

      <CTASection />
    </div>
  );
};

export default Products;