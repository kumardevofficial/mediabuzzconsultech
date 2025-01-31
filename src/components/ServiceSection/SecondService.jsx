import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import laptop from "../../assets/laptop.png";

const SecondService = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewLeft)
      leftControls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    if (inViewRight)
      rightControls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
  }, [leftControls, rightControls, inViewLeft, inViewRight]);

  return (
    <section className=" py-10 px-4 flex flex-col md:flex-row items-center justify-center w-[90%] m-auto">
      {/* Left Content Div */}
      <motion.div
        ref={refLeft}
        initial={{ opacity: 0, x: -100 }}
        animate={leftControls}
        className="md:w-1/2 text-black text-center md:text-left px-4"
      >
        <h3 className="text-lg mb-2">Website built for the future</h3>
        <h1 className="text-3xl font-bold mb-4">Advanced. Open-Source.</h1>
        <p className="text-lg mb-4">We build what you need:</p>
        <ul className="list-disc list-inside">
          <li>ReactJS / NodeJS / VueJS</li>
          <li>WordPress / Drupal</li>
          <li>Hugo / HTML 5</li>
          <li>Strapi / Headless CMS</li>
          <li>MongoDB / Postgres</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
          Book a Free Consultation
        </button>
      </motion.div>

      {/* Right Image Div */}
      <motion.div
        ref={refRight}
        initial={{ opacity: 0, x: 100 }}
        animate={rightControls}
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
      >
        <img
          src={laptop}
          alt="Man with Laptop"
          className="w-full max-w-md rounded-lg "
        />
      </motion.div>
    </section>
  );
};

export default SecondService;
