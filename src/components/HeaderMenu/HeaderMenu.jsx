import React, { useState } from "react";
import headerLogo from "../../assets/onlylogo.png";

const HeaderMenu = ({ pupUpToggle }) => {
  const { popupVisiblity, setPopupVisiblity } = pupUpToggle;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [websiteDesignOpen, setWebsiteDesignOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md py-3 m-auto md:mt-2 md:w-[98%] w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-x-3">
          <img src={headerLogo} alt="Logo" className=" h-10 rounded-full" />
          <div className="flex flex-col ">
            <div className="font-bold  text-yellow-600 text-center ">
              MEDIA BUZZ
            </div>
            <div className="m-[-5px] text-center">CONSULTECH</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-56 font-bold">
          <ul className="flex items-center space-x-10 text-xl relative">
            <li
              className="relative group"
              onMouseEnter={() => setWebsiteDesignOpen(true)}
              onMouseLeave={() => setWebsiteDesignOpen(false)}
            >
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                WEBSITE DESIGN
              </a>
              {websiteDesignOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md py-2 space-y-2 w-56 z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Static Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Startup Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Dynamic Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Corporate Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      CMS Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      CRM Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      E-Commerce Website Development
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                SERVICES
              </a>
              {servicesOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md py-2 space-y-2 w-56 z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      HTML Designer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Frontend Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Wordpress Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Framework Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      FullStack Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Node.js
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
                CONTACT US
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-pink-700"
              onClick={() => setPopupVisiblity(true)}
            >
              GET QUOTE
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
        <div className="md:hidden bg-white shadow-md py-4 px-4 rounded-xlt">
          <nav className="flex flex-col space-y-4">
            <div>
              <button
                className="w-full text-left text-sm text-gray-800 hover:text-pink-600"
                onClick={() => setWebsiteDesignOpen(!websiteDesignOpen)}
              >
                WEBSITE DESIGN
              </button>
              {websiteDesignOpen && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      Static Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      Startup Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      Dynamic Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      Corporate Website Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      CMS Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      CRM Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      E-Commerce Website Development
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <button
                className="w-full text-left text-sm text-gray-800 hover:text-pink-600"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                SERVICES
              </button>
              {servicesOpen && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      HTML Designer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      Frontend Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      Wordpress Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      Framework Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      FullStack Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-sm text-gray-800 hover:text-pink-600"
                    >
                      Node.js
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              PORTFOLIO
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              BLOG
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-pink-600">
              CONTACT US
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderMenu;
