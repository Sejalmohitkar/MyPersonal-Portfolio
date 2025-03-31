import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className=" max-w-7xl mx-auto px-4 lg:px-8 text-center py-10">
        <h2 className="text-4xl font-bold text-white">
          Contact
          <span
            className="text-purple-500 mx-2" 
          >
            Me
          </span>
        </h2>
        <p className="text-slate-400 mt-4">
        Have a project in mind or just want to say hello? Feel free to reach out!  
        Let's collaborate and build something amazing together.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className=" bg-purple-500 p-4 rounded-full">
              <FaPhone className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Call Me</p>
              <p className="text-white">+91 7498161645</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className=" bg-purple-500 p-4 rounded-full">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-purple-500">Email</p>
              <p className="text-white">sejalmohitkar2002@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
          <div className=" bg-purple-500 p-4 rounded-full">
            <FaMapMarkerAlt className="text-white w-6 h-6"/>
          </div>
          <div>
            <p className="text-lg font-medium text-purple-500">Address</p>
            <p className="text-white">Satgaon, Buttibori, Nagpur</p>
          </div>
        </div>
        </div>

        <form className="space-y-4 text-white"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" 
                 className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                />
                <input type="email" placeholder="Your Email"
                 className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone Number" 
                 className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
                />
            </div>
            <textarea placeholder="Message"
             className="border border-purple-500 bg-gray-900 p-4 rounded-md w-full"
            ></textarea>
            <button type="submit"
             className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200"
            >Submit Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
