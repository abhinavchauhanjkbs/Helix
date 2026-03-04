import FooterQuote from "../components/FooterQuote";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, show success popup
      setShowSuccessPopup(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  const contactUsData = [
    {
      icon: "/assets/call.png",
      label: "Call Us",
      desc: "Call us anytime at 18002032520 for fast, reliable assistance and trusted IT hardware support.",
    },
    {
      icon: "/assets/email.png",
      label: "Email Us",
      desc: "Contact us anytime at info@helixhitech.com for fast, reliable IT hardware support.",
    },
    {
      icon: "/assets/location.png",
      label: "Location",
      desc: "1st Floor, C 25 Udyog Marg, Sector 8 Noida, Gautambudhha Nagar, Uttar pradesh 201301. India",
    },
  ];

  return (
    <section className="bg-white m-0">
      {/* Main Contact Section */}
      <div className="w-full">
        <div className="relative h-[200px] md:h-96 flex items-center justify-center w-full">
          <img
            src="/assets/contact-us.webp"
            alt="Contact Us Image"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
            loading="eager"
            decoding="async"
            width={1600}
            height={900}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/60 to-black/60" />
          <div className="relative flex flex-col">
            <h1 className="flex text-white md:text-5xl text-2xl font-semibold">
              Contact Us
            </h1>
            {/* <h1 className="flex text-white md:text-5xl font-semibold">
            Home  Contact Us
            </h1> */}
          </div>
        </div>
      </div>

      {/* Send us message part */}
      <div className="container flex flex-col items-center justify-center space-y-3 mx-auto w-full p-4 sm:p-5 md:p-12 lg:p-24 mt-8 md:mt-12">
        <div className="flex items-center justify-center gap-2">
          <h1 className="italic font-bold md:text-balance text-sm">Contact Us</h1>
          <img src="/assets/line.png" alt="Contact Icon" className="w-20 h-1" loading="lazy" decoding="async" width={80} height={4} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
          {" "}
          Send Us a <strong> Message</strong>
        </h1>
        <p className="font-work-sans font-normal text-[16px] leading-[150%] text-gray-600 max-w-xl text-center md:p-2">
          We'd love to hear from you. Fill out the form below, and Our Team will
          reach out within 24 hours to assist you.
        </p>

        {/* Submission Form  */}
        <form onSubmit={handleSubmit} className="w-full max-w-4xl drop-shadow-xl px-1 sm:px-0">
          <div className="mt-6 border border-none p-4 sm:p-5 bg-white shadow-xl border-gray-300 rounded-xl space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className={`w-full border p-2.5 sm:p-2 rounded text-base ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className={`w-full border p-2.5 sm:p-2 rounded text-base ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className={`w-full border p-2.5 sm:p-2 rounded text-base ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  className={`w-full border p-2.5 sm:p-2 rounded text-base ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company*"
                className={`w-full border p-2 rounded ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                className={`w-full border p-2 rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="bg-primary rounded-full w-full text-white md:py-2 font-semibold cursor-pointer transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-95">
              Submit Now
            </button>
          </div>
        </form>
      </div>

      {/* <div className="flex container flex-col items-center justify-center">
        <h1 className="italic font-bold">Quick Support</h1>
        <h1 className="text-[40px] text-center md:text-[46px] font-sans font-normal">
          We're Always{" "}
          <span className="font-bold text-primary"> Ready to Help</span>{" "}
        </h1>
        <p className="text-gray-700 max-w-3xl text-center text-lg p-2">
          Whether you prefer a quick call, an email, or an in-person visit — our
          support team is here to connect, assist, and guide you through smarter
          IT solutions every step of the way.
        </p>
        {contactUsData.map((items) => (
          <div
            className="flex flex-row items-center justify-center max-w-xl"
            key={items.label}
          >
            <div className="flex flex-col">
              <img
                src={items.icon}
                alt={items.label}
                className="w-14 h-14 object-contain mb-3 bg-primary rounded-full p-2"
                loading="lazy"
              />
              <p className="text-gray-700 max-w-xl text-center text-lg p-2">
                {items.desc}
              </p>
            </div>
          </div>
        ))}
      </div> */}
      {/* Quick Support Section */}
      <div className="max-w-7xl container mx-auto w-full px-4 sm:px-5 md:px-6 lg:px-8 pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Header */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <h1 className="italic font-bold text-sm md:text-base">Quick Support</h1>
              <img src="/assets/line.png" alt="Contact Icon" className="w-20 h-1" loading="lazy" decoding="async" width={80} height={4} />
            </div>
            <h1 className="text-3xl md:text-[46px] font-bold text-center">
              We're Always <span className="text-primary">Ready to Help</span>
            </h1>
            <p className="text-gray-700 max-w-3xl text-center text-base">
              Whether you prefer a quick call, an email, or an in-person visit —
              our support team is here to connect, assist, and guide you through
              smarter IT solutions every step of the way.
            </p>
          </div>

          {/* 3 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {contactUsData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-start text-center space-y-4 ${
                  index !== contactUsData.length - 1
                    ? "md:border-r-2 md:border-[#c88e90] md:pr-8"
                    : ""
                }`}
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full">
                  <img src={item.icon} alt={item.label} className="w-7 h-7" loading="lazy" decoding="async" width={28} height={28} />
                </div>
                {/* Text */}
                <div className="space-y-2">
                  {/* <h3 className="font-bold text-lg">{item.label}</h3> */}
                  <p className="text-black/60 max-w-64 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterQuote />
      
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Details Submitted</h3>
              <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you soon!</p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
