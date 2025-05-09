import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/ai_02.png';
import '@fortawesome/fontawesome-free/css/all.css';
import '../assets/css/header.css';

const DesktopHeader = () => {
  const [appLink, setAppLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // New function to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  const [appLinks, setAppLinks] = useState({
    email: null,
    address: null,
    phone: null,
  });

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    let emailApp, addressApp, phoneApp;

    if (/iphone|ipad|ipod/.test(userAgent)) {
      emailApp = { name: "Apple Mail", url: "mailto:ken@aligninnovations.com.au" };
      addressApp = {
        name: "Apple Maps",
        url: "maps://maps.apple.com/?q=470 St Kilda Rd, Melbourne VIC 3004, Australia",
      };
      phoneApp = { name: "FaceTime", url: "facetime:+1973XXXXXXX" };
    } else if (/android/.test(userAgent)) {
      emailApp = { name: "Gmail", url: "mailto:ken@aligninnovations.com.au" };
      addressApp = {
        name: "Google Maps",
        url: "geo:0,0?q=470 St Kilda Rd, Melbourne VIC 3004, Australia",
      };
      phoneApp = { name: "WhatsApp", url: "https://wa.me/1973XXXXXXX" };
    } else if (/mac/.test(userAgent)) {
      emailApp = { name: "Apple Mail", url: "mailto:ken@aligninnovations.com.au" };
      addressApp = {
        name: "Apple Maps",
        url: "https://maps.apple.com/?q=470 St Kilda Rd, Melbourne VIC 3004, Australia",
      };
      phoneApp = { name: "FaceTime", url: "facetime:+1973XXXXXXX" };
    } else if (/win/.test(userAgent)) {
      emailApp = { name: "Outlook", url: "mailto:ken@aligninnovations.com.au" };
      addressApp = {
        name: "Google Maps",
        url: "https://www.google.com/maps?q=470 St Kilda Rd, Melbourne VIC 3004, Australia",
      };
      phoneApp = { name: "Skype", url: "skype:+1973XXXXXXX?call" };
    }

    setAppLinks({ email: emailApp, address: addressApp, phone: phoneApp });
  }, []);

  return (
    <header className="w-full shadow-md bg-white">
      {/* Top Section */}
      <div className="bg-gray-800 px-4 py-2 flex justify-center md:justify-end items-center text-white">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <i className="fas fa-envelope text-yellow-400"></i>
          {appLinks.email ? (
            <a
              href={appLinks.email.url}
              className="text-sm md:text-base font-bold text-white hover:text-yellow-400"
            >
              ken@aligninnovations.com.au
            </a>
          ) : (
            <a
              href="mailto:ken@aligninnovations.com.au"
              className="text-sm md:text-base font-bold text-white hover:text-yellow-400"
            >
              ken@aligninnovations.com.au
            </a>
          )}
        </div>
        {/* Address */}
        <div className="flex items-center space-x-2">
          <i className="fas fa-map-marker-alt text-yellow-400"></i>
          {appLinks.address ? (
            <a
              href={appLinks.address.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-bold text-white hover:text-yellow-400"
            >
              470 St Kilda Rd,Melbourne VIC 3004, Australia
            </a>
          ) : (
            <a
              href="https://maps.app.goo.gl/NHFmUqd4YgPjcTp49"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-bold text-white hover:text-yellow-400"
            >
              470 St Kilda Rd,Melbourne VIC 3004, Australia
            </a>
          )}
        </div>
        {/* Phone */}
        <div className="flex items-center space-x-2">
          <i className="fas fa-phone-alt text-yellow-400"></i>
          {appLinks.phone ? (
            <a
              href={appLinks.phone.url}
              className="text-sm md:text-base font-bold text-white hover:text-yellow-400"
            >
              (973) 694-8100
            </a>
          ) : (
            <a
              href="tel:+1973XXXXXXX"
              className="text-sm md:text-base font-bold text-white hover:text-yellow-400"
            >
              (973) 694-8100
            </a>
          )}
        </div>
      </div>
    </div>

      {/* Main Section with Logo and Nav */}
      <div className="bg-gradient-to-r from-white-500 to-gray-900 p-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="w-2/5 md:w-1/5 lg:w-1/6">
          <img src={logo} alt="Kaplan Logo" className="w-full h-auto max-w-[200px]" />
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-md bg-black text-white hover:bg-gray-700 transition duration-300"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`md:flex md:space-x-6 items-center absolute md:relative w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          style={{ top: 'calc(100% + 0rem)', left: 0 }} // Adjust the position to align below the logo
        >
          <Link
            to="/"
            onClick={closeMenu} // Close menu on click
            className="block py-4 px-6 md:py-2 md:px-4 text-black hover:text-yellow-500 text-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={closeMenu} // Close menu on click
            className="block py-4 px-6 md:py-2 md:px-4 text-black hover:text-yellow-500 text-lg transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={closeMenu} // Close menu on click
            className="block py-4 px-6 md:py-2 md:px-4 text-black hover:text-yellow-500 text-lg transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu} // Close menu on click
            className="block py-4 px-6 md:py-2 md:px-4 text-black hover:text-yellow-500 text-lg transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default DesktopHeader;
