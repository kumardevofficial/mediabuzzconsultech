import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Logo"
                className="w-12 h-12 mr-2"
              />
              <div>
                <h1 className="text-xl font-bold">ABROAD</h1>
                <p className="text-sm">TOURISTS WITH AID</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              We assist you with your visa and immigration process and coaching.
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
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-pink-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26c.6.4 1.35.4 1.95 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z"
                />
              </svg>
              <span>Phone</span>
            </div>
            <p className="text-sm">(+44) 123 456 789</p>
            <div className="flex items-center space-x-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-pink-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12v2m0 4h.01M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6m-7 4h.01M9 12h.01"
                />
              </svg>
              <span>Email</span>
            </div>
            <p className="text-sm">info@yourdomain.com</p>
            <div className="flex items-center space-x-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-pink-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c2.5 0 4.5-2 4.5-4.5S14.5 2 12 2 7.5 4 7.5 6.5 9.5 11 12 11zm0 0c-2.5 0-4.5 2-4.5 4.5S9.5 20 12 20s4.5-2 4.5-4.5-2-4.5-4.5-4.5z"
                />
              </svg>
              <span>Location</span>
            </div>
            <p className="text-sm">66 Guild Street 512B, Great NT</p>
          </div>

          {/* Coaching */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Coaching</h3>
            <ul className="space-y-2">
              <li>TOEFL Classes</li>
              <li>Qualification Exam</li>
              <li>PTE Coaching</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
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
            </form>
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
