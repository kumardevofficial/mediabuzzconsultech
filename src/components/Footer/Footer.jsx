import React from "react";
import headerLogo from "../../assets/onlylogo.png";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img src={headerLogo} alt="Logo" className="w-14 h-14 mr-2" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-yellow-500">
                  MEDIA BUZZ
                </span>
                <span className="text-gray-300">CONSULTECH</span>
              </div>
            </div>
            <p className="text-sm mb-4 max-w-xs text-gray-400">
              "At Media Buzz Consultech, we craft innovative digital solutions
              that empower businesses to thrive."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            {[
              {
                icon: <HiPhone className="text-pink-500 w-6 h-6" />,
                label: "Phone",
                info: "+91 629 727 5903",
              },
              {
                icon: <HiMail className="text-pink-500 w-6 h-6" />,
                label: "Email",
                info: "support@mediabuzzconsultech.com",
              },
              {
                icon: <HiLocationMarker className="text-pink-500 w-6 h-6" />,
                label: "Location",
                info: "Kolkata, West Bengal",
              },
            ].map(({ icon, label, info }, index) => (
              <div key={index} className="flex items-center space-x-3 mb-4">
                {icon}
                <div>
                  <div className="font-medium text-gray-300">{label}</div>
                  <p className="text-sm text-gray-400">{info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg text-white mb-3">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>HTML Designer</li>
              <li>WordPress Developer</li>
              <li>Framework Developer</li>
              <li>Full-Stack Developer</li>
              <li>Node.js</li>
            </ul>
          </div>

          {/* Our Team Section */}
          <div className="text-center md:text-left bg-gray-900 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-yellow-500 mb-3 pb-2 border-b border-gray-700">
              Our Team
            </h2>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-300">Proprietor:</span>
                <span>Pallabi Mukherjee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-300">
                  Chief Programmer:
                </span>
                <span>Devashish Dey</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-300">
                  Tax & Service's Partner:
                </span>
                <span>Sayan Gosh</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>
            © 2025 Abroad is Powered by
            <a href="#" className="text-pink-500 hover:underline">
              {" "}
              Media Buzz Consultech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
