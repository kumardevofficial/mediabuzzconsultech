import React, { useState } from "react";
import headerLogo from "../../assets/logo.png";

const HeaderMenu = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md py-3 m-auto md:mt-2 md:w-[98%] w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={headerLogo} alt="Logo" className=" h-10" />
          {/* <div className="ml-2">
            <h1 className="text-lg text-pink-600 font-bold">ABROAD</h1>
            <p className="text-xs text-gray-600">TOURISTS WITH AID</p>
          </div> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-56 font-bold ">
          <ul className="flex items-center space-x-10 text-xl">
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                PAGES
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                COACHING
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                CONTACT
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  fill="currentColor"
                  d="M21 20l-5.4-5.4a8.6 8.6 0 1 0-1.4 1.4L20 21zM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0z"
                />
              </svg>
            </button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
              FREE QUOTE
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              HOME
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              PAGES
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              SERVICES
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              COACHING
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              BLOG
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderMenu;
