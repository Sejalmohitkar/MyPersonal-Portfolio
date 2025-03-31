import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Contact from "./Contact";
import {Link} from "react-router-dom"

function Hero() {
  return (
    <>
    <div className="text-white py-10">
      <div className="">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        src={profile}
        sizes={20}
        alt=""
        className="mx-auto w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
      />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="container mx-auto text-center py-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4"
        >
          Web Developer
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-purple-500 "
          >
            Sejal Mohitkar from Nagpur
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-500 text-lg md-8"
        >
          Showcase your journey by crafting a personal portfolio
        </motion.p>
        <div className="flex justify-center space-x-4 mb-10 my-4">
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-400"
          >
            <Link to="/contact">
            Hire Me
            </Link>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-white border border-white px-6 py-3 rounded-full hover:border-purple-600"
          >
            <Link to="/about">
            My Story
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    </>
    
  );
}

export default Hero;
