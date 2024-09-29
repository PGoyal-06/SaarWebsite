import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/home.jpg')` }}
    >
      <Navbar /> {/* Include the Navbar component */}
      {/* Reduced opacity for the overlay to make the background image more visible */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          SAAR Professionals Consultants Inc.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white text-center max-w-2xl">
          Welcome to our accounting firm, where your financial success is our
          top priority. We offer a wide range of services tailored to meet your
          unique business needs. Let us help you streamline your accounting
          processes, improve your financial reporting, and drive your business
          growth.
        </p>
        <div className="mt-8 flex space-x-4">
          <motion.div
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link to="/contact">
              <b>Get started</b>
            </Link>
          </motion.div>
          <motion.div
            className="flex items-center text-white hover:text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link
              to="/services"
              className="flex items-center text-white hover:text-gray-300"
            >
              <b>Learn more</b>
              <ArrowRightIcon className="h-5 w-5 ml-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
