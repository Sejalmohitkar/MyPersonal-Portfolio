import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-40 text-white border-t-2 border-purple-500 p-5">
      {/* Main Container */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <p className="text-sm sm:text-base">© 2025. All Rights Reserved</p>
        
        {/* Name */}
        <p className="text-sm sm:text-base font-semibold">Sejal Mohitkar</p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://github.com/Sejalmohitkar" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition duration-300">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sejal-mohitkar/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition duration-300">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition duration-300">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
