import React from "react";
import { SiVorondesign } from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { FaAppStoreIos } from "react-icons/fa";

// Services Data
const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Craft stunning and responsive websites that captivate users and enhance user experience. I specialize in designing visually appealing, functional, and user-friendly websites tailored to your brand’s needs.",
    icon: <SiVorondesign className="text-4xl text-purple-500 mb-4" />,
  },
  {
    id: 2,
    title: "UI/UX",
    description:
      "Transform your ideas into visually stunning and intuitive digital experiences. I specialize in creating user-friendly interfaces that enhance usability, engagement, and satisfaction.",
    icon: <LuSquareCode className="text-4xl text-purple-500 mb-4" />,
  },
  {
    id: 3,
    title: "App Design",
    description:
      "Create sleek, high-performance mobile apps with an intuitive user experience. I specialize in designing seamless, user-friendly interfaces that enhance engagement and functionality across platforms.",
    icon: <FaAppStoreIos className="text-4xl text-purple-500 mb-4" />,
  },
];

function Services() {
  return (
    <div id="services" className="py-16 bg-[#0e0c1e] text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-8">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-start transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-900"
            >
              {service.icon}
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-white mb-4">{service.description}</p>
              <a href="#" className="text-purple-400 hover:underline">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
