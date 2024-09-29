import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-white-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link to="/" className="text-black-400 hover:text-blue-400">Home</Link>
          <Link to="/about" className="text-black-400 hover:text-blue-400">About</Link>
          <Link to="/services" className="text-black-400 hover:text-blue-400">Services</Link>
        </div>
        <div className="mt-8 text-center text-black-400">
          © 2024 <span className="text-blue-500">SAAR Professionals Consultants Inc.</span> All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
