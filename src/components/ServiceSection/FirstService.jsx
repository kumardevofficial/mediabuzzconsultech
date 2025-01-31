import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import thinking from "../../assets/thinking.png";

const FirstService = () => {
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
    <section className=" py-10 px-4  flex flex-col md:flex-row items-center justify-center w-[90%] m-auto">
      {/* Left Image Div */}
      <motion.div
        ref={refLeft}
        initial={{ opacity: 0, x: -100 }}
        animate={leftControls}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src={thinking}
          alt="Thinking Man with Laptop"
          className="w-full max-w-md rounded-lg "
        />
      </motion.div>

      {/* Right Content Div */}
      <motion.div
        ref={refRight}
        initial={{ opacity: 0, x: 100 }}
        animate={rightControls}
        className="md:w-1/2 mt-8 md:mt-0 text-black text-center md:text-left px-4"
      >
        <h3 className="text-lg mb-2">Great content makes a great website</h3>
        <h1 className="text-3xl font-bold mb-4">No Content? No Problem!</h1>
        <p className="text-lg mb-4">
          Having built 100s of websites, we know the importance of content. We
          will create written content, excellent images, and explainer videos
          for your business.
        </p>
        <p className="font-semibold">Writing | Photography | Videos</p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
          Book a Free Consultation
        </button>
      </motion.div>
    </section>
  );
};

export default FirstService;
