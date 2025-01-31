import {
  FaUserShield,
  FaUserCircle,
  FaFileAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WhyChooseMediaJenie = () => {
  const features = [
    {
      title: "Reliable",
      description:
        "16+ years of experience & highly rated, recommended by customers.",
      icon: <FaUserShield className="text-yellow-500 text-4xl" />,
    },
    {
      title: "User-Focused Design",
      description: "UX-driven creative designing.",
      icon: <FaUserCircle className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Content Rich Website",
      description:
        "We develop awesome content for your website! From writing to photos and videos.",
      icon: <FaFileAlt className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Total Ownership",
      description:
        "With very little involvement from your side, we manage the entire project.",
      icon: <FaProjectDiagram className="text-yellow-500 text-4xl" />,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className=" py-28 px-4 text-center my-20 bg-gray-200 ">
      <h2 className="text-3xl font-bold text-black mb-12">
        Why choose MediaJenie as your website agency?
      </h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-xl p-6 rounded-2xl">
            <div className="flex flex-col items-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseMediaJenie;
