import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaHome,
  FaUserPlus,
  FaBox,
  FaTachometerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Desktop & Tablet Footer */}
      <div className="w-full bg-white border-t border-gray-300 mt-6 hidden sm:block">
        <div className="h-[1px] w-full bg-gray-400 mb-5"></div>

        <div className="w-full flex flex-wrap justify-center gap-4 px-4 mb-6">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm sm:text-lg font-semibold">
            <FaYoutube className="text-xl text-red-500" /> CrazzyHub
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm sm:text-lg font-semibold">
            <FaLinkedin className="text-xl text-blue-500" /> CrazzyHub
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm sm:text-lg font-semibold">
            <FaInstagram className="text-xl text-rose-500" /> CrazzyHub
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm sm:text-lg font-semibold">
            <FaFacebook className="text-xl text-blue-500" /> CrazzyHub
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm sm:text-lg font-semibold">
            <FaTwitter className="text-xl text-black" /> CrazzyHub
          </button>
        </div>

        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm sm:text-base pb-8">
          <div>
            <p className="font-semibold text-lg mb-2">Support</p>
            <p className="hover:underline cursor-pointer">Contact Us</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-2">Policies</p>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Return, Replacement & Refund</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-2">Know More</p>
            <p className="hover:underline cursor-pointer">About Us</p>
            <p className="hover:underline cursor-pointer">Our Stores</p>
            <p className="hover:underline cursor-pointer">Service Center</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-2">Contact Information (Head Office)</p>
            <p className="text-sm text-gray-600">
              Registered Office Address:<br />
              CRAZZYHUB RETAIL PVT. LTD,<br />
              SS-1281 Sector-H Ashiyana, LDA Colony,<br />
              Lucknow, 226012 Uttar Pradesh, India.<br />
              CIN - U52590UP2021PTC153464
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-400"></div>

        <div className="w-full text-center py-4 px-4 text-sm sm:text-base">
          <p>
            ©2023 CRAZZYHUB RETAIL PVT. LTD. All Rights Reserved | Designed by Amit.
          </p>
        </div>
      </div>

      {/* Mobile ke liye footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-inner z-50 sm:hidden">
        <div className="flex justify-around items-center py-2 text-xs">
          <Link to="/" className="flex flex-col items-center text-red-500">
            <FaHome className="text-lg" />
            <span>Home</span>
          </Link>
          <Link to="/signup" className="flex flex-col items-center text-blue-500">
            <FaUserPlus className="text-lg" />
            <span>Sign Up</span>
          </Link>
          <Link to="/products" className="flex flex-col items-center text-green-500">
            <FaBox className="text-lg" />
            <span>Products</span>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center text-purple-500">
            <FaTachometerAlt className="text-lg" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
