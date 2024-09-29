import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaRocket,
  FaHandsHelping,
  FaBrain,
  FaClipboardCheck,
  FaBookOpen,
  FaSmileBeam,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Rohit Goyal",
    role: "CEO",
    imageUrl: "/Rohit-Goyal.jpg",
  },
  {
    name: "Richa Chavda",
    role: "Manager",
    imageUrl: "/Richa-Chavda.jpg",
  },
  {
    name: "Dakshi Narang",
    role: "Bookkeeper",
    imageUrl: "/Dakshi-Narang.jpg",
  },
  {
    name: "Navi Sonkar",
    role: "Senior Accountant",
    imageUrl: "/Navi-Sonkar.jpg",
  },
  {
    name: "Ritika Jain",
    role: "Director of Bookkeeping and Audit Operations",
    imageUrl: "/Ritika-Jain.jpg",
  },
  {
    name: "Kajal Sonkar",
    role: "Bookkeeper",
    imageUrl: "/Kajal-Sonkar.jpg",
  },
];

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">
            Empowering Businesses
          </h2>
          <p className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            We help businesses thrive
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Since 2017, we’ve been helping businesses manage their finances,
            streamline processes, and provide strategic guidance for growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 text-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              2017
            </p>
            <p className="text-gray-600">Business founded</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              10
            </p>
            <p className="text-gray-600">People in the team</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              50+
            </p>
            <p className="text-gray-600">Clients served</p>
          </div>
          <div className="hidden lg:flex flex-col items-center">
            {/* This additional block will appear only on large screens */}
            <p className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              100%
            </p>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">
            Our values
          </h2>
          <p className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
            Our core principles
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We adhere to values that guide us every day, ensuring we provide the
            best service for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 text-left">
          <div className="flex items-start space-x-4">
            <FaRocket className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Be world-class
              </h3>
              <p className="mt-2 text-gray-600">
                We strive to deliver the highest quality services and solutions
                for our clients, setting global standards.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaHandsHelping className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Be supportive
              </h3>
              <p className="mt-2 text-gray-600">
                We create a supportive environment for our clients and team
                members, ensuring everyone thrives together.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaClipboardCheck className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Take responsibility
              </h3>
              <p className="mt-2 text-gray-600">
                We take full responsibility for our actions and decisions,
                ensuring transparency and accountability in every project.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaBrain className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Always learning
              </h3>
              <p className="mt-2 text-gray-600">
                Continuous improvement is key to success. We are always learning
                to keep pace with the evolving needs of our clients.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaBookOpen className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Share everything you know
              </h3>
              <p className="mt-2 text-gray-600">
                Knowledge is meant to be shared. We believe in open
                communication and sharing expertise with our clients and team.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaSmileBeam className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Enjoy downtime
              </h3>
              <p className="mt-2 text-gray-600">
                We encourage a balanced work-life approach, helping everyone
                recharge and stay motivated.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">
            Our team
          </h2>
          <p className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
            Meet the experts behind our success
          </p>
        </div>

        {/* Team Members */}
        <div ref={ref}>
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.75 + index * 0.2 }}
              >
                <img
                  className="h-24 sm:h-32 w-24 sm:w-32 rounded-full object-cover border border-gray-300"
                  src={member.imageUrl}
                  alt={member.name}
                />
                <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
