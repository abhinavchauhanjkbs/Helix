import followUsData from "../data/SocialMediaConnect.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="site-footer" className="relative bg-white text-black max-w-full overflow-hidden min-h-[60rem] md:min-h-[48rem] h-auto pb-0 rounded-none">
      {/* Top Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:p-16 lg:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 items-start justify-center">
        {/* Social Media Links */}
        <div className="flex flex-col">
          <img
            src="/assets/HelixLogo.png"
            alt="Helix"
            className="h-16 w-28 sm:h-20 sm:w-36 mb-4 object-contain ml-2"
            loading="lazy"
            decoding="async"
          />
          <h3 className="font-semibold mb-4">Follow Us On</h3>
          <div className="flex md:flex-row gap-4 ">
            {followUsData.map((item, index) => (
              <div key={index} className="flex flex-col">
                <p className="rounded-full p-2 bg-primary text-white cursor-pointer hover:scale-110">
                  {item.icon}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="md:pl-12">
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-3 text-normal text-gray-700 font-normal">
            <li className=" hover:font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:font-bold">
              <Link to="/products">Products</Link>
            </li>
            {/* <li className=" hover:font-bold">
              <a href="#">Services</a>
            </li> */}
            <li className=" hover:font-bold">
              <Link to="/about">About Us</Link>
            </li>
            <li className=" hover:font-bold">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Solutions & Services */}
        <div id="solutions-services">
          <h3 className="font-bold mb-4">Solutions & Services</h3>
          <ul className="space-y-3 text-normal text-gray-700 font-normal">
            <li className=" hover:font-bold">
              <a href="#">Artificial Intelligence</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Cyber Security</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Digital Workspaces</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Networking</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Modern Infrastructure</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Supply Chain & Lifecycle</a>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-bold mb-4">Industries</h3>
          <ul className="space-y-3 text-normal text-gray-700 font-normal">
            <li className="break-words max-w-[10rem]  hover:font-bold">
              <a href="#">Retail</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Banking & Finance</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Healthcare</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Automotive</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Enterprise Business</a>
            </li>
            <li className=" hover:font-bold">
              <a href="#">Small & Medium Enterprise</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider removed */}

      {/* Mobile/Tablet: copyright section */}
      <div className="lg:hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-5 pt-2 text-gray-700 text-sm sm:text-base flex flex-col gap-2 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between font-normal">
          <p className="whitespace-nowrap">&copy; HELIX 2025 All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 font-normal">
            <a href="#" className="cursor-pointer hover:font-bold">
              Privacy Policy
            </a>
            <a href="#" className="cursor-pointer hover:font-bold">
              Terms of use
            </a>
            <a href="#" className="cursor-pointer hover:font-bold">
              Disclosure
            </a>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: HELIX watermark at the end */}
      <div className="lg:hidden relative z-10">
        <div aria-hidden="true" className="flex justify-center items-center opacity-10 pointer-events-none select-none mt-1 mb-6 sm:mt-2 sm:mb-8">
          <h1 className="text-[7rem] sm:text-[15rem] font-bold tracking-widest text-gray-500 leading-none">
            HELIX
          </h1>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block relative z-10 w-full">
        <div className="border-t border-gray-300"></div>
      </div>

      {/* Laptop/Desktop: keep existing absolute legal - positioned above helix */}
      <div className="hidden lg:block relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-5 pt-4">
        <div className="text-gray-700 text-sm sm:text-base flex flex-col gap-2 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between font-normal">
          <p className="whitespace-nowrap">&copy; HELIX 2025 All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 font-normal">
            <a href="#" className="cursor-pointer hover:font-bold">
              Privacy Policy
            </a>
            <a href="#" className="cursor-pointer hover:font-bold">
              Terms of use
            </a>
            <a href="#" className="cursor-pointer hover:font-bold">
              Disclosure
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Hidden */}
      <div className="hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-3 flex flex-col md:flex-row justify-between items-center text-gray-700 relative z-10 gap-3 text-center md:text-left text-sm sm:text-base">
          <p className="order-2 md:order-1">© HELIX 2025 All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-0 md:mt-0 text-sm text-gray-700 font-normal order-1 md:order-2">
            <a href="#" className="cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="cursor-pointer">
              Terms of use
            </a>
            <a href="#" className="cursor-pointer">
              Disclosure
            </a>
          </div>
        </div>
      </div>

      {/* Background HELIX Logo for desktop (lg+) */}
      <div className="absolute inset-0 hidden lg:flex justify-center items-center lg:pt-[28rem] opacity-10 z-0 pointer-events-none overflow-hidden">
        <h1 className="text-[13rem] lg:text-[19rem] xl:text-[27rem] font-bold tracking-widest text-gray-500 select-none">
          HELIX
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
