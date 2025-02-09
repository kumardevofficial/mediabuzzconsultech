import React from "react";
import headerLogo from "../../assets/onlylogo.png";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-32">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src={headerLogo} alt="Logo" className="w-12 h-12 mr-2" />
              <div className="flex flex-col ">
                <div className="font-bold  text-yellow-600 text-center ">
                  MEDIA BUZZ
                </div>
                <div className="m-[-5px] text-center">CONSULTECH</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              "At Media Buzz Consultech, we craft innovative digital solutions
              that empower businesses to thrive."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 self-center">
            {[
              {
                icon: <HiPhone className="text-pink-500" />,
                label: "Phone",
                info: "(+00) 000 000 000",
              },
              {
                icon: <HiMail className="text-pink-500" />,
                label: "Email",
                info: "support@mediabuzzconsultech.com",
              },
              {
                icon: <HiLocationMarker className="text-pink-500" />,
                label: "Location",
                info: "Kolkata West Bengal",
              },
            ].map(({ icon, label, info }, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 flex-shrink-0">{icon}</div>
                <div>
                  <div className="font-medium">{label}</div>
                  <p className="text-sm">{info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coaching */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Services</h3>

            <ul className="space-y-2">
              <li> HTML Designer</li>
              <li>Wordpress Developer</li>
              <li>Framework Developer</li>
              <li>FullStack Developer</li>
              <li>Node.js</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            {/* <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Subscribe with us"
                className="px-4 py-2 rounded-md border border-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
              >
                SUBSCRIBE
              </button>
            </form> */}
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Footer Bottom */}
        <div className="text-center text-sm">
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
