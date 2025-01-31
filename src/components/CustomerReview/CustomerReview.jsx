import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sajid Asfi",
    position: "VP Pavana Valley, Navi Mumbai",
    text: "We had a fantastic experience with MediaJenie with 2 of our projects. They have a great creative team & always offer fresh & out of the box ideas. My best wishes to them.",
  },
  {
    name: "John Doe",
    position: "CEO of TechWave",
    text: "MediaJenie transformed our website and increased our engagement drastically. The team is creative and professional.",
  },
  {
    name: "Emily Johnson",
    position: "Marketing Head, BrightAgency",
    text: "Absolutely loved the service provided by MediaJenie! Their attention to detail and innovative approach is commendable.",
  },
  {
    name: "Michael Smith",
    position: "Founder, StartUpX",
    text: "Great experience working with MediaJenie. They understand the requirements perfectly and deliver top-notch solutions.",
  },
  {
    name: "Sophia Williams",
    position: "CMO, BigBrands",
    text: "Highly professional and creative team. MediaJenie has helped us scale our brand presence significantly.",
  },
];

const CustomerReviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="flex flex-col items-center text-center p-6 relative my-10 py-10">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: direction * 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -direction * 100 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-lg font-semibold">{reviews[index].text}</p>
        <h4 className="font-bold mt-4">{reviews[index].name}</h4>
        <p className="text-sm text-gray-500">{reviews[index].position}</p>
      </motion.div>
      <div className="flex mt-6 space-x-10">
        <button onClick={prevReview} className="p-2 bg-gray-200 rounded-full">
          <FaChevronLeft />
        </button>
        <button onClick={nextReview} className="p-2 bg-gray-200 rounded-full">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
