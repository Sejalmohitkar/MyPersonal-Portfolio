import React from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px" },
    transition: {
      type: "spring",
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transiton: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const items = [
    { id: 1, text: "Home", path: "/"},
    { id: 2, text: "About", path: "/about"},
    { id: 3, text: "Services", path: "/services" },
    { id: 4, text: "Work", path: "/work" },
    { id: 5, text: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-5 px-5 "
      >
        <Link to="/">
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-white">Your</span>
          <span className="text-purple-500">Saf</span>
        </div>
        </Link>
        <div>
          <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
            {items.map(({ id, text, path }) => (
              <li key={id}>
              <Link to={path} className="hover:text-purple-500 duration-200">
                {text}
              </Link>
            </li>
            ))}
          </ul>
        </div>
        <a href="../assets/Sejal-Resume.pdf" className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full">
          Download CV
        </a>
      </motion.div>

      <div className="flex md:hidden justify-between">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variants}
            onClick={() => setMenu((prev) => !prev)}
            className="bg-white w-2/3 h-screen text-black fixed z-10"
          >
            <div className='"px-7 mx-7 py-6'>
              {menu ? <RxCross2 size={30} /> : <IoMenu size={30} />}
            </div>
            {menu && (
              <div className="flex flex-col justify-center items-center">
               <ul className="space-y-6 text-black text-lg">
                  {items.map(({ id, text, path }) => (
                    <li key={id} className="hover:text-purple-500 duration-200 cursor-pointer">
                      <Link to={path} onClick={() => setMenu(false)}>{text}</Link>
                    </li>
                  ))}
                </ul>
                <a className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-2 rounded-full">
                  Download CV
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        <Link to="/">
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-white">Your</span>
          <span className="text-purple-500">Saf</span>
        </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
