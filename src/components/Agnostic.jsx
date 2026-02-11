const Agnostic = () => {
  return (
    <div className="flex mx-auto w-full py-10">
      <div className="relative bg-primary h-auto md:h-56 flex items-center min-w-full">
        <img
          src="/assets/agnostic.webp"
          alt="Grow With Helix"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="lazy"
          decoding="async"
        />

        <div className="relative container mx-auto text-white w-full">
          <div className="flex md:flex-row items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-light leading-snug p-6 sm:p-8 md:p-10">
              Our Expertise is{" "}
              <span className="font-semibold">Industries Agnostic</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agnostic;
