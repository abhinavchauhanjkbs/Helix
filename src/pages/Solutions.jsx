import { BsArrowUpRightCircleFill } from "react-icons/bs";

const services = [
  {
    image: "/assets/solutions/cyber-security.png",
    title: "Cyber Security",
    description:
      "Protect your business with advanced threat detection, monitoring, and compliance solutions.",
    features: [
      "Threat Detection & Monitoring",
      "Firewall & Endpoint Protection",
      "Data Encryption",
      "Security Audits & Compliance",
      "Incident Response Management",
    ],
  },
  {
    image: "/assets/solutions/it-procurement.png",
    title: "IT Procurement",
    description:
      "Smart sourcing of hardware, software, and enterprise IT assets at competitive pricing.",
    features: [
      "Hardware Procurement",
      "Software Licensing",
      "Vendor Management",
      "Bulk Purchase Optimization",
      "Warranty & AMC Support",
    ],
  },
  {
    image: "/assets/solutions/digital-workspace.png",
    title: "Digital Workspace",
    description:
      "Enable seamless collaboration with cloud tools, mobility solutions, and secure remote access.",
    features: [
      "Cloud Migration",
      "Microsoft 365 Solutions",
      "Collaboration Tools",
      "Device Management",
      "Virtual Desktop Infrastructure",
    ],
  },
  {
    image: "/assets/solutions/it-infrastructure.png",
    title: "IT Infrastructure",
    description:
      "Robust network design, server management, and scalable enterprise infrastructure systems.",
    features: [
      "Threat Detection & Monitoring",
      "Firewall & Endpoint Protection",
      "Data Encryption",
      "Security Audits & Compliance",
      "Incident Response Management",
    ],
  },
];

const steps = [
  {
    icon: "/assets/solutions/icon-assess.png",
    titleLine1: "Assess &",
    titleLine2: "Plan",
    descriptionLines: [
      "We thoroughly analyze your business",
      "requirements, identify technology gaps,",
      "evaluate risks, and create a strategic",
      "roadmap aligned with growth objectives.",
    ],
  },
  {
    icon: "/assets/solutions/icon-implement.png",
    titleLine1: "Implement &",
    titleLine2: "Secure",
    descriptionLines: [
      "Our experts deploy tailored IT solutions",
      "with seamless integration, strong security",
      "protocols, and scalable infrastructure",
      "ensuring operational efficiency.",
    ],
  },
  {
    icon: "/assets/solutions/icon-optimize.png",
    titleLine1: "Optimize &",
    titleLine2: "Support",
    descriptionLines: [
      "We continuously monitor system",
      "performance, optimize infrastructure, and",
      "provide proactive 24/7 support to",
      "maintain stability.",
    ],
  },
];

const titleStyle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "130%",
  letterSpacing: "0%",
  textAlign: "center",
};

const descStyle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  lineHeight: "160%",
  letterSpacing: "0%",
  textAlign: "center",
};

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden">
        <img
          src="/assets/solutions/hero-servers.png"
          alt="Smart IT Solutions - Server Room"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-center drop-shadow-lg font-manrope font-extrabold text-4xl sm:text-5xl md:text-[52px] leading-[1.2]">
            Smart IT Solutions
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "15px",
                lineHeight: "120%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
              className="mb-3 md:mb-4"
            >
              End-to-End Solutions
              <img
                src="/assets/line.png"
                alt="Line"
                className="inline-block h-1 w-12 md:w-16 ml-3 align-middle"
                loading="lazy"
                decoding="async"
              />
            </p>
            <h2
              style={{ fontFamily: "Manrope, sans-serif", lineHeight: "1.2" }}
              className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-[42px]"
            >
              Our Core <span className="text-primary">Solutions & Services</span>
            </h2>
            <p
              style={{
                fontFamily: "Work Sans, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
              className="mt-3 md:mt-4 text-gray-600 max-w-xl mx-auto px-2"
            >
              Tailored technology solutions that drive operational excellence and
              secure digital transformation.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center mx-auto"
            style={{ maxWidth: "1132px" }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-4 w-full"
                style={{
                  maxWidth: "558px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <div
                  className="w-full overflow-hidden flex-shrink-0 h-[200px] sm:h-[260px] lg:h-[347px]"
                  style={{ borderRadius: "12px" }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: "12px" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                  }}
                  className="text-gray-900"
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Work Sans, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                  className="text-gray-600"
                >
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <img
                        src="/assets/solutions/tick.png"
                        alt=""
                        className="w-4 h-4 flex-shrink-0"
                        loading="lazy"
                        decoding="async"
                      />
                      <span
                        style={{
                          fontFamily: "Work Sans, sans-serif",
                          fontWeight: 500,
                          fontStyle: "italic",
                          fontSize: "15px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontStyle: "italic",
                fontSize: "15px",
                lineHeight: "120%",
                textAlign: "center",
              }}
              className="mb-3 md:mb-4"
            >
              Simple. Strategic. Scalable.
              <img
                src="/assets/line.png"
                alt="Line"
                className="inline-block h-1 w-12 md:w-16 ml-3 align-middle"
                loading="lazy"
                decoding="async"
              />
            </p>
            <h2
              style={{ fontFamily: "Manrope, sans-serif", lineHeight: "1.2" }}
              className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-[42px]"
            >
              Our 3-Step Service <span className="text-primary">Process</span>
            </h2>
            <p
              style={{
                fontFamily: "Work Sans, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "150%",
                textAlign: "center",
              }}
              className="mt-3 md:mt-4 text-gray-600 max-w-xl mx-auto px-2"
            >
              We follow a structured three-step approach to deliver secure,
              scalable, and performance-driven IT solutions.
            </p>
          </div>

          <div className="hidden md:block lg:max-w-6xl lg:mx-auto">
            {/* Grid ensures each icon is perfectly centered above its heading */}
            <div className="md:grid md:grid-cols-[1fr_120px_1fr_120px_1fr] md:items-start md:justify-items-center">
              {steps.map((step, index) => (
                <div key={step.titleLine1} className="contents">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={step.icon}
                      alt={`${step.titleLine1} ${step.titleLine2}`}
                      className="w-20 h-20 mb-6 lg:mb-8"
                      loading="lazy"
                      decoding="async"
                    />

                    <h3 style={titleStyle} className="text-gray-900 mb-3 lg:hidden">
                      {step.titleLine1}
                      <br />
                      {step.titleLine2}
                    </h3>
                    <h3
                      style={{ ...titleStyle, whiteSpace: "nowrap" }}
                      className="text-gray-900 mb-3 hidden lg:block"
                    >
                      {step.titleLine1} {step.titleLine2}
                    </h3>

                    <p style={{ ...descStyle, fontSize: "14px" }} className="text-gray-600 lg:hidden">
                      {step.descriptionLines.map((line, i) => (
                        <span key={line} className="block">
                          {line}
                          {i < step.descriptionLines.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </p>
                    <p
                      style={{ ...descStyle, fontSize: "15px" }}
                      className="text-gray-600 hidden lg:block lg:max-w-[380px] lg:mx-auto"
                    >
                      {step.descriptionLines.map((line, i) => (
                        <span key={line} className="block lg:whitespace-nowrap">
                          {line}
                          {i < step.descriptionLines.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="flex items-center justify-center pt-7 lg:pt-8">
                      <svg
                        className="block lg:hidden"
                        width="120"
                        height="12"
                        viewBox="0 0 120 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="6"
                          x2="108"
                          y2="6"
                          stroke="#7C2D35"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                        />
                        <circle cx="114" cy="6" r="5" fill="#7C2D35" />
                      </svg>
                      <svg
                        className="hidden lg:block"
                        width="120"
                        height="12"
                        viewBox="0 0 120 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0"
                          y1="6"
                          x2="108"
                          y2="6"
                          stroke="#7C2D35"
                          strokeWidth="1.5"
                          strokeDasharray="5 4"
                        />
                        <circle cx="114" cy="6" r="5" fill="#7C2D35" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden flex flex-col gap-8">
            {steps.map((step, index) => (
              <div key={step.titleLine1} className="flex flex-col items-center text-center">
                <img
                  src={step.icon}
                  alt={`${step.titleLine1} ${step.titleLine2}`}
                  className="w-16 h-16 mb-4"
                  loading="lazy"
                  decoding="async"
                />
                <h3 style={{ ...titleStyle, fontSize: "18px" }} className="text-gray-900 mb-2">
                  {step.titleLine1} {step.titleLine2}
                </h3>
                <p
                  style={{ ...descStyle, fontSize: "14px" }}
                  className="text-gray-600 px-4 max-w-[340px] mx-auto"
                >
                  {step.descriptionLines.map((line, i) => (
                    <span key={line} className="block">
                      {line}
                      {i < step.descriptionLines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
                {index < steps.length - 1 && (
                  <div className="mt-6 flex flex-col items-center gap-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="w-0.5 h-2 bg-primary rounded opacity-60" />
                    ))}
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (matches About Us page red box) */}
      <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden bg-primary">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 30%", opacity: 0.1 }}
          src="/assets/cta-team.png"
          alt=""
          loading="lazy"
          decoding="async"
          width={1600}
          height={900}
        />
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white space-y-6">
          <h2 className="font-manrope text-[28px] sm:text-[34px] md:text-[42px] leading-[1.2] tracking-tight text-white text-center lg:whitespace-nowrap">
            <span className="font-light">Let&apos;s Build Smarter</span>
            <span className="hidden lg:inline"> </span>
            <span className="lg:hidden">
              <br />
            </span>
            <span className="font-extrabold">IT Infrastructure{"\u00A0"}Together</span>
          </h2>
          <p className="font-work-sans font-normal text-base md:text-lg leading-relaxed text-white max-w-2xl mx-auto px-4 text-center">
            Talk to our experts today and get a customized solution tailored to
            <br />
            your business needs.
          </p>
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <button className="inline-flex justify-center items-center gap-2 sm:gap-3 transition-colors duration-200 hover:bg-transparent hover:outline-1 hover:text-white text-black bg-white rounded-full font-medium sm:font-bold text-xs sm:text-sm md:text-base cursor-pointer px-3 sm:px-5 py-2 sm:py-2.5 whitespace-nowrap">
              Book a Free Consultation
              <BsArrowUpRightCircleFill className="w-5 h-5 sm:w-6 sm:h-6 sm:-mr-3" />
            </button>

            <button className="inline-flex justify-center items-center text-white bg-transparent rounded-full font-medium sm:font-bold cursor-pointer border border-white transition-colors duration-200 px-3 sm:px-5 py-2 sm:py-3 hover:bg-white hover:text-black hover:font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
