const HeroLeft = () => {
  return (
    <section className="p-6 md:p-12 bg-white text-black">
      <div className="max-w-2xl mx-auto text-center md:text-left ">
        <span className="bg-yellow-400 text-black font-semibold px-3 py-1 rounded-md">
          Pro Web Design & Development Agency
        </span>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
          Low-cost websites result in low business!
          <br />
          Time to go Pro!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Get a website that gives you more leads & sales.
        </p>
        <p className="mt-2 text-md text-gray-600">
          Custom Made + Great Content + Quick Loading
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full relative">
          Book a Free Consultation
          <span className="absolute inset-0 transform scale-110 bg-white opacity-10 rounded-full"></span>
        </button>
      </div>
    </section>
  );
};

export default HeroLeft;
