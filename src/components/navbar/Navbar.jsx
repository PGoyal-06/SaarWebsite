import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for hamburger and close menu

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else if (location.pathname === "/") {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 100);
    }
  }, [location]);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed w-full z-50 flex items-center justify-between p-4 lg:px-8 transition-colors duration-500 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Company Logo" className="h-10" />
          <h1
            className={`font-semibold text-lg ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            SAAR Consultants
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {["/", "/about", "/services", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`text-lg font-medium relative ${
                isScrolled ? "text-gray-700" : "text-white"
              } hover:text-blue-500 hover:scale-105 transition-transform duration-200`}
            >
              <b>{path === "/" ? "Home" : path.substring(1)}</b>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`${
              isScrolled ? "text-gray-900" : "text-white"
            } focus:outline-none`}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenu className="w-8 h-8" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-6 text-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {["/", "/about", "/services", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when a link is clicked
              className="text-2xl font-semibold hover:text-blue-500 transition duration-300"
            >
              {path === "/" ? "Home" : path.substring(1)}
            </Link>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
