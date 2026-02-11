import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
// import followUsData from "../data/SocialMediaConnect.jsx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  function scrollToFooter(e) {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    // Prefer scrolling directly to the Solutions & Services column so the 3 options are visible.
    const target = document.getElementById("solutions-services") || document.getElementById("site-footer");
    if (target) {
      try {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch (err) {
        // fallback
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full mx-auto shadow-md flex flex-col bg-white">
      {/* sub-header: mobile = phone+email left, Get Started right; tablet+ = same */}
      <div className="w-full flex flex-row justify-between items-center bg-primary h-auto min-h-12 md:h-14 p-2 sm:p-3 px-4 sm:px-6 md:px-12 lg:px-24 gap-2">
      <div className="-ml-3 sm:ml-0 flex flex-row flex-wrap items-center gap-x-3 sm:gap-x-4 md:gap-x-10 gap-y-1 text-white font-serif text-left min-w-0">
          <span className="flex flex-row items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base shrink-0">
            <IoMdCall className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" size={24} />
            <a href="tel:18002032520" className="hover:underline whitespace-nowrap">1800 203 2520</a>
          </span>
          <span className="flex flex-row items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base min-w-0">
            <IoMail className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" size={24} />
            <a href="mailto:info@helixhitech.com" className="hover:underline truncate">info@helixhitech.com</a>
          </span>
        </div>

        {/* Primary CTA - right side */}
        <Link to="/contact-us" className="flex items-center shrink-0">
          <button
            className="header-cta flex items-center gap-1 sm:gap-3 rounded-full border border-white px-3 sm:px-6 py-1 sm:py-1.5 text-white font-semibold tracking-wide transition-transform duration-200 hover:scale-105 text-xs sm:text-sm"
          >
            Get Started
            <span className="flex items-center justify-center w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white text-black">
              <FiArrowUpRight size={14} strokeWidth={3} className="sm:hidden" />
              <FiArrowUpRight size={20} strokeWidth={3} className="hidden sm:block" />
            </span>
          </button>
        </Link>

        {/* Social Media Icons */}
        {/* <div className="flex flex-row gap-3 justify-end w-full md:w-auto mt-2 md:mt-0">
          {followUsData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <p className="rounded-full p-2 bg-white cursor-pointer text-primary hover:scale-110">
                {item.icon}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Main Header Section - logo left-aligned with mobile number, nav right */}
      <div className="shadow-md min-h-14 md:h-20 p-2 sm:p-1.5 bg-white w-full px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="w-full px-0 sm:px-4">
          <div className="flex flex-shrink-0 items-center justify-between w-full h-full min-h-[3rem] md:min-h-[5rem]">
            {/* Logo Section - aligned with phone logo above */}
            <Link to="/" className="flex items-center shrink-0 h-full -ml-3">
              <img
                src="/assets/HelixLogo.png"
                alt="Helix Logo"
                className="h-8 w-16 sm:h-10 sm:w-20 md:h-12 md:w-22 cursor-pointer object-contain block"
                loading="eager"
                decoding="async"
                width={88}
                height={48}
              />
            </Link>

            {/* Menu Items */}
            <div className="flex-1 flex items-center justify-end text-right min-h-full">
              {/* Hamburger for mobile */}
              <button
                className="sm:hidden flex items-center p-2 text-primary"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
              <div
                className={`sm:flex flex-col sm:flex-row sm:items-center sm:space-x-4 md:space-x-8 text-center font-semibold bg-white sm:bg-transparent absolute sm:static top-full left-0 w-full sm:w-auto z-40 shadow-lg sm:shadow-none transition-all duration-300 py-4 sm:py-0 ${
                  mobileMenuOpen ? "flex" : "hidden"
                }`}
              >
                {/* Product button */}
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`inline-flex items-center cursor-pointer py-2 px-4 w-full sm:w-auto ${
                    location.pathname === "/" ? "text-[#842326]" : "text-gray-700 hover:text-gray-900"
                  }`}>
                    Home
                  </button>
                </Link>

                <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`inline-flex items-center cursor-pointer py-2 px-4 w-full sm:w-auto ${
                    location.pathname === "/products" ? "text-[#842326]" : "text-gray-700 hover:text-gray-900"
                  }`}>
                    Products
                  </button>
                </Link>

                {/* Solution and Services - wrap "Services" to next line on tablet so Contact Us is visible */}
                <button onClick={scrollToFooter} className={`inline-flex items-center cursor-pointer py-2 px-4 w-full sm:w-auto text-left sm:text-center md:leading-tight ${
                    location.pathname === "/solutions" ? "text-[#842326]" : "text-gray-700 hover:text-gray-900"
                  }`}>
                  Solution and Services
                </button>
                  {/* Dropdown */}
                {/* <div className="absolute z-10 left-0 md:mt-10 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-400 pointer-events-none group-hover:pointer-events-auto max-h-96 overflow-y-auto">
                    <div className="p-4 space-y-3">
                      <DropdownItem
                        icon="📊"
                        title="Analytics"
                        desc="Get a better understanding of your traffic"
                      />
                      <DropdownItem
                        icon="💬"
                        title="Engagement"
                        desc="Speak directly to your customers"
                      />
                      <DropdownItem
                        icon="🔒"
                        title="Security"
                        desc="Your customers’ data will be safe and secure"
                      />
                      <DropdownItem
                        icon="🔗"
                        title="Integrations"
                        desc="Connect with third-party tools"
                      />
                      <DropdownItem
                        icon="🔄"
                        title="Automations"
                        desc="Build strategic funnels that will convert"
                      />
                    </div>
                  </div> 
                </div> */}

                {/* Industries Dropdown */}
                {/* <div className="relative group inline-flex">
                  <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer py-2 px-4 w-full sm:w-auto">
                    Industries
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div className="absolute z-10 left-0 md:mt-10 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto max-h-80 overflow-y-auto">
                    <div className="p-4 space-y-2">
                      <Link
                        to="/"
                        className="block text-gray-700 hover:text-indigo-600"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/"
                        className="block text-gray-700 hover:text-indigo-600"
                      >
                        Careers
                      </Link>
                      <Link
                        to="/"
                        className="block text-gray-700 hover:text-indigo-600"
                      >
                        Blog
                      </Link>
                      <Link
                        to="/contact-us"
                        className="block text-gray-700 hover:text-indigo-600"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div> */}

                {/* About US */}
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`inline-flex items-center cursor-pointer py-2 px-4 w-full sm:w-auto ${
                    location.pathname === "/about" ? "text-[#842326]" : "text-gray-700 hover:text-gray-900"
                  }`}>
                    About Us
                  </button>
                </Link>

                {/* Contact Us */}
                <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`inline-flex items-center cursor-pointer py-2 px-4 w-full sm:w-auto ${
                    location.pathname === "/contact-us" ? "text-[#842326]" : "text-gray-700 hover:text-gray-900"
                  }`}>
                    Contact Us
                  </button>
                </Link>

                {/* Get Quote
                <div>
                <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  Get Quote
                </button>
              </div> */}
              </div>
            </div>

            {/* Right Section */}
            {/* <div className="flex items-center justify-center">
            <Link to="/">
              <button
                title="login"
                type="button"
                className="flex gap-3 text-center justify-center text-white bg-primary focus:outline-none font-medium rounded-full text-sm md:px-4 md:py-2.5 p-2 m-auto cursor-pointer"
              >
                Get Quote
                <BsArrowUpRightCircleFill size={20} />
              </button>
            </Link>
          </div> */}
          </div>
        </div>
      </div>
    </nav>
  );

  // function DropdownItem({ icon, title, desc }) {
  //   return (
  //     <div className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-md transition">
  //       <div className="text-xl">{icon}</div>
  //       <div>
  //         <p className="text-gray-900 font-medium">{title}</p>
  //         <p className="text-gray-500 text-sm">{desc}</p>
  //       </div>
  //     </div>
  //   );
  // }
};

export default Header;
