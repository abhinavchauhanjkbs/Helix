import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import accordionData from "../data/AccordionData";
import { Link } from "react-router-dom";

const ServicesSolution = () => {
  // First accordion open by default
  const [isAccordionOpen, setIsAccordionOpen] = useState(0);
  // Track which item's image should display on the right
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleAccordion = (index) => {
    // Keep the selected image in sync with the clicked item
    setSelectedIndex(index);
    setIsAccordionOpen(isAccordionOpen === index ? null : index);
  };

  return (
    <div className="max-w-7xl container flex flex-col bg-white px-4 sm:px-5 py-8 md:py-10 lg:p-16 w-full space-y-6 md:space-y-8 items-center justify-center mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-10">
        {/* Accordion Section */}
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex items-center justify-center gap-2">
            <h2 className="my-3 italic font-bold">Complete IT Care</h2>
            <img src="/assets/line.png" alt="Line Icon" className="w-20 h-1" loading="lazy" decoding="async" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-[46px] font-sans font-normal mb-4 md:mb-6 text-left">
            Explore Our{" "}
            <span className="font-semibold text-primary">
              Services & Solutions
            </span>
          </h1>

          {/* Accordion content */}
          <div className="rounded space-y-4 w-full flex flex-col md:pr-12">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="flex flex-row rounded-2xl p-2 shadow-md hover:shadow-lg border-1 border-gray-300 items-center"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-start gap-4 p-4 cursor-pointer"
                >
                  {/* Icon + Label + Desc aligned left */}
                  <div className="flex flex-row items-start gap-4 text-left flex-1 min-w-0">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-7 w-7 md:h-8 md:w-8"
                    />
                    <div className="flex flex-col space-y-1 flex-1 min-w-0">
                      <span className="font-semibold text-lg md:text-xl font-sans text-gray-900">
                        {item.label}
                      </span>
                      {isAccordionOpen === index && (
                        <div className="pr-2 text-sm md:text-lg bg-white text-gray-600 leading-snug whitespace-normal break-words">
                          {item.desc}
                          <div className="mt-1">
                            <Link
                              to="/"
                              className="text-primary font-semibold underline hover:font-bold"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Toggle symbol */}
                  <span className="text-xl font-bold flex-shrink-0">
                    {isAccordionOpen === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Info & Image */}
        <div className=" space-y-8">
          <p className="text-sm md:text-[17px] text-gray-700 md:mt-10">
            Our range of products and services will ensure growth and
            development of all your professional, managed, strategic staffing
            services.
          </p>
          {/* Show image for the currently selected accordion item (falls back to default if missing) */}
          <img
            src={accordionData[selectedIndex]?.image || "/assets/Services.webp"}
            loading="lazy"
            decoding="async"
            alt={accordionData[selectedIndex]?.label || "Services & Solution"}
            className="w-full h-auto max-h-[320px] sm:max-h-[400px] md:h-[480px] md:w-[531px] md:max-w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSolution;
