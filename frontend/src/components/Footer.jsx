import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e2f] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://nft-tailwind.preview.uideck.com/src/images/logo.svg"
              alt="logo"
              className="h-8"
            />
            <h1 className="text-2xl font-bold">NFT</h1>
          </div>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
            <a href="#"><FaYoutube className="hover:text-white" /></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About company</a></li>
            <li><a href="#" className="hover:text-white">Company services</a></li>
            <li><a href="#" className="hover:text-white">Job opportunities</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Client support</a></li>
            <li><a href="#" className="hover:text-white">Latest news</a></li>
            <li><a href="#" className="hover:text-white">Company Details</a></li>
            <li><a href="#" className="hover:text-white">Who we are</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Now</h3>
          <p className="text-gray-400 mb-4">Enter your email address for receiving valuable newsletters.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-l-md bg-transparent border border-gray-600 text-white focus:outline-none"
            />
            <button className="px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-md">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-500 text-sm">
        © Copyright 2025 - NFT, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
