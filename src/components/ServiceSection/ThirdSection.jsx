import { motion } from "framer-motion";
import laptop from "../../assets/pmy.png";

const ThirdSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-10 py-10 ">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={laptop} alt="Graphic" className="w-3/4" />
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black">
          A website designed for YOUR Customers & Business!
        </h2>
        <p className="mt-4 text-lg text-black">
          Our websites are not just good looking. They are search-engine ready.
          Attract visitors. And convert them into leads & sales. That is how
          YOUR website must be.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
          Book a Free Consultation
        </button>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
