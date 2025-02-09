import { motion } from "framer-motion";
import laptop from "../../assets/pmm.png";

const FourthSection = ({ pupUpToggle }) => {
  const { popupVisiblity, setPopupVisiblity } = pupUpToggle;
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-10 w-[90%] m-auto">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-black">
          We will make yours loaded with features!
        </h2>
        <ul className="mt-4 text-lg text-black list-disc pl-5">
          <li>AI Conversational Chatbot</li>
          <li>AI Smart Search</li>
          <li>Easy Enquiry Form</li>
          <li>WCAG Standard Compliance</li>
          <li>SEO Optimized</li>
          <li>AWS Hosting</li>
          <li>SSL Certificate</li>
          <li>CDN (Content Delivery Network) Integration</li>
          <li>Lazy Loading for smooth loading of images</li>
          <li>Introduction Video on the Home page</li>
          <li>and Many more...!</li>
        </ul>
        <button
          className="mt-6 px-6 py-3 bg-black text-white rounded-lg"
          onClick={() => setPopupVisiblity(true)}
        >
          Book a Free Consultation
        </button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={laptop} alt="Graphic" className="w-3/4" />
      </motion.div>
    </div>
  );
};

export default FourthSection;
